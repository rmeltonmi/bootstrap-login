import Vue from "vue";
import Router from "vue-router";
import Login from "../components/Login";
import Logout from "../components/Logout";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: () => import("../components/HelloWorld.vue")
    },
    {
      path: "/login",
      component: Login
    },
    {
      path: "/logout",
      component: Logout
    }
  ]
});
