import Vue from 'vue'
import App from './App.vue';
import Toast from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-sugar.css'

Vue.use(Toast);


import "bootstrap/dist/css/bootstrap.min.css";
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

Vue.config.productionTip = false

import store from "./store";
import router from "./router";

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')

