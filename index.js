const fetch = require("node-fetch");
const fs = require("fs");
const path = require("path");

const DEMOS_PATH = path.resolve("static/demos");

(async function() {
  const response = await fetch("https://unpkg.com/@ionic/docs/core.json");
  const { components } = await response.json();

  components.map(writePage);
}());

function writePage(page) {
  const data = [
    renderFrontmatter(page),
    renderReadme(page),
    renderUsage(page),
    renderProperties(page),
    renderEvents(page),
    renderMethods(page),
    renderParts(page),
    renderCustomProps(page),
    renderSlots(page)
  ].join("");

  const path = `docs/api/${page.tag.slice(4)}.md`;
  fs.writeFileSync(path, data);
}

function renderFrontmatter({ tag }) {
  const frontmatter = {
    title: tag
  };

  const demoPath = `api/${tag.slice(4)}/index.html`;
  if (fs.existsSync(path.join(DEMOS_PATH, demoPath))) {
    frontmatter.demoUrl = `/docs/demos/${demoPath}`;
    frontmatter.demoSourceUrl = `https://github.com/ionic-team/ionic-docs/tree/main/static/demos/${demoPath}`;
  }

  return `---
${Object.entries(frontmatter)
  .map(([key, value]) => `${key}: ${value}`)
  .join("\n")}
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

`;
}

function renderReadme({ readme }) {
  return readme.substring(readme.indexOf("\n") + 1);
}

function renderUsage({ usage }) {
  const keys = Object.keys(usage);

  if (keys.length === 0) {
    return "";
  }

  if (keys.length === 1) {
    return `
## Usage

${usage[keys[0]]}
`;
  }

  return `
## Usage

<Tabs defaultValue="${keys[0]}" values={[${keys
    .map(key => `{ value: '${key}', label: '${key.toUpperCase()}' }`)
    .join(", ")}]}>

${Object.entries(usage)
  .map(
    ([key, value]) => `
<TabItem value="${key}">

${value}

</TabItem>
`
  )
  .join("\n")}
</Tabs>
`;
}

function renderProperties({ props: properties }) {
  if (properties.length === 0) {
    return "";
  }

  return `
## Properties

${properties
  .map(
    prop => `
### ${prop.name}

| | |
| --- | --- |
| **Description** | ${prop.docs.split("\n").join("<br />")} |
| **Attribute** | \`${prop.attr}\` |
| **Type** | \`${prop.type.replace(/\|/g, "\\|")}\` |
| **Default** | \`${prop.default}\` |

`
  )
  .join("\n")}
`;
}

function renderEvents({ events }) {
  if (events.length === 0) {
    return "";
  }

  return `
## Events

| Name | Description |
| --- | --- |
${events.map(event => `| \`${event.event}\` | ${event.docs} |`).join("\n")}

`;
}

function renderMethods({ methods }) {
  if (methods.length === 0) {
    return "";
  }

  return `
## Methods

${methods
  .map(
    method => `
### ${method.name}

| | |
| --- | --- |
| **Description** | ${method.docs.split("\n").join("<br />")} |
| **Signature** | \`${method.signature.replace(/\|/g, "\\|")}\` |
`
  )
  .join("\n")}

`;
}

function renderParts({ parts }) {
  if (parts.length === 0) {
    return "";
  }

  return `
## CSS Shadow Parts

| Name | Description |
| --- | --- |
${parts.map(prop => `| \`${prop.name}\` | ${prop.docs} |`).join("\n")}

`;
}

function renderCustomProps({ styles: customProps }) {
  if (customProps.length === 0) {
    return "";
  }

  return `
## CSS Custom Properties

| Name | Description |
| --- | --- |
${customProps.map(prop => `| \`${prop.name}\` | ${prop.docs} |`).join("\n")}

`;
}

function renderSlots({ slots }) {
  if (slots.length === 0) {
    return "";
  }

  return `
## Slots

| Name | Description |
| --- | --- |
${slots.map(slot => `| \`${slot.name}\` | ${slot.docs} |`).join("\n")}

`;
}
