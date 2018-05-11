import * as fs from 'fs';
import { join } from 'path';
import * as util from 'util';

import * as semver from 'semver';
import * as config from './config';
import * as docgen from './apiDocgen';
import * as git from './git';
import * as npm from './npm';
import * as utils from './utils';

import { versions as FRAMEWORK_VERSIONS } from '../src/versions';

const menuPath = 'src/components/docs-menu';
const menuHeader = '/* tslint:disable */\n\nexport const apiMap = ';
const menuFooter = ';\n';
const ionicComponentsDir = `${config.IONIC_DIR}/${config.IONIC_CORE_SRC}/components`;

let listrTask = null;

// the main task of the API documentation generation process
export async function generate(task) {
  listrTask = task;
  const startTime = new Date().getTime();
  task.output = 'Updating...';
  // clone/update the git repo and get a list of all the tags

  await git.ensureLatestMaster(
    config.IONIC_DIR,
    config.IONIC_REPO_URL
  );

  utils.vlog('validating tags');
  task.output = 'Getting Tags...';
  const allVersions = await git.getVersions(config.IONIC_DIR);
  const versions = allVersions.filter(v => {
    for (const whitelistedVersion of FRAMEWORK_VERSIONS) {
      if (semver.eq(v, whitelistedVersion)) {
        return true;
      }
    }

    return false;
  });

  // generate the docs for each version
  for (const sv of versions) {
    task.output = `Building for ${sv.version}...`;
    const DOCS_DEST = join(config.API_DOCS_DIR, sv.version);
    // skip this version if it already exists.
    // delete the directory in src/api/ to force a rebuild
    if (fs.existsSync(DOCS_DEST)) {
      task.output = `Skipping existing API docs for ${sv.version}`;
      // continue;
    }

    // Generate the docs for this version
    task.output = `Generating API docs for ${sv.raw} (1-3 mins)`;
    task.output = `Checking out ${sv.version}`;
    await git.checkout(config.IONIC_DIR, sv.raw);
    task.output = `NPM Installing ${sv.version}`;
    await npm.installAPI();
    task.output = `Building Docs for ${sv.version}`;
    const APIDocs = await npm.buildAPIDocs();

    copyFiles(APIDocs.components, DOCS_DEST, sv.version);

    task.output = `Generating Nav for ${sv.version}`;
    generateNav(
      join(menuPath, `docs-api-map.ts`),
      APIDocs.components,
      sv.version
    );
  }

  const endTime = new Date().getTime();
  task.output = `Framework Docs copied in ${endTime - startTime}ms`;
}

// copy demos and API docs files over to content/api
function copyFiles(components, dest, version = 'latest') {
  utils.vlog(`Copying ${components.length} files`);
  let hasDemo = false;

  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest);
  }

  for (let i = 0; i < components.length; i++) {
    const componentName = components[i].tag.replace('ion-', '');
    listrTask.output = `Copying ${componentName}`;
    // copy demo if it exists and update the ionic path
    hasDemo = utils.copyFileSync(
      join(ionicComponentsDir, componentName, 'test/preview/index.html'),
      join(dest, `${componentName}-demo.html`),
      file => {
        return file.replace(
          '/dist/ionic.js',
          `https://unpkg.com/@ionic/core@${version}/dist/ionic.js`
        );
      }
    );

    components[i].usage = getUsage(componentName);

    // copying component markdown
    utils.vlog('Generating page: ', componentName);
    fs.writeFileSync(
      join(dest, `${componentName}.md`),
      docgen.getComponentMarkup(components[i], version, hasDemo)
    );
  }
}

// Upsert the given version's navigation
function generateNav(menuPath, components, version) {
  let file = fs.readFileSync(menuPath).toString('utf8');
  file = file.replace(menuHeader, '').replace(menuFooter, '');

  const menu = JSON.parse(file);

  const componentsList = {};
  for (let i = 0; i < components.length; i++) {
    const tag = components[i].tag.replace('ion-', '');
    componentsList[tag] = `/docs/api/${version}/${tag}`;
  }

  menu[version] = componentsList;
  const ts = `${menuHeader}${JSON.stringify(menu, null, '  ')}${menuFooter}`;
  fs.writeFileSync(menuPath, ts);
}

function getUsage(componentName) {
  const dir = join(ionicComponentsDir, componentName, 'usage');
  // return empty if the usage directory doesn't exist
  if (!fs.existsSync(dir) || !fs.lstatSync(dir).isDirectory()) {
    return null;
  }
  // return an object of usage markdown files
  const files = fs.readdirSync(dir);
  const usage = {};
  for (const i in files) {
    usage[files[i].replace('.md', '')] = fs.readFileSync(join(dir, files[i]), 'utf8');
  }
  return usage;
}

