<script lang="ts">
import { defineComponent } from "vue";

import Foo from "./Foo.vue";

export default defineComponent({
  props: {
    actionName: { type: String, required: true },
    controllerPath: { type: String, required: true },
  },
  components: {
    foo: Foo,
  },
});
</script>

<template>
  <h1>Rails Vue MPA</h1>
  <ul>
    <li>controllerPath = {{ controllerPath }}</li>
    <li>actionName = {{ actionName }}</li>
  </ul>
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
