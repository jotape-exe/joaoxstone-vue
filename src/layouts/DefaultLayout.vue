<script setup lang="ts">
import { Button, Menu, Row, Space } from "ant-design-vue";
import { ref, reactive, watch, h } from "vue";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  HomeFilled,
  ProjectFilled,
  CodeFilled,
  TeamOutlined,
} from "@ant-design/icons-vue";

import Socials from "../components/Socials.vue";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();

const state = reactive({
  collapsed: true,
  selectedKeys: ["1"],
  openKeys: ["sub1"],
  preOpenKeys: ["sub1"],
});

const items = reactive([
  {
    key: "/",
    icon: () => h(HomeFilled),
    label: "Home",
    title: "Home",
  },
  {
    key: "/projects",
    icon: () => h(ProjectFilled),
    label: "Projetos",
    title: "Projetos",
  },
  {
    key: "/recomendations",
    icon: () => h(TeamOutlined),
    label: "Recomendações",
    title: "Recomendaçoes",
  },
  {
    key: "/experience",
    icon: () => h(CodeFilled),
    label: "Experiência",
    title: "Experiência",
  },
]);

watch(
  () => state.openKeys,
  (_val: any, oldVal: any) => {
    state.preOpenKeys = oldVal;
  }
);

const toggleCollapsed = () => {
  state.collapsed = !state.collapsed;
  state.openKeys = state.collapsed ? [] : state.preOpenKeys;
};

const handleMenuClick = (info: any) => {
  const { key } = info;
  router.push(key);
};
</script>

<template>
  <div class="all">
    <Button
      type="primary"
      size="small"
      style="margin-bottom: 16px; width: 4rem; height: 3rem"
      @click="toggleCollapsed"
    >
      <MenuUnfoldOutlined style="font-size: 20px" v-if="state.collapsed" />
      <MenuFoldOutlined style="font-size: 20px" v-else />
    </Button>
    <Menu
      size="small"
      style="margin-bottom: 16px"
      v-model:openKeys="state.openKeys"
      v-model:selectedKeys="state.selectedKeys"
      mode="inline"
      theme="light"
      @click="handleMenuClick"
      :inline-collapsed="state.collapsed"
      :items="items"
    ></Menu>
  </div>

  <RouterView style="padding: 1rem;" />
</template>

<style>
.logo {
  height: 34px;
}
h1 {
  font-size: 45px;
  font-family: "Montserrat", sans-serif;
}
h2 {
  font-size: 37px;
  color: #401b74;
}
h3 {
  font-size: 24px;
}
@media (max-width: 905px) {
  .logo {
    height: 20px;
  }
  h1 {
    font-size: 40px;
  }
  h2 {
    font-size: 32px;
  }
  h3 {
    font-size: 20px;
  }
}

@media (max-width: 905px) {
  h1 {
    font-size: 30px;
    text-align: center;
  }
  h2 {
    font-size: 22px;
  }
  h3 {
    font-size: 15px;
  }
}
.title-style {
  margin: 0;
  font-family: "Lexend";
  font-weight: 400;
}

.bottom-buttons {
  padding-bottom: 1rem;
}

.all{
  margin: 1rem;
  max-width: 200px;
  position: fixed;
}
</style>
