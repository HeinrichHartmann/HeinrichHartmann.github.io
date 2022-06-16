<script setup>


import { ref, watch, watchEffect, onMounted } from 'vue'
import { normal, lognormal, exponential, gamma, percentile }  from 'jstat';


function setup_histogram() {
    // set the dimensions and margins of the graph
    const margin = {top: 10, right: 30, bottom: 30, left: 40},
        width = 721 - margin.left - margin.right,
        height = 250 - margin.top - margin.bottom;

    // append the svg object to the body of the page
    const svg = d3.select("#my_dataviz")
      .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("transform",
              `translate(${margin.left},${margin.top})`);
}

function plot_histogram(data1, data2, percentile_value) {
    if (!mounted) {
      // try again later
      setTimeout(() => {plot_histogram(data1, data2, percentile_value)}, 100);
      return;
    }
    const margin = {top: 10, right: 30, bottom: 20, left: 30},
        width = 721 - margin.left - margin.right,
        height = 250 - margin.top - margin.bottom;
      const svg = d3.select("#my_dataviz svg g")

      svg.selectAll("*").remove();

      // X axis: scale and draw:
      const x = d3.scaleLinear()
          .domain([0, d3.max(data1)])
          .range([0, width]);
      svg.append("g")
          .attr("transform", `translate(0, ${height})`)
          .call(d3.axisBottom(x));

      // set the parameters for the histogram
      const histogram = d3.histogram()
          .domain(x.domain())
          .thresholds(x.ticks(100));

      // And apply twice this function to data to get the bins.
      var bins1 = histogram(data1);
      var bins2 = histogram(data2);

      // Y axis: scale and draw:
      var y = d3.scaleLinear()
          .range([height, 0]);
      y.domain([0, d3.max(bins1, function(d) { return d.length; })]);
      svg.append("g")
          .call(d3.axisLeft(y));

      // append the bars for series 1
      svg.selectAll("rect")
          .data(bins1)
          .enter()
          .append("rect")
            .attr("x", 1)
            .attr("transform", function(d) { return "translate(" + x(d.x0) + "," + y(d.length) + ")"; })
            .attr("width", function(d) { return x(d.x1) - x(d.x0) -1 ; })
            .attr("height", function(d) { return height - y(d.length); })
            .style("fill", "#69b3a2")
            .style("opacity", 0.6)

      // append the bars for series 2
      svg.selectAll("rect2")
          .data(bins2)
          .enter()
          .append("rect")
            .attr("x", 1)
            .attr("transform", function(d) { return "translate(" + x(d.x0) + "," + y(d.length) + ")"; })
            .attr("width", function(d) { return x(d.x1) - x(d.x0) -1 ; })
            .attr("height", function(d) { return height - y(d.length); })
            .style("fill", "#A34080")
            .style("opacity", 0.6)

     svg.append('line')
       .attr('x1', x(percentile_value))
       .attr('y1', 0)
       .attr('x2', x(percentile_value))
       .attr('y2', height)
       .style("stroke-width", 2)
       .style("stroke", "#AAA")
       .style("fill", "none");
    svg.append("text")
        .style("dominant-baseline","hanging")
        .attr("x", x(percentile_value) + 3)
        .attr("y", 3)
        .text("Percentile")
};

const sampling_rate = ref(50)
const req_rate_raw = ref(10)
const req_rate_unit = ref("rps")
const error_rate = ref(3)
const time_window_text = ref("1")
const time_window_unit = ref("min")
const lat_text = ref("LogNormal")
const percentile_var = ref("95.0")
const percentile_value = ref(0)

const sim_iteration = ref(0)
const sim_count = ref()
const sim_count_err = ref()
const sim_err_count = ref()
const sim_err_count_err = ref()
const sim_err_rate = ref()
const sim_err_rate_err = ref()
const sim_lat = ref()
const sim_lat_err = ref()

const est_count = ref()
const est_count_err = ref()
const est_err_count = ref()
const est_err_count_err = ref()
const est_err_rate = ref()
const est_err_rate_err = ref()

const req_rate = ref(10)
const twindow = ref()

function combinations(n,k) {
  if (n < 0) return 0;
  if (k < 0) return 0;
  if (k > n) return 0;
  if (k == 0) return 1;
  if (k > n/2) return combinations(n, n-k);
  var c = 1.0;
  for (let i=0; i<k; i++) {
     c = c * ((n-i) / (k-i))
  }
  return c;
}

function binomial(N,p,n) {
 if (n > 0.5*N) return binomial(N, p, N-n);
 if (N < 100) return combinations(N,n) * (p**n) * (1-p)**(N-n)
 if (n < 30) return combinations(N,n) * (p**n) * (1-p)**(N-n)

 // Normal Approximation
 const mean = N*p;
 const sdev = Math.sqrt( N*p*(1-p) );
 return normal.pdf(n, mean, sdev);
}

function sampling_error(N, p) {
  return Math.sqrt(N * (1 - p) / p);
}
function sampling_rate_error(N,K,p) {
  var s = 0;
  for(let n=1;n < N;n++){
    s += binomial(N,p,n) * (N-n) / n;
  }
  return Math.sqrt( K/N * (N-K)/N * 1/(N-1) * s);
}
function calc_window_text() {
  try { return Number(eval(time_window_text.value)); }
  catch (err) { return 0; }
}

function do_estimate() {
  const p = sampling_rate.value/100;
  const N = twindow.value * req_rate.value;
  const K = N * error_rate.value / 100;
  est_count.value = N;
  est_count_err.value = sampling_error(N, p);
  est_err_count.value = K;
  est_err_count_err.value = sampling_error(K,p);
  est_err_rate.value = K / N;
  est_err_rate_err.value = sampling_rate_error(N,K,p);
}

function sample(X,p) {
  const out = [];
  for (let i=0;i<X.length;i++){
    if (Math.random() < p) out.push(X[i])
  }
  return out;
}

function new_set(N, errors) {
  const t = lat_text.value;
  var f = () => 1;
  if (t == "LogNormal")   f = () => lognormal.sample(0,1);
  if (t == "Normal")      f = () => normal.sample(100,10);
  if (t == "Exponential") f = () => exponential.sample(1/100);
  if (t == "Erlang")      f = () => gamma.sample(2,100);
  const out = [];
  try {
      for (let i=0;i<errors;i++) out.push(-f()); // errors
      for (let i=errors;i<N;i++) out.push(f());
  }
  catch(err) { console.log(err) }
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
function stat_err(X) {
  var s = 0;
  for (let i=0;i<X.length;i++) {
    if (X[i] <= 0) s += 1;
  }
  return s;
}
function stat_err_rate(X) {
  let n = stat_cnt(X);
  if (n == 0) { return 0; }
  return stat_err(X) / n;
}
function stat_lat_mean(X) {
  let n = stat_cnt(X);
  var s = 0;
  for (let i=0;i<X.length;i++) {
    s += Math.abs(X[i]);
  }
  return s / n;
}

function lat_filter(X) {
  const L = [];
  for (let i=0;i<X.length;i++) {
    if(X[i]>=0) { L.push(X[i]) }
    else { L.push(-X[i]) }
  }
  return L;
}
function lat_filter_ok(X) {
  const L = [];
  for (let i=0;i<X.length;i++) {
    if(X[i]>=0) L.push(X[i])
  }
  return L;
}
function lat_filter_err(X) {
  const L = [];
  for (let i=0;i<X.length;i++) {
    if(X[i]<0) L.push(-X[i])
  }
  return L;
}

var sim_generation = 0;
var X = [];
var S = [];

function do_simulate() {
  sim_generation += 1;
  var my_generation = sim_generation;
  const N = twindow.value * req_rate.value;
  const K = N * error_rate.value / 100;
  const p = sampling_rate.value/100;
  const q = percentile_var.value / 100;
  const X = new_set(N, K);
  const S = sample(X, p);
  const X_CNT = [];
  const X_ERR = [];
  const X_ERR_RATE = [];
  const X_LAT = [];
  var cnt = 0;
  const cnt_max = 1000;
  function iter() {
    if (sim_generation != my_generation) { return; }
    cnt += 1;
    const S = sample(X, p);
    const L = lat_filter(S);
    X_CNT.push(stat_cnt(S) / p);
    X_ERR.push(stat_err(S) / p);
    X_ERR_RATE.push(stat_err_rate(S) * 100);
    X_LAT.push(percentile(L, q));
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
    sim_lat.value = stat_mean(X_LAT);
    sim_lat_err.value = stat_std(X_LAT);
    sim_iteration.value = cnt;
  }
  iter();
  show();
}

var mounted = false;
function update_latency() {
  const N = twindow.value * req_rate.value;
  const p = sampling_rate.value/100;
  const q = percentile_var.value / 100;
  const X = new_set(N, 0);
  const S = sample(X, p);
  const pv = percentile(lat_filter(X), percentile_var.value/100);
  percentile_value.value = pv;
  plot_histogram(lat_filter(X), lat_filter(S), pv);
}

watch(est_count, update_latency);
watch(lat_text, update_latency);
watch(percentile_var, update_latency);
watch([req_rate_raw, req_rate_unit, sampling_rate], () => {
              const u = req_rate_unit.value;
              const r = req_rate_raw.value;
              if (u == "rps")  { req_rate.value = r }
              if (u == "rpm")  { req_rate.value = r / 60 }
});

watchEffect(() => {
  const u = time_window_unit.value;
  const v = calc_window_text();
  if (u == "sec")  { twindow.value = v }
  if (u == "min")  { twindow.value = v * 60 }
  if (u == "hour") { twindow.value = v * 60 * 60 }
  if (u == "day")  { twindow.value = v * 60 * 60 * 24 }

  do_estimate();
  do_simulate();
})

onMounted(() => {
  mounted = true;
  update_latency();
  setup_histogram();
})
</script>

<template>

<h1>Sampling Error Calculator</h1>
<p class="meta" style="color:#aaa; float:right">Stemwede, 2022-05-29</p>
<p class="meta" style="color:#aaa; float:left"><a href="https://github.com/HeinrichHartmann/HeinrichHartmann.github.io/tree/source/sampling">View Source</a></p>

<table>
  <tbody>

  <tr style="background-color:#EEE"><td colspan="4" style="text-align:left;font-weight:bold">
    # Sampling
    </td></tr>
    <tr>
      <td>Sampling Rate</td>
      <td><input type="text" v-model="sampling_rate"> %</td>
      <td colspan="2"><input type="range" min="0" max="100" v-model="sampling_rate" class="slider"></td>
    </tr>
</tbody>
</table>

<table id="rates-table">
  <tbody>
  <tr style="height:30px;background-color:#EEE"><td colspan="4" style="text-align:left;font-weight:bold">
      # Request Rates
    </td></tr>
    <tr>
      <td>Request Rate</td>
      <td><input type="text" v-model="req_rate_raw" style="margin-right:3px">
        <select v-model="req_rate_unit"><option>rps</option><option>rpm</option></select>
      </td>
      <td colspan="2"><input type="range" min="0" max="1000" v-model="req_rate_raw" class="slider"></td>
    </tr>
    <tr>
      <td>Time window</td>
      <td colspan="3">
        <input type="text" v-model="time_window_text" style="margin-right:3px">
        <select v-model="time_window_unit"><option>sec</option><option>min</option><option>hour</option><option>day</option></select>
        ({{ twindow }} sec)
      </td>
    </tr>
    <tr>
     <td>Population</td>
     <td colspan="3">Total {{ req_rate * twindow }} requests contained in {{  twindow }} sec time-window.</td>
    </tr>
    <tr style="height:30px;background-color:#FAFAFA"><td colspan="4" style="text-align:left;font-weight:bold">
      ## Samping Effects on Request Rate Estimates
      <span style="float:right;font-weight:normal">{{ sim_iteration }} iterations</span>
    </td></tr>
    <tr>
      <td>Sample</td>
      <td colspan="3">We expect to retrain {{ Number(req_rate * twindow * sampling_rate / 100 ).toFixed(0) }} requests, after sampling with {{ sampling_rate }}% probability.</td>
    </tr>
    <tr>
      <td></td>
      <td>Value</td>
      <td>Standard Error</td>
      <td>Realtive Error</td>
    </tr>
    <tr>
      <td>Estimate Req. Count</td>
      <td class="cell">{{ Number(est_count).toFixed(1) }} req</td>
      <td class="cell">± {{ Number(est_count_err).toFixed(2) }} req</td>
      <td class="cell">{{ (Number(est_count_err)/est_count * 100).toFixed(2) }}%</td>
    </tr>
    <tr>
      <td>Simulate Req. Count</td>
      <td class="cell">{{ Number(sim_count).toFixed(1) }} req</td>
      <td class="cell">± {{ Number(sim_count_err).toFixed(2) }} req</td>
      <td class="cell">{{ (Number(sim_count_err)/sim_count * 100).toFixed(2) }}%</td>
    </tr>
    <tr>
      <td>Estimate Req. Rate</td>
      <td class="cell">{{ Number(est_count / twindow).toFixed(1) }} rps</td>
      <td class="cell">± {{ Number(est_count_err / twindow).toFixed(2) }} rps</td>
      <td class="cell">{{ (Number(est_count_err)/est_count * 100).toFixed(2) }}%</td>
    </tr>
    <tr>
      <td>Simulate Req. Rate</td>
      <td class="cell">{{ Number(sim_count / twindow).toFixed(1) }} rps</td>
      <td class="cell">± {{ Number(sim_count_err / twindow).toFixed(2) }} rps</td>
      <td class="cell">{{ (Number(sim_count_err)/sim_count * 100).toFixed(2) }}%</td>
    </tr>
</tbody>
</table>

<table>
  <tbody>
  <tr style="height:30px;background-color:#EEE"><td colspan="4" style="text-align:left;font-weight:bold">
      # Error Rates
    </td>
  </tr>
    <tr>
      <td>Error Rate</td>
      <td><input type="text" v-model="error_rate"> %</td>
      <td colspan="2"><input type="range" min="0" max="100" v-model="error_rate" class="slider"></td>
    </tr>
    <tr>
      <td>Population</td>
      <td colspan="3">
      From the {{ req_rate * twindow }} requests  {{ Number(req_rate * twindow * error_rate / 100) }} are marked as error.
      </td>
    </tr>
    <tr style="height:30px;background-color:#FAFAFA"><td colspan="4" style="text-align:left;font-weight:bold">
      ## Samping Effects on Error Rate Estimates
      <span style="float:right;font-weight:normal">{{ sim_iteration }} iterations</span>
    </td></tr>
    <tr>
      <td>Sample</td>
      <td colspan="3">We expect to retrain {{ Number(req_rate * twindow * sampling_rate / 100 * error_rate / 100 ) }} errors in the sample of size  {{ Number(req_rate * twindow * sampling_rate / 100 ) }}.</td>
    </tr>
    <tr>
    <td></td>
    <td colspan="3">The probability that no error will be retained is {{ Number( 100 * (1 - sampling_rate / 100)**Number(req_rate * twindow * error_rate / 100) ).toFixed(9) }}%</td>
    </tr>
    <tr>
      <td>Estimate Err. Rate</td>
      <td class="cell">{{ Number(est_err_rate * 100).toFixed(1) }} %</td>
      <td class="cell">± {{ Number(est_err_rate_err * 100).toFixed(2) }} ppt</td>
      <td class="cell">{{ Number(est_err_rate_err / est_err_rate * 100).toFixed(2) }}%</td>
    </tr>
    <tr>
      <td>Simulate Err. Rate</td>
      <td class="cell">{{ Number(sim_err_rate).toFixed(1) }} %</td>
      <td class="cell">± {{ Number(sim_err_rate_err).toFixed(2) }} ppt</td>
      <td class="cell">{{ Number(sim_err_rate_err / sim_err_rate * 100).toFixed(2) }}%</td>
    </tr>
</tbody>
</table>

<table>
  <tbody>
    <tr style="height:30px;background-color:#EEE"><td colspan="4" style="text-align:left;font-weight:bold">
      # Latency
    </td></tr>
    <tr>
      <td style="width:250px">Latency Distribution</td>
      <td colspan="3">
        <select v-model="lat_text"><option>LogNormal</option><option>Exponential</option><option>Erlang</option><option>Normal</option></select>
      </td>
    </tr>
    <tr>
      <td>Percentile p<input type="text" v-model="percentile_var" style="text-align:left; width:120px; margin-left:3px"></td>
      <td colspan="3">{{ Number(percentile_value).toFixed(1) }} ms</td>
    </tr>
    <tr>
     <td>Population</td>
     <td colspan="3">Total {{ req_rate * twindow }} requests following {{ lat_text }} distribution.</td>
    </tr>
    <tr>
     <td></td>
     <td colspan="3">The true p{{ percentile_var }} is at {{ Number(percentile_value).toFixed(1) }}ms.</td>
    </tr>
    <tr style="height:30px;background-color:#FAFAFA"><td colspan="4" style="text-align:left;font-weight:bold">
      ## Samping Effects on Latency
      <span style="float:right;font-weight:normal">{{ sim_iteration }} iterations</span>
    </td></tr>
    <tr>
      <td>Sample</td>
      <td colspan="3">We expect to retain {{ Number(req_rate * twindow * sampling_rate / 100 ).toFixed(1) }} requests.</td>
    </tr>
    <tr>
     <td>Estimate Percentile p{{ percentile_var }}</td>
      <td class="cell" width="150px">{{ Number(sim_lat).toFixed(2) }} ms</td>
      <td class="cell" width="150px">± {{ Number(sim_lat_err).toFixed(2) }} ms</td>
      <td class="cell" width="150px">{{ Number(sim_lat_err / sim_lat * 100).toFixed(2) }}%</td>
    </tr>
    <tr>
      <td colspan="4">
        <div id="my_dataviz"></div>
      </td>
    </tr>
</tbody>
</table>

</template>
<style>

#rates-table input {
    width: 200px;
}

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
