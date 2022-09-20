<script setup lang="ts">
import { PropType } from "vue";
import { Articles_Index_PageData } from "../../../../schemata/generated/pages/articles/index";
import { pagePropsValidation } from "./../../types";
import Foo from "../../components/Foo.vue";

const props = defineProps({
  ...pagePropsValidation,
  initialPageData: {
    type: Object as PropType<Articles_Index_PageData>,
    required: true,
  },
});
</script>

<template>
  <h2>articles/Index.vue</h2>
  <li>
    <a href="/articles/new">New</a>
  </li>
  <h3>Initial Data</h3>
  <ul>
    <li>foo = {{ props.initialPageData.foo }}</li>
    <li>bar.x = {{ props.initialPageData.bar.x }}</li>
    <li>bar.y = {{ props.initialPageData.bar.y }}</li>
  </ul>
  <Foo
    :a="'a'"
    :b="'b'"
    :f="(b) => (b ? 'T' : 'F')"
    :o="{
      a: 11,
      b: {
        b1: 222,
        b2: 'b2',
      },
    }"
    :x="1"
  />
</template>
