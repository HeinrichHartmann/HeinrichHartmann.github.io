<script setup>
/* eslint-disable */
import { ref, watch, watchEffect, onMounted } from 'vue'
import { normal, lognormal, exponential, gamma, percentile } from 'jstat';
import { useScreen, useGrid } from 'vue-screen'

const screen = useScreen()
const svg_margin = { left: 50, right: 50, top: 30, bottom: 20 }
const svg_height = 350;
var svg_width = screen.width;

var d3svg = null;
var data = [1, 2, 3, 1, 12, 3, 12, 123, 1, 213, 123, 3, 1, 2];

watch([screen], () => {
  console.log("Screen changed!");
  svg_width = screen.width;
  setup_d3();
  plot_histogram();
});

onMounted(() => {
  console.log("Hello World!");
  setup_d3();
  plot_histogram();
});

function setup_d3() {
  d3.select("#d3").selectAll("*").remove();
  d3svg = d3.select("#d3")
    .append("svg")
    .attr("width", svg_width - 30)
    .attr("height", svg_height)
    .style("margin-left",  `-${(svg_width - 750)/2}px` )
    .append("g")
    .attr("transform", `translate(${svg_margin.left},${svg_margin.top})`)
    .attr("width", svg_width - svg_margin.left - svg_margin.right)
    .attr("height", svg_height - svg_margin.top - svg_margin.bottom);
  d3svg.append("rect")
    .attr("x", 0)
    .attr("y", 0)
    .attr("width", "100%")
    .attr("height", "100%")
    .style("fill", "#dadada")
    .style("opacity", 0.6)
}

function plot_histogram() {
  if (!d3svg) return;
  const svg = d3svg;

  svg.selectAll("*").remove();

  const data1 = data;
  const data2 = [];
  const percentile_value = 1;

  const width = svg_width - svg_margin.left - svg_margin.right;
  const height = svg_height - svg_margin.top - svg_margin.bottom;

  console.log(svg);

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
  y.domain([0, d3.max(bins1, function (d) { return d.length; })]);
  svg.append("g")
    .call(d3.axisLeft(y));

  // append the bars for series 1
  svg.selectAll("rect")
    .data(bins1)
    .enter()
    .append("rect")
    .attr("x", 1)
    .attr("transform", function (d) { return "translate(" + x(d.x0) + "," + y(d.length) + ")"; })
    .attr("width", function (d) { return x(d.x1) - x(d.x0) - 1; })
    .attr("height", function (d) { return height - y(d.length); })
    .style("fill", "#69b3a2")
    .style("opacity", 0.6)

  // append the bars for series 2
  svg.selectAll("rect2")
    .data(bins2)
    .enter()
    .append("rect")
    .attr("x", 1)
    .attr("transform", function (d) { return "translate(" + x(d.x0) + "," + y(d.length) + ")"; })
    .attr("width", function (d) { return x(d.x1) - x(d.x0) - 1; })
    .attr("height", function (d) { return height - y(d.length); })
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
    .style("dominant-baseline", "hanging")
    .attr("x", x(percentile_value) + 3)
    .attr("y", 3)
    .text("Percentile")

}


</script>

<template>
  <h1>Hello Markdown</h1>
  <div id="d3"></div>
  <p>
    Hello Katex!
    $$ f(x) = \int_0^x e^y dy $$
  </p>

</template>

<style>
</style>
