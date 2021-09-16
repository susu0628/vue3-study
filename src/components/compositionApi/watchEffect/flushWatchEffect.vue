<template>
  <h2 ref="hRef">hahahha</h2>
</template>
<script>
import { ref, watchEffect } from 'vue'
export default {
  setup() {
    let hRef = ref(null)
    /**
     * flush 默认值是pre 它会在元素 挂载 或者 更新 之前执行
     * 此时会打印两次 
     * post 挂载了之后才会执行
     */
    watchEffect(() => {
      console.log(hRef.value)
    }, {
      flush: 'post'
    })
    return {
      hRef
    }
  }
}
</script>