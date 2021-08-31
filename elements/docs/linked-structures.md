- Date: 2021-08-30

<div style="display:none"> $$ {% include "preamble.tex" %} \newcommand{\dra}{\dashrightarrow}
\newcommand{\NULL}{{\rm NULL}} \newcommand{\nxt}{{\rm nxt}} \newcommand{\lr}{\leftrightarrow} $$
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
2. A map $f_0: A \ra B^+$, where $B^+ = B \cup \{ \rm{NULL} \}$.

**Definition.**

- A _linked structure_ is a set $N$ together with a partially defined map $\rm{nxt}: N \dra N$.
  - We call $N$ _complete_ if $\nxt$ is defined everywhere.
  - Elements of $N$ are called _nodes_. 
  - If $b = \nxt(a)$ then $b$ is said to be the  _parent_ of $a$, and $a$ is said to be a _child_ of $a$.

- Let $N,N'$ be linked structures, a morphism of linked structures is a map $f: N \ra N'$, so that
  $\nxt'(f(a)) = f( \nxt(a) )$ for all $a \in N$ with $\nxt(a)$ defined (i.e. $f(a) \neq \NULL$).
  
Set theoretic composition of maps is clearly associative, and makes Linked Structures a
[Category](https://en.wikipedia.org/wiki/Category_(mathematics)). From this observation, we derive
the notions of isomorphisms and (co-)products of Linked Structures.

**Remark.**  A linked structure can be viewed as an example of different mathematical structures:

1. A _graph_ with vertices $a \ra \nxt(a)$ (hence also a [quiver](https://en.wikipedia.org/wiki/Quiver_%28mathematics%29)).
1. A (deterministic) Markov Chain.
1. If $N$ is complete, then $N, \nxt$ is time-discrete dynamical system

This observation gives us several new angles to study linked strucrtures. 

**Example.**

- A set $A$ is Linked Structure with $\nxt(a) = \NULL$ for all $a \ in A$.

- The _linked-list_ of lenght $k$ is given by $L_k = \{ 0, \dots, k-1 \}$, with $\nxt(i) = i+1$ for
  $i < k-1$, $\nxt(k-1) = \NULL$.

- The _cyclic-linked-list_ of lenght $k$ is given by $C_k = \{ 0, \dots, k-1\}$, with $\nxt(i) = i +
  1 \mod k$.

- The binary tree of size $k$ is defined as $B_k = \{ 0, \dots, k \}$, with map $\nxt(0) = \NULL,
  \nxt(i) = \floor{ i / 2 }, i > 0$.

**Definition.** Let $\lr$ be the equivalence relation on $N$ induced by $a \lr b$ if $\nxt(a) = b$.

- $N$ is called connected, if all nodes in $N$ are equivalent under $\lr$.
- The connected componenbts of $N$ are the elements in $N/\lr$.

## Trajectories

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


## Trees and Forrests

**Definition.** A Linked Structure $N$ is called _cyclic_ if it admits a map $C_k \ra N$ of Linked
Structures for some $k \geq 0$.

**Proposition.** Let $N$ be a finite linked structure with $\#N > 0$ and $\nxt$ defined everywhere,
then $N$ is cyclic.

_Proof._ Let $a \in N$ be an element, and consider $a_k = \nxt^k(a), k \geq 0$. Since $N$ is
finite, the elements $a_k$ can't be disjoint, hence we find $k < l$ so that $a_k = a_l$. Now set $n
= l - k$, and define $f: C_n \ra N$ by $i \mapsto a_{k + i}$. qed.

**Definition.** A _forrest_ is a finite acyclic linked structure. A _tree_ is a connected forrest.

