import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


import menu from "@/store/modules/menu";
import cart from "@/store/modules/cart";
import products from "@/store/modules/products";


export default new Vuex.Store({

  modules: {
    menu,products,cart
  }
})
