export const slugify = (text: string) =>
  text.toLowerCase().replace(/[^\w]+/g, '-');
