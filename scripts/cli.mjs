import { writeFileSync } from 'fs';
import * as utils from './utils.mjs';
import cliJSON from './data/cli.json' with { type: 'json' };
import cliOverrides from './data/meta-override.json' with { type: 'json' };

const commandToKebab = (str) =>
  str
    .replace('ionic ', '')
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase();

(async function () {
  const { commands } = cliJSON;

  commands.map(writePage);
  console.log(`📟 CLI Commands Generated`);
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

  const path = `cli/commands/${commandToKebab(page.name)}.mdx`;
  writeFileSync(`docs/${path}`, data);
  writeFileSync(`versioned_docs/version-v8/${path}`, data);
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
