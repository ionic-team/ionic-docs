export function getVersionMarkup(command): string {
  let markdown = `# ${command.name}\n\n`;

  if (command.summary) {
    markdown += `<p class="intro">${command.summary}</p>\n\n`;
  }

  if (command.exampleCommands.length) {
    markdown += '<h2>Usage</h2>\n\n';
    markdown += '```shell\n';
    markdown += command.exampleCommands.join('\n');
    markdown += '\n```\n\n';
  }

  if (command.description) {
    markdown += '<h3>Description</h3>\n\n<p>';
    markdown += command.description
      .replace(/\n\n/g, '</p>\n<p>')
      .replace(/\n\\\[([2-9])/g, '<br>\n\\\[$1');
    markdown += `\n</p>\n\n`;
  }

  markdown += generateOptionsList(command.options);

  return markdown;
}

function generateOptionsList(options) {
  if (!options.length) return '';

  let str = `<h2>Options</h2>\n\n<dl>\n\n`;

  for (const option of options) {
    str += `<dt><h4>--${option.name}</h4>`;
    if (option.aliases.length) {
      str += `**Alias:** \`-${option.aliases[0]}\``;
    }
    str += `</dt>\n`;
    str += `<dd>${option.summary}</dd>\n\n`;
  }

  return str + '</dl>\n\n\n';
}
