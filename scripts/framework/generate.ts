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
  FRAMEWORK_COMPONENTS_SRC,
  FRAMEWORK_CORE_DIR,
  FRAMEWORK_DIR,
  FRAMEWORK_DOCS_DIR,
  FRAMEWORK_LOCALIZED,
  FRAMEWORK_MENU_PATH,
  FRAMEWORK_REPO_URL
} from '../config';

import { getComponentMarkup } from './template';
import { checkout, ensureLatestMaster, getVersions } from '../git';
import { installFramework as npmInstallFramework, run as npmRun } from '../npm';
import { copyFileSync, vlog } from '../utils';

import {
  current as CURRENT_VERSION,
  versions as FRAMEWORK_VERSIONS
} from '../../src/versions';

const menuHeader = '/* tslint:disable */\n\nexport const apiMap = ';
const menuFooter = ';\n';
const ionicComponentsDir = join(FRAMEWORK_DIR, FRAMEWORK_COMPONENTS_SRC);
const GIT_SRC_URL = `${FRAMEWORK_REPO_URL}/tree/master/${FRAMEWORK_COMPONENTS_SRC}/components`;
const PREVIEW_PATH = 'test/preview/index.html';

let listrTask = null;

// the main task of the API documentation generation process
export default async function generate(task) {
  listrTask = task;
  const startTime = new Date().getTime();

  task.output = 'Updating...';
  // clone/update the git repo and get a list of all the tags
  if (!FRAMEWORK_LOCALIZED) {
    await ensureLatestMaster(FRAMEWORK_DIR, FRAMEWORK_REPO_URL);
  }

  vlog('validating tags');
  task.output = 'Getting Tags...';
  const allVersions = await getVersions(FRAMEWORK_DIR);

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

    // console.log(version, CURRENT_VERSION, DOCS_DEST);
    // skip this version if it already exists.
    // delete the directory in src/api/ to force a rebuild

    const thisVersionIsCurrent = version === CURRENT_VERSION;

    const DOCS_DEST = thisVersionIsCurrent ?
      join(FRAMEWORK_DOCS_DIR) : join(FRAMEWORK_DOCS_DIR, `${version}/`);
    const fileToCheck = thisVersionIsCurrent ?
      join(DOCS_DEST, 'alert.md') : DOCS_DEST;

    if (existsSync(fileToCheck) && version !== 'nightly') {
      // task.output = `Skipping existing API docs for ${version}`;
      // continue;
    }

    // Generate the docs for this version
    task.output = `Generating API docs for ${version} (1-3 mins)`;

    if (!FRAMEWORK_LOCALIZED) {
      task.output = `Checking out ${version}`;
      await checkout(
        FRAMEWORK_DIR,
        sv.raw.indexOf('+nightly') !== -1 ? 'master' : sv.raw
      );
      task.output = `NPM Installing ${version}`;
      await npmInstallFramework();
    }
    task.output = `Building Docs for ${version}`;
    await npmRun('build.docs.json', FRAMEWORK_CORE_DIR);
    const APIDocs = JSON.parse(
      readFileSync(`${FRAMEWORK_DIR}/core/dist/docs.json`, `utf8`)
    );

    copyFiles(APIDocs.components, DOCS_DEST, version);

    task.output = `Generating Nav for ${version}`;
    generateNav(
      FRAMEWORK_MENU_PATH,
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
        file = file.replace('/css/ionic.bundle.css">', `/docs/overrides.css">
<link rel="stylesheet" href="https://unpkg.com/@ionic/core${version === 'nightly' ?
'' : `@${version}`}/css/ionic.bundle.css">`);
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

  const componentsList = { Overview: '/docs/api' };
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
    join(FRAMEWORK_DIR, 'core', 'package.json')
  );
  return parse(`${JSON.parse(pkgStr.toString('utf8')).version}+nightly`);
}
