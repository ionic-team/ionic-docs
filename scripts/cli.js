const fs = require('fs');
const utils = require('./utils');
const cliJSON = require('./data/cli.json');
const { cli: cliOverrides } = require('./data/meta-override.json');

const commandToKebab = (str) =>
  str
    .replace('ionic ', '')
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase();

(async function () {
  // console.log(cliJSON);

  cliJSON.commands.map(writePage);
})();

function writePage(page) {
  const data = [
    renderFrontmatter(page),
    renderIntro(page),
    renderInputs(page),
    renderOptions(page),
    renderAdvancedOptions(page),
    renderExamples(page),
  ].join('');

  const path = `cli/commands/${commandToKebab(page.name)}.md`;
  fs.writeFileSync(path, data);
}

function renderFrontmatter({ name, groups }) {
  const shortName = name.replace('ionic ', '');
  const slug = commandToKebab(shortName);

  const frontmatter = {
    title: name,
    sidebar_label: shortName,
  };

  const deprecated = groups.includes('deprecated')
    ? ':::warning\nThis command has been deprecated and will be removed in an upcoming major release of the Ionic CLI.\n:::'
    : '';

  return `---
${Object.entries(frontmatter)
  .map(([key, value]) => `${key}: ${typeof value === 'string' ? `"${value.replace('"', '\\"')}"` : value}`)
  .join('\n')}
---
${utils.getHeadTag(cliOverrides[slug])}

${deprecated}
`;
}

function renderIntro({ description, summary, name, options, inputs }) {
  let args = '';
  if (inputs && inputs.length > 0) {
    for (let input of inputs) {
      args += ` [${input.name}]`;
    }
  }
  if (options && options.length > 0) {
    args += ' [options]';
  }

  return `
${summary}

\`\`\`shell
$ ${name}${args}
\`\`\`

${description}`;
}

function renderExamples({ exampleCommands }) {
  if (!exampleCommands || exampleCommands.length === 0) {
    return '';
  }

  return `
## Examples

\`\`\`shell
${exampleCommands.map((command) => `$ ${command}`).join('\n')}
\`\`\`
`;
}

function renderInputs({ inputs }) {
  if (inputs.length === 0) {
    return '';
  }

  return utils.renderList('Inputs', inputs);
}

function renderOptions({ options }) {
  options = options.filter((option) => !option.groups.includes('advanced'));

  if (options.length === 0) {
    return '';
  }
  return utils.renderOptions('Options', options);
}

function renderAdvancedOptions({ options }) {
  options = options.filter((option) => option.groups.includes('advanced'));

  if (options.length === 0) {
    return '';
  }
  return utils.renderOptions('Advanced Options', options);
}

// function renderProperties({ props: properties }) {
//   if (properties.length === 0) {
//     return "";
//   }

//   return `
// ## Properties

// ${properties
//   .map(
//     prop => `
// ### ${prop.name}

// | | |
// | --- | --- |
// | **Description** | ${prop.docs.split("\n").join("<br />")} |
// | **Attribute** | \`${prop.attr}\` |
// | **Type** | \`${prop.type.replace(/\|/g, "\\|")}\` |
// | **Default** | \`${prop.default}\` |

// `
//   )
//   .join("\n")}
// `;
// }

// function renderEvents({ events }) {
//   if (events.length === 0) {
//     return "";
//   }

//   return `
// ## Events

// | Name | Description |
// | --- | --- |
// ${events.map(event => `| \`${event.event}\` | ${event.docs} |`).join("\n")}

// `;
// }

// function renderMethods({ methods }) {
//   if (methods.length === 0) {
//     return "";
//   }

//   return `
// ## Methods

// ${methods
//   .map(
//     method => `
// ### ${method.name}

// | | |
// | --- | --- |
// | **Description** | ${method.docs.split("\n").join("<br />")} |
// | **Signature** | \`${method.signature.replace(/\|/g, "\\|")}\` |
// `
//   )
//   .join("\n")}

// `;
// }

// function renderParts({ parts }) {
//   if (parts.length === 0) {
//     return "";
//   }

//   return `
// ## CSS Shadow Parts

// | Name | Description |
// | --- | --- |
// ${parts.map(prop => `| \`${prop.name}\` | ${prop.docs} |`).join("\n")}

// `;
// }

// function renderCustomProps({ styles: customProps }) {
//   if (customProps.length === 0) {
//     return "";
//   }

//   return `
// ## CSS Custom Properties

// | Name | Description |
// | --- | --- |
// ${customProps.map(prop => `| \`${prop.name}\` | ${prop.docs} |`).join("\n")}

// `;
// }

// function renderSlots({ slots }) {
//   if (slots.length === 0) {
//     return "";
//   }

//   return `
// ## Slots

// | Name | Description |
// | --- | --- |
// ${slots.map(slot => `| \`${slot.name}\` | ${slot.docs} |`).join("\n")}

// `;
// }
