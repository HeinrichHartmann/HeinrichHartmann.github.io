<!-- 
  IDEAS/TODO:
  * Add support for NaN value -> ignored samples
  * Link percentile sliders to selection
 -->
<script setup>
/* eslint-disable */
import { ref, watch, watchEffect, onMounted, reactive } from 'vue'
import jstat, { normal, exponential, gamma, beta, percentile, uniform } from 'jstat';
import * as _ from 'lodash';
import * as d3 from "d3";
import { enumStringMember } from '@babel/types';
var binomial = require('@stdlib/random-base-binomial');

/*
 * GLOBALS
 */

const SIMULATION_STEPS = 20_000;
const MAX_MOMENTS = 11;

const sim_count = ref(0);
const ref_sim_steps = ref(100_000);
const ref_bin_count = ref(300);
const ref_distribution = ref("$N(0,1)");
const ref_dist_select = ref("Normal")
const ref_mean = ref(0);
const ref_std = ref(1);
const ref_med = ref(0);
const ref_iqr = ref(1);
const ref_moments = ref("");
const ref_error = ref("OK");
const ref_percentiles = ref("");
const ref_percentile = ref(50);
const ref_percentile_2 = ref(50);

var svg_ax = null;
var svg_hist_ax = null;
var svg_margin = { top: 50, left: 80, right: 60, bottom: 100 }
  , width = 910 - svg_margin.left - svg_margin.right
  , height = 500 - svg_margin.top - svg_margin.bottom;

var sample_generator = () => normal.sample(0, 1);

const data = [];
const moments = [];
const percentiles = [0.001, 0.01, .1, 1, 5, 50, 95, 99, 99.9, 99.99, 99.999];

/*
 * Data Routines
 */

function data_insert(x) {
  data.push(x);
  for (let k = 0; k < MAX_MOMENTS; k++) {
    moments[k] += x ** k;
  }
}
function data_reset() {
  data.length = 0;
  moments.length = 0;
  for (let i = 0; i < MAX_MOMENTS; i++) {
    moments[i] = 0;
  }
}
function data_cdf(x) {
  var c = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i] <= x) c++;
  }
  return c / data.length;
}

function data_quantile_sorted(q) {
  // https://www.heinrichhartmann.com/archive/quantiles.html
  // central empirical quantile
  const n = data.length;
  const idx_min = Math.min(n - 1, Math.max(0, Math.ceil(q * n) - 1));
  const idx_max = Math.min(n - 1, Math.max(0, Math.floor(q * (n + 1))));
  const x = 0.5 * (data[idx_min] + data[idx_max]);
  return x;
}
function data_iqr_sorted() {
  return data_quantile_sorted(0.75) - data_quantile_sorted(0.25);
}

/*
 * Percentile selector
 */


var pct_mode = 1; // 1 : update left+right boudaries; 2: update only right boulday; 0 : update nothing
var pct_shift = false;
var pct_tmp = {};
const ref_pct_sel = ref({
  left :  { x : 0, v : 0, p : 0 },
  right : { x : 0, v : 0, p : 0 },
  width: 0,
});

function pct_mode_adv(ev) {
    pct_mode = (pct_mode + 1) % 3;
    if (pct_mode == 1) {
      ref_pct_sel.value["width"] = 0;
      let x = d3.pointer(ev, svg_ax.node())[0];
      pct_update(x);
    }
    if (pct_mode == 2) {
      pct_shift = ev.shiftKey;
    }
}

function pct_setup() {
  d3.select("#x-svg").on("mousemove", (ev) => pct_update(d3.pointer(ev, svg_ax.node())[0]));
  d3.select("#x-svg").on("click", pct_mode_adv)
}

function pct_update(x) {
  if (x < 0) x = 0;
  if (x > width) x = width;
  ref_pct_sel.value["x"] = x;
  const v = svg_hist_ax.invert(x);
  const p = 100 * data_cdf(v);
  if (pct_mode % 3 == 1) {
    pct_tmp = Object.assign({}, ref_pct_sel.value["left"]);
    //ref_percentile.value = p.toFixed(3); // slider
    //ref_percentile_2.value = p.toFixed(3); // slider
    ref_pct_sel.value["left"]["x"] = x;
    ref_pct_sel.value["left"]["v"] = v;
    ref_pct_sel.value["left"]["p"] = p;
    ref_pct_sel.value["right"]["x"] = x;
    ref_pct_sel.value["right"]["v"] = v;
    ref_pct_sel.value["right"]["p"] = p;
  } 
  else if (pct_mode % 3 == 2) {
    // ref_percentile_2.value = p.toFixed(3); // slider
    ref_pct_sel.value["right"]["x"] = x;
    ref_pct_sel.value["right"]["v"] = v;
    ref_pct_sel.value["right"]["p"] = p;
    ref_pct_sel.value["width"] = x - pct_tmp["x"];
    if (pct_shift) {
      let w = x - pct_tmp["x"];
      let wv = v - pct_tmp["v"];
      ref_pct_sel.value["left"]["x"] = pct_tmp["x"] - w;
      ref_pct_sel.value["left"]["v"] = pct_tmp["v"] - wv;
      ref_pct_sel.value["left"]["p"] = data_cdf(ref_pct_sel.value["left"]["v"]) * 100;
      ref_pct_sel.value["width"] = 2*w;
    }
  }
}

function pct_data_update() {
  function update(d) {
    let p = d["p"];
    d["v"] = data_quantile_sorted(p / 100);
    d["x"] = svg_hist_ax(d["v"]);
  }
  update(ref_pct_sel.value["left"]);
  update(ref_pct_sel.value["right"]);
  ref_pct_sel.value["width"] = ref_pct_sel.value["right"]["x"] - ref_pct_sel.value["left"]["x"];
}

function update_percentile() { // slider
  const p = Number(ref_percentile.value);
  const v = data_quantile_sorted(p / 100);
  const x = svg_hist_ax(v);
  ref_pct_sel.value["left"]["x"] = x;
  ref_pct_sel.value["left"]["v"] = v;
  ref_pct_sel.value["left"]["p"] = p;
  ref_pct_sel.value["width"] = ref_pct_sel.value["right"]["x"] - x;
}

function update_percentile_2() { // slider
  const p = Number(ref_percentile_2.value);
  const v = data_quantile_sorted(p / 100);
  const x = svg_hist_ax(v);
  ref_pct_sel.value["right"]["x"] = x;
  ref_pct_sel.value["right"]["v"] = v;
  ref_pct_sel.value["right"]["p"] = p;
  ref_pct_sel.value["width"] =  x - ref_pct_sel.value["left"]["x"];
}

/*
 * Histogram Logic
 */

function histogram_setup() {
  svg_ax = d3.select("#x-ax");
}

function plot_histogram() {
  if (!svg_ax) { return }
  // var svg_ax = d3.select("x-hist");
  let svg = d3.select("#x-hist");
  svg.selectAll(".toclear").remove() // remove axes

  var dmin = d3.min(data),
    dmax = d3.max(data),
    dspread = dmax - dmin;

  var x = d3.scaleLinear()
    .domain([dmin - 0.05 * dspread, dmax + 0.05 * dspread])
    .range([0, width]);
  svg_hist_ax = x;
  var y = d3.scaleLinear().range([height, 0]);

  var histogram = d3.histogram()
    .domain(x.domain())
    .thresholds(x.ticks(ref_bin_count.value));

  var bins = histogram(data);

  svg.append("g")
    .classed("toclear", true)
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x));

  y.domain([0, d3.max(bins, function (d) { return d.length; }) * 1.1]);

  // append the bar rectangles to the svg element
  var sel = svg.selectAll("rect")
    .data(bins)
    .join(
      enter => enter.append("rect"),
      update => update,
      exit => exit.remove()
    ).attr("x", 1)
    .attr("transform", function (d) { return "translate(" + x(d.x0) + "," + y(d.length) + ")"; })
    .attr("width", function (d) { return x(d.x1) - x(d.x0) + 0.1; })
    .attr("height", function (d) { return height - y(d.length); })
    .style("fill", "#69b3a2");

}

/*
 * Simluation
 */

const SCOPE = Object.assign({}, {
    U: uniform.sample,
    N: normal.sample,
    E: exponential.sample,
    Gamma: gamma.sample,
    Beta: beta.sample,
    B: binomial,
    Ber: (p) => binomial(1, p),
});

function update_generator() {
  data_reset();
  let txt = ref_distribution.value;
  let ev = "() => (" + txt.replace(/\$/g, "this.") + ")";
  try {
    // https://stackoverflow.com/questions/8403108/calling-eval-in-particular-context
    let g = function () { return eval(ev) }.call(SCOPE);
    if (typeof g() == "number") {
      console.log("New Generator:", ev);
      sample_generator = g;
      simulate_restart();
      ref_error.value = "OK";
    }
    else {
      throw typeof g();
    }
  }
  catch (err) {
    console.log(ev, err);
    ref_error.value = err;
    sample_generator = null;
  }
}

var sim_gen = 0;
function simulate_restart() {
  data_reset();
  sim_count.value = 0;
  sim_gen += 1;
  var my_sim_gen = sim_gen;
  function simulate() {
    if (my_sim_gen != sim_gen) return;
    if (!sample_generator) return;
    if (sim_count.value >= ref_sim_steps.value) {
      update_stats();
      return;
    };
    for (let i = 0; i < Math.min(ref_sim_steps.value, SIMULATION_STEPS); i++) {
      data_insert(sample_generator());
    }
    sim_count.value = data.length;
    setTimeout(simulate, 1);
  }
  simulate();
}

function update_stats() {
  var cnt = moments[0],
    sum = moments[1],
    sum2 = moments[2];
  ref_mean.value = sum / cnt;
  ref_std.value = Math.sqrt((sum2 - sum ^ 2) / (cnt));
  data.sort((a, b) => a - b)
  ref_med.value = data_quantile_sorted(0.5)
  ref_iqr.value = data_iqr_sorted()

  plot_histogram();
  pct_data_update();

  // Generate Moment String
  // For unknown reason, direct assignment to ref_moments.value does not work.
  // Need to keep the _.map iterations in separate expressions
  var m = '<table class="maxy">'
  for (let i = 0; i < moments.length; i++) {
    m += `<tr><td> M[${i}] </td><td> ${Number(moments[i] / data.length).toFixed(2)} </td></tr>`;
  }
  m += "</tr></table></div>";
  ref_moments.value = m;

  // Generate Percentile Table
  var m = '<table class="maxy"><tr>'
  for (let i = 0; i < percentiles.length; i++) {
    m += `<tr><td> p${percentiles[i]} </td><td> ${Number(data_quantile_sorted(percentiles[i] / 100)).toFixed(2)} </td></tr>`
  }
  m += "</tr></table></div>";
  ref_percentiles.value = m;
}

/*
 * Reactive Bindings
 */

watch(ref_percentile, update_percentile);
watch(ref_percentile_2, update_percentile_2);
watch(sim_count, update_stats);
watch(ref_distribution, update_generator);
watch(ref_bin_count, plot_histogram);
watch(ref_sim_steps, simulate_restart);

onMounted(() => {
  histogram_setup();
  pct_setup();
  data_reset();

  plot_histogram();
  simulate_restart();
});
</script>

<template>
  <h1>Percentile Explorer</h1>
  <div id="x-d3">
    <svg id="x-svg" :width="`${width + svg_margin.left + svg_margin.right}`"
      :height="`${height + svg_margin.top + svg_margin.bottom}`">
      <g id="x-ax" :transform="`translate(${svg_margin.left},${svg_margin.top})`">
        <text :x="`${width}`" :y="`${height + 40}`" text-anchor="end" style="dominant-baseline:hanging">Iteration {{
            sim_count
        }}</text>
        <g id="x-hist"></g>
        <g :transform="`translate(${ref_pct_sel.left.x},0)`">
          <line x1="0" x2="0" y1="0" :y2="`${height}`" class="bar"></line>
          <text x="-3" y="20" text-anchor="end">{{ `${ref_pct_sel.left.p.toFixed(1)}% ←` }}</text>
          <text x="0" :y="`${height + 20}`" text-anchor="middle" style="dominant-baseline:hanging">{{ `${ref_pct_sel.left.v.toFixed(3)}` }}</text>
          <rect x="0" y="0" :width="`${ref_pct_sel.width}`" :height="`${height}`" fill="#3332"></rect>
          <line :x1="`${ref_pct_sel.width}`" :x2="`${ref_pct_sel.width}`" y1="0" :y2="`${height}`" class="bar"></line>
          <text :x="`${ref_pct_sel.width + 3}`" y="20">{{ `→ ${(100 - ref_pct_sel.right.p).toFixed(1)}%` }}</text>
          <text :x="`${ref_pct_sel.width}`" :y="`${height + 20}`" text-anchor="middle" style="dominant-baseline:hanging">{{ ref_pct_sel.right.v.toFixed(3) }}</text>
          <text :x="`${ref_pct_sel.width / 2}`" y="20" text-anchor="middle" :display="ref_pct_sel.width < 50 ? 'none' : 'block'" >{{ `← ${( ref_pct_sel.right.p - ref_pct_sel.left.p ).toFixed(1)}% →` }}</text>
          <text :x="`${ref_pct_sel.width / 2}`" :y="`${height + 40}`" text-anchor="middle" style="dominant-baseline:hanging" :display="ref_pct_sel.width < 50 ? 'none' : 'block'">{{ `← ${ Math.abs(ref_pct_sel.left.v.toFixed(3) - ref_pct_sel.right.v.toFixed(3)).toFixed(3)} →` }}</text>
        </g>
      </g>
    </svg>
  </div>
  <table>
    <tbody>
      <tr style="background-color:#EEE">
        <td colspan="4" style="text-align:left;font-weight:bold"># Parameters</td>
      </tr>
      <tr>
        <td>Distribution</td>
        <td colspan="3">
          <input type="text" v-model="ref_distribution" style="width:calc(100% - 200px)">
          <select v-model="ref_dist_select" style="width:200px">
            <option>Normal</option>
            <option>Exponential</option>
            <option>Binomial</option>
          </select>
        </td>
      </tr>
      <tr>
        <td></td>
        <td colspan="3"
          style="font-family: monospace; color: rgb(36, 41, 47); background-color: rgba(175, 184, 193, 0.2); font-size: 10pt;">
          {{ ref_error }}</td>
      </tr>
      <tr>
        <td>Percentile</td>
        <td>p<input type="text" v-model="ref_percentile" style="width:calc(100% - 1em)" @focus="pct_var = 'pct'"></td>
        <td><input type="range" min="0" max="100" v-model="ref_percentile" class="slider" style="width:100%"></td>
        <td style="width:10em; text-aign:right">x={{ data_quantile_sorted(ref_percentile/100).toFixed(3) }}</td>
      </tr>
      <tr>
        <td></td>
        <td>p<input type="text" v-model="ref_percentile_2" style="width:calc(100% - 1em)" @focus="pct_var = 'pct'"></td>
        <td><input type="range" min="0" max="100" v-model="ref_percentile_2" class="slider" style="width:100%"></td>
        <td style="width:10em; text-aign:right">x={{ data_quantile_sorted(ref_percentile_2/100).toFixed(3) }}</td>
      </tr>
    </tbody>
  </table>

  <table>
    <tbody>
      <tr style="background-color:#EEE">
        <td colspan="4" style="text-align:left;font-weight:bold"># Statistics <div
            style="float:right; font-weight: normal;">Iterations {{ sim_count }}</div>
        </td>
      </tr>
      <tr>
        <td width="25%">Mean</td>
        <td width="25%" class="cell">{{ Number(ref_mean).toFixed(3) }}</td>
        <td width="25%">Stddev</td>
        <td width="25%" class="cell">{{ Number(ref_std).toFixed(3) }}</td>
      </tr>
      <tr>
        <td width="25%">Median</td>
        <td width="25%" class="cell">{{ Number(ref_med).toFixed(3) }}</td>
        <td width="25%">IQR</td>
        <td width="25%" class="cell">{{ Number(ref_iqr).toFixed(3) }}</td>
      </tr>
      <tr>
        <td colspan="2" width="50%" style="text-align:center; font-weight:bold">Percentiles</td>
        <td colspan="2" width="50%" style="text-align:center; font-weight:bold">Moments</td>
      </tr>
      <tr>
        <td colspan="2" width="50%" class="cosy" v-html="ref_percentiles"></td>
        <td colspan="2" width="50%" class="cosy" v-html="ref_moments"></td>
      </tr>
    </tbody>
  </table>

  <table>
    <tbody>
      <tr style="background-color:#EEE">
        <td colspan="4" style="text-align:left;font-weight:bold"># Internals</td>
      </tr>
      <tr>
        <td>Simulation Steps</td>
        <td><input type="text" v-model="ref_sim_steps" style="text-align:right; width:100%"></td>
        <td>Bin Count</td>
        <td><input type="text" v-model="ref_bin_count" style="text-align:right; width:100%"></td>
      </tr>
    </tbody>
  </table>

</template>

<style>
svg {
  background-color: #f3f5f7;
  margin-bottom: 10px;
}

.cell {
  text-align: right
}

.cosy {
  padding: 0px !important;
}

.cosy td {
  border: 0px !important;
  text-align: right;
  width: 50%;
}

.cosy tr {
  border: 0px !important;
}

.maxy {
  width: 100% !important;
  height: 100% !important;
  padding: 0 !important;
  margin: 0 !important;
}

.bar {
  stroke: rgb(0, 0, 0);
  stroke-width: .5
}
</style>
