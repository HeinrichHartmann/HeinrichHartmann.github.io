- Date: 2021-08-30

<div style="display:none"> 
$$ 
  {% include "preamble.tex" %} 
  \newcommand{\dra}{\dashrightarrow}
  \newcommand{\0}{\mathsf{null}} 
  \newcommand{\nxt}{{\rm nxt}} 
  \newcommand{\lr}{\leftrightarrow} 
  \DeclareMathOperator{\mod}{mod}

$$
</div>

# Linked Structures

## Introduction

In this note we will formalize and study a straight-forward mathematical model, for a simple C
structure, that can be used to represent linked list and trees:

```C
typedef struct {
   node *nxt;
} node;
```

We are deliberately verbose with giving full proofs even for rather trivial statements. Infact, the
main result, the classification of all finite linked structures up to isomorphy is fairly intuitive
and may be regarded by many as rather obvious. By building the theory step by step, we make
reasonably sure, we are on safe footing (i.e. correct) and explore the full width of the concept.


## Linked Structures

**Definition.** A partially defined map $f: A \dra B$ between two sets is given by either:

1. A subset $D \subset A$ and a map $f_d: D \ra B$.
2. A map $f_0: A \ra B^+$, where $B^+ = B \cup \{ \0 \}$.

**Definition.** A _linked structure_ is a set $N$ together with a partially defined map $\rm{nxt}: N \dra N$.

- We call $N$ _complete_ if $\nxt$ is defined everywhere.
- Elements of $N$ are called _nodes_. 
- If $b = \nxt(a)$ then $b$ is said to be the  _parent_ of $a$, and $a$ is said to be a _child_ of $a$.
- Elements $a \in N$ with $\nxt(a) = \0$ are called _sinks_. 
- Elements in $N - \nxt(N)$ (i.e. elements that have no children) are called _leaves_.[^1]

**Remark.**  A linked structure can be viewed as an example of different mathematical structures:

1. A _graph_ with vertices $a \ra \nxt(a)$ (hence also a [quiver](https://en.wikipedia.org/wiki/Quiver_%28mathematics%29)).
1. A (deterministic) Markov Chain.
1. If $N$ is complete, then $(N, \nxt)$ is discrete dynamical system.

This observation gives us several new angles to study linked strucrtures. 

**Example.**

- A set $A$ can be regarded as a Linked Structure with $\nxt(a) = \\0$ for all $a \in A$.

- The _linked-list_ of lenght $k \geq 0$ is given by $L_k = \{ 1, \dots, k \}$, with $\nxt(i) = i+1$ for
  $i < k$, $\nxt(k) = \0$.
  
- The _cyclic-linked-list_ of lenght $p \geq 1$ is given by $C_p = \{ 0, \dots, p-1\}$, 
  with $\nxt(i) = i + 1 \mod p$.

- The _racket_ of type $k \geq 0, p \geq 1$ is an "amalgamation" of $L_k$ with $C_p$, defined as
  $R_{k,p} = \{-k, \dots, -1,0,1\dots,p-1\}$, with $\nxt\ i = i + 1$ for $i < 0$ and $\nxt\ i = i +
  1 \mod p$ for $i \geq 0$.

- The binary tree of size $k$ is defined as $B_k = \{ 0, \dots, k \}$, with map $\nxt(0) = \0,
  \nxt(i) = \floor{ i / 2 }, i > 0$.

- Infinite Linked Lists:

  - Let $L_{\infty}$ be the Linked Structure with nodes $k \in \IZ$ and $\nxt(k) = k + 1$.
  - Let $L_{+}$ be the Linked Structure with nodes $\{ k \geq 0 \}$, and $\nxt(k) = k + 1$.
  - Let $L_{-}$ be the Linked Structure with nodes $\{ k \leq 0 \}$, and $\nxt(0) = \0, \nxt(k) = k + 1$.

## Morphisms

**Definition.** Let $M,N$ be linked structures, a _morphism_ of linked structures is a map $f: M
\ra N$, so that $\nxt_N(f(a)) = f( \nxt_M(a) )$ for all $a \in N$ with $\nxt_N(a)$ defined (i.e. $f(a)
\neq \0$).

Set theoretic composition of maps is clearly associative, and makes Linked Structures a
[Category](https://en.wikipedia.org/wiki/Category_(mathematics)). From this observation, we derive
the notions of isomorphisms and (co-)products of Linked Structures.

**Example.** 

- Let $0 \leq k < l$, then the inclusion $L_k \ra L_l$ is a morphism.

- If $k|l$, then the identity induces a map $C_l \ra C_k$ which is a morphism.

- If $set(N)$ is the set underlying a linked structure $N$. We regards $set(N)$ as a linked
  structure where $\nxt$ is $\0$ everywhere. 
  - Then $set(N) \ra N$ is a morphism.
  - The map $N \ra set(N)$ is a morphism if and only if $\nxt_N\ a = \0$ for all $a \in N$.

- For every linked structure $N$ there is exactly one morphism $N \ra C_1$. In other words $C_1$ is
  a terminal object.

- The unique map $N \ra L_1$ is a morphism if and only if $\nxt\ a = \0$ for all $a \in N$.

**Proposition.** Let $f: M \ra N$ be a morphism of linked structures, then $f$ is an isomorphism,
if and only if $f$ bijective as a map of sets and $\nxt\ f(a) \neq \0$ implies $\nxt\ a \neq
\0$ (*).

_Proof._ If $f$ is an isomorphism, with inverse $g$, then $f,g$ are set-theoretic inverses, hence $f$
is bijective, moreover $\nxt\ f(a) \neq \0$ implies $\nxt\ a = \nxt\ g(f(a)) \neq \0$.

Conversely suppose that $f$ is bijective and the condition (*) holds. Let $g$ be the set-theoretic
inverse. We claim that $g$ is a morphism of linked structures. Indeed, if $b \in N$ with $\nxt\ b
\neq \0$. Set $a = g(b)$, so $b = f(a)$. Now $\nxt\ b = \nxt f(a) \neq \0$ implies $\nxt\ a \neq \0$ since $f$
is a morphism. Hence $\nxt\ b = \nxt\ f(a) = f(\nxt\ a) = f(\nxt\ g(b))$. Applying $g$ on both sides
yields $g(\nxt\ b) = \nxt\ g(b)$. qed.

## Generators and Co-Generators

**Definition.** 

- For a subset $A \subset N$ we denote by $P_1(A) = \nxt(A)$ the set of parents of $A$.
  - More generally we set $P_k(A) = \nxt^k(A), k\geq 0$ the set of k-th order parents of $A$.
  - We set $P(A) = \Union_{k \geq 0} P_k(A)$.
  - We call $A$ a generator for $N$ if $P(A) = N$.

- For a subset $A \subset N$ we denote by $C_1(A) = \nxt^{-1}(A)$ the set of children of $A$.
  - More generally we set $C_k(A) = \nxt^{-k}(A), k\geq 0$ the set of k-th order chidren of $A$.
  - We set $C(A) = \Union_{k \geq 0} C_k(A)$.
  - We call $A$ a co-generator for $N$ if $C(A) = N$.

**Example.** 

- The node $0 \in L_k$ is a generator. The node $k-1 \in L_k$ is a co-generator.

- In $C_k$ every node is a generator and a co-generator.

**Proposition.** If $a \in N$, then $P(a)$ is isomorphic to either

- $L_k$ for some $k \geq 1$
- $R_{k,p}$ for some $k \geq 0, p \geq 1$.

_Proof._ 
In case $\nxt^k\ a = \0$ for some $k \geq 1$, define $f: L_k \ra P(a)$ by $1 \mapsto a, i \mapsto \nxt^{i-1}\ a$.
We claim that $f$ is an isomorphism. By the criteria given above, it suffices to show that $f$ is a bijection
and $\nxt f(i) \neq \0$ if $\nxt i \neq \0$.

* If $\nxt\ i \neq \0$ then $i < k$, hence $\nxt^i a = \nxt f(i) \neq \0$ since otherwise $\nxt^k\ a$
  would not be defined.

* To see that $f$ is bijective assume that $f(i) = f(j)$ for some $i < j \leq k$, then $d = j - i > 0$ 
  and we see inductively that $\nxt^{(i-1)} a = \nxt^{(i-1)+t d}a$ for all $t \geq 0$.
  This contradicts $\nxt^k a = \0$ since we can choose $t$ so that $(i-1)+td > k$.

In case $\nxt^k\ a \neq \0$ for all $k \geq 1$, we consider the elements $a_i = \nxt^i a \in N, i
\geq 0$. Since $N$ is finite we find $i<j$ with $a_i = a_j$. We choose $j_0$ minimally with the
property that there is an $i_0 < j_0$ with $a_{i_0} = a_{j_0}$.

Set $k = i_0 \geq 0$ and $p = j_0 - i_0 > 0$, and define $f: R_{k,p} \ra N, i \ra \nxt^{i+k}\ a$, so
$f(-k) = a, f(0) = a_{i_0}$. To see that $f$ is an isomorphism, note that $\nxt\ f(p-1) = a_{j_0} =
a_{i_0} = f( \nxt (p-1))$. If $f(i) = f(j)$ for some $i < j \leq (p-1) = j_0 - 1$, then $j < j_0$
contradicting the minimal choice of $j_0$. qed.

**Definition.** In the light of the last proposition, we make the following definitions:

- If $P(a) \isom R_{k,p}$ we call $a$ _cyclic_ with _period_ $p$. We call image $T(a) \subset N$ of
  $C_p \subset R_{k,p}$ the _terminal cycle_ associated to $a$.
- If $P(a) \isom L_k, k \geq 1$ we call $a$ _acyclic_ of _lenght_ of $k$. We call the last element
  $T(a) = \{ \nxt^{k-1}\ a \}$ the _terminal sink_ associated to $a$.

**Corollary.** Let $N$ be a non-empty complete linked structures (i.e. $\nxt$ defined everywhere),
then $N$ contains a cycle.

_Proof._ If $a \in N$, then $P(A)$ can't be isomorphic to $L_k$ since $L_k$ is not complete. So
$P(a) \isom R_{k,p}$, and the image of $C_p \subset R_{k,p}$ is a cycle.


## Connected Components

**Definition.** Let $\lr$ be the equivalence relation on $N$ induced by $a \lr b$ if $\nxt(a) = b$.

- $N$ is called connected, if all nodes in $N$ are equivalent under $\lr$.
- The connected componenbts of $N$ are the elements in $N/\lr$.

**Proposition.** If $N$ is finite, then $a \lr b$ if and only if $T(a) = T(b)$.

_Proof._ The condition $T(a) = T(b)$ clearly defines an equivalence relation. We have to show that
every other equivalence relation $\approx$ that extends $a \ra b$ also extends $T(a) = T(b)$. For
$a,b \in N$ with $T(a) = T(b)$, we have $a \approx t$ for all $t \in T(a)$ since $T(a) \subset
P(a)$. Since $T(a)=T(b)$ is non-empty we find $t \in T(a) = T(b)$, and $a \approx t \approx b$,
hence $a \approx b$. qed.

## Sub-Structures

**Definition.** 

- A _sub-structure_ of a Linked Structure $N$ is a subset $A \subset N$, so that $\nxt(a) \in A$ for
  all $a \in A$ with $\nxt(a) \neq \0$.

- A Linked Structure $N$ is _irreducible_ if $N$ is non-empty and the only sub-structures of $N$ are
  $\emptyset$ and $N$.

**Proposition.** If $A,B \subset N$ are irreducible sub-structures of $N$ finite, then either $A = B$ or $A \cap B = \emptyset$.

_Proof._ $C= A \cap B \subset A$ is a sub-structure, so either $C = \emptyset$ or $C = A$. In case $C =
A$, $C \subset B$is a non-empty sub-structure of $B$, so $C = B$ as well.


**Proposition.** All Irreducible Linked Structures a finite $N$ are isomorphic to either $L_1$ or $C_p$ for some $p \geq 1$.

_Proof._  Clearly $L_1$ and $C_p$ are irreducible.

Assume $N$ is an irreducible. Take $a \in N$, then $P(a) \subset N$ is a non-empty sub-structure,
hence $P(a) = N$. By the classfication result for $P(a)$ we either have $N \isom L_k, k \geq 1$, or
$N \isom R_{k,p}, k\geq0, p > 1$. Now, $L_k$ is irreducible if and only if $k=1$. And $C_p \subset
R_{k,p}$ is an irreducible non-empty sub-structure, hence $k=0$ and $C_p = R_{k,p}$. qed.

**Corollary.** Let $a \in N$, $N$ finite, then $T(a)$ is irreducible.

**Theorem.** The connected components of a finite structure $N$ are given by $C(A)$, where
$A$ runs throught all irreducible sub-structures:

- $A = \{ s \} \subset N$, where $s\in N$ is a sink, i.e. $\nxt\ s = \0$.
- $A \isom C_p, p \geq 1$ is a cycle.

_Proof._ We have to show that $C(A)$ are connected, and each element is $\lr$-equivalent to an element in $C(A)$.

$C(A)$ is connected since $A$ is connected. Let $a \in N$, then $T(a)$ is irreducible, so it is in
the above list. Moreover $a \lr t$ for all $t \in T(a)$, since $T(a) \subset P(a)$. qed.

## Trees

**Definition.** 

- A _tree_ is a finite, non-empty, connected, acyclic linked structure.
- A _forrest_ is a finite, acyclic, linked structure (not necessarily connected). 

**Proposition.** Let $T$ be a tree.

- a) There is a unique sink $r \in T$ that co-generates $T$: $C(r) = T$. We call $r$ the root of $T$.
- b) The set of leaves $L = T - \nxt(T)$ is the smallest set that generates $T$: $P(L) = T$.

_Proof._  Ad a) Pick $a \in T$, then $T(a)$ is irreducible. Since $T$ is acyclic, $T(a) \isom L_1 = \{ 1
\}$. Let $r \in T$ be the image of $1 \in L_1$. Let $b \in T$ be any other element then
$T(b)=T(a)=\{ r \}$, since $T$ is connected, so $r \in P(b)$ which is equivalent to $b \in C(r)$.

Ad b) Pick $a_1 \in T$. We construct $a_i, i \geq 1$ recursively: If $a_i$ is a leave, we
terminate. Otherwise we find a $a_{i+1} \in T$, so that $\nxt\ a_{i+1} = a_i$. By construction $a_1 \in P(a_i)$.
In case we terminated, we have found a leave node that contains $a_1$ as a parent.

In case we never terminated, we get an infiite sequence $a_i \in N$, hence $a_i = a_j$ for some
$i<j$. And we found a cycle. Contradiction.

[^1]: Maybe _singles_ would have been a better name, but we stick to the more traditional terminology established for trees here.
