import { JSDOM } from 'jsdom';
import { slugify } from '../../../src/utils';

export default (text: string, level: number) => {
  const { textContent } = JSDOM.fragment(text);
  const hash = slugify(textContent);
  return `
    <h${level} id="${hash}">
      <a href="#${hash}">${text}</a>
    </h${level}>
  `;
};
