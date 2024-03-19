import { toCamelCase } from "@kluntje/js-utils/lib/string-helpers";

/**
 * Returns key value map of attributes which start with a given namespace
 *
 * @param {HTMLElement} target
 * @param {string} namespace
 * @returns {Record<string, string>}
 */
export const getAttributesByNameSpace = (target: HTMLElement, namespace: string): Record<string, string> => {
  const regexp = new RegExp(`^(${namespace}-)`);
  const attrs: Record<string, string> = {};
  if (!target || !target.attributes) return attrs;

  [...target.attributes]
    .filter(attr => regexp.test(attr.name))
    .forEach(attr => {
      const name = toCamelCase(attr.name.replace(regexp, ""));
      const value = target.getAttribute(attr.name) || "";
      if (!attrs.hasOwnProperty(name)) {
        attrs[name] = value;
      }
    });
  return attrs;
};
