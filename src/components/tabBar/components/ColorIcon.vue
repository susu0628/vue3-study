<template>
  <svg class="icon" aria-hidden="true">
    <use :xlink:href="`#${use}`" />
  </svg>
</template>
<script>
export default {
  name: 'ColorIcon',
  props: ['use']  
}
</script>
<style scoped>
.icon {
  width: 30px;
  height: 30px;
}
</style>