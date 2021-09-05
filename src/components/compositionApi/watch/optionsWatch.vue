<template>
  <h2>{{obj.name}}--{{obj.age}}--{{obj.friends.name[0]}}</h2>
  <button @click="changeFriendsName">改变friends的name</button>
</template>
<script>
import { reactive, watch } from 'vue'
export default {
  setup() {
    let obj = reactive({
      name: 'jiang',
      age: 18,
      friends: {
        name: ['tlp']
      }
    })
    watch(obj, (newVal) => {
      console.log('newVal', newVal)
    }, {
      immediate: true
    })
    const changeFriendsName = () => {
      obj.friends.name[0] = 'peiqi' 
    }
    return {
      obj,
      changeFriendsName
    }
  }
}
</script>