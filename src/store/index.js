import Vue from 'vue'
import Vuex from 'vuex'
import { user } from "./user"
import { questions } from "./questions"
import { laptops } from "@/store/laptop";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    laptops,
    questions
  }
})