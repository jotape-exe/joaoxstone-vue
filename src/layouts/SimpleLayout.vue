<template>
  <Layout class="layout">
    <LayoutHeader>
      <Menu
        v-model:selectedKeys="selectedKeys"
        theme="dark"
        mode="horizontal"
        :items="items"
        @click="handleMenuClick"
        :style="{ lineHeight: '64px' }"
      >
      </Menu>
    </LayoutHeader>
    <LayoutContent>
      <RouterView
        :style="{ background: '#fff', minHeight: '280px' }"
      ></RouterView>
    </LayoutContent>
  </Layout>
</template>
<script lang="ts" setup>
import { CodeFilled, HomeFilled, ProjectFilled, TeamOutlined } from "@ant-design/icons-vue";
import {
Breadcrumb,
  BreadcrumbItem,
  Layout,
  LayoutContent,
  LayoutFooter,
  LayoutHeader,
  Menu,
  MenuItem,
} from "ant-design-vue";
import { ref, h, reactive } from "vue";
import { useRouter } from "vue-router";
const selectedKeys = ref<string[]>(["2"]);

const router = useRouter()

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
    key: "/experience",
    icon: () => h(CodeFilled),
    label: "Experiência",
    title: "Experiência",
  },
]);

const handleMenuClick = (info: any) => {
  const { key } = info;
  router.push(key);
};
</script>
<style scoped>

.layout{
  overflow: hidden;
}
.site-layout-content {
  min-height: 280px;
  padding: 24px;
  background: #fff;
}
#components-layout-demo-top .logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
}
.ant-row-rtl #components-layout-demo-top .logo {
  float: right;
  margin: 16px 0 16px 24px;
}

[data-theme="dark"] .site-layout-content {
  background: #141414;
}
</style>
