<script setup lang="ts">
import CurrentPage, {
  Props as CurrentPageProps,
} from "./pages/CurrentPage.vue";

/**
 * NOTE: Could not write the code as `export interface Props extends CurrentPageProps {}`.
 *       At that time, it was interpreted by vue-loader that the Props were empty.
 */
export interface Props {
  actionName: CurrentPageProps["actionName"];
  controllerPath: CurrentPageProps["controllerPath"];
  initialPageData: CurrentPageProps["initialPageData"];
}
const props = defineProps<Props>();
</script>

<template>
  <h1>Rails Vue MPA</h1>
  <ul>
    <li>controllerPath = {{ controllerPath }}</li>
    <li>actionName = {{ actionName }}</li>
  </ul>
  <CurrentPage
    :controller-path="props.controllerPath"
    :action-name="props.actionName"
    :initial-page-data="props.initialPageData"
  />
</template>
