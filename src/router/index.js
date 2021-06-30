import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../pages/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/posts",
    name: "Articles",
    component: () =>
      import(/* webpackChunkName: "articles" */ "../pages/Articles.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../pages/About.vue"),
  },
  {
    path: "/post/:slug",
    name: "PostDetail",
    component: () =>
      import(/* webpackChunkName: "post-detail" */ "../pages/PostDetail"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
