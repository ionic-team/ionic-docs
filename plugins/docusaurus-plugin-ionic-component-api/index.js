const fetch = require('node-fetch');

module.exports = function (context, options) {
  return {
    name: 'docusaurus-plugin-ionic-component-api',
    async loadContent() {
      const classicPreset = context.siteConfig.presets.find((preset) => preset[0] === '@docusaurus/preset-classic');
      // Finds the plugin options for @docusaurus/plugin-content-docs
      const docsPluginOptions = classicPreset[1].docs;

      const data = [];
      const currentVersion = docsPluginOptions.versions.current;

      /**
       * Generates the markdown files for all components in a given version.
       * @param {*} version The version, e.g.: v6
       * @param {*} npmTag The npm tag, e.g.: 6 or next
       * @param {*} isCurrentVersion Whether or not this is the current version of the docs
       */
      const generateMarkdownForVersion = async (version, npmTag, isCurrentVersion) => {
        let COMPONENT_LINK_REGEXP;
        const response = await fetch(`https://unpkg.com/@ionic/docs@${npmTag}/core.json`);
        const { components } = await response.json();

        const names = components.map((component) => component.tag.slice(4));
        // matches all relative markdown links to a component, e.g. (../button)
        COMPONENT_LINK_REGEXP = new RegExp(`\\(../(${names.join('|')})/?(#[^)]+)?\\)`, 'g');

        components.forEach((comp) => {
          const compTag = comp.tag.slice(4);
          const outDir = getDirectoryPath(compTag, version, isCurrentVersion);

          data.push({
            outDir,
            componentTag: compTag,
            version,
            props: renderProperties(comp),
            events: renderEvents(comp),
            methods: renderMethods(comp),
            parts: renderParts(comp),
            customProps: renderCustomProps(comp),
            slots: renderSlots(comp),
          });
        });
      };

      for (const version of options.versions) {
        const npmTag = version.slice(1);

        await generateMarkdownForVersion(version, npmTag, false);
      }

      // TODO: remove this before merging
      let npmTag = '8.6.2-dev.11749668763.17db572c';
      // Latest version
      await generateMarkdownForVersion(currentVersion.path || currentVersion.label, npmTag, true);

      return data;
    },
    async contentLoaded({ content, actions }) {
      const { createData } = actions;
      const promises = [];

      for (const data of content) {
        const basePath = `${data.version}/${data.componentTag}`;
        /**
         * createData will create a file within the generated ./docusaurus
         * directory within the plugin directory.
         */
        promises.push(
          createData(`${basePath}/props.md`, data.props),
          createData(`${basePath}/events.md`, data.events),
          createData(`${basePath}/methods.md`, data.methods),
          createData(`${basePath}/parts.md`, data.parts),
          createData(`${basePath}/custom-props.mdx`, data.customProps),
          createData(`${basePath}/slots.md`, data.slots)
        );
      }

      await Promise.all(promises);
    },
    configureWebpack(config, isServer, utils) {
      /**
       * Adds a custom import alias to the webpack configuration, so that the markdown files
       * can import the auto-generated markdown files from: @ionic-internal/component-api/{version}/{componentTag}
       */
      return {
        resolve: {
          alias: {
            '@ionic-internal/component-api': `${context.siteDir}/.docusaurus/docusaurus-plugin-ionic-component-api/default`,
          },
        },
      };
    },
  };
};

/**
 * Calculates the path to the directory where the auto-generated markdown files are stored.
 * @param {*} componentTag The tag name of the component, e.g.: ion-button
 * @param {*} version The version of Ionic that the file pertains to, e.g.: v6
 * @param {*} isCurrentVersion Whether the version is the current version of the docs
 * @returns The path to the directory where the auto-generated markdown files are stored.
 */
function getDirectoryPath(componentTag, version, isCurrentVersion) {
  if (isCurrentVersion) {
    return `./docs/api/auto-generated/${componentTag}`;
  }
  return `./versioned_docs/version-${version}/api/auto-generated/${componentTag}`;
}

/**
 * Formats line breaks in a multiline string to be displayed in a table.
 * @param {*} str The string to format
 * @returns The formatted string
 */
function formatMultiline(str) {
  return str.split('\n\n').join('<br /><br />').split('\n').join(' ');
}

function formatType(attr, type) {
  if (attr === 'color') {
    /**
     * The `color` attribute has an additional type that we don't want to display.
     * The union type is used to allow intellisense to recommend the color names,
     * while still accepting any string value.
     */
    type = type.replace('string & Record<never, never>', 'string');
  }
  return type.replace(/\|/g, '\uff5c');
}

function renderProperties({ props: properties }) {
  if (properties.length === 0) {
    return 'No properties available for this component.';
  }

  // NOTE: replaces | with U+FF5C since MDX renders \| in tables incorrectly
  return `
${properties
  .map((prop) => {
    const isDeprecated = prop.deprecation !== undefined;

    const docs = isDeprecated ? `${prop.docs}\n_Deprecated_ ${prop.deprecation}` : prop.docs;

    return `
### ${prop.name} ${isDeprecated ? '(deprecated)' : ''}

| | |
| --- | --- |
| **Description** | ${formatMultiline(docs)} |
| **Attribute** | \`${prop.attr}\` |
| **Type** | \`${formatType(prop.attr, prop.type)}\` |
| **Default** | \`${prop.default}\` |

`;
  })
  .join('\n')}`;
}

function renderEvents({ events }) {
  if (events.length === 0) {
    return 'No events available for this component.';
  }

  return `
| Name | Description | Bubbles |
| --- | --- | --- |
${events
  .map((event) => {
    const isDeprecated = event.deprecation !== undefined;
    const docs = isDeprecated ? `${event.docs}\n_Deprecated_ ${event.deprecation}` : event.docs;
    return `| \`${event.event}\` ${isDeprecated ? '**(deprecated)**' : ''} | ${formatMultiline(docs)} | \`${
      event.bubbles
    }\` |`;
  })
  .join('\n')}`;
}

/**
 * Formats method parameters for the optional Parameters row of each method table
 * @param {*} paramsArr Array of method parameters
 * @returns formatted parameters for methods table
 */
function renderParameters(paramsArr) {
  if (!paramsArr.some((param) => param.docs)) {
    return '';
  }

  const documentedParams = paramsArr.filter((param) => param.docs);
  const formattedParams = documentedParams
    .map((param) => {
      return `**${param.name}**: ${formatMultiline(param.docs)}`;
    })
    .join('<br/>');
  return `| **Parameters** | ${formattedParams} |`;
}

function renderMethods({ methods }) {
  if (methods.length === 0) {
    return 'No public methods available for this component.';
  }

  // NOTE: replaces | with U+FF5C since MDX renders \| in tables incorrectly
  return `
${methods
  .map(
    (method) => `
### ${method.name}

| | |
| --- | --- |
| **Description** | ${formatMultiline(method.docs)} |
| **Signature** | \`${method.signature.replace(/\|/g, '\uff5c')}\` |
${method.parameters.length !== 0 ? renderParameters(method.parameters) : ''}
`
  )
  .join('\n')}

`;
}

function renderParts({ parts }) {
  if (parts.length === 0) {
    return 'No CSS shadow parts available for this component.';
  }

  return `
| Name | Description |
| --- | --- |
${parts.map((prop) => `| \`${prop.name}\` | ${formatMultiline(prop.docs)} |`).join('\n')}

`;
}

function renderCustomProps({ styles: customProps }) {
  const iosProps = customProps.filter((prop) => prop.mode === 'ios');
  const mdProps = customProps.filter((prop) => prop.mode === 'md');

  const renderTable = (props) => {
    if (props.length === 0) {
      return 'No CSS custom properties available for this component.';
    }

    return `
    | Name | Description |
  | --- | --- |
  ${props.map((prop) => `| \`${prop.name}\` | ${formatMultiline(prop.docs)} |`).join('\n')}
  `;
  };

  if (iosProps.length > 0 || mdProps.length > 0) {
    // If the component has mode-specific custom props, render them in tabs for iOS and MD
    return `
import Tabs from '@theme/Tabs';

import TabItem from '@theme/TabItem';

\`\`\`\`mdx-code-block
<Tabs
  groupId="mode"
  defaultValue="ios"
  values={[
    { value: 'ios', label: 'iOS' },
    { value: 'md', label: 'MD' },
  ]
}>
<TabItem value="ios">

${renderTable(iosProps)}

</TabItem>

<TabItem value="md">

${renderTable(mdProps)}

</TabItem>
</Tabs>

\`\`\`\`

`;
  }
  // Otherwise render the custom props without the tabs for iOS and MD
  return renderTable(customProps);
}

function renderSlots({ slots }) {
  if (slots.length === 0) {
    return 'No slots available for this component.';
  }

  return `
| Name | Description |
| --- | --- |
${slots.map((slot) => `| \`${slot.name}\` | ${formatMultiline(slot.docs)} |`).join('\n')}

`;
}
