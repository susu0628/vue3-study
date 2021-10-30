<template>
  <div>
    <router-link to="/home">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/showUser/1234">show1234</router-link>
    <router-link to="/showUser/5678">show5678</router-link>
    <router-view></router-view>
    <svg aria-hidden="true" :style="{width: '30px', height: '30px'}">
      <use xlink:href="#icon-zonglan" />
    </svg>
    <svg aria-hidden="true" :style="{width: '30px', height: '30px'}">
      <use xlink:href="#icon-paihang" />
    </svg>
  </div>
</template>
<script>
export default {
  name: 'Home'
}
</script>