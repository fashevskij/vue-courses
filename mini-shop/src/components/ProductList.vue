<template>
  <div>
  <h2>Products</h2>
  <div class="row">
    <div class="col col-sm-4" v-for="product in products">
      <router-link tag="h3" :to="'/products/' + product.id_product">
        <a>{{product.title}}</a>
      </router-link>
      <div>{{product.price}}</div>
      <button  v-if="inCart.indexOf(product.id_product) ===-1"
          class="btn btn-dark" @click="addToCart(product.id_product)">add to cart</button>
      <button v-else class="btn btn-primary" @click="removeFromCart(product.id_product)">remove to cart</button>
      <div></div>
    </div>
  </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";


export default {

  computed: {
    ...mapGetters('products',{
      products: 'items'
    }),
    ...mapGetters('cart',{
      inCart: 'products'
    })
  },
  methods: {
    ...mapActions('cart', {
      addToCart: 'add',
      removeFromCart: 'remove'
    })
  }
}
</script>

<style scoped>
  .row {
    padding-left: 15px;
  }
  a {
    text-decoration: none;
  }
</style>