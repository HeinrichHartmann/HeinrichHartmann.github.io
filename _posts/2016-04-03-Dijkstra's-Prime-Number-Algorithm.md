---
author: "Heinrich Hartmann"
layout: "post"
---

<script src="http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS_HTML" type="text/javascript"></script>
<style> .center { margin-right: auto; margin-left:auto; display: block } </style>
<style src="/css/coderay.css"></style>

I was reading Tanenbaum's paper [1] lately, which contains an
algorithm for calculating prime numbers attributed to E.W. Dijkstra [2].
The algorithm was given as an example for a special purpose language
SAL.  Here is a literal translation of this algorithm to lua:

{% highlight lua %}
local N = 100
local M = 10
function PRIME()  -- PROCEDURE DECLARATION;
  local X, SQUARE, I, K, LIM, PRIM -- DECLARATION OF VARIABLES;
  local P, V = {}, {}
  P[1] = 2 -- ASSIGNMENT TO FIRST ELEMENT OF p;
  print(2) -- OUTPUT A LINE CONTAINING THE NUMBER 2;
  X = 1
  LIM = 1
  SQUARE = 4
  for I = 2, N do -- LOOP. I TAKES ON 2, 3, ... N;
    repeat -- STOPS WHEN "UNTIL" CONDITION IS TRUE;
      X = X + 2
      if SQUARE <= X then
        V[LIM] = SQUARE
        LIM = LIM + 1
        SQUARE = P[LIM] * P[LIM]
      end
      local K = 2
      local PRIM = true
      while PRIM and K < LIM do
        if V[K] < X then
          V[K] = V[K] + P[K]
        end
        PRIM = X ~= V[K]
        K = K + 1
      end
    until PRIM -- THIS LINE CLOSES THE REPEAT
    P[I] = X
    print(X)
  end
end
PRIME()
{% endhighlight %}

By running this program, you can quickly verify that it produces a a
list of the firs 100 prime numbers. (The 100th prime number is `541`,
who would have thought?).

What is remarkable about this algoirthm it uses no divisions at all!
Just a very innocent looking check for inequality `PRIM = X ~= V[K]`
is performed to single out divisible numbers.

This certainly sparked my curiosity. However, at first glance, I was
not able to make much sense out of this algorithm!

## A refactored version

Let's see if we can make this rather acrane program more readable by
refactoring it into a form that is more 'modern' ideomatric and
easier to comprehend. The result is the following listing:

{% figure Dijkstra_files/typed png 'A  refactored version of Dijkstras prime number algorithm' %}

Aside: As you can see, this algorithm also served as the perfect
material for testing out my shiny old "Triumph Durabel" typewriter,
from the 1940ies.

If you don't like typewriters, you can have a look a the code on
[Github](https://github.com/HeinrichHartmann/DijkstraPrimes/blob/master/Primes.lua).
The
[commit history](https://github.com/HeinrichHartmann/DijkstraPrimes/commits/master),
shows how you can arrive at this refactored version in 14 simple
transformations, that did not change the results of the computation,
such as:

- Change variable names
- Don't use print statements for output, but return a table.
- Remove iteration indices `I` and `K` by using the `#`-operator, to get the table size.
- Introduce the a function `is_prime` that calculates and returns the `PRIM` flag.

While making these changes the logic of the calculation became more
apparent to me.  I hope that others might find this version also
easier to read.

## How does it work?

So, what goes into the workings of this algorithm?

The table `P` contains the list of already computed prime numbers.

The nuber `x` is the current active prime candidate, which runs over
the odd numbers.  This is fair, since the case `P[1] = 2` has been
explicity taken care of. Within the iteration we can assume, that all
primes `p < x` are listed in `P`.

To check, that `x` is prime, we have to check that no number `d` with
$$1 < d < x$$ divides `x` (i.e. $$d | x$$).  The following reductions
are well known:

- It suffices to check the case `d` is a prime number.
- It suffices to check numbers $$d \leq \sqrt{x}$$.

We call the smallest prime number, that we don't have to check the
'limit prime' `q` and set $$limit = q^2$$.  Clearly `q` be the first
prime number such that $$\sqrt{x} < q$$.

It turns out, that the limit prime is always smaller than `x`, and
hence we can ind `q` in our table of already computed prime numbers:
`P[q_idx] = q`. (I was not able to find a simple proof of this
statement, but it seems to follow from
[Bertrand's postulate](https://www.wikiwand.com/en/Bertrand's_postulate)
quite easily.)

Now, the table `Q` maintains a list of multiples of the primes in `P`,
which are close to `x`:

- We want `Q[k]` to be the smallest multiple of `P[k]` so that `x <=
  Q[k]`.  If the condition is checked and maintained in the line:

      if x > Q[k] then Q[k] = Q[k] + P[k] end

  `Q` is kept up to date with every candidate number `x` so we need to
  add `P[k]` at most once in this step.

- The largest prime we need to check is the one before the limit prime
  `q`, with index `P[q_idx-1]`. `Q` only stores values up to that
  index.

This concludes the explanation. All in all it's a quite nice mix
between the Erathosenes Sieve (that would maintain a list of all
integers up to x), and a naive test of divisibility by primes, up to
$$\sqrt{x}$$. Figure 2 contains my humble attempt to visualize the
algorithm for the first view prime numbers.

{% figure Dijkstra_files/visualization_2 png 'A manual visualization of the algorithm' %}

The algorithm is also quite memory efficient. In addition to the list
of primes, we only store one integer for each prime up to
$$\sqrt{x}$$.  There are approximately $$x/ln(x)$$ primes smaller than
$$x$$ (cf. [Prime-number-theorem](https://www.wikiwand.com/en/Prime_number_theorem)).
Hence the asymptotic memory requirements are:

$$ \frac{x}{ln(x)} + \frac{\sqrt{x}}{ln(\sqrt{x})} = \frac{x + 2 \sqrt{x}}{ln(x)} \sim \frac{x}{ln(x)}.$$

Which is the asymptotic size of the result set.

## Open Ends

At some point, I'd like to translate this algorithm to a pure
functional style, that avoids iteration and local variables and just
relies on function arguments and recursion. I hope that in this way
to correctness of the algorithm is easy to proof.

Also the visualization has clear room for improvement. Ideally, I'd
like to have a dynamic version of this, that updates itself as the
algorithm moves along. This will have to wait for another post.

## REFERENCES

1. A.S. Tanenbaum - General-Purose Macro Processor as a Poor Man's Compiler-Compiler, [IEEE TOSE, Sol.SE-2, No.2, JUNE 1976](http://ieeexplore.ieee.org/xpl/login.jsp?tp=&arnumber=1702350&url=http%3A%2F%2Fieeexplore.ieee.org%2Fxpls%2Fabs_all.jsp%3Farnumber%3D1702350)
2. E.W. Dijkstra - Notes on Structured Programming ([pdf](https://www.cs.utexas.edu/users/EWD/ewd02xx/EWD249.PDF))
