<template>
  <section>
    <div class="container">
      <div class="row">
        <app-product></app-product>
        <hr />
      </div>
      <div class="mb-2">
        <label for="exampleFormControlInput1" class="form-label">Name</label>
        <input
          v-model="name"
          type="email"
          class="form-control"

        />
      </div>
      <div class="mb-2">
        <label for="exampleFormControlInput1" class="form-label">Phone</label>
        <input
          v-model="phone"
          type="email"
          class="form-control"
         
        />
      </div>
      <button class="btn btn-dark" :disabled="btnDisabled" @click="onOrder">
        Купить сейчас {{ orderState }}
      </button>

      <div class="alert alert-primary" role="alert" v-if="showResult">
        Заказ оформлен
      </div>
    </div>
  </section>
</template>

<script>
import AppProduct from "./Product";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      name: "",
      phone: "",
    };
  },
  computed: {
    ...mapGetters(["cnt", "orderState"]),
    btnDisabled() {
      return this.cnt < 1 || this.orderState !== null;
    },
    showResult() {
      return this.orderState == "done";
    },
  },
  components: {
    AppProduct,
  },
  methods: {
    onOrder() {
      this.$store.dispatch("sendOrder", {
        name: this.name,
        phone: this.phone,
      });
    },
  },
};
</script>

<style scoped>
.alert {
  margin: 20px;
  width: 300px;
  text-align: center;
}
</style>
