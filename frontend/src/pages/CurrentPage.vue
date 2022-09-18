<script setup lang="ts">
import Articles_IndexPage from "./articles/Index.vue";
import Articles_NewPage from "./articles/New.vue";

interface Props {
  actionName: string;
  controllerPath: string;
  initialPageData: Object;
}
const props = defineProps<Props>();

const createPageId = (controllerPath: string, actionName: string): string => {
  return `${controllerPath}-${actionName}`;
};

const pages = {
  [createPageId("articles", "index")]: Articles_IndexPage,
  [createPageId("articles", "new")]: Articles_NewPage,
} as const;

/**
 * @todo Receives `pages` as an argument, not as a closure.
 *       I could not define correctly the `pages` type.
 */
const findPage = (controllerPath: string, actionName: string) => {
  const pageId = createPageId(controllerPath, actionName);
  // TODO: TypeScript determines that `pages[pageId]` always returns a value.
  if (pages.hasOwnProperty(pageId) === false) {
    throw new Error(
      `A page for "${controllerPath}#${actionName}" is not defined.`
    );
  }
  return pages[pageId];
};

const currentPage = findPage(props.controllerPath, props.actionName);
</script>

<template>
  <component :is="currentPage" :initial-page-data="props.initialPageData" />
</template>
