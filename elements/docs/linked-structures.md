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

In this note we will formalize and study a straight-forward mathematical model, for a simple C
structure, that can be used to represent linked list and trees:

```C
typedef struct {
   node *nxt;
} node;
```

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
  
- The _cyclic-linked-list_ of lenght $k \geq 0$ is given by $C_k = \{ 0, \dots, k-1\}$, 
  with $\nxt(i) = i + 1 \mod k$.

- The binary tree of size $k$ is defined as $B_k = \{ 0, \dots, k \}$, with map $\nxt(0) = \0,
  \nxt(i) = \floor{ i / 2 }, i > 0$.

- Infinite Linked Lists:

  - Let $L_{\infty}$ be the Linked Structure with nodes $k \in \IZ$ and $\nxt(k) = k + 1$.
  - Let $L_{+}$ be the Linked Structure with nodes $\{ k \geq 0 \}$, and $\nxt(k) = k + 1$.
  - Let $L_{-}$ be the Linked Structure with nodes $\{ k \leq 0 \}$, and $\nxt(0) = \0, \nxt(k) = k + 1$.

## Morphisms

**Definition.** Let $N,N'$ be linked structures, a _morphism_ of linked structures is a map $f: N
\ra N'$, so that $\nxt'(f(a)) = f( \nxt(a) )$ for all $a \in N$ with $\nxt(a)$ defined (i.e. $f(a)
\neq \0$).
  
Set theoretic composition of maps is clearly associative, and makes Linked Structures a
[Category](https://en.wikipedia.org/wiki/Category_(mathematics)). From this observation, we derive
the notions of isomorphisms and (co-)products of Linked Structures.

**Proposition.** Let $f: N \ra N'$ be a morphism of linked structures, then $f$ is an isomorphism,
if and only if $f$ bijective as a map of sets and $\nxt f(a) \neq \0$ implies $\nxt a \neq
\0$ (*).

_Proof._ If $f$ is an isomorphism, with inverse $g$, then $f,g$ are set-theoretic inverses, hence $f$
is bijective, moreover $\nxt f(a) \neq \0$ implies $\0 \neq \nxt g(f(a)) \nxt a$.

Conversely suppose that $f$ is bijective and the condition (*) holds. Let $g$ be the set-theoretic
inverse. We claim that $g$ is a morphism of linked structures. Indeed, if $b \in N'$ with $\nxt b \neq \0$, then

## Connected Components

**Definition.** Let $\lr$ be the equivalence relation on $N$ induced by $a \lr b$ if $\nxt(a) = b$.

- $N$ is called connected, if all nodes in $N$ are equivalent under $\lr$.
- The connected componenbts of $N$ are the elements in $N/\lr$.

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

## Generators and Co-Generators

**Definition.** 

- For a subset $A \subset N$ we denote by $P(A) = \nxt(A)$ the set of parents of $A$.
  - More generally we set $P_k(A) = \nxt^k(A), k\geq 0$ the set of k-th order parents of $A$.
  - We set $P_*(A) = \Union_{k \geq 0} P_k(A)$.
  - We call $A$ a generator for $N$ if $P_*(A) = N$.

- For a subset $A \subset N$ we denote by $C(A) = \nxt^{-1}(A)$ the set of children of $A$.
  - More generally we set $C_k(A) = \nxt^{-k}(A), k\geq 0$ the set of k-th order chidren of $A$.
  - We set $C_*(A) = \Union_{k \geq 0} C_k(A)$.
  - We call $A$ a co-generator for $N$ if $C_*(A) = N$.

**Example.** 

- The node $0 \in L_k$ is a generator. The node $k-1 \in L_k$ is a co-generator.

- In $C_k$ every node is a generator and a co-generator.

## Sub-Structures

**Definition.** 

- A _sub-structure_ of a Linked Structure $N$ is a subset $A \subset N$, so that $\nxt(a) \in A$ for
all $a \in A$ with $\nxt(a) \neq \0$.

- A Linked Structure $N$ is _irreducible_ if $N$ is non-empty and the only sub-structures of $N$ are $\emptyset$ and $N$.


**Proposition.** All Irreducible Linked Structures $N$ are isomorphic to either:

- $Pt = \{ * \}$ with $\nxt(*) = \0$ or
- $C_k$ for some $k \geq 1$.

_Proof._  Clearly $Pt$ and $C_k$ are irreducible.

Assume that $N$ is irreducible. Take $x \in N$. If $\nxt(x) = \0$ then $\{ x \} \subset N$ is a
sub-structure, so $N = \{ x \} \isom Pt$.

If $\nxt(x) = y \in N$. Then $P_*(y) \subset N$ is a sub-structure, hence $P_*(y) = N$ so $x \in
P_*(y)$ and we find $k \geq 0$ with $\nxt^k(y) = x$. Take $k$ minimal with this property, then $f: i
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
