<template>
  <div class="hello">
    <VuePlotly :data="donnees" :layout="layout" :options="options"></VuePlotly>
    <label>Enter an equation(4 * sin(x) + 5 * cos(x/2)):</label>
    <input type="text" v-model="expression">
    <button @click="callIt()">submit</button>
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
      expression: "x",
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
    getX() {
      return math.range(-10, 10, 1).toArray();
    },
    getY() {
      let me = this;
      return this.getX().map(valX => {
        return valX * 2;
        return me.mathjsCompliled.evaluate({ x: valX });
      });
    },
    callIt() {
      this.mathjsCompliled = math.compile(this.expression);
      this.donnees[0].x = this.getX();
      this.donnees[0].y = this.getY();
      console.log("hello");

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
        x: [30, 40],
        y: [30, 20],
        type: "scatter"
      };
      */
    },
    call1({ x }) {
      console.log(x);
    },
    call2() {
      this.call1({ x: 3 });
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
