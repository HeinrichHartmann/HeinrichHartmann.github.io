<!-- -*- eval: (add-hook 'after-save-hook '(lambda () (shell-command "make") nil 'local)); -*- -->

# Explanation

We model the error introduce by [Bernuoulli sampling](https://en.wikipedia.org/wiki/Bernoulli_sampling) to a number of statistics that are relevant for IT operations.
This sampling model used by OpenTelemetry to sample on trace-level (although the [spec](https://github.com/open-telemetry/oteps/blob/main/text/trace/0170-sampling-probability.md#traceidratio-sampler) is not clear on this.)

For each point in the population we make independent sampling decisions with
probability given by the sampling rate.

- With sampling rate 100% all the elements in the population are retained.
- With sampling rate 50%, there is a 50% chance that any given point will be retained.
- With sampling rate 0% the sample is empty.

In the following we denote by $N$ the number of requests in the population, by $K$ the number of errors, 
and by $n$ the size of the sample.

## Estimation

For some statistics, we have theoretical models that allow us to estimate the expected values and variances.

In the Bernoulli model, the sample size $n$ follows a [Binomial distribution](https://en.wikipedia.org/wiki/Binomial_distribution#Statistical_inference), $n \sim B(N,p)$.s
where with $p$ is the sampling rate $p$, and $N = \\#X$ is population size.
Hence the expected sample size is $E[n] = N \cdot p$, and $Var[n] = N \cdot p \cdot (1-p)$.
These formulas are used to calculate the _Request Count_ and _Request Rate_ statistics.

For the error rate calculation, we denote by $k \leq n$ the number of errors in the sample set.
The error count also follows a binomial distribution $k \sim B(K,p)$.

The rate of errors in the sample is denoted by $r = k/n$ (for $n>0$).
Using the observation $k$ conditioned on $n=const$ follows a [Hypergeometric distribution](https://en.wikipedia.org/wiki/Hypergeometric_distribution) $Hyp(N,K,n)$,
and filling in $r = K/N$ for $n=0$, one derives the formula $E[r] = K/N$, and 

$$ Var[r] = \frac{K (N-K)}{N^2} \frac{1}{N-1} \sum_{n=1}^N { N \choose n } p^n (1-p)^{N-n} \frac{N-n}{n} $$

We use these formula for estimating the standard-deviation of the _Error Rate_ above.

<details>
This can be seen as follows:

$$
\begin{aligned}
  E[r] &= \sum_{S \subset [N]}  P\\{S\\} \cdot r(S) \\\\ 
       &= \sum_{S \subset [N]} p^{\\# S}(1-p)^{N - \\#S} \cdot r(S) \\\\ 
       &= \frac{K}{N} q^N + \sum_{n \geq 1,k \leq n} p^n q^m \cdot \frac{k}{n} \cdot \\# \\{ S \subset [N] \| \\#S=n, \\#S\cap[K] = k \\} \\\\
       &= \frac{K}{N} q^N + \sum_{n \geq 1,k \leq n} { N \choose n } p^n q^m \frac{   { K \choose k }  { N-K \choose n-k } }{  { N \choose n } } \cdot \frac{k}{n} \\\\
       &= \frac{K}{N} q^N + \sum_{n \geq 1} B(N,p)[n] \cdot \frac{1}{n} \cdot \sum_{k \leq n} Hyp(N,K,n)[k] \cdot k  \\\\
       &= \frac{K}{N} q^N + \sum_{n \geq 1} B(N,p)[n] \cdot \frac{1}{n} \cdot  \frac{n K}{N} \\\\
       &= \frac{K}{N} q^N + \frac{K}{N} (1 - q^N) \\\\
       &= \frac{K}{N} \\\\
  E[r^2] &= \frac{K^2}{N^2} q^N + \sum_{n \geq 1} B(N,p)[n] \cdot \sum_{k \leq n} Hyp(N,K,n)[k] \cdot \frac{k^2}{n^2}  \\\\
       &= \frac{K^2}{N^2} q^N + \sum_{n \geq 1} B(N,p)[n]  \cdot \frac{1}{n^2} \cdot [ n \frac{K (N-K) (N-n)}{N^2(N-1)} + n^2 \frac{K^2}{N^2} ]  \\\\
       &= \frac{K^2}{N^2} q^N + \sum_{n \geq 1} B(N,p)[n] \cdot \frac{K^2}{N^2} [ \frac{1}{n} \frac{L m}{K(N-1)} + 1]  \\\\
       &= \frac{K^2}{N^2} q^N +  \frac{K^2}{N^2} \cdot (1-q^m)  +  \frac{L}{K(N-1)} \cdot [ \sum_{n \geq 1} B(N,p)[n]  \cdot \frac{m}{n} ]  \\\\
       &= \frac{K^2}{N^2} + \frac{K L}{N^2(N-1)} \cdot [ \sum_{n \geq 1} B(N,p)[n]  \cdot \frac{m}{n} ]  \\\\
Var[r] &= E[r^2] - E[r]^2 \\\\
       &= \frac{K L}{N^2(N-1)} \cdot \sum_{n \geq 1} B(N,p)[n] \cdot \frac{m}{n} 
\end{aligned}
$$

Where $q = 1-p, m = N-n,L=N-K$, and we used the known formulas for moments of the Hypergeometric Distribution.
</details>

## Simulation

We simulate multiple iterations of sampling decisions is straight forward.
We repeatedly select a subset $S \subset X$ by running Bernoulli experiments for each sample $x \in X$.
Then we compute the estimator on the sample $S$, and record the results.
In the above tables we report mean, and standard-deviation of the computed estimations.

Note that mean and standard-deviation are sensible measure here, since the
distribution of the estimators across different samples is well behaved (very
close to normal), in all cases.
