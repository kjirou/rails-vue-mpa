<script setup lang="ts">
import { Articles_NewPage } from "../../dummy-interfaces";

interface Props {
  initialPageData: Articles_NewPage;
}
const props = defineProps<Props>();
</script>

<template>
  <h2>articles/New.vue</h2>
  <h3>Initial Data</h3>
  <ul>
    <li>a = {{ props.initialPageData.a }}</li>
    <li>b.x = {{ props.initialPageData.b.x }}</li>
    <li>b.y = {{ props.initialPageData.b.y }}</li>
  </ul>
</template>
