import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    redirect: '/home'  // redirect -> 重定向到home路由
  },
  {
    path: '/home',
    // 这种导入component组件时，会自动分包
    component: () => import('/src/components/vueRouter/components/Home.vue'),
    children: [
      {
        path: '/category',
        component: () => import('/src/components/vueRouter/components/Category.vue')
      },
      {
        path: '/news',
        component: () => import('/src/components/vueRouter/components/News.vue')
      }
    ]
  },
  {
    path: '/about',
    component: () => import('/src/components/vueRouter/components/About.vue')
  },
  {
    path: '/showUser/:userId',
    component: () => import('/src/components/vueRouter/components/showUser.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('/src/components/vueRouter/components/NotFound.vue')
  },
]

const router = createRouter({
  routes,
  history: createWebHistory()
  // history: createWebHashHistory()
})
export default router;