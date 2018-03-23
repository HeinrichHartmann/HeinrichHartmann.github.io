---
layout: "post"
author: "Heinrich Hartmann"
location: Stemwede, Germany
title: Quality Time
permalink: /blog/quality-time.html
hidden: false
categories:
- blog
---

It was thus said, that the great [@poswait](https://twitter.com/postwait) once [stated](https://twitter.com/postwait/status/960987392424529922):

{% pullquote %}
I just spent some quality time with tcpdump; it really paid off.

Remember to spend quality time with your loved ones while you can.
{% endpullquote %}

At first I was like: "What? Quality time with ... what?. I am pretty sure my wife want's something different when she demands quality time!"
However, that quote stuck in my head for a while.
And the more I think about it, the more sense it makes to me.

## What is Quality Time?

We live in a world where we are constantly distracted by our phones, slack channels, email, twitter, etc.
For me quality time is the opposite of interruptions.
"Let me just do that real quick" is *not* quality time.

It's much more about being in the moment, and taking enough time for the task at hand.
In my romantic fantasies about woodworking, a carpenter spends quality time with his materials.
It takes a lot of dedication to make nice furniture.
He does not rush to get some grooves in.
He takes his time and carves them out one by one.

## How can we spent quality time with software?

I sure think it's possible! Here are some ideas on how to do it:

* **Go offline** if you can.
  The internet is the most distracting invention ever made.
  Getting rid of it for a while is great.
  I think the [Internet Distraction Comic](https://duckduckgo.com/?q=Internet+distraction+comic+-+Asher+Sarlin&iax=images&ia=images){:target="_blank"} by Asher Sarlin is pretty accurate.
  As a PhD student I used to have this as my desktop background image.

* **Avoid screens** if you can.
  The typographer [Bringhurst](https://en.wikipedia.org/wiki/The_Elements_of_Typographic_Style) writes:

  > The screen mimics the sky, not the earth. It bombards the eye
  > with light instead of waiting to repay the gift of vision. It is not
  > simultaneously restful and lively, like a field full of flowers, or the
  > face of a thinking human being, or a well-made typographic page.
  > And we read the screen the way we read the sky: in quick sweeps,
  > guessing at the weather from the changing shapes of clouds, or
  > like astronomers, in magnified small bits, examining details. We
  > look to it for clues and revelations more than wisdom. This makes
  > it an attractive place for the open storage of pulverized
  > information - names, dates, library call numbers, for instance - but not
  > so good a place for thoughtful text.

  It's near impossible for me to get into a calm state of mind when staring at a screen.
  If I can turn it off it's a huge win.
  (Unfortunately the same holds true for for iPad screens as well. Even in Night-shift mode.
  epaper might be different. I have not tried it, yet.)

* **Print out manuals** or at least get an offline version to read on the screen.
  Find a nice place in the sun, grab a cup of coffee, and work through the manual.
  Highlight stuff you find potentially useful in the future.
  It's not about remembering every command line option.
  It's about understanding the involved concepts, and getting an idea of the capabilities.
  
  Here is what I use for printing out man pages, in this case for curl(1):
  ```
  man -t curl > man.ps && ps2pdf man.ps && open man.pdf
  ```
  
* **Print out source code**.
  This is a bit controversial, but I found this working for me.
  Oftentimes documentation is simply missing out of date or not detailed or precise enough,
  so you need to "use the source" (... Luke).
  So here is what I do:
  - I don't print out whole components. It's just too much paper, and you will not need everything.
    Instead, print one module/class/file at a time.
  - Use GitHub for printing.
    Just navigate to the file you need to print (Hint: Use the `t` shortcut),
    with a WebKit-browser (Chrome, Opera, not Firefox) and hit the print button.
    (Before I was using a2ps(1) with a few tweaks, but GitHub just looks better.)
  - Print one page per sheet, two-sided if you can. It's just too small otherwise.
  - Make annotations with marker and pencil. Structure the code. Is it cohesive? Write down questions you want to clarify with a debugger.

* **Play with the tool**. 
  Unfortunately this will involve screens.
  Experiment with some options/switches that you found in the docs.
  Try something fun or interesting.
  Tweak your personal config file (if supports such a thing).
  
* **Inspect the internals**.
  Improve and verify your mental model by inspecting the internals.
  Turn on verbose logging, to see what it does (e.g. `ssh -vvv` has some interesting output).
  Run the tool under strace(1) to see how it interacts with the OS.
  Attach gdb(1) and look at some typical back-traces and step thought some interesting places.
  Capture and examin network traffice emmitted by the tool with tcpdump(1) and wireshark.

* **Write about it**.
  Take notes for yourself.
  If you found a nice command line argument, share it with your peers in a tweet.
  If you discovered a new method to do stuff, write a blog post about it.
  Some discoveries also make great lightning talks at conferences (e.g. [readline](https://www.youtube.com/watch?v=MxRTh8wlmJk), [gdb](https://www.youtube.com/watch?v=PorfLSr3DDI&t=625s)).

* **Take your time**.
  This is maybe the most obvious and important bit.
  Realize that you are not going to write any code for the next few hours.
  It's an investment into building a mental model of the software you are running.
  This will pay of in the mid term.
  I have had numerous situations where I fix a bug took ages, b/c I did not understand the component well enough.
  Taking a few hours to read more docs and code would have been quicker and less stressful.
  Also, your next debugging session will profit from improved understanding.

I am pretty sure that this was *not* exactly what @postwait did in his quality time with tcpdump(1).
That's OK. Everyone will have a different flavor of quality time, that works for him/her.
I hope that this post will give you some ideas to make working with software more enjoyable for you.

Happy Hacking!
