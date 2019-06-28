<template>
  <div class="hello">
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
          x: this.getX(),
          y: this.getY(),
          type: "scatter"
        }
      ],
      layout: {
        title: "My graph"
      }
    };
  },
  methods: {
    getX() {
      return [10, 15, 13, 17];
    },
    getY() {
      return [10, 15, 13, 17];
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
