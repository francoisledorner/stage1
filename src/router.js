import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import MyTable from "./components/MyTable.vue";
import GraphPloty from "./components/GraphPloty.vue";
import GraphWebservice from "./components/GraphWebservice.vue";
import MySimpleMovingAvg from "./components/MySimpleMovingAvg.vue";
import JouerAvecPlotly from "./components/JouerAvecPlotly.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/MyTable",
      name: "MyTable",
      component: MyTable
    },
    {
      path: "/GraphPloty",
      name: "GraphPloty",
      component: GraphPloty
    },
    {
      path: "/GraphWebservice",
      name: "GraphWebservice",
      component: GraphWebservice
    },
    {
      path: "/MySimpleMovingAvg",
      name: "MySimpleMoivngAvg",
      component: MySimpleMovingAvg
    },
    {
      path: "/JouerAvecPlotly",
      name: "JoueravecPlotly",
      component: JouerAvecPlotly
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
