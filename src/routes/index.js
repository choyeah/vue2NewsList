import Vue from "vue";
import VueRouter from "vue-router";

import ItemView from "../views/ItemView.vue";
import UserView from "../views/UserView.vue";
import NewsView from "../views/NewsView.vue";
import AskView from "../views/AskView.vue";
import JobsView from "../views/JobsView.vue";

import bus from "../utils/bus.js";
//import CreateListView from "../views/CreateListView.js";

import { store } from "../store/index";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/news",
    },
    {
      name: "news",
      path: "/news",
      //component: CreateListView("News"),
      component: NewsView,
      beforeEnter(to, from, next) {
        bus.$emit("start:spinner");
        store.dispatch("FETCH_LIST", { data: to.name });
        next();
      },
    },
    {
      name: "ask",
      path: "/ask",
      //component: CreateListView("Ask"),
      component: AskView,
      beforeEnter(to, from, next) {
        bus.$emit("start:spinner");
        store.dispatch("FETCH_LIST", { data: to.name });
        next();
      },
    },
    {
      name: "jobs",
      path: "/jobs",
      //component: CreateListView("Jobs"),
      component: JobsView,
      beforeEnter(to, from, next) {
        bus.$emit("start:spinner");
        store.dispatch("FETCH_LIST", { data: to.name });
        next();
      },
    },
    {
      path: "/item/:id",
      component: ItemView,
    },
    {
      path: "/user/:id",
      component: UserView,
    },
  ],
});
