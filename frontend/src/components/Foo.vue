<script setup lang="ts">
import { computed, reactive, ref } from "vue";

interface Props {
  a?: string;
  b: string;
  f: (b: boolean) => string;
  o: {
    a: number;
    b: {
      b1: number;
      b2: string;
    };
  };
  x: number;
}
const props = defineProps<Props>();

const data = reactive<{
  hello: string;
  world: string | undefined;
  kazu: number;
}>({
  hello: "HELLO",
  world: "WORLD",
  kazu: 100,
});

const computedStr = computed(
  (): string =>
    props.b + props.o.b.b2 + props.f(true) + data.hello + data.world ?? ""
);

const calculateNumbers = (value: number): number => {
  return props.x + data.kazu + value;
};
</script>

<template>
  <h3>Foo Component</h3>
  <ul>
    <li>a = {{ a }}</li>
    <li>b = {{ b }}</li>
    <li>f(true) = {{ f(true) }}</li>
    <li>f(false) = {{ f(false) }}</li>
    <li>x = {{ x }}</li>
    <li>computedStr = {{ computedStr }}</li>
    <li>calculateNumbers = {{ calculateNumbers(123) }}</li>
    <li>calculateNumbers = {{ /* calculateNumbers('abc') */ 1 }}</li>
    <li>Does not exist = {{ /* doesNotExist */ 1 }}</li>
  </ul>
</template>
