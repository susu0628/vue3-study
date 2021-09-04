<template>
  <div>
    {{name}} -- {{age}}
  </div>
  <button @click="changeAge">改变年龄</button>
  <button @click="changeName">改变姓名</button>
</template>
<script>
import { ref, watchEffect } from 'vue'
export default {
  setup() {
    let name = ref('jiang')
    let age = ref(18)
    const changeAge = () => {
      age.value++
      // 当年龄达到25岁时，停止侦听
      if (age.value > 25) {
        stopEffect()
      }
      
    }
    const changeName = () => {
      name.value = 'tlp' + parseInt((Math.random() + 1) *100)
    }
    // watchEffect返回一个函数，停止侦听时调用即可
    const stopEffect = watchEffect(() => {
      console.log(age.value)
    })
    return {
      name, 
      age,
      changeAge,
      changeName
    }
  }
}
</script>