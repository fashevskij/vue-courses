<template>
  <div>
    <p>Укажите самое маленькое и самое большое число</p>
    <div v-for="(answer,index) in answers">
      <input
        class="form-check-input"
        type="checkbox"
        :value="answer" @input="chek"
      />
      <label class="form-check-label" >
        {{answer}}
      </label>
    </div>
  </div>
</template>

<script>
export default {

  data() {
    return {
      min: 2,
      max: 10,
      answers: [2,4,6,8,10]
    }
  },
  methods: {
    chek(e) {
      let target = e.target.value;
      console.log()
      this.$emit("getChek", target);
    }
  }
};
</script>

