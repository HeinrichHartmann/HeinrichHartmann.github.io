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
given matrix $A$. These methods differ with respect to computational complexity, numeric stability,
and properties of the transformation matrices $X$, $Y$.
All of them are in practical use, and have interesting geometric ideas behind them.

The most basic way that is readily performed by hand is the Gauss Elimination method that we desribe
first.
The strongest conceptual result, that is readily available in numerical computing packages is the
Singular Value Decomposition, which we discuss last.


### Rank Decomposition via Gauss Elimination

The [Gauss Elimination Algorithm](https://en.wikipedia.org/wiki/Gaussian_elimination) can be used to
construct transformations $X$ and $Y$ as described above. 

{{% env %}}
**Theorem (LDU factorization)**
For every matrix $A \in M(m,n)$, we will construct

1. a (row) permutation matrix $P \in M(m)$
1. a (column) permutation matrix $Q \in M(n)$
2. an invertible lower-triangular matrix $L \in M(m)$ with unit diagonal
3. an invertible upper-triangular matrix $U \in M(n)$ with unit diagonal
4. an invertible diagonal matrix $D_r \in M(r,r)$

so that:

$$
P A Q = L \begin{bmatrix}
    D_r & 0   \\\\
    0 & \oo\_{m-r,n-r} \\\\
    \end{bmatrix} U = L D U
$$

where $D = D_r \vsum \oo\_{m-r,n-r}$.
{{% /env %}}

**Corollary**
Given $P,Q,L,D_r,U$ as above, a rank decomposition is given by:
$$
(P^{-1} L)^{-1} \\; A \\; (QU^{-1}(D_r\vsum \id_{m-r,n-r})^{-1}) = \id^r_{m-r,n-r}.
$$
so $Y = P^{-1} L$, $X = Q U^{-1} (D_r \vsum \id)^{-1}$.

**Remark**

- This algorithm corresponds to Gauss Elimination with total pivot search (i.e. row- and column permutations).
- In order to derive a rank decomposition we need $U$ to be invertible, or at least be row-reduced
  $U[i,\*] = 0$, for $i > r$. This is not the case for the $LU$ decomposition that is commonly found
  in text books and software libraries.

**Elimination Matrix.** Gauss Elimination makes use of eleminiation matrices, that are constructed
as follows. For vectors $a,b$ with $(a,a)=1$ and $(a,b) = 0$, we consider the shear transformation
$f_{a,b}: x \mapsto x + (a,x) b$. This is map defines a linear isomorphism with inverse $f_{a,-b}$.

In case $a = e_r$ and $b[1]=\dots=b[r]=0$ we call $f_{a,b}$ the elimination matrix $E^r_b$.
This is a lower-triangular matrix with unit diagonal, and off-diagonal entries: $E^r_b[i,r] = b[i]$ for $i > r$.
It's inverse is given by $E^r_{-b}$.

**Example**
$$
E^3_b = \begin{bmatrix}
1 & 0 & 0    & 0 & 0 & 0 \\\\
0 & 1 & 0    & 0 & 0 & 0 \\\\
0 & 0 & 1    & 0 & 0 & 0 \\\\
0 & 0 & b[4] & 1 & 0 & 0 \\\\
0 & 0 & b[5] & 0 & 1 & 0 \\\\
0 & 0 & b[6] & 0 & 0 & 1 \\\\
\end{bmatrix}
$$

{{% env "Algorithm -- Gauss Elimination" %}}
**Input:** Matrix $A \in M(m,n)$  
**Output:** Matrices $P,Q,L,D,U$ as in the above theorem, so that $A = P L D U Q$.  

1. Termination Conditions.
   - If $m=0$ or $n=0$ we are done. In the following assume that $m>0, n>0$.
   - If $A = 0$ we are done. So we assume that $A \neq 0$.

3. Pivot Selection. Since $A \neq 0$ there is an $A[i,j] \neq 0$. We call $(i,j)$ the pivot point
   and denote the pivot element by $d:= A[i,j] \neq 0$.

2. Permute pivot element to A[1,1].
   - Let $P_1$ be the permutation matrix that swaps $1 \leftrightarrow i$.
   - Let $Q_1$ be the permutation matrix that swaps $1 \leftrightarrow j$.
   
   Set $A_1 := P_1 A Q_1$. Then $A_1[1,1] = d$. 
   Note, that $P_1^{-1} = P$ and $Q_1^{-1} = Q_1$.

4. Eliminate first column.
   Consider the vector $b = -[0,A_1[2,1],\dots,A_1[m,1]]^t/d$, and set $A_2 = E^1_{b} A_1$.  
   We have $A_2[1,1] = d$ and $A_2[i,1] = 0$ for $i>1$.

5. Eliminate first row.
   Consider the vector $c = - [0,A_2[1,2],\dots,A_2[1,n]]^t/d$, and set $A_3 = A_2 (E^1_{c})^t$
   - We still have $A_3[1,1] = 1$ and $A_2[1,i] = 0$ for $i>1$ since $E^1_{-c} e_1 = e_1$.
   - Moreover, $A_3[1,i] = 0$ for $i > 1$.
   
   Hence $$
   A_3 = \begin{bmatrix}
   d & 0 \\\\
   0 & B \\\\
   \end{bmatrix} = d \vsum B
   $$
   for some $B \in M(m-1,n-1)$.

6. Recursion.
   Summarizing the above steps we find:
   $$
   (p \vsum B) = E^1_{b} P_1 \\; A \\; Q_1 E^{1t}\_{c}
   \quad\iff\quad
   A  = P_1 E^1_{-b} \\; (d \vsum B) \\; E^{1t}\_{-c} Q_1
   $$
   By induction we can have a decomposition $ B = P_2 L_2 D_2 U_2 Q_2 $. 
   So:
   $$
   A
   % = P_1 E^1_{-b} * (d \vsum (P_2 L_2 D_2 U_2 Q_2)) * E^{1t}\_{-c} Q_1
   = P_1 E^1_{-b} \\; (1 \vsum P_2) (1 \vsum L_2) \\; (d \vsum D_2) \\; (1 \vsum U_2) (1 \vsum Q_2) \\; E^{1t}\_{-c} Q_1
   $$
   We note, that:
   - The central matrix $(d \vsum D_2)$ is a diagonal matrix of the required form ($D_r \vsum \oo$).
   - The elimination matrices can be commuted past the permutation matrices as follows:
     - $E^1_{-b} (1 \vsum P') = (1 \vsum P') E^1_{-b'}$, where $b' = (1 \vsum P')^{-1} b$
     - $(1 \vsum Q_2) E^{1t}\_{-c} = E^{1t}_{-c'} (1 \vsum Q_2)$ where $c' = (1 \vsum Q')^{-1} c$.
   - The products $P:=P_1 (1 \vsum P_2)$ and $Q:=Q_1 (1 \vsum Q)$ are again permutation matrices.
   - The product $L := E^1_{-b'} (1 \vsum L_2)$ is a lower-triangular matrix with unit diagonal
   - The product $U :=  (1 \vsum U_2) E^{1t}\_{-c'}$ is a upper-triangular matrix with unit diagonal.

   Hence we have $A = P\\, L\\, D\\, U\\, Q$ as required.
7. Return $(P, Q, L, D, U)$. Done.


{{% /env %}}

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
