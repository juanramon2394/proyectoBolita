/* eslint-disable */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import "roboto-fontface/css/roboto/roboto-fontface.css";
import "@fortawesome/fontawesome-free/css/all.css";
import i18n from './i18n'
import {
  moneySign,
  rounded2,
  to12hFormat
} from "@/utils/filters";

Vue.config.productionTip = process.env.NODE_ENV === "production";

Vue.filter('rounded2', rounded2);

Vue.filter('moneySign', moneySign);

Vue.filter('to12hFormat', to12hFormat);

new Vue({
  router,
  vuetify,
  i18n,
  render: h => h(App)
}).$mount("#app");
