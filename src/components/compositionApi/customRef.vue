<template>
  <input v-model="count" />
  <h2>{{count}}</h2>
</template>
<script>
// import { ref } from 'vue'
import { useDebounceRef } from './hooks/useDebounceRef'
export default {
  setup() {
    let count = useDebounceRef(0)
    return {
      count
    }
  }
}
</script>
<style scoped>

</style>