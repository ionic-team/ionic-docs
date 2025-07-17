import { writeFileSync } from 'fs';

// replace with latest once it's released
const tag = 'latest';

const pluginApis = [
  'action-sheet',
  'app',
  'app-launcher',
  'browser',
  'camera',
  'clipboard',
  'device',
  'dialog',
  'filesystem',
  'geolocation',
  'google-maps',
  'haptics',
  'keyboard',
  'local-notifications',
  'motion',
  'network',
  'preferences',
  'push-notifications',
  'screen-reader',
  'share',
  'splash-screen',
  'status-bar',
  'text-zoom',
  'toast',
];

async function buildPluginApiDocs(pluginId) {
  const [readme, pkgJson] = await Promise.all([getReadme(pluginId), getPkgJsonData(pluginId)]);

  const apiContent = createApiPage(pluginId, readme, pkgJson);
  const fileName = `${pluginId}.md`;

  writeFileSync(`docs/native/${fileName}`, apiContent);
  writeFileSync(`versioned_docs/version-v6/native/${fileName}`, apiContent);
  writeFileSync(`versioned_docs/version-v7/native/${fileName}`, apiContent);
}

function createApiPage(pluginId, readme, pkgJson) {
  const title = `${toTitleCase(pluginId)} Capacitor Plugin API`;
  const desc = pkgJson.description ? pkgJson.description.replace(/\n/g, ' ') : title;
  const editUrl = `https://github.com/ionic-team/capacitor-plugins/blob/main/${pluginId}/README.md`;
  const editApiUrl = `https://github.com/ionic-team/capacitor-plugins/blob/main/${pluginId}/src/definitions.ts`;
  const sidebarLabel = toTitleCase(pluginId);

  /**
   * Cleanup and transform JSDoc content for compatibility with MDX/Docusaurus:
   * 
   * - Remove HTML comments (`<!-- ... -->`) which are not valid in MDX and will cause parsing errors.
   * - Escape `{` characters inside <code> blocks because MDX treats `{}` as JavaScript expressions. Unescaped `{` inside code blocks can cause parsing errors.
   * - Convert JSDoc-style {@link URL|Text} and {@link URL} to proper Markdown links:
   *   - {@link URL|Text} → [Text](URL)
   *   - {@link URL} → [URL](URL)
   *   This is necessary because MDX does not understand the JSDoc `@link` syntax, and leaving it unconverted will cause parsing errors.
   */
  readme = readme
    // Remove HTML comments
    .replaceAll(/<!--.*-->/g, '')
    // Escape `{` characters inside <code> blocks to avoid Markdown parsing issues
    .replace(/<code>(.*?)<\/code>/g, (_match, p1) => {
      // Replace { with \{
      return `<code>${p1.replace(/{/g, '\\{')}</code>`;
    })
    // Convert {@link URL|Text} to [Text](URL)
    .replace(/\{@link\s+([^\s|}]+)\|([^}]+)\}/g, '[$2]($1)')
    // Convert {@link URL} to [URL](URL)
    .replace(/\{@link\s+([^}]+)\}/g, '[$1]($1)');

  return `
---
title: ${title}
description: ${desc}
editUrl: ${editUrl}
editApiUrl: ${editApiUrl}
sidebar_label: ${sidebarLabel}
---
${readme}`.trim();
}

async function getReadme(pluginId) {
  const url = `https://cdn.jsdelivr.net/npm/@capacitor/${pluginId}@${tag}/README.md`;
  const response = await fetch(url);
  
  if (!response.ok) {
    throw new Error(`Failed to fetch README for ${pluginId}: ${response.status}`);
  }
  
  return response.text();
}

async function getPkgJsonData(pluginId) {
  const url = `https://cdn.jsdelivr.net/npm/@capacitor/${pluginId}@${tag}/package.json`;
  const response = await fetch(url);
  
  if (!response.ok) {
    throw new Error(`Failed to fetch package.json for ${pluginId}: ${response.status}`);
  }
  
  return response.json();
}

async function main() {
  await Promise.all(pluginApis.map(buildPluginApiDocs));
  console.log(`Plugin API Files Updated 🎸`);
}

function toTitleCase(str) {
  return str.replace(/(^\w|-\w)/g, (s) => {
    return s.replace(/-/, ' ').toUpperCase();
  });
}

if (!String.prototype.replaceAll) {
  String.prototype.replaceAll = function (str, newStr) {
    // If a regex pattern
    if (Object.prototype.toString.call(str).toLowerCase() === '[object regexp]') {
      return this.replace(str, newStr);
    }

    // If a string
    return this.replace(new RegExp(str, 'g'), newStr);
  };
}

main();
