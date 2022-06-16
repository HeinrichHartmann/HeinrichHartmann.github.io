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

const MAX_SIMULATION_STEPS = 100_000;
const SIMULATION_STEPS = 20_000;
const MAX_MOMENTS = 11;
const HIST_BINS_START = 50
const HIST_BINS_REFINED = 100;
var HIST_BINS = HIST_BINS_START;

const sim_count = ref(0);
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

var svg_ax = null;
var svg_line_g = null;
var svg_bar_g = null;
var svg_hist_ax = null;
var svg_margin = { top: 20, left: 80, right: 60, bottom: 50}
,   width = 910 - svg_margin.left - svg_margin.right
,   height = 400 - svg_margin.top - svg_margin.bottom;

var sample_generator = () => normal.sample(0, 1);

const data = [];
const moments = [];
const percentiles = [0.001, 0.01, .1, 1, 5, 50, 95, 99, 99.9, 99.99, 99.999];


/* 
 * HELPER
 */

function move_to_front(node) {
  let p = node.parentNode;
  p.removeChild(node);
  p.appendChild(node);
}

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
  data.lenght = 0;
  moments.length = 0;
  for (let i = 0; i < MAX_MOMENTS; i++) {
    moments[i] = 0;
  }
}
function data_cdf(x) {
  var c = 0;
  for(let i=0; i< data.length; i++) {
    if (data[i] <= x) c++;
  }
  return c / data.length;
}

function data_quantile_sorted(X, q) {
  // https://www.heinrichhartmann.com/archive/quantiles.html
  // central empirical quantile
  const n = X.length;
  const idx_min = Math.min(n - 1, Math.max(0, Math.ceil(q * n) - 1));
  const idx_max = Math.min(n - 1, Math.max(0, Math.floor(q * (n + 1))));
  const x = 0.5 * (X[idx_min] + X[idx_max]);
  return x;
}
function data_iqr_sorted(X) {
  return data_quantile_sorted(X, 0.75) - data_quantile_sorted(X, 0.25);
}

/*
 * Percentile bar
 */

const ref_bar = ref({
  transform : "",
  text_top : "p50",
  text_bot: "0",
})

function bar_setup() {
  svg_bar_g = d3.select("#x-bar")
}

function bar_update() {
  let svg = d3.select("#x-bar");
  const pct = ref_percentile.value;
  const pctv = data_quantile_sorted(data,  pct / 100);
  const pctx = svg_hist_ax(pctv);
  ref_bar.value["transform"] = `translate(${pctx}, 0)`;
  ref_bar.value["text_top"] = `p${pct}`;
  ref_bar.value["text_bot"] = `${Number(pctv).toFixed(2)}`
}

/*
 * Percentile selector
 */
function pct_setup() {
  d3.select("#x-svg").on("mousemove", (ev) => pct_plot(d3.pointer(ev, svg_ax.node())));
  d3.select("#x-svg").on("click", pct_new);
}

var line_cnt = 0;
function pct_new(event) {
  svg_line_g = svg_ax.append("g")
  svg_line_g.append("line")
    .attr("x1",0)
    .attr("y1",0)
    .attr("x2",0)
    .attr("y2",height)
    .attr("style","stroke:rgb(0,0,0);stroke-width:.5")
  svg_line_g.append("text")
     .attr("x", 3) 
     .attr("y", 20 + line_cnt * 20)
  svg_line_g.append("text")
     .attr("x", -3)
     .attr("y", 20 + line_cnt * 20)
     .attr("text-anchor", "end")
  svg_line_g.append("text")
     .attr("x", 0)
     .attr("y", height + 20)
     .attr("text-anchor", "middle")
     .style("dominant-baseline","hanging")
  line_cnt += 1;
  pct_plot(d3.pointer(event, svg_ax.node()));
}

function pct_plot(svg_coords) {
  if (!svg_line_g) return;
  var x = svg_coords[0];
  if (x < 0) x = 0;
  if (x > width) x = width; 
  svg_line_g.attr("transform", `translate(${x},0)`);
  move_to_front(svg_line_g.node());
  const v = svg_hist_ax.invert(x);
  const p = 100 * data_cdf(v);
  svg_line_g.selectAll("text").data([`→ ${(100 - p).toFixed(3)}%`, `${p.toFixed(3)}% ←`, `${v.toFixed(3)}`])
    .html((d) => d);
}


/*
 * Histogram Logic
 */

function histogram_setup() {
  svg_ax = d3.select("#x-ax");
  d3.select("#x-svg").on("mousemove", (ev) => pct_plot(d3.pointer(ev, svg_ax.node())));
  d3.select("#x-svg").on("click", pct_new);
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
    .thresholds(x.ticks(HIST_BINS));
  
  var bins = histogram(data);

  svg.append("g")
    .classed("toclear", true)
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x));

  y.domain([0, d3.max(bins, function (d) { return d.length; }) * 1.1 ]);

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

  move_to_front(svg_bar_g.node());

}

/*
 * Simluation
 */

function update_generator() {
  data.length = 0;
  let txt = ref_distribution.value;
  let ev = "() => (" + txt.replace(/\$/g, "this.") + ")";
  let scope = {
    U: uniform.sample,
    N: normal.sample,
    E: exponential.sample,
    Gamma: gamma.sample,
    Beta: beta.sample,
    B: binomial,
    Ber: (p) => binomial(1, p),
  }
  try {
    // https://stackoverflow.com/questions/8403108/calling-eval-in-particular-context
    let g = function () { return eval(ev) }.call(scope);
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
  HIST_BINS = HIST_BINS_START;
  function simulate() {
    if (my_sim_gen != sim_gen) return;
    if (!sample_generator) return;
    if (sim_count.value >= MAX_SIMULATION_STEPS) {
      HIST_BINS = HIST_BINS_REFINED;
      update_stats();
      return;
    };
    for (let i = 0; i < SIMULATION_STEPS; i++) {
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
  ref_med.value = data_quantile_sorted(data, 0.5)
  ref_iqr.value = data_iqr_sorted(data)

  plot_histogram();
  bar_update();

  // Generate Moment String
  // For unknown reason, direct assignment to ref_moments.value does not work.
  // Need to keep the _.map iterations in separate expressions
  var m = '<table style="width:100%; height:100%; padding: 0; margin:0">'
  for (let i = 0; i < moments.length; i++) {
    m += `<tr><td> M[${i}] </td><td> ${Number(moments[i] / data.length).toFixed(2)} </td></tr>`;
  }
  m += "</tr></table></div>";
  ref_moments.value = m;

  // Generate Percentile Table
  var m = '<table style="width:100%; height:100%; padding: 0; margin:0"><tr>'
  for (let i = 0; i < percentiles.length; i++) {
    m += `<tr><td> p${percentiles[i]} </td><td> ${Number(data_quantile_sorted(data, percentiles[i] / 100)).toFixed(2)} </td></tr>`
  }
  m += "</tr></table></div>";
  ref_percentiles.value = m;
}

/*
 * Reactive Bindings
 */

watch(ref_percentile, bar_update);
watch(sim_count, update_stats);
watch(ref_distribution, update_generator);

onMounted(() => {
  histogram_setup();
  bar_setup();
  pct_setup();
  data_reset();

  plot_histogram();
  simulate_restart();
});
</script>

<template>
  <h1>Stats Calculator {{ }}</h1>
  <div id="x-d3">
    <svg id="x-svg" 
      :width="`${ width + svg_margin.left + svg_margin.right }`" 
      :height="`${ height + svg_margin.top + svg_margin.bottom }`">
      <g id="x-ax" :transform="`translate(${svg_margin.left},${svg_margin.top})`">
        <g id="x-hist"></g>
        <g id="x-pct"></g>
        <g id="x-bar" v-bind:transform="ref_bar.transform">
          <line x1="0" x2="0" y1="0" :y2="`${ height }`" class="bar"></line>
          <text x="3" y="20">{{ ref_bar.text_top }}</text>
          <text x="0" :y="`${ height + 20}`" text-anchor="middle" style="dominant-baseline:hanging">{{ ref_bar.text_bot }}</text>
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
        <td width="100px"><select v-model="ref_dist_select">
            <option>Normal</option>
            <option>Exponential</option>
            <option>Binomial</option>
          </select></td>
        <td><input type="text" v-model="ref_distribution" style="width:100%"></td>
      </tr>
      <tr>
        <td></td>
        <td colspan="3"
          style="font-family: monospace; color: rgb(36, 41, 47); background-color: rgba(175, 184, 193, 0.2); font-size: 10pt;">
          {{ ref_error }}</td>
      </tr>
        <tr>
        <td>Percentile</td>
        <td><input type="text" v-model="ref_percentile" style="width:100%"></td>
        <td colspan="2"><input type="range" min="0" max="100" v-model="ref_percentile" class="slider" style="width:100%"></td>
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

.bar {
  stroke:rgb(0,0,0);
  stroke-width:.5
}

</style>
