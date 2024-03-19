export const getInterpolatedString = (
  str: string,
  interpolations: Array<string | number> | Record<string, string | number>,
) => {
  if (interpolations) {
    Object.entries(interpolations).forEach(([k, v]) => {
      str = str.split(`{${k}}`).join(String(v));
    });
  }
  return str;
};
