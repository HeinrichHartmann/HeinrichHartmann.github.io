---
title: Gauss Elimination
date: 2020-05-27
author: Heinrich Hartmann
location: Stemwede
style: markdown
mathjax: true
draft: true
summary: >
    In this note we are going to study the following question: Given a Matrix A, find
    an transformation X with inverse Y, so that XAY has a "simpler" form.
---

<div style="visibility:hidden; display:none;">
    $$ {{< import file="static/v2/preamble.tex" >}} $$
</div>

In this note we are going to study the following question:

> Let $A \in Mat(n,m)$ be an $n \times m$ matrix, find an invertible transformation $X$ so that $X
> \cdot A$ has a "simpler" form.

Here, simple might mean that $A$ has diagonal form, $A$ has diagonal form with 0/1 on the diagonal
or that or that $A$ has upper/lower triangular form.

Such a relation will allow us to derive basic properties from $A$ from those of $B = X A$:

1. The rank of $A$ is the rank of $B$.
2. The image of $A$ is $X \cdot Im(B)$.
3. The kernel of $A$ is the kernel of $B$.
4. An inverse of $A$ is $B^{-1} \cdot X^{-1}$.

In general we will not be able to find a transformation, that brings $A$ into diagonal form. The
best we can get is a special case of upper-triangular matrices called [row echolon form](https://en.wikipedia.org/wiki/Row_echelon_form).
E.g.

$$
B = \begin{bmatrix}
1 & *  & *   & *   & * & * & * & * \\\\
0 & 0  & 1   & *   & * & * & * & * \\\\
0 & 0  & 0   & 1   & * & * & * & * \\\\
0 & 0  & 0   & 0   & 0 & 1 & * & * \\\\
0 & 0  & 0   & 0   & 0 & 0 & 0 & 0 \\\\
\end{bmatrix}
$$

## Basic Transformations

We will construct the matrices $X$ explicitly as a product of basic transformations:

* Shear Matrices (Gauss/Frobenius)
* Rotations (Givens)
* Reflections (Householder)
* Diagonal Matrices
* Permutation Matrices



## Geometric Version

This question has a geometric reformulation.

> Given m vectors $a_1,\dots,a_m \in \IR^n$, find a transformation such that the transformed vectors
> $X a_1,\dots, X a_m$ have a "simple" configuration.



**Setting:** Let $A \in Mat(m,n)$ be an $m \times n$ matrix, over a field $\kappa=\IQ,\IR,\IC,\dots$.

**Question:** Given $A$ find matrices $X \in Mat(m,m),Y \in Mat(n,n)$ with explicit inverses $X^{-1}, Y^{-1}$,
so that
$$ B := X^{-1} \cdot A \cdot Y \quad\Leftrightarrow\quad A = X \cdot B \cdot Y^{-1}  $$
has a "simpler" form.

Such a relation will allow us to derive basic properties from $A$ from those of $B$:

1. The rank of $A$ is the rank of $B$.
2. The image of $A$ is $X \cdot Im(B)$.
3. The kernel of $A$ is $Y \cdot Ker(B)$.
4. An inverse of $A$ is $Y \cdot B^{-1} \cdot X^{-1}$.

In case $B$ is diagonal all those properties can readily be computed.

## Results

**Proposition (Gauss Elimination)**
There exists $X,Y$ so that $D := X \cdot A \cdot Y^{-1}$ is a diagonal matrix with entries
$$ D = diag(1\dots,1,0,\dots,0). $$

**Proposition (SVD)**
Let $\kappa = \IR$.
There exists orthogonal matrices $X,Y$, so that $D := X \cdot A \cdot Y^{-1}$ is a diagonal matrix with entries
$$ D = diag(\sigma_1,\dots,\sigma_r,0,\dots,0) $$
where $\sigma_1 \geq \sigma_2 \dots \geq \sigma_r > 0.$

**Proposition (Reduced Row Echolon Form)**
There exists $X$, so that $B := X \cdot A$ has [reduced row echolon form](https://en.wikipedia.org/wiki/Row_echelon_form)
E.g.
$$
B = \begin{bmatrix}
1 & *  & 0   & 0   & * & * \\\\
0 & 0  & 1   & 0   & * & * \\\\
0 & 0  & 0   & 1   & * & * \\\\
0 & 0  & 0   & 0   & 0 & 1 \\\\
0 & 0  & 0   & 0   & 0 & 0 \\\\
\end{bmatrix}
$$

**Proposition (QR Decomposition)**
Let $\kappa = \IR$.
There exists an orthogonal matrix $X$ so that $B = X \cdot A$ is an upper triangular matrix.

## Strategy

We will construct the matrices $X,X^{-1},Y,Y^{-1}$ explicitly as a product of basic transformations:

* Shear Matrices (Gauss/Frobenius)
* Rotations (Givens)
* Reflections (Householder)
* Diagonal Matrices
* Permutation Matrices

The idea is always the same: We proceed inductively one column of A at a time.  At each step we will
have a number $k$ of columns already in the desired form.  The next transformation needs to leave
the span of first $k$ columns invariant, and transform the next column into a better position.


## Basic Transformations

**Proposition (Shear Transformations)** Let $v,w \in \IR^n$ be two vectors with $w^t v = 0$.
Then $$T = I + v w^t$$ is an invertible transformation with inverse $T^{-1} = I - v w^t$.

**Proof** $ T \cdot T^{-1} = I - v w^t v w^t = I$, since $w^t v = 0$. ▮

**Example**
Let $v = [0,a], w=[1, 0]$, then
$$
\begin{bmatrix}
 1 & a \\\\
 0 & 1
\end{bmatrix}
$$
