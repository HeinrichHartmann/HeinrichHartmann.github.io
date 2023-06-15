---
title: Home-Lab Observability with OpenTelemetry
date: 2023-06-14
author: Heinrich Hartmann
location: Boltenhagen
style: markdown
tags: mon, post
url: /posts/home-lab-observability
backdrop: /posts/2023-06-10-home-lab/backdrop3.png
draft: true
---

<style>
.admonition {
    padding: 0px 0px 0px 10pt;
    margin-bottom: 21px;
    border-left: 3px solid transparent;
}
.admonition .title {
    font-weight: bold;
    padding-bottom: 3pt;
    /* border: 1px solid; border-style: hidden hidden solid; */
}
.note {
    border-color: #9d9d9d;
}
.backdrop {
    opacity: 1.0;
}
main {
  width: 52em !important;
}
.center {
    text-align: center;
    margin-top: 2em;
    margin-bottom: 2em;
}
</style>

In this post, I will walk you through the Observability Setup I am using form my home-lab.
The full infrastructure setup is explained in [this blog post](/posts/home-lab-2023/), and available on [GitHub](https://github.com/HeinrichHartmann/svc).
In this post, we will zone-in on the Observability configuration and tooling, which is contained
in [this folder](https://github.com/HeinrichHartmann/svc/tree/master/services/monitoring).

We will conduct this exercise top-down, and focus on the key questions that we
want to answer about our services in the order of importance, and briefly
comment on the implementation details and open-ends.
For the full technical details the reader welcome to study the full configuration on GitHub.

As you will see, the presented setup is highly over-engineered for the set purpose - and a work-in-progress.
I use the Home Lab systems as a demo use case to try out a variety of open source technologies, and vendor products.
At the end we highlight some of the existing gaps in the ecosystem, we experienced along the way.

**Outline**

{{% toc %}}

## Architecture puts OpenTelemetry Collector in the center

As explained in my [Home Lab Infrastructure](/posts/home-lab-2023/) post, the services we are
monitoring are running on a single host (Linux/NixOS/Systemd), and are fully
containerized (using docker-compose).

The central hub of the setup is the [OpenTelemetry Collector](https://github.com/open-telemetry/opentelemetry-collector).

OpenTelemetry is a industry standard, that is bridging across a large number of vendors and open source tools and covers all three telemetry pillars (logs, metrics and traces).
The open telemetry collector is a general data-broker, that accepts telemetry from a large variety of sources (aka. [receivers](https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/receiver)) and is able to forward telemetry to a large variety of telemetry backend systems (see [exporters](https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/exporter)).


In [our configuration](https://github.com/HeinrichHartmann/svc/blob/master/services/monitoring/otel/otel-collector-config.yaml), the collector accepts metrics, logs and traces in various formats and exports telemetry data to three telmetry backends:

1. Self Hosted Backends - Consisting of Prometheus, Loki, Jaeger and Grafana services ([config](https://github.com/HeinrichHartmann/svc/blob/master/services/monitoring/docker-compose.yaml)).
2. [LightStep](https://lightstep.com/) - Free community account
3. [Grafana Cloud](https://lightstep.com/pricing) - Free trial account

The architecture is visualized in the following diagram:

{{< figure src="/posts/2023-06-10-home-lab/otel-arch.png" title="Telemetry Collection Architecture*" >}}

*) The metrics part of the architecture diagram is still aspirational, see comments below.

By putting the OTel collector in the center, we gain the flexibility to switch telemetry backends quickly.
For example, onboarding LightStep as telemetry backend took only [four lines of configuration](https://github.com/HeinrichHartmann/svc/blob/master/services/monitoring/otel/otel-collector-config.yaml#L101-L105).
Without OpenTelemetry onboarding a new vendor required to deploy new agents across all hosts and changes to configuration of all services.

**Self-Hosted vs. SaaS as Telemetry Backends.**
Key benefits of oursourcing telemetry backends include: 
(a) If the single host is unavailable, all telemetry becomes unavailable as well to troubleshoot the isssue. 
(b) Operating telemetry backends is already a quite complex tasks, that distracts you from operating the services that deliver direct value for your users.
I was happy to learn that both Grafana Cloud and LightStep accounts are fairly generous when it comes to usage quotas.
I know that more vendors offer similar free-tier services, and I plan to expand this experiment in the near future.

So far, most of this setup presented below is using self-hosted backend services.
However if cheap/free telemetry backends remain to be available in the long run, I do believe that out-sourcing the backend services is the better approach.

## Service Availability with Synthetic Probing 

{{< center >}}**Question:** Are my services up right now?{{< /center >}}

![image](/posts/2023-06-10-home-lab/dbcd6446-b8af-4b8f-babe-cd803f3fb9d0.png)

This is probably the most important question any telemetry system has to answer.
Since my services rarely serve any requests, we can not rely on organic traffic to control availability. 
Instead we probe each HTTP API every 15 seconds, and see if I get back a 200 OK (or 401 Unauthorized) response. 
For other services (e.g. samba), I check that a tcp connection can be established.

**Implementation**

* Services are discovered form the local configuration with a [small shell script](https://github.com/HeinrichHartmann/svc/blob/master/services/monitoring/Makefile#L4-L11) that scans my docker-compose files for load-balancer configuration. 
  The shell script is run every hour from cron, and keeps a file [pinghosts.yaml](https://github.com/HeinrichHartmann/svc/blob/master/services/monitoring/otel/pinghosts.yaml) up to date.
* Prometheus + Blackbox exporter are used to probe all the APIs.
* Grafana "State Timeline" panel is used for the final visualization.

**Open Ends**
- Prometheus metrics actually do not go through the OTel collector at the moment. 
- Deploy a second probing location to get a look from the outside. As all services are only exposed on a trusted network (VPN, LAN) we can't use SaaS tools for this, but need to deploy another Prometheus instance on the network.

## Host Availability with Node Exporter

{{< center >}}**Question:** Is the host system running?{{< /center >}}

![image](/posts/2023-06-10-home-lab/uptime.png)

The system we are monitoring has a single point of failure: THE host, where everything is running ("pve").
This simple panel shows the total uptime of the host, together with a bar plot that makes restart, and gaps in data collection easy to spot.

**Implementation**

- We use the Prometheus Node Exporter to collect uptime statistics ([config](https://github.com/HeinrichHartmann/svc/blob/master/nixos/etc/svc-configuration.nix#L56-L64)).
- Visualization uses a "State Timeline" Grafana Panel.

## Network Connectivity with BlackBox Exporter

{{< center >}} **Question:** Is the internet connection working? {{< /center >}}

![image](/posts/2023-06-10-home-lab/network-connectivity.png)

A machine that is "up" is only useful if it's available on the network.
We keep track of local connectivity by probing the local router, and public DNS servers on the internet every minute.

**Implementation**

- Network connectivity is monitored with the blackbox-exporter that sends ICMP pings to the respective hosts ([config](https://github.com/HeinrichHartmann/svc/blob/master/services/monitoring/prometheus/prometheus.yml#L80)).
- Visualization uses a "State Timeline" Grafana Panel.

## Container Logs with Loki

{{< center >}}**Question:** Are there any errors in the container logs?{{< /center >}}

![image](/posts/2023-06-10-home-lab/logs.png)

The panel on the top shows the total log volume across all containers.
The midlle panel breaks the log volume down per container.
The listing below the graph, shows the actual logs.

**Implementation**

* Logs are exported by the docker daemon using the [fluentd log driver](https://docs.docker.com/config/containers/logging/fluentd/) as configured [here](https://github.com/HeinrichHartmann/svc/blob/master/nixos/etc/configuration.nix#L68-L73)
* The OTel collector has a [fluentd receiver](https://github.com/HeinrichHartmann/svc/blob/master/services/monitoring/otel/otel-collector-config.yaml#L23C24-L25) configured and forwards this logs to Loki
* Loki is used for storage and retrieval of logs

**Findings.**
Containers should not be emit many logs during normal operations.
There may be some logs for lifecycle events (restart), or periodic cleanup tasks.
The color coding reflects this ideal. 
A few containers are logging more than 10 log lines per minute, this is indicative of a problem or misconfiguration and should be investigated.

**Open Ends**

- A Live trail function is missing.

## RED Metrics via Tracing

{{< center >}}**Question:** How many requests is the application serving?{{< /center >}}

![image](/posts/2023-06-10-home-lab/red.png)

The next piece in our observability journey, is to gain information about which requests have been made to HTTP apis.
More specifically, we care about: The request rate, the error rate and the duration of those requests.
These metrics are known as the 3 Golden Signals (there is a 4th one: saturation) or "RED" Monitoring.

**Implementation**

* We are collecting tracing data from the ingress proxy traefik ([config](https://github.com/HeinrichHartmann/svc/blob/master/services/traefik/traefik.toml#L46)).
* Data is received by a jaeger receiver of the OTel collector ([config](https://github.com/HeinrichHartmann/svc/blob/master/services/monitoring/otel/otel-collector-config.yaml)) and forward to tracing backends.
* The screenshot above is taken from the LightStep UI ("Key Operations").
  LightStep provides this functionality out of the box, without any further configuration.

**Open Ends**

* Integrate RED-metrics into the main Grafana dashboard.
  Sadly, the Jaeger tracking backend does not have the ability to calculate RED metrics form the stored spans on the fly.
  Alternative approaches include:
  - Using the Grafana Tempo Tracing backend, which  supports [TraceQL](https://grafana.com/docs/tempo/latest/traceql/). 
  - Use the OpenTelemetry collector to generate RED metrics in transit with the [SpanMetrics Connector](https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/connector/spanmetricsconnector).


## Access Logs via Tracing

{{< center >}}**Questions:** Which exact requests is the application serving?{{< /center >}}

Which URLs are being called? Which HTTP methods are used? Which return-codes are returned?  ...

![image](/posts/2023-06-10-home-lab/ls-explorer.png)


**Implementation**

Traditionally this is solved by access logs.
With the advent of Tracing we have much more potent technologies at hand, that cover access logs as a special
case and avoid the cost and performance risks associated with indexing access logs in logging systems.

*   The screenshot above is taken from the LightStep UI using the Explorer function.

**Open Ends**

- Surprisingly, none of the open-source tracing backends that I tried seem to cater to the access log use-case.
- The LightStep UI does only allow to show a single additional attribute in the
  table (e.g. "URL" or "return code"), also we have to re-build this view every
  time we want to use it.
- It would be great to have access log information for tcp services (like samba) as well.
- Tracing could be much more powerful, than just providing access logs. 
  From the ~20 services I run internally only one (Grafana) provices internal spans about the interactions.

## Container Resources with cAdvisor

{{< center >}}**Question:** Which resources do the services utilize?{{< /center >}}

![image](/posts/2023-06-10-home-lab/container-resource-metrics.png)

**Implementation**

- We collect resource utilization data from cAdvisor and use a Grafana "Stat" Panel to visualize the data.

**Findings**

- The CPU utilization of cAdvisor is a constant offender.
  In an idle state, I don't want to have more than 1% CPU utilization, cAdvisor floats at ~4%.
  This is after applying the optimizations I found [on the internet](https://dev.to/cloudx/taming-cadvisors-high-cpu-usage-1nm5).

- CPU + Memory consumption of Jaeger needs to be investigated. 

## Host Resources with Node Exporter

![image](/posts/2023-06-10-home-lab/host-metrics.png)

**Implementation**
- This dashboard uses the Prometheus [Node Exporter](https://prometheus.io/docs/guides/node-exporter/), and the [Node Exporter Full](https://grafana.com/grafana/dashboards/12486-node-exporter-full/) dashboard.

**Open Ends**
- A few years ago, I engineerd the [default System Dashboard](https://www.circonus.com/2017/08/system-monitoring-with-the-use-dashboard/) for Circonus. This dashboard embraces
  the [USE-Methodology](http://www.brendangregg.com/sysperfbook.html) by Brendan Gregg to keep an eye on all relevant resources.
  The existing Node Exporter dashboard focuses on utilization metrics, and misses out on saturation 
  and error metrics, that would be interesting in this contest.  

## System Logs with Fulentbit and Loki

{{< center >}}**Question** Are there any errors in the system logs?{{< /center >}}

While we strive to have all services containerized, there are inevitably some parts of the system,
that are better run outside of containers. Examples include the Linux kernel itself (Hardware Issues),
the docker daemon, tailscale as well as data-collectors for the host: Node Exporter and Fluentbit.

![image](/posts/2023-06-10-home-lab/systemd-logs.png)

**Implementation**

* Logs are collected with fluentbit runnig as Systemd service ([config](https://github.com/HeinrichHartmann/svc/blob/master/nixos/etc/svc-configuration.nix#L66-L77)).
  The remaining steps are taken mutatis-mutandis from the Container Log dashboard. 

**Findings**

* Tailscale is a little chatty. This should be looked into.

## Network Monitoring with ICMP Probes

{{< center >}}**Question:** Which hosts are available on the network?{{< /center >}}

![image](/posts/2023-06-10-home-lab/hosts.png)

This panel, that shows the availability of all 256 IPs in my /24 LAN.
When debugging issues with gear deployed on the network (printers, routers) or DHCP, it is
useful to know which devices have been available on the network at which points in time.

**Implementation**

- Prometheus blackbox-exporter is configured with a static list of all hosts in the network ([config](https://github.com/HeinrichHartmann/svc/blob/master/services/monitoring/prometheus/prometheus.yml#L110)).
- Visualization uses a Grafana "State Timeline" Panel.

**Open Ends**

- Sort the entries in the panel. (Who knows how to do this? Did not find a solution online.)
- Visualize historic values.

## Gaps

**(1) List Active Operations.** 
The current observability tooling does not allow to answer the question: What is the system doing, right now?
One possible answer to this question are stack traces from the live process (pstack).
A better answer, would be a list of "active operations" i.e. open spans, that the process holds in-memory.
Tracing libraries have information about which operations are currently ongoing available, but I don't see any tooling that exposes this information.

Examples where this has been done include (1) [otel-collector/zpages](https://github.com/open-telemetry/opentelemetry-specification/blob/main/experimental/trace/zpages.md#tracez) has information of running traces, 
(2) [pg_stats_activity](https://www.postgresql.org/docs/current/monitoring-stats.html#MONITORING-PG-STAT-ACTIVITY-VIEW) (3) [Circonus IRONdb](https://www.heinrichhartmann.com/posts/crash/#salvaging-active-http-requests) HTTP Observer / Crash Reporter.

**(2) Generate Access Logs from Traces.**
The tracing back-ends I have tried do not seem to cater towards the access logs use-case particularly well. 
Ideally I would like to have a "Access Log Tail" widget on a Grafana Dashboards, that gives me a live view about what requests are being served. 
The closest I was able to get to this, is the LightStep Explorer view I presented above.
The best approach with open source tooling 

**(3) Forward Metric data from Prometheus to OTel Collector.**
Surprisingly there is no good way to send Prometheus data to an OTel Collector. 
The official way seems to be to scrape metrics directly from the OTel collector, with a builtin prometheus receiver module. 
However, I do have working Prometheus setup, and copying the config 1o1 did not work on the spot. 
Given that Prometheus supports [remote write](https://grafana.com/docs/grafana-cloud/kubernetes-monitoring/other-methods/prometheus/remote_write_operator/) developing the corresponding receiver should be a relatively straight forward project.

# Comments

<script src="https://utteranc.es/client.js"
        repo="HeinrichHartmann/comments"
        issue-term="title"
        label="Comment"
        theme="github-light"
        crossorigin="anonymous"
        async>
</script>
