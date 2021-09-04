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
    }
    const changeName = () => {
      name.value = 'tlp' + parseInt((Math.random() + 1) *100)
    }
    /**
     * 1. watchEffect传入的函数会被立即执行一次，并且在执行的过程中会收集依赖
     * 2. 只有收集的依赖发生变化时，watchEffect传入的函数才会再次执行
     * 3. 在这个例子中，只有改变年龄时，才会触发
     */
    watchEffect(() => {
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