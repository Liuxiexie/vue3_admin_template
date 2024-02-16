<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  // xlink:href属性值的前缀
  prefix: {
    type: String,
    default: '#icon-',
  },
  // 提供使用的图标名字
  name: {
    type: String,
    required: true,
  },
  // 图标的颜色
  color: {
    type: String,
    default: '',
  },
  // 接受父组件传递过来的图标的宽度
  width: {
    type: String,
    default: '16px',
  },
  // 接受父组件传递过来的图标的高度
  height: {
    type: String,
    default: '16px',
  },
})
</script>

<template>
  <!-- svg 图标外层容器节点, 内部需要与 use标签结合使用 -->
  <svg :style="{ width, height }">
    <!-- xlink:href 执行用哪一个图标 -->
    <use :xlink:href="prefix + name" :fill="color"></use>
  </svg>
</template>

<style lang="scss" scoped></style>
