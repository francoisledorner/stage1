<template>
  <div>
    <VuePlotly :data="donnees" :layout="layout" :options="options"></VuePlotly>

    <button @click="ButtonPressed()">Draw</button>
  </div>
</template>

<script>
import VuePlotly from "@statnett/vue-plotly";

import { create, all } from "mathjs";
const config = {};
const math = create(all, config);

import axios from "axios";

//X coordinates
const maxX = 20;
const minX = -20;
//Y coordinates
const maxY = 20;
const minY = -20;

export default {
  name: "GraphWebservice",
  components: {
    VuePlotly
  },
  data() {
    return {
      expression: "",
      donnees: null,
      layout: {},
      options: {}
    };
  },
  methods: {
    range() {},
    ButtonPressed() {
      axios
        .get(
          "https://raw.githubusercontent.com/francoisledorner/stage1/master/public/data.json"
        )
        .then(response => (this.donnees = response.data.donnees))
        .catch(error => console.log(error));
    }
  },

  RdmXCoord() {
    let randomXcoord = Math.floor(Math.random() * (+maxX - +minX)) + +minX;
    return randomXcoord;
  },

  RdmYCoord() {
    let randomYcoord = Math.floor(Math.random() * (+maxY - +minY)) + +minY;
    return randomYcoord;
  }
};

/*
JSON.stringify({
  CoordinateX: this.RdmXCoord(),
  CoordinateY: this.RdmYCoord()
});

JSON.parse({
  CoordinateX: this.RdmXCoord(),
  CoordinateY: this.RdmYCoord()
});
*/
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
