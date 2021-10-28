<template>
  <div>{{ valId }}</div>
</template>

<script>
export default {
  props:{
    valId:{
      type: String,
      default: '1'
    }
  },
  created(){
    alert('点之前valId:'+this.valId)
    console.log('this', this)
  },
  methods:{
    showValId(){
      console.log(3333, this.valId)
    }
  }
}
</script>