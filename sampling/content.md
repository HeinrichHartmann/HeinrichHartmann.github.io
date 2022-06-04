<!-- -*- eval: (add-hook 'after-save-hook '(lambda () (shell-command "make") nil 'local)); -*- -->

## Explanation

### Sampling Method

We model the error introduce by [Bernuoulli sampling](https://en.wikipedia.org/wiki/Bernoulli_sampling) to a number of statistics that are relevant for IT operations.
This sampling model used by OpenTelemetry to sample on trace-level (although the [spec](https://github.com/open-telemetry/oteps/blob/main/text/trace/0170-sampling-probability.md#traceidratio-sampler) is not clear on this.)

For each point in the population we make independent sampling decisions with
probability given by the sampling rate.

- With sampling rate 100% all the elements in the population are retained.
- With sampling rate 50%, there is a 50% chance that any given point will be retained.
- With sampling rate 0% the sample is empty.

### Estimation

For some statistics, we have theoretical models that allow us to estimate the expected values and variances.
In the following we denote by $N$ the number of requests in the population, by $K$ the number of errors, 
and by $n$ the size of the sample.

#### Count Estimation

In the Bernoulli model, the sample size $n$ follows a [Binomial distribution](https://en.wikipedia.org/wiki/Binomial_distribution#Statistical_inference), $n \sim B(N,p)$.s
where with $p$ is the sampling rate $p$, and $N = \\#X$ is population size.
Hence the expected sample size is $E[n] = N \cdot p$, and $Var[n] = N \cdot p \cdot (1-p)$.
These formulas are used to calculate the _Request Count_ and _Request Rate_ statistics.

For the error rate calculation, we denote by $k \leq n$ the number of errors in the sample set.
The error count also follows a binomial distribution $k \sim B(K,p)$.

The rate of errors in the sample is denoted by $r = k/n$ (for $n>0$).
The error rate can be roughly approximated as $r ~ k / (N \cdot p)$, but estimate breaks down for larger error rates. 
Example: If $K=N$, then $k=n$ and $r=1$, but $Var[k / (N \cdot p)] = (1-p) / (p N) > 0$.

Using the observation that conditional $(k|n)$ follows a Hypergeometric Distribution $Hyp(N,K,n)$,
and filling in $r = K/N$ for $n=0$, one derives $E[r] = K/N$.


<details>
<summary>Proof</summary>
</details>

### Simulation

We simulate multiple iterations of sampling decisions is straight forward.

* We repeatedly select a subset $S \subset X$ by running bernoulli experiments for each sample $x \in X$.
* We compute the estimator on the sample $S$, and record the results.
* In the above tables we report mean, and standard-deviation of the computed estimations.
* Note that mean and standard-deviation are sensible measure here, since the distribution of the estimators across different samples is well behaved (very close to normal), in all cases.
