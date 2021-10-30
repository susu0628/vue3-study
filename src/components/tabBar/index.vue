<template>
  <div class="page">
    <div class="router-view">
      <router-view/>
    </div>
    <div class="tabbar-container">
      <div v-for="tab in tabBar" :key="tab.text">
        <!-- custom 表示元素要自定义，如果不写，会用a元素包裹 -->
        <!-- 作用域插槽 v-slot 可以获取内部传递给我们的一些值 eg：isActive：是否匹配的状态 navigate：触发导航的函数-->
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