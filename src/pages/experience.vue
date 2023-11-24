<template>
  <div>
    <div
      style="
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
      "
    >
      <TypographyTitle style="text-align: center;">Experiência Profissional</TypographyTitle>
      <div style="font-size: 20px; font-weight: 300; text-align: center;"
        >Nesta sessão você acompanhar meu projetos até
        <strong>{{ new Date().toLocaleDateString() }}</strong></div
      >
    </div>
    <div class="container">
      <ExperienceCard v-for="i in array" :key="i" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { TypographyTitle } from "ant-design-vue";
import ExperienceCard from "../components/ExperienceCard.vue";

const array = [1, 2];
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 3rem;
}

@media (max-width: 769px) {
  .container {
    flex-direction: column;
  }
}
</style>
