import pkg from 'fs-extra';
import fetch from 'node-fetch';
import { resolve, dirname } from 'path';
import { compare } from 'semver';
import { URL, fileURLToPath } from 'url';

import { renderMarkdown } from './utils.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const OUTPUT_PATH = resolve(__dirname, '../src/components/page/reference/ReleaseNotes/release-notes.json');

// Get the GitHub Releases from Ionic Framework
// -------------------------------------------------------------------------------
// Requires a GITHUB_TOKEN environment variable. Refer to
// https://github.com/ionic-team/ionic-docs/blob/main/CONTRIBUTING.md#github-token
// for setup instructions.
const getReleases = async () => {
  if (!process.env.GITHUB_TOKEN) {
    throw new Error('GITHUB_TOKEN environment variable is required.');
  }

  const url = new URL('repos/ionic-team/ionic-framework/releases', 'https://api.github.com');
  const headers = { Authorization: `token ${process.env.GITHUB_TOKEN}` };
  const request = await fetch(url, { headers });

  if (!request.ok) {
    const error = await request.json().catch(() => ({}));
    let message = `GitHub API returned ${request.status} ${request.statusText}: ${error.message ?? 'Unknown error'}.`;

    if (request.status === 401 && error.message?.includes('Bad credentials')) {
      message += ' Check that GITHUB_TOKEN is set and is a valid GitHub Personal Access Token.';
    }

    throw new Error(message);
  }

  const releases = await request.json();

  // Check that the response is an array in case it was
  // successful but returned an object
  if (Array.isArray(releases)) {
    return releases
      .filter((release) => {
        const releasePattern = /^v(\d+)\.(\d+)\.(\d+)$/;
        return releasePattern.test(release.tag_name);
      })
      .map((release) => {
        const body = renderMarkdown((release.body ?? '').replace(/^#.*/, '')).value;
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
      .sort((a, b) => -compare(a.tag_name, b.tag_name));
  } else {
    throw new Error('GitHub API returned an unexpected response format.');
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
  const { outputJson } = pkg;
  try {
    const releases = await getReleases();
    outputJson(OUTPUT_PATH, releases, { spaces: 2 });
    console.log(`🚀 Release Notes Generated`);
  } catch (error) {
    // Only fail the build in CI environments and the preview
    // or production Vercel environments.
    const shouldFail = process.env.CI || ['production', 'preview'].includes(process.env.VERCEL_ENV);
    if (shouldFail) {
      console.error(`\n❌ Release Notes Failed\n  ⇢ ${error.message}\n`);
      process.exit(1);
    }
    console.warn(`\n⚠️  Release Notes Failed\n  ⇢ ${error.message}`);
    outputJson(OUTPUT_PATH, [], { spaces: 2 });
  }
}

run();
