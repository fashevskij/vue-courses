<template>
  <div class="wrapper">
    <div class="container">
      <div class="app">
        <div class="col-sm-8">
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
              :key="index"
              :name="item.name"
              :value="item.value"
              :pattern="item.pattern"
              @changevalue="givs(index, $event)"
            >
            </app-input>
            <br />
            <button
              :disabled="done < info.length"
              type="submit"
              class="btn btn-dark"
              @click="change"
            >
              Submit
            </button>
          </form>
        </div>
        <div class="col-sm-10">
          <table class="table" v-if="!show">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">FirstName</th>
                <th scope="col">LastName</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td v-for="item in info">{{ item.value }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppInput from "./components/Input";
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

<style>
</style>
