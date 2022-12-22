const fs = require('fs');
const fetch = require('node-fetch');

const API_DIR = './docs/native/';


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
  const filePath = `${API_DIR}${fileName}`
  fs.writeFileSync(filePath, apiContent);
}

function createApiPage(pluginId, readme, pkgJson) {
  const title = `${toTitleCase(pluginId)} Capacitor Plugin API`;
  const desc = pkgJson.description ? pkgJson.description.replace(/\n/g, ' ') : title;
  const editUrl = `https://github.com/ionic-team/capacitor-plugins/blob/main/${pluginId}/README.md`;
  const editApiUrl = `https://github.com/ionic-team/capacitor-plugins/blob/main/${pluginId}/src/definitions.ts`;
  const sidebarLabel = toTitleCase(pluginId);

  // removes JSDoc HTML comments as they break docusauurs
  readme = readme.replaceAll(/<!--.*-->/g, '');

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

main();

