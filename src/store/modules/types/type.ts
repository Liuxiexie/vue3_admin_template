import type { RouteRecordRaw } from 'vue-router'
// 定义小仓库数据的ts类型
export interface UserState {
  token: string | null
  menuRoutes: RouteRecordRaw[]
}
