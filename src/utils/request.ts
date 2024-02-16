// 进行 axois二次封装: 使用请求与响应拦截器

import axios from 'axios'
import { ElMessage } from 'element-plus'

// 第一步: 利用 axios对象的 create 方法, 去创建 axios 实例 (其他配置: 基础路径, 超时时间)
const request = axios.create({
  // 基础路径
  baseURL: import.meta.env.VITE_APP_BASE_API, // 基础路径上会携带 /api
  timeout: 5000, // 超时时间
})

// 第二步: request 实例添加请求和响应拦截器
request.interceptors.request.use((config) => {
  // config 配置对象, headers 属性请求头, 经常给服务器携带公共参数
  // 返回配置对象
  return config
})

// 第三步: 响应拦截器
request.interceptors.response.use(
  (response) => {
    // 成功回调
    // 简化数据
    return response.data
  },
  (error) => {
    // 失败的回调: 处理 http 网络错误
    // 定义一个变量: 存储网络错误信息
    let message = ''
    // http 状态码
    const status = error.response.status
    switch (status) {
      case 401:
        message = 'token 过期'
        break
      case 403:
        message = '无权访问'
        break
      case 404:
        message = '请求地址错误'
        break
      case 500:
        message = '服务器出现问题'
        break
      default:
        message = '网络出现问题'
    }

    // 提示错误信息
    ElMessage({
      type: 'error',
      message,
    })

    return Promise.reject(error)
  },
)

// 对外暴露
export default request
