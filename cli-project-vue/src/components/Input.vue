<template>
  <div class="form-group">
    <label class="col-sm-2 col-form-label"
      >{{ name }}
      <i class="" v-if="activflags" :class="validclass"></i>
    </label>
    <input type="text" class="form-control" @input="change" />
  </div>
</template>

<script>
export default {
  props: ["name", "value", "pattern"],
  data() {
    return {
      activflags: this.value != "",
    };
  },
  computed: {
    validclass() {
      return this.pattern.test(this.value)
        ? "bi bi-check-circle-fill"
        : "bi bi-exclamation-circle-fill";
    },
  },
  methods: {
    change(e) {
      /*console.log(e);
					console.log(e.target);
					console.log(e.target.value)
					console.log(e.data);
					console.log(this);*/
      this.activflags = true;
      this.$emit("changevalue", {
        value: e.target.value,
        valid: this.pattern.test(e.target.value),
      }); //запускаю событие с помощью емит с названием changeValue и аргументом e.target.value
    },
  },
};
</script>
