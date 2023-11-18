<template>
  <div>
    <Space
      style="margin-bottom: 80px; width: 100%"
      align="center"
      size="middle"
      direction="vertical"
    >
      <h3>PROJECTS</h3>
      <div class="container">
        <CardProject />
        <CardProject />
        <CardProject />
      </div>
    </Space>
  </div>
</template>

<script setup lang="ts">
import { Space } from "ant-design-vue";
import CardProject from "./CardProject.vue";
</script>

<style scoped>
.container {
  width: 90dvw;
  justify-content: space-between;
  display: flex;
  margin: 20px;
}

@media (max-width: 700px) {
  .container {
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>
