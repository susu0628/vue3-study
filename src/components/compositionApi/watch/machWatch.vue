<template>
  <div>{{name}}--{{age}}</div>
  <button @click="changeName">change Name</button>
  <button @click="changeAge">change Age</button>
</template>
<script>
import { ref, watch } from 'vue'
export default {
  setup() {
    let age = ref(18)
    let name = ref('tlp')
    const changeName = () => {
      name.value = 'jiang' + parseInt((Math.random() + 1) * 100)
    }
    const changeAge = () => {
      age.value++
    }
    watch([age, name], ([age, name]) => {
      console.log('newValue', name, age)
    })
    return {
      age,
      name,
      changeName,
      changeAge
    }
  }
}
</script>