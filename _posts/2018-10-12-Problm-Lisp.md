---
layout: "post"
author: "Heinrich Hartmann"
location: Stemwede, Germany
title: The Problem with Lisp
permalink: /blog/problem-lisp.html
hidden: false
categories:
- blog
#- opinion
# canonical:
#  url: "https://www.circonus.com/2018/02/circonus-raspberry-pi/"
#  name: "Circonus blog"
# splash:
#   src: "/assets/capture_1517430553.png"
#   credits: "click to enlarge"
#   link: "/assets/capture_1517430553.png"
---

I picked up some Lisp over the years by tinkering with Emacs and reading the [SICP](https://mitpress.mit.edu/sites/default/files/sicp/index.html) book.
I have a lot of sympathy for the language.
Getting productive with Lisp, however, took me very long, and I know many people share this experience.

The first thing people complain about are the excessive use of parenthesis and the unusual prefix notation.
While this is confusing at first, there is another issues which I found far more important, and less talked about:

**The Lisp evaluation order is highly unpredictable.**

What do I mean by this?
Lisp expressions are conveniently represented as nested parenthesis.
But how am I supposed to evaluate such an expression?

The first example that are always presented look like this:
```elisp
(+ 22 (* 3 (+ 19 (* 2 5))))
```

Here the evaluation order is clear, and very familiar: 
1. Evaluate the parenthesis inside-out
2. The first list element contains the function
3. The remaining elements are the arguments to the function.

Great. Let's see how that works:
```elisp
(+ 22 (* 3 (+ 19 (* 2 5))))
 4     3    2     1

1: (* 2 5)   => 10
2: (+ 19 10) => 29
3: (* 3  29) => 87
4: (+ 22 87) => 109
```
Or replacing in place:
``` elisp
   (+ 22 (* 3 (+ 19 (* 2 5))))
=> (+ 22 (* 3 (+ 19 10)))
=> (+ 22 (* 3 29))
=> (+ 22 87)
=> 109
```
Look how nicely you can perform those evaluation by hand.
Is Lisp not a beautiful language?
One is led to think, that every lisp expression could be parsed and evaluated like this.

This is wrong!

Example:
```elisp
(defun silly (a b c) (let ((sum (+ a b c))) (* sum (+ 1 sum)))
```
This defines a function "silly", that does some silly arithmetic.
If you parsed this inside-out, you would try to evaluate:
```elisp
(+ a b c) => X ;; this is only defined if we know a,b,c already...
               ;; ... but OK, let's just call the result X for now.
(sum X)        ;; ??? Where does "sum" come from? How do I apply sum to X
...
```
A little later we hit:
```elisp
(a b c)        ;; ??? What function is "a"?
```
So this simple rule, breaks down completely.

It turns out, that right evaluation order in this case is:
```elisp
(defun silly (a b c) (let ((sum (+ a b c))) (* sum (+ 1 sum)))
 1     -      -       2     -    3           5      4
```
Where elements marked with "-" are not evaluated at all.

Who would have guessed this?

The reasoning is as follows:
1. `(defun <name> <varlist> <body>)` is a special form. Don't evaluate `varlist`.
   Evaluate `body` once we are called.
2. `(let <varlist> <body>)` is again special form.
   Don't evaluate `varlist` directly, but evaluate the second elements of it's entries.
   Then proceed to evaluate `body`.
3. The body is a regular function call and can be evaluated as we have seen before.


To parse a general expression `(F a b c ...)` you need to know whether F is a special form.
If not, evaluate the arguments (`a`, `b`, `c`, ...) first, then call the function.
If it is special, than everything can happen, depending on `F`!

This would not be that bad if there were only a handful of built-in special forms,
which one quickly learn to spot.

The real fun begins, when one realizes that the macro system let's users define their own special forms!
And there is no syntactic difference between functions and macro calls, so you can never be sure what you are looking at.

**Conclusion** Lisp's powerful macro system is the main source for the confusion around evaluation
order that we have described in a simplistic example above.
People who have mastered the language have clearly found a way to parse Lisp expressions quickly.
I just don't think there is any tricks.
You have to remember which forms are special in your codebase, and how you have to read them.
Just like irregular verbs in natural language.

In this light it seems very reasonable for more modern lisp-like languages like Python or Ruby, to
get rid of macro system altogether, so the language behaves much more predictably.
