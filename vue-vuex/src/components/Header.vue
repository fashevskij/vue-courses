<template>
  <header>
    <div class="container">
      <div class="row">
        <h1>Site</h1>
        <h2 v-if="!show">Спасибо за оформение заявки {{firstName.value}}</h2>
        <app-input></app-input>
      </div>
    </div>
  </header>
</template>

<script>
import AppInput from "./Input";
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(['info','show']),
    firstName(){
      return this.$store.getters.info[0]
    }
  },
  components: {
    AppInput,
  },
};
</script>
