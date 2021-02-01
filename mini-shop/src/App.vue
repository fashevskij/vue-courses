<template>
  <div id="app">
    <header>
      <div class="container">
        <div class="row">
          <div class="col cik-sm-9">
            <h1>Site</h1>
          </div>
          <div class="col col-sm-3">
            <div class="alert alert-dark">
              <div>In Cart: {{count}}</div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <section>
      <div class="container">
        <div class="row">
          <div class="col col-sm-3 menu">
            <ul class="list-group">
              <router-link v-for="(item, index) in menuList" :key="index"
                           :to="item.url" tag="li" class="list-group-item"
                           exact-active-class="active">
                <a href="">{{ item.text }}</a>
              </router-link>
            </ul>
          </div>
          <div class="col col-sm-9">
            <transition name="side" mode="out-in">
            <router-view></router-view>
            </transition>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  computed: {
    ...mapGetters('menu', {//выбираем модуль menu
      menuList: 'items'// menuList получается равен массиву items
    }),
    ...mapGetters('cart', {
      count: 'cnt'
    })
  }
}
</script>

<style>
.list-group-item {
  transition: background 0.5s, color 0.5s;
}

.list-group-item a {
  text-decoration: none;
}

.list-group-item.active a {
  color: ghostwhite;

}
.side-enter {

}
.side-enter-active {
  animation: sideIn 0.5s;
}
.side-enter-to {

}
.side-leave {

}
.side-leave-active {

}
.side-leave-to {
  animation: sideOut 0.5s;
}
@keyframes sideIn{
  0% {
    transform: scale(0);
  }
  25% {
    transform: scale(0.25);
  }
  50% {
    transform: scale(0.5);
  }
  75% {
    transform: scale(0.75);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes sideOut{
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(0.75);
  }
  50% {
    transform: scale(0.5);
  }
  75% {
    transform: scale(0.25);
  }
  100% {
    transform: scale(0);
  }
}
</style>
