// 配置路由
import { createRouter, createWebHashHistory } from 'vue-router'
import { constantRoutes } from './routes'
const router = createRouter({
  // 路由模式设置
  history: createWebHashHistory(),
  routes: constantRoutes,
})

export default router
