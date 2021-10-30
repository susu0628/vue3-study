<template>
  <div>
    <router-link to="/home">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/showUser/1234">show1234</router-link>
    <router-link to="/showUser/5678">show5678</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'Home'
}
</script>