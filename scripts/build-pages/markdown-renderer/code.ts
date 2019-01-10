import hljs from 'highlight.js';

export default (code: string, info: string) => {
  const [lang, ...params] = info.split(/\s+/);
  return (
    `<docs-code language="${lang}">${hljs.highlightAuto(code, [lang]).value}</docs-code>`
  );
};
