<template>
<div>
  <h2>Page not found</h2>
  <hr>
  <router-link :to="{name: 'products'}">Start from main page</router-link>
</div>
</template>

<script>
//для формирования умной ссылки для перехода между страницами из роутера
/*
* <router-link to="/products">Start from main page</router-link>
*<router-link :to="{name: 'products'}">Start from main page</router-link>
* обе аналогичны за исколючением что в первой мы передаем ссылку а второй js выражение
* (второй вариант предпочтительней)
* */
export default {
  name: "E404"
}
</script>

<style scoped>

</style>