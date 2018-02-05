---
layout: "post"
author: "Heinrich Hartmann"
location: Stemwede, Germany
title: Why Data Science?
permalink: /blog/Why-Data-Science.html
categories:
- opinion
- blog
splash:
  src: "/assets/capture_1517430553.png"
  credits: "click to enlarge"
  link: "/assets/capture_1517430553.png"
---

## Personal History

I have a pure-math background.
Between the age of 15-25 my goal was to become a Professor in Mathematics.
I completed a PhD in Algebraic Geometry from University of Bonn,
published a few papers in well respected journals (Math. Ann. 2012 / Man. Math. 2013),
and landed a very prestigious PostDoc position at the University of Oxford.

Then things changed, and I pivoted into Computer Science.
I applied for a research position in Computer Science at the Universtiy of Koblenz.
In 2015 I started working as free-lance [consultant](http://heinrichhartmann.com/consulting.html).
Today I am Chief Data Scientist at Circonus.

## Why become a Data Scientist?

* DataScience is the realization that Business need Mathematicians to make sens of their data.
  Storage costs have dropped.
  It's even affordable to store and analyze machine generated data.
  Not only bank balances or order books.
  There are massive amounts of data are accessible.

* Mathematicians bring a great skillset to the table.
  Frustration tolerance.
  Reasoning.
  No fear of equations.
  The average computer-scientist trained (at least the ones I have seen) are not able to work with equations very well.
  Many are scared of matrices.
  It can not be expected that you are able to work creatively with conceptual models:
  - Interpret formula geometrically
  - Grasp how the high level description is reflected in the formulas
  - Incorporate new ideas and simplify or extend the given model
  This is *really* hard for CS master students.
  Developers often have very shallow knowlege of mathematics for them ML papers are largely impenetrable.

  S


* The industry is deeply confused.
  - I'll defined field
  - Lot's Marketing BullShit from vendors
  - Unrealistic expectations
  - No esablished standards.
  - Questionable Hireing practices "The bar is 'have read a paper'"

## Advice

So, you have decided that you want to enter the field.
What should you do?

### Take programming seriously

You will be measured by the value you create for the company.
For a software company, the value it provides is the code it is shipping and running.
In production.
If you want to generate value, then learn how to code.
This will be your bred and butter.

In the beginning I thought that I would be the one doing the mathematics and other people would do the implementation.
This does not work.
It's called *data* science for a reason.
You need to work with the data to create any value.

Then I tought, well I will write prototypes in R or Python and other people will do the implemenation for production systems.
I am not a trained programmer after all!

It turns out, that this does not work well either.
I actually tried that once.
The problem is the iteration speed.
Your method might work well on the data sets you tried, but after you deployed it you find another instance, for which the method does not work that well.
So you need to copy the data over to your test environment and make some changes to your prototype.
Then someone needs to go back and change the production code to accomodate for your canges.
And of course, you now used that R library that is not available in Java, so that someone has to re-implement that functionality as well.
Then stuff needs to be tested, packaged and deployed.
It typically takes weeks to months to complete a cycle like this.
It's incredibly expensive for the company.

The truth is:
{% pullquote %}
Data Scientist need to write and maintain production code.
{% endpullquote %}

If you do it that way, it takes more effort to produce the code upfront, but iteration becomes much qicker.
Just make changes to the classifier until the tests look good, clean up your code.
(Then let someone with more programming experience look at it).
Click deploy.
You can repeat this cycle multiple times a day.

The good news is: It's not all that hard.
If you made it through graad school im pure maths, you are more than smart enought decent programmer.
In many ways a proof is very similar to a progam.

As a pure mathematician, one pitfall is to try to appraoche programming from first principles.
I.e. learn about how the CPU works and formal mathematical models of computation (lamda calculus).
This is incredibly hard to pull off.
There is just too much complexity in your way.
You will never understand what your Java code actually does on the CPU.
At least not, without investing many years of time into this.

Programming is a craft.
The only thing that really helps is practice.
Write code.
Read code others have written.
Read about coding.
Have fun at coding.
Repeat.

## Focus on Simple Methods

Do the simple things first.
Linear regression and Bayesian Interference are very powerful tools, that can solve a lot of problems on the spot.
Don't apply machine sophisticated machine learning algorithms before you tried a bunch of if statments.

There is an anecdote I like to share in this context.
I was working on a activity recognition classifier that should be able to detect human activities like walking, running, sitting, etc. on the basis of sensor data collected on a mobile phone.
My colleagues and peers told me that PCA, SVMs and decision trees would be the way to go here.
I spent the better part of a year, learning about this methods, and machine learning frameworks,
collecting data, doing trials, etc.
It turns out exporting a trained model and put it on an Android phone is not that easy.
This all worked OK-ish but we were far away from the 99% accuracy claimed in the papers.
And you could see that if just was not working all that well when you used it on your phone.

It was on a train ride and talking to my wife when I realized, Gosh!
I could build something better by extracting a few simple features from accelerometer data and if statments to get at a better result.
It took me 30 minutes to implement, and tune the parameters, during the train ride.
This was the resulting code:

```java
public static String classify(FeatureVector v) {
    if (v.s2Var < 1.5) {
        // sitting, standing, on_table
        if (v.tilt < 0.7) {
            if (v.tilt < 0.07 && v.roll < 0.07) {
                return ON_TABLE;
            } else {
                return SITTING;
            }
        } else {
            return STANDING;
        }

    } else {
        // walking, running
        if (v.s2Var < 30) {
            return WALKING;
        } else {
            return RUNNING;
        }
    }
}
```
[github](https://github.com/Institute-Web-Science-and-Technologies/LiveGovWP1/blob/master/server/HARTools/src/main/java/eu/liveandgov/wp1/classifier/ManualClassify.java)

4 if statements
I never tried to run the benchmarks on it, but in practice it just worked great.

The one thing I learned from this was:
Before ever touching RapidMinder again, implement your baseline!

You don't have big data: https://www.micropact.com/blog/detail/you-probably-dont-have-big-data/

Important things that work:

* Linear Regression
* Baysian Interference
* Bootstrap
* Gradient Descend
