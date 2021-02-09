---
title: Blog Reboot
date: 2021-02-09
author: Heinrich Hartmann
location: Stemwede
style: markdown
Draft: false
---


This blog has gotten a new look, recently.
For the last ~5 years this blog has been build with Jekyll, now it has been migrated to Hugo.
With this migration I implemented a few changes, that were longer in the making.



## Articles as stand-alone HTML pages

Anticipating future migrations of the content, we treat posts as documents that should be as stand-alone as possible.
This means:

- No header/footer content, just a link to the Home at the top.

- Embedded CSS/JS, at least for exported versions.

- Embedded images (base64) when possible.


## Loose Coupling - No hirarchies

The index is just a large index.

## Hugo as Publishing tool

When articles are reduced to single pages, the site generator loses much of it's importance and
becomes a publishing/export tool.

Hugo has a bug advantage over jekyll of instant reloads in the browser.

With jekyll I had to wait ~10 seconds until I got an updated web view on my text.
With hugo this is instant the second I save the text.

Optimizing the editing loop and the publication pipeline are essential for writing productivity.

## Alternative Content Generators

* **Latex**
  For mathematical text, there is just nothing that beats latex at this point.  It's mainly the macro
  system, that allows to build commands for the concepts you introduce that is hard to migrate to
  markdown.  Also printing needs to be a first-class citizen, as papers are consumed in print.  Latex
  fit's the bill very well. I intend to produce mathematical writings as pdf and either link them for
  download from the index page, or embed them as iframe.


* **Jupyter** Jupyter notebooks can be exported to HTML in various ways.  My setup here is not
  polished, but I have had workflows in the past, where I could write articles and illustrations
  directly from Jupyter.  Marking cells/output as hidden is the most cumbersome bit here.

* **org-mode** In have not used org-mode much recently, but integrating posts from org-mode in
  various output forms, e.g. html, pdf, text, should be rather stragith forward.

Hugo allows posts to be published from a folder not a file.  So it's possible to aggregate all the
supporting material in a folder, before producing the results.

## GitHub Markdown Theme

When it comes to aestetics the GitHub Flavored Markdown is hard to beat.
Simple style that get's the job done, that is already familiar to the technical readers.
Embedded code and syntax highlighting work well, and are polished in general:

```python
# python
def main():
    print("hello world!")
```

```lisp
;; lisp
(message "hello world")
```

```C
# C
#include <stdio.h>
printf("Hello World!")
```

