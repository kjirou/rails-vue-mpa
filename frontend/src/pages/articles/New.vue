<script setup lang="ts">
import { Articles_New_PageData } from "../../../../schemata/generated/pages/articles/new";

interface Props {
  initialPageData: Articles_New_PageData;
}
const props = defineProps<Props>();
</script>

<template>
  <h2>articles/New.vue</h2>
  <div>
    <form method="post" action="/articles">
      <button type="submit">Post to create</button>
    </form>
  </div>
  <h3>Initial Data</h3>
  <ul>
    <li>a = {{ props.initialPageData.a }}</li>
    <li>b.x = {{ props.initialPageData.b.x }}</li>
    <li>b.y = {{ props.initialPageData.b.y }}</li>
  </ul>
</template>
