---
author: "Heinrich Hartmann and Hugo Lafleur"
layout: "external"
redirect_from:
 - /blog/2016/11/01/Outlier-Detection-at-TouchTunes.html
 - /2016/11/01/Outlier-Detection-at-TouchTunes.html
external_url: https://www.circonus.com/casestudies/touchtunes/
external_site: circonus.com
comment: "with Hugo Lafleur"
category: "blog"
---
Touchtunes

At TouchTunes we have been using Circonus to monitor infrastructure and business processes for a while. For example, we track and monitor volume of activity in music plays, which we retrieve via various channels. This metric is key since while decline in the volume of music plays may or may not be indicative of an issue with the API platform, the business is most likely affected. Therefore a question comes back often:

“Are we processing the expected amount of music plays right now?”

This is clearly a question that a monitoring platform should be able to answer. We have been successful with Circonus in tackling most of our monitoring requirements, but to completely address this use case we realized we needed a more refined solution. Interested in figuring out how to use the advanced analytic capabilities of Circonus, we decided to reach out to the team behind the tool and propose a collaboration.
Simply put, the two high-level objectives for this venture were:

1. Show the current vs. the expected amount of music plays on a dashboard.
2. Be alerted when the music plays are “significantly” below our expectations.

Today we are delighted to share the journey towards this achievement, and show you how to apply similar methods to your own metrics.
Square One: The Data

The first step in every data processing task is to have a look at the data. Unfortunately, we can’t show you the original data, since it’s highly sensitive. Instead, we’ll use another metric from a different source, one that experiences similar behavior.
You will immediately notice some recurring patterns:

During the daytime, music plays volume is lower, and higher in the evening/night time. On the weekend, there are fewer music plays being processed.

Also, there are special events like Christmas or the Super-Bowl that disrupt the pattern, which are not shown in the above time range. We are interested in finding significant deviations from these patterns, particularly if we fall below our expected load.

It was immediately clear that static thresholding could not be used to detect those deviations due to the pattern-driven nature of the data. We needed a smarter approach.

Figure 1: Activity Volume of Music Plays in April 2016
Figure 1: Activity Volume of Music Plays in April 2016

A First Attempt: Circonus Anomaly Detection

Circonus comes with Anomaly Detection methods that can be used to detect unusual events. Applying an Anomaly Detection Overlay to the data shows the following results:

Figure 2: Music Plays with Anomaly Detection Overlays. Highlighted regions mark detected anomalies.
Figure 2: Music Plays with Anomaly Detection Overlays. Highlighted regions mark detected anomalies.

We experimented with the weekly-periodic model in the overlay settings to model the data, which allows to capture daily and weekly periodic patterns. In the graph, anomalous regions are marked. It’s also possible to output an anomaly score, with values in 0 .. 100 representing a range from “looks good” … “anomaly found”, but this is not shown in Figure 2.

While most events are captured, this method presents a few issues that keep it from being a true fit. For example, the marked anomaly region lags behind the actual anomaly event by some ~30 minutes; and while reducing that delay can be done by setting a higher sensitivity parameter, we would increase the rate of false positives and get alerted all the time. Also positive and negative deviations are treated equally whereas we are more interested in negative deviations, i.e. when there are too few music plays.

The most difficult part was the fact that anomaly scores are abstract values and so they carry no business meaning. This made it difficult to support the collaboration model we’re striving towards.

It became clear that using the existing anomaly detection feature, even finely tuned, would only have led to a partial achievement. What we needed was a tailored approach.
True Fit: Refined Outlier Analysis with CAQL

In our initial talks with Circonus we suggested the following mathematical procedure to quantify the outliers in the music play volume. The essential idea is to compare the current value to the historic values over the last 5 weeks, and return the (relative) deviation from the historic mean. More precisely:

1. For an incoming value $y[t]$ at time t, fetch data from the last 5 weeks:$y[t-1w, ],y[t-2w], …,y[t-5w]$.These historic values form the context for our current observation $y[t]$.
2. (Optional) Remove outliers from the context, the values that stray too far from the pack.
3. Compare the current value to the mean value of the context samples. The simplest possibility is to take the difference to the mean value of the context:$ r = y[t] – mean(y[t-1w],…,y[t-5w]) $
4. (Optional) Normalize the residual $r$, in order to report percentages instead of absolute values.

Circonus pointed out that this approach is not generally suitable as an anomaly detection implementation: trends and shifts in the mean value would not be detected. For our use case however, it seemed to be enough of a good fit to give it a shot.

To implement this, Circonus offers a rich stream processing language called CAQL, which stands for Circonus Analytics Query Language. CAQL (Reference Documentation) was used to implement a first version of this method, which resulted in the graph on Figure 3.

Figure 3: A simple customized Outlier Detection in CAQL.
Figure 3: A simple customized Outlier Detection in CAQL.

metric:average("2d6ca393-1518-442d-b88f-c66874aeb6ca","music plays")
-
(
metric:average("2d6ca393-1518-442d-b88f-c66874aeb6ca","music plays")
| delay(1w, 2w, 3w, 4w, 5w)
| stats:mean()
)

The first datapoint in green shows the original data. The second datapoint in red on the right axis shows the outlier score as computed by the CAQL statement below the graph. The third datapoint (in the order of the legend) shows the context of 5 weeks visualized as a histogram/heatmap. Without going into further details, all this is achieved by using the following CAQL primitives that are connected via pipes:

`metric(uuid, name)` — fetch metrics as identified by UUID and name
`delay(, , …)` – which delays the stream by the given durations
`stats:mean()` – which computes the mean value of a multi-valued stream
`histogram()` – which converts a multi-valued stream of values into a histogram

As you can see, the results of these methods are already quite accurate. For instance, the anomaly on May 5th is detected instantly. In order to fully implement the suggested procedure, we need to implement the outlier removal (Step 2), and apply a suitable normalization method (Step 3). We realize it would have been possible to implement a version of these steps using the existing CAQL functionality, but we gained additional flexibility by implementing a specialized CAQL function (`outlier:std_score`) for this purpose.

With this function we arrive at the results shown in Figure 4. The graph looks similar to Figure 3, but it also displays the deviation from the expectation in percent (red, left axis). Note that heavy outliers on June 17-19, do show up in the context one week later (June 24-26) but are filtered for computation of the outlier score, which remains relatively low.

Figure 4: Outlier detection CAQL function applied to Music Plays
Figure 4: Outlier detection CAQL function applied to Music Plays

Final Touch: Tuning Performance with CAQL Checks

Alright! Now we’ve got a way to compare current vs. historical data and we can generate alerts when we exceed expectations. Problem solved, right? Actually not quite.

One major hurdle remained: CAQL does heavy computation of data on-the-fly to produce graphs, making visualization sluggish. This problem was clearly visible in our dashboards. We truly couldn’t have it this way since dashboards are our primary communication channel. To solve this, Circonus suggested moving the computation upstream to the time of data ingestion and storing the result in a time series. This approach became the functional requirement basis for CAQL Checks.

CAQL Checks are a new feature in Circonus through which CAQL query results are converted into metrics, that can in turn be used like any other metric in the system (thresholding, graphing, alerting, etc). Under the hood, CAQL Checks are powered by an advanced stream processing engine, which evaluates the CAQL query against incoming metrics and emits the resulting values into the system.

To demonstrate the retrieval performance you can have a look at the following graph, which shows persisted context and outliers on yet another metric.

View Graph

Now, by putting Figure 4 on a dashboard, we have reached our first objective:

“Show the current vs. the expected amount of music plays on a dashboard.”
Alerting on Outliers

The use case would not be completely fulfilled until we found a way to be alerted upon detection of an anomaly. For example, we determined that being more than 20% under the expected volume was worthy of a notification. Thanks to the already existing alerting features, this condition can be formulated as a threshold against our outlier score:

“Send an alert when the outlier score falls below -20.”

Because CAQL Checks output the outlier scores as a metric, we can configure threshold-based alerting rules. Integrations allow in turn to send out notification through a number of channels (e.g. e-mail or Slack) and alert service managers and/or stakeholders. This completes our second objective: “Be alerted when the music plays are significantly below our expectations.”
As an added benefit, we also get uptime reports showing how frequently we fall below expectations (Figure 5).

Figure 5: Uptime Report for the music plays outlier score
Figure 5: Uptime Report for the music plays outlier score

Conclusion

At TouchTunes, there is a vision of building a strong collective understanding of our platforms and applications to empower leadership, management and execution of operations. Two key dimensions for achieving this, intelligence and communication, push the expectation for monitoring to be ever more accurate and reliable.

Enabling insight on volume of music plays is mission-critical to TouchTunes’ business. While it was clear that any implementation of static thresholding would invariably lead to a high number of false alarms and missed issues, the way to go was not evident from the start. After considering a number of approaches, it is thanks to a solid collaboration with Circonus that TouchTunes was able to enhance its ability to report on application and platform health via CAQL and the Outlier Detection model.
