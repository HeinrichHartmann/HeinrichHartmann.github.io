---
title: Home Lab Setup
date: 2023-06-10
author: Heinrich Hartmann
location: Boltenhagen
style: markdown
tags: mon, post
url: /posts/home-lab-2023
Draft: false
---

<style>
.admonition {
    padding: 15px;
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
    background-color: #f2f2f2;
}
</style>

I have recently published the full configuration of my home-lab setup on [GitHub](https://github.com/HeinrichHartmann/svc).
In this post, I will give you a brief overview about the setup.

**Goals**
* Quick on-boarding of containerized services.
* Family members can use the services on any of their devices.
* No fiddling with IPs and Port names. Services have their own DNS names.
* Stored data is backed-up safely.

We realize all those goals, with the following technologies:

* Services are on-boarded by creating a directory with a `docker-compose.yaml` and a `Makefile`
* Access to services is gated on the network level. Only trusted individuals have access to the LAN and the VPN.
   Additionally BasicAuth can be added to all web-services with an extra line of configuration.
* Global DNS settings, hosted on AWS configured with Terraform
  - Services are available under `$service.heinrichhartmann.net` on tailscale VPN.
  - Services are available under `$service.lan.heinrichhartmann.net` on the LAN.
  - All web services are secured using https via Letsencrypt.
* Data is stored ZFS on a pair of mirrored HDDs and backed up to [backblaze](https://www.backblaze.com/) every night.

The published setup is not intended to be 100% re-usable on the spot. I share this as inspiration for others, that want to get a similar setup going. Also I invite you to provide feedback to me on how to improve.

**Outline**

{{< toc >}}


## Host Configuration with NixOS

All services are hosted on a single machine.
This configuration is designed to work in different environments including RPI and Linux Desktop machines, but the main server is running NixOS.

NixOS allows the machine to be configured descriptively with a small number of [config files](https://github.com/HeinrichHartmann/svc/tree/master/nixos).
This avoids the need for any bare-metal provisioning tools like Ansible.
Moving the setup to a new host is a matter of copying the config files to `/etc/nixos/` and running `nixos-rebuild`.

We use the nix configuration to manage networking, and install a small number of global packages including docker.
We also include some basic [systemd services](https://github.com/HeinrichHartmann/svc/blob/master/nixos/etc/svc-configuration.nix) that trigger startup and shutdown scripts, as well as a cron target that is executed hourly for maintenance tasks.

**Learning**  Systemd services are very quick to setup on NixOS.
<details>

Here is an example config from for promtail:
```
  systemd.services.promtail = {
    description = "Promtail service for Loki";
    wantedBy = [ "multi-user.target" ];
    serviceConfig = {
      ExecStart =  "${pkgs.grafana-loki}/bin/promtail --config.file ${./promtail.yaml}";
    };
  };
```

* Executables are referenced with their package location `${pkgs.grafana-loki}/bin/promtail`, and automatically made available in the environment.
* Config files are referenced from a relative path `${./promtail.yaml}` and installed into the `/nix` tree once the configuration is activated (`nixos-rebuild`).

</details>

## Secret Management with Git-Crypt

Secret management is the first problem that needs to be addressed before we can configure any services.
We choose to keep secrets inside the repository using [git-crypt](https://github.com/AGWA/git-crypt).

The trust model works as follows:

1. On a new host, generate GPG keys and add the public key to the repository, then push to GitHub.
2. On an already trusted host, pull in the public keys and mark them as trusted, then push.
3. On the new host, pull latest version. It now has access to the secrets.

Thee steps are automated with a few small scripts. See [/crypt/README.md](https://github.com/HeinrichHartmann/svc/tree/master/crypt/README.md) for more details.

**Open ends**

- There is no way to revoke keys for the repository at this point in time.

## DNS via AWS and Terraform

The configuration now relies on AWS services for [DNS](https://us-east-1.console.aws.amazon.com/route53/v2/hostedzones#ListRecordSets/Z01776191I9YNA03Q8DIE).

All required AWS configuration is managed using terraform located in `/infra/aws`.

- DNS records for `*.heinrichhartmann.net` point to the server node inside the tailscale network.
- DNS records for `*.lan.heinrichhartmann.net` point to the server node inside the local netowrk.

**Learnings.** Earlier version of this repository had self-hosted DHCP, DNS and
PKI (Private Key Infrastructure for https certificates) included in the config.
This has the obvious drawback that all clients have to install a self-signed
certificate. But even once this is done, there are more difficulties caused by
various clients decided to ignore the DHCP provided DNS services and/or ignore
the root certificates installed by the OS. Repeated offenders were Firefox,
Firefox on Android, Safari on iPhone.

At some point I stopped trying and accepted the fact, that I will be using an
external service for DNS and PKI.

## Certificates with Let's Encrypt

Certificates are generated by [Let's Encrypt](https://letsencrypt.org/) and use DNS authentification faciliated by AWS.
Generated certificates are stored under `/svc/var`.

Reneawal is performed using `make certs` from `/svc` and triggered every week via cron.

## Ingress Proxy with Traefik

Our main host only has a sinlg IP address on each network.
To route requests to the correct backend, we use an ingerss proxy that routes
requests based on the HTTP HOST header.

We use [Traefik](https://traefik.io/) for this purpose.

In addition to routing request, traefik terminates HTTPS for us, and provides an optional authentification layer (BasicAuth).
Service discovery is dynamic, and configured using labels associated to docker containers.

Example:
```yaml
   labels:
      - "traefik.enable=true"
      - "traefik.http.routers.books.rule=HostRegexp(`books.{domain:.*}`)"
      - "traefik.http.routers.books.entrypoints=https"
      - "traefik.http.routers.books.tls=true"
```

**Learnings.** Prior iterations used Nginx and HAProxy as for routing requests.
I found these solutions harder to maintain, as they required to keep the config files in sync, and the syntax (in particular of HAProxy) was hard to manage.
Traefik offers a good out-of-the box experiences for the standard use-cases.
Debugging of the docker labels is sometimes a little bit tedious, as there is no linting or syntax checking.

**Open ends.** 
- I would really like to have OAuth in front of all my services, so I can safely connect and give others the ability to connect without manually managing passwords. Unfortunately the Traefik OAuth plugin is proprietary, and they don't have pricing information on thier page.
- At Zalando we maintain an in-house solution [Skipper](https://github.com/zalando/skipper) which comes with OAuth support. I want to try this out at some point.

## Service Configuration with Docker Compose

Service configurations are stored in `./services/$name` they typically consists of two files:

- A `docker-compose.yaml` containing the actual service configuration
- A `Makefile` exposing targets `start`, `stop`, `test` (defaults can be imported)

{{< note title="Example" >}}
Here is a complete example I use for `blog.heinrichhartmann.net` [/services/blog](https://github.com/HeinrichHartmann/svc/tree/master/services/blog)

_docker-compose.yaml_
```yaml
networks:
  traefik:
    name: traefik
    external: true

services:
  blog:
    image: docker.heinrichhartmann.net/heinrichhartmann.com:latest
    networks:
      - traefik
    labels:
      - "traefik.http.routers.blog.rule=HostRegexp(`blog.{domain:.*}`)"
      - "traefik.http.routers.blog.entrypoints=https"
      - "traefik.http.routers.blog.tls=true"
      - "traefik.enable=true"
```

_Makefile_
```Makefile
URL=blog.heinrichhartmann.net
include /svc/lib/include.mk
```
{{< /note >}}

Services can be selectively enabled/disabled by adding symlinks to the `services.enabled` directory.
Only enabled services are started on `make start` and on boot.

We provide the following scripts for managing services:

``` shell
./svc.sh new $name # create new service scaffolding from template

./svc.sh enable $name # enable service with given name

./svc.sh list-available # list available services

./svc.sh list # list enabled services

make start # start all enabled services

make stop # stop all enabled services

make test # test status of all services and print results
```

## Storage with ZFS

The main server where this configuration is running is equipped with two 8TB HDD drives.
Those are configured as a ZFS pool with a RAID 0 configuration, allowing us to compensate for the loss of one of the disks.

We use [zfs-autosnapshot](https://github.com/HeinrichHartmann/svc/blob/master/nixos/etc/zfs-configuration.nix#L19) to protect against accidental deletion.
Off-site backup is realized via [restic](services/restic) to backblaze for selected datasets.

There are three main filesystems on the pool, that differ in backup and replication strategy.

* `/share/shelf`. 
  Data in the attic is snapshotted and backed-up and replicated to working machines.
  Content includes work-in-progress documents. 

* `/share/attic`. 
  Data in the attic is snapshotted and backed-up.
  Content includes archived projects, private photo collection, important media.

* `/share/garage`. 
  Data in garage is snapshotted but not backed-up. 
  Here goes the long-tail of less valuable data I wound not too much mind loosing.

The naming of the datasets is reflecting the different storage tiers, that I use for personal stuff:

- Things in the garage are subject to moisture and my easily get stolen when I inadvertently leave the door open.
- Things in the attic are safe from the elements. Here I keep things of value that I don't want to loose. 
- Things on the shelf are used for daily operations. Those may get bumped and scratched, and I can easily replace them.

**Learning.**
Retrieving backups with restic gets extermely slow when keeping around 100s of versions and working over slow networks.
Restoring even small amounts of data takes hours to complete.
I need to improve the retention policy of the restic backups.

**Learning.** In recent days I have moved to away from using the `shelf` dataset and only rely on `attic` and `garage`.
This is for the following reasons:

- I moved away from Dropbox for replicating data due to their dropping of zfs support (since reverted), and their questionable product strategy.
- I lost trust in  Syncthing for replication since I suffered multiple painful data-loss incidents.
- With [tailscale](https://tailscale.com/) I can get access to all files from any network. This grealy reduces the need to keep files around locally.

## Next Steps

Working in the monitoring domain, I of-course have a fairly elaborate monitoring/observability setup for my home-lab.
In the next post, I am going to walk you thrhough what's going on there. Stay tuned.

# Comments

<script src="https://utteranc.es/client.js"
        repo="HeinrichHartmann/comments"
        issue-term="title"
        label="Comment"
        theme="github-light"
        crossorigin="anonymous"
        async>
</script>
