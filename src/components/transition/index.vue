<template>
  <button @click="isShow = !isShow">toggle</button>
  <transition name="fade">
    <div v-if="isShow">lallalalal</div>
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
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateX(20px);
}
</style>
