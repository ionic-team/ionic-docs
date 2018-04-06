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

  let str = `<h2>Properties</h2> \r\n\r\n`;

  for (let i = 0; i < items.length; i++) {
    str += `<h3><code>${items[i].name}</code>`;
    if (items[i].type) {
      str += `<code>: <small>${items[i].type}</small></code>`;
    }
    str += `</h3> \r\n`;

    if (items[i].attr) {
      str += `<small class="attr-format"><code>${items[i].attr}</code></small>`;
    }
    str += `<p>${items[i].docs}</p>\r\n\r\n`;

  }

  return str + '\r\n';
}

function generateEventsTable(items) {
  if (!items.length) return '';

  let str = `<h2>Events</h2> \r\n\r\n`;

  str += '<table><tr><th>Name</th><th><small>Bubbles<br>Cancelable<br>';
  str += 'Composed</small></th><th>Description</th></tr>';

  for (let i = 0; i < items.length; i++) {
    str += `<tr><td><code>${items[i].event}</code></td>`;
    str += `<td style="text-align:center">${items[i].bubbles ? 'Y' : 'N'}, `;
    str += `${items[i].cancelable ? 'Y' : 'N'}, `;
    str += `${items[i].composed ? 'Y' : 'N'}</td>`;
    str += `<td>${items[i].docs}</td></tr>`;
  }

  return str + '</table>\r\n';
}

function generateMethodList(items) {
  if (!items.length) return '';

  let str = `<h2>Methods</h2> \r\n\r\n`;

  for (let i = 0; i < items.length; i++) {
    str += `<h3><code>${items[i].name}()</code></h3> \r\n`;
    str += `<p>${items[i].docs}</p>\r\n\r\n`;
  }

  return str + '\r\n';
}

