import Prism from 'prismjs';
import loadLanguages from 'prismjs/components/';

const languages = ['tsx', 'typescript', 'markup', 'css', 'json', 'javascript', 'html'];
loadLanguages(languages);

export default (code: string, info: string) => {
  let [lang] = info.split(/\s+/);
  lang = lang.toLowerCase();

  if (['shell', 'bash'].indexOf(lang) !== -1) {
    lang = 'bash';
    code = code.split(/\r?\n/)
        .map(l => l.replace(/^\s*\$\s*/, '<span class="cursor"></span>'))
        .join('\n');

  } else if (lang != null && languages.indexOf(lang) !== -1) {
    code = Prism.highlight(code, Prism.languages[lang]);
  }

  return (
    `<docs-code language="${lang}">${code}</docs-code>`
  );
};
