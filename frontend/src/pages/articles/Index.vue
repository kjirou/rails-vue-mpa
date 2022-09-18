<script setup lang="ts">
import Foo from "../../components/Foo.vue";

interface Props {
  initialPageData: Object;
}
const props = defineProps<Props>();
</script>

<template>
  <h2>articles/Index.vue</h2>
  <h3>Initial Data</h3>
  <pre>{{ JSON.stringify(props.initialPageData, null, 2) }}</pre>
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
