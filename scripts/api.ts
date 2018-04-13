import * as fs from 'fs';
import * as path from 'path';
import * as config from './config';
import * as docgen from './apiDocgen';
import * as git from './git';
import * as npm from './npm';
import * as utils from './utils';

const menuPath = 'src/components/site-menu';
const menuHeader = 'export let apiMenu = ';
const ionicComponentsDir = `${config.IONIC_DIR}/${config.IONIC_CORE_SRC}/components`;

// the main task of the API documentation generation process
export async function generate() {
  const startTime = new Date().getTime();

  // clone/update the git repo and get a list of all the tags
  const repo = await git.initAPIRepoRefference();
  utils.vlog('validating tags');
  const versions = await git.getAPIVersions();

  // generate the docs for each version
  for (let i = 0; i < versions.length; i++) {
    const version = versions[i].replace('v', '');
    const DOCS_DEST = path.join(config.API_DOCS_DIR, version);
    // skip this version if it already exists.
    // delete the directory in src/api/ to force a rebuild
    if (fs.existsSync(DOCS_DEST)) {
      console.log(`Skipping existing API docs for ${versions[i]}`);
      // continue;
    }

    // Generate the docs for this version
    console.log(`Generating API docs for ${versions[i]} (1-3 mins)`);
    await git.checkout(versions[i]);
    await npm.installAPI();
    const APIDocs = await npm.buildAPIDocs();

    copyFiles(APIDocs.components, DOCS_DEST, version);

    generateNav(
      path.join(menuPath, `api-menu.ts`),
      APIDocs.components,
      version
    );
  }

  const endTime = new Date().getTime();
  console.log(`Framework Docs copied in ${endTime - startTime}ms`);
}

// copy demos and API docs files over to docs-content/api
function copyFiles(components, dest, version = 'latest') {
  utils.vlog(`Copying ${components.length} files`);
  let hasDemo = false;

  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest);
  }

  for (let i = 0; i < components.length; i++) {
    const componentName = components[i].tag.replace('ion-', '');
    // copy demo if it exists and update the ionic path
    hasDemo = utils.copyFileSync(
      path.join(ionicComponentsDir, componentName, 'test/preview/index.html'),
      path.join(dest, `${componentName}-demo.html`),
      file => {
        return file.replace(
          '/dist/ionic.js',
          `https://unpkg.com/@ionic/core@${version}/dist/ionic.js`
        );
      }
    );

    // copying component markdown
    utils.vlog('Generating page: ', componentName);
    fs.writeFileSync(
      path.join(dest, `${componentName}.md`),
      docgen.getComponentMarkup(components[i], version, hasDemo)
    );
  }
}

// Upsert the given version's navigation
function generateNav(menuPath, components, version) {
  let file = fs.readFileSync(menuPath).toString('utf8');
  file = file.replace(menuHeader, '');

  const menu = JSON.parse(file);

  const componentsList = {};
  for (let i = 0; i < components.length; i++) {
    const tag = components[i].tag.replace('ion-', '');
    componentsList[tag] = `/docs/api/${version}/${tag}`;
  }

  menu[version] = componentsList;
  const ts = `${menuHeader}${JSON.stringify(menu, null, '  ')}`;
  fs.writeFileSync(menuPath, ts);
}

