# The Calculus of Local Smooth Functions

<div class="arithmatex" style="display:none">
\[
\newcommand{\ra}{\rightarrow}
\newcommand{\kC}{\mathcal{C}}
\newcommand{\IR}{\mathbb{R}}
\newcommand{\AINF}{\mathbb{A}}
\newcommand{\CINF}{\kC^\infty}
\newcommand{\half}{\frac{1}{2}}
\newcommand{\IFF}{\Leftrightarrow}
\newcommand{\inf}{\infty}
\newcommand{\Ind}{\mathbb{1}}
\newcommand{\IR}{\mathbb{R}}
\newcommand{\IA}{\mathbb{A}}
\newcommand{\IB}{\mathbb{B}}
\newcommand{\IC}{\mathbb{C}}
\newcommand{\ID}{\mathbb{D}}
\newcommand{\IF}{\mathbb{F}}
\newcommand{\IH}{\mathbb{H}}
\newcommand{\II}{\mathbb{I}}
\newcommand{\IL}{\mathbb{L}}
\newcommand{\IN}{\mathbb{N}}
\newcommand{\IP}{\mathbb{P}}
\newcommand{\IQ}{\mathbb{Q}}
\newcommand{\IR}{\mathbb{R}}
\newcommand{\IS}{\mathbb{S}}
\newcommand{\IV}{\mathbb{V}}
\newcommand{\IZ}{\mathbb{Z}}
\newcommand{\floor}[1]{\lfloor #1 \rfloor}
\newcommand{\ceil}[1]{\lceil #1 \rceil}
\newcommand{\set}[2]{\{\, #1 \;\vert\; #2 \,\}}
\newcommand{\Set}[2]{\left\{\, #1 \;\vert\; #2 \,\right\}}
\newcommand{\C}{\,\#}
\newcommand{\CSet}[2]{\#\{\, #1 \;\vert\; #2 \,\}}
\newcommand{\qtext}[1]{\quad\text{#1}\quad}
\newcommand{\stext}[1]{\;\text{#1}\;}
\newcommand{\dbrackets}[1]{ [\![ #1 ]\!]}
\newcommand{\KR}{\matcal{R}}
\newcommand{\KA}{\matcal{A}}
\newcommand{\KB}{\matcal{B}}
\newcommand{\KC}{\matcal{C}}
\newcommand{\KD}{\matcal{D}}
\newcommand{\KF}{\matcal{F}}
\newcommand{\KH}{\matcal{H}}
\newcommand{\KI}{\matcal{I}}
\newcommand{\KL}{\matcal{L}}
\newcommand{\KN}{\matcal{N}}
\newcommand{\KP}{\matcal{P}}
\newcommand{\KQ}{\matcal{Q}}
\newcommand{\KR}{\matcal{R}}
\newcommand{\KS}{\matcal{S}}
\newcommand{\KV}{\matcal{V}}
\newcommand{\KZ}{\matcal{Z}}
\newcommand{\gc}{\mathfrak{C}}
\newcommand{\gd}{\mathfrak{D}}
\newcommand{\gM}{\mathfrak{M}}
\newcommand{\gm}{\mathfrak{m}}
\newcommand{\gf}{\mathfrak{f}}
\newcommand{\gu}{\mathfrak{U}}
\newcommand{\fa}{\mathfrak{a}}
\newcommand{\fg}{\mathfrak{g}}
\newcommand{\fn}{\mathfrak{n}}
\newcommand{\fk}{\mathfrak{k}}
\newcommand{\fm}{\mathfrak{m}}
\newcommand{\fp}{\mathfrak{p}}
\newcommand{\curly}[1]{\mathcal{#1}}
\newcommand{\op}[1]{\mathrm{#1}}
\newcommand{\Cat}[1]{\mathfrak{#1}}
\newcommand{\cat}[1]{\mathbf{#1}}
\newcommand{\vphi}{\varphi}
\newcommand{\sphi}{\phi}
\newcommand{\eps}{\varepsilon}
\newcommand{\tensor}{\otimes}
\newcommand{\tensors}{\tensor\dots\tensor}
\newcommand{\Tensor}{\bigotimes}
\newcommand{\ra}{\rightarrow}
\newcommand{\lra}{\longrightarrow}
\newcommand{\la}{\leftarrow}
\newcommand{\lla}{\longleftarrow}
\newcommand{\isom}{\cong}
\newcommand{\epi}{\twoheadrightarrow}
\newcommand{\mono}{\hookrightarrow}
\newcommand{\del}{\partial}
\newcommand{\union}{\cup}
\newcommand{\dotcup}{\ensuremath{\mathaccent\cdot\cup}}
\newcommand{\dunion}{\dotcup}
\newcommand{\<}{\langle}
\renewcommand{\>}{\rangle}
\newcommand{\inpart}[1]{\in\text{\part}(#1)}
\newcommand{\Vsum}{\bigoplus}
\newcommand{\vsum}{\oplus}
\renewcommand{\S}{\mathfrak{S}}
\newcommand{\id}{\mathrm{id}}
\newcommand{\rk}{\mathrm{rk}}
\newcommand{\Diff}{\mathrm{Diff}}
\newcommand{\Hom}{\mathrm{Hom}}
\newcommand{\Pic}{\mathrm{Pic}}
\newcommand{\Spec}{\mathrm{Spec}}
\newcommand{\End}{\mathrm{End}}
\newcommand{\Ext}{\mathrm{Ext}}
\DeclareMathOperator{\Supp}{\mathrm{Supp}}
\DeclareMathOperator{\Sym}{Sym}
\DeclareMathOperator{\Alt}{\Lambda}
\DeclareMathOperator{\ad}{ad}
\DeclareMathOperator{\ch}{ch}
\DeclareMathOperator{\td}{td}
\DeclareMathOperator{\pr}{pr}
\]
</div>

We study the local theory of $C^\infty$ functions.

One observation that motivates this exercise, is that analysis is not really helping solving equations $a(x) = 0$, 
but instead analyzes the local behavior of the functions around a given point.
From this perspective, it's natural to fix the point $x$ first, and then study functions $a$ which vanish at.
A natural framework for this study is the local ring of $C^\infty$-functions. 
(Or the category of "germs" of spaces introduced below).

Another observation that we follow in this study, is that a lot of constructions from commutative algebra carry over to the rings of $C^\infty$ functions without modifications. 
This was surprising for me, since those rings are violate all kinds of finiteness conditions enjoyed by the typical examples (polynmial/arithmetic rings).

Another motivation of this text, is to develop natural notation, that reduces the mental overhead one has to carry while performing calculations. 
Classical analysis is packed to ambiguities like $\frac{\del}{\del x} a(x \cdot t)(0)$, which could mean a lot of things. 
The order that we perform composition and differentiation, and evaluation is important. 
We use the following notation to clarify the exact semantics, in case of ambiguities:

- Function evaluated at a point $a(x) = ev_x[a]$ 
- Function applied to a function $f[a]$
- Anonymous functions are denoted by $a = a(\_) = [x \mapsto a(x)]$.

## Setting

**Definition.** 
The local ring of $C^\infty$ functions around $0 \in \IR^n$  is defined as

$$ \AINF^n = \lim_\ra \{ \CINF(U,\IR) \,|\, 0 \in U \subset \IR^n \}. $$

The inductive limit is taken along the restriction maps $\rho_V: \CINF(U,\IR) \ra \CINF(V,\IR)$ for $U \subset V$.

More explicitly, an element $a \in \AINF$ is hence represented by a pair $(U,a)$, where $U \subset \IR^n$ is an open subset containing $0$, and $a \in \AINF(U,\IR)$.
Two pairs $(U,a), (V,b)$ represent the same element in $\AINF^n$ if there is a $W \subset U \cap V, 0 \in W$
so that $\rho_W(a) = \rho_W(b)$.

**Naturality.** 
Any ($C^\infty$-)differentiable map $f: \IR^n \ra \IR^m$ with $f(0) = 0$ gives rise to a map $f^*: \AINF^m \ra \AINF^n$, which sends $(b,V)$ to $(b \circ f, f^{-1}(V))$. We call $f^*[a]$ the pullback of a along $f$.

**Evaluation.** For $a \in \AINF^n$, we denote by $e[a] := ev_0[a] := a(0) \in \IR$, the evaluation of $a$ at $0 \in \IR^n$.
This is operation can be identified with the pullback along the injection $0: \IR^0 \ra \IR^n$, $e = 0^*$.

**Constants.** For $\lambda \in \IR$ the constant function $\IR^n \ra \IR, x \mapsto \lambda$ by $\underline{\lambda} \in \AINF^n$ or simply $\lambda$ when there is no risk of confusion.

The linear map $\IR \ra \AINF^n, \lambda \mapsto \underline{\lambda}$ can be identified with $\pi^*$, where $\pi:\IR^n \ra \IR^0$ is the projection to a point.

**Elementary Operations.**
Let $i \in \{1,\dots,n\}$. We have the following operations on $\AINF^n$.

* Coordinate fuctions $x^i \in \AINF^n$ with $x^i(x_1,\dots,x_n) = x_i$ on any $0 \in U \subset \IR^n$,
* Partial derivatives $\del_i = \del_i^x = \frac{\del}{\del x^i}$ those are linear operators $\AINF^n \ra \AINF^n$.
* Axis injections $x_i: \IR \ra \IR^n$, giving rise to maps $x_i^*: \AINF^n \ra \AINF^1$ via pullback.

For a multi-index $I \in \IN^n, I = (i_1, \dots, i_n)$, we define:

* The monomial $x^I =  (x^1)^{i_1} \cdot \dots \cdot (x^n)^{i_n} \in \AINF^n$ 
* The differential operator $\del^I = \del_1^{i_1} \cdot \dots \cdot \del_n^{i_n}$

**Elementary Relations.**

* Product rule. $\del_i[ a \cdot b ] = \del_i[a] \cdot b + a \cdot \del_i[b]$.
* Iterated Product Rule.

  $$
    \del^I[a \cdot b] = \sum_{J,K \in \IN^n, J+K=I} \frac{I!}{J! K!} \del^J[a] \cdot \del^K[b].
  $$

* Chain Rule. 

  $$
  \del_i [f^*[b]] 
    = \del_i[ b \circ f ] 
    = \sum_{k=1,\dots,m} \del_k[b] \circ f \cdot \del_i[f^k] 
    = \sum_{k=1,\dots,m} f^*[ \del_k[b] ] \cdot \del_i[f^k],
  $$
  
  the components $f^k = x^k \circ f$.

## Taylor Series

**Definition.** The taylor series of $a \in \AINF^n$ is the formal power series 

$$
T[a] = \sum_{I \in \IN^n} \del^I [a] (0) \cdot \frac{x^I}{I!} \in \IR \dbrackets{ x^1, \dots, x^n }, 
$$

where $I! = i_1! \cdot \dots \cdot i_n!$. The degree-k Taylor polyonmial is the degree-k truncation of the taylor series:

$$ 
T_k[a] = \sum_{I, |I| \leq k} \del^I[a](0) \cdot \frac{x^I}{I!} \in \IR[x^1, \dots, x^n].
$$

**Properties.**

1. For a polynomial $p \in \IR[x^1, \dots, x^n]$, we have $T_k[p] = p$ if $k \geq deg(p)$.

2. For $a,b \in \AINF^n$, we have

   $$
   T(a \cdot b) = T(a) \cdot T(b), \quad\text{and}\quad T_k(a) \cdot T_k(b).
   $$

3. Let $A: \IR^m \ra \IR^n$ be a linear map and $a \in \AINF^n$, then 

   $$
   % need spaces here to avoid Mardown parsing as links 
   T[a \circ A] (x) = T[a] (A \cdot x).
   $$

4. In particular, for a fixed $x \in \IR^n$ the Taylor series of the 1-dimensional function $[t \mapsto a(x \cdot t)]\in \AINF^1$ is the restriction of the full Taylor series of $a$:

   $$
   T[t \mapsto a(x \cdot t)] (t) = T[a] (x \cdot t). 
   $$

??? note "Proof"

    All three statements are proved via direct comuptation. Statement (2) follows from the iterated product 
    rule stated above.

    To prove (3) one verifies that both sides are equal to: 
    $$ 
    \sum_{M \in \IN^{n \times m}, \sigma_1(M)=J, \sigma_2(M)=I} \del^I [a] (0) \cdot \frac{A^M}{M!} \cdot y^J 
    $$ 
    
    Here the sum runs over all two-dimensional multi-indices $M \in \IN^{n \times m}$. 
    And we denote by $\sigma_i$ the summation of the $i$-th index: 
    $\sigma_1(M) = \sum_i M_{i,j} \in \IN^m$, $\sigma_2(M)=\sum_j M_{i,j} \in \IN^n$. 
    Furthermore $A^M = \prod_{i,j}A_{i,j}^{M_{i,j}}$ and $M! = \prod_{i,j} M_{i,j}!$.

**Theorem (Residuals)** 
For any $a \in \AINF$ on any convex set $U$ of definition we set $R_{k+1} = a - T_k[a]$.

1. (Qualitative Residual). For all $I \in \IN^n$ with $|I| \leq k$ we have 

   $$ 
   \del^I [R_{k+1}] (0) = 0. 
   $$

2. (Integral Residual) 

   $$
   R_{k+1}(x) = (k+1) \sum_{|I| = k+1} \frac{x^I}{I!} \int_0^1 \del^I[a] (t \cdot x) \cdot (1-t)^k dt. 
   $$

3. (Lagrange Residual) For all $x \in U$ there exists a $t \in [0,1]$ so that 

   $$ 
   R_{k+1}(x) = \sum_{|I| = k+1} \frac{x^I}{I!} \del^I[a] (x \cdot t).
   $$

??? note "Proof"

    Property (1) follows from $\del^I[x^J](0) = I! \cdot \delta_{I,J}$.
    For (2), (3) we reduce to the one-dimensional case using Property 4 above.
    Let $a_x(t) = a(x \cdot t) \in \AINF^1$.
    We compute the derivatives to
    $$
      \del [a_x] = \sum_i \del_i [a] (x\cdot t) x_i, \qtext{and}
      \del^n[a_x] = \sum_{|I|=n} \frac{n!}{I!} \cdot \del^I[a] (x \cdot t) \cdot x^I.
    $$

    Then $R_{k+1}(x) = a(x) - T_k [a] (x) = a_x(1) - T_k [a_x] (1)$.
    Now by the 1-dimensional result and iterated chain rule we have:
    $$
      R_{k+1}(x)
      = \int_0^1 \del^{k+1} [a_x] (t) \frac{(1-t)^k}{k!} dt 
      = \sum_{|I| = k+1 } \int_0^1 \del^{I} [a] (x \cdot t) \cdot x^I \cdot \frac{(k+1)!}{I!} \cdot \frac{(1-t)^k}{k!} dt.
    $$

    Similarly, by the 1-d Lagrange residual formula, there exists a $t \in [0,1]$ with
    $$ 
      R_{k+1}(x)
      = \frac{ \del^{k+1} [a_x]  (t) }{(k+1)!}
      = \sum_{|I| = k+1 } \del^{I} [a] (x \cdot t) \frac{x^I}{I!} dt.
    $$

**Theorem (Borel).** For every power series $p \in \IR\dbrackets{ x^1, \dots, x^n }$ there exists a $C^\infty$ function $a \in \AINF^n$ with $T(a) = p$. In other words, the map $T : \AINF^n \ra \IR\dbrackets{ x^1, \dots, x^n }$ is surjective, and hence $\IR\dbrackets{ x^1, \dots, x^n } \isom \AINF^n / \ker(T)$.

For a proof see Ieke Moerdijk, Gonzalo E. Reyes: Models for Smooth Infinitesimal Analysis, p13. or [ncatlab](https://ncatlab.org).

## Commutative Algebra

**$\IR$-Algebra Structure.** The ring $\AINF^n$ inherits the structure of a unital $\IR$ algebra form $\CINF(U,\IR)$.
In other words elements $a,b \in \AINF^n$ can be added, multiplied and multiplied by scalars $\lambda \in \IR$,
so that the usual associativity and distributivity relations hold. The unit element $1 \in \AINF^n$ is the 
constant function $1$.

- The structure maps $\rho_0: \CINF(U,\IR) \ra \AINF^n$ are morphisms of $\IR$-algebras.
- The pullback maps $f^*$ are morphisms of $\IR$-algebras.
- The "constants map" $\lambda \mapsto \underline{\lambda}$ is a morphism of $\IR$-algebras.
- The evaluation map $ev_0: a \mapsto a(0)$ is a morphism of $\IR$-algebras.

**Locality**

* Denote the kernel of the evaluation map by $\fm = \ker(e) = \set{ a \in \AINF^n }{ a(0) = 0 } \subset \AINF^n$.
* It is a maximal ideal in $\AINF^n$.
* There is only one maximal ideal in $\AINF^n$.
* The pullback maps $\vphi^*: \AINF^m \ra \AINF^n$ induced by $\vphi: \IR^n \ra \IR^m$ are local,
   in the sense that $\vphi^*(\fm_m) \subset \fm_n$ or [equivalently](https://stacks.math.columbia.edu/tag/07BJ) $\vphi^{-1}(\fm_n) = \fm_m$.

??? note "Proof" 

    The ideal $\fm \subset \AINF^n$ is maximal, since every element not in $\fm$ is a unit.

    Let $\fn \subset \AINF^n$ be another maximal ideal. We have $\fn \subset \fm$ since otherwise $\fn$ would contain a unit. Since $\fn$ is maximal it follows that $\fn = \fm$.

    If $b(0)$, then $\vphi^*[b](0) = (b \circ \vphi) (0) = 0$, since $\vphi(0) = 0$.
    Conversely if $\vphi^*[b](0) = 0$ then $b(0) = b \circ \vphi(0) = \vphi^*b(0) = 0$. 

**[Hadamard Lemma](https://en.wikipedia.org/wiki/Hadamard%27s_lemma).** 
The maxiamal $\fm$ ideal is generated by the coordinate fuctions $x^i$, i.e. every element $a \in \fm$
can be written in the form $a = \sum_{i=1}^n x^i \cdot a_i$ with $a_i \in \AINF^n$.

??? note "Proof"

    Let $a \in \fm$, and set $a_i(x) = \int_0^1 \del_i[a](t \cdot x) dt$.
    Now $\frac{\del}{\del t} a(t \cdot x) = \sum_{i=1}^n \del_i[a](tx) \cdot x^i(x)$, hence 

    $$
    \sum_{i=1}^n x^i \cdot a_i 
    = \int_0^1 \sum_{i=1}^n \del_i[a](tx) \cdot x^i(x) dt 
    = \int_0^1 \frac{\del}{\del t} a(t \cdot x) dt
    = a(x) - a(0) = a(x). qed.
    $$

**Corollary.**

* If $a = \sum_{i=1}^n x^i \cdot a_i$ is a Hadamard representation of $a \in \fm$, then $a_i(0) = e \del_i[a]$
* The powers $\fm^k$ are generated by the monomials $x^I, I \in \IN^n, |I| = k$.
* The intersection $\fm^\inf := \cap_{k \geq 0} \fm^k$ is equal to $\ker(T) = \set{a}{ \del^I[a] = 0 \stext{for all} I}$.
* The map $\IR[x^1, \dots, x^n] \ra \AINF^n$, mapping a polyomial to the associated $C^\infty$-function-germ is injective, and induces an isomorphism:
  $$ \IR[x^1, \dots, x^n] / (x^1, \dots, x^n)^k \lra \AINF^n / \fm^k. $$
  In particular, the completions are isomorphic $\IR\dbrackets{ x^1, \dots, x^n} \isom \hat \AINF^n$,
  and we have:
  $$ \fm^k / \fm^{k+1} = (x^1, \dots, x^n)^k /  (x^1, \dots, x^n)^{k+1} = \IR< x^I \,|\, |I| = k >.$$

**Lemma**
For an open set $0 \in U \subset \IR^n$, denote the restriction map by $\rho: C^\infty(U, \IR) \ra \AINF^n$, 
let $\fm_0 \subset C^\infty(U, \IR)$ be the kernel of the evaluation map at $0$. Then,

* $\rho$ is surjective and induces and isomorphism $C^\infty(U, \IR) / \ker(\rho) \isom \AINF^n$.
* $\rho$ induces an isomophism $C^\infty(U, \IR)_{\fm_0} \isom \AINF^n$.

??? note "Proof"

    To prove the first claim choose a representative $(V, a) \in \AINF^n$, with $V \subset U$.
    Choose $\eps > 0$ small enough so that the ball $B_{2\eps}$ lies in $V$.
    Choose a bump function $\delta$ with $\delta = 1$ on $B_{\eps}$ and $\delta = 0$ outside of $B_{2\eps}$.
    Then $a \cdot \delta$ is defined on $V$ and equal to zero outside of $B_{2\eps}$, and hence extends to U.

    To prove the second claim we first note that $b(0) \neq 0$ implies that $b(x)
    \neq 0$ for $x$ in an open subset of $0$, hence $b$ is invertible in $\AINF^n$.
    This shows that $\rho$ induces a map from the localization.
    The map is surjective by the claim we just proved.
    To show the map is injective, assume that the formal quotient $(a,b)$ maps to $a/b = 0 \in \AINF^n$.
    This means that $a = 0$ in an open neightbourhood $V$ of $0$.
    Let $\delta$ be a bump function with $\delta(1) = 1$ and $\delta(x) = 0$ outside of $V$.
    Then $\delta \notin \fm_0$ but $\delta a = 0 \in  C^\infty(U, \IR)$, showing that
    $(a,b) = 0 \in  C^\infty(U, \IR)_{\fm_0}$.

## Tangent Vectors

In this section we construct tangent and co-tangent space at the origin $0 \in \IR^n$.
In order to study higher differentials like $\del_i^2$ we will also need to construct tangent modules of vector fields.

**Tangent Space**

* For an $\AINF^n$-module $M$, the set of $\IR$-linear derivations  $Der_\IR(\AINF^n, M) \subset  Hom_\IR(\AINF^n, M)$
  is the set of all $\IR$-linear maps $\delta: \AINF^n \ra M$ satisfying the product rule
  $\delta[a \cdot b] = b \cdot_M \delta[a] + a \cdot_M \delta[b]$.

* Consider $\IR$ as asn $\AINF^n$ module via $e[a] = a(0)$.
  The tangent space of $\AINF^n$ at $0$ is defined as set of derivation 
  $$ T_0 := T_0^n := T_0 \AINF^n = Der_\IR(\AINF^n, \IR). $$  

* The tangent space is a finite dimensional $\IR$ vector space with basis
  $dx_i := e \del_i a \mapsto \del_i[a](0)$:
  $$ T_0 = \IR< dx_1, \dots, dx_n>. $$ 


We will prove the last statement in the next paragraph.

**Cotangent Space**
  
The co-tangent space of $\AINF^n$ at $0$ is defined as $\Omega_0 := \Omega_0^n := \Omega_0 \AINF^n := \fm/\fm^2$.  
It comes with a canonical map $d: \AINF^n \ra \Omega_0, a \mapsto a  - \underline{ev_0[a]} = a - a(0)$, called the exterior differential.

* The exterior differential $d: \AINF^n \ra \Omega_0$ is a derivation.

* The cotangent space is a finite dimensional $\IR$ vector space with basis $dx^i = d[x^i]$.
  $$ \Omega_0 = \IR< dx^1, \dots, dx^n> $$ 

* The cotangent space has the following universal property. For every $\IR$
  vectors space $V$, the map
  $$ Hom_\IR(\Omega_0, V) \ra Der_\IR(\AINF^n, V), \alpha \mapsto \alpha \circ d $$
  is an isomorphism. 

* For $\omega \in \Omega_0$ and $\delta \in T_0$, we denote the natural pairing
  between tangent and co-tangent space as: 
  $$ (\delta, \omega) = \delta[\omega] \in \IR $$

??? note "Proof"

    To show that the exterior differential is a derivation we calculate:
    $d[a b] - b(0) d[a] - a(0) d[b] = \dots = - d[a] \cdot d[b] =  0 \in \fm/\fm^2$.

    Let $\delta$ be a derivation.
    Note that $\delta[1] = \delta[1 1] = 2 \delta[1]$, hence $\delta[1] = 0$.
    For $a,b \in \fm$ we have $d[a b] = \delta[a]e[b] + e[a] \delta[b] = 0$, hence $\delta = 0$ on $\fm^2$.
    This shows that $\delta$ factors through $d: \AINF^n \ra \fm/\fm^2$.

    Conversely, every linear map $\alpha: \fm/\fm^2 \ra \IR$ defines a derivation $\alpha \circ d$.
    This shows the universal property of the co-tangent space.

    By Hadamard's lemma we have $\Omega_0 = \fm/\fm^2 = \IR<dx^1, \dots, dx^n>.$.
    Hence $T_0 \isom Der_\IR(\AINF^n, \IR) \isom Hom_\IR(\Omega_0, \IR)$.
    Under this identification $dx_i$ and $dx^i$ are dual to each other:
    $dx_i[dx^j] = e \del_i[x^j] = \delta_{i,j}$.

**Naturality.** 

* A differentiable map $\vphi: \IR^n \lra \IR^m$ with $\vphi(0) = 0$ induces a linear map
  by pre-composition of derivations:
  $$
    D_0\vphi = \vphi_\* : T_0^n \lra T_0^m, \quad \delta \mapsto \delta \circ \vphi
  $$
  and similarly on the cotangent space
  $$
    D_0^*\vphi = \vphi^\*: \Omega_0^m \lra \Omega^n_0, \quad b \mapsto b \circ \vphi.
  $$

* Naturality (Chain Rule). If $\psi: \IR^m \lra \IR^l$ is a second differentiable map with $\psi(0) = 0$,
  then 
  $$ D_0(\psi \circ \vphi) = D_0\psi \circ D_0\vphi, \quad D_0^\*(\psi \circ \vphi) = D_0^\*\vphi \circ D_0^\*\psi, $$
  This statement is equivalent to the claim that $D_0,D_0^*$ are natural transformations, which is obvious 
  from the definition.

* Those maps are dual/adjoint to each other with regards to the isomorphism $T_0 \isom Hom(\Omega_0, \IR)$.
  For $\omega \in \Omega_0^m$ and $\delta \in T_0^n$ we have:
  $$
    (\vphi_\*(\delta), \omega) = (D_0 \vphi(\delta), \omega) = (\delta, D_0^*\vphi(\omega)) = (\delta,\vphi^\* \omega) 
  $$
  If $\omega = db$ then all those expressions are equal to $\delta(b \circ \vphi)$.
  
* Linear maps. If $A: \IR^n \ra \IR^m$ is a linear map, then
  $$ 
    dy^j(D_0 A)(dx_i) = y^j A x_i = A_{ij}.
  $$
  Hence "$D_0A = A$" under the identification of $T_0^n \isom \IR^n$ given by the canonical basis $dx_i$.

* Coordinate representation. In coordinates $x^i,x_i$ on $\IR^n$ and $y^j,y_j$ on $\IR^m$ we have:
  $$
    D_0 \vphi 
    = D_0( (\sum_j y_j \circ y^j) \circ \vphi(  \sum_i x_i \circ x^i ) )
    = \sum_{j} D_0 y_j \circ D_0(y^j \circ \vphi) \circ D_0( \sum_i x_i \circ x^i )
  $$
  $$
    = \sum_{i,j} D_0 y_j \circ D_0(y^j \circ \vphi \circ x_i) \circ D_0(x^i)
  $$
  $$
    = \sum_{i,j} \frac{\del \vphi^j}{\del x^i}(0) \cdot  dy_j \circ dx^i
  $$
  Where we used the canonical identifications $dx_i = (D_0 x_i)(e \del_t)$, $dx^i = D_0 x^i$.
  Also note that, while $\vphi$ is not linear, the derivative $D_0 \vphi$ is linear and we can
  "pull-out" summation in step 3. 

## Implicit Functions

**Germs of Functions.** The category $G$ of germs of $C^\infty$-spaces has objects $\IR^n_{,0}$ for $n \in \IN_0$ and morphisms germs of $C^\infty$-functions:

$$ 
Mor(\IR^n_{,0},\IR^m_{,0}) = \lim_{\lra} \Set{ C^\infty_0(U, \IR^m) }{ 0 \in U \subset \IR^n },  
$$

where $C^\infty_0(U, \IR^m)$ is the set of $C^\infty$-functions $\IR^n \ra \IR^m$ mapping $0$ to $0$.
Composition of functions descends to an associative composition operations on $G$.

**Properties**

* Every function $\vphi: \IR^n \ra \IR^m$ with $\vphi(0) = 0$ defines a germ $\vphi \in Mor(\IR^n_{,0},\IR^m_{,0})$.

* Elements in $Mor(\IR^n_{,0},\IR^m_{,0})$ are represented by functions $\vphi: U \ra \IR^n$ defined in an
  open neighborhood $U$ of $0 \in \IR^n$.

* Germs $\vphi \in Mor(\IR^n_{,0},\IR^m_{,0})$ induce algebra morphisms $\vphi^*: \AINF^m \ra \AINF^n$.

**Theorem (Inverese Functions).** 

If $\vphi: \IR^n_{,0} \ra \IR^n_{,0}$ is a function germ, then
$\vphi$ is invertible as a germ if $D_0 \vphi$ is invertible as a linear endomorphism of $T_0$. 
In this case $D_0 \vphi^{-1} = (D_0\vphi)^{-1}$.

**Theorem (Implicit Function).** 

Let $a \in \AINF^n$ be a function with $a(0) = 0$ and $dx_n \cdot a \neq 0$, then:

* There exists a function $\vphi: \IR^{n-1}_{,0}) \ra  \IR^{n}_{,0})$, 
  with $a(x_1, \dots, x_n) = 0$ if and only if $x_n = \vphi(x_1,\dots,x_{n-1}).$

* The projetion $\pi: \IR^{n} \ra \IR^{n-1}, (x_1,\dots,x_n) n\mapsto (x_2, \dots, x_n)$ 
  induces an isomorphism $\pi^*: \AINF^{n-1} \ra \AINF^n / a$.


## Invariant Theory

**Group Action.** 
Let $\mathrm{Diff}_0^n$ be the group of local diffeomorphisms of $\IR^n$.
Elements $\varphi \in \mathrm{Diff}_0^n$ are represented by diffeomorophisms $\varphi: U \ra V$, with $0 \in U, 0 \in V$.
Two representatives $\varphi: U \ra V, \varphi': U' \ra V'$ are equivalent if they agree on $U \cap U'$.

Evenry element $\varphi \in \mathrm{Diff}_0^n$ gives rise to an liear isomorphism 
$\varphi^*$ of $\AINF^n$ via the pullback operation.
In this way we optain a group action $\mathrm{Diff}_0^n \ra GL(\AINF^n), \varphi \mapsto \varphi^*$.

**Question:** For any any natural "structure" $F$ on $\AINF^n$, classify elements of $F$ up to diffeomorphism.

**Examples:** 

- $F = id$: Classify local functions up to diffeomorphism. In the case $n=1$ we claim that $\AINF^1 / \mathrm{Diff}_0^1 = c(\IR) \union \\{ x^1 \\}$

- $F = T$ (Tangent space). Classify tangent vectors up to diffeopmorphis. We have $T(\AINF^n) / \mathrm{Diff}_0^n = \\{ 0, \del_1 \\}$, reflecting the fact that two non-zero tangent vector can be transformed into each other via a (linear) diffeomorphism.
