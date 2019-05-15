---
layout: "post"
author: "Heinrich Hartmann"
location: Stemwede, Germany
title: Quantiles
permalink: /math/quantiles.html
hidden: false
categories:
- math
mathjax: true
abstract: > 
  There are a number of competing definitions of percentiles commonly found in the wild.
  In this note we will explore a few of them. See how they relate to each other,
  and comment on their suitability for monitoring  and SLA/SLO formulations.
---

{::options math_engine="nil" /}

## Quantiles for Random Variables

Let $P$ be a probability distribution on the real axis.
For notational reasons we also choose a $P$-distributed random variable $X$.

**Definition.** 
For any number $q \in [0,1]$, a *naive q-quantile* for $P$ is a number $$y \in \IR$$, so that
BEGIN_MATH
    P[X \leq y] = q.
END_MATH

**Remark.**
- Naive quantiles do not always exist. Take $P=\delta_0$. Here only the numbers 0,1 are realized as naive quantiles.

- Naive quantile are not always unique. Take $q=.5$ and $P=\half (\delta_0 + \delta_1)$. Here every number $y\in(0,1)$ qualifies as a $.5$-quantile.

**Definition.**
A number $y$ is a q-quantile, for some number $q \in [0,1]$, and a random variable $X$,
if the following conditions are met:
BEGIN_MATH
   P[X < y] \leq q \qtext{and} P[X > y] \leq 1-q
END_MATH

**Example.** If $P=\delta_0$, then all $q$ quantiles are $0$.

**Example.** If $P=\half (\delta_0 + \delta_1)$, then:

- For $q<.5$ only $y=0$ is a $q$-quantile.
- For $q=.5$ all numbers $0<y<1$, are $.5$-quantiles.
- For $q>.5$ only $y=1$ is a $q$-quantile.

**Remark**.
- Exsistence. For every $X,q$ there is at least one $q$-quantile.
- Uniqueness. As we have seen $q$-quantiles might be non-unique.
- If $X$ has a probability density $p$, which is positive everywhere, then all quantiles are unique.

This definition of Quantile seems to be universally agreed up-on.
At least this is what I learned at University (e.g. [Georgii - Staistics](https://www.degruyter.com/view/product/184322)).
and how [Wikipedia](https://en.wikipedia.org/wiki/Quantile) (accessed on 2019-05-13) defines this.
Also I don't see much room for an alternaive definition in this setting.

## Quantiles for Datasets

Given a dataset $D=(x_0,...x_n)$ of real numbers, with $n\geq0$, how can we define quantiles for D?
Note, that we started out index at 0, so that we have n+1 samples in this dataset.
This will simplify the formulas below.

**Definition** A *naive $q$-quantile* for a dataset $D$ is a sample $y \in D$, so that:
BEGIN_MATH
     \frac{\CSet{ x \in D }{ x < y }}{n} = q
END_MATH

**Example**.
- For $D=(0)$, only 0,1 are realized as naive quantiles.
- For $D=(0,1)$, every number $0<y<1$, qualifies as naive .5-quantile.
- For $D=(0,1,2)$, then $y=1$ is the unique naive .5-quantile.
- For $D=(0,1,\dots,9,10)$, then $y=9$ is the unique naive .9-quantile.

Again, naive quantiles do not need to exist and are non-unique.

To fix this situation, we need a more general definition.
One natural and very general approach is to assign a probability distribution $P$ to $D$, 
and then take the quantiles of $P$ as we defined them above.

## Empirical Quantiles

The simplest random variable we can assign to $D$, is the so-called *empirical* distribution, 
which looks like this:
BEGIN_MATH
    P_{emp} = \frac{1}{n+1} \sum_{x=0}^n \delta_{x_i} = \frac{1}{\C D} \sum_{x \in D} \delta_x
END_MATH

So a random variable $X_{emp} \sim P_{emp}$ takes values that are uniformly randomly chosen from $D$.

**Definition.** An *empirical $q$-quantile* for D is a $q$-quantile of $P_{emp}$.
This means, that the following conditions should be met:
BEGIN_MATH
  \frac{\CSet{x \in D}{x < y}}{\C D} \leq q \qtext{and} \frac{\CSet{x \in D}{x > y}}{\C D} \leq 1-q.
END_MATH

**Remark.**
Since empirical quantiles are quantiles of a probability distribution,
empirical quantiles always exists but are potentially non-unique.

**Comment.**
I always assumed that this was the only sensible quantile definition for datasets, that should be used.
Hence, this is what I used in my [Statistics for Engineers](https://github.com/HeinrichHartmann/Statistics-for-Engineers) 
courses.
As we will see, there are competing views on this.

## Practical Choice: The Minimal Quantile for a Dataset

In practical applications one often want's to make statements of the form:

> 95% of all requests were served within 500ms.

The quantile version that allows you to make those statments exactly, is the minimal quantile.

**Definition.** For $q>0$ the minimal $q$-quantile $Q_q^{min}$ for a dataset $D$ is defined as
the minimal number $y$ so that
BEGIN_MATH
   \frac{\CSet{x \in D}{x \leq y}}{\C D} \geq q.
END_MATH

**Proof.** We have to show, that the minimal quantile is well defined.
To do so, consider the function:
BEGIN_MATH
  r(y) = \CSet{x \in D}{x \leq y} / \C D.
END_MATH
Clearly: $r$ is monotonically increasing and left-continues.
Moreover, if $y < \min(D)$ then $r(y) = 0$, and if $y > \max(D)$ then $r(y) = 1$.
This shows that $A = \Set{y}{r(y) \geq q}$ is non-empty, closed and bounded from below.
Hence it has a unique minimum.
QED.

**Example.** If $D$ is a set of request latencies, then the condition:

> 95% of all requests were served within 500ms.

is equivalent to the condition:

> The minimal $.95$-quantile was less or equal than 500ms.

**Proof.** If $Q^{min}_{.95} \leq 500ms$, then

BEGIN_MATH
\CSet{x \in D}{x \leq 500ms} \geq \CSet{x \in D}{x \leq Q^{min}_{.95}} \geq .95 \cdot \C D.
END_MATH

Conversely if 
BEGIN_MATH
\CSet{x \in D}{x \leq 500ms} \geq .95 \cdot \C D
END_MATH
then $Q_{.95}^{min} \leq 500ms$, since $Q_{.95}^{min}$ is defined as the smalles number
that fulfills this condition. QED.

**Proposition.**
The minimal $q$-quantile $Q^{min}_q$ is an empirical $q$-quantile.

**Proof.**
We need to show that 
- (A) $\CSet{x \in D}{x < Q^{min}} \leq q \C D$, and 
- (B) $\CSet{x \in D}{x > Q^{min}} \leq (1-q) \C D$.

Ad A) Let's assume for the contradiction, that $\CSet{x \in D}{x < Q^{min}} > q \C D$.
Choose $y = \max \Set{x \in D}{ x < Q^{min} }$, then $y<Q^{min}$ since $D$ is discrete,
and still the inequaility $\CSet{x \in D}{x \leq y} \geq q \C D$ holds.
This contracicts the minimality of $Q^{min}$.

Ad B) We have
BEGIN_MATH
\frac{\CSet{x \in D}{x > Q^{min}}}{\C D} = 1 - \frac{\CSet{x\in D}{ x \leq Q^{min}}}{\C D} \leq 1 - q.
END_MATH
This shows that $Q^{min}_q$ is an empirical quantile.
QED.

**Proposition**
Every other empirical $q$-quantile $y$ is larger or equal to $Q^{min}_q$.

**Proof.** 
Let $y$ be an empirical $q$-quantile. 
By definition we have $\C \Set{x \in D}{x > y} \leq (1-q) \C D$, inverting both sides, 
we get $\CSet{x \in D}{x \leq y} \geq q \C D$. By definition, $Q^{min}_q$ is
the smallest number that satisfies this condition, hence $Q^{min}_q \leq y$.
QED.

## Sorting and Ranks

Quantiles of datasets are commonly computed by sorting the dataset.

Let
BEGIN_MATH
  D_{sorted} = (x_{(0)} \leq x_{(1)} \leq \dots \leq x_{(n)}) 
END_MATH
be the sorted version of $D$.

**Definition.** We say that the number $x_{(k)} \in D$ has rank $k$.

We can see from an example like $D=[0,1,1,2]$, that the rank of $x$ is not uniquely determined. 
Here $x=1$ can have rank $1$ or $2$.
So we may ask:

> What are the possible ranks for $x \in D$?

**Definition.** We define the following functions:
BEGIN_MATH
\begin{align}
Count_{\<}(D; y)   &= \CSet{ x \in D }{ x < y } \quad & \quad
Count_{\leq}(D; y) &= \CSet{ x \in D }{ x \leq y } \nl
Count_{\>}(D; y) &= \CSet{ x \in D }{ x > y } \quad & \quad
Count_{\geq}(D; y) &= \CSet{ x \in D }{ x \geq y } \nl
\end{align}
END_MATH

**Remark.** We clearly have:
BEGIN_MATH
\begin{gather}
  Count_{\<}(D; y) + Count_{\geq}(D; y) = \C D \nl
  Count_{\leq}(D; y) + Count_{>}(D; y) = \C D
\end{gather}
END_MATH
as well as
\begin{gather}
  Count_{\<}(D; x_{(k)}) \leq k  \qtext{and} Count_{\leq}(D; x_{(k)}) \geq k + 1.
\end{gather}

**Proposition.**
The possible ranks of $x \in D$ are precisely the numbers:
BEGIN_MATH
   \\{ Count_{\<}(D; x), \dots, Count_{\leq}(D; x) - 1 \\}.
END_MATH

**Proof.** 
First, lets show that the numbers are indeed ranks for $x$.
For $a=Count_{\<}(D; x)$ we know that $a$ samples are smaller than than $x$, so $x_{(a)} \geq x$.
For $b=Count_{\leq}(D; x) = \C D - Count_{\>}(D; x)$, there are $\C D - b$ samples which are 
larger than $x$, so $x_{(b)} \leq x$.
Hence, for all numbers $a \leq k \leq b$, we find $x \leq x_{(k)} \leq x$.

On the other hand, if $x$ has rank $k$, i.e. $x = x_{(k)}$, then we have seen in the last remark
that $Count_{\<}(D; x) \leq k$ and $Count_{\leq}(D; x) - 1 \geq k$. QED.

## Interpolated Quantiles

For $0 < q < 1$, we define at the following indices:
BEGIN_MATH
        k_- = \floor{n q} \quad\text{and}\quad k_+ = \ceil{n q}.
END_MATH

We have $k_- \leq k_+$, with $\mathrm{abs}(k_+ - k_-) \leq 1$. Moreover, $k_+ = k_-$ if and only if $nq$ is an integer.

**Proposition.** For every number $0<q<1$, and every q-quantile $y$ of $X_{emp}$ we have:
BEGIN_MATH
        x_{(k_-)} \;\leq\; y \;\leq\; x_{(k_+)}.
END_MATH

**Proof.** Let's assume for a contradition, that $y < x_{(k_-)}$. We have:
BEGIN_MATH
\begin{align}
   1-q \geq&\; \frac{1}{\C D}\CSet{ x \in D }{ x > y } 
       \geq\; \frac{1}{\C D}\CSet{ x \in D }{ x \geq x_{(k_-)} } \nl
       \geq&\; \frac{n - k_- + 1}{\C D}
       \geq\; \frac{n + 1 - \floor{n q}}{n+1} 
       =\; 1 - \frac{\floor{nq}}{n+1}.
\end{align}
END_MATH

It follows that $q \leq \frac{\floor{nq}}{n+1}$. But $\floor{nq} \leq nq$, so:
$q \leq \frac{\floor{nq}}{n+1} \leq \frac{n}{n+1}q < q$; a contradiction.
Hence $x_{(k_-)} \leq y$.  The other inequality follows similarly. QED.

**Definition.**


[SciPy](https://docs.scipy.org/doc/scipy-0.7.x/reference/generated/scipy.stats.mstats.mquantiles.html)
[NumPy](https://docs.scipy.org/doc/numpy/reference/generated/numpy.percentile.html), [R](https://www.rdocumentation.org/packages/stats/versions/3.6.0/topics/quantile)
