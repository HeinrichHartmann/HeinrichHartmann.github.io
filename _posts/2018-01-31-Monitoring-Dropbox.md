---
Layout: "post"
author: "Heinrich Hartmann"
location: Stemwede, Germany
categories:
- blog
permalink: "/blog/Monitoring-Dropbox.html"
splash:
  src: "/assets/capture_1517430553.png"
---

I keep a cheap little server in my basement.
Amongst other things it contains a full checkout of my dropbox.
In this way, I always have a copy of all my data inside my walls, so I can sleep better.
The content lies in the trusted hands of a [zfs](https://wiki.ubuntu.com/ZFS) file system, which allows me to take regular snapshots, so I don't loose data by accidentally deleting stuff on one of my devices.

Working for a [monitoring vendor](http://circonus.com), monitoring the server is not optional.
Especially for this box.
It has a surprisingly low availability, since I manage to trigger my [circuit breaker](https://en.wikipedia.org/wiki/Residual-current_device) ("FI Sicherung") twice a week while working "fixing" my lights, heating, garage doors, etc. 🤷.
So I want to make sure, they come up as expected and keep on doing what they should.
In this case this boils down to:

1. Is the dropbox daemon running?
2. How many files are left to sync?

And in case we there are a ton of files left:

{:start="3"}
3. How long will it take until everything is synced up?

I made a little dashboard for this purpose over the weekend and posted it on twitter:

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Created a little <a href="https://twitter.com/circonus?ref_src=twsrc%5Etfw">@circonus</a> dashboard to monitor dropbox syncing my 1TB drive. Pretty neat, and straightforward:<br>0: Get an account (<a href="https://t.co/LsBRpSA6JC">https://t.co/LsBRpSA6JC</a>)<br>1: Add your host<br>2: Drop this into cron <a href="https://t.co/u9OxUSQSqv">https://t.co/u9OxUSQSqv</a><br>3: Tweak the USE Dashboard <a href="https://t.co/QzMBcusHte">https://t.co/QzMBcusHte</a> <a href="https://t.co/IfHLuUNHB5">pic.twitter.com/IfHLuUNHB5</a></p>&mdash; Heinrich Hartmann (@heinrichhartman) <a href="https://twitter.com/heinrichhartman/status/958339041191133184?ref_src=twsrc%5Etfw">January 30, 2018</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Since people asked, I am going to elaborate a little here on what I did, and how you can do that, too, if you like.

## System Metrics

First things first.
Every box deserves system-level monitoring.
With Circonus this is a [single command](https://github.com/circonus-labs/circonus-one-step-install#quickstart) which you can copy past from the Integrations page:
```
curl -sSL https://onestep.circonus.com/install | sudo bash -s -- --key ...
```

Now you will say "curl | sudo bash", that's [a bad idea](https://www.idontplaydarts.com/2016/04/detecting-curl-pipe-bash-server-side/).
I know I know. But ... it just works. And it's HTTPS. And I know who wrote that code.
So we are all good.

This command will install a monitoring agent (nad) on your system and publish a good set of system metrics, which are presented conveniently as [USE Dashboard](https://www.circonus.com/2017/08/system-monitoring-with-the-use-dashboard/) for you.

{% figure capture_1517435990 png 'A generic USE Dashboard' %}

Looks pretty neat, eh?
With this, I know if my system is up, and how the basic resources (CPU, memory, network, disks) are doing. Later we will add some dropbox graphs to this dashboard.

## Gathering Dropbox Statistics

The main hero of this blog entry is the dropbox daemon.
Unfortunately dropbox does not offer machine-readable statistics (*sigh*).
We are left with the `dropbox.py status` command, which returns stuff like:

* ```
  Dropbox isn't running!
  ```
* ```
  Starting
  ```
* ```
  Dropbox isn't responding!
  ```
* ```
  Syncing (51,938 files remaining, 2 mins left)
  Downloading 51,938 files (3,069 KB/sec, 2 mins left)
  ```
* Or occasionally:
  ```
  Up to date
  ```

So we need to parse out the information we are interested in.
My first shot at this looked like this:
```shell
dropbox.py status \
  | grep remaining \
  | sed -e 's/remaining.*//' -e 's/[^0-9]//g'
```
This will pick out the "files remaining" line if there is any, then delete everything starting from the string "remaining" to get rid of the time estimate "2 mins left".
Finally we delete all non numeric content and are left with a number: `N=51938`.
Tada! Good enough for a fist version.

After a few interatons, the script ended up looking like this:
``` shell
#!/bin/bash
socat=/usr/bin/socat
grep=/bin/grep
sed=/bin/sed
dbx=$HOME/bin/dropbox.py
logger=/usr/bin/logger

# $1 metric name
# $2 value
function METRIC {
  logger -t dropbox-mon "metric $1: $2"
  printf 'dropbox`%s:%d|g' "$1" "$2" | $socat -t 0 STDIN UDP:localhost:8125
}

METRIC "count" "$(pgrep -c dropbox)"

STATUS="$($dbx status)"
case "$STATUS" in
  *"Up to date"*)
    METRIC "remaining" 0;
    exit 0;
    ;;
  *"files remaining"*)
    N=$(echo $STATUS \
        | $grep remaining \
        | $sed -e 's/remaining.*//g' -e 's/[^0-9]//g')
    METRIC "remaining" "$N"
    exit 0
    ;;
  *)
    exit 1
esac
```

Comments:

* We will run this script via [crontab(5)](http://man7.org/linux/man-pages/man5/crontab.5.html), which is famous for invoking acrane shells and not setting up the environment (Thanks cron 🤐).
So let's be explicit about where to find the programs we use.

* We want to send out the data we found as a metric, so we create a function for it.
  The implementation is explained below.

* We use [pgrep(1)](http://man7.org/linux/man-pages/man1/pgrep.1.html) to count the number of dropbox processes that are currently running (should be 0 or 1) and publish the result as a metric "count".

* Finally we parse the output of `dropbox.py status` in a more formal manner:
  1. If we are up to date, we emit 0 as value for the "remaining" metric.
  2. If we have files remaining, we do as before.
  3. Otherwise, we don't emit anything, and exit with RC=1 signaling an error condition.

## Sending Custom Metrics to Circonus

We have several options to send metrics to Circonus:

1. Push JSON documents to a [HTTP Trap](https://hartmann.circonus.com/resources/docs/user/Data/CheckTypes/HTTPTrap.html).
2. Add a [new plugin](https://github.com/circonus-labs/nad/blob/master/DEVELOPMENT.md#plugins) to nad.
3. Send [statsd](https://github.com/b/statsd_spec) metrics to the nad agent.

Option 1 is certainly a good one, and I might go for it next time.
Option 2 is even better in some sense as nad will be able to control the collection interval, and collect metrics once per second, when I am debugging things.
I opted against this method here because nad runs those plugins as the "nobody" user, so it would be able to use my dropbox configuration without tweaking.

So Option 3 it is.
Since a while ago nad has an integrated statsd server, that allows you to submit metrics via UDP  in statsd format.
In our case the payload we want to send looks like this:

```
dropbox`count:1|g
dropbox`remaining:5122|g
```

The usual way to do this from the command line would be using [nc(1)](https://linux.die.net/man/1/nc)

```
echo "dropbox`count:1|g" | nc -u localhost 8125
echo "dropbox`remaining:5122|g" | nc -u localhost 8125
```

Unfortunately nc has the bad habbit of hanging occasionally in this situation.
[Others](https://serverfault.com/questions/498880/nc-netcat-hangs-waiting-for-more-data-in-udp-mode) have solved that by using [socat(1)](https://linux.die.net/man/1/socat) instead.
So I copy pasted their code and went with it 😛.
This is how I arrived at that function listed above:

```shell
# $1 metric name
# $2 value
function METRIC {
  logger -t dropbox-mon "metric $1: $2"
  printf 'dropbox`%s:%d|g' "$1" "$2" | $socat -t 0 STDIN UDP:localhost:8125
}
```

Right. We actually write out some system logs as well, mainly for debugging purposes.
It takes a while until metrics show up on graphs.
Log lines become visible much more quickly.

We test this script by running it from the shell.
```
$ ./cron/dropbox.sh
```

You should then see log messages appearing in syslog:
```
tail -n2 /var/log/syslog
Jan 31 18:13:20 HomeFX dropbox-mon: metric count: 1
Jan 31 18:13:20 HomeFX dropbox-mon: metric remaining: 51222
```

If it does, type in `crontab -e` as your local user and add a line:

```
* * * * * ~/cron/dropbox.sh
```
This should run dropbox.sh every minute.
Check syslog again, to see if this worked.

## Configuring The Dashboard

You will need to activate the metric in order for Circonus to collect data from it,
on the checks page (Integrations > Checks > (select check) > details > [Changes brokers and Metrics])
{% figure capture_1517420969 png %}
After you did that you should see data flowing into the metric on the check's page.

Then add the metric to a new graph (Analytics > Graphs > Add Metric).
Finally add the graph to the USE dashboard.
I expanded the size of the dashboard a little and re-organized the graphs a little.

Finally I also added a forecasting widget to the dashboard.

{% figure capture_1517444961 png "Forecasting Widget: Time until synced" %}

This usually tracks the time until we run out disk space (etc.), but it can be used to track the "time until we are fully synced" as well.
Just put in the "dropbox remainig` metric under "usage" and 0 as resource limit.
The resulting widget will show the time until you are fully synced (or "Out of Resources" if you are up to date.)

## Alerting

Like every decent sys-admin, I have one alerting setup to notify me, when the box is down for more than an hour. With Circonus you can also alert on more subtle stuff like: *Is dropbox stalled?*

The stalled condition can be reformulated as:

    (Is there stuff left to sync?) and (Is it not downloading stuff?)

Roughly translated into [CAQL](https://login.circonus.com/resources/docs/user/caql_reference.html) this is:
```CAQL
( // stuff left to sync?
  metric:average("b6266779-c835-4341-a71b-a250e68d2347",
                 "statsd`dropbox`remaining") > 0
)
and
( // not downloading stuff?
  metric:counter("b6266779-c835-4341-a71b-a250e68d2347",
                 "if`enp2s0`in_bytes") // download rate in byte/sec
  | rolling:mean(1h) // 1h average
  | op:lt(1000) // less-than 1.000
)
```
I created a [CAQL Check](https://login.circonus.com/resources/docs/user/Data/CheckTypes/CAQLCheck.html) for this query, and setup an email alert for it.
I'll admit, this is probably a little over the top, but I just like to know directly when my stuff is not doing stuff.

## Conclusion

The method illustrated here is in pretty universal.
If you can extract the numerical digest from any tool on the command line you can follow the steps and get your stuff monitored.

For the specific case in point, the files remaining metric really benefited from taking it into the context of the whole system resource usage.
In many cases, dropbox is the one who is using the resources.
And it actually uses all of them: network, disks, CPU (to calculate all that checksums) and memory!
It's interesting to know where are the bottlenecks.

The tweet above shows just how much information you can get form a glance at the board.
Using the dashboard I discovered, already that

- Drobox has a long time average download rate is about 10Mbit. Not too bad given my shitty internet connection.
- The download stalled after ~24h. So, I added a cron-job to restart it every day.
- I should add more memory to the box. The system is already swapping.

I hope you enjoyed reading this. If you like to be informed about future posts, please consider singing up for the [newsletter](http://eepurl.com/ccmH-T).
