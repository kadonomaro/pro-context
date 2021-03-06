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
        component: () => import(/* webpackChunkName: "articles" */ "../pages/Articles.vue"),
    },
    {
        path: "/news",
        name: "News",
        component: () => import(/* webpackChunkName: "news" */ "../pages/News.vue"),
    },
    {
        path: "/authors",
        name: "Authors",
        component: () => import(/* webpackChunkName: "authors" */ "../pages/Authors.vue"),
    },
    {
        path: "/post/:slug",
        name: "PostDetail",
        component: () => import(/* webpackChunkName: "post-detail" */ "../pages/PostDetail"),
    },
    {
        path: "/news/:slug",
        name: "NewsDetail",
        component: () => import(/* webpackChunkName: "news-detail" */ "../pages/NewsDetail"),
    },
    {
        path: "*",
        name: "Error",
        component: () => import(/* webpackChunkName: "Error" */ "../pages/Error.vue"),
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
