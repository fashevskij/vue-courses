<template>
  <div>
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
    <form action="">
      <app-input  v-for="(item, index) in info"
                  :key="index"
                  :name="item.name"
                  :value="item.value"
                  :pattern="item.pattern"
                  @changevalue="givs(index, $event)"></app-input>
      <button class="btn btn-dark"  :disabled="done < info.length"
              type="submit"
              @click="change">Ordering</button>
    </form>
  </div>
</template>

<script>
import AppInput from "./Input";
export default {
  data() {
    return {
      show: true,
      info: [
        {
          name: "FirstName",
          value: "",
          pattern: /^[a-zA-Z ]{2,30}$/,
        },
        {
          name: "LastName",
          value: "",
          pattern: /^[a-zA-Z ]{2,30}$/,
        },
        {
          name: "Email",
          value: "",
          pattern: /.+/,
        },
        {
          name: "Phone",
          value: "",
          pattern: /^[0-9]{7,14}$/,
        },
      ],
      controls: [],
      done: 0,
    };
  },
  methods: {
    givs(index, data) {
      this.info[index].value = data.value;
      this.controls[index] = data.valid;

      let done = 0;
      for (let i = 0; i < this.controls.length; i++) {
        if (this.controls[i]) {
          done++;
        }
      }
      this.done = done;
    },
    change() {
      this.show = false;
    },
  },
  computed: {
    styleProg() {
      return {
        width: (100 / this.info.length) * this.done + "%",
      };
    },
  },
  beforeMount() {
    for (let i = 0; i < this.info.length; i++) {
      this.controls.push(false);
    }
  },
  components: {
    'appInput': AppInput,
  },
};
</script>


<style scoped>

</style>