import Prism from 'prismjs';
import loadLanguages from 'prismjs/components/';

const languages = ['tsx', 'bash', 'typescript', 'markup', 'css', 'json', 'javascript', 'html'];
loadLanguages(languages);

export default (code: string, info: string) => {
  let [lang] = info.split(/\s+/);

  lang = (lang === 'shell') ? 'bash' : lang.toLowerCase();

  if (lang != null && languages.indexOf(lang) !== -1) {
    code = Prism.highlight(code, Prism.languages[lang]);
  }

  return (
    `<docs-code language="${lang}">${code}</docs-code>`
  );
};
