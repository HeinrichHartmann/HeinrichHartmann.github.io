<!-- # Ganglia -->

In this note we are going to install the Ganglia monitoring system on
a Virtual Cluster.

Gangila was initially developed at UBerkley. Is free software. It
scales to multiple nodes and multiple clusters. Oreilly has a book on
it.

## Architecture
Ganglia consists of three different services `gmond`, `gmetad` and `gweb`.

* `gmond`  
  lightweight process that monitors system ressources and broadcast
  them on the local subnet.  Also it receives broadcast messages from
  the neihbouring nodes and makes them accessible for polling by
  `gmetad`.  It is important to note, that only the current state is
  rembered by the `gmond` instances and no historical data.
* `gmetad`  
  Service that aggregates status information from multiple
  clusters. Per cluster it is sufficient to poll **one** `gmond`
  instance, since the state is shared among the nodes.
* `gweb`  
   web dashboard for `gmetad` nodes.

Architecture Scetch

         gmond                gmetad      gweb
         =====                ======      ====
      * <-----> * <---[poll]---> * <-------> *
      | Cluster |                |
      * <-----> *                |
                                 |
      * <-----> * <---[poll]-----+
      | Cluster |
      * <-----> *


### gmond

* Gathers data from local system on an independent schedule.
* Implication: System does not rely on external polling. Many
  independent poller can queery the cluster. E.g. `gmond-zeromq`
  publishes data on zmq bus.
* gmond seems to run single threaded: (cf. `ps -eLf | grep gmond`)
* Can be extended to report metrics provided by scripts in any
  language. Especially easy: C, C++, Python. `gmetric` tool provided.
* Metics are shared between gmond nodes via [multicast channels](http://en.wikipedia.org/wiki/IP_multicast)

* Configuration in `/etc/ganglia/gmond.conf`
  - Configure multicast channels
  - Add customized metrics. (modified by `gmetric` tool)

### gmetad

* Polls the gmond daemons for data.
* Stores historic data in RoundRobin Database
* Provides raw data for web interface

# Install software

## Gangila Monitor
Installation via apt-get is a piece of cake:

    ssh VLB1 sudo apt-get install ganglia-monitor

Now start the monitor daemon:

    ssh VLB1 sudo service ganglia-monitor start
	
and test it is collecting metrics by typing in:

    nc VLB1 8649

You should see an XML dump of the metrics in your terminal window.

## Gangila Meta Daemon

We install the `gemetad` and the web frontend on the host machine

     sudo apt-get install gmetad

Now start the `gmetad` daemon by running

    sudo service gemtad start

Test its functionality by running:

    nc localhost 8651

it should respond with an XML representing the state of all connected
nodes (i.e. none).

To get more elaborate information about the meta daemon run it from
the command line with enabled debug information:

    sudo -u nobody gmetad --debug=10

## IP Multicast Setup

Ganglia uses multicast channels to connect different gmond daemons
with each other. 

It seems surprisingly difficult to get install and test multicast
networking.  First we need to check if multicast is supported by your
kernel (should be) following
[Stackexchange](http://unix.stackexchange.com/questions/25872/how-can-i-know-if-ip-multicast-is-enabled)
one can use:

    ip maddr show
    cat /proc/net/igmp
	netstat -ng

to display information about the multicast configuration.  Another
very helpful source http://sorcersoft.org/resources/notes/multicast.html

We make sure the mutlicast packages are sent over the right ethernet
interface by adding the following route:

    ssh VLB1 sudo route add -net 224.0.0.0 netmask 240.0.0.0 dev eth0
    ssh VLB2 sudo route add -net 224.0.0.0 netmask 240.0.0.0 dev eth0

## Ganglia Web Frontend

Ganglia provides a nice php web-site that visualizes the data
aggregated by `gmetad`. Installation and start of the application
are rather easy:

    sudo apt-get install ganglia-webfrontend
    sudo cp /etc/ganglia/apache.conf /etc/apache2/sites-enabled/ganglia
	sudo service apache2 reload

Remark: The apache.conf file is a single line:

    Alias /ganglia /usr/share/ganglia-webfrontend

Now, you should be able to open the webfrontend by opening the url:
 http://localhost/ganglia on your host machine.

# Configuration

# Gangila Monitor

We have two virtual nodes VLB1 and VLB2 running `gmond` daemon and
share their metrics on a multicast channel over the virtual network.
To make `gmetad` aware of those nodes edit the
`/etc/ganglia/gmetad.conf` to contain the following line:

     data_source "Virtual Cluster" 1 VLB1 VLB2
	 
Now restart the gemtad daemon, eg. using

     sudo service gmetad restart

and you should be able to see two virtual machines in the web
frontend.

# Debugging

Odds are, that something went wrong along the way, to get a better
understanding of the problem start the daemons from the command line:

     sudo -u nobody gmetad -d 10

     # on the VMs
     sudo gmetad -d 10


# Extensions

There are two different ways to extend ganglia by customized metrics.

1. Using `gmetric` tool
2. Including modules in C/C++
3. Including modules in Python (via mod_python module)

The gmetric tool allow to set specific values to metrics:

    gmetric --name="my_metric" --value="18" --type=int32

It does not, however, allow the repeated execution of a specific
script scheduled by the `gmond` daemon but has to be triggered by an
extrenal process like `cron`.

## Crontab

We can add the following line in `crontab -e` to monitor the size of
your `www` folder every minute

    # m h dom mon dow command
    * * * * * gmetric --name="size_www" --type=int32 --value=`du -s /var/www | cut -f1`

To see, if this script is executed use

    tail -f /var/log/syslog | grep CRON

You should see messages like

    Dec 27 12:51:01 VLB CRON[4136]: (user) CMD (gmetric --name="size_www" --type=int32 --value=`du -s /var/www | cut -f1`)

appear every minute. If another line

    Dec 27 12:57:01 VLB CRON[4297]: (CRON) info (No MTA installed, discarding output)

appears next to it, then something went wrong.

### Catches

* Crontab uses a different execution environment, then the login
  shell. To test the environment use something like:
  
        * * * * * env > ~/cron-env.txt

  In my case cron was using a different shell (`dash`) and the path
  variable did not contain the current directory ("."). Therefore
  environment variables (like $RANDOM) were not working as intended and
  I as not able to run scripts in my home directory directly.

* Crontab sends stdout and stderr of the scripts via email. If you
  dont have an MTA like `postfix` installed, you will not be able to
  see the output of your scripts. Solution:
  - install an MTA
  - redirect output to a log file by appending `2>&1 >> ~/cron.log` to
    the crontab line.

### Current Setup

My crontab has a single entry that runs a script

    # m h dom mon dow command
    * * * * * ~/ganglia-metrics.sh 2>&1 >> ~/crontab.log

Note, that the script is called using it's full path and the output is
redirected to a log file. The `ganglia-metrics.sh` script looks as follows:

    #!/bin/bash
    GMETRIC=/usr/bin/gmetric

    echo `date` "- executing ganglia-metrics.sh"

    $GMETRIC --name="size_www" --type=int32 --value=`du -s /var/www | cut -f1`

    # some more dummy metrics ...
    $GMETRIC --name="date" --type=int32 --value=`date +%s`
    $GMETRIC --name="rand" --type=int32 --value=$RANDOM
	

Note, that the script uses a shebang '#!' in order to be executed by
the bash shell.

More examples can be found on [github](https://github.com/ganglia/gmetric).
See <https://github.com/vvuksan/ganglia-misc/tree/master/gmetric-python> for a python implementation of gmetric.

## Python modules

Ganglia can be extended by python modules. In contrast to the gmetric
method explained before, these python modules are executed by gmond
and do not have to be scheduled by a cron job.

To enable python modules one has to load the python module wrapper as
a module. You can see all installed native-modules using:

    ls -l /usr/lib/ganglia

Unfortunately the preinstalled `gmond.conf` version does not include a
configuration template, even though the `modpython.so` file is
provided. We have to add the following lines into `gmond.conf`
(cf. <https://bugs.launchpad.net/ubuntu/+source/ganglia/+bug/694208>):

    modules {
        module {
           name = "python_module"
           path = "/usr/lib/ganglia/modpython.so"
           params = "/usr/lib/ganglia/python_modules"
        }
	}

    include ('/etc/ganglia/conf.d/*.pyconf')

Now run

    sudo mkdir -p /usr/lib/ganglia/python_modules /etc/ganglia/conf.d

to create the directories if necessary. Use

    sudo gmond -m -d 10

to verify the module is loaded correctly. (You shoud see `loaded
module: python_module` at the beginnig followed by no error messages).

## Install example python metric

Before we write our own python metric we install the 'disk_free'
metric from [github](https://github.com/ganglia/gmond_python_modules)
by [Vladimir Vuksan](https://github.com/vvuksan)

    curl https://raw.github.com/ganglia/gmond_python_modules/master/diskfree/python_modules/diskfree.py \
         | sudo tee /usr/lib/ganglia/python_modules/diskfree.py
    curl https://raw.github.com/ganglia/gmond_python_modules/master/diskfree/conf.d/diskfree.pyconf \
         | sudo tee /etc/ganglia/conf.d/diskfree.pyconf

Check that everything was is working fine by running, e.g.

    sudo gmond -m -d 10 | grep disk_free

Start `gmond` again and you should see disk_free metrics in the web interface.

## Write our own module

Now, that we know the python module infrastructure works as expected,
lets write our own:

    cat << EOF | sudo tee /usr/lib/ganglia/python_modules/example.py
    #!/usr/bin/env python
    # -*- coding: utf-8 -*-
    
    def get_value(name):
        """Return a value for the requested metric"""
        return 17
        
    def metric_init(lparams):
        """Initialize metric descriptors"""
    
        # create descriptors
        descriptors = []
    
        descriptors.append({
            'name': "example",
            'call_back': get_value,
            'time_max': 60,
            'value_type': 'float',
            'units': '%',
            'slope': 'both',
            'format': '%f',
            'description': "example metric",
            'groups': 'example'
        })
    
        return descriptors
    
    def metric_cleanup():
        """Cleanup"""
        pass
    
    # the following code is for debugging and testing
    if __name__ == '__main__':
        descriptors = metric_init({})
        for d in descriptors:
            print (('%s = %s') % (d['name'], d['format'])) % (d['call_back'](d['name']))
    EOF

save this script in your python modules directory and test its
functionality using:

     python /usr/lib/ganglia/python_modules/example.py

Now add the python module to gmond configuration using e.g.

    cat << EOF | sudo tee /etc/ganglia/conf.d/example.pyconf
    modules {
        module {
            name = "example"
            language = "python"
        }
    }
    
    collection_group {
        collect_every = 10
        time_threshold = 180
        metric {
           name_match = "example"
        }
    }
	EOF



For more information see the
[official docs](http://sourceforge.net/apps/trac/ganglia/wiki/ganglia_gmond_python_modules).
