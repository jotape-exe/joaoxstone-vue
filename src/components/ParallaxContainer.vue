<template>
  <div class="container">
    <div>
      <img class="badge" :src="card.projectLogo" />
    </div>
    <h2 style="margin-top: 5px">{{ card.title }}</h2>
    <Divider style="margin: 5px" />
    <p style="color: #616161; text-align: justify">
      {{ card.content }}
    </p>
    <Badge
      :count="card.projectDate"
      :number-style="{
        backgroundColor: '#fff',
        color: '#999',
        marginTop: '10px',
        boxShadow: '0 0 0 1px #d9d9d9 inset',
      }"
    />
    <Divider style="margin: 10px" />
    <div class="badge-container">
      <div v-for="url in card.url" :key="url">
        <img class="badge" :src="url" />
      </div>
    </div>
    <Button type="primary" @click.prevent="goToProject(card.projectUrl)"
      >Ver</Button
    >
    <Button
      v-if="card.gitHub !== undefined"
      :icon="h(GithubOutlined)"
      style="margin-top: 10px"
      @click.prevent="goToProject(card.gitHub)"
    >
      Github</Button
    >
  </div>
</template>

<script setup lang="ts">
import { CardContent } from "../models/interfaces/ICardContent";
import { GithubOutlined } from "@ant-design/icons-vue";
import { Divider, Badge, Avatar, Button } from "ant-design-vue";
import { defineProps } from "vue";

import SvgIcon from "@jamescoyle/vue-icon";
import { h } from "vue";
import { mdiGithub } from "@mdi/js";
const props = defineProps<{
  card: CardContent;
}>();

const goToProject = (url: string) => {
  window.open(url);
};
</script>

<style scoped>
.container {
  background-color: rgba(228, 228, 228, 0.733);
  padding: 1rem;
  display: flex;
  flex-direction: column;
}

.container p {
  text-align: justify;
}

.badge-container {
  display: flex;
  flex-direction: row;
}

.card:hover {
  box-shadow: 3px 3px 6px 0 rgba(0, 0, 0, 0.5);
}

.badge {
  width: 40px;
  height: 40px;
  padding: 5px;
  margin-right: 5px;
  border-radius: 10px;
  background-color: #fff;
}

@media (max-width: 1240px) {
  h2 {
    font-size: 20px;
  }
}

</style>
