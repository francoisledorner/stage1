<template>
  <div class="hello">
    <VuePlotly :data="donnees" :layout="layout" :options="options"></VuePlotly>

    <button @click="ButtonPressed()">submit</button>
    <br />
  </div>
</template>

<script>
import VuePlotly from "@statnett/vue-plotly";

import { create, all } from "mathjs";
const config = {};
const math = create(all, config);

export default {
  name: "GraphPloty",
  components: {
    VuePlotly
  },
  data() {
    return {
      expression: "",
      donnees: [
        {
          x: [],
          y: [],
          type: "scatter"
        }
      ],
      layout: {},
      options: {}
    };
  },
  methods: {
    range() {},
    ButtonPressed() {
      //TODO appel webservice avec AXIOS
      this.donnees[0].x = [];
      this.donnees[0].y = [];
    }
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
