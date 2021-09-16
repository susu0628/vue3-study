<template>
  <div>{{obj.name}}--{{obj.age}}</div>
  <button @click="changeName">change Name</button>
  <button @click="changeAge">change Age</button>
</template>
<script>
import { reactive, watch } from 'vue'
export default {
  setup() {
    let obj = reactive({
      name: 'tlp',
      age: 18
    })
    const changeName = () => {
      obj.name = `jiangsusu` + parseInt((Math.random() + 1) * 100)
    }
    const changeAge = () => {
      obj.age++
    }
    /**
     * 侦听单个数据源，
     * 1. 传入一个getter函数，返回一个可响应式的对象（比如reactive或者ref）
     * 2. 直接写入一个可响应式的对象，reactive或者ref（比较常用的是ref）；
     */
    // 
    // watch(() => obj.name, (newVal) => {
    //   console.log(newVal)
    // })
    // watch(obj, (newVal) => {
    //   console.log('newVal',newVal)
    // })

    watch()
    return {
      obj,
      changeName,
      changeAge
    }
  }
}
</script>