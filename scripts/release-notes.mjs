import pkg from 'fs-extra';
import { resolve, dirname } from 'path';
import { compare } from 'semver';
import { URL, fileURLToPath } from 'url';

import { renderMarkdown } from './utils.mjs';

// Fix for cross-platform __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const OUTPUT_PATH = resolve(__dirname, '../src/components/page/reference/ReleaseNotes/release-notes.json');

// Get the GitHub Releases from Ionic
// -------------------------------------------------------------------------------
// This requires an environment GITHUB_TOKEN otherwise it may fail
//
// To add a GITHUB_TOKEN, follow the steps to create a personal access token:
// https://docs.github.com/en/enterprise-cloud@latest/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token
// and then authorize it to work with SSO:
// https://docs.github.com/en/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on
const getReleases = async () => {
  try {
    const response = await fetch('https://api.github.com/repos/ionic-team/ionic/releases', {
      headers: {
        'Authorization': process.env.GITHUB_TOKEN ? `token ${process.env.GITHUB_TOKEN}` : '',
        'User-Agent': 'ionic-docs',
      },
    });

    if (!response.ok) {
      console.error(`GitHub API responded with status: ${response.status}`);
      return [];
    }

    const releases = await response.json();

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
    console.error('Error fetching releases:', error.message);
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
  try {
    const { outputJson } = pkg;
    const releases = await getReleases();
    await outputJson(OUTPUT_PATH, releases, { spaces: 2 });
    console.log('Release notes updated successfully!');
  } catch (error) {
    console.error('Error updating release notes:', error.message);
    process.exit(1);
  }
}

run();
