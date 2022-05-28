<!-- -*- eval: (add-hook 'after-save-hook '(lambda () (shell-command "make"))); -*- -->

## Explanation


### Sampling Method

We model the error introduce by [Bernuoulli sampling](https://en.wikipedia.org/wiki/Bernoulli_sampling) to a number of statistics that are relevant for IT operations.
This sampling model used by OpenTelemetry to sample on trace-level (although the [spec](https://github.com/open-telemetry/oteps/blob/main/text/trace/0170-sampling-probability.md#traceidratio-sampler) is not clear on this.)

In the model, we start with the full dataset $X$ (the "population") that we assume to be available to us.
We produce a sampled dataset $S$ (the "sample").

For each point in the population we make independent sampling decisions with
probability given by the sampling rate.

- With sampling rate 100% all the elements in the population are retained.
- With sampling rate 50%, there is a 50% chance that any given point will be retained.
- With sampling rate 0% the sample is empty.

### Error Estimates

The error e

### Count Estimation

In the Bernoulli model, the sample size $n=\\# S$ follows a [Binomial distribution](https://en.wikipedia.org/wiki/Binomial_distribution#Statistical_inference) 
$$n \sim B(N,p)$$
where with $p$ is the sampling rate $p$, and $N = \\#X$ is population size.
Hence the expected sample size is $E[n] = N \cdot p$, and $Var[n] = N \cdot p \cdot (1-p)$.
These formulas are used to calculate the _Request Count_ and _Request Rate_ statistics.

For the error rate calculation, we assume that $X_e \subset X$ is a subset of "error" requests.
Applying Bernoulli sampling, we get $S_e = X_s \cap S \subset S$, the set of errors in the sample.

The estimated count is $\\# S_e$
