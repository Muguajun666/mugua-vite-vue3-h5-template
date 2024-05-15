import type { RouteRecordRaw } from 'vue-router'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    redirect: 'home',
    meta: {
      title: '首页',
      keepAlive: false
    },
    // component: Layout
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/HomeView.vue'),
        meta: { title: '首页', keepAlive: false, showTab: true }
      },
      {
        path: '/about',
        name: 'About',
        component: () => import('@/views/AboutView.vue'),
        meta: { title: '关于', keepAlive: false, showTab: true }
      }
    ]
  }
]
