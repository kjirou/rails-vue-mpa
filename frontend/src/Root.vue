<script setup lang="ts">
import CurrentPage, {
  Props as CurrentPageProps,
} from "./pages/CurrentPage.vue";

/**
 * NOTE: Could not write the code as `export interface Props extends CurrentPageProps {}`.
 *       At that time, it was interpreted by @vue/compiler-sfc in vue-loader that the Props were empty.
 *
 *       Also, importing a commonized interface can not be interpreted correctly.
 *       Ref) https://github.com/vuejs/core/issues/4294
 */
export interface Props {
  actionName: CurrentPageProps["actionName"];
  controllerPath: CurrentPageProps["controllerPath"];
  csrfParam: CurrentPageProps["csrfParam"];
  csrfToken: CurrentPageProps["csrfToken"];
  initialPageData: CurrentPageProps["initialPageData"];
  pageName: CurrentPageProps["pageName"];
}
const props = defineProps<Props>();
</script>

<template>
  <h1>Rails Vue MPA</h1>
  <CurrentPage v-bind="props" />
</template>
