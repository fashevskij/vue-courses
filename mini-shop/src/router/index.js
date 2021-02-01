import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

import ProductList from "@/components/ProductList";
import Product from "@/components/Product";
import Cart from "@/components/Cart";
import E404 from "@/components/E404";
import store from "@/store";

const routes = [
  {
    path: '',
    redirect: {name: 'products'}//при переходе на главную используем редирект
  },
  {
    name: 'products',//уникальное имя роута при необходимости
    path: '/products',//путь url
    component: ProductList,
    beforeEnter(from, to, next){
      store.dispatch('products/loadItems');
      next();
    }

  },
  {
    path: '/cart',
    component: Cart
  },
  {//создаем путь для страницы самого выбраного товара где :id это что угодно
    path: '/products/:id',//
    component: Product//подклчаем компонент
  },
  {
    path: '*',//если роутер ничего не словил
    component: E404
  },
]

const router = new VueRouter({
  routes,
  mode: "history"//
})

export default router
