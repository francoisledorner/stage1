<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="callIt()">Click me!</button>

    <Plotly :data="donnees" :layout="layout" :display-mode-bar="false"></Plotly>
  </div>
</template>

<script>
import { Plotly } from "vue-plotly";
import mathjs from "import";

export default {
  name: "GraphPloty",
  components: {
    Plotly
  },
  data() {
    return {
      donnees: [
        {
          x: [1, 2, 3, 4],
          y: [10, 15, 13, 17],
          type: "scatter"
        }
      ],
      layout: {
        title: "My graph"
      }
    };
  },
  methods: {
    callIt() {
      this.msg = "text";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
