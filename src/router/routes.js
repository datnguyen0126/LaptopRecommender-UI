import Vue from "vue";
import VueRouter from "vue-router";
import MainLayout from "../layout/MainLayout";
import Question from "../components/Question";
import Introduction from "../components/Introduction";
import About from "../components/About";
import Result from "../components/Result";

Vue.use(VueRouter);


export const routes = [
  {
    path: "/about",
    component: About,
  },
  {
    path: "/result",
    component: Result,
  },
  {
    path: "/",
    component: Introduction,
  },
  {
    path: "/",
    name: "home",
    component: MainLayout,
    children: [
      {
        name: 'question',
        path: "/:level/question/:id",
        component: Question,
      },
    ],
  },
  { path: "*", redirect: "/" },
];
