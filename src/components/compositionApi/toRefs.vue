<template>
  <div>{{ name }}-{{ count }}</div>
  <button @click="changeCount">改变count</button>
</template>
<script>
import { reactive, toRef } from "vue";
export default {
  setup() {
    let info1 = reactive({ name: "jiang", count: 100 });
    // let { name, count } = toRefs(info1);
    const count = toRef(info1, "count");
    const changeCount = () => {
      count.value++;
      console.log(count.value);
    };
    return {
      changeCount,
      name: info1.name,
      count,
    };
  },
};
</script>
