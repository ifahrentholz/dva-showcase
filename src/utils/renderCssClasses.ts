export const renderCssClasses = (cssClasses?: string) => {
  if (cssClasses === undefined) return "";
  return ` ${cssClasses}`;
};
