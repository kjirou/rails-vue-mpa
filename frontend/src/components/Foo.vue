<script lang="ts">
import { PropType, defineComponent } from "vue";

type AObject = {
  a: number;
  b: {
    b1: number;
    b2: string;
  };
};

export default defineComponent({
  props: {
    a: String,
    b: { type: String, required: true },
    f: { type: Function as PropType<(b: boolean) => string>, required: true },
    o: { type: Object as PropType<AObject>, required: true },
    x: { type: Number, required: true },
  },
  data() {
    const data: {
      hello: string;
      world: string | undefined;
      kazu: number;
    } = {
      hello: "HELLO",
      world: "WORLD",
      kazu: 100,
    };
    return data;
  },
  setup(props) {
    let num: number = 0;
    num = props.x;
    num = props.o.a;
    num = props.o.b.b1;
    //num = props.o.b.b2
    console.log(num);
  },
  computed: {
    computedStr(): string {
      const str =
        this.$props.b +
          this.$props.o.b.b2 +
          this.$props.f(true) +
          this.$data.hello +
          this.$data.world ?? "";
      return str;
    },
  },
  methods: {
    calculateNumbers(value: number): number {
      return this.$props.x + this.$data.kazu + value;
    },
  },
});
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
