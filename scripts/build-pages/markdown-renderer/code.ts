import Prism from 'prismjs';
import loadLanguages from 'prismjs/components/';

const languages = ['tsx', 'bash', 'typescript', 'markup', 'css', 'json', 'javascript', 'html'];
loadLanguages(languages);

export default (code: string, info: string) => {
  let [lang] = info.split(/\s+/);

  lang = lang.toLowerCase();

  switch (lang) {
  case 'shell':
    lang = 'bash';
    break;
  case 'vue':
    lang = 'html';
    break;
  }

  if (lang != null && languages.indexOf(lang) !== -1) {
    code = Prism.highlight(code, Prism.languages[lang]);
  }

  return (
    `<docs-code language="${lang}">${code}</docs-code>`
  );
};
