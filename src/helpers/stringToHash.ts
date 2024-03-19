export const stringToHash = (string: string) => {
  let hash = 0;
  for (let i = 0; i < string.length; i++) hash = (Math.imul(31, hash) + string.charCodeAt(i)) | 0;

  return hash;
};
