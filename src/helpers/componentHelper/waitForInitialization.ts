import { Component, INITIALIZED_EVENT } from "@kluntje/core";
import { waitForEvent } from "@kluntje/js-utils/lib/dom-helpers";

export const waitForInitialization = async <T extends Component>(component: T) => {
  if (component?.state?.initialized === true) return;
  return await waitForEvent(component, INITIALIZED_EVENT, 3000);
};
