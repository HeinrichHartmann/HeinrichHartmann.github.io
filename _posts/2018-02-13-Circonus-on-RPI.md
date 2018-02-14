---
layout: "post"
author: "Heinrich Hartmann"
location: Stemwede, Germany
title: Circonus on the Raspberry Pi
permalink: /blog/Circonus-on-RPI.html
hidden: true
categories: blog
---

There are a lot of interesting monitoring tasks, that can facilitated with a Raspberry Pi (e.g. [here](http://heinrichhartmann.com/blog/2014/12/14/Sensor-Monitoring-with-RaspberryPi-and-Circonus.html), [there](https://www.circonus.com/2016/10/circonus-api-raspberry-pi/)).
Unfortunately installing the Circonus monitoring agent on the Pi is not entirely straight forward.
- The linux distribution Raspbian is not directly supported, and neither is its upstream distro Debian Wheezy.
- The processor architecture (armv6/v7) requires different binaries than supported targets.
- Setting up nodejs/npm correctly is a PITA.

But hold-on. Not all is lost. Here is how you do it with a little more effort:

```shell
# Install dependencies
sudo apt-get update
sudo apt-get install git make

# Only node node v4 or node v6 are supported. Install official arm package
wget https://nodejs.org/dist/latest-v6.x/node-v6.12.3-linux-armv6l.tar.xz
sudo mkdir -p /opt/node
sudo tar -vxf node-v6.12.3-linux-armv6l.tar.xz -C /opt/node --strip-components=1
sudo ln -s /opt/node/bin/node /usr/bin/node
sudo ln -s /opt/node/bin/npm /usr/bin/npm
sudo ln -s /opt/node/bin/node /opt/circonus/bin/node

# Install nad from sources
git clone https://github.com/circonus-labs/nad.git
cd nad
git checkout v2.5.1
sudo make install install-linux-init

# Fix nad disk plugins which depend on /proc/mdstat
sudo modprobe md
```

This should install and enable the monitoring agent nad on the RPI.
Check that it is up and running using:

``` shell
# Is it up? -> You should see a staus report mentioning "active (running)"
systemctl status nad
# Does it serve metrics? -> You should see a large JSON blob, containing metrics
curl localhost:2609
```

Now copy paste the one-step-install command from the Integrations > Checks > [New Host] page.
In my case this is:
```sh
curl -sSL https://onestep.circonus.com/install | bash \
   -s -- \
   --key xxxxxxxxx-50ce-4118-9145-xxxxxxxxxx \
   --app circonus:osi:xxxxxx...
```

The credentials will be different for you.
The installer should find the running agent and register checks, graphs and the [USE Dashboard](https://www.circonus.com/2017/08/system-monitoring-with-the-use-dashboard/) for you.
We needed to make [some tweaks](https://github.com/circonus-labs/circonus-one-step-install/pull/51) to the COSI installer itself to get this working as it is now.
Thanks to Matt Maier from Circonus for his help.

These instructions were tested on Raspbian stretch lite
(Version: November 2017 / Release date: 2017-11-29 / Kernel version: 4.9)
on a RPI2 Model B.

Happy Monitoring!
