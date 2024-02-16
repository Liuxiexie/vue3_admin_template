// 小仓库
import { defineStore } from 'pinia'
import { loginForm } from '@/api/user/type.ts'
// 引入用户登录的接口
import { reqLogin } from '@/api/user'
// 引入ts类型
import type { loginResponseData } from '@/api/user/type.ts'
import type { UserState } from '@/store/modules/types/type.ts'
// 引入本地存储的工具方法
import { SET_TOKEN, GET_TOKEN } from '@/utils/token.ts'
// 引入路由 (常量路由)
import { constantRoutes } from '@/router/routes.ts'
const useUserStore = defineStore('user', {
  // 存放数据的地方
  state: (): UserState => {
    return {
      token: GET_TOKEN(),
      menuRoutes: constantRoutes,
    }
  },
  // 异步
  actions: {
    async userLogin(data: loginForm) {
      // 登录请求
      const result: loginResponseData = await reqLogin(data)

      if (result.code === 200) {
        // 保存token
        this.token = result.data.token as string
        // 数据持久化处理
        SET_TOKEN(result.data.token as string)
        return 'ok'
      } else {
        return Promise.reject(new Error(result.data.message))
      }
    },
  },
  getters: {},
})

// 对外暴露小仓库
export default useUserStore
