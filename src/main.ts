import { createApp } from 'vue'
import App from '@/App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//@ts-expect-error忽略当前文件ts类型的检测否则有红色提示(打包会失败)
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
// 引入模板的全局的样式
import '@/styles/index.scss'
// svg 插件配置
import 'virtual:svg-icons-register'
// 引入自定义插件对象: 注册整个项目的全局组件
import globalComponent from '@/components/index.ts'
// 引入路由进行注册
import router from '@/router/index'
// 引入 pinia
import pinia from '@/store/index.ts'
const app = createApp(App)

app.use(ElementPlus, {
  locale: zhCn,
})
// 安装 pinia
app.use(pinia)
// 安装自定义插件 会执行里面的 install 方法
app.use(globalComponent)
// 注册路由
app.use(router)
app.mount('#app')
