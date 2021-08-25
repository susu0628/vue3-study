<template>
  <div>
    <input v-model="finalValue" />
    <input type="checkbox" v-model="finalChecked" />{{ finalChecked }}
  </div>
</template>
<script>
export default {
  name: "MyInput",
  data: () => {
    return {};
  },
  computed: {
    finalValue: {
      set(value) {
        this.$emit("update:modelValue", value);
      },
      get() {
        return this.modelValue;
      },
    },
    finalChecked: {
      set(value) {
        this.$emit("update:checked", value);
      },
      get() {
        return this.checked;
      },
    },
  },
  props: ["modelValue", "checked"],
  emits: ["update:modelValue", "update:checked"],
};
</script>
<style lang="sass" scoped></style>
