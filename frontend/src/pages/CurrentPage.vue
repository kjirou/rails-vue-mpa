<script setup lang="ts">
import Articles_CreatePage from "./articles/Create.vue";
import Articles_IndexPage from "./articles/Index.vue";
import Articles_NewPage from "./articles/New.vue";

export interface Props {
  actionName: string;
  controllerPath: string;
  csrfParam: string;
  csrfToken: string;
  initialPageData: Object;
  pageName: string | null;
}
const props = defineProps<Props>();

const createPageId = (controllerPath: string, actionName: string): string => {
  return `${controllerPath}-${actionName}`;
};

const pages = {
  [createPageId("articles", "create")]: Articles_CreatePage,
  [createPageId("articles", "index")]: Articles_IndexPage,
  [createPageId("articles", "new")]: Articles_NewPage,
} as const;

/**
 * @todo Receives `pages` as an argument, not as a closure.
 *       I could not define correctly the `pages` type.
 */
const findPage = (
  controllerPath: string,
  actionName: string,
  pageName: string | null
) => {
  const pageId = createPageId(controllerPath, pageName ?? actionName);
  // TODO: TypeScript determines that `pages[pageId]` always returns a value.
  if (pages.hasOwnProperty(pageId) === false) {
    throw new Error(
      `A page for "${controllerPath}#${actionName}" is not defined.`
    );
  }
  return pages[pageId];
};

const currentPage = findPage(
  props.controllerPath,
  props.actionName,
  props.pageName
);
const currentPageProps = {
  csrfParam: props.csrfParam,
  csrfToken: props.csrfToken,
  initialPageData: props.initialPageData,
};
</script>

<!-- NOTE: The "component" tag can not typecheck props. -->
<template>
  <component :is="currentPage" v-bind="currentPageProps" />
</template>
