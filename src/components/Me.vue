<template>
  <div>
    <Space
      style="
        margin-bottom: 80px;
        width: 100%;
        height: 70vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      "
      align="center"
      size="middle"
      direction="vertical"
    >
      <img src="../../public/android-chrome-192x192.png" />
      <!-- <CodeOutlined style="font-size: 60px; color: #722ed1" /> -->
      <h1 class="title-style main-title">May the code be with you</h1>
      <div style="display: flex; align-items: center; justify-content: space-between; text-align: center;">
        <h2 class="title-style sub-title">João Pedro</h2>
        <h2 style="margin: 7px; font-weight: 200;">AKA</h2> <code class="code-container">João ${secondName}</code>
      </div>
      <h3 class="title-style side-title">Mobile Developer</h3>
    </Space>
  </div>
</template>

<script setup lang="ts">
import CardProject from "./CardProject.vue";
import { Space, Row, TypographyTitle } from "ant-design-vue";
import { AndroidFilled, CodeOutlined } from "@ant-design/icons-vue";
</script>

<style scoped>
.code-container {
  font-family: "Courier New", Courier, monospace;
  background-color: #f1f1f1;
  border-radius: 10px;
  font-size: 18px;
  padding: 10px;
  box-shadow: 0.5px 0.5px 1px .2px rgba(0, 0, 0, 0.5);
}

.title-style {
  margin: 0;
  text-align: center;
  font-family: "Lexend";
  font-weight: 400;
}

.main-title {
  text-align: center;
  font-size: 40px;
}

.sub-title {
  font-size: 30px;
}

.side-title {
  font-size: 25px;
}

@media (max-width: 551px) {
  .main-title {
    font-size: 32px;
  }

  .sub-title {
    font-size: 22px;
  }

  .side-title {
    font-size: 18px;
  }

  img {
    width: 100px;
  }
}
</style>
