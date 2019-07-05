<template>
  <div id="app">
    <div id="nav">
      <div class="container">
        |
        <router-link class="btn1" to="/">Home</router-link>|
        |
        <router-link class="btn2" to="/MyTable">MyTable</router-link>|
        |
        <router-link class="btn3" to="/GraphPloty">GraphPlotly</router-link>|
        |
        <router-link class="btn4" to="/GraphWebservice">Graph - Webservice</router-link>|
        |
        <router-link class="btn3" to="/MySimpleMovingAvg">Graph - SMA</router-link>|
        |
        <router-link class="btn2" to="/JouerAvecPlotly">Jouer avec Plotly</router-link>|
        |
        <router-link class="btn1" to="/about">About</router-link>|
      </div>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 10px;
}

#nav a {
  font-weight: bold;
  color: #ffffff;
}

#nav a.router-link-exact-active {
  color: #000000;
}

.container {
  text-align: center;
}

.btn {
  border: none;
  margin: 20px;
  padding: 24px;
  width: 220px;
  font-family: "montserrat", sans-serif;
  text-transform: uppercase;
  border-radius: 6px;
  cursor: pointer;
  color: #fff;
  background-size: 200%;
  transition: 0.6s;
}

.btn1 {
  background-image: linear-gradient(to left, #ffc312, #ee5a24, #ffc312);
}

.btn2 {
  background-image: linear-gradient(to left, #c4e538, #009432, #c4e538);
}

.btn3 {
  background-image: linear-gradient(to left, #12cbc4, #0652dd, #12cbc4);
}

.btn4 {
  background-image: linear-gradient(to left, #fda7df, #9980fa, #fda7df);
}

.btn:hover {
  background-position: right;
}
</style>
