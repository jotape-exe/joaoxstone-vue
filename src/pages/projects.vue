<template>
  <div>
    <Space
      style="margin-bottom: 80px; width: 100%; height: 100dvh; margin-top: 40px;"
      align="center"
      size="middle"
      direction="vertical"
    >
      <h1 class="title-style">PROJECTS</h1>
      <div class="container">
        <CardProject
           v-for="card in cards" :key="card.title"
          :project-url="card.projectUrl"
          :project-logo="card.projectLogo"
          :content="card.content"
          :title="card.title"
          :project-date="card.projectDate"
          :url="card.url"
        />
      </div>
    </Space>
  </div>
</template>

<script setup lang="ts">
import { Space } from "ant-design-vue";
import CardProject from "../components/CardProject.vue";
import { CardContent } from "../models/interfaces/ICardContent";
import vince from "../../public/img/512vince.png";

const cards: CardContent[] = [
  {
    title: "Vince",
    content: `
          O Vince facilita a forma como você lida com suas finanças diárias. Gerencie suas movimentações financeiras de maneira simples e eficiente.
          Visualize suas finanças de maneira clara com gráficos e métricas detalhadas. Entenda seus padrões de gastos e tome decisões informadas para alcançar suas metas.`,
    projectDate: "Novembro 2023",
    projectLogo: vince,
    projectUrl:
      "https://play.google.com/store/apps/details?id=com.company.ourfinances",
    url: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-plain.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-plain.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    ],
  },
  {
    title: "IzaPay",
    content: `
          O Vince facilita a forma como você lida com suas finanças diárias. Gerencie suas movimentações financeiras de maneira simples e eficiente.
          Visualize suas finanças de maneira clara com gráficos e métricas detalhadas. Entenda seus padrões de gastos e tome decisões informadas para alcançar suas metas.`,
    projectDate: "Novembro 2023",
    projectLogo: vince,
    projectUrl:
      "https://izapay-web.netlify.app/",
    url: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
    ],
  },
  {
    title: "Vince",
    content: `
          O Vince facilita a forma como você lida com suas finanças diárias. Gerencie suas movimentações financeiras de maneira simples e eficiente.
          Visualize suas finanças de maneira clara com gráficos e métricas detalhadas. Entenda seus padrões de gastos e tome decisões informadas para alcançar suas metas.`,
    projectDate: "Novembro 2023",
    projectLogo: vince,
    projectUrl:
      "https://play.google.com/store/apps/details?id=com.company.ourfinances",
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

@media (max-width: 1100px) {
  .container {
    width: 90dvw;
  }
}

@media(max-width: 982px){
  .container{
    flex-direction: column;
    align-items: center;
  }
}


</style>
