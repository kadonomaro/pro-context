import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/css/style.scss";
import { dateFilter } from "@/filters";
import { createProvider } from "./vue-apollo";

Vue.filter("date", dateFilter);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  apolloProvider: createProvider(),
  render: (h) => h(App),
}).$mount("#app");
