# How to measure Latency?

<center>Heinrich Hartmann - [P99 CONF](https://www.p99conf.io/) - 2021-10-06</center>

## Introduction

Inspiration for this talk comes from Gil Tene - How (NOT) to Measure Latency?  
[Slides (London 2013)](https://www.slideshare.net/howarddgreen/how-not-to-measure-latency-london-oct-2013)
  / [Video (StrangeLoop 2015)](https://www.youtube.com/watch?v=lJ8ydIuPFeU)
  / [Blog - HighScalability 2015](http://highscalability.com/blog/2015/10/5/your-load-generator-is-probably-lying-to-you-take-the-red-pi.html)
  
I have been talking about Statistics and Lantency for the last years:  
[State of the Histogram (SLOConf 2021)](https://www.youtube.com/watch?v=Z-5PNlv8eK0)
  / [Circllhist (paper)](https://arxiv.org/abs/2001.06561)
  / [Latency SLOs Done Right (FOSDEM 2019)](https://archive.fosdem.org/2019/schedule/event/latency_slos_done_right/)
  / [Statistics for Enginees (2014..2019)](https://github.com/HeinrichHartmann/Statistics-for-Engineers/)

## Plan for Today

1. How to measure Latency?
2. Where to measure Latency?
3. How to store Latency Data?
4. How to analyze Latency Data?

## Applications

- Montioring
- Benchmarking

## How to Measure Latency?

Measuring Latency in code is relatively straight forward:

```python
t_start = time.now()
#
# code section you want to measure
#
latency = time.now() - t_start
```

This is really all there is to it. There are a few things to watch out:

1. Capture early returns / exceptions. Use: `defer`,`try/catch/finally`.

2. Which clock is used?
   - What Resolution? sec / ms / usec / ns
   - Monotonic or affected by NTP resets?
   - What is measured? System Time, Process Time
   - Want: high resolution, monotonic, system time:
     - Java `System.nanoTime()`
     - C `clock_gettime(CLOCK_MONOTONIC,...)` / `gethrtime`
     - Python [`time.monotonic()`](https://www.python.org/dev/peps/pep-0418/)

3. Measurement Overhead. Checking the time costs time. Depending on
   implementation this can be 30ns - 300ns for the C-level call [@TS17],
   plus function call overhead of the language runtime.
   Rule of thumb: **OK to measure latencies of 0.1ms or larger.** 


If you are taking more than three time measurements, it's likely a good idea to 
abstract the time measurement into an object or a decorator, that can be used as follows:
 
 ```python
 @timed
 def do_some_things():
    ...
 ```

Some tracing libraries (e.g. [OpenTelemetry](https://opentelemetry.io/)) provide
such decorators out-of-the box.

## Measuring Latency over Time

When measuring latency over time, e.g. in a monitoring system, there are trickly
interactions of the collection window with the request duration that we are
capturing:

> Do we count processes that overlap the collection windows?


IMG: Latencies over Time

Best Practices:

- Count requests to the collection window when they were completed
- When shutting down the benchmark, wait for all requests to complete!
- 

- Keep an eye on the active requests (metric)
- Capture max latency, if this is larger than collection window, we make serious mistakes.
- Option: count active requests with the elapsed duration at end-of-window. 

## Where to Measure Latency?

This is the much trickier part!

We are most interested in measuring timings of request-reply interactions in
potentially distributed system (HTTP/gRPC API calls):

```
+--------+        +-----------+   +-----------+          +--------+ 
| Client | -----> | Intermedy | > | Intermedy | ------>  | Server |
+--------+        +-----------+   +-----------+          +--------+ 
```

The latency that the client experiences is influenced by the whole chain of
interactions.

Tradeoff:

- Measuring close to client is more meaningful but hard
- Measuring at server is easy but can be extermely misleading

Best: Measure Both -> Tracing.

IMG: Server Span / Client Span

### Hidden Queues

The computer systems we are working with have a lot of hidden queues in the HTTP
libraries, TCP/IP stack, NIC Cards, Network Gear, etc. this means that the
latency that the client experiences may be much worse, than what can be measured
on the server side.

It's very hard to observe those queues directly, we have to measure at the
client to make sure we capture the impacts of all of them.

IMG: Hidden Queues

We can model these systems as queuing systms with "hidden" queues.

### Request Time vs. Service Time

It's very easy to confuse request time with service time. 

- If you are measing latency at the server, you are measuring service time.
- Serice Time looks like Request Time when there is little traffic
- Service Time can look completely FINE even if your clients have TERRIBLE experience.


In Queuing Systems,
this can have drastic consequences.

IMG: Server with Queue



Let's do some analysis...

### Coordinated Omission in Benchmarking

In benchmarking applications there are are a surprising number of cases, where
the load generator coordinates with the system under test, and thereby skews
latency measurements.

Examples:

- Load is generated in loop like so:
  ```python
  while True:
      start = time.now()
      request.get("some.api/endpoint")
      record(time.now() - start)
  ```
  This logic backs-up as soon as the requests take longer. You are effectively
  measuring service-time of a single worker.
  
- When latency is dominated by GC activity (e.g. Java) and the load generator
  runs in the in the same process, it will be affected by GC pauses as well,
  and hence miss requests when the system is stalled. 



## How to Store Latency Data?

Requirements:

- Can compute percentiles
- Can merge latency data over longer time periods

Options:

1. Raw Data (logs, events, traces)
2. Histograms (i.e. Mergable Summaries, Quantile Digest, etc.) 


## How to Analyze Latency Data

1. Look at the max latency.  
   Stalls of the system, often only affect a low number of requests. They still
   cause queuing in the upstream systems. Hence, when measuring service-time
   (which is often the case) the max latency is a signl we should not miss.
   If request are in the 

## Application 

# Footnotes

\bibliography
