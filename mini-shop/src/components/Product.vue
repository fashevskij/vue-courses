<template>
  <div class="alert alert-dark">
    <router-link :to="{ name: 'products'}">Back to products</router-link>
    <h1>{{product.title}}</h1>
    {{product.price}} UAH
  </div>
</template>

<script>
export default {
  computed: {
    id() {
      return this.$route.params.id
    },
    product(){
      return this.$store.getters['products/item'](this.id);
    }
  }
}
</script>

<style scoped>

</style>