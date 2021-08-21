---
title: Blog Reboot
date: 2021-02-09
author: Heinrich Hartmann
location: Stemwede
style: markdown
url: /posts/blog-reboot
---

This blog has been rebooted!

For the last 6 years this blog has been build with [Jekyll](https://jekyllrb.com/). Now it has been
migrated to [Hugo](https://gohugo.io/).  With this migration I implemented a few conceptual changes,
that were longer in the making, that I want to quickly go over.

<table>
<tr>
<td><img src="{{% b64 file="/posts/2021-02-09-blog-reboot/old.png" %}}" /></td>
<td><img src="{{% b64 file="/posts/2021-02-09-blog-reboot/new.png" %}}" /></td>
</tr>
<tr>
<th align="center">Old</th>
<th align="center">New</th>
<tr>
</table>

## Articles as stand-alone HTML pages

Anticipating future migrations of the content, we treat posts as documents that should be as
stand-alone as possible.  This means:

- No header/footer content, or navigation on the content pages

- Prefer embedded CSS/JS

- Prefer embedded images (base64)

With this concept future migrations will largely consist of copying a few files over to `/static`
directory, that is going to be imported, as well linking pages form a new index.

Try it for yourself: Save this page as HTML and open your local copy. Does it work?

Also it means that content pages will make no use of shared resources, and can no longer break
if I make changes to some CSS/JS files, while working on a draft.

The drawback of course is, that pages will look inconsistent. We have a lot of repeated CSS/JS
spread out over the articles. It's a trade-off I gladly make, since barely anyone notices or cares
about those inconsistencies, and if the source code in this blog is DRY.

## Fast iterations with Hugo

Iteration speed was the main driver for me to switch to Hugo.  I am writing this text in Emacs, with
the browser window to the left.

<img src="{{% b64 file="/posts/2021-02-09-blog-reboot/window.png" %}}" />

The moment I hit save on the editor, the browser view updates instantly.  Even scroll state is
saved.

This is a huge improvement over Jekyll, which I was using earlier, which required me to wait 10
seconds until I could review the formatting of what I just wrote. Optimizing the editing loop and
the publication pipeline is essential for my (perceived) writing productivity.

## Content Discovery with Tags and Instant Filter Bar

I will not make an effort to come up with sections or url schemes to organize content.  Instead,
posts get a set of tags associated to them. The [index page](/) contains a big list that shows those
tags and provides an instant-filter search bar, that can be used to navigate to topics easily.

Try it out using these links:

- Filter for [posts](/#post)
- Filter for [talks](/#talk)
- Filter for [SRECon](/#SRECon)

I have used this pattern for several private project now
([pile](https://github.com/HeinrichHartmann/pile),
[ytdl](https://github.com/HeinrichHartmann/youtube-dl-nas)), and I have been generally very happy
with.

As I hope to be writing a lot more content that is probably going to be less formal and polished,
quick navigation is becoming more important for me to be able to lookup things.

## GitHub Markdown Theme

When it comes to aesthetics the GitHub Flavored Markdown is hard to beat.  Simple style that gets
the job done, that is already familiar to the technical readers.  Embedded code and syntax
highlighting work well, and are polished in general:

```python
# python
def main():
    print("hello world!")
```

Another advantage is, that I can use the editor on GitHub itself to draft blog posts, from any
machine I happen to be at, and get a decent content preview.

## Alternative Content Formats

As blog entries are treated as stand-alone HTML-files, treating content in other format becomes much
less of an issue. Got a pdf file?  No problem, it's just a pdf post not a HTML post. Yes, we might
preview this as an iframe for convenience -- but I not religiously converting my content to Markdown
or HTML anymore.

* **latex/pdf.** For mathematical text, there is just nothing that beats latex at this point.  It's
  mainly the macro system, that allows to build commands for the concepts you introduce that is hard
  to migrate to markdown.  Also printing needs to be a first-class citizen, as papers are consumed
  in print.  Latex fit's the bill very well. I intend to produce mathematical writings as pdf and
  either link them for download from the index page, or embed them as iframe.

* **Jupyter.** Jupyter notebooks can be exported to HTML in various ways. I have written posts in the
  past, that originated from Jupyter notebooks, and were converted to Markdown/HTML. Marking
  cells/output as hidden is the most complicated bit here. With the new concept direct output to
  HTML is the way to go, and the integration should become simpler.

* **org-mode.** In have not used org-mode much recently, but integrating posts from org-mode in
  various output forms, e.g. HTML, pdf, text, is rather straight forward.

Hugo allows posts to be published from a folder not a file.  So it's possible to aggregate all the
supporting material in a folder, before producing the results.

## No tracking

When the GDPR was released in the EU, I switched off GoogleAnalytics and Disqus commenting, since
those are external services that can track every user that visits this site.  Since this time, this
blog has been 100% tracking free.

## Conclusion

I am excited to getting hold of a well-oiled publishing pipeline again.

With these changes in place, I hope to be able to get a more posts written, without too much hassles
getting into my way.

We will see how this goes!

<br>

PS: If you want to be notified when new posts consider subscribing to updates via [email](https://groups.google.com/g/heinrichhartmann/).
