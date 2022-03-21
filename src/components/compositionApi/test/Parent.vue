<template>
  <children :valId='valId' ref="child"/>
  <div>{{'parent:'+valId}}</div>
  <button @click="changeValId">点我</button>
</template>

<script>
import children from './Children.vue'
export default {
  components:{ children },
  data(){
    return {
      valId: '1',
    }
  },
  methods:{
    changeValId(){
      this.valId = '2'
      this.$nextTick(() => {
        this.$refs.child.showValId()
      })
      
    }
  }
}
</script>