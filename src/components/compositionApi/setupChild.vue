<template>
  <div>子组件--{{ count }}</div>
  <button @click="changeParentCount">改变父组件的count</button>
  <div>基本类型num: {{ num }}</div>
  <button @click="increment">子组件num的值+++</button>
  <button @click="decrement">改变子组件num的值---</button>
  <div>引用类型info: {{ info.name }}</div>
  <button @click="changeInfo">子组件改变info</button>
</template>
<script>
// 基本数据类型使用ref  引用类型使用reactive
import { ref, reactive } from "vue";
export default {
  name: "SetupChild",
  props: ["message", "count"],
  emits: ["changeCount"],
  setup(props, { emit }) {
    let num = ref(100);
    let info = reactive({ name: "jiang" });
    const decrement = () => {
      num.value--;
    };
    const increment = () => {
      num.value++;
    };
    const changeParentCount = () => {
      emit("changeCount");
    };
    const changeInfo = () => {
      info.name = props.message;
    };
    return {
      num,
      info,
      changeParentCount,
      changeInfo,
      decrement,
      increment,
    };
  },
};
</script>
