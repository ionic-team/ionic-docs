import {
  existsSync,
  lstatSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  writeFileSync
} from 'fs';
import { join } from 'path';
import { eq, parse, valid } from 'semver';

import {
  API_DOCS_DIR,
  IONIC_CORE_SRC,
  IONIC_DIR,
  IONIC_REPO_URL
} from './config';

import { getComponentMarkup } from './apiDocgen';
import { checkout, ensureLatestMaster, getVersions } from './git';
import * as npm from './npm';
import { copyFileSync, vlog } from './utils';

import {
  current as CURRENT_VERSION,
  versions as FRAMEWORK_VERSIONS
} from '../src/versions';

const menuPath = 'src/components/docs-menu';
const menuHeader = '/* tslint:disable */\n\nexport const apiMap = ';
const menuFooter = ';\n';
const ionicComponentsDir = `${IONIC_DIR}/${IONIC_CORE_SRC}/components`;
const GIT_SRC_URL = `${IONIC_REPO_URL}/tree/master/${IONIC_CORE_SRC}/components`;
const PREVIEW_PATH = 'test/preview/index.html';

let listrTask = null;

// the main task of the API documentation generation process
export async function generate(task) {
  listrTask = task;
  const startTime = new Date().getTime();

  task.output = 'Updating...';
  // clone/update the git repo and get a list of all the tags
  await ensureLatestMaster(IONIC_DIR, IONIC_REPO_URL);

  vlog('validating tags');
  task.output = 'Getting Tags...';
  const allVersions = await getVersions(IONIC_DIR);

  const versions = allVersions.filter(v => {

    for (const whitelistedVersion of FRAMEWORK_VERSIONS) {
      if (valid(whitelistedVersion) && eq(v, whitelistedVersion)) {
        return true;
      }
    }
    return false;
  });

  if (FRAMEWORK_VERSIONS.indexOf('nightly') !== -1) {
    const nightly = await getNightly();
    versions.push(nightly);
  }

  // generate the docs for each version
  for (const sv of versions) {
    const version = sv.raw.indexOf('+nightly') !== -1 ? 'nightly' : sv.version;

    task.output = `Building for ${version}...`;
    const DOCS_DEST = join(
      API_DOCS_DIR,
      version === CURRENT_VERSION ? '' : `${version}/`
    );
    // console.log(version, CURRENT_VERSION, DOCS_DEST);
    // skip this version if it already exists.
    // delete the directory in src/api/ to force a rebuild
    if (existsSync(DOCS_DEST)) {
      // task.output = `Skipping existing API docs for ${version}`;
      // continue;
    }

    // Generate the docs for this version
    task.output = `Generating API docs for ${version} (1-3 mins)`;
    task.output = `Checking out ${version}`;
    const test = await checkout(
      IONIC_DIR,
      sv.raw.indexOf('+nightly') !== -1 ? 'master' : sv.raw
    );
    task.output = `NPM Installing ${version}`;
    await npm.installAPI();
    task.output = `Building Docs for ${version}`;
    const APIDocs = await npm.buildAPIDocs();

    copyFiles(APIDocs.components, DOCS_DEST, version);

    task.output = `Generating Nav for ${version}`;
    generateNav(
      join(menuPath, `docs-api-map.ts`),
      APIDocs.components,
      version === 'nightly' ? 'nightly' : sv.version
    );
  }

  const endTime = new Date().getTime();
  task.output = `Framework Docs copied in ${endTime - startTime}ms`;
}

// copy demos and API docs files over to content/api
function copyFiles(components, dest, version = 'nightly') {
  vlog(`Copying ${components.length} files`);
  let hasDemo = false;

  if (!existsSync(dest)) {
    mkdirSync(dest);
  }

  for (let i = 0; i < components.length; i++) {
    const componentName = components[i].tag.replace('ion-', '');
    listrTask.output = `Copying ${componentName}`;

    // copy demo if it exists and update the ionic path
    hasDemo = copyFileSync(
      join(ionicComponentsDir, componentName, PREVIEW_PATH),
      join(dest, `${componentName}-demo.html`),
      file => {
        file = file.replace('</head>',
          `<link rel="stylesheet" href="/docs/overrides.css">
<link rel="stylesheet" href="https://unpkg.com/@ionic/core${version === 'nightly' ?
'' : `@${version}`}/css/ionic.min.css">
</head>`);
        return file.replace(
          '/dist/ionic.js',
          `https://unpkg.com/@ionic/core${version === 'nightly' ?
            '' : `@${version}`}/dist/ionic.js`
        );
      }
    );

    components[i].usage = getUsage(componentName);
    components[i].demoSrc = hasDemo ?
      `${GIT_SRC_URL}/${componentName}/${PREVIEW_PATH}` : null;

    // if (componentName === 'action-sheet-controller') {
    //   console.log(dest);
    // }

    // copying component markdown
    vlog('Generating page: ', componentName);
    writeFileSync(
      join(dest, `${componentName}.md`),
      getComponentMarkup(
        components[i],
        version === CURRENT_VERSION ? '' : version,
        hasDemo
      )
    );
  }
}

// Upsert the given version's navigation
function generateNav(menuPath, components, version) {
  let file = readFileSync(menuPath).toString('utf8');
  file = file.replace(menuHeader, '').replace(menuFooter, '');

  const menu = JSON.parse(file);

  const componentsList = {Overview: '/docs/api'};
  for (let i = 0; i < components.length; i++) {
    const tag = components[i].tag.replace('ion-', '');
    componentsList[tag] = `/docs/api/${version === CURRENT_VERSION ?
      '' : `${version}/`}${tag}`;
  }

  menu[version] = componentsList;
  const ts = `${menuHeader}${JSON.stringify(menu, null, '  ')}${menuFooter}`;
  writeFileSync(menuPath, ts);
}

function getUsage(componentName) {
  const dir = join(ionicComponentsDir, componentName, 'usage');
  // return empty if the usage directory doesn't exist
  if (!existsSync(dir) || !lstatSync(dir).isDirectory()) {
    return null;
  }
  // return an object of usage markdown files
  const files = readdirSync(dir);
  const usage = {};
  for (const i in files) {
    usage[files[i].replace('.md', '')] = readFileSync(join(dir, files[i]), 'utf8');
  }
  return usage;
}

async function getNightly() {
  const pkgStr = await readFileSync(
    join(IONIC_DIR, 'core', 'package.json')
  );
  return parse(`${JSON.parse(pkgStr.toString('utf8')).version}+nightly`);
}
