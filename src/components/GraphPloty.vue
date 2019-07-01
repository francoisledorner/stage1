<template>
  <div class="hello">
    <Plotly :data="donnees" :layout="layout" :display-mode-bar="false"></Plotly>
    <label for="eq">Enter an equation(4 * sin(x) + 5 * cos(x/2)):</label>
    <input type="text" v-model="expression" />
    <button @click="callIt()">submit</button>
  </div>
</template>

<script>
import { Plotly } from "vue-plotly";
//import mathjs from "mathjs";
//import { evaluate } from "mathjs";

export default {
  name: "GraphPloty",
  components: {
    Plotly
  },
  data() {
    return {
      expression: "x",
      mathjsCompliled: null,
      donnees: [
        {
          x: [1, 2],
          y: [2, 1],
          type: "scatter"
        }
      ],
      layout: {
        title: "My graph"
      }
    };
  },
  methods: {
    range() {},
    getX() {
      return [1, 4, 8, 24]; //mathjs.range(-10, 10, 0.5).toArray();
    },
    getY() {
      let me = this;
      return this.getX().map(valX => {
        return valX * 2;
        //return me.mathjsCompliled.evaluate({ x: valX });
      });
    },
    callIt() {
      //this.mathjsCompliled = mathjs.compile(this.expression);
      //this.donnees.x = this.getX();
      //this.donnees.y = this.getY();
      console.log("hello");
      let me = this;
      this.donnees[0] = {
        x: me.getX(),
        y: me.getY(),
        type: "scatter"
      };
      this.donnees[1] = {
        x: [30, 40],
        y: [30, 20],
        type: "scatter"
      };
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
