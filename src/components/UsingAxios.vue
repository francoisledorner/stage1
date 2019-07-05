<template>
  <div id="myDiv">
    <Plotly :data="donnees" :layout="layout" :display-mode-bar="true"></Plotly>
  </div>
</template>

<script>
import { Plotly } from "vue-plotly";

import axios from "axios";

export default {
  name: "UsingAxios",
  components: {
    Plotly
  },
  data() {
    return {
      donnees: [
        {
          type: "scatter",
          mode: "lines",
          name: "AAPL High",
          x: unpack(rows, "Date"),
          y: unpack(rows, "AAPL.High"),
          line: { color: "#17BECF" }
        },
        {
          type: "scatter",
          mode: "lines",
          name: "AAPL Low",
          x: unpack(rows, "Date"),
          y: unpack(rows, "AAPL.Low"),
          line: { color: "#7F7F7F" }
        }
      ],
      layout: { title: "Basic Time Series" }
    };
  },
  methods: {
    Draw() {
      axios
        .get(
          "https://raw.githubusercontent.com/plotly/datasets/master/finance-charts-apple.csv"
        )
        .then(response => (this.donnees = response.data.donnees))
        .catch(error => console.log(error));
    }
  }
};
</script>