<script setup lang="ts">
// TODO: `<component :is="{componentName}">` requires declarations of component names as variables.
//       Therefore, it is not possible to separate the page list into different modules.
import ArticlesIndexPage from "./pages/articles/Index.vue";

const props = defineProps({
  actionName: { type: String, required: true },
  controllerPath: { type: String, required: true },
});
</script>

<template>
  <h1>Rails Vue MPA</h1>
  <ul>
    <li>controllerPath = {{ controllerPath }}</li>
    <li>actionName = {{ actionName }}</li>
  </ul>
  <component :is="ArticlesIndexPage" />
</template>
