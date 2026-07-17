import pkg from 'fs-extra';
import fetch from 'node-fetch';
import { resolve, dirname } from 'path';
import { compare } from 'semver';
import { URL, fileURLToPath } from 'url';

import { renderMarkdown } from './utils.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const OUTPUT_PATH = resolve(__dirname, '../src/components/page/reference/ReleaseNotes/release-notes.json');

// export default {
//   title: 'Build Release Notes data',
//   task: async () => outputJson(OUTPUT_PATH, await getReleases(), { spaces: 2 })
// };

// Get the GitHub Releases from Ionic Framework
// -------------------------------------------------------------------------------
// Fetches from the public GitHub API. Unauthenticated requests have a 60 req/hour limit.
// To increase the rate limit, set a GITHUB_TOKEN environment variable.
const getReleases = async () => {
  try {
    const url = new URL('repos/ionic-team/ionic-framework/releases', 'https://api.github.com');
    const headers = process.env.GITHUB_TOKEN ? { Authorization: `token ${process.env.GITHUB_TOKEN}` } : {};
    const request = await fetch(url, { headers });
    const releases = await request.json();

    // Check that the response is an array in case it was
    // successful but returned an object
    if (Array.isArray(releases)) {
      return releases
        .filter((release) => {
          const releasePattern = /^v(\d+)\.(\d+)\.(\d+)$/;

          // All non-prerelease, non-alpha, non-beta, non-rc release
          return releasePattern.test(release.tag_name);
        })
        .map((release) => {
          const body = renderMarkdown(release.body.replace(/^#.*/, '')).value;
          const published_at = parseDate(release.published_at);
          const version = release.tag_name.replace('v', '');
          const type = getVersionType(version);
          const { name, tag_name } = release;

          return {
            body,
            name,
            published_at,
            tag_name,
            type,
            version,
          };
        })
        .sort((a, b) => {
          return -compare(a.tag_name, b.tag_name);
        });
    } else {
      console.error('There was an issue getting releases:', releases);
      return [];
    }
  } catch (error) {
    return [];
  }
};

// Takes the date in format 2019-04-26T18:24:09Z
// and returns it as April 26 2019
function parseDate(datetime) {
  const date = new Date(datetime);
  return date.toLocaleString('en-us', { month: 'long' }) + ' ' + date.getDate() + ' ' + date.getFullYear();
}

// Given a version, return if it is a
// major, minor, or patch release
function getVersionType(version) {
  const releasePattern = /^(\d+)\.(\d+)\.(\d+)$/;

  let type = 'patch';

  if (!releasePattern.test(version)) {
    type = 'prerelease';
  } else if (version.endsWith('.0.0')) {
    type = 'major';
  } else if (version.endsWith('.0')) {
    type = 'minor';
  }

  return type;
}

async function run() {
  const { outputJson, readJson } = pkg;
  const newReleases = await getReleases();

  // Successfully fetched new releases, save them
  if (newReleases.length > 0) {
    outputJson(OUTPUT_PATH, newReleases, { spaces: 2 });
    console.log(`🚀 Release Notes Generated`);
    return;
  }

  // If the fetch failed but we have existing data, keep it
  try {
    const existingData = await readJson(OUTPUT_PATH);
    if (Array.isArray(existingData) && existingData.length > 0) {
      console.log(`🚀 Release Notes Preserved`);
      return;
    }
  } catch (error) {
    console.warn(`⚠️  Could not read existing release notes: ${error.message}`);
  }

  // If we have no new data and no cached data, error
  throw new Error('Failed to fetch release notes from GitHub and no cached data available');
}

run();
