<template>
  <div class="form-group">
    <label class="col-sm-2 col-form-label"
      >{{ info[index].name }}
      <i class="" v-if="activflags" :class="validclass"></i>
    </label>
    <input type="text" class="form-control" @input="change" />
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  props:['index'],
  computed: {
    ...mapGetters(['info']),
    validclass() {
      return this.info[this.index].pattern.test(this.info[this.index].value)
        ? "bi bi-check-circle-fill"
        : "bi bi-exclamation-circle-fill";
    },
    activflags() {
      return this.info[this.index].value != ""
    }
  },
  methods: {
    change(e) {
      /*console.log(e);
					console.log(e.target);
					console.log(e.target.value)
					console.log(e.data);
          console.log(this);*/
          console.log('изменение инпута')
      this.$emit("changevalue", {
        value: e.target.value,
        valid: this.info[this.index].pattern.test(e.target.value)
      }); //запускаю событие с помощью емит с названием changeValue и аргументом e.target.value
    },
  },
};
</script>
