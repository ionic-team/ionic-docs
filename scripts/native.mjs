import { writeFileSync } from 'fs';
import fetch from 'node-fetch';

// replace with latest once it's relased
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
   * - removes JSDoc HTML comments as they break docusauurs
   * - The { character is used for opening JavaScript expressions.
   * MDX will now fail if what you put inside {expression} that is
   * not a valid expression: replace it by escaping it with a backslash.
   * Only do this for { characters that are inside <code> blocks.
   */
  readme = readme.replaceAll(/<!--.*-->/g, '').replace(/<code>(.*?)<\/code>/g, (_match, p1) => {
    // Replace { with \{ inside the matched <code> content
    return `<code>${p1.replace(/{/g, '\\{')}</code>`;
  });

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
  const rsp = await fetch(url);
  return rsp.text();
}

async function getPkgJsonData(pluginId) {
  const url = `https://cdn.jsdelivr.net/npm/@capacitor/${pluginId}@${tag}/package.json`;
  const rsp = await fetch(url);
  return rsp.json();
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
