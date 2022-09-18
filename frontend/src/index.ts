import { createApp } from "vue";

import Root, { Props as RootProps } from "./Root.vue";

/**
 * NOTE: It converts the RootProps interface to a type for passing to `createApp`.
 *       `createApp` can not directly receive interface as type for rootProps.
 */
type RootPropsType = {
  actionName: RootProps["actionName"];
  controllerPath: RootProps["controllerPath"];
  initialPageData: RootProps["initialPageData"];
};

/**
 * @todo Extracts and returns initial data from Rails.
 */
const extractDataFromRails = (vueRootElement: HTMLElement): RootPropsType => {
  const controllerPath = vueRootElement.getAttribute("data-controller-path");
  const actionName = vueRootElement.getAttribute("data-action-name");
  const rawInitialPageData = vueRootElement.getAttribute(
    "data-initial-page-data"
  );
  if (
    controllerPath !== null &&
    actionName !== null &&
    rawInitialPageData !== null
  ) {
    const initialPageData = JSON.parse(rawInitialPageData);
    return {
      controllerPath,
      actionName,
      initialPageData,
    };
  }
  throw new Error("The data Rails is passing to Vue is invalid.");
};

document.addEventListener("DOMContentLoaded", () => {
  const vueRootElement = document.querySelector<HTMLElement>("#vue-root");
  if (vueRootElement === null) {
    throw new Error("Can not find the destination of Vue's `app.mount()`.");
  }
  const { controllerPath, actionName, initialPageData } =
    extractDataFromRails(vueRootElement);
  const rootProps: RootPropsType = {
    controllerPath,
    actionName,
    initialPageData,
  };
  const app = createApp(Root, rootProps);
  app.mount(vueRootElement);
});
