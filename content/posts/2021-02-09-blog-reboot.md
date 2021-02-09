---
title: Blog Reboot
date: 2021-02-09
author: Heinrich Hartmann
location: Stemwede
style: markdown
url: /posts/blog-reboot
---

This blog has been rebooted!

For the last 6 years this blog has been build with
[Jekyll](https://jekyllrb.com/), now it has been migrated to
[Hugo](https://gohugo.io/).  With this migration I implemented a few
conceptual changes, that were longer in the making.


## Articles as stand-alone HTML pages

Anticipating future migrations of the content, we treat posts as
documents that should be as stand-alone as possible.  This means:

- No header/footer content, or navigation

- Prefer embedded CSS/JS

- Prefer embedded images (base64)

HTML pages, that make use of other resources like images, or css files
have caused quite a number of breakages for me. In order to
future-proof my writings, I am moving to an embedded model.

Remeber the old MS-Word feature, where images would be linked instead
of inserted to the document to save space? Nobody is using this
anymore.

Once the editing process is done, posts will be rendered as HTML, and
saved in the `/static` folder. The next migration will soley consist
in copying over the `/static` content, and possibly setting up an index
on the front-page.

## Fast iterations with Hugo

Iteration speed was the main driver for me to switch to Hugo.
I am writing this text in a terminal window, with the browser
window to the left.

```
+---------+--------+
|         |        |
| Browser | emacs  |
| Preview |        |
|         |        |
+---------+--------+
```

The moment I hit save on the editor, the browser view updates instantly.
Even scroll state is saved.

This is a huge improvement over jekyll, which I was using earlier,
which required me to wait 10seconds until I could review the
formatting of what I just wrote. Optimizing the editing loop and the
publication pipeline is essntial for my (preceived) writing
productivity.

## GitHub Markdown Theme

When it comes to aestetics the GitHub Flavored Markdown is hard to
beat.  Simple style that get's the job done, that is already familiar
to the technical readers.  Embedded code and syntax highlighting work
well, and are polished in general:

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


## Alternative Content Formats

As blog entries are treated as stand-alone HTML-files, treating
content in other format becomes much less of an issue. Got a pdf file?
No problem, it's just a pdf post not a HTML post. Yes, we might
preview this as an iframe for convenience -- but I not religiously
converting my content to Markdown or HTML anymore.

* **Latex** For mathematical text, there is just nothing that beats
  latex at this point.  It's mainly the macro system, that allows to
  build commands for the concepts you introduce that is hard to
  migrate to markdown.  Also printing needs to be a first-class
  citizen, as papers are consumed in print.  Latex fit's the bill very
  well. I intend to produce mathematical writings as pdf and either
  link them for download from the index page, or embed them as iframe.

* **Jupyter** Jupyter notebooks can be exported to HTML in various
  ways. I have written posts in the past, that originated from Jupyter
  notebooks, and were converted to Mardown/HTML. Marking cells/output
  as hidden is the most complicated bit here. With the new concept
  direct output to HTML is the way to go, and the integration should
  become simpler.

* **org-mode** In have not used org-mode much recently, but
  integrating posts from org-mode in various output forms, e.g. html,
  pdf, text, is rather straight forward.

Hugo allows posts to be published from a folder not a file.  So it's
possible to aggregate all the supporting material in a folder, before
producing the results.

## Content Discovery with Tags and Instant Filter Bar

I will not make an effort to come up with pretty URL schemas to
classify content. Instead, posts get a set of tags associated to
them. The [index page](/) contains a big list that shows those tags
and provides an instant-filter search bar, that can be used
to navigate to topics easily.

As I hope to be writing a lot more content, that is probably going
to be less formal and polished, quick navigation is becoming more
important and is deserving some more polish.

I have used this pattern for several private project now, and I have
been generally very happy with it. Inspiration comes from:

- Kubernetes resource linking which is entirely based on tags
- [emacs/helm](https://emacs-helm.github.io/helm/)
- [fzf](https://github.com/junegunn/fzf)

With less than 500 posts on this blog, there is little need to
paginate the index.  A flat list with 500 entries loads pretty fast.
One can use JS to hide some of them, but no server-side pagination
will be used to split the content into multiple pages.
