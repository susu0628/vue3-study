<template>
  <button @click="changeInfo1">改变基本对象readonly1</button>
  <button @click="changeReadonly2">改变reactive对象readonly2</button>
  <div>{{ readonly3.name }}</div>
  <button @click="changeReadonly3">改变reactive对象readonly3</button>
</template>
<script>
import { reactive, readonly, ref } from "vue";
export default {
  setup() {
    const info = { name: "jiangsusu", age: 18 };
    const readonly1 = readonly(info);
    const readonly2 = readonly(reactive(info));
    const readonly3 = readonly(ref(info));
    console.log("info", readonly1);
    const changeReadonly1 = () => {
      readonly1.name = "tlp";
    };
    const changeReadonly2 = () => {
      readonly2.name = "123123";
    };
    const changeReadonly3 = () => {
      readonly3.value.name = "lalalla";
    };
    return {
      info,
      readonly3,
      changeReadonly1,
      changeReadonly2,
      changeReadonly3,
    };
  },
};
</script>
