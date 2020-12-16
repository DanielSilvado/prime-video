import Vue from "vue";
import Router from "vue-router";
import Login from "@/views/Login.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "*",
      redirect: "/login"
    },
    {
      path: "/",
      redirect: "/login"
    },
    {
      path: "/login",
      component: Login,
      title: "Login"
    }
  ]
});

export default router;
