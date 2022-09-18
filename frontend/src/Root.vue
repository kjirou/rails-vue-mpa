<script setup lang="ts">
import CurrentPage from "./pages/CurrentPage.vue";

export interface Props {
  actionName: string;
  controllerPath: string;
}

const props = defineProps<Props>();
</script>

<template>
  <h1>Rails Vue MPA</h1>
  <ul>
    <li>controllerPath = {{ controllerPath }}</li>
    <li>actionName = {{ actionName }}</li>
  </ul>
  <CurrentPage
    :controller-path="props.controllerPath"
    :action-name="props.actionName"
  />
</template>
