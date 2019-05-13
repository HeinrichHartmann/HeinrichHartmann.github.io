---
layout: "post"
author: "Heinrich Hartmann"
location: Stemwede, Germany
title: Percentiles
permalink: /math/percentiles.html
hidden: false
categories:
- math
mathjax: true
abstract: > 
  There are a number of competing definitions of percentiles commonly found in the wild.
  In this note we will explore a few of them. See how they relate to each other,
  and comment on their suitability for monitoring  and SLA/SLO formulations.
---

## Quantiles for Random Variables

Let $X$ be a random variable on the real axes.
A naive  q-quantile for $X$ is a number $y$, so that $P[X \leq y] = q$.
However, such a number might not exists since the proability of $P[X<y]$ may jump at discrete points and ommit the number $q$.

As an extreme example, take $X=\delta_0$. 
Here only the numbers 0,1 are realized as naive quantiles.

Furthermore, even if a naive quantile $y$ with $P[X<y]=q$ exists, it might not be unique.
Take as an example $q=.5$ and $X=\half (\delta_0 + \delta_1)$, where every number $y\in(0,1)$ qualifies as a $.5$-quantile.

**Definition.**
A number $y$ is a q-quantile, for some number $q \in [0,1]$, and a random variable $X$,
if the following conditions are met:

$$
   P[X < y] \leq q \quad\text{and}\quad P[X > y] \leq 1-q
$$


**Remark**. 
- For every $X,q$ there is at least one $q$-quantile.
- If $X$ has a probability density $p$, which is positive everywhere, then all quantiles are unique.

This definition of Quantile seems to be universally agreed up-on.
At least this is what I learned at University (e.g. [Georgii - Staistics](https://www.degruyter.com/view/product/184322)).
and how [Wikipedia](https://en.wikipedia.org/wiki/Quantile) (accessed on 2019-05-13) defines this.
Also I don't see much room for an alternaive definition in this setting.

## Quantiles for Datasets

Given a dataset $D=(x_1,...x_n)$ of real numbers, how can we define quantiles for D?

A naive definition fails for the same reason as above.

One natural and very general approach is to assign a random variable $X$ to $D$, and then take the
quantiles of $X$ as we defined them above.

## Empirical Quantiles

The simplest random variable we can assign to $D$, is the so-called *empirical* distribution, which looks like this:

$$
    X_{emp} = \frac{1}{n} \sum_{x=1}^n \delta_{x_i} = \frac{1}{\#D} \sum_{x \in D} \delta_x
$$

So $X_{emp}$ takes values that are uniformly randomly chosen from $D$.

A $q$-quantile for $X_{emp}$ is a number $y$ so that:

$$
    \# \{ x \in D | x < y \}/\#D \leq q \quad\text{and}\quad \# \{ x \in D | x > y \}/\# D \leq (1-q)
$$

I always assumed that this was the only sensible quantile definition for data-sets, that should be used.
Hence, this is what I used in my [Statistics for Engineers](https://github.com/HeinrichHartmann/Statistics-for-Engineers) 
courses.
As we will see, don't agree with me here.

## Quantiles from Order Statistics

Quantiles are closely related to order statistics.
Instead of asking: 

>  Where a point $y$, so that $k$ samples were below $y$.

We could also ask:

>  Where is the $k$-the ordered sample?

And get similar answers.

**Proposition**. Let $0<q<1$ and

$$
    k_- = \floor{ n q } + 1 \\
    k_+ = \ceil{ n q } + 1
$$

then every empirical $q$ quantile is always between $x_{(k_-)}$ and $x_{(k_+)}$.

**Proof.**
To see this, note that there are at most $k-1$ samples smaller than $x_{k}$.
So we find:

$$
    P[X < x_{(k_-)}] = \frac{1}{n} \sum_{x\in D} \mathbb{1}\{x_{(k_-)} < x \}
    \leq \frac{k_- - 1}{n} = \frac{\floor{n-1 q}}{n} \leq q.
$$

Hence every $q$-quantile $y$ has to be larger or equal to  $x_{k_{-}}$.
On the other hand, there are at most $n-k-1$ samples that are larger than $x_{k}$,
so we find:

$$
   P[X > x_{(k_+)}] = \frac{1}{n} \sum_{x\in D} \mathbb{1}\{x_{(k_+)} > x \}
   \leq \frac{n-k_+-1}{n} = \frac{n-\ceil{n q}}{n} = 1 - \frac{\ceil{n q}}{n}
   < 1-q
$$

This shows that every $q$-quantile has to be smaller or equal to $x_{k_+}$. QED.


In fact, if $x_{(k)}$ is the $k$-th ordered sample, then we 

[SciPy](https://docs.scipy.org/doc/scipy-0.7.x/reference/generated/scipy.stats.mstats.mquantiles.html)
[NumPy](https://docs.scipy.org/doc/numpy/reference/generated/numpy.percentile.html), [R](https://www.rdocumentation.org/packages/stats/versions/3.6.0/topics/quantile)
