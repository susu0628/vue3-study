<template>
  <my-input v-model="message" v-model:checked="checked" />
  {{ message }} - {{ checked }}
</template>
<script>
import MyInput from "./myInput.vue";
export default {
  data: () => {
    return {
      message: "",
      checked: false,
    };
  },
  components: {
    MyInput,
  },
};
</script>
<style lang="sass" scoped></style>
