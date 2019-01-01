export const slugify = (text: string) =>
  text.toLowerCase().replace(/[^\w]+/g, '-');

export const sample = (array: any[]) =>
  array[Math.floor(Math.random() * array.length)];

export const keyBy = (
  array: any[],
  keyMap: (item: any) => string,
  valMap?: (item: any) => any
) =>
  array.reduce((obj, item) => {
    obj[keyMap(item)] = valMap ? valMap(item) : item;
    return obj;
  }, {});
