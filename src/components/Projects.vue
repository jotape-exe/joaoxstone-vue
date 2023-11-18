<template>
  <div style="margin-top: 40px">
    <Space
      style="margin-bottom: 80px; width: 100%; height: 100dvh"
      align="center"
      size="middle"
      direction="vertical"
    >
      <h1 class="title-style">PROJECTS</h1>
      <div v-for="card in cards" :key="card.title" class="container">
        <CardProject :project-url="card.projectUrl" :project-logo="card.projectLogo" :content="card.content" :title="card.title" :project-date="card.projectDate" :url="card.url" />
      </div>
    </Space>
  </div>
</template>

<script setup lang="ts">
import { Space } from "ant-design-vue";
import CardProject from "./CardProject.vue";
import { CardContent } from "../models/interfaces/ICardContent";

const cards: CardContent[] = [
  {
    title: "Vince",
    content: "Lorem Ipsum",
    projectDate: "Novembro 2023",
    projectLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-plain.svg",
    projectUrl: "https://play.google.com/store/apps/details?id=com.company.ourfinances",
    url: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-plain.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-plain.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    ],
  },
  
];
</script>

<style scoped>
.container {
  width: 80dvw;
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
