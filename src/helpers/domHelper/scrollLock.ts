import { SCROLL_LOCK } from "Constants/cssClasses";
import { addClass, removeClass } from "@kluntje/js-utils/lib/dom-helpers";

let scrollPosition = 0;
let scrollLockEnabled = false;

export const enableScrollLock = () => {
  scrollPosition = window.pageYOffset;
  addClass(document.body, SCROLL_LOCK);
  document.body.style.top = `-${scrollPosition}px`;
  scrollLockEnabled = true;
};

export const disableScrollLock = () => {
  removeClass(document.body, SCROLL_LOCK);
  document.body.style.top = "";
  window.scrollTo(0, scrollPosition);
  scrollLockEnabled = false;
};

export const toggleScrollLock = (enable?: boolean) => {
  if (enable === true || (enable !== false && !scrollLockEnabled)) {
    enableScrollLock();
  } else {
    disableScrollLock();
  }
};
