import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";



Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/bolita",
    name: "bolita",
    component: () => import("@/views/Principal.vue"),
    meta: {
      requiresLogged: true
    }
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;