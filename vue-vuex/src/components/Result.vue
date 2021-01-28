<template>
  <div v-if="!show">
    <table class="table" >
      <thead>
        <tr>
          <th scope="col" v-for="title in info">{{title.name}}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td v-for="item in info">{{ item.value }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

import AppHeader from './Header'
export default {
  components: {
    AppHeader

  },
  computed: {
    ...mapGetters(['info','show']),
  }
}
</script>
