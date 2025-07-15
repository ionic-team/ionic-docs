const fetch = globalThis.fetch;
const fs = require('fs');
const path = require('path');
const { api: apiOverrides } = require('./data/meta-override.json');
const utils = require('./utils.mjs');

const DEMOS_PATH = path.resolve('static/demos');
let COMPONENT_LINK_REGEXP;

(async function () {
  try {
    const response = await fetch(
      'https://raw.githubusercontent.com/ionic-team/ionic-docs/translation/jp/scripts/data/translated-api.json',
    );

    if (!response.ok) {
      console.error(`Failed to fetch translated API data: ${response.status} ${response.statusText}`);
      return;
    }

    const data = await response.json();

    if (!data || !data.components) {
      console.error('Invalid API data structure - missing components');
      return;
    }

    const { components } = data;

    const names = components.map((component) => component.tag.slice(4));
    // matches all relative markdown links to a component, e.g. (../button)
    COMPONENT_LINK_REGEXP = new RegExp(`\\(../(${names.join('|')})/?(#[^)]+)?\\)`, 'g');

    components.map(writePage);
  } catch (error) {
    console.error('Error fetching or processing translated API data:', error);
    // Don't fail the build, just skip Japanese API generation
    console.log('Skipping Japanese API generation due to error');
  }
})();

function writePage(page) {
  try {
    let data = [
      renderFrontmatter(page),
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

    // Ensure directory exists
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(filePath, data);
  } catch (error) {
    console.error(`Error writing page for ${page.tag}:`, error);
  }
}

function renderFrontmatter({ tag }) {
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

function renderReadme(page) {
  // Add null/undefined check
  if (!page || !page.readme) {
    console.warn(`Missing readme for component: ${page?.tag || 'unknown'}`);
    return '';
  }

  const readme = page.readme;
  const endIndex = readme.indexOf('\n');

  // Add additional safety check
  if (endIndex === -1) {
    return readme; // Return the whole readme if no newline found
  }

  const title = readme.substring(0, endIndex);
  const rest = readme.substring(endIndex);

  const addAdmonitions = (text) =>
    text.replace(/\n\n>/gm, '\n\n:::note').replace(/:::note(.*?)\n(#|\n|^)/gm, ':::note\n$1\n:::\n\n$2');

  return `
import EncapsulationPill from '@components/page/api/EncapsulationPill';

${page.encapsulation !== 'none' ? `<EncapsulationPill type="${page.encapsulation}" />` : ''}


${addAdmonitions(rest)}
  `;
}

function renderUsage({ usage }) {
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
`,
  )
  .join('\n')}
</Tabs>
`;
}

function renderProperties({ props: properties }) {
  if (properties.length === 0) {
    return '';
  }

  // NOTE: replaces | with U+FF5C since MDX renders \| in tables incorrectly
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
| **Type** | \`${prop.type.replace(/\|/g, '\uff5c')}\` |
| **Default** | \`${prop.default}\` |

`,
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

  // NOTE: replaces | with U+FF5C since MDX renders \| in tables incorrectly
  return `
## Methods

${methods
  .map(
    (method) => `
### ${method.name}

| | |
| --- | --- |
| **Description** | ${method.docs.split('\n').join('<br />')} |
| **Signature** | \`${method.signature.replace(/\|/g, '\uff5c')}\` |
`,
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
