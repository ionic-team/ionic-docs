export const slugify = (text: string) =>
  text.toLowerCase().replace(/[^\w]+/g, '-');

export const keyBy = (
  array: { [key: string]: any }[],
  keyFunc: (item: any) => string,
  valFunc?: (item: any) => any
) =>
  array.reduce((obj, item) => {
    obj[keyFunc(item)] = valFunc ? valFunc(item) : item;
    return obj;
  }, {});
