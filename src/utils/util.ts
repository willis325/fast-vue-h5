/**
 * 创建label value的数组
 * @param data [string, string | number][]
 * @returns list { label: string; value: string | number }[]
 */
export const createLabelValueArray = <K = string, V = string | number>(data: [K, V][]) => data.map((i) => ({ label: i[0], value: i[1] }));
