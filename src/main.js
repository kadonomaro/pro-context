import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueMeta from "vue-meta";
import "@/assets/css/style.scss";
import { dateFilter } from "@/filters";
import { createProvider } from "./vue-apollo";
import { metaInfo } from "@/libs/MetaInfo";
import { meta } from "@/meta";

Vue.filter("date", dateFilter);
Vue.use(VueMeta);

metaInfo.set(meta);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  apolloProvider: createProvider(),
  render: (h) => h(App),
}).$mount("#app");
