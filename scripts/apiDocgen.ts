import { renderMarkdown } from '../src/markdown';
const r = '\n\n';

export function getComponentMarkup(
  component,
  version: string,
  hasDemo = false): string {

  let markdown = getFrontMatter(component.tag.replace('ion-', ''), version, hasDemo);
  markdown += component.readme
    .replace(/\n\n(.*?)\n\n/, '\n\n<p class="intro">$1</p>\n\n');
  markdown += generateUsage(component.usage);
  markdown += generatePropertyList(component.props);
  markdown += generateEventsTable(component.events);
  markdown += generateMethodList(component.methods);
  // console.log(Object.keys(component));
  // console.log(component.props);

  // if (component.tag === 'ion-router') {
  //   // console.log(component);
  // }

  return markdown;
}

function getFrontMatter(name, version, hasDemo) {
  let str = '---\r\n';
  if (hasDemo) {
    str += `previewUrl: "/docs/content/api/${version}/${name}-demo.html"`;
    str += '\r\n';
  }
  str += '---\r\n';
  return str;
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

function generateUsage(usage) {
  if (!usage) return '';
  let str = `${r}## Usage${r}`;
  str += `<div>\n<tab-group tabs="${Object.keys(usage).join(',')}">\n`;
  for (const version in usage) {
    str += `<div slot="${version}">\n`;
    str += renderMarkdown(usage[version], {disableHtmlPreviews: true}).body;
    str += `\n</div>\n`;
  }
  return str + `</tab-group>\n</div>\n\n`;
}

