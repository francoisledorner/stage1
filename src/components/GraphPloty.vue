<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="callIt()">Click me!</button>
  </div>
</template>

<script>
export default {
  name: "GraphPloty",
  mounted() {},
  data() {
    return {
      msg: "GraphPloty"
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
