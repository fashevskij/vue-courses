import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    show: true,
    info: [
      {
        name: "FirstName",
        value: "",
        pattern: /^[a-zA-Z ]{2,30}$/
      },
      {
        name: "LastName",
        value: "",
        pattern: /^[a-zA-Z ]{2,30}$/
      },
      {
        name: "Email",
        value: "",
        pattern: /.+/
      },
      {
        name: "Phone",
        value: "",
        pattern: /^[0-9]{7,14}$/
      }
    ],

  },
  getters: {

    info(state) {
      return state.info;
    },
    show(state) {
      return state.show;
    }
  },
  mutations: {
    showRes(state) {
      state.show = false
    },
    changeValue(state, value) {
      this.info[index].value = data.value;
      this.controls[index] = data.valid;
      console.log("изменения формы");
      let done = 0;
      for (let i = 0; i < this.controls.length; i++) {
        if (this.controls[i]) {
          done++;
        }
      }
      this.done = done;
    }
  }

});
