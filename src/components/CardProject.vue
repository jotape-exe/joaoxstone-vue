<template>
  <div class="card">
    <div>
      <img class="badge" :src="props.projectLogo" />
    </div>
    <h2 style="margin-top: 5px">{{ title }}</h2>
    <Divider style="margin: 5px" />
    <p style="color: #616161">
      {{ content }}
    </p>
    <Badge
      :count="projectDate"
      :number-style="{
        backgroundColor: '#fff',
        color: '#999',
        marginTop: '10px',
        boxShadow: '0 0 0 1px #d9d9d9 inset',
      }"
    />
    <Divider style="margin: 10px" />
    <div class="badge-container">
      <div v-for="url in props.url" :key="url">
        <img class="badge" :src="url" />
      </div>
    </div>
    <Button  @click.prevent="goToProject(projectUrl)">Ver</Button>
  </div>
</template>

<script setup lang="ts">
import { GithubOutlined } from "@ant-design/icons-vue";
import { Divider, Badge, Avatar, Button } from "ant-design-vue";
import { defineProps } from "vue";
import { CardContent } from "../models/interfaces/ICardContent";

import SvgIcon from "@jamescoyle/vue-icon";
import { mdiAccount } from "@mdi/js";

//const props = defineProps(['card']);

const props = defineProps<CardContent>();

const goToProject = (url: string) => {
  window.open(url)
}

</script>

<style scoped>
.card {
  padding: 1rem;
  border-radius: 10px;
  border: none;
  background-color: #fcfcfc;
  width: 30dvw;
  height: 37dvw;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 2px 2px 5px 0 rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
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
</style>
