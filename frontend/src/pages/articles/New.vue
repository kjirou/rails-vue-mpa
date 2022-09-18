<script setup lang="ts">
interface Props {
  initialPageData: Object;
}
const props = defineProps<Props>();
</script>

<template>
  <h2>articles/New.vue</h2>
  <pre>{{ JSON.stringify(props.initialPageData, null, 2) }}</pre>
</template>
