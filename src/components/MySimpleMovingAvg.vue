<template>
  <div>
    <VuePlotly :data="donnees" :layout="layout" :options="options"></VuePlotly>
    <VuePlotly :data="donnees2" :layout="layout2" :options="options2"></VuePlotly>
  </div>
</template>

<script>
import VuePlotly from "@statnett/vue-plotly";

import { create, all } from "mathjs";
const config = {};
const math = create(all, config);

import axios from "axios";

export default {
  name: "MySimpleMovingAvg",
  components: {
    VuePlotly
  },
  data() {
    return {
      donnees: [
        {
          x: [-3.84, -2.59, -0.64, 1.87, 4.45, 6.99, 8.68],
          y: [1.26, 2.15, 3.1, 3.36, 2.86, 1.74, 1.2]
        }
      ],
      layout: { title: "Normal Graph" },
      options: {},
      donnees2: [
        {
          x: [
            math.median(-3.84, -2.59, -0.64),
            math.median(1.87, 4.45),
            math.median(6.99, 8.68)
          ],
          y: [
            math.median(1.26, 2.15, 3.1),
            math.median(3.36, 2.86),
            math.median(1.74, 1.2)
          ]
        }
      ],
      layout2: { title: "Simple Moving Average" },
      options2: {}
    };
  }
};
</script>


<style scoped >
input[type="text"] {
  width: 300px;
}
input {
  padding: 6px;
}
body,
html,
input {
  font-family: sans-serif;
  font-size: 11pt;
}
form {
  margin: 20px 0;
}
</style>
