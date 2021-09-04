<template>
  <h2>{{count}}--{{name}}</h2>
  <button @click="changeAge">改变Age</button>
</template>
<script>
import { ref, watchEffect } from 'vue'
export default {
  setup() {
    let count = ref(18)
    let name = ref('jiang')
    let timer = null
    /**
     * 当副作用即将重新执行 或者 侦听器被停止 时会执行onInvalidate传入的回调函数
     * 所以，我们可以在执行onInvalidate传入的回调函数时，做一些清除的工作
     * eg如下
     * 我们在watchEffect存在一个网络请求（这里使用setTimeout模拟）
     * 当我们上一次网络请求还没有返回时，下一个请求又开始了
     * 此时，我们应该取消掉上一次的请求
     */
    watchEffect((onInvalidate) => {
      console.log('count', count.value)
      timer = setTimeout(() => {
        name.value = 'tlp'
        console.log('name发生了改变')
      }, 2000);
      onInvalidate(() => {
        clearTimeout(timer)
      })
    })
    const changeAge = () => {
      count.value++
    }
    return {
      count,
      name,
      changeAge
    }
  }
}
</script>