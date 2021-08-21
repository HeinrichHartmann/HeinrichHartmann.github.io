# How to measure Latency?

<center>Heinrich Hartmann - p99Conf - 2021-10-06</center>

## Introduction

* Inspiration for this talk comes from Gil Tene - How (NOT) to Measure Latency?
  - [Slides (London 2013)](https://www.slideshare.net/howarddgreen/how-not-to-measure-latency-london-oct-2013)
  - [Video (StrangeLoop 2015)](https://www.youtube.com/watch?v=lJ8ydIuPFeU)
  - [Blog - HighScalability 2015](http://highscalability.com/blog/2015/10/5/your-load-generator-is-probably-lying-to-you-take-the-red-pi.html)
  
* Also I have been talking about Statistics and Lantency for the last years:
  - [State of the Histogram (SLOConf 2021)](https://www.youtube.com/watch?v=Z-5PNlv8eK0)
  - [Circllhist (paper)](https://arxiv.org/abs/2001.06561)
  - [Latency SLOs Done Right (FOSDEM 2019)](https://archive.fosdem.org/2019/schedule/event/latency_slos_done_right/)
  - [Statistics for Enginees (2014..2019)](https://github.com/HeinrichHartmann/Statistics-for-Engineers/)

## Plan for Today

1. How to measure Latency?
2. How to store Latency Data?
3. How to analyze Latency Data?

## How to Measure Latency?

Measuring Latency in code is relatively straight forward:

```python
t_start = time.now()
#
# code section you want to measure
#
latency = time.now() - t_start
```

This is really all there is to it. 
