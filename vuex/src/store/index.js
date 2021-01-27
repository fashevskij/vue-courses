import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    cnt: 1,
    price: 200
  },
  getters: {
    cnt(state){
      return state.cnt
    },
    price(state) {
      return state.price
    },
    total(state){
      return state.cnt * state.price;
    }
  },

  mutations: {
    minus(state) {
      if (state.cnt > 1) {
        state.cnt--;
      }
    },
    plus(state) {
      state.cnt++;
    }
  }
});
