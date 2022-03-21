<template>
  <div>
    Home Page
    <router-link to="/category">
      <button>category</button>
    </router-link>
    <router-link to="/news">
      <button>news</button>
    </router-link>
    <button @click="toAboutPage">to About</button>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'Home',
  methods: {
    toAboutPage() {
      this.$router.push({
        path: '/about',
        query: {
          source: 'Home page'
        }
      })
    }
  }
}
</script>