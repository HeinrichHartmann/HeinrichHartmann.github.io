---
title: Numerical Decompositions of Linear Maps
date: 2021-02-23
author: Heinrich Hartmann
location: Stemwede
style: markdown
Draft: false
mathjax: true
---
<style>
.markdown-container {
 width: 60em;
}
@media only screen and (max-width: 60em) {
    .markdown-container {
        text-align: left;
        width: 100%;
        margin: 0;
        margin-top: 3em;
        padding: 0.1em;
    }
}

</style>

<div style="display:none">
$$
  {{< import file="static/v2/preamble.tex" >}}
  \newcommand{\id}{\mathbb{1}}
  \newcommand{\oo}{\mathbb{0}}
  \newcommand{\iff}{\;\Leftrightarrow\;}
$$
</div>

Working as a mathematician, Linear Algebra was the bread and butter of my daily work.

However, I never managed to get fluid with numeric linear algebra.

While solving a
linear system $Ax=b$ is a relatively straight-forward tasks that is well documented, there are lot's
of basic abstract concepts, where numeric solutions are clearly possible but not so well
documented. In this note, we are going to visit a few of those concepts and explain numeric
approaches.

## Classification of Linear Maps

Linear maps are classified by the following elementary result.

{{% env %}}
**Proposition (Rank Decomposition).**
For every linear map $f: V \ra W$ between finite dimensional vector spaces, there are bases $B$ of
$V$ and $C$ of $W$, so that the matrix representation of $f$ with respect to $B,C$ has the
block-diagonal form:

$$
    {}_{C}f_B
    = \id^{r}\_{m,n} \qtext{where}
    \id^{r}\_{m,n} = \begin{bmatrix}
    \id_r & 0   \\\\
    0 & \oo\_{m-r,n-r} \\\\
    \end{bmatrix}.
$$

Here $\id_r$ is the $r\times r$-identity matrix, and $\oo\_{m,n}$ is the $m\times n$ zero matrix.
The number $r$ does not depend on the choice of $B,C$ and is called the rank $rk(f)$ of $f$.
{{% /env %}}

In other words, every linear map is linear equivalent to a coordinate projection.

{{% fold Proof %}}
I was not able to find a proof of this well known classification result on Wikipddia, so we give a
short proof here.

Let $c_1,\dots,c_r$ be a basis of $Im(f)$. Choose pre-images $b_i$ of $c_i$.
The vectors $b_i$ are linearly independent, since they
map to linearly independent vectors under $f$. Furthermore $b_i$ do not lie in $Ker(f)$.
By the [dimension formula](https://en.wikipedia.org/wiki/Linear_map#Kernel,_image_and_the_rank%E2%80%93nullity_theorem), $dim(Ker(f)) = m-r$ and we can complete $b_i$ to a basis of $V$ with
vectors from $Ker(f)$. Complete $c_i$ to a basis in an arbitrary way.
Then $f(b_i)=c_i$ for $i\leq r$ and $f(b_i) = 0$ for $i > r$ as required. QED.
{{% /fold %}}

The equivalent formulation in terms of matrices reads as follows:

{{% env %}}
**Proposition (Matrix Rank Decomposition).** For every matrix $A \in M(m,n)$ there exists 
invertible matrices $X \in M(n), Y\in M(m)$ so that
$$
    Y^{-1} A X = \id^{r}_{m,n}
$$
{{% /env %}}

### Applications

Once such a representation is established, many linear algebra constructions become trivial.  Using
the transformations $X,X^{-1},Y,Y^{-1}$ we can translate problems between $A$ and $\id^{r}_{n,m}$
back and forth. For example:

$$
Ax = b \iff \id^{r}\_{m,n} x' = b' \iff
\begin{Bmatrix}
x'[i] = b'[i] & i\leq r \\\\
    0 = b'[i] & i > r
\end{Bmatrix}
$$
Where $x'=X^{-1} x$ and $b'=Y^{-1}b$. This equation has a solution if and only if the components $b'[i], i>r$ vanish.
In this case one solution is given by $x_0'= I^r_{n,m} b'$. All other solutions have the form $x' = x_0' + c$,
where $c$ is any vector in $\IR^n$ with $c[i] = 0$ for $i \leq r$.
Translated to the original setting we find that $x_0 =  X I^r_{n,m} Y^{-1} b$ and $x = x_0 + X c$.

In a similar way one finds that:

* The image of $A$ is spanned by the first r columns of $Y$.
* The kernel of $A$ is spanned by the last $n-r$ columns of $X$.
* A complement of $Im(A)$ is spanned by the last $m-r$ columns of $Y$.
* A complement of $Ker(A)$ is spanned by the first $r$ columns of $X$.
* A projection operator to $Im(A)$ is given by $Y I^r_m Y^{-1}$.
* A projection operator to $Ker(A)$ is given by $X (I_n - I^r_n) X^{-1}$.

This list of applications should convince the reader that such a decomposition is of high practical value.

## Numeric Rank Decomposition

In this chapter we are going to discuss a variety of ways of computing the rank decomposition of a
given matrix $A$. These methods differ with respect to computational complexity and numeric stability.
All of them are in practical use, and have interesting geometric ideas behind them.

### Rank Decomposition via Gauss Elimination

### Rank Decomposition via (Householder) Reflections

### Rank Decomposition via (Givens) Rotations

### Rank Decomposition via Gram-Schmidt Process

### Rank Decomposition via Singular Value Decomposition

{{% env %}}
**Proposition (Singular Value Decomposition)** For every linear map $f: V \ra W$,
between vector spaces with scalar products $(,)_V, (,)_W$ there exists orthonormal bases $B,C$ so
that the ${}_Cf_B$ has block-diagonal form:

$$
{}_{C}f_B =
\begin{bmatrix}
D_r & 0          \\\\
0   & 0\_{m-r,n-r} \\\\
\end{bmatrix}
$$

Where $D_r$ is a $r\times r$ diagonal matrix with positive entries.
{{% /env %}}

### Linear Problems

For a linear map $f: \IR^n \ra \IR^m$, we want to compute:

* [LP0] -- the rank of $f$.
* [LP2] -- a basis for the kernel $Ker(f) = \Set{x}{x \in \IR^n, f(x) = 0 \} \subset \IR^n$.
* [LP2] -- a basis for the image $Im(f) = \Set{f(x)}{x \in \IR^n \} \subset \IR^m$.
* [LP3] -- a projection $p: \IR^n \ra Im(f)$ onto the image of $f$.
* [LP3] -- a projection $q: \IR^m \ra Ker(f)$ onto the kernel of $f$.
* [LP4] -- a complementary subspace for $Im(f) \subset \IR^m$.
* [LP5] -- a complementary subspace for $Ker(f) \subset \IR^n$.
* [LP6] -- For a given vector $b \in \IR^m$, is $b \in Im(f)$ ?
* [LP7] -- For a given row-vector $a \in \IR^{n*}$, is there $y \in \IR^{m*}$ with $a = y \circ f$ ?
* [LP8] -- For a given vector $b \in \IR^m$, find $x \in \IR^n$ with $f(x)$ close to $b$.
* [LP9] -- For a given row-vector $a \in \IR^{n*}$, find $y \in \IR^{m*}$ with $y \circ f$ close to $a$.
* [LP10] Complete the map $f$ to an exact sequence:
  $$ 0 \lra \IR^{a} \overset{g}\lra \IR^n \overset{f}\lra \IR^m \overset{h}\lra \IR^{b} \lra 0. $$
  In other words:
  - Find an injective map $g: \IR^a \ra \IR^n$ so that $Im(g) = Ker(f)$.
  - Find a surjective map $h: \IR^m \ra \IR^b$ so that $Ker(h) = Im(f)$.

Here $\IR^{n*}$ denotes the dual space of all maps $a: \IR^n \ra \IR$.

### Endomorphisms

For a linear map $f: \IR^n \ra \IR^n$, we want to compute:

* [EP1] -- the Eigenvalues of $f$, (i.e. the "spectrum" of $f$)
* [EP2] -- the Eigenvectors of $f$.
* [EP3] -- the [Jordan Normal Form](https://en.wikipedia.org/wiki/Jordan_normal_form) of $f$.
* [EP4] -- the Characteristic Polynomial of $f$
* [EP5] -- For an eigenvalue $\lambda$ the multiplicity, and 


In case $f$ is one-to-one, i.e. an isomorphism:

* [EP4] -- For a given vector $b \in \IR^n$, a vector $x \in \IR^n$ with $f(x) = b$.
* [EP5] -- An inverse map $g: \IR^n \ra \IR^n$ with $f \circ g = id_n = f \circ g$.

### Scalar Products

For a scalar product $(,)_A$ on $\IR^n$ represented by a positive definite symmetric matrix $H \in
M(n,n)$, i.e. $(x,y)_H = x * H * y^t$ we want to compute:

* [P5] An orthogonal basis for $(,)_H$.

* [P6] A map $f: \IR^n \ra \IR^n$ so that $(x,y)_H = (f(x),f(y))$.

## Numeric Challenges

* Computational Complexity

* Finite Precision

* Stability


## Duality

The standard scalar product $(,)$ on $\IR^n$ is readily available for numeric computation and gives
rise to a number of useful dualities, that allow us to transform problems into each other.

Let $f: \IR^n \ra \IR^m$ is represented by a matrix $A \in M(m,n)$.

* For $x \in \IR^n = M(n, 1)$, the map $(x,\\_): \IR^n \ra \IR$ is represented by $x^t \in M(1, n)$.

* The adjoint $f^t$ of $f$ is represented by $A^t \in M(m,n)$, i.e. $(Ax,y) = (x, A^ty)$.



## Software Packages

NumPy and Python

To my knowledge, all notable Linear Algebra libraries make use of the
[LAPACK/BLAS]() libraries. This library were written in the 1970-ies
and 80ies, in Fortran and to this day present the most advanced and efficient implementations
of the most common Linear Algebra methods.

In particular SciPy offers low level interfaces to the LAPACK routines: [scipy.linalg.lapack](https://docs.scipy.org/doc/scipy/reference/linalg.lapack.html#module-scipy.linalg.lapack).

Hence the authorative source-of-truth for implementation questions remains the BLAS/LAPACK source code.
Thankfully the functions are quite short, and can be conveniently browsed online:

- BLAS Documentation  
  http://www.netlib.org/blas/#_documentation
- LAPACK Documentation  
  http://www.netlib.org/lapack/
- Implementation of the Matrix Matrix Multiplication Routine  
  http://www.netlib.org/lapack/explore-html/d1/d54/group__double__blas__level3_gaeda3cbd99c8fb834a60a6412878226e1.html#gaeda3cbd99c8fb834a60a6412878226e1
