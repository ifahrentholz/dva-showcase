export const getSrcset = (src: string, srcsetWidth: number[]): string => {
  const imgSrcUrl = new URL(src);
  const srcset = srcsetWidth.map(width => {
    const url = new URL(imgSrcUrl.href);
    url.searchParams.set("width", width.toString());
    return `${url.href} ${width}w`;
  });
  return srcset.join(", ");
};
