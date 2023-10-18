<script setup lang="ts">
import Home from './components/Home.vue'
import { ConfigProvider } from "ant-design-vue"

</script>

<template>
  <ConfigProvider
    :theme="{
      token: {
        colorPrimary: '#722ED1',
      },
    }"
  >
  </ConfigProvider>
  <Home />
</template>

<style scoped>

</style>
