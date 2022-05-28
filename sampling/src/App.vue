<script setup>
import { ref, watchEffect } from 'vue'

const srate = ref(50)
const rps = ref(10)
const epct = ref(3)
const ttext = ref("1")
const tunit = ref("min")

const count = ref()
const count_err = ref()
const err_count = ref()
const err_count_err = ref()
const err_rate = ref()
const err_rate_err = ref()

const ecount = ref()
const twindow = ref()
const eerr = ref(123)

const epct_err = ref()

const sim_count = ref(0)

function sampling_error(r) {
  var s = srate.value/100;
  return Math.sqrt(r * (1 - s) / s);
}
function calc(v) {
  try { return Number(eval(ttext.value)); }
  catch (err) { return 0; }
}

function B(n, k) {
  if (Number.isNaN(n) || Number.isNaN(k)) return NaN;
  if (k < 0 || k > n) return 0;
  if (k === 0 || k === n) return 1;
  if (k === 1 || k === n - 1) return n;
  if (n - k < k) k = n - k;
  let res = n;
  for (let j = 2; j <= k; j++) res *= (n - j + 1) / j;
  return res;
};

function sample(X,p) {
  const out = [];
  for (let i=0;i<X.length;i++){
    if (Math.random() < p) out.push(X[i])
  }
  return out;
}

function new_set(n,k) {
  const out = [];
  for (let i=0;i<k;i++){ out.push(1) } // error
  for (let i=k;i<n;i++){ out.push(0) } // ok
  return out;
}
function stat_cnt(X) {
  return X.length
}
function stat_sum(X) {
  var s = 0;
  for (let i=0;i<X.length;i++) {
    s += X[i];
  }
  return s;
}
function stat_mean(X) {
  return stat_sum(X)/X.length;
}
function stat_var(X) {
  // two iterations, but numerically more stable
  var mean = stat_mean(X);
  var v = 0;
  for (let i=0;i<X.length;i++) {
    v += (X[i] - mean)**2
  }
  return v / (X.length-1);
}
function stat_std(X) {
  return Math.sqrt(stat_var(X));
}
const stat_err = stat_sum; // error count
function stat_err_rate(X) {
  let n = stat_cnt(X);
  if (n == 0) { return 0; }
  return stat_err(X) / n;
}

function simulate(X, stat, runs, p) {
  const out = [];
  for (let i=0; i<runs; i++) {
    const S = sample(X, p);
    out.push(stat(S));
  }
  return out;
}

var sim_generation = 0;

function do_simulate() {
  sim_generation += 1;
  var my_generation = sim_generation;
  const N = twindow.value * rps.value;
  const K = N * epct.value / 100;
  const p = srate.value/100;
  const X = new_set(N, K);
  // const D = simulate(X, stat_len, 50, 0.5);
  const X_CNT = [];
  const X_ERR = [];
  const X_ERR_RATE = [];
  var cnt = 0;
  const cnt_max = 1000;
  function iter() {
    if (sim_generation != my_generation) { return; }
    cnt += 1;
    console.log("iter!");
    const S = sample(X, p);
    X_CNT.push(stat_cnt(S) / p);
    X_ERR.push(stat_err(S));
    X_ERR_RATE.push(stat_err_rate(S) * 100);
    if (cnt < cnt_max) setTimeout(iter,0);
  }
  function show() {
    if (sim_generation != my_generation) { return; }
    if (cnt < cnt_max) setTimeout(show, 100);
    count.value = stat_mean(X_CNT);
    count_err.value = stat_std(X_CNT);
    err_count.value = stat_mean(X_ERR);
    err_count_err.value = stat_std(X_ERR);
    err_rate.value = stat_mean(X_ERR_RATE);
    err_rate_err.value = stat_std(X_ERR_RATE);
    sim_count.value = cnt;
  }
  iter();
  show();
}

watchEffect(() => {
  const u = tunit.value;
  const v = calc(ttext.value);
  const s = srate.value/100;
  if (u == "sec")  { twindow.value = v }
  if (u == "min")  { twindow.value = v * 60 }
  if (u == "hour") { twindow.value = v * 60 * 60 }
  if (u == "day") { twindow.value = v * 60 * 60 * 24 }

  do_simulate();
  // count.value = twindow.value * rps.value;
  // ecount.value = count.value * epct.value / 100;
  // count_err.value = sampling_error(count.value) / count.value * 100;
  // eerr.value = sampling_error(ecount.value)/count.value * 100;
  // eerr.value = error_error(ecount.value);
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

<h2>Simulation</h2>
  <span style="float:right">{{ sim_count }} iterations</span>
  <br><br>
  <table>
  <thead>
   <tr>
      <td width="220px">Statistic</td>
      <td width="160px">Value</td>
      <td style="widht:100%" colspan="2">Error</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Request Count</td>
      <td class="cell">{{ Number(count).toFixed(1) }} req</td>
      <td class="cell"> ± {{ Number(count_err).toFixed(2) }} req</td>
      <td class="cell"> {{ Number(count_err/count * 100).toFixed(2) }}%</td>
    </tr>
    <tr>
      <td>Request Rate</td>
      <td class="cell">{{ Number(count / twindow).toFixed(1) }} rps</td>
      <td class="cell">± {{ Number(count_err / twindow).toFixed(2) }} rps </td>
      <td class="cell">{{ (Number(count_err)/count * 100).toFixed(2) }}%</td>
    </tr>
    <tr>
      <td>Error Count</td>
      <td class="cell">{{ Number(err_count).toFixed(1) }} err</td>
      <td class="cell">± {{ Number(err_count_err).toFixed(2) }} err</td>
      <td class="cell">{{ Number(err_count_err / err_count * 100).toFixed(2) }}%</td>
    </tr>
    <tr>
      <td>Error Rate</td>
      <td class="cell">{{ Number(err_rate).toFixed(2) }} %</td>
      <td class="cell">± {{ Number(err_rate_err).toFixed(2) }} ppt</td>
      <td class="cell">{{ Number(err_rate_err / err_rate * 100).toFixed(2) }}%</td>
    </tr>
</tbody>
</table>
</template>

<style>

input[type=text] {
  text-align : right;
}

.cell {
    text-align: right
}

thead td {
  text-align:center;
  font-weight:bold;
  background-color: #EEE;
}
</style>
