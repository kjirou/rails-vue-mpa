<script setup lang="ts">
// TODO: `<component :is="{componentName}">` requires declarations of component names as variables.
//       Therefore, it is not possible to separate the page list into different modules.
import ArticlesIndexPage from "./pages/articles/Index.vue";
import ArticlesNewPage from "./pages/articles/New.vue";

export interface Props {
  actionName: string;
  controllerPath: string;
}

const createPageId = (controllerPath: string, actionName: string): string => {
  return `${controllerPath}-${actionName}`;
};

const props = defineProps<Props>();

const pages = {
  [createPageId("articles", "index")]: ArticlesIndexPage,
  [createPageId("articles", "new")]: ArticlesNewPage,
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
  <h1>Rails Vue MPA</h1>
  <ul>
    <li>controllerPath = {{ controllerPath }}</li>
    <li>actionName = {{ actionName }}</li>
  </ul>
  <component :is="currentPage" />
</template>
