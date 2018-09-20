export default function getVersionMarkup(command): string {
  let markdown = `# ${command.name}\n\n`;

  markdown += `\`${command.name} `;
  markdown += command.inputs.map(input => input.required ?
    `<${input.name}>` : `[<${input.name}>]`).join(' ');
  markdown += command.options && command.options.length ? ' [options]' : '';
  markdown += '`\n\n';

  if (command.summary) {
    markdown += `<p class="intro"><strong>${command.summary}</strong></p>\n\n`;
  }

  if (command.description) {
    markdown += '<p class="intro">' + command.description
      .replace(/\n\n/g, '</p>\n<p class="intro">')
      .replace(/\n\\\[([2-9])/g, '<br>\n\\\[$1')
      .replace(/&amp;/g, '&')
      .replace(/&gt;/g, '>')
      .replace(/&lt;/g, '<')
      .replace(/\n- /g, '</p>\n\n- ')
      .replace(/(- .*?)<\/p>\n/g, '$1\n\n');
    markdown += `\n</p>\n\n`;
  }

  if (command.exampleCommands.length) {
    markdown += '## Examples\n\n';
    markdown += '```shell\n';
    markdown += command.exampleCommands.map(cmd => `$ ${cmd}`).join('\n');
    markdown += '\n```\n\n';
  }

  markdown += generateInputsList(command.inputs);

  markdown += generateOptionsList(command.options);

  return markdown;
}

function generateInputsList(inputs) {
  if (!inputs.length) return '';

  let str = `## Inputs\n\n<dl>\n\n`;

  for (const input of inputs) {
    str += `<dt><h4>${input.name}</h4>`;
    if (input.required) {
      str += `**Required:** \`true\`\n`;
    }
    str += `</dt>\n`;
    str += `<dd>${input.summary}</dd>\n\n`;
  }

  return str + '</dl>\n\n\n';
}

function generateOptionsList(options) {
  if (!options.length) return '';

  let str = `## Options\n\n<dl>\n\n`;

  for (const option of options) {
    str += `<dt><h4>--${option.type === 'boolean' && option.default ?
      'no-' : ''}${option.name}</h4>`;
    if (option.aliases.length) {
      str += `**Alias:** \`-${option.aliases.join(', -')}\`\n`;
    }
    if (option.type) {
      str += `**Type:** \`${option.type}\`\n`;
    }
    str += `</dt>\n`;
    str += `<dd>${option.summary}</dd>\n\n`;
  }

  return str + '</dl>\n\n\n';
}
