<script setup lang="ts">
import setting from '@/setting.ts'
</script>

<template>
  <div class="logo" v-if="setting.logoHidden">
    <img :src="setting.logo" alt="" />
    <p>{{ setting.title }}</p>
  </div>
</template>

<style lang="scss" scoped>
.logo {
  width: 100%;
  height: $base-menu-logo-height;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 40px;
    height: 40px;
  }
  p {
    font-size: $base-menu-logo-title-fontSize;
    margin-left: 10px;
  }
}
</style>
