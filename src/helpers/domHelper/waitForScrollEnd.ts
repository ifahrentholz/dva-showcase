export const waitForScrollEnd = (target: HTMLElement | Window, pollingDelay = 100) => {
  let scrollTimer: NodeJS.Timeout;
  return new Promise(resolve => {
    target.addEventListener("scroll", () => {
      if (scrollTimer === undefined) return;
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => resolve(true), pollingDelay);
    });
    scrollTimer = setTimeout(() => resolve(true), pollingDelay);
  });
};
