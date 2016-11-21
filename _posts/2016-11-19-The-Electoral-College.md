---
author: "Heinrich Hartmann"
layout: "post"
category: "blog"
---

US Presidents are not directly elected by the citizens of the United
States.  Instead, citizens in each state vote to select a set of
electors which vote for a party's candidate in the
[Electoral College](https://en.wikipedia.org/wiki/Electoral_College_(United_States)).
Interestingly, the number of electors is not proportional to the
population of the state. This means citizens in different states have
different voting power for the President. This site visualizes the
differences.

## Direct Comparison
Click and hover the map to select states for comparison.

<script src="//d3js.org/d3.v3.min.js"></script>
<link rel="stylesheet" type="text/css" href="/assets/electoralcollege/style.css">

<div class="tagline">
    One voter in <span class="B-state-full"></span>
    <br> <span style="">counts like</span>
    <br> <span class="rat"></span> voters in <span class="A-state-full"></span>.
</div>

<table width="100%">
  <tr>
    <td>State</td>
    <td width="200px"><span class="A-state-full"/></td>
    <td width="200px"><span class="B-state-full"/></td>
  </tr>
  <tr>
    <td>Population</td>
    <td><span class="A-population"/></td>
    <td><span class="B-population"/></td>
  </tr>
  <tr>
    <td>Electors</td>
    <td><span class="A-votes"/></td>
    <td><span class="B-votes"/></td>
  </tr>
</table>

## Map

Red colors represent more voting power than the selected state. Green
colors represent less voting power than the selected state.

<div class="outer">
  <svg id="svg-map"></svg>
</div>

## Chart

This chart shows voting power of citizens in comparison.

<div class="outer" style="height:300px;">
  <div class="inner">
    <svg id="svg-chart"></svg>
  </div>
</div>

<script src="/assets/electoralcollege/script.js"></script>

## Credits

This visualization was created in collaboration with [Rene Pickhardt](https://twitter.com/renepickhardt) in reply to the following tweet:

<center>
<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr"><a href="https://twitter.com/hashtag/Request4Help?src=hash">#Request4Help</a>: Can you help me represent the relative presidential voting power of citizens? See <a href="https://t.co/79ZpBjoCEw">https://t.co/79ZpBjoCEw</a></p>&mdash; Lessig (@lessig) <a href="https://twitter.com/lessig/status/797698106360000512">November 13, 2016</a></blockquote> <script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
</center>

The source code is available [on GitHub](https://github.com/HeinrichHartmann/us-voting-power-map). Contributions are welcome.
