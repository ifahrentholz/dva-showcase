import { isSidekickLibraryActive } from "./isSidekickLibraryActive";

/**
 * Represents the constructed Element.
 *
 * @interface ConstructedElement
 * @property {string} dataLibraryId - The data library id generated by the Sidekick Library Plugin.
 * @property {string} innerHTML - The innerHTML of a provided element.
 * @property {string} href - The href of a provided anchor element.
 */
export type SidekickElement = {
  dataLibraryId?: string;
  innerHTML: string;
  href?: string;
};

/**
 * Extracts the innerHTML, the href attribute (if defined) and
 * the data-library-id attribute (if the Sidekick Library Plugin is active) of a given HTML element.
 *
 * @param {HTMLElement | HTMLAnchorElement | null} element - The original HTMLElement or HTMLAnchorElement.
 * @returns {SidekickElement} - A constructed element object.
 *
 * @example
 * const button = extractSidekickLibraryId(document.querySelector('a'));
 * <a
 *  href="${button.href}"
 *  data-library-id="${ifDefined(button.id)}"
 *  contenteditable="${ifDefined(button.id ? true : undefined)}">
 *    ${button.text}
 * </a>
 *
 * @remarks
 * The data-library-id is generated by the Sidekick Library Plugin
 * and is necessary to copy edited block content from the Sidekick Library.
 */
export const extractSidekickLibraryId = (element?: HTMLElement | HTMLAnchorElement | null): SidekickElement => {
  const constructedElement: SidekickElement = {
    dataLibraryId: undefined,
    innerHTML: "",
    href: "",
  };
  if (!element) return constructedElement;

  constructedElement.innerHTML = element.innerHTML;
  if (element instanceof HTMLAnchorElement && element.href !== "") {
    constructedElement.href = element.href;
  }

  const sidekickLibraryId: string | null = element.getAttribute("data-library-id");
  if (isSidekickLibraryActive() && sidekickLibraryId !== null) {
    constructedElement.dataLibraryId = sidekickLibraryId;
  }

  return constructedElement;
};
