<template>
  <button @click="isShow = !isShow">toggle</button>
  <!-- mode 设置过渡的模式， 有两种取值 out-in 和 in-out -->
  <transition name="bounce" mode="out-in">
    <div v-if="isShow" class="title">lallalalal</div>
    <div v-else>哈哈哈哈哈</div>
  </transition>
</template>
<script>
export default {
  data() {
    return {
      isShow: false,
    };
  },
};
</script>
<style scoped>
.title {
  width: 1rem;
}
.bounce-enter-active {
  animation: bounce-in 1.5s;
}
.bounce-leave-active {
  animation: bounce-in 1.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>
