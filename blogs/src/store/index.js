import Vue from 'vue'
import post from "@/store/modules/post";
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

    //подключаем из import post from "@/store/modules/post";
    modules:  {
    post
    }
})