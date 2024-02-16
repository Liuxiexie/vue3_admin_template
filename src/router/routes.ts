// 对外暴露配置路由 (常量路由)
export const constantRoutes = [
  {
    // 登录
    path: '/login',
    component: () => import('@/views/login/index.vue'), // 懒加载
    name: 'login', // 命名路由 (以后做权限需要)
    meta: {
      title: '登录', // 菜单标题
      hidden: true,
      icon: 'Compass',
    },
  },
  {
    // 登录成功以后展示数据的路由
    path: '/',
    component: () => import('@/layout/index.vue'),
    name: 'layout',
    meta: {
      title: 'layout', // 菜单标题
      hidden: false, // 代表路由的标题在菜单中是否隐藏  true: 隐藏 false: 不隐藏
      icon: 'Switch',
    },
    children: [
      {
        path: '/home',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: '首页', // 菜单标题
          hidden: false,
          icon: 'HomeFilled',
        },
      },
    ],
  },
  {
    path: '/404',
    component: () => import('@/views/404/index.vue'),
    name: '404',
    meta: {
      title: '404', // 菜单标题
      hidden: true,
      icon: 'TurnOff',
    },
  },
  {
    path: '/:pathMatch(.*)*', // 匹配所有内容
    redirect: '/404',
    name: 'Any',
    meta: {
      title: '任意', // 菜单标题
      hidden: true,
      icon: 'MuteNotification',
    },
  },
]
