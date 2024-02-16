<script setup lang="ts">
import { reqLogin } from '@/api/user/index.ts'
import { onMounted } from 'vue'

onMounted(() => {
  reqLogin({ username: 'admin', password: '111111' })
})
</script>

<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<style lang="scss" scoped></style>
