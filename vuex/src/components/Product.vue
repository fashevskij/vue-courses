<template>
  <div>
    <h3>Prodict title</h3>
    <div class="price">стоимость товара {{price}} грн</div>

    <hr>
    <button class="btn btn-dark" @click="onMinus">-1</button>
    <button class="btn btn-dark" @click="onPlus">+1</button>
  </div>
</template>

<script >

export default({
  computed: {
    price() {
      return this.$store.getters.price
    },

  },
  methods: {
    onMinus(){
      this.$store.commit('minus');
    },
    onPlus() {
      this.$store.commit('plus');
    }
  }
})
</script>
