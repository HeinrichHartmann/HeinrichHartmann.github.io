
## Explaination


### Sampling Method

We model the error introduce by [Bernuoulli
sampling](https://en.wikipedia.org/wiki/Bernoulli_sampling) with a given rate to
a number of statistics.

In the model, we start with the full dataset (the "population") that we assume to be available to us.
We produce a sampled dataset (the "sample").

For each point in the population we make independent sampling decisions with
probability given by the sampling rate.

- With sampling rate 100% all the elements in the population are retained.
- With sampling rate 50%, there is a 50% chance that any given point will be retained.
- With sampling rate 0% the sample is empty.

It's my understanding, that OpenTelemetry is effectively using Bernoulli
Sampling on trace-level, although [the
spec](https://github.com/open-telemetry/oteps/blob/main/text/trace/0170-sampling-probability.md#traceidratio-sampler)
is not 100% clear on this.

### Count Estimation

In the Bernoulli model, the sample size follows a binomial distribution with $p$ sampling rate, and $N$ population size.
