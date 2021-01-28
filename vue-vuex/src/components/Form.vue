<template>
  <div>
    <form v-if="show" v-on:submit.prevent>
      <br />
      <div class="progress">
        <div
          class="progress-bar"
          role="progressbar"
          aria-valuenow="width"
          aria-valuemin="0"
          :style="styleProg"
          aria-valuemax="100"
        ></div>
      </div>
      <app-input
        v-for="(item, index) in info"
        :key="index" :index='index'
        @changevalue="givs(index, $event)"
      >
      </app-input>
      <br />
      <button
        :disabled="done < info.length"
        type="submit"
        class="btn btn-dark"
        @click="showRes"
      >
        Submit
      </button>
    </form>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import {mapMutations} from 'vuex'
import AppInput from './Input'
export default {
  data() {
    return {
      controls: [],
      done: 0
    }
  },
  components: {
    AppInput
  },
  computed: {
    ...mapGetters(['info','show']),
    styleProg() {
      console.log('прогбар')
      return {
        width: (100 / this.info.length) * this.done + "%"
      }
    }
  },
   methods: {
     ...mapMutations(['showRes']),
    
  },

  beforeMount() {
    for (let i = 0; i < this.info.length; i++) {
      this.controls.push(false);
    }
  },
}
</script>
