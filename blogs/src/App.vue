<template>
  <div id="app">
  <div class="post" v-for="post in allPosts" :key="post.id">
    <h2>{{post.title}}</h2>
    <p>{{post.body}}</p>
  </div>
  </div>
</template>

<script>

/*Для того чтобы обратиться к удаленному апи https://jsonplaceholder.typicode.com/posts с помощью vue
* нужно создать асинхронный хук mounted c и с помощью функции fetch передаем урл
* */

import {mapGetters} from "vuex";//импортируем что то из объекта getters
export default {
  name: 'App',
  computed:...mapGetters(['allPosts']),


    /*
    allPosts() {
     return  this.$store.getters.allPosts;//получаем наш allPosts геттер из post.js напрямую !!
    }*/

  async mounted() {

  },
  components: {}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto;
  width: 400px;
}
.post {
  border: 1px solid grey;
  border-radius: 5px;
  margin-bottom: 1rem;
}
</style>
