<script setup>
/* eslint-disable */
import { ref, watch, watchEffect, onMounted, reactive } from 'vue'
import jstat, { normal, exponential, gamma, beta, percentile, uniform } from 'jstat';
import * as _ from 'lodash';
import * as d3 from "d3";
import { enumStringMember } from '@babel/types';


var binomial = require('@stdlib/random-base-binomial');

const MAX_SIMULATION_STEPS = 1_000_000;
const SIMULATION_STEPS = 20_000;
const MAX_MOMENTS = 11;
const HIST_BINS_START = 50
const HIST_BINS_REFINED = 350;
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

var svg = null;
var svg_target = null;
var svg_line_g = null;
var svg_hist_ax = null;
var svg_margin = { top: 20, left: 80, right: 60, bottom: 50}
,   width = 910 - svg_margin.left - svg_margin.right
,   height = 400 - svg_margin.top - svg_margin.bottom;

const data = [];
const moments = [];
const percentiles = [0.001, 0.01, .1, 1, 5, 50, 95, 99, 99.9, 99.99, 99.999];

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

function move_to_front(node) {
  let p = node.parentNode;
  p.removeChild(node);
  p.appendChild(node);
}

function plot_percentile(svg_coords) {
  if (!svg_line_g) return;
  if (!svg_hist_ax) return;
  var x = svg_coords[0];
  if (x < 0) x = 0;
  if (x > width) x = width; 
  svg_line_g.attr("transform", `translate(${x},0)`);
  var pv = svg_hist_ax.invert();
  move_to_front(svg_line_g.node());
}

function setup_histogram() {
  svg = d3.select("#d3")
    .select("svg")
    .attr("width", width + svg_margin.left + svg_margin.right)
    .attr("height", height + svg_margin.top + svg_margin.bottom)
    .select("g")
    .attr("transform", "translate(" + svg_margin.left + "," + svg_margin.top + ")");
  svg_target = d3.select("#d3 svg g").node();
   d3.select("#d3 svg").on("mousemove", (ev) => plot_percentile(d3.pointer(ev, svg_target)));
  svg_line_g = svg.append("g")
  svg_line_g.append("line")
    .attr("x1",0)
    .attr("y1",0)
    .attr("x2",0)
    .attr("y2",height)
    .attr("style","stroke:rgb(255,0,0);stroke-width:2")
}

function plot_histogram() {
  if (!svg) { return }
  svg.selectAll(".toclear").remove() // remove axes

  var dmin = d3.min(data),
    dmax = d3.max(data),
    dspread = dmax - dmin;

  var x = d3.scaleLinear()
    .domain([dmin - 0.05 * dspread, dmax + 0.05 * dspread])
    .range([0, width]);
  svg_hist_ax = x;
  var y = d3.scaleLinear().range([height, 0]);
  var z = d3.scaleLinear().domain([0,1]).range([height, 0]);

  var histogram = d3.histogram()
    .domain(x.domain())
    .thresholds(x.ticks(HIST_BINS));
  
  var bins = histogram(data);

  svg.append("g")
    .classed("toclear", true)
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x));

  y.domain([0, d3.max(bins, function (d) { return d.length; }) ]);
  svg.append("g")
    .classed("toclear", true)
    .call(d3.axisLeft(y));

  svg.append("g")
    .classed("toclear", true)
    .attr("transform", "translate(" + width + ",0)")
    .call(d3.axisRight(z));

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

  var y_cumsum = 0;
  svg.select("path").remove();
  svg.append("path")
      .datum(bins)
      .attr("fill", "none")
      .attr("stroke", "#00000055")
      .attr("stroke-width", 1.5)
      .attr("stroke-linejoin", "round")
      .attr("d",  d3.line()
          .curve(d3.curveStep)
          .x(function(d) { return x((d.x1 + d.x0) / 2); })
          .y(function(d) { y_cumsum += d.length; return z(y_cumsum / data.length); }));
}

var generator = () => normal.sample(0, 1);
var sim_gen = 0;

function simulate_restart() {
  data_reset();
  sim_count.value = 0;
  sim_gen += 1;
  var my_sim_gen = sim_gen;
  HIST_BINS = HIST_BINS_START;
  function simulate() {
    if (my_sim_gen != sim_gen) return;
    if (!generator) return;
    if (sim_count.value >= MAX_SIMULATION_STEPS) {
      HIST_BINS = HIST_BINS_REFINED;
      update_stats();
      return;
    };
    for (let i = 0; i < SIMULATION_STEPS; i++) {
      data_insert(generator());
    }
    sim_count.value = data.length;
    setTimeout(simulate, 1);
  }
  simulate();
}

function quantile_sorted(X, q) {
  // https://www.heinrichhartmann.com/archive/quantiles.html
  // central empirical quantile
  const n = X.length;
  const idx_min = Math.min(n - 1, Math.max(0, Math.ceil(q * n) - 1));
  const idx_max = Math.min(n - 1, Math.max(0, Math.floor(q * (n + 1))));
  const x = 0.5 * (X[idx_min] + X[idx_max]);
  return x;
}
function iqr_sorted(X) {
  return quantile_sorted(X, 0.75) - quantile_sorted(X, 0.25);
}

function update_stats() {
  plot_histogram();
  var cnt = moments[0],
    sum = moments[1],
    sum2 = moments[2];
  ref_mean.value = sum / cnt;
  ref_std.value = Math.sqrt((sum2 - sum ^ 2) / (cnt));
  data.sort((a, b) => a - b)
  ref_med.value = quantile_sorted(data, 0.5)
  ref_iqr.value = iqr_sorted(data)

  // Generate Moment String
  // For unknown reason, direct assignment to ref_moments.value does not work.
  // Need to keep the _.map iterations in separate expressions
  var m = '<table style="width:100%; height:100%; padding: 0; margin:0">'
  for (let i = 0; i < moments.length; i++) {
    m += `<tr><td> M[${i}] </td><td> ${Number(moments[i] / data.length).toFixed(2)} </td></tr>`;
  }
  m += "</tr></table></div>";
  ref_moments.value = m;

  // Generate Percentiles
  var m = '<table style="width:100%; height:100%; padding: 0; margin:0"><tr>'
  for (let i = 0; i < percentiles.length; i++) {
    m += `<tr><td> p${percentiles[i]} </td><td> ${Number(quantile_sorted(data, percentiles[i] / 100)).toFixed(2)} </td></tr>`
  }
  m += "</tr></table></div>";
  ref_percentiles.value = m;
}

watch(sim_count, update_stats);
watch(ref_distribution, () => {
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
      generator = g;
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
    generator = null;
  }
})

onMounted(() => {
  data_reset();
  setup_histogram();
  plot_histogram();
  simulate_restart();
});

</script>

<template>
  <h1>Stats Calculator </h1>
  <div id="d3">
    <svg>
      <g></g>
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
</style>
