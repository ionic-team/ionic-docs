const fs = require('fs');
const path = require('path');
const { api: apiOverrides } = require('./data/meta-override.json');

const DEMOS_PATH = path.resolve('static/demos');
let COMPONENT_LINK_REGEXP;

(async function () {
  try {
    // Dynamic import for ES module utils
    const utils = await import('./utils.mjs');

    const response = await fetch(
      'https://raw.githubusercontent.com/ionic-team/ionic-docs/translation/jp/scripts/data/translated-api.json'
    );

    if (!response.ok) {
      console.error(`Failed to fetch translated API data: ${response.status}`);
      return;
    }

    const { components } = await response.json();

    const names = components.map((component) => component.tag.slice(4));
    // matches all relative markdown links to a component, e.g. (../button)
    COMPONENT_LINK_REGEXP = new RegExp(`\\(../(${names.join('|')})/?(#[^)]+)?\\)`, 'g');

    components.map((page) => writePage(page, utils));
  } catch (error) {
    console.error('Error in api-ja script:', error.message);
  }
})();

function writePage(page, utils) {
  let data = [
    renderFrontmatter(page, utils),
    renderReadme(page),
    renderUsage(page),
    renderProperties(page),
    renderEvents(page),
    renderMethods(page),
    renderParts(page),
    renderCustomProps(page),
    renderSlots(page),
  ].join('');

  // fix relative links, e.g. (../button) -> (button.md)
  data = data.replace(COMPONENT_LINK_REGEXP, '($1.md$2)');

  const filePath = `i18n/ja/docusaurus-plugin-content-docs/current/api/${page.tag.slice(4)}.md`;
  fs.writeFileSync(filePath, data);
}

function renderFrontmatter({ tag }, utils) {
  const frontmatter = {
    title: tag,
  };

  const demoPath = `api/${tag.slice(4)}/index.html`;
  if (fs.existsSync(path.join(DEMOS_PATH, demoPath))) {
    frontmatter.demoUrl = `/docs/demos/${demoPath}`;
    frontmatter.demoSourceUrl = `https://github.com/ionic-team/ionic-docs/tree/main/static/demos/${demoPath}`;
  }

  return `---
${Object.entries(frontmatter)
  .map(([key, value]) => `${key}: ${typeof value === 'string' ? `"${value.replace('"', '\\"')}"` : value}`)
  .join('\n')}
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

${utils.getHeadTag(apiOverrides[tag])}
`;
}

function renderReadme({ readme = '', encapsulation = 'none' }) {
  const endIndex = readme.indexOf('\n');
  const title = readme.substring(0, endIndex);
  const rest = readme.substring(endIndex);

  const addAdmonitions = (text) =>
    text.replace(/\n\n>/gm, '\n\n:::note').replace(/:::note(.*?)\n(#|\n|^)/gm, ':::note\n$1\n:::\n\n$2');

  return `
import EncapsulationPill from '@components/page/api/EncapsulationPill';

${encapsulation !== 'none' ? `<EncapsulationPill type="${encapsulation}" />` : ''}

${addAdmonitions(rest)}
  `;
}

function renderUsage({ usage = {} }) {
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const keys = Object.keys(usage);

  if (keys.length === 0) {
    return '';
  }

  if (keys.length === 1) {
    return `
## Usage

${usage[keys[0]]}
`;
  }

  return `
## Usage

<Tabs groupId="framework" defaultValue="${keys[0]}" values={[${keys
    .map((key) => `{ value: '${key}', label: '${capitalizeFirstLetter(key)}' }`)
    .join(', ')}]}>

${Object.entries(usage)
  .map(
    ([key, value]) => `
<TabItem value="${key}">

${value}

</TabItem>
`
  )
  .join('\n')}
</Tabs>
`;
}

function renderProperties({ props: properties = [] }) {
  if (properties.length === 0) {
    return '';
  }

  return `
## Properties

${properties
  .map(
    (prop) => `
### ${prop.name}

| | |
| --- | --- |
| **Description** | ${prop.docs.split('\n').join('<br />')} |
| **Attribute** | \`${prop.attr}\` |
| **Type** | \`${prop.type.replace(/\|/g, '\\|')}\` |
| **Default** | \`${prop.default}\` |

`
  )
  .join('\n')}
`;
}

function renderEvents({ events }) {
  if (events.length === 0) {
    return '';
  }

  return `
## Events

| Name | Description |
| --- | --- |
${events.map((event) => `| \`${event.event}\` | ${event.docs} |`).join('\n')}

`;
}

function renderMethods({ methods }) {
  if (methods.length === 0) {
    return '';
  }

  return `
## Methods

${methods
  .map(
    (method) => `
### ${method.name}

| | |
| --- | --- |
| **Description** | ${method.docs.split('\n').join('<br />')} |
| **Signature** | \`${method.signature.replace(/\|/g, '\\|')}\` |
`
  )
  .join('\n')}

`;
}

function renderParts({ parts }) {
  if (parts.length === 0) {
    return '';
  }

  return `
## CSS Shadow Parts

| Name | Description |
| --- | --- |
${parts.map((prop) => `| \`${prop.name}\` | ${prop.docs} |`).join('\n')}

`;
}

function renderCustomProps({ styles: customProps }) {
  if (customProps.length === 0) {
    return '';
  }

  return `
## CSS Custom Properties

| Name | Description |
| --- | --- |
${customProps.map((prop) => `| \`${prop.name}\` | ${prop.docs} |`).join('\n')}

`;
}

function renderSlots({ slots }) {
  if (slots.length === 0) {
    return '';
  }

  return `
## Slots

| Name | Description |
| --- | --- |
${slots.map((slot) => `| \`${slot.name}\` | ${slot.docs} |`).join('\n')}

`;
}
