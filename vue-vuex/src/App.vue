<template>
  <div class="wrapper">
    <div class="container">
      <div class="app">
        <app-header></app-header>
        <app-form></app-form>
        <app-result></app-result>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from "./components/Header.vue";
import AppResult from "./components/Result.vue";
import AppForm from "./components/Form.vue";
import AppInput from "./components/Input";
export default {

  components: {
    AppInput,
    AppHeader,
    AppForm,
    AppResult
  },
};
</script>

<style>
</style>
