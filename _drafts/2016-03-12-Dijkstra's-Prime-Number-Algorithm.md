---
author: "Heinrich Hartmann"
layout: "post"
~---

<script src="http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS_HTML" type="text/javascript"></script>
<style> .center { margin-right: auto; margin-left:auto; display: block } </style>
<style src="/css/coderay.css"></style>

I was reading Tanenbaum's paper [1] today, which contains an algorithm
for calculating prime s attributed to E.W. Dijkstra [2].  The
algorithm was given as an example for a special purpose language SAL.
Here is a literal translation of this algorithm to lua.

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

What is remarkable about this algoirthm is that no divisions are used, at all!

Only a very innocent looking check for inequality `PRIM = X ~= V[K]`.

## A refactored version

I spend some time, refactoring this algorithm, to make it more
ideomatric and see what's going on. The result is the following
listing:

{% highlight lua %}
function primes(N)
  local P, Q, x, limit = {2}, {}, 1, 4
  local is_prime = function()
    for k = 2, #Q do
      if x > Q[k] then Q[k] = Q[k] + P[k] end
      if x == Q[k] then return false end
    end
    return true
  end
  while #P < N do
    repeat
      x = x + 2
      if x >= limit then
        Q[#Q+1], limit = limit, P[#Q+2]^2
      end
    until is_prime()
    P[#P+1] = x
  end
  return P
end
{% endhighlight %}

By looking at the
[commit history](https://github.com/HeinrichHartmann/DijkstraPrimes/commits/master),
you see that Listing 1 can be transformed into this here in 14 simple,
equivalence transformations ('refactorings').

Notable changes are:

- The names of most variables are changed.
- We don't use print statments for output, but return a table.
- The iteration indices `I` and `K` could be avoided, by using the `#`-operator, to get the table lenght.
- The boolean flag `PRIM`, could be avoided, by introducing a function  `is_prime` that calculates and returns that flag.

While making these changes the logic of the calculation became more
apparent to me.  I hope that others might find this version also
easier to read.

## Why does it work?

So, what goes into the workings of this algorithm?

The table `P` contains the list of already computed prime numbers.

The nuber `x` is the current active prime candidate, which runs over
the odd numbers.  This is fair, since the case `P[1] = 2` has been
explicity taken care of. Within the iteration we can assume, that all
primes `p < x` are listed in `P`.

To check, that `x` is prime, we have to check that no number `d` with
$$1 < d < x$$ divides `x` (i.e. $$d | x$$).  The following reductions
are well known:

- It suffices to check the case `d` is a prime number. (Since, then x
  is also divided by all take a prime divisor of d.)
- It suffices to check numbers $$d \leq \sqrt{x}$$. (When $$x = d e$$ then
  either `d` or `e` are less or equal to $$\sqrt{x}$$.)

Let `q` be the smallest prime number such that $$\sqrt{x} < q$$. We call
`q` the limit prime, and set `limit = q^2`.

We have `q < x` (?? since otherwise `q = x` or `q > x`), hence we can
ind `q` in our table of already computed prime numbers: `P[q_idx] = q`.

The table `Q` maintains a list of multiples of the primes in `P`,
which are close to `x`:

- We want `Q[k]` to be the smallest multiple of `P[k]` so that `x <=
  Q[k]`.  If the condition is checked and maintained in the line: `if
  x > Q[k] then Q[k] = Q[k] + P[k] end`.  `Q` is kept up to date with
  every candidate number `x` so we need to add `P[k]` at most once in
  this step.

- The largest prime we need to check is the one before the limit prime
  `q`, with index `P[q_idx - 1]`.  Q only stores values up to that
  index.


## A statically type'd version

This algorithm also served as the perfect material for testing out my
shiny old "Triumph Durabel" type writer. Here is how it looks 1940'ies
style:

![png](/assets/Dijkstra_files/typed.png){: .center }

For some reason lua code looks quite appealing when typed down on
paper.

## REFERENCES

1. A.S. Tanenbaum - General-Purose Macro Processor as a Poor Man's Compiler-Compiler, IEEE TOSE, Sol.SE-2, No.2, JUNE 1976
2. E.W. Dijkstra - Structured Programming
