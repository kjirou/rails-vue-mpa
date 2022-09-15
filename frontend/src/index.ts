import { createApp } from "vue";

import Root from "./Root.vue";

/**
 * @todo Extracts and returns initial props.
 */
const extractDataFromRails = (
  vueRootElement: HTMLElement
): {
  actionName: string;
  controllerPath: string;
} => {
  const controllerPath = vueRootElement.getAttribute("data-controller-path");
  const actionName = vueRootElement.getAttribute("data-action-name");
  if (controllerPath !== null && actionName !== null) {
    return {
      controllerPath,
      actionName,
    };
  }
  throw new Error(
    "data-controller-path and data-action-name are not set on the root element of Vue."
  );
};

document.addEventListener("DOMContentLoaded", () => {
  const vueRootElement = document.querySelector<HTMLElement>("#vue-root");
  if (vueRootElement === null) {
    throw new Error("Can not find the destination of Vue's `app.mount()`.");
  }
  const { controllerPath, actionName } = extractDataFromRails(vueRootElement);
  // TODO: The following root props are not typed.
  const app = createApp(Root, {
    controllerPath,
    actionName,
  });
  app.mount(vueRootElement);
});
