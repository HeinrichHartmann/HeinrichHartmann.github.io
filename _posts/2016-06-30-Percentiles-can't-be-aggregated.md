---
author: "Heinrich Hartmann"
layout: "external"
external_url: https://twitter.com/heinrichhartman/status/748562001392111617
external_site: twitter
comment: "a letter to John Rauser"
category: "blog"
redirect_from:
 - /blog/2016/06/30/Percentiles-can't-be-aggregated.html
 - /2016/06/30/Percentiles-can't-be-aggregated.html
---

Dear John,

Thank you very much for your comments. I appreciate your passion for this topic. Percentiles are a delicate and subtle topic. It’s great to have this conversation. I was not able to put my remarks into tweets, so I am using this old fashioned “letter” form to reply.

So, I said:

> “Percentiles can’t be aggregated!”

This quote is a compressed version of the following statement:

Mean values of percentiles are not percentiles of a larger population. Furthermore, there is no aggregation method that gives you total percentiles from percentiles of subsets of your data.

This addresses a mis-perception that is paramount in the monitoring community. Take for example this graph I just found on Google:



I am pretty sure, that this is not the the 95%-tile of the ~2h represented by each point. It’s instead the average of all 95%-tiles measured over 5M intervals. This is something different. And you should be aware of that. Most people are not. This is my point!

Can we fix it, by using another aggregation method? No way. Sorry.

Can some information be derived from averaged percentiles? Well, yes. But it’s _super_ subtle.

Can we do better? Yes certainly! Store and aggregate Histograms. At Circonus we spent so much time and resources to make this work for our users. WE CARE ABOUT GETTING THIS RIGHT! It’s super frustrating to see people being mislead by their tools and not even noticing it. And by the way, Google’s John Banning, who presented Google’s ‘Global Monitoring System’ directly after me referenced my presentation multiple times for this point. At Google they do care as well, and use histograms!

So, Is the initial quote bold and compressed. Well yes, of course! I am on a stage in front of 300 people that want to be entertained ;)

I just found a wonderful article about the art of presentation (https://thefractionatingcolumn.com) that makes some great points: Story, Content, Passion, Humor. I fully agree with those points, and I consciously made the decision to sacrifice some precision to “make it sticky”.


Sincerely,
Heinrich Hartmann, Portland, 2016-06-30
