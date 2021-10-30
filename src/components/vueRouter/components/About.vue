<template>
  <div>
    About Page
    <p>来源于：{{$route.query.source}}</p>
  </div>
</template>
<script>
export default {
  name: 'About',
  created() {
    console.log(this.$route.query.source)
  }
}
</script>