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

    let releases = await request.json();
    releases = releases.slice(0, 10);

    return releases.map(release => {
      const body = renderMarkdown(release.body);
      const { name, tag_name, published_at } = release;

      return {
        name,
        body,
        tag_name,
        published_at
      };
    });
  } catch (error) {
    throw error;
  }
}
