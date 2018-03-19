---
layout: "post"
author: "Heinrich Hartmann"
location: Stemwede, Germany
title: Dynamic Tracing with GDB
permalink: /blog/debugging.html
hidden: true
categories:
- blog
# splash:
#   src: "/assets/capture_1517430553.png"
#   credits: "click to enlarge"
#   link: "/assets/capture_1517430553.png"
---

Debugging is one of the major activities while developing software.
Debugging is not only about finding bugs but also about understanding sofware.
As such it has a lot incommon with monitoring and observability.

In this post I'll formulate some goals or principles on what I thing a good debugging session should looks like.
We will then see how far we get to realizing those goals with gdb.

1. **Don't stop the program.**
   We need to be able to observe programs running in the wild.
   Creating process state is a highly delicate process.
   There might be startup scripts involved, that carefully craft an environment.
   There might be multiple forks before the process we are interested in is created.
   Sometimes the condition might be impossible to reproduce in a controlled environment.
   A faulty process state is something precious.
   Don't destroy it needlessly.

2. **No interactive debugging.**
   Setting breakpoints and stepping through code is tedious and often not very enlightening.
   1. Inspect the source or backtraces.
   2. Decide what you want to know next, in the form of a question. ("What are the arguments to this function"?)
   3. Write the instrumentation to answer that question.
   4. Trigger the condition. (E.g. make the web request)
   5. Inspect the answer.

3. **Repeatable.**
   A debugging session should be programmatic and repeatable.
   If the process experiences a similar problem you can build upon what you already have.

## Methods

### Core dumps

Don't
