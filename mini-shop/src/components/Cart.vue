<template>
  <div>
    <h2>Cart</h2>
    <hr>
    <div class="alert alert-warning" v-if="empty">
      Your cart is empty
    </div>
    <template v-else>
    <table  class="table table-bordered">
      <thead>
      <tr>
        <th>Title</th>
        <th>Price</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="product in products">
        <td>{{product.title}}</td>
        <td>{{product.price}}</td>
      </tr>
      </tbody>
    </table>
    <button class="btn btn-dark" @click="onOrder">Order Now</button>
    </template>
  </div>
</template>

<script>
import {mapGetters} from "vuex";


export default {
  computed: {
    ...mapGetters('products',{
      productsAll: 'items'
    }),
    ...mapGetters('cart',{
      productsInCart: 'products'
    }),
    products() {
      return this.productsAll.filter((elem) =>{
        return this.productsInCart.indexOf(elem.id_product) !== -1;
      })
    },
    empty() {
      return this.products.length === 0;
    }
  },
  methods: {
    onOrder(){//метод для перехода по на /checkout с помощью у router метод push
      this.$router.push('/checkout');
    }
  }
}
</script>

<style scoped>

</style>