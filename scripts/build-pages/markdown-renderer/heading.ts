import { slugify } from '../../../src/utils';

export default (text: string, level: number) => {
  const hash = slugify(text);
  return `
    <h${level} id="${hash}">
      <a href="#${hash}">${text}</a>
    </h${level}>
  `;
};
