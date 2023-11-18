<template>
  <div>
    <Space
      style="margin-bottom: 80px; width:100%; height: 70vh; display: flex; flex-direction: column; align-items: center; justify-content: center;"
      align="center"
      size="middle"
      direction="vertical"
    >
      <CodeOutlined style="font-size: 60px; color: #722ed1" />
      <h1 class="title-style">May the code be with you</h1>
      <h2 class="title-style">João Pedro</h2>
      <h3 class="title-style">Software Engineer</h3>
    </Space>
  </div>
</template>

<script setup lang="ts">

import CardProject from "./CardProject.vue";
import { Space, Row } from "ant-design-vue";
import {
  CodeOutlined,
} from "@ant-design/icons-vue";


</script>

<style scoped></style>
