<template>
  <div>父组件</div>
  <setup-child :message="message" :count="count" @changeCount="changeCount" />
</template>
<script>
import SetupChild from "./setupChild";
export default {
  name: "SetupParent",
  components: {
    SetupChild,
  },
  data() {
    return {
      message: "hello",
      count: 12,
    };
  },
  methods: {
    changeCount() {
      this.count++;
      console.log(this.count);
    },
  },
};
</script>
