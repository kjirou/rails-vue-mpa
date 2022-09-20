<script setup lang="ts">
import { Articles_Create_PageData } from "../../../../schemata/generated/pages/articles/create";

interface Props {
  initialPageData: Articles_Create_PageData;
}
const props = defineProps<Props>();
</script>

<template>
  <h2>articles/Create.vue</h2>
  <p>We will want to display the same screen as in "articles#new".</p>
</template>
