<script setup>
import { ref, watchEffect } from 'vue'

const sampling_rate = ref(50)
const request_rate = ref(10)
const error_rate = ref(3)
const time_window_text = ref("1")
const time_window_unit = ref("min")

const sim_iteration = ref(0)
const sim_count = ref()
const sim_count_err = ref()
const sim_err_count = ref()
const sim_err_count_err = ref()
const sim_err_rate = ref()
const sim_err_rate_err = ref()

const est_count = ref()
const est_count_err = ref()
const est_err_count = ref()
const est_err_count_err = ref()

const twindow = ref()

function sampling_error(c, p) {
  return Math.sqrt(c * (1 - p) / p);
}
function calc_window_text() {
  try { return Number(eval(time_window_text.value)); }
  catch (err) { return 0; }
}

function do_estimate() {
  const p = sampling_rate.value/100;
  est_count.value = twindow.value * request_rate.value;
  est_count_err.value = sampling_error(est_count.value, p);
  est_err_count.value = est_count.value * error_rate.value / 100;
  est_err_count_err.value = sampling_error(est_err_count.value, p);
}

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
  const N = twindow.value * request_rate.value;
  const K = N * error_rate.value / 100;
  const p = sampling_rate.value/100;
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
    X_ERR.push(stat_err(S) / p);
    X_ERR_RATE.push(stat_err_rate(S) * 100);
    if (cnt < cnt_max) setTimeout(iter,0);
  }
  function show() {
    if (sim_generation != my_generation) { return; }
    if (cnt < cnt_max) setTimeout(show, 100);
    sim_count.value = stat_mean(X_CNT);
    sim_count_err.value = stat_std(X_CNT);
    sim_err_count.value = stat_mean(X_ERR);
    sim_err_count_err.value = stat_std(X_ERR);
    sim_err_rate.value = stat_mean(X_ERR_RATE);
    sim_err_rate_err.value = stat_std(X_ERR_RATE);
    sim_iteration.value = cnt;
  }
  iter();
  show();
}

watchEffect(() => {
  const u = time_window_unit.value;
  const v = calc_window_text();
  const s = sampling_rate.value/100;
  if (u == "sec")  { twindow.value = v }
  if (u == "min")  { twindow.value = v * 60 }
  if (u == "hour") { twindow.value = v * 60 * 60 }
  if (u == "day") { twindow.value = v * 60 * 60 * 24 }

  do_estimate();
  do_simulate();
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
      <td><input type="text" v-model="sampling_rate"> %</td>
      <td><input type="range" min="0" max="100" v-model="sampling_rate" class="slider"></td>
    </tr>
    <tr>
      <td>Request Rate</td>
      <td><input type="text" v-model="request_rate"> rps</td>
      <td><input type="range" min="0" max="1000" v-model="request_rate" class="slider"></td>
    </tr>
    <tr>
      <td>Error Rate</td>
      <td><input type="text" v-model="error_rate"> %</td>
      <td><input type="range" min="0" max="100" v-model="error_rate" class="slider"></td>
    </tr>
    <tr>
      <td>Time window</td>
      <td colspan="2">
        <input type="text" v-model="time_window_text" style="margin-right:3px">
        <select v-model="time_window_unit"><option>sec</option><option>min</option><option>hour</option><option>day</option></select>
        ({{ twindow }} sec)
      </td>
    </tr>
</tbody>
</table>

<h2>Estimation</h2>
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
      <td class="cell"> {{ Number(est_count).toFixed(1) }} req</td>
      <td class="cell"> ± {{ Number(est_count_err).toFixed(2) }} req</td>
      <td class="cell"> {{ Number(est_count_err/est_count * 100).toFixed(2) }}%</td>
    </tr>
    <tr>
      <td>Request Rate</td>
      <td class="cell">{{ Number(est_count / twindow).toFixed(1) }} rps</td>
      <td class="cell">± {{ Number(est_count_err / twindow).toFixed(2) }} rps</td>
      <td class="cell">{{ (Number(est_count_err)/est_count * 100).toFixed(2) }}%</td>
    </tr>
    <tr>
      <td>Error Count</td>
      <td class="cell">{{ Number(est_err_count).toFixed(1) }} err</td>
      <td class="cell">± {{ Number(est_err_count_err).toFixed(2) }} err</td>
      <td class="cell">{{ Number(est_err_count_err / est_err_count * 100).toFixed(2) }}%</td>
    </tr>
</tbody>
</table>

<h2>Simulation</h2>
  <span style="float:right; margin-top: -50px;">{{ sim_iteration }} iterations</span>
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
      <td class="cell">{{ Number(sim_count).toFixed(1) }} req</td>
      <td class="cell"> ± {{ Number(sim_count_err).toFixed(2) }} req</td>
      <td class="cell"> {{ Number(sim_count_err/sim_count * 100).toFixed(2) }}%</td>
    </tr>
    <tr>
      <td>Request Rate</td>
      <td class="cell">{{ Number(sim_count / twindow).toFixed(1) }} rps</td>
      <td class="cell">± {{ Number(sim_count_err / twindow).toFixed(2) }} rps</td>
      <td class="cell">{{ (Number(sim_count_err)/sim_count * 100).toFixed(2) }}%</td>
    </tr>
    <tr>
      <td>Error Count</td>
      <td class="cell">{{ Number(sim_err_count).toFixed(1) }} err</td>
      <td class="cell">± {{ Number(sim_err_count_err).toFixed(2) }} err</td>
      <td class="cell">{{ Number(sim_err_count_err / sim_err_count * 100).toFixed(2) }}%</td>
    </tr>
    <tr>
      <td>Error Rate</td>
      <td class="cell">{{ Number(sim_err_rate).toFixed(2) }} %</td>
      <td class="cell">± {{ Number(sim_err_rate_err).toFixed(2) }} ppt</td>
      <td class="cell">{{ Number(sim_err_rate_err / sim_err_rate * 100).toFixed(2) }}%</td>
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
