<script setup lang="ts">
import { Button, Menu, Row, Space } from "ant-design-vue";
import { ref, reactive, watch, h } from "vue";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  HomeFilled,
  ProjectFilled,
  LinkedinFilled,
  TeamOutlined,
  InstagramFilled,
  MailFilled,
CodeOutlined,
} from "@ant-design/icons-vue";

const value = ref<string>("");
const value1 = ref<string>("");

watch(value, () => {
  console.log(value.value);
});
watch(value1, () => {
  console.log(value1.value);
});

const state = reactive({
  collapsed: true,
  selectedKeys: ["1"],
  openKeys: ["sub1"],
  preOpenKeys: ["sub1"],
});
const items = reactive([
  {
    key: "1",
    icon: () => h(HomeFilled),
    label: "Home",
    title: "Home",
  },
  {
    key: "2",
    icon: () => h(ProjectFilled),
    label: "Projetos",
    title: "Projetos",
  },
  {
    key: "3",
    icon: () => h(TeamOutlined),
    label: "Recomendações",
    title: "Recomendaçoes",
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
</script>

<template>
  <div class="all">
    <Row justify="space-between">
      <div>
        <Button
          type="primary"
          size="large"
          style="margin-bottom: 16px; width: 4rem; height: 3rem;"
          @click="toggleCollapsed"
        >
          <MenuUnfoldOutlined style="font-size: 24px;" v-if="state.collapsed" />
          <MenuFoldOutlined style="font-size: 24px;" v-else />
        </Button>
        <Menu
          size="large"
          style="margin-bottom: 16px; "
          v-model:openKeys="state.openKeys"
          v-model:selectedKeys="state.selectedKeys"
          mode="inline"
          theme="light"
          :inline-collapsed="state.collapsed"
          :items="items"
        ></Menu>
      </div>
      <img class="logo" src="../img/joaoxstonelogo.png" />
    </Row>
    <Space
      style="margin-bottom: 170px"
      align="center"
      size="middle"
      direction="vertical"
    >
    <CodeOutlined style="font-size: 60px; color: #722ED1;"/>
      <h1 class="title-style">
        May the code be with you
      </h1>
      <h2 class="title-style">
        João Pedro
      </h2>
      <h3 class="title-style">Software Engineer</h3>
    </Space>
    <Space
      size="middle"
      style="display: flex; align-items: center; justify-content: center"
    >
      <Button size="large" type="primary" shape="circle" style="width: 4rem; height: 4rem; font-size: 26px;">
        <template #icon><InstagramFilled /></template>
      </Button>
      <Button size="large" type="primary" shape="circle" style="width: 4rem; height: 4rem; font-size: 26px;">
        <template #icon><LinkedinFilled /></template>
      </Button>
      <Button size="large" type="primary" shape="circle" style="width: 4rem; height: 4rem; font-size: 26px;">
        <template #icon><MailFilled /></template>
      </Button>
    </Space>
  </div>
</template>

<style>
.logo {
  height: 34px;
}
h1{
  font-size: 45px; font-family: 'Montserrat', sans-serif;
}
h2{
  font-size: 37px; color: #401b74;
}
h3{
  font-size: 24px
}
@media (max-width:905px) {
  .logo {
    height: 20px;
  }
  h1{
    font-size: 40px;
  }
  h2 {
    font-size: 32px;
  }
  h3{
    font-size: 20px;
  }
}

@media (max-width:905px) {
  h1{
    font-size: 30px;
    text-align: center;
  }
  h2 {
    font-size: 22px;
  }
  h3{
    font-size: 15px;
  }
}
.title-style {
  margin: 0;
  font-family: "Lexend";
  font-weight: 400;
}
.all {
  padding: 1.3rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
