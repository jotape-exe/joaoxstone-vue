<template>
  <div class="card">
    <div class="container-card">
      <div style="display: flex; flex-direction: row">
        <img class="badge" src="../../public//img/digitalcode.jpeg" />
        <TypographyTitle :level="3">Digytal</TypographyTitle>
      </div>
      <div style="height: 2px; background-color: #a8a8a8; width: 100%"></div>
    </div>
    <div class="content">
      <div class="badge-ex">Front-End Developer</div>
      <div class="badge-ex" style="background-color: #697fc9;">Mobile Developer</div>
      <p style="font-size: 17px; margin: 18px 0; ">
        Na Digytal eu fui reponsavel pelo desenvolmento front-end da aplicação
        IzaPay. Neste projeto obtive esperiências com as tecnologias: Vue e
        Typescript, e com estas ferramentas fui capaz de facilitar o uso do site
        e melhorar a performance em dispositivos móveis por meio de Progressive
        Web Application (PWA).
      </p>
    </div>
    <Button style="width: 100%; margin: 10px 0" type="primary">
      <LinkedinFilled />
      Linkedin
    </Button>
  </div>
</template>

<script setup lang="ts">
import { LinkedinFilled } from "@ant-design/icons-vue";
import { Button, TypographyTitle } from "ant-design-vue";
</script>

<style scoped>
.card {
  border-radius: 10px;
  box-shadow: 2px 2px 5px 0 rgba(0, 0, 0, 0.5);
  width: 30dvw;
  margin: 5px;
  padding: 1rem;
  background-color: #fcfcfc;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.badge-ex {
  background-color: #17245c;
  border-radius: 5px;
  padding: 7px;
  font-size: 18px;
  margin: 10px 0;
  color: #fff;
}

.content {
  text-align: justify;
  margin-top: 5px;
}

.container-card {
  display: flex;
  flex-direction: column;
}

.badge {
  width: 40px;
  height: 40px;
  padding: 5px;
  margin-right: 5px;
  border-radius: 10px;
  background-color: #fff;
}

@media (max-width: 962px) {
  .card {
    width: 80dvw;
  }
}
</style>
