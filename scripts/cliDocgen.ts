import * as fs from 'fs';
import * as path from 'path';
import * as config from './config';

export function getVersionMarkup(doc): string {

  const title =  ((type) => {
    switch (type) {
      case 'ionic1':
        return 'Ionic v1 CLI Docs';
      case 'ionic-angular':
        return 'Ionic v2 and v3 CLI Docs';
      default:
        return 'Ionic CLI Docs';
    }
  })(doc['type']);

  let markdown = `# ${title}\r\n\r\n`;

  doc['commands'].forEach(command => {
    markdown += `<h2>${command.name}</h2>\r\n`;

    if (command.summary) {
      markdown += `<h4>${command.summary}</h4>\r\n`;
    }

    if (command.exampleCommands.length) {
      markdown += '<h3 no-anchor>Usage</h3>\r\n\r\n';
      markdown += '<code-block language="shell">\r\n';
      markdown += command.exampleCommands.join('\r\n');
      markdown += '\r\n</code-block>\r\n\r\n';
    }

    if (command.summary.length) {
      markdown += '<h3 no-anchor>Description</h3>\r\n<p>';
      markdown += command.description
        .replace(/\n\n/g, '</p>\r\n<p>')
        .replace(/\n\\\[([2-9])/g, '<br>\r\n\\\[$1');
      markdown += `</p>\r\n`;
    }

    markdown += generateOptionsList(command.options);

    markdown += '<p><br></p>\r\n\r\n';
  });

  return markdown;
}

function generateOptionsList(options) {
  if (!options.length) return '';

  let str = `<h3 no-anchor>Options</h3>\r\n<dl>\r\n\r\n`;

  for (let i = 0; i < options.length; i++) {
    str += `<dt><h4>--${options[i].name}</h4>`;
    if (options[i].aliases.length) {
      str += `<strong>Alias:</strong> <code>-${options[i].aliases[0]}</code>`;
    }
    str += `</dt>\r\n`;
    str += `<dd>${options[i].summary}</dd>\r\n\r\n`;
  }

  return str + '</dl>\r\n\r\n\r\n';
}
