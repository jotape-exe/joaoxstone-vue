<!-- MdiIcon.vue -->

<template>
  <SvgIcon :path="mdiIcon" />
</template>

<script lang="ts">
import SvgIcon from '@jamescoyle/vue-icon'
import { ref, onMounted, watch } from "vue";
import { mdiAccount } from "@mdi/js";

const mdiIcon = ref(mdiAccount);

export default {
  components: {
    SvgIcon,
  },
  setup() {
    onMounted(() => {
      // Você pode adicionar lógica de inicialização aqui, se necessário
    });

    watch(
      () => props.data,
      (newData) => {
        // Você pode adicionar lógica de atualização aqui, se necessário
      }
    );

    return {
      mdiIcon,
    };
  },
};
</script>
