<template>
  <div id="myDiv">
    <Plotly data="donnees" layout="layout" display-mode-bar="true"></Plotly>
  </div>
</template>
  <script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
<script>
import { Plotly } from "vue-plotly";

export default {
  name: "JouerAvecPlotly",
  components: {
    Plotly
  },
  data() {
    return {
      donnees: [
        {
          x: this.getX(),
          y: this.getY(),
          type: "bar"
        }
      ]
    };
  },
  methods: {
    getX() {
      return ["giraffes", "orangutans", "monkeys"];
    },
    getY() {
      return [20, 14, 23];
    }
  }
};
</script>

<style scoped>
</style>
