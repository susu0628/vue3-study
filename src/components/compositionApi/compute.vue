<template>
  <h2>{{firstName}}-{{lastName}}</h2>
  <h2>fullName: {{fullName}}</h2>
  <button @click="changeFullName">改变fullName</button>
</template>
<script>
import { ref, computed } from 'vue'
export default {
  setup() {
    let firstName = ref('jiang')
    let lastName = ref('susu')
    // 1. 接收一个getter函数
    // const fullName = computed(() => `${firstName.value} ${lastName.value}`)
    const changeFullName = () => {
      fullName.value = 'tan liping'
    }
    // 2. 接收一个包含getter/setter函数的对象
    const fullName = computed({
      get() {
        return `${firstName.value} ${lastName.value}`
      },
      set(newVal) {
        const [fname, lname] = newVal.split(' ')
        firstName.value = fname
        lastName.value = lname
      }
    })
    return {
      fullName,
      firstName,
      lastName,
      changeFullName
    }
  }
}
</script>