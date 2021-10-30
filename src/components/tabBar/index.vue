<template>
  <div class="page">
    <div class="router-view">
      <router-view/>
    </div>
    <div class="tabbar-container">
      <div v-for="tab in tabBar" :key="tab.text">
        <router-link :to="tab.path" v-slot="{isActive, navigate}" custom>
          <div class="tabbar-box" @click="navigate">
            <div>
              <color-icon :use="isActive ? tab.activeIcon : tab.icon" />
            </div>
            <div :style="{ color: isActive ? '#f75f47' : ''}">
              {{tab.text}}
            </div>
          </div>
        </router-link>
        
      </div>
    </div>
  </div>
</template>
<script>
import ColorIcon from "./components/ColorIcon.vue"
export default {
  name: 'TabBar',
  components: {
    ColorIcon
  },
  data() {
    return {
      tabBar: [
        {
          path: '/home',
          text: '总览',
          icon: 'icon-zonglan1',
          activeIcon: 'icon-zonglan',
        },
        {
          path: '/about',
          text: '排行',
          icon: 'icon-paihang',
          activeIcon: 'icon-paihang1'
        },
        {
          path: '/showUser/123',
          text: '账单',
          icon: 'icon-zhangdan',
          activeIcon: 'icon-zhangdan1'
        }
      ]
    }
  }
}
</script>
<style scoped>
.page {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.router-view {
  flex: 1;
}
.tabbar-container {
  display: flex;
  height: 88px;
}
.tabbar-box {
  width: calc(100vw / 3);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 16px;
}
</style>