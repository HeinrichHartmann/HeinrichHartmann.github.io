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


**Proposition.** For two elements $a,b \in N$ we have $a \lr b$ if and only if there are $k,l \geq
0$ with $\nxt^k(a) = \nxt^l(b)$.

_Proof._ Let's denote the condition as $a \sim b$. We have to show, that (a) $\sim$ is an
equivalence relation, and (b) that every other equivalence relation $\approx$ that extends $a \ra b$
contains $\sim$.

Ad a: The relation $\sim$ is clearly reflexive and symmetric.
In the situation that $a \sim b, b \sim c$, then there are $k,l,m,n$ so that $\nxt^k(a)=\nxt^l(b)$ and
$\nxt^m(b)=\nxt^n(c)$. Wlog we assume that $l \leq m$ so that $o = m - l \geq 0$. then $\nxt^{k+o}(a) = \nxt^m(b) = \nxt^n(c)$.
And hence $a \sim c$.

Ad b: Assume that $\approx$ is an equivalence relation so that $a \ra b$ implies $a \approx b$.
We have to show that $a \sim b$ implies $a \approx b$.
Assume that $a \sim b$, then there are $k,l \geq 0$ with $\nxt(a)^k = \nxt^l(b) =: y$,
since $\approx$ expands $\ra$, we have $a \approx y$ and $b \approx y$, since $\approx$ is transitive,
we hav $a \approx b$. qed.






## Sub-Structures

**Definition.** 

- A _sub-structure_ of a Linked Structure $N$ is a subset $A \subset N$, so that $\nxt(a) \in A$ for
all $a \in A$ with $\nxt(a) \neq \0$.

- A Linked Structure $N$ is _irreducible_ if $N$ is non-empty and the only sub-structures of $N$ are $\emptyset$ and $N$.


**Proposition.** All Irreducible Linked Structures $N$ are isomorphic to either:

- $L_0$
- $C_k$ for some $k \geq 1$.

_Proof._  Clearly $L_0$ and $C_k$ are irreducible.

Assume that $N$ is irreducible. Take $x \in N$. If $\nxt(x) = \0$ then $\{ x \} \subset N$ is a
sub-structure, so $N = \{ x \} \isom L_0$.

If $\nxt(x) = y \in N$. Then $P(y) \subset N$ is a sub-structure, hence $P(y) = N$ so $x \in
P(y)$ and we find $k \geq 0$ with $\nxt^k(y) = x$. Take $k$ minimal with this property, then $f: i
\mapsto \nxt^i(x)$ defines an isomorphism $C_{k+1} \ra N$. Indeed, if $f(i) = f(j), i<j \leq k+1$
then $\nxt^i(x) = \nxt^j(x)$ so $x = \nxt^{k+1}(x) = \nxt^{k+1+j-i}(x) = \nxt^{j-i}(x)$,
contradicting the minimaility of $k$.

**Proposition.** If $s \neq t$ are two sinks in $N$, then $C_*(s) \cap C_*(t) = \emptyset$.

_Proof._ If $x \in C_*(s) = C_*(t)$, then there are $k,l \geq 0$ so that $s = \nxt^kx, t=\nxt^lx$. If $k<l$, then
$\nxt^{k+1}(s) = \nxt(s) = \0$ hence $\nxt^l x$ is undefined, a contradiction. Similarly if $l<k$. qed. 

## Cycles

**Definition.** 

- A cycle $C \subset N$ is the image of a map $C_k \ra N, k \geq 0$.
- We call $\# C$ the period of the cycle.
- A Linked Structure $N$ is called _cyclic_ if it contains a cycle.
- $N$ is _acyclic_ if it is not cyclic.

**Proposition.** If $C_k \ra N$ is a map with image $C$, then $\#C|k$.

_Proof._ Let $p = \# C$, then $C \isom C_p$, and we get a surjective map $f:C_k \ra C_p$. Now $f(0) = f(\nxt^k(0)) = \nxt^k(f(0)) = f(0) + k \mod p$. Hence $k \mod p = 0$. qed.

**Proposition.** If $C,D \subset N$ are two cycles, then $C = C'$ or $C \cap D = \emptyset$.

_Proof._ If $x \in C \cap D$, then $C = P(x) = D$. qed.

**Proposition.** If $C \neq D$ are two cycles in $N$, then $C_*(C) \cap C_*(D) = \emptyset$.

_Proof._ If $x \in C_*(C) \cap C_*(D)$ then there are $k,l \geq 0$ with $\nxt^k(x) \in C$ and
$\nxt^l(x) \in D$. If $k < l$, then $\nxt^l(x) = \nxt^{l-k}(\nxt^k(x)) \in C$, since $\nxt(C) = C$.
So $C \cap D \neq 0$ and hence $C = D$, a contradiction. The same argument applies to $l < k$. qed.

**Theorem.** If $N$ is a finite Linked Structure, then the connected components of $N$ are given by:

- $C_*(s)$ for all sinks $s \in N$.
- $C_*(C)$ for all cycles $C \subset N$.

_Proof._ If $a$, and $a \in C_*(s)$, then $\nxt(a) = \0$ or $\nxt(a) \in C_*(s)*$.

We have seen that $C_*(s), C_*(C)$ are connected components.

## Trees

**Definition.** A _forrest_ is a finite acyclic linked structure. A _tree_ is a connected forrest.

**Proposition.** Let $T$ be a tree.

- There is a unique sink $r \in T$ that co-generates $T$. We call $r$ the root of $T$.
- The set of leaves $L = T - \nxt(T)$ generates $T$.

**Lemma.** Let $N$ be a finite linked structure with $\#N > 0$ and $\nxt$ defined everywhere,
then $N$ is cyclic.

_Proof of Lemma._ Let $a \in N$ be an element, and consider $a_k = \nxt^k(a), k \geq 0$. Since $N$ is
finite, the elements $a_k$ can't be disjoint, hence we find $k < l$ so that $a_k = a_l$. Now set $n
= l - k$, and define $f: C_n \ra N$ by $i \mapsto a_{k + i}$. qed.



[^1]: Maybe _singles_ would have been a better name, but we stick to the more traditional terminology established for trees here.
