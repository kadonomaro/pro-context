import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    filter: {
      tag: "all",
      author: "all",
    },
  },
  mutations: {
    SET_FILTER(state, payload) {
      const keys = Object.keys(payload);
      keys.forEach((key) => {
        state.filter[key] = payload[key];
      });
    },
  },
  actions: {
    setFilter({ commit }, payload) {
      commit("SET_FILTER", payload);
    },
  },
});
