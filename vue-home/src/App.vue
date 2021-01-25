<template>
  <div class="wrapper">
    <div class="container">
      <div class="app">
        <hr />
        <h1 class="text">Выбирите правильный ответ</h1>
        <hr />
        <app-question-one @getAnswer="setRadio($event)"></app-question-one>
        <hr />
        <hr />
        <app-question-two @getChek="setChek($event)"></app-question-two>
        <hr />
        <div>
          <h1 class="text">Ответы</h1>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Question1</th>
                <th scope="col">Question2</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>{{answer1}}</td>
                <td>
                  <p v-for="ans in answer2">{{ans}}</p></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import AppQuestion1 from "./components/Question1.vue";
import AppQuestion2 from "./components/Question2.vue";

export default {
  data() {
    return{
      answer1: '',
      answer2: []
    }

  },
  components: {
    "app-question-one": AppQuestion1,
    "app-question-two": AppQuestion2,
  },
  methods: {
    setRadio(e) {
      this.answer1 = e;
    },
    setChek(e) {
      this.answer2.push(e);
    }
  }
};
</script>

<style>
.text {
  text-align: center;
  background-color: rgb(216, 250, 250);
}
</style>
