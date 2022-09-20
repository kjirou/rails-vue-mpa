<script setup lang="ts">
import { PropType } from "vue";
import { Articles_New_PageData } from "../../../../schemata/generated/pages/articles/new";
import { pagePropsValidation } from "./../../types";

const props = defineProps({
  ...pagePropsValidation,
  initialPageData: {
    type: Object as PropType<Articles_New_PageData>,
    required: true,
  },
});
</script>

<template>
  <h2>articles/New.vue</h2>
  <div>
    <form method="post" action="/articles">
      <input type="hidden" :name="props.csrfParam" :value="props.csrfToken" />
      <input name="foo" />
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
