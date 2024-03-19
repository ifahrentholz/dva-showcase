export const getClassList = (defaultClasses: Array<string>, cssClasses: Array<string>) => {
  return [...defaultClasses, ...cssClasses].join(" ");
};
