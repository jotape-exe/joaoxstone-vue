<template>
  <div>
    <Space size="middle">
      <Button
        @click="openSocial('https://www.instagram.com/joaoxstone/')"
        size="large"
        type="primary"
        shape="circle"
        style="font-size: 14px;"
      >
        <template #icon><InstagramFilled /></template>
      </Button>
      <Button
       @click="openSocial('https://www.linkedin.com/in/joao-psv/')"
        size="large"
        type="primary"
        shape="circle"
        style="font-size: 14px"
      >
        <template #icon><LinkedinFilled /></template>
      </Button>
      <Button
       @click="openSocial('mailto:joaoxstone@gmail.com')"
        size="large"
        type="primary"
        shape="circle"
        style="font-size: 14px"
      >
        <template #icon><MailFilled /></template>
      </Button>
    </Space>
  </div>
</template>

<script setup lang="ts">
import { Button, Space } from "ant-design-vue";

import {
  LinkedinFilled,
  InstagramFilled,
  MailFilled,
} from "@ant-design/icons-vue";
import { useRouter } from "vue-router";

const router = useRouter()

const openSocial = (url: string) => {
  window.open(url)
}

</script>

<style scoped></style>
