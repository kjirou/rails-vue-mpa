<script setup lang="ts">
import Foo from "../../components/Foo.vue";
</script>

<template>
  <h2>articles/Index.vue</h2>
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
