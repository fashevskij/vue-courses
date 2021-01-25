<template>
  <div>
    <p>Сколько будет {{ question }}</p>
    <div v-for="(answer, index) in answers">
      <input
        class="form-check-input"
        type="radio"
        :value="answer"
        @click="chek"
        name="a"
      />
      <label class="form-check-label">
        {{ answer }}
      </label>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      question: "2+2 = ?",
      answers: [2, 4, 6, 8, 10],
    };
  },
  methods: {
    chek(e) {
      let target = e.target.value;
      //console.log(target);
      this.$emit("getAnswer", target);
    },
  },
};
</script>
