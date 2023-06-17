---
title: Home-Lab Observability with OpenTelemetry
date: 2023-06-17
author: Heinrich Hartmann
location: Stemwede
style: markdown
tags: mon, post
url: /posts/home-lab-observability
backdrop: /posts/2023-06-10-home-lab/backdrop3.png
draft: false
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
  width: 52em;
}
.center {
    text-align: center;
    margin-top: 2em;
    margin-bottom: 2em;
}
h3 {
  border-bottom: 1px solid #eaecef;
  padding-bottom: 5px;
}
</style>

In this post, I will walk you through the Observability setup I am using form my home-lab.
The full infrastructure setup is explained in [this blog post](/posts/home-lab-2023/), and available on [GitHub](https://github.com/HeinrichHartmann/svc).
In this post, we will zone-in on the [observability configuration](https://github.com/HeinrichHartmann/svc/tree/master/services/monitoring) and tooling.

We will conduct this exercise top-down, and focus on the key questions
("Monitoring Objectives") we want to answer about our services in the order of
importance, and briefly comment on the implementation details and open-ends.

As you will see, the presented setup is highly over-engineered for the set purpose.
I use the Home Lab systems as a toy use-case to try out a variety of open-source technologies and vendor products.
At the end we discuss our learnings ad highlight some of the existing gaps in the ecosystem we experienced along the way.

**Outline**

{{% toc %}}

## Architecture evolves around the OpenTelemetry Collector

My home-lab setup consists of around 20 containerized services that are running
on a single host (NixOS/Systemd). Containers are managed with docker-compose.
Web services sit behind Traefik as ingress proxy which routes requests and
terminates TLS. More details can be found in this [blog post](/posts/home-lab-2023/).

The central hub of the telemetry collection setup is the [OpenTelemetry Collector](https://github.com/open-telemetry/opentelemetry-collector).

[OpenTelemetry](https://opentelemetry.io/) is a industry standard, that is bridging across a large number of vendors and open source tools and covers all three telemetry pillars (logs, metrics and traces).
The [OpenTelemetry Collector](https://github.com/open-telemetry/opentelemetry-collector-contrib/) is a general data-broker, that accepts telemetry from a large variety of sources (aka. [receivers](https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/receiver)) 
and is able to forward telemetry to a large variety of telemetry backend systems (see [exporters](https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/exporter)).

In [our configuration](https://github.com/HeinrichHartmann/svc/blob/master/services/monitoring/otel/otel-collector-config.yaml), the collector accepts metrics, logs and traces in various formats and exports telemetry data to three telemetry backends:

1. Self Hosted Backends - Consisting of Prometheus, Loki, Jaeger and Grafana services ([config](https://github.com/HeinrichHartmann/svc/blob/master/services/monitoring/docker-compose.yaml)).
2. [LightStep](https://lightstep.com/) - Free community account
3. [Grafana Cloud](https://lightstep.com/pricing) - Free trial account

The architecture is visualized in the following diagram:

{{< figure src="/posts/2023-06-10-home-lab/otel-arch.png" title="Telemetry Collection Architecture*" >}}

*) The metrics part of the architecture diagram is still aspirational, see comments below.

By putting the OTel collector in the center, we gain the flexibility to switch telemetry backends quickly.
For example, on-boarding LightStep as telemetry backend took only [four lines of configuration](https://github.com/HeinrichHartmann/svc/blob/master/services/monitoring/otel/otel-collector-config.yaml#L101-L105).
Without OpenTelemetry on-boarding a new vendor required to deploy new agents across all hosts and changes to configuration of all services.

**Self-Hosted vs. SaaS as Telemetry Backends.**
Key benefits of outsourcing telemetry backends include: 
(a) Telemetry systems remain accessible even when all self-hosted systems go down.
(b) Operating telemetry backends is already a quite complex tasks, that distracts you from operating the services that deliver direct value for your users.
I was happy to learn that both Grafana Cloud and LightStep accounts are fairly generous when it comes to usage quotas.
I know that more vendors offer similar free-tier services, and I plan to expand this experiment in the near future.

## Monitoring Objectives

### Service Availability with Synthetic Probing 

{{< center >}}**Question:** Are my services up right now?{{< /center >}}

![image](/posts/2023-06-10-home-lab/dbcd6446-b8af-4b8f-babe-cd803f3fb9d0.png)

This is probably the most important question any telemetry system has to answer.
Since my services rarely serve any requests, we can not rely on organic traffic to control availability. 
Instead we probe each HTTP API every 15 seconds, and see if I get back a 200 OK (or 401 Unauthorized) response. 
For other services (e.g. samba), I check that a TCP connection can be established.

**Implementation**

* Service endpoints are discovered form the local configuration with a [cron job](https://github.com/HeinrichHartmann/svc/blob/master/services/monitoring/Makefile#L4-L11) that 
  scans docker-compose and keeps [a config file](https://github.com/HeinrichHartmann/svc/blob/master/services/monitoring/otel/pinghosts.yaml) up to date.
* Prometheus + Blackbox exporter are used to probe all the APIs listed in the file.
* Grafana "State Timeline" panel is used for the final visualization.

**Open Ends**
- Prometheus metrics actually do not go through the OTel collector at the moment.
  Surprisingly there is no good way to send metric data from Prometheus scrapers to an OTel Collector.
  Instead, the official solution is to collect the metrics directly with the OTel collector.

- Deploy a second probing location to get a look from the outside. 
  As all services are only exposed on a trusted network (VPN, LAN) we can't use SaaS tools for this, 
  but need to deploy another Prometheus instance on the network.

### Host Availability with Node Exporter

{{< center >}}**Question:** Is the host system running?{{< /center >}}

![image](/posts/2023-06-10-home-lab/uptime.png)

The system we are monitoring has a single point of failure: THE host, where everything is running ("pve").
This simple panel shows the total uptime of the host, together with a bar plot that makes restart, and gaps in data collection easy to spot.

**Implementation**

- We use the Prometheus Node Exporter to collect uptime statistics ([config](https://github.com/HeinrichHartmann/svc/blob/master/nixos/etc/svc-configuration.nix#L56-L64)).
- Visualization uses a "State Timeline" Grafana Panel.

### Network Connectivity with Blackbox Exporter

{{< center >}} **Question:** Is the internet connection working? {{< /center >}}

![image](/posts/2023-06-10-home-lab/network-connectivity.png)

A machine that is "up" is only useful if it's available on the network.
We keep track of local connectivity by probing the local router, and public DNS servers on the internet every minute.

**Implementation**

- Network connectivity is monitored with the blackbox-exporter that sends ICMP "pings" to the respective hosts ([config](https://github.com/HeinrichHartmann/svc/blob/master/services/monitoring/prometheus/prometheus.yml#L80)).
- Visualization uses a "State Timeline" Grafana Panel.

### Container Logs with Loki

{{< center >}}**Question:** Are there any errors in the container logs?{{< /center >}}

![image](/posts/2023-06-10-home-lab/logs.png)

The panel on the top shows the total log volume across all containers.
The middle panel breaks the log volume down per container.
The listing below the graph, shows the actual logs.

**Implementation**

* Logs are exported by the docker daemon using the [fluentd log driver](https://docs.docker.com/config/containers/logging/fluentd/) as configured [here](https://github.com/HeinrichHartmann/svc/blob/master/nixos/etc/configuration.nix#L68-L73)
* The OTel collector has a [fluentd receiver](https://github.com/HeinrichHartmann/svc/blob/master/services/monitoring/otel/otel-collector-config.yaml#L23C24-L25) configured and forwards this logs to Loki
* Loki is used for storage and retrieval of logs

**Findings.**
Containers should not be emit many logs during normal operations.
There may be some logs for life-cycle events (restart), or periodic cleanup tasks.
The color coding reflects this ideal. 
A few containers are logging more than 10 log lines per minute, this is indicative of a problem or misconfiguration and should be investigated.

**Open Ends**

- A Live trail function is missing.

### RED Metrics via Tracing

{{< center >}}**Question:** How many requests is the application serving?{{< /center >}}

More specifically, we care about: The request rate, the error rate and the duration of those requests.
These metrics are known as the 3 Golden Signals (there is a 4th one: saturation) or "RED" Monitoring.

![image](/posts/2023-06-10-home-lab/red.png)

**Implementation**

* We are collecting tracing data from the ingress proxy traefik ([config](https://github.com/HeinrichHartmann/svc/blob/master/services/traefik/traefik.toml#L46)).
* Data is received by a Jaeger receiver of the OTel collector ([config](https://github.com/HeinrichHartmann/svc/blob/master/services/monitoring/otel/otel-collector-config.yaml)) and forward to tracing backends.
* The screenshot above is taken from the LightStep UI ("Key Operations").
  LightStep provides this functionality out of the box, without any further configuration.

**Open Ends**

* Integrate RED-metrics into the main Grafana dashboard.
  Sadly, the Jaeger tracking backend does not have the ability to calculate RED metrics form the stored spans on the fly.
  Alternative approaches include:
  - Using the Grafana Tempo Tracing backend, which  supports [TraceQL](https://grafana.com/docs/tempo/latest/traceql/). 
  - Use the OpenTelemetry collector to generate RED metrics in transit with the [SpanMetrics Connector](https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/connector/spanmetricsconnector).


### Access Logs via Tracing

{{< center >}}**Questions:** Which exact requests is the application serving?{{< /center >}}

Which URLs are being called? Which HTTP methods are used? Which return-codes are returned?  ...

![image](/posts/2023-06-10-home-lab/ls-explorer.png)


**Implementation**

Traditionally this is solved by access logs.
With the advent of Tracing we have much more potent technologies at hand, that cover access logs as a special
case and avoid the cost and performance risks associated with indexing access logs in logging systems.

*   The screenshot above is taken from the LightStep UI using the Explorer function.

**Open Ends**

- Surprisingly, none of the open-source tracing backends that I tried (Jaeger,
  Tempo) seem to cater to the access log use-case. Ideally I would like to have
  a "Access Log Tail" widget on a Grafana Dashboards, that gives me a live view
  about what requests. The closest I was able to get to this, is the LightStep
  Explorer view I presented above. There are ways to convert traces to logs
  in-flight, but those are not straight forward and result in us storing access
  logs in the logging system.
- The LightStep UI does only allow to show a single additional attribute in the
  table (e.g. "URL" or "return code"), also we have to re-build this view every
  time we want to use it.
- It would be great to have access log information for TCP services (like samba) as well.
- Tracing could be much more powerful, than just providing access logs. 
  From the ~20 services I run internally only one (Grafana) provides internal spans about the interactions.


### Container Resources with cAdvisor

{{< center >}}**Question:** Which resources do the services utilize?{{< /center >}}

![image](/posts/2023-06-10-home-lab/container-resource-metrics.png)

**Implementation**

- We collect resource utilization data from cAdvisor and use a Grafana "Stat" Panel to visualize the data.

**Findings**

- The CPU utilization of cAdvisor is a constant offender.
  In an idle state, I don't want to have more than 1% CPU utilization, cAdvisor floats at ~4%.
  This is after applying the optimizations I found [on the internet](https://dev.to/cloudx/taming-cadvisors-high-cpu-usage-1nm5).

- CPU + Memory consumption of Jaeger needs to be investigated. 

### Host Resources with Node Exporter

![image](/posts/2023-06-10-home-lab/host-metrics.png)

**Implementation**
- This dashboard uses the Prometheus [Node Exporter](https://prometheus.io/docs/guides/node-exporter/), and the [Node Exporter Full](https://grafana.com/grafana/dashboards/12486-node-exporter-full/) dashboard.

**Open Ends**
- A few years ago, I engineered the [default System Dashboard](https://www.circonus.com/2017/08/system-monitoring-with-the-use-dashboard/) for Circonus. This dashboard embraces
  the [USE-Methodology](http://www.brendangregg.com/sysperfbook.html) by Brendan Gregg to keep an eye on all relevant resources.
  The existing Node Exporter dashboard focuses on utilization metrics, and misses out on saturation 
  and error metrics, that would be interesting in this contest.  

### System Logs with Fluentbit and Loki

{{< center >}}**Question** Are there any errors in the system logs?{{< /center >}}

While we strive to have all services containerized, there are inevitably some parts of the system,
that are better run outside of containers. Examples include the Linux kernel itself,
the docker daemon, Tailscale as well as data-collectors for the host: Node Exporter and Fluentbit.

![image](/posts/2023-06-10-home-lab/systemd-logs.png)

**Implementation**

* Logs are collected with Fluentbit running as Systemd service ([config](https://github.com/HeinrichHartmann/svc/blob/master/nixos/etc/svc-configuration.nix#L66-L77)).
  The remaining steps are similar to the container log dashboard. 

**Findings**

* Tailscale is a little chatty. This should be looked into.

### Network Monitoring with ICMP Probes

{{< center >}}**Question:** Which hosts are available on the network?{{< /center >}}

![image](/posts/2023-06-10-home-lab/hosts.png)

This panel, that shows the availability of all 256 IPs in my /24 LAN.
When debugging issues with gear deployed on the network (printers, routers, etc.) it bis
useful to know which devices have been available on the network at which points in time.

**Implementation**

- Prometheus blackbox-exporter/ICMP module is configured with a static list of all hosts in the network ([config](https://github.com/HeinrichHartmann/svc/blob/master/services/monitoring/prometheus/prometheus.yml#L110)).
- Visualization uses a Grafana "State Timeline" Panel.

**Open Ends**

- Sort the entries in the panel. (Who knows how to do this? Did not find a solution online.)

## Conclusion

Building out this home-lab observability setup, has been a great learning experience for me.
I deepened my knowledge of established technologies like Prometheus and Grafana, and got to play
with some newer tools, like the OpenTelemetry collector and LightStep.

One major take-away for me is, the great flexibility that the OpenTelemetry
collector is giving us for plumbing and evolving the telemetry setup. On-boarding
a new data-source, or a telemetry backend is a matter of minutes. This is
particularly interesting for trying out various SaaS backends or [database
technologies](https://www.heinrichhartmann.com/posts/tsdb/), and makes it possible to on-board specialized solutions for
more advanced use-cases (e.g. for anomaly detection on selected metrics). I
greatly enjoyed playing with free Grafana Cloud and LightStep accounts in this
controlled setting and plan on trying out other SaaS vendors as well.

I also ran into a number of gaps in the current setup, that I was not able to
close quite yet. These include getting access logs from traces into Grafana,
generating RED (rate, error, duration) metrics from traces, and forwarding 
metrics from Prometheus to the OTel collector.

# Comments

<script src="https://utteranc.es/client.js"
        repo="HeinrichHartmann/comments"
        issue-term="title"
        label="Comment"
        theme="github-light"
        crossorigin="anonymous"
        async>
</script>
