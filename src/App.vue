<script setup lang="ts">
import { ConfigProvider } from "ant-design-vue";
import DefaultLayout from "./layouts/DefaultLayout.vue";
import SimpleLayout from "./layouts/SimpleLayout.vue";
import Me from "./components/Me.vue";

import { theme } from "ant-design-vue";
</script>

<template>
  <ConfigProvider
    :theme="{
      //algorithm: theme.darkAlgorithm,
      token: {
        colorPrimary: '#722ED1',
        colorSuccess: '#52c41a',
        colorWarning: '#faad14',
        colorError: '#ff4d4f',
        colorInfo: '#1677ff',
      },
    }"
  >
  </ConfigProvider>
  <SimpleLayout>
    <RouterView />
  </SimpleLayout>
</template>

<style scoped></style>
