const fetch = require("node-fetch");
const fs = require("fs");
const path = require("path");
const cliJSON = require("./data/cli.json");

const DEMOS_PATH = path.resolve("static/demos");

const commandToKebab = str => str.replace('ionic ', '')
                                 .replace(/([a-z])([A-Z])/g, '$1-$2')
                                 .replace(/[\s_]+/g, '-')
                                 .toLowerCase();
const getCLINav = () => cliJSON.commands.map(command => 
  `cli/commands/${commandToKebab(command.name)}`
)
exports.getCLINav = getCLINav;


(async function() {
  console.log(cliJSON);
  // const response = await fetch("https://unpkg.com/@ionic/docs@5.7.0-dev.202106101802.0e38d42/core.json");
  // const { components } = await response.json();

  cliJSON.commands.map(writePage);
}());

function writePage(page) {
  const data = [
    renderFrontmatter(page),
    renderReadme(page),
    // renderUsage(page),
    // renderProperties(page),
    // renderEvents(page),
    // renderMethods(page),
    // renderParts(page),
    // renderCustomProps(page),
    // renderSlots(page)
  ].join("");
  
  const path = `docs/cli/commands/${commandToKebab(page.name)}.md`;
  fs.writeFileSync(path, data);
}

function renderFrontmatter({ name }) {
  const frontmatter = {
    title: name.replace('ionic ', '')
  };

  return `---
${Object.entries(frontmatter)
  .map(([key, value]) => `${key}: ${value}`)
  .join("\n")}
---

`;
}

function renderReadme({ description, name }) {
  return `
# ${name}

${description}`;
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

