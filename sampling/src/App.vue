<script setup>
  import { VueMathjax } from 'vue-mathjax'
  
  import { ref, watchEffect } from 'vue'
  const srate = ref(50)
  const rps = ref(10)
  const epct = ref(3)
  const ttext = ref("1")
  const tunit = ref("min")

  const count = ref()
  const ecount = ref()
  const twindow = ref()

  const count_err = ref()
  const epct_err = ref()

    
  function sampling_error(r) {
    var s = srate.value/100;
    return Math.sqrt(r * (1 - s) / s);
  }
  function calc(v) {
    try { return Number(eval(ttext.value)); }
    catch (err) { return 0; }
  }

  watchEffect(() => {
    const u = tunit.value;
    const v = calc(ttext.value);
    const s = srate.value/100;
    if (u == "sec")  { twindow.value = v }
    if (u == "min")  { twindow.value = v * 60 }
    if (u == "hour") { twindow.value = v * 60 * 60 }
    if (u == "day") { twindow.value = v * 60 * 60 * 24 }

    count.value = twindow.value * rps.value;
    ecount.value = count.value * epct.value / 100;
    count_err.value = sampling_error(count.value) / count.value * 100;
  })

</script>

<template>
<h1>Sampling Error Calculator</h1>

Calculate effects of sampling to accuracy of request-rate and error-rate calculations.

<h2>Parameters</h2>

<table>
  <thead>
    <tr>
      <td>Parameter</td><td>Value</td><td>Slider</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Sampling Rate</td>
      <td><input type="text" v-model="srate"> %</td>
      <td><input type="range" min="0" max="100" v-model="srate" class="slider"></td>
    </tr>
    <tr>
      <td>Request Rate</td>
      <td><input type="text" v-model="rps"> rps</td>
      <td><input type="range" min="0" max="1000" v-model="rps" class="slider"></td>
    </tr>
    <tr>
      <td>Error Rate</td>
      <td><input type="text" v-model="epct"> %</td>
      <td><input type="range" min="0" max="100" v-model="epct" class="slider"></td>
    </tr>
    <tr>
      <td>Time window</td>
      <td colspan="2">
        <input type="text" v-model="ttext" style="margin-right:3px">
        <select v-model="tunit"><option>sec</option><option>min</option><option>hour</option><option>day</option></select>
        ({{ twindow }} sec)
      </td>
    </tr>
</tbody>
</table>

<h2>Estimates</h2>
<table>
  <thead>
    <tr>
      <td>Statistic</td><td>Value</td><td style="widht:100%">Error</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Request Count</td>
      <td class="cell">{{ count }} req</td>
      <td class="cell"> ± {{ (sampling_error(count)).toFixed(2) }} ({{ (sampling_error(count)/count * 100).toFixed(2) }}%)</td>
    </tr>
    <tr>
      <td>Request Rate</td>
      <td class="cell">{{ count / twindow }} rps</td>
      <td class="cell">± {{ (sampling_error(count) / twindow).toFixed(2) }} rps ({{ (sampling_error(count)/count * 100).toFixed(2) }}%)</td> 
    </tr>
    <tr>
      <td>Error Rate</td>
      <td class="cell">{{ (ecount / count * 100).toFixed(2) }} %</td>
      <td class="cell">± {{ (sampling_error(ecount)/count * 100).toFixed(2) }} ppt ({{ (sampling_error(ecount)/ecount * 100).toFixed(2) }}%) </td>
    </tr>
</tbody>
</table>

<!-- START_MDCONTENT -->
<h2 id="explaination">Explaination</h2>
<h3 id="sampling-method">Sampling Method</h3>
<p>We model the error introduce by <a href="https://en.wikipedia.org/wiki/Bernoulli_sampling">Bernuoulli
sampling</a> with a given rate to
a number of statistics.</p>
<p>In the model, we start with the full dataset (the &quot;population&quot;) that we assume to be available to us.
We produce a sampled dataset (the &quot;sample&quot;).</p>
<p>For each point in the population we make independent sampling decisions with
probability given by the sampling rate.</p>
<ul>
<li>With sampling rate 100% all the elements in the population are retained.</li>
<li>With sampling rate 50%, there is a 50% chance that any given point will be retained.</li>
<li>With sampling rate 0% the sample is empty.</li>
</ul>
<p>It&#39;s my understanding, that OpenTelemetry is effectively using Bernoulli
Sampling on trace-level, although <a href="https://github.com/open-telemetry/oteps/blob/main/text/trace/0170-sampling-probability.md#traceidratio-sampler">the
spec</a>
is not 100% clear on this.</p>
<h3 id="count-estimation">Count Estimation</h3>
<p>In the Bernoulli model, the sample size follows a binomial distribution with $p$ sampling rate, and $N$ population size.</p>

<!-- END_MDCONTENT -->

</template>

<style>

input[type=text] {
  text-align : right;
}

.cell {
    text-align: right
}
</style>
