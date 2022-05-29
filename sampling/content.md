<!-- -*- eval: (add-hook 'after-save-hook '(lambda () (shell-command "make") nil 'local)); -*- -->

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

### Estimation

For some statistics, we have theoretical models that allow us to estimate the expected values and variances.

#### Count Estimation

In the Bernoulli model, the sample size $n=\\# S$ follows a [Binomial distribution](https://en.wikipedia.org/wiki/Binomial_distribution#Statistical_inference) 
$$n \sim B(N,p)$$
where with $p$ is the sampling rate $p$, and $N = \\#X$ is population size.
Hence the expected sample size is $E[n] = N \cdot p$, and $Var[n] = N \cdot p \cdot (1-p)$.
These formulas are used to calculate the _Request Count_ and _Request Rate_ statistics.

For the error rate calculation, we assume that $X_e \subset X$ is a subset of "error" requests.
Applying Bernoulli sampling, we get $S_e = X_s \cap S \subset S$, the set of errors in the sample.

The error count $n_e = \\# S_e$ follows a binomial distribution $n_e \sim B(N_e,p)$, where $N_e = \\# X_e$.

Unfortunately, the distribution of the error rate $r_e = \\# S_e / \\# S$ is not easily derived.
It can be roughly approximated by $\\# S_e / (N_e \cdot p)$, which is what we use in the table above.
Simulation shows, that this estimate breaks down for larger error rates e.g. $X_e = X$.

### Simulation

We simulate multiple iterations of sampling decisions is straight forward.

* We repeatedly select a subset $S \subset X$ by running bernoulli experiments for each sample $x \in X$.
* We compute the estimator on the sample $S$, and record the results.
* In the above tables we report mean, and standard-deviation of the computed estimations.
* Note that mean and standard-deviation are sensible measure here, since the distribution of the estimators across different samples is well behaved (very close to normal), in all cases.


