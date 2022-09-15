<script lang="ts">
import { defineComponent } from "vue";

import Foo from "./Foo.vue";

export default defineComponent({
  components: {
    foo: Foo,
  },
});
</script>

<template>
  <h1>Rails Vue MPA</h1>
  <foo
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
