---
title: Writing for Engineers
date: 2022-04-09
author: Heinrich Hartmann
location: Stemwede
style: markdown
Draft: true
---

Writing is the key to have impact in a large organization. As a senior software
engineer chances are that writing is the most important skill you have to
acquire in order to increase your reach and advance your career.

Writing is hard. Many Software engineers struggle with writing. Personally I
never had an intrinsic interest in literature, so writing did not naturally come
to me either. I have spent days and weeks agonizing and procrastinating around
larger writing tasks. And to this day, having pressure to produce high-quality
documents on a deadline gives me nightmares.

This article contains some learnings that have helped me (and others) to become
better and more productive as a writer over the past 15 years. I am sharing them
in the hope, that you find them useful. However, don't think that I am always
able to follow this advice myself 😅. I still have a lot to learn.

**Outline**

{{< toc >}}

## Before you begin

### Have something to say

This statement seems obvious, but turns out to be a problem surprisingly often.
**The goal of writing is to deliver a message to an audience in an effective
way.** If you don't have a good message, you will struggle to write something 
useful.

> During my time at University, I was tasked multiple times with writing long
reporting documents for EU projects. This was terrible experience, because the
main goal was to look good and fill pages. Generally, I had a good idea of the
domain, but did not have a clear message or sufficient depth. For me, this made
it incredibly hard to write anything. Thinking about this now, I think
[GPT-3](https://en.wikipedia.org/wiki/GPT-3) would be amazing at writing EU
Project reports.

> One of my most successful [blog
posts](https://www.circonus.com/2018/08/latency-slos-done-right/) (that led to a
[series](https://archive.fosdem.org/2019/schedule/event/latency_slos_done_right/)
[of](https://www.usenix.org/conference/srecon19asia/presentation/schlossnagle-latency)
[talks](https://www.usenix.org/conference/srecon19americas/presentation/moyer)
on the topic) was written over the course of 3 hours in a hotel room, and
published the next day. It was a followup to a discussion that I had on that
same day with a few Google SREs at SRECon EMEA 2018. I knew what I wanted to
say. I knew who I wanted to reach. That made writing the post super easy.

If you don't have a clear message in your head, your are not ready to start
writing a narrative yet. You have other things to do first: Research the topic
and find your message. It's important to realize that these are different tasks.
They may involve writing in the form of note-taking or journaling, but this is
not material you would directly use in the final document.

### Don't confuse writing and learning

The realization that you don't have the complete message in your head, will
often only become apparent while writing. This surfaces as inability to find a
good punch-line or to express yourself clearly. In fact, writing is a great test
to see if you have a good understanding of a topic, and have a firm grasp on the
vocabulary of the domain. There is a saying that:

> Writing is god's way to show you how imperfect your thoughts are.

And similarly:

> An argument is only half as good once you are uttering it.

If you run into this problem, it means that you are learning things. Writing is
generally a great way to learn, but one has to realize that you are doing it.
Learning is a slow process and requires patience. It is not helped much by
agonizing in front of a screen, trying to squeeze out another sentence. Doing
more research on the topic by reading a book, blog or paper and taking notes may
be a better time investment.

### Know your audience

The better you know and understand your audience the easier it will be to reach
the goal of delivering a message to them. The intended audience of the text
influences the terminology you can use, the context you can assume and the
writing style (casual/formal). 

When writing an article, I generally **visualize a concrete person as
representative of the audience**, that I am directing this text towards. This
will usually also be the first person, that will get a draft to read. It's
generally much easier to tell a story "to someone" as opposed to talking into
the void.

> Most of my [#math](/#math) posts on this blog are actually lacking a good
audience. They are only readable for people who are proficient in abstract
mathematics, but they are only interesting for people working in software. The
intersection of both groups is tiny. Hence I don't expect a lot of resonance or
impact with those. They are documenting things that I wanted to learn myself.

### Respect your state-of-mind

Writing requires intense focus over long periods of time. Ideally you want to
get into a flow state where you are zoned in and working on the text for hours
on-end. This is by far the most efficient way to write a narrative or a
blog-post -- at least for me.

**Prepare for a writing task, like you would for a hike. You are in for a grind.**
Find a comfortable space to sit. Grab a beverage of your preference. Most
importantly make sure that you are rested and able to focus. Don't start a
writing task when you are already tired. There is no way you will get anything
useful written.

Also, avoid distractions as much as you can. Most importantly: Mute the Chat.
Block at least 3h in your calendar for a writing session. If I am writing longer
documents for work, I will try to block a full afternoon. For me, the most
effective writing sessions happen on weekends or vacations where I don't have
any meetings at all.

### Work the iron while it's hot

Just like programming, writing requires a lot of context that you hold in your
short term memory. You need to recall a lot of details about the topic you are
writing about, as well as your punch-line and the current state of the document.
All this state takes time to load into memory, and is easily lost by
distractions or context switching.

If you have loaded a lot of useful context in your brain at any given point in
time, use this context to do something useful with it. Try to milk that moment,
and make space when you realize you are in a position to write effectively on
your topic.

### Heat the iron before working it 

Conversely, if you don't have the context in your brain right now, you have
two options (1) don't write or (2) start loading the context into your brain.

Missing context is a frequent source of agony and procrastination. Don't expect
to take a TODO like "Write conference talk" from your list, and start working on
it right way. You need to invest time into loading context before you have a
chance to write even a single sentence.

Good ways to load some context are:

1. Go through your notes that you took about the topic.
2. Discuss the topic with a coworker / random stranger / family member.
3. Read some books / blogs / papers on the topic.

Bad ways to load the context are surfing HackerNews or YouTube. 

## While writing

### Start at the Top not the Beginning

This is by far the most common and damaging mistake I see people make. They
start with writing at the beginning of the narrative:

> "Once upon a time, in a galaxy far, far away ..."

Do you really think that those were the first words that George Lucas brought
to paper, when writing the original Star Wars trilogy?

For documents that are more than a page long you must take a top-down approach
and start with an **outline**. An outline is a list of sections together with
rough notes, often in the form of bullet points. For this document the [first
outline](https://github.com/HeinrichHartmann/HeinrichHartmann.github.io/commit/46be4c95faeda16996baf6799eca8a551b282565) looked something like this:

```
# How to Write?

- Audience: Senior+ SWE
- Goal: Upskill and unblock writing

## Have something to say

- Goal: Deliver message to audience.
- Without message writing is agony: Squeezing a water from a stone.

## Know your audience

## Work the iron while it's hot

- Be aware of your brain context
- Start/Stay on task, if you have the right context
- Load context before you start

## Separate Editing, Publishing and Writing

- If you are fiddling with git/emacs before starting to write,
  you are doing something wrong.
  
...
```

Note that, the section titles are not just generic scaffolding (e.g.
"Introduction" / "Body" / "Conclusion") but already tell the whole story.

### Fix the story-line before fleshing things out

When building a house, you finish the brick-work before applying the paint. When
writing, you want to arrive at a good story-line for you document, before you
start fleshing out and polishing the text. A outline should be the
first milestone for any larger document you are writing. The outline, should
convey the main message and provide a clear "red thread" that guides your reader
through your argument.

> When working for [a consulting firm](https://www.mckinsey.com/), I saw my
senior colleagues spending a lot of time polishing and iterating the structure
of their slide decks before working on the details. They would print the deck on
paper, pin the slides to a wall, and keep re-arranging them until they were
happy with the story-line. The slides would remain on the wall and subject to
re-arrangement until the deck was finalized.

Fixing the story-line of a document becomes MUCH more expensive once you have
already fleshed out the paragraphs. In some cases, the best thing you can do
is to stash away the whole content and go back to an outline before building
the document back up again.

### Finish the content before starting to polish

A trap I have found myself in way too many times, is to get distracted by
adjacent tasks that are not needed to produce the narrative. Those tasks
include:

1. **Editing**. Fixing spelling, wording or restructuring paragraphs.
1. **Publishing**. Fiddling with formatting, tuning WordPress, automating your
     git+hugo+heroku deployments.
1. **Producing Figures**. Sketching figures on paper or browsing the web for
   images that you can use in your presentation.

Remember: **The first milestone for your document is an outline. Everything that
is not directly contributing to this goal is a distraction.**

When you are happy with the outline, **the second milestone is a fully fleshed
out text, where all notes have been converted to paragraphs.** The text should
cover the intended content but does not need to be polished or well written.

Once you are at this point, you start worrying about polish: Remove typos,
improve wording, restructure paragraphs. Also work on figures and publishing can
be delayed to this point without any problems.

### Make your text skimable

According to [someone on the
internet](https://www.towermarketing.net/blog/winning-the-fight-against-a-website-users-attention-span/):

> Eight seconds. A website user’s attention span lies somewhere around eight seconds.

In these eight seconds, your document has to reveal enough value to the user,
that he/she is willing to invest more time into actually reading the document.

If you want your voice to be heard (and also improve the
[usability](https://www.amazon.com/Dont-Make-Think-Revisited-Usability/dp/0321965515/ref=pd_sbs_sccl_1/142-5208579-0665727?pd_rd_w=IgY9h&pf_rd_p=3676f086-9496-4fd7-8490-77cf7f43f846&pf_rd_r=CGY8ZQY3T7ESSFA4W7RD&pd_rd_r=a1baa3bd-3e30-402a-afe2-9d01086d2fc5&pd_rd_wg=eMOQZ&pd_rd_i=0321965515&psc=1)
of your text) you have to design your document for "skim-ability". You do this
by providing anchor points that allow the user to gauge the content without
actually reading it. You want the outline and key arguments to keep standing out
in the final version of the document.

Section Headings and Lists are the key anchor points you want to use to reach
this goal. Also Figures, Quotes and Highlights are features that stand out and
grab attention while skimming.

> If you are writing a slide-deck, a good approach to ensure skim-ability is the
use of Action Titles. Action Titles are slide titles that summarize the content
of a slide in a complete sentence. By doing this you allow the reader to get the
gist of your document by just reading the titles. This highly annoying guy on
the internet does a fine job of explaining the concept
[here](https://youtu.be/rSk11YqnXoc?t=131) and ideas around it.

### Provide Summary Sections

Summary sections are commonly found in document templates and academic writing.
They are usability features, that provide a high-level overview about the
content for readers in a hurry. Expect that a large fraction of your audience
will only read a summary.

* **Abstract** / **Executive Summary** / **TL;DR**. This section summarizes the
  content of the document, deliberately duplicating information. It's generally
  the first section of your document, and is intended for reader that has not
  yet read the document. A good abstract describes context, motivates the
  problem summarizes the findings but also leaves some suspension to motivate
  further reading.

* **Conclusion.** This section also summarizes the content and is hence similar
  to an abstract. The difference is that it is the last section in your
  document, focuses on the outcomes and is deliberately referencing back to the
  content. The basic idea is that the reader had read the document before he/she
  arrives there, but this is in practice almost never the case.

It's important to note that these summary sections are independent of the main
story line, and are hence an artifact that can be prepared independently.
Generally, I would recommend to start working on summary sections (like
Abstract/Conclusion) last, since only then will you be certain what your
document actually covers.

## The Practice of Writing

### Keep Writing

The only way to improve your writing is by writing. As with practice in general,
valuing quantity over quality is generally a good idea. Developing a writing
muscle, and writing relatively short medium quality documents every week will
make you a much better writer than crafting highly polished documents once a
year.

> My English teacher in school used to say: "Writing. Only writing brings
blessing." I did not think much about this slogan, but it was catchy enough to
stick with me. Now I consider it a deep truth, and keep it at the top of my
blog, as a reminder.

### Leverage small writing tasks as exercise

Most of the rules that apply to writing long-form documents like Tech
Narratives, Blog Posts or Papers hold up for writing short documents like
E-Mails or issue tickets. Use this documents to practice your writing skills, by
make them well structured, usable and polished.

### Get early feedback on your outline

Once you have constructed an outline and polished the story-line you are at a
great place to get initial feedback on your document. This allows you to uncover
flaws in your story-line early, and make sure you are on-target with the
content. Also, reading an outline is a very quick thing to do, so it will not
take a lot of effort for your reviewer to go through your text.

This is most important for long documents, that you are producing on request of
a stakeholder (manager).

### Circulate drafts of the text to the selected audience

Once you fleshed out the content, and did a first editing pass removing the most
glaring grammar and spelling mistakes, you are at a good point to sent the
document to a few selected members of the target audience.

This practice has three benefits:

1. You will get a pair of fresh eyes on the text that will at the very least
   catch a few grammar quirks that remained in the text.
2. You take a break from working on the text yourself, until you received the
   feedback, allowing yourself to take a fresh look at your writing.
3. You have an excuse to reach out to old friends that you had neglected for far
   too long.

Hint: Don't forget to thank your reviewers in an "Acknowledgements" section.

# Acknowledgements

Thanks to my sister, Johanna Hartmann, for feedback on earlier versions of
this text.

