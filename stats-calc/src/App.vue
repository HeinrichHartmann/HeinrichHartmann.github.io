<script setup>
/* eslint-disable */
import { ref, watch, watchEffect, onMounted } from 'vue'
import { normal, lognormal, exponential, gamma, percentile } from 'jstat';

onMounted(() => {
  console.log("Hello World!");
  setup_d3();
});

function setup_d3() {
  const margin = { top: 10, right: 30, bottom: 30, left: 40 },
    width = 721 - margin.left - margin.right,
    height = 250 - margin.top - margin.bottom;

  const svg = d3.select("#d3")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform",
      `translate(${margin.left},${margin.top})`);

  svg.selectAll("*").remove();

  svg.append("text")
    .style("dominant-baseline", "hanging")
    .attr("x", 100)
    .attr("y", 100)
    .text("Hello d3");

};
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
#iapp {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
