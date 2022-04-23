const { outputJson } = require('fs-extra');
const fetch = require('node-fetch');
const { resolve } = require('path');
const semver = require('semver');
const url = require('url');

const { renderMarkdown } = require('./utils.js');

const OUTPUT_PATH = resolve(__dirname, '../src/components/page/reference/ReleaseNotes/release-notes.json');

// export default {
//   title: 'Build Release Notes data',
//   task: async () => outputJson(OUTPUT_PATH, await getReleases(), { spaces: 2 })
// };

// Get the GitHub Releases from Ionic
// This requires an environment GITHUB_TOKEN
// otherwise it may fail silently
const getReleases = async () => {
  try {
    const request = await fetch(
      url.format({
        protocol: 'https',
        hostname: 'api.github.com',
        pathname: 'repos/ionic-team/ionic/releases',
      }),
      {
        headers: {
          Authorization: process.env.GITHUB_TOKEN !== undefined ? `token ${process.env.GITHUB_TOKEN}` : '',
        },
      }
    );

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
          const body = renderMarkdown(release.body).contents;
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
            version,
          };
        })
        .sort((a, b) => {
          return -semver.compare(a.tag_name, b.tag_name);
        });
    } else {
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

// Given a version, return its element symbol
function getVersionSymbol(version) {
  const filteredVersions = versions.filter((v) => version.startsWith(`${v.minor}.`));
  filteredVersions.unshift(fallbackVersion);

  return filteredVersions[filteredVersions.length - 1].symbol;
}

// Given a version, return its element name
function getVersionElement(version) {
  const filteredVersions = versions.filter((v) => version.startsWith(`${v.minor}.`));
  filteredVersions.unshift(fallbackVersion);

  return filteredVersions[filteredVersions.length - 1].element;
}

var versions = [
  {
    minor: '4.0',
    symbol: 'N',
    element: 'Neutronium',
  },
  {
    minor: '4.1',
    symbol: 'H',
    element: 'Hydrogen',
  },
  {
    minor: '4.2',
    symbol: 'He',
    element: 'Helium',
  },
  {
    minor: '4.3',
    symbol: 'Li',
    element: 'Lithium',
  },
  {
    minor: '4.4',
    symbol: 'Be',
    element: 'Beryllium',
  },
  {
    minor: '4.5',
    symbol: 'B',
    element: 'Boron',
  },
  {
    minor: '4.6',
    symbol: 'C',
    element: 'Carbon',
  },
  {
    minor: '4.7',
    symbol: 'N',
    element: 'Nitrogen',
  },
  {
    minor: '4.8',
    symbol: 'O',
    element: 'Oxygen',
  },
  {
    minor: '4.9',
    symbol: 'F',
    element: 'Fluorine',
  },
  {
    minor: '4.10',
    symbol: 'Ne',
    element: 'Neon',
  },
  {
    minor: '4.11',
    symbol: 'Na',
    element: 'Sodium',
  },
  {
    minor: '5.0',
    symbol: 'Mg',
    element: 'Magnesium',
  },
  {
    minor: '5.1',
    symbol: 'Al',
    element: 'Aluminium',
  },
  {
    minor: '5.2',
    symbol: 'Si',
    element: 'Silicon',
  },
  {
    minor: '5.3',
    symbol: 'P',
    element: 'Phosphorus',
  },
  {
    minor: '5.4',
    symbol: 'S',
    element: 'Sulfur',
  },
  {
    minor: '5.5',
    symbol: 'Cl',
    element: 'Chlorine',
  },
  {
    minor: '5.6',
    symbol: 'Ar',
    element: 'Argon',
  },
  {
    minor: '5.7',
    symbol: 'K',
    element: 'Potassium',
  },
  {
    minor: '5.8',
    symbol: 'Ca',
    element: 'Calcium',
  },
  {
    minor: '5.9',
    symbol: 'Sc',
    element: 'Scandium',
  },
  {
    minor: '6.0',
    symbol: 'Ti',
    element: 'Titanium',
  },
  {
    minor: '6.1',
    symbol: 'V',
    element: 'Vanadium',
  },
];

var fallbackVersion = { minor: '9201', symbol: 'Uo', element: 'Unobtainium' };

async function run() {
  outputJson(OUTPUT_PATH, await getReleases(), { spaces: 2 });
}

run();
