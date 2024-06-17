/**
 * 创建label value的数组
 * @param data [string, string | number][]
 * @returns list { label: string; value: string | number }[]
 */
export const createLabelValueArray = <K = string, V = string | number>(data: [K, V][]) => data.map((i) => ({ label: i[0], value: i[1] }));

/**
 * 加载图片
 * examples: bg/bg.png
 * @param imgPath: string
 */
export const requireImg = (imgPath: string) => new URL(`../assets/image/${imgPath}`, import.meta.url).href;

export const uuid = (n = 8): string => {
  function S4() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  }
  return new Array(n)
    .fill(S4)
    .map((v) => v())
    .join('');
};

export const downloadFile = (url: string, fileName = '') => {
  const tempDom = document.createElement('a');
  const Body = document.body;
  tempDom.setAttribute('href', url);
  if (fileName) tempDom.setAttribute('download', fileName);
  Body.append(tempDom);
  tempDom.click();
  Body.removeChild(tempDom);
};

export const previewImage = (url: string) => {
  if (!url) return;
  showImagePreview({ images: [url], closeable: true, showIndex: false });
};
