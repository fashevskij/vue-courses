<template>
  <div>
    {{ cnt }}
    <div class="total">и того: {{total}} грн</div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {

  computed: mapGetters(['cnt', 'total'])
  /*
    total(){
      return this.$store.getters.total
    },
    cnt() {
      return this.$store.getters.cnt;
    },*/


};
</script>
