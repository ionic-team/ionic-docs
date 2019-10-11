import dotenv from 'dotenv';
import { resolve } from 'path';
import { outputJson } from 'fs-extra';
import renderMarkdown from '../build-pages/markdown-renderer';
import fetch from 'node-fetch';
import url from 'url';
import { convertHtmlToHypertextData } from '../build-pages/html-to-hypertext-data';
import semver from 'semver';

dotenv.config();

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

    // Check that the response is an array in case it was
    // successful but returned an object
    if (Array.isArray(releases)) {
      return releases.map(release => {
        const body = parseMarkdown(release.body);
        const published_at = parseDate(release.published_at);
        const version = release.tag_name.replace('v', '');
        const type = getVersionType(version);
        const symbol = getVersionSymbol(version);
        const element = getVersionElement(version);
        const { name, tag_name } = release;

        return {
          body,
          element,
          name,
          published_at,
          symbol,
          tag_name,
          type,
          version
        };
      }).sort((a, b) => {
        return -semver.compare(a.tag_name, b.tag_name);
      }).filter((release) => {
        const releasePattern = /^v(\d+)\.(\d+)\.(\d+)$/;

        // All non-prerelease, non-alpha, non-beta, non-rc release
        return releasePattern.test(release.tag_name);
      });
    } else {
      return [];
    }
  } catch (error) {
    return [];
  }
}

// Takes the date in format 2019-04-26T18:24:09Z
// and returns it as April 26 2019
function parseDate(datetime: string) {
  const date = new Date(datetime);
  return date.toLocaleString('en-us', { month: 'long' }) + ' ' + date.getDate() + ' ' + date.getFullYear();
}

function parseMarkdown(content: any) {
  let html = renderMarkdown(content);
  html = html.replace('<a href=\"#bug-fixes\">Bug Fixes</a>', 'Bug Fixes')
             .replace('<a href=\"#features\">Features</a>', 'Features');
  return convertHtmlToHypertextData(html);
}

// Given a version, return if it is a
// major, minor, or patch release
function getVersionType(version: string) {
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

// Given a version, return its element symbol
function getVersionSymbol(version) {
  const filteredVersions = versions.filter(
    v => version.startsWith(`${v.minor}.`)
  );

  return filteredVersions[filteredVersions.length - 1].symbol;
}

// Given a version, return its element name
function getVersionElement(version) {
  const filteredVersions = versions.filter(
    v => version.startsWith(`${v.minor}.`)
  );

  return filteredVersions[filteredVersions.length - 1].element;
}

const versions = [
  {
    'minor': '4.0',
    'symbol': 'N',
    'element': 'Neutronium'
  },
  {
    'minor': '4.1',
    'symbol': 'H',
    'element': 'Hydrogen'
  },
  {
    'minor': '4.2',
    'symbol': 'He',
    'element': 'Helium'
  },
  {
    'minor': '4.3',
    'symbol': 'Li',
    'element': 'Lithium'
  },
  {
    'minor': '4.4',
    'symbol': 'Be',
    'element': 'Beryllium'
  },
  {
    'minor': '4.5',
    'symbol': 'B',
    'element': 'Boron'
  },
  {
    'minor': '4.6',
    'symbol': 'C',
    'element': 'Carbon'
  },
  {
    'minor': '4.7',
    'symbol': 'N',
    'element': 'Nitrogen'
  },
  {
    'minor': '4.8',
    'symbol': 'O',
    'element': 'Oxygen'
  },
  {
    'minor': '4.9',
    'symbol': 'F',
    'element': 'Fluorine'
  },
  {
    'minor': '4.10',
    'symbol': 'Ne',
    'element': 'Neon'
  },
  {
    'minor': '4.11',
    'symbol': 'Na',
    'element': 'Sodium'
  },
  {
    'minor': '4.12',
    'symbol': 'Mg',
    'element': 'Magnesium'
  },
  {
    'minor': '4.13',
    'symbol': 'Al',
    'element': 'Aluminium'
  },
  {
    'minor': '4.14',
    'symbol': 'Si',
    'element': 'Silicon'
  },
  {
    'minor': '4.15',
    'symbol': 'P',
    'element': 'Phosphorus'
  },
  {
    'minor': '4.16',
    'symbol': 'S',
    'element': 'Sulfur'
  },
  {
    'minor': '4.17',
    'symbol': 'Cl',
    'element': 'Chlorine'
  },
  {
    'minor': '4.18',
    'symbol': 'Ar',
    'element': 'Argon'
  },
  {
    'minor': '4.19',
    'symbol': 'K',
    'element': 'Potassium'
  },
  {
    'minor': '4.20',
    'symbol': 'Ca',
    'element': 'Calcium'
  },
  {
    'minor': '4.21',
    'symbol': 'Sc',
    'element': 'Scandium'
  },
  {
    'minor': '4.22',
    'symbol': 'Ti',
    'element': 'Titanium'
  },
  {
    'minor': '4.23',
    'symbol': 'V',
    'element': 'Vanadium'
  },
  {
    'minor': '4.24',
    'symbol': 'Cr',
    'element': 'Chromium'
  },
  {
    'minor': '4.25',
    'symbol': 'Mn',
    'element': 'Manganese'
  },
  {
    'minor': '4.26',
    'symbol': 'Fe',
    'element': 'Iron'
  },
  {
    'minor': '4.27',
    'symbol': 'Co',
    'element': 'Cobalt'
  },
  {
    'minor': '4.28',
    'symbol': 'Ni',
    'element': 'Nickel'
  },
  {
    'minor': '4.29',
    'symbol': 'Cu',
    'element': 'Copper'
  }
];
