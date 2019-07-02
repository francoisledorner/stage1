<template>
  <div class="hello">
    <VuePlotly :data="donnees" :layout="layout" :options="options"></VuePlotly>
    <label>
      Enter an equation -
      example: (4 * sin(x) + 5 * cos(x/2)):
    </label>
    <input type="text" v-model="expression" placeholder="enter equation here" required />
    <button @click="ButtonPressed()">submit</button>
    <br />
    {{expressionWatched}}
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
      options: {},

      expressionWatched: ""
    };
  },
  watch: {
    expression(val) {
      this.expressionWatched = val;
    }
  },
  methods: {
    range() {},
    getX() {
      return math.range(-10, 10, 0.1).toArray();
    },
    getY() {
      let me = this;
      return this.getX().map(valX => {
        return me.mathjsCompliled.evaluate({ x: valX });
      });
    },
    ButtonPressed() {
      this.mathjsCompliled = math.compile(this.expression);
      this.donnees[0].x = this.getX();
      this.donnees[0].y = this.getY();
      console.log("working");

      /*
      this.donnees[0].x = [30, 40];
      this.donnees[0].y = [30, 20];
      */
      /*
      this.donnees[0] = {
        x: me.getX(),
        y: me.getY(),
        type: "scatter"
      };
      */
      /*
      this.donnees[0] = {
        x: [],
        y: [],
        type: "scatter"
        */
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
