<template>
  <div>获取动态路由的参数为：{{userId}}</div>
</template>
<script>
import { watchEffect, ref } from 'vue';
import { useRoute } from 'vue-router';
export default {
  name: 'ShowUser',
  data() {
    return {
    }
  },
  // computed: {
  //   userId() {
  //     return this.$route.params.userId
  //   }
  // },
  setup() {
    const route = useRoute();
    const userId = ref('')
    watchEffect(() => {
      userId.value = route.params.userId
    })
    return {
      userId
    }
  }
}
</script>