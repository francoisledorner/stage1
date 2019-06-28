<template>
  <div>
    <HelloWorld></HelloWorld>
    <Graph/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Graph from "@/components/Graph.vue";

export default {
  name: "home",
  components: { HelloWorld, Graph }
};
</script>
