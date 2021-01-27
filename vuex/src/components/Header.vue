<template>
  <header>
    <div class="container">
      <div class="row">
        <h1>Site</h1>
        <app-cart></app-cart>
      </div>
    </div>
  </header>
</template>

<script>
import AppCart from "./Cart";
export default {
 
  components: {
    AppCart,
  },
};
</script>
