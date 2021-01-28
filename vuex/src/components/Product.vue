<template>
  <div>
    <h3>Prodict title</h3>
    <div class="price">стоимость товара {{ price }} грн</div>

    <hr />
    <button class="btn btn-dark" @click="minus">-1</button>
    <button class="btn btn-dark" @click="plus">+1</button>
    <input type="text" :value="cnt" @input="onIput"/>
  </div>
</template>

<script >
import { mapMutations } from "vuex";
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters([
      'price',
      'cnt'
    ]),
    price() {
      return this.$store.getters.price;
    },
  },
  methods: {
    ...mapMutations(["minus", "plus"]),
    /*
    onMinus(){
      this.$store.commit('minus');
    },
    onPlus() {
      this.$store.commit('plus');
    }*/
    onIput(e){
      this.$store.commit('setCnt', e.target.value)
    }
  },
};
</script>
