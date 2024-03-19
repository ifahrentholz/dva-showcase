export const getReadableFileSize = (bytes: number, metric = true, decimals = 2) => {
  const thresh = metric ? 1000 : 1024;

  if (Math.abs(bytes) < thresh) {
    return `${bytes} B`;
  }

  const units = metric ? ["kB", "MB", "GB", "TB"] : ["KiB", "MiB", "GiB", "TiB"];
  let u = -1;
  const r = 10 ** decimals;

  do {
    bytes /= thresh;
    ++u;
  } while (Math.round(Math.abs(bytes) * r) / r >= thresh && u < units.length - 1);

  return `${bytes.toFixed(decimals)} ${units[u]}`;
};
