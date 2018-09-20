import { renderMarkdown } from '../../src/markdown';
import { introify } from '../utils';
const r = '\n\n';

export function getComponentMarkup(
  component,
  version: string,
  hasDemo = false): string {

  let markdown = getFrontMatter(
    component.tag.replace('ion-', ''), version, hasDemo, component.demoSrc);
  markdown += introify(component.readme)
    // fixing relative links
    .replace(/\(\.\.\/\.(.*)\/\w*\)/g, '($1)') // ../../action-sheet/ActionSheet
    .replace(/\(\.\.\/(.*)\)/g, '(./$1)'); // ../action-sheet-controller
  markdown += generateUsage(component.usage);
  markdown += generatePropertyList(component.props);
  markdown += generateEventsTable(component.events);
  markdown += generateMethodList(component.methods);
  markdown += generateStylesTable(component.styles);
  // console.log(Object.keys(component));
  // console.log(component.props);

  // if (component.tag === 'ion-action-sheet-controller') {
  //   console.log(component.readme);
  // }

  return markdown;
}

function getFrontMatter(name, version, hasDemo = null, demoSource = null) {
  return `---
${ hasDemo ?
  `previewUrl: "/docs/content/api/${version}/${name}-demo.html"` : '' }
${ hasDemo && demoSource.length ? `previewSource: "${demoSource}"` : '' }
---
`;
}

function generatePropertyList(items) {
  if (!items.length) return '';

  let str = `## Properties ${r}<dl>\n`;

  for (let i = 0; i < items.length; i++) {
    str += `<dt><h3>${items[i].name}</h3>`;
    if (items[i].attr) {
      str += `<strong>Attribute:</strong>  <code>${items[i].attr}</code>\n`;
    }
    if (items[i].type) {
      str += `<strong>Type:</strong> <code>${items[i].type}</code>\n`;
    }
    str += `</dt>\n`;
    str += `<dd>${items[i].docs}</dd>${r}`;
  }

  return str + `</dl>${r}\n`;
}

function generateEventsTable(items) {
  if (!items.length) return '';

  let str = `## Events${r}<dl>`;

  for (let i = 0; i < items.length; i++) {
    str += `<dt><h3>${items[i].event}${r}</h3></dt>\n`;
    str += `<dd>${items[i].docs}</dd>${r}`;
  }

  return str + `</dl>${r}\n`;
}

function generateMethodList(items) {
  if (!items.length) return '';

  let str = `## Methods${r}<dl>${r}`;

  for (let i = 0; i < items.length; i++) {
    str += `<dt><h3>${items[i].name}()</h3></dt>\n`;
    str += `<dd>${items[i].docs}</dd>${r}`;
  }

  return str + `</dl>${r}\r\n`;
}

function generateStylesTable(items) {
  if (!items.length) return '';

  return `
## CSS Custom Properties

| Name | Description |
| ---- | ----------- |
${items.map(item => `| \`${item.name}\` | ${item.docs} |`).join('\n')}
`;
}

function generateUsage(usage): string {
  if (!usage) return '';
  let str = `${r}## Usage${r}`;
  str += `<div>\n<tab-group tabs="${Object.keys(usage).join(',')}">\n`;
  for (const version in usage) {
    str += `<div slot="${version}">\n`;
    str += ecapeTics(
      decodeHTMLEntities(
        renderMarkdown(usage[version], {disableHtmlPreviews: true}).body
      )
    );
    str += `\n</div>\n`;
  }
  return str + `</tab-group>\n</div>\n\n`;
}

function ecapeTics(text) {
  return text.replace(/`/g, '\\`');
}

function decodeHTMLEntities(text) {
  const entities = [
      ['amp', '&'],
      // ['apos', '\''],
      // ['#x27', '\''],
      // ['#x2F', '/'],
      // ['#39', '\''],
      // ['#47', '/'],
      // ['lt', '<'],
      // ['gt', '>'],
      // ['nbsp', ' '],
      // ['quot', '"']
  ];

  for (let i = 0, max = entities.length; i < max; ++i) {
    text = text.replace(new RegExp(`&${entities[i][0]};`, 'g'), entities[i][1]);
  }

  return text;
}
