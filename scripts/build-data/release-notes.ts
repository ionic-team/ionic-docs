import { resolve } from 'path';
import { outputJson } from 'fs-extra';

import renderMarkdown from '../build-pages/markdown-renderer';

import fetch from 'node-fetch';

import url from 'url';

const OUTPUT_PATH = resolve(
  __dirname,
  '../../src/components/page/data/release-notes.json'
);

export default {
  title: 'Build Release Notes data',
  task: async () => outputJson(OUTPUT_PATH, await getReleases(), { spaces: 2 })
};

// Get the GitHub Releases from Ionic
// This requires an environment GITHUB_TOKEN
// otherwise it may fail silently
async function getReleases() {
  try {
    const request = await fetch(url.format({
      protocol: 'https',
      hostname: 'api.github.com',
      pathname: 'repos/ionic-team/ionic/releases',
      query: {
        access_token: process.env.GITHUB_TOKEN
      }
    }));

    const releases = await request.json();

    return releases.map(release => {
      const body = parseMarkdown(release.body);
      const published_at = parseDate(release.published_at);
      const version = release.tag_name.replace('v', '');
      const patch = release.name.length < 7;
      const { name, tag_name } = release;

      return {
        body,
        patch,
        name,
        published_at,
        tag_name,
        version
      };
    }).sort((a, b) => {
      if (a.tag_name < b.tag_name) {
        return 1;
      }
      if (a.tag_name > b.tag_name) {
        return -1;
      }
      // a must be equal to b
      return 0;
    }).slice(0, 10);
  } catch (error) {
    throw error;
  }
}

// Takes the date in format 2019-04-26T18:24:09Z
// and returns it as April 26 2019
function parseDate(datetime: string) {
  const date = new Date(datetime);
  return date.toLocaleString('en-us', { month: 'long' }) + ' ' + date.getDate() + ' ' + date.getFullYear();
}

function parseMarkdown(content) {
  const markdown = renderMarkdown(content);

  return markdown.replace('<a href=\"#bug-fixes\">Bug Fixes</a>', 'Bug Fixes').replace('<a href=\"#features\">Features</a>', 'Features');
}
