import * as fs from 'fs';
import * as path from 'path';
import * as config from './config';

export function getComponentMarkup(
  component,
  version: string,
  hasDemo = false): string {

  let markdown = getFrontMatter(component.tag.replace('ion-', ''), version, hasDemo);
  markdown += component.readme + '\r\n';
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
    str += `previewUrl: "/docs/docs-content/api/${version}/${name}-demo.html"`;
    str += '\r\n';
  }
  str += '---\r\n';
  return str;
}

function generatePropertyList(items) {
  if (!items.length) return '';

  let str = `<h2>Properties</h2> \r\n\r\n<dl>`;

  for (let i = 0; i < items.length; i++) {
    str += `<dt>\r\n<h3>${items[i].name}</h3> \r\n`;
    if (items[i].attr) {
      str += `<strong>Attribute:</strong>  <code>${items[i].attr}</code>\r\n`;
    }
    if (items[i].type) {
      str += `<strong>Type:</strong> <code>${items[i].type}</code>\r\n`;
    }
    str += `<dt>`;
    str += `<dd>${items[i].docs}</dd>\r\n\r\n`;
  }

  return str + '</dl>\r\n\r\n\r\n';
}

function generateEventsTable(items) {
  if (!items.length) return '';

  let str = `<h2>Events</h2>\r\n\r\n<dl>`;

  for (let i = 0; i < items.length; i++) {
    str += `<dt>\r\n<h3>${items[i].event}</h3><dt>\r\n`;
    // str += `<td style="text-align:center">${items[i].bubbles ? 'Y' : 'N'}, `;
    // str += `${items[i].cancelable ? 'Y' : 'N'}, `;
    // str += `${items[i].composed ? 'Y' : 'N'}</td>`;
    str += `<dd>${items[i].docs}</dd>\r\n\r\n`;
  }

  return str + '</dl>\r\n\r\n\r\n';
}

function generateMethodList(items) {
  if (!items.length) return '';

  let str = `<h2>Methods</h2>\r\n<dl>\r\n`;

  for (let i = 0; i < items.length; i++) {
    str += `<dt><h3>${items[i].name}()</h3></dt>\r\n`;
    str += `<dd>${items[i].docs}</dd>\r\n\r\n`;
  }

  return str + '</dl>\r\n\r\n\r\n';
}

