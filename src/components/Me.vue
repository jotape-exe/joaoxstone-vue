<template>
  <div>
    <Space
      style="margin-bottom: 80px; width:100%; height: 70vh; display: flex; flex-direction: column; align-items: center; justify-content: center;"
      align="center"
      size="middle"
      direction="vertical"
    >
      <CodeOutlined style="font-size: 60px; color: #722ed1" />
      <TypographyTitle style="text-align: center;" class="title-style">May the code be with you</TypographyTitle>
      <TypographyTitle :level="2" class="title-style">João Pedro</TypographyTitle>
      <TypographyTitle :level="3" class="title-style">Mobile Developer</TypographyTitle>
    </Space>
  </div>
</template>

<script setup lang="ts">

import CardProject from "./CardProject.vue";
import { Space, Row, TypographyTitle } from "ant-design-vue";
import {
AndroidFilled,
  CodeOutlined,
} from "@ant-design/icons-vue";


</script>

<style scoped></style>
