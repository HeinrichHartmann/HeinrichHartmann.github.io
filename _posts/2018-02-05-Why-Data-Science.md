---
layout: "post"
author: "Heinrich Hartmann"
location: Stemwede, Germany
title: Why Data Science?
permalink: /blog/Why-Data-Science.html
hidden: true
categories:
- opinion
- blog
splash:
  src: "/assets/regression.png"
  credits: 'Bob Dole [CC BY SA] via <a href="https://stackoverflow.com/questions/27336771/matlab-fit-a-line-to-a-histogram">Stack Overflow</a>'
---

## Why become a Data Scientist?

* DataScience is the realization that Business need Mathematicians to make sense of their data.
  The analysis of balnance sheets and order books does not involve that much mathematics.
  But storage costs have dropped.
  Storing massive amounts of data is now common.
  On some web-sites every click of every user is tracked.
  If you want to extract information from this kind of scattered, high volume information, you need to work harder.
  This is where mathematicians come in.

* Mathematicians bring a great skillset to the table:
  Frustration tolerance.
  Formal reasoning.
  No fear of equations.
  The average computer-scientist trained (at least the ones I have seen) are not able to work with equations very well.
  Many are scared of matrices.
  It can not be expected that you are able to work creatively with conceptual models:
  - Interpret formula geometrically
  - Grasp how the high level description is reflected in the formulas
  - Incorporate new ideas and simplify or extend the given model
  This is *really* hard for CS master students.
  Those often have very shallow knowlege of mathematics for them ML papers are largely impenetrable.

* The industry is deeply confused.
  - Ill defined field
  - Lot's of marketing bullshit from vendors
  - Unrealistic expectations by management
  - No established standards.

## Advice

So, you have decided that you want to enter the field.
What should you do?

### Take programming seriously

You will be measured by the value you create for the company.
For a software company, the value it provides is the code it is shipping.
If you want to generate value, learn how to code that people can read and deploy.
This will be your bred and butter.

This is one of the things I have learned on the job.
Starting as Data Scientist I thought, I will write prototypes in R or Python and other people will do the implemenation for production systems.
I am not a trained programmer after all!

It turns out, that this does not work.
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
If you made it through graad school im pure maths, you are more than smart enought to become a decent programmer.
After all, a proof is very similar to a progam.

As a pure mathematician, you will naturally try to appraoche programming from first principles:
Literally the first article on my blog, is about [dissection a hello world program](http://heinrichhartmann.com/blog/2012/09/10/Dissecting-Hello-World.html) and down to the indivicual instructions that are executed on the CPU.
Be warned, that this is a rabbit hole with no end!
I still think, there is great benefit for principled approaches to software, but it stands in your way of becoming productive fast.
There is just too much complexity.
You will never understand what your Java code actually does on the CPU.
At least not, without investing many years of time into this.

It's much more effective to approach programming is a craft.
The only thing that really helps is practice.
Write code.
Read code others have written.
Read about coding.
Have fun at coding.
Repeat.

If you find some time to study the fundamentals as well, here are a few great options:
- [Petzold - Code: The hidden language of Hardware and Softtware](https://www.amazon.com/Code-Language-Computer-Hardware-Software/dp/0735611319) -- Probably the only good book published by Microsoft Press. Takes you all the way from electrical circuits to the archtecture of simple CPU.
- Intel x86 manual -- It contains a description of the CPU architecture as well as the authorative source for the instruction set.
- Kernighan Ritchie - The C Programming Language -- C is a thin wrapper around assembly. This is still the best book on this topic. C is still the go-to choice, if you want to program the bare machine.
- Church Lambda Calculus Paper -- Completely different approach to computation. The beginning is worth reading.
- McCarthy LISP Paper -- LISP is a wrapper around lambda calculus. Awesome paper.
- Abelson Suessmann - SICP Book -- The best book about programming I know.
- Learn some Forth

I don't recommend looking into the Knuth TAOCP books.

## Data Mining

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

This are literally *four* if statements
I never tried to run the benchmarks on it, but in practice it just worked great.

The one thing I learned from this was:
Before ever touching RapidMinder again, implement your baseline!

Important methods that are known to work:

* Visualizations!
* Descriptive Statistics
* Linear Regression
* Gradient Descend
* Bootstrap method
* Baysian Interference (personal preferences)

Pointers to the Literature:

- [Rice - Mathematical Statistics and Data Analysis](https://www.amazon.de/Mathematical-Statistics-Analysis-Available-Enhanced/dp/0534399428)
- [McKinney - Python for Data Analysis](http://shop.oreilly.com/product/0636920023784.do)
- [Janert - Data Analysis with Open Source Tools](http://shop.oreilly.com/product/9780596802363.do)

## Big Data

Big data is a buzz word that comes up often in that context.

Let's start with a definition from [Wikipedia](https://en.wikipedia.org/wiki/Big_data):

> Big data is (sic) data sets that are so voluminous and complex that traditional data processing application software are inadequate to deal with them.

Appart from the apparent grammar mistake, this seems like a sane definition.

Be aware that current server configurations, can hold 256GB and more in memory (e.g. [AWS/EC2 m4.16xlarge](https://aws.amazon.com/ec2/instance-types/)), so you have to gather quite a bit of data to exceed this limit.
Many people make the mistake to use big-data processing frameworks without having a big data problem.
It's a lot simpler to manipulate data in-memory with python than running a distributed MapReduce job on your Hadoop cluster.
Also the big SQL databases (PostgreSQL, MySQL, Oracle, Microsoft) do hande datasets up to a few TB quite well, and still have the superb query capabilities that SQL brings with it.

That being said.
You should absolutely be aware of how big data problems are approached.
Two highly infulential papers were:

- [Google's MapReduce paper](https://static.googleusercontent.com/media/research.google.com/en//archive/mapreduce-osdi04.pdf)
- [Amazon's Dynamo DB paper](https://s3.amazonaws.com/AllThingsDistributed/sosp/amazon-dynamo-sosp2007.pdf)

As for analyzing large datasets, I can (somewhat) recommend this text book:

- [MiningMassiveDatasets from UStandford](http://infolab.stanford.edu/~ullman/mmds/book.pdf).

If you are operationalizing big (or not so big) data processing (which you should!) then
- [Kleppermann - Designing Data-Intensive Applications](http://shop.oreilly.com/product/0636920032175.do)
is an amazing resource, highly recommended.
