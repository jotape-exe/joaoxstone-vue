<template>
  <div class="card">
    <GithubOutlined style="font-size: 44px" />
    <h2 style="margin-top: 10px">Vince</h2>
    <Divider />
    <p style="color: #616161;">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </p>
    <Badge
    count="Novembro 2023"
    :number-style="{
      backgroundColor: '#fff',
      color: '#999',
      marginTop: '10px',
      boxShadow: '0 0 0 1px #d9d9d9 inset',
    }"
  />
  <Divider />
  <span style="width: 100px; height: 100px; border-radius: 10px; background-color: #fff;" class="iconify" icon="mdi-account"></span>
  </div>
</template>

<script setup lang="ts">
import { GithubOutlined } from "@ant-design/icons-vue";
import { Divider, Badge, Avatar } from "ant-design-vue";

import SvgIcon from '@jamescoyle/vue-icon'
import { mdiAccount } from '@mdi/js'

const props = defineProps(["data"]);



</script>

<style scoped>
.card {
  padding: 1rem;
  border-radius: 10px;
  border: none;
  background-color: #fcfcfc;
  width: 400px;
  height: 500px;
  margin: 10px;
  box-shadow: 2px 2px 5px 0 rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
}

.card:hover {
  box-shadow: 3px 3px 6px 0 rgba(0, 0, 0, 0.5);
}
</style>
