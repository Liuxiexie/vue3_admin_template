<script setup lang="ts">
// 引入logo组件
import Logo from './logo/index.vue'
// 引入菜单组件
import Menu from './menu/index.vue'
// 引入创建 user 仓库的方法
import useUserStore from '@/store/modules/user.ts'
const userStore = useUserStore()
</script>

<template>
  <div class="layout_container">
    <!-- 左侧菜单栏 -->
    <div class="layout_slider">
      <Logo></Logo>
      <!-- 展示菜单 -->
      <!-- 滚动组件 -->
      <el-scrollbar class="scrollbar">
        <el-menu background-color="#001529" text-color="white">
          <Menu :menuList="userStore.menuRoutes"></Menu>
        </el-menu>
      </el-scrollbar>
    </div>
    <!-- 顶部导航栏 -->
    <div class="layout_tabBar">222</div>
    <!-- 内容展示区 -->
    <div class="layout_main">
      <p style="height: 10000px; background-color: #ff00001c">我是内容</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.layout_container {
  width: 100%;
  height: 100vh;
  color: white;
  .layout_slider {
    width: $base-menu-width;
    height: 100vh;
    background-color: $base-menu-background;
    .scrollbar {
      height: calc(100vh - $base-menu-logo-height);
    }
  }
  .layout_tabBar {
    width: calc(100% - $base-menu-width);
    height: $base-menu-height;
    background-color: #e9df86;
    position: fixed;
    top: 0;
    left: $base-menu-width;
  }
  .layout_main {
    width: calc(100% - $base-menu-width);
    height: calc(100vh - $base-menu-height);
    background-color: #b2f8a9;
    position: absolute;
    top: $base-menu-height;
    left: $base-menu-width;
    padding: 20px;
    overflow: auto;
  }
}
</style>
