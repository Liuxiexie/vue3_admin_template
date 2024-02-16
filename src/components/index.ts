import SvgIcon from './SvgIcon/index.vue'

// 引入项目中全部的全局组件
const allGlobalComponent = { SvgIcon }
// 引入全部 element-plus 图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// 对外暴露一个插件对象
export default {
  // 必须叫install
  install(app) {
    // 注册项目全部的全局组件
    Object.keys(allGlobalComponent).forEach((key) => {
      // 注册全局组件
      app.component(key, allGlobalComponent[key])
    })

    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)
    }
  },
}
