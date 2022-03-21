<template>
  <h2>404 not found!!!</h2>
</template>
<script>
export default {
  name: 'NotFound',
  created() {
    console.log(this.$route.params)
  }
}
</script>