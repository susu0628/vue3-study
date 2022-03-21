<template>
  <div>
    <h2>插槽Demo</h2>
  </div>
</template>
<script>
import ScopeSlot from "./scopeSlot.vue"
export default {
  name: 'SlotDemo',
  data: () => {
    return {
      person: {
        lastName: 'susu',
        firstName: 'jiang'
      }
    }
  },
  components: {
    ScopeSlot
  }
}
</script>