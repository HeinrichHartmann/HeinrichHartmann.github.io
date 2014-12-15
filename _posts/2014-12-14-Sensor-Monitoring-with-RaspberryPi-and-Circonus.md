# Sensor Monitoring with RaspberryPi and Circonus

The [RaspberryPi](http://www.raspberrypi.org) mini-computer can be
used to connect all kind of devices to the internet. The only
challenge is to find a way to hook the device up to the
[IO-pins](/2014/11/22/Raspberry-Pi-SunFounder-GPIO-Layout.html) of the
RPi, and configure the webserver to communicate with the device.  One
interesting class of devices, which can be easily connected to the
IO-pins are sensors. There is a great variety of sensors cheaply
available online
(e.g. [here](http://www.amazon.com/s/ref=sr_nr_n_25/185-4387700-7719321?fst=as%3Aoff&rh=n%3A172282%2Ck%3ASensors&keywords=Sensors)) which are perfectly suited for this purpose.

{% figure SensorMonitoring_files/Setup jpg 'RasperryPI connected to Circonus Dashboard' 'width="400px"' %}

In combination with a monitoring tool like
[Ganglia](/2014/01/01/Monitoring-with-Ganglia.html) or
[circonus](http://circonus.com) these little sensors can become a very
powerful tool. The monitoring service captures the data from the
sensors on regular intervals and provides export, plot and analytics
functionality. Just imagine what you could do when you had the
following quantities conveniently available for analysis:

* total electric power consumption
* water consumption
* temperature in the room/outside
* air quality/smoke
* noise-levels.

In this note provide a small tutorial of how to connect temperature
and light sensors to the [circonus](http://circonus.com) monitoring
system. As a small application we will setup an alerting rule to sent
us an email once the temperature falls below a threshold.

## Reading Sensor Values from the RPi

There are several excellent tutorials available of how to connect
sensors to a RaspberryPi using a ACD-changer chip, and I will not
make the effort of duplicating their writing, but focus on the differences.
As a starting point I used [this
tutorial](https://learn.adafruit.com/reading-a-analog-in-and-controlling-audio-volume-with-the-raspberry-pi)
on [adafruit.com](http://adafruit.com).  Since the
[SunFounder LCD Starter
Kit](http://www.sunfounder.com/index.php?c=show&id=21&model=LCD%20Starter%20Kit)
ships with a
[ADC0832-N](http://www.futurlec.com/ADConv/ADC0832.shtml)-chip instead
of the [MCP3008](https://www.adafruit.com/products/856) there were
some adjustments necessary.

I installed the chip on the breakout board and used the following
wiring:

| ADC0832 Pin | Breakout Pin | RPi Pin BCM |
|-------------|--------------|-------------|
| 1 CS        | P0           | 17          |
| 2 CH0       | (to sensor)  | (to sensor) |
| 3 CH1       | -            | -           |
| 4 GND       | GND          | GND         |
| 5 DI        | P3           | 22          |
| 6 DO        | P2           | 27          |
| 7 CLK       | P1           | 18          |
| 8 VCC       | 3.3V         | 3.3V        |

See [IO-pins](/2014/11/22/Raspberry-Pi-SunFounder-GPIO-Layout.html)
for more information about the Pin labels.  The basic idea is that
`CH0` and `CH1` pins are able to sense electric potential between 0V
and 5V which can be read out as a binary signal from the DO pin.

The precise addressing scheme is explained in the
[datasheet](http://www.ti.com/lit/ds/symlink/adc0831-n.pdf) and the
[adafruit script](https://gist.github.com/ladyada/3151375) was
modified accordingly.

<script src="https://gist.github.com/HeinrichHartmann/27f33798d12317575c6c.js"></script>

The script can be used as follows:

    pi@pi ~ $ sudo python ADC8032.py
    ADC[0]: 33   ADC[1]: 71
    ADC[0]: 33   ADC[1]: 75
    ADC[0]: 33   ADC[1]: 72
    ADC[0]: 33   ADC[1]: 78

As you can see, we have just read out analog sensors from the command line.

## Publishing Sensor data on the Web

The next step is to publish the sensor data to the web. To do so we
have to do three things:

1. Setup a webserver on the RPi
2. Portforwarding: Configure the router to forward outside connections to the RPi.
3. Get a dynamic DNS for your local internet connection.

We will use a simple HTTP server shipped with python to publish
the sensor data. The following script can be used for this purpose:

<script src="https://gist.github.com/HeinrichHartmann/6c9d235a594e3b5be376.js"></script>

To start the script use the following command:

    pi@pi ~ $ sudo python sensor-server.py 8081 &

If everything worked fine, you should be able to retrieve sensor
data as follows:

    pi@pi ~ $ curl localhost:8081
    {"light": 71, "temperature": 34}

This should also be working from other machines on the local network.
Assuming the RPi has IP address `192.168.0.18` you can test this
as follows:

    hartmann@x230: curl 192.168.0.18:8081
    {"light": 73, "temperature": 34}

If you are planning to use this script over an extended period of
time, you might want to setup an [init
script](http://www.stuffaboutcode.com/2012/06/raspberry-pi-run-program-at-start-up.html). to
start the service at boot time.

Now that your webserver is working on the local network, we need to
open a port at your internet router and allow external connections to
access your webserver.  This step is highly dependent on which router
you use. I have a FritzBox and used a configuration similar to [this
one](http://en.avm.de/nc/service/fritzbox/fritzbox-7390/knowledge-base/publication/sho/893_Configuring-static-port-forwarding/).

Since the IP address assigned to your home connection is likely to
change every day or two, it is advised to use a dynamic DNS service
which will allow to connect to your router using a fixed hostname.
Unfortunately appears as if good and free dynamic DNS providers are
very hard to find.  I used [no-ip.biz](http://no-ip.biz/) though I
am not sure I would recommend to do so.

If everything went well then the following should work on any
machine connected to the internet (!):

    hartmann@X230: curl hostname.no-ip.biz:8081
    {"light": 73, "temperature": 34}

Where we assumed that your dynamic hostname is `hostname.no-ip.biz`.

## Monitoring setup with Circonus

Now that we have setup our web server we are ready to import the data
into the [circonus](http://circonus.com) monitoring system. Circonus
is a very advanced monitoring tool aimed at used in large data-centers,
and comes with a price tag of 20$/month minimum (as of
2014-12-15). Fortunately, there are [free
account](https://login.circonus.com/promo) available for home use:

<blockquote class="twitter-tweet tw-align-center" lang="en"><p>Awesome <a href="https://twitter.com/HeinrichHartman">@HeinrichHartman</a>! <a href="https://t.co/H4ktjrMnVI">https://t.co/H4ktjrMnVI</a> 20 metrics free for all makers: <a href="https://t.co/2cc2jazelZ">https://t.co/2cc2jazelZ</a></p>&mdash; Theo Schlossnagle (@postwait) <a href="https://twitter.com/postwait/status/544137674316328960">December 14, 2014</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

Once you have setup your account with circonus, there are many ways to
import your data. Some of them are listed in the following [blog
post](http://www.circonus.com/ways-to-collect-systems-data-in-circonus/). Surprisingly
my favorite method is not described there: `JSON-pull`. Using this
method a circonus server will visit a given URL in regular time
intervals. The response content is assumed to be valid JSON and the
system will make a best effort to parse all numbers from the provided
JSON data.

An example configuration for our use case is shown in the figure below:

{% figure SensorMonitoring_files/CirconusJsonCheck png 'Configuration of JSON check' 'width="600px"' %}

The circonus tool has no problem to parse our simple JSON response
and import the data into the system.

**Graphing**

When the data import is figured correctly we will be able to see the
data streaming into circonus. Several kinds of plots can be produced
on the web front end. Circonus even allows sharing and embedding of
the customized graphs. The following graph shows the temperature (red)
and light levels (yellow) in my room in the last hours.

<div style="border:1px solid #ccc">
<iframe height="294px" width="600px" scrolling="no" frameborder="0" src="https://share.circonus.com/embedded/graphs/0c56cd62-f8f4-4f38-8200-354af0d903bc/mGemDP"></iframe>
</div>

Thee events are clearly visible:

1. At around 14:30 (GMT) the sun sets, and it becomes darker and darker.
2. At 15:15 I switch on the light.
3. At 16:50 I stop working and switch the light off.

**Email Alerts**

Circonus can be used to trigger alerts when certain events happen. The
following figure shows a configuration that tigers an email alert (to
the user `me`) when a temperature below 20 is detected.

{% figure SensorMonitoring_files/CirconusAlertingRule png 'Circonus low-temperature alerting rule' 'width="600px"' %}

So now I can sleep well, knowing that an email will remind me when I
am freezing in the office.

Thats it!