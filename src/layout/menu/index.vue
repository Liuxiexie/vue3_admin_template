<script lang="ts">
export default {
  name: 'Menu',
}
</script>
<script setup lang="ts">
// 获取从父组件传递过来的路由数据
defineProps(['menuList'])
</script>

<template>
  <div>
    <template v-for="item in menuList" :key="item.path">
      <!-- 没有子路由 -->
      <template v-if="!item.children">
        <el-menu-item v-if="!item.meta.hidden" :index="item.path">
          <template #title>
            <el-icon>
              <component :is="item.meta.icon"></component>
            </el-icon>
            <span>{{ item.meta.title }}</span>
          </template>
        </el-menu-item>
      </template>
      <!-- 有子路由,但是只有一个 -->
      <template v-if="item.children && item.children.length === 1">
        <el-menu-item
          v-if="!item.children[0].meta.hidden"
          :index="item.children[0].path"
        >
          <template #title>
            <el-icon>
              <component :is="item.children[0].meta.icon"></component>
            </el-icon>
            <span>{{ item.children[0].meta.title }}</span>
          </template>
        </el-menu-item>
      </template>
      <!-- 有子路由, 子路由数量大于一个 -->
      <el-sub-menu
        :index="item.path"
        v-if="item.children && item.children.length > 1"
      >
        <template #title>
          <el-icon>
            <component :is="item.meta.icon"></component>
          </el-icon>
          <span>{{ item.meta.title }}</span>
        </template>
        <Menu :menuList="item.children"></Menu>
      </el-sub-menu>
    </template>
  </div>
</template>

<style lang="scss" scoped></style>
