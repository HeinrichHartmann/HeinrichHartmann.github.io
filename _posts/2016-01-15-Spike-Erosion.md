---
author: "Heinrich Hartmann"
layout: "external"
redirect_from:
 - /2016/01/15/Spike-Erosion.html
 - /2016/01/15/Show-Me-the-Data.html
external_url: http://www.circonus.com/spike-erosion/
external_site: circonus.com
category: "blog"
---

Show Me the Data

by Heinrich Hartmann | Jan 14, 2016 | Blog, Uncategorized | 0 comments
Avoid spike erosion with Percentile – and Histogram – Aggregation

It has become common wisdom that the lossy process of averaging measurements leads to all kinds of problems when measuring performance of services (see Schlossnagle2015,  Ugurlu2013,  Schwarz2015,  Gregg2014). Yet, most people are not aware that averages are even more abundant than just in old-fashioned formulation of SLAs and storage backends for monitoring data. In fact, it is likely that most graphs that you are viewing involve some averaging behind the scenes, which introduces severe side effects. In this post, we will describe a phenomenon called spike erosion, and highlight some alternative views that allow you to get a more accurate picture of your data.
Meet Spike Erosion
Spike Erosion of Request Rates

Take a look at Figure 1. It shows a graph of request rates over the last month. The spike near December 23, marks the apparent maximum at around 7 requests per second (rps).
request-rates.png

Figure 1: Web request rate in requests per second over one month time window

What if I told you, the actual maximal request rate was almost double that value at 13.67rps (marked with the horizontal guide)? And moreover, it was not reached at December 23, but December 15 at 16:44, near the left boundary of the graph?

Looks way off, right?

But it’s actually true! Figure 2 shows the same graph zoomed in at said time window.
request-rates_zoomed.png

Figure 2: Web request rates (in rps) over a 4h period

We call this phenomenon spike erosion; the farther you zoom out, the lower the spikes, and it’s actually very common in all kinds of graphs across all monitoring products.

Let’s see another example.
Spike Erosion of Ping Latencies

Take a look at Figure 3. It shows a graph of ping latencies (from twitter.com) over the course of 4 weeks. Again, it looks like the latency is rather stable around 0.015ms with occasional spikes above 0.02ms and a clear maximum around December 23, with a value of ca 0.03ms.
latencies_max.png

Figure 3: Ping latency of twitter.com in ms over the last month



Again, we have marked the actual maximum with a horizontal guide line. It is more than double the apparent maximum and is assumed at any of the visible spikes. That’s right. All spikes do in fact have the same maximal height. Figure 4 shows a closeup of the one on December 30, in the center.
latencies_zoomed.png

Figure 4: Ping latency of twitter.com in ms on December 30


What’s going on?

The mathematical explanation of spike erosion is actually pretty simple. It is an artifact of an averaging process that happens behind the scenes, in order to produce sensible plots with high performance.

Note that within a 4 month period we have a total of 40,320 samples collected that we need to represent in a plot over that time window. Figure 5 shows how a plot of all those samples looks in GnuPlot. There are quite a few issues with this raw presentation.
raw_data.png

Figure 5: Plot of the raw data of request rates over a month

First, there is a ton of visual noise in that image. In fact, you cannot even see the individual 40,000 samples for the simple reason that the image is only 1240 pixels wide.

Also, rendering such an image within a browser puts a lot of load on the CPU. The biggest issue with producing such an image is the latency involved with retrieving 40K float values from the db and transmitting them as JSON over the internet.

In order to address the above issues, all mainstream graphing tools pre-aggregate the data before sending it to the browser. The size of the graph determines the number of values that should be displayed e.g. 500. The raw data is then distributed across 500 bins, and for each bin the average is taken, and displayed in the plot.

This process leads to plots like Figure 1, which (a) can be produced much faster, since less data has to be transferred and rendered (in fact, you can cache the pre-aggregated values to speed up retrieval from the db), and (b) are less visually cluttered. However, it also leads to (c) spike erosion!

When looking at a four week time window, the raw number of 40.320 samples is reduced to a mere 448 plotted values, where each plotted value corresponds to an average over a 90 minute period. If there is a single spike in one of the bins, it gets averaged with 90 other samples of lower value, which leads to the erosion of the spike height.
What to do about it?

There are (at least) two ways to allow you to avoid spike erosion and get more insight into your data. Both change the way the data is aggregated.
Min-Max Aggregation

The first way is to show the minimum and the maximum values of each bin along with the mean value. By doing so, you get a sense of the full range of the data, including the highest spikes. Figures 6 and 7 show how Min-Max Aggregation looks in Circonus for the request rate and latency examples.
request-rates_w_min_max.png

Figure 6: Request rate graph with Min-Max Aggregation Overlay


latencies_w_min_max.png

Figure 7: Latencies with Min/Max-Aggregation Overlay



In both cases, the points where the maximum values are assumed are clearly visible in the graph. When zooming into the spikes, the Max aggregation values stay aligned with the global maximum.

Keeping in mind that minimum and maximum are special cases of percentiles (namely the 0%-percentile and 100%-percentile), it appears natural to extend the aggregation methods to allow general quantiles as well. This is what we implemented in Circonus with the Percentile Aggregation overlay.
Histogram Aggregation

There is another, structurally different approach to mitigate spike erosion. It begins with the observation that histograms have a natural aggregation logic: Just add the bucket counts. More concretely, a histogram metric that stores data for each minute can be aggregated to larger time windows (e.g. 90 minutes) without applying any summary statistic, like a mean value, simply by adding the counts for each histogram bin across the aggregation time window.

If we combine this observation with the simple fact that time-series metrics can be considered histogram with a single value in it, we arrive at the powerful Histogram Aggregation that rolls-up time series into histogram metrics with lower time resolution. Figures 8 and 9 show Histogram Aggregation Overlays for the Request Rate and Latency examples discussed above.
request-rates_w_histogram.png

Figure 8: Request Rates with Histogram Aggregation Overlay


latencies_w_histogram.png

Figure 9: Latencies with Histogram Aggregation Overlay



In addition to showing the value range (which in the above figure is amplified by using the Min-Max Aggregation Overlay) we also gain a sense of the distribution of values across the bin. In the request rate example the data varies widely across a corridor of width 2.5-10rps. In the latency example, the distribution is concentrated near the mean global median of 0.015ms, with single value outliers.
Going Further

We have seen that displaying data as histograms gives a more concise picture of what is going on. Circonus allows you to go one step further and collect your data as histograms in the first place. This allows you to capture the latencies of all requests made to your API, instead of only probing your API once per minute. See [G.Schlossnagle2015] for an in-depth discussion of the pros and cons of this “passive monitoring” approach. Note that you can still compute averages and percentiles for viewing and alerting.
histogram_metric.png

Figure 10: API Latency Histogram Metric with Average Overlay



Figure 10 shows a histogram metric of API latencies, together with the mean value computed as an overlay. While this figure looks quite similar to Figures 8 and 9, the logical dependency is reversed. The mean values are computed from the histogram, not the other way around. Also, note that the time window of this figure only spans a few hours, instead of four weeks. This shows how much richer the captured histogram data is.
Resources

    Theo Schlossnagle – Problem with Math Dogan Ugurlu (Optimizely) – The Most Misleading Measure of Response Time: Average Baron Schwarz – Why percentiles don’t work the way you think Brendan Gregg – Frequency Tails: What the mean really means George Schlossnagle – API Performance Monitoring
