import Vue from "vue";
import VueRouter from "vue-router";
import MainLayout from "../layout/MainLayout";
import Question from "../components/Question";
//import TestInfo from "../components/TestInfo";
import Introduction from "../components/Introduction";
import About from "../components/About";
import Result from "../components/Result";

Vue.use(VueRouter);


export const routes = [
  {
    path: "/result",
    component: Result,
  },
  {
    path: "/",
    name: "home",
    component: MainLayout,
    children: [
      {
        path: "/",
        component: Introduction,
      },
      {
        path: "/about",
        component: About,
      },
      {
        path: "/laptops/start",
        component: Question,
      },
      {
        name: 'question',
        path: "/:level/question/:id",
        component: Question,
      },
    ],
  },
  { path: "*", redirect: "/" },
];
