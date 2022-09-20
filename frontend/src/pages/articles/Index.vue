<script setup lang="ts">
import { Articles_Index_PageData } from "../../../../schemata/generated/pages/articles/index";
import Foo from "../../components/Foo.vue";

interface Props {
  initialPageData: Articles_Index_PageData;
}
const props = defineProps<Props>();
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
