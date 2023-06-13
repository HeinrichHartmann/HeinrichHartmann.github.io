---
title: Open-Source Time Series Databases List
date: 2023-06-13
author: Heinrich Hartmann
location: Boltenhagen
style: markdown
url: /posts/tsdb
Draft: false
---

<script>
window.addEventListener('DOMContentLoaded', function() {
  var tables = document.querySelectorAll('table');

  tables.forEach(function(table) {
    var headers = table.querySelectorAll('th');
    headers.forEach(function(header, index) {
      header.style.cursor = 'pointer';
      header.addEventListener('click', function() {
        sortTable(table, index);
      });
    });
  });

  var sortOrder = 1;
  function sortTable(table, columnIndex) {
    var rows = Array.from(table.rows).slice(1); // Exclude the header row
    var shouldSwitch = true; // Initial value to trigger sorting

    rows.sort(function(a, b) {
      var x = a.cells[columnIndex].innerHTML.trim();
      var y = b.cells[columnIndex].innerHTML.trim();

      var xNumber = parseFloat(x);
      var yNumber = parseFloat(y);

      if (!isNaN(xNumber) && !isNaN(yNumber)) {
        return (xNumber - yNumber) * sortOrder;
      } else {
        return (x.toLowerCase().localeCompare(y.toLowerCase())) * sortOrder;
      }
    });

    rows.forEach(function(row) {
      table.appendChild(row);
    });

    // Reverse the sorting order for next click
    if (shouldSwitch) {
      sortOrder *= -1;
    }
  }
});
</script>


<style>
main {
  width: 52em !important;
}
table {
  border-collapse: collapse;
  border-width: 0px !important;
}

table th {
  background-color: #f2f2f2;
  border-width: 0px !important;
}

table td,
table tr,
table th {
  padding: 8px;
  border-width: 0px !important;
}
</style>

I took some time today, to compile a list of open-source Time Series Databases,
with "a little" aid of [ChatGPT](https://chat.openai.com/share/3e0e187b-05f9-44fe-a9db-bf09c015b6cc).

<!-- TABLE_START -->
| Name | Year | License | Query Languages | GitHub Stars |
| :---|---|---|---|---: |
| [Prometheus](https://github.com/prometheus/prometheus) | 2012 | Apache 2.0 | PromQL | 34000 |
| [InfluxDB](https://github.com/influxdata/influxdb) | 2013 | MIT | InfluxQL, Flux | 21000 |
| [ClickHouse](https://github.com/ClickHouse/ClickHouse) | 2016 | Apache 2.0 | SQL | 16700 |
| [VictoriaMetrics](https://github.com/VictoriaMetrics/VictoriaMetrics) | 2018 | Apache 2.0 | MetricsQL | 9600 |
| [Druid](https://github.com/apache/druid) | 2012 | Apache 2.0 | Druid SQL | 9300 |
| [TimescaleDB](https://github.com/timescale/timescaledb) | 2016 | Apache 2.0 | SQL | 9800 |
| [TDengine](https://github.com/taosdata/TDengine) | 2017 | AGPL 3.0 | SQL | 6600 |
| [Thanos](https://github.com/thanos-io/thanos) | 2018 | Apache 2.0 | PromQL | 5800 |
| [QuestDB](https://github.com/questdb/questdb) | 2020 | Apache 2.0 | SQL | 4200 |
| [Graphite](https://github.com/graphite-project/graphite-web) | 2008 | Apache 2.0 | Graphite | 4600 |
| [OpenTSDB](https://github.com/OpenTSDB/opentsdb) | 2010 | LGPL 2.1 | OpenTSDB SQL | 3500 |
| [CrateDB](https://github.com/crate/crate) | 2013 | Apache 2.0 | SQL | 3500 |
| [Pinot (Apache)](https://github.com/apache/incubator-pinot) | 2015 | Apache 2.0 | SQL | 3600 |
| [M3DB](https://github.com/m3db/m3) | 2018 | Apache 2.0 | M3QL | 2800 |
| [Arctic (Python)](https://github.com/man-group/arctic) | 2015 | Apache 2.0 | Python API | 2500 |
| [Beringei (from Facebook)](https://github.com/facebookarchive/beringei) | 2016 | BSD | Thrift API | 2500 |
| [Metrictank](https://github.com/grafana/metrictank) | 2015 | Apache 2.0 | n/a | 1600 |
| [KairosDB](https://github.com/kairosdb/kairosdb) | 2012 | Apache 2.0 | CQL, REST API | 1200 |
| [Akumuli](https://github.com/akumuli/Akumuli) | 2014 | GPL 3.0 | SQL-like Query Language | 1200 |
| [Heroic](https://github.com/spotify/heroic) | 2015 | Apache 2.0 | Heroic Query Language | 1000 |
| [Blueflood](https://github.com/rackerlabs/blueflood) | 2012 | Apache 2.0 | Blueflood Query Language | 1000 |
| [RRDtool](https://github.com/oetiker/rrdtool-1.x) | 1999 | GPL 2.0 | RRDtool | 1000 |
| [SiriDB](https://github.com/SiriDB/siridb-server) | 2016 | MIT | SiriQL | 100 |
| [Newts](https://github.com/OpenNMS/newts) | 2014 | Apache 2.0 | CQL | 100 |
| [Chronix](https://github.com/ChronixDB/chronix.server) | 2015 | Apache 2.0 | Chronix Query Language | 200 |
| [Warpscript](https://github.com/senx/warp10-platform) | 2014 | Apache 2.0 | WarpScript | 180 |
| [Warp 10](https://github.com/senx/warp10-platform) | 2014 | Apache 2.0 | WarpScript | 500 |
| [Gnocchi (OpenStack)](https://github.com/gnocchixyz/gnocchi) | 2014 | Apache 2.0 | Gnocchi Query Language | 700 |
<!-- TABLE_END -->

From the list I have first-hand experience with Prometheus, Influx, KairosDB, RRDTool.

## OpenTelemetry

So far I know, that Prometheus and InfluxDB do support ingesting data with OpenTelemetry, 
and the process has been straight-forward.

I am looking at trying ou Cortex, VictoriaMetrics and TimescaleDB for the next
project with OpenTelemetry. I will keep the post updated as I make progress.
Please let me know in the comments, if you have experience with any of this
solutions as OpenTelemetry storage backend.

## Comments

<script src="https://utteranc.es/client.js"
        repo="HeinrichHartmann/comments"
        issue-term="title"
        label="Comment"
        theme="github-light"
        crossorigin="anonymous"
        async>
</script>
