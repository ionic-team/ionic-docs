import * as fs from 'fs';
import * as path from 'path';
import * as Git from 'nodegit';
// import * as glob from 'glob';
import * as config from './config';
import * as git from './git';
import * as npm from './npm';
import * as utils from './utils';

// const ionicAngularPackage = require(`${config.ANGULAR_SRC}/package.json`);
// const version = ionicAngularPackage.version;

const startTime = new Date().getTime();

async function run() {
  utils.vlog('Starting CI task');
  if (!utils.preCheck()) {
    console.error('API Docs Precheck Failure. Check configs and readme.');
    return;
  } else {
    utils.vlog('Precheck complete');
  }

  const repo = await git.initRepoRefference();
  utils.vlog('validating tags');
  const versions = await git.getVersions();
  for (let i = 0; i < versions.length; i++) {
    const version = versions[i].replace('v', '');
    const DOCS_DEST = path.join(config.API_DOCS_DIR, version);
    if (fs.existsSync(DOCS_DEST)) {
      console.log(`Skipping existing API docs for ${versions[i]}`);
      continue;
    }

    console.log(`Generating API docs for ${versions[i]}. (1-3 mins)`);
    await git.checkout(versions[i]);
    await npm.install();
    await npm.buildAPIDocs();
    const markdownGlob = `ionic/${config.CORE_SRC}/**/readme.md`;
    const files = await utils.promisedGlob(markdownGlob);

    await copyFiles(files, DOCS_DEST, version);

    const menuPath = 'src/components/site-menu';
    generateNav(
      path.join(config.PATH_DOCS, menuPath, `api-menu.ts`),
      files,
      version
    );
  }

  const endTime = new Date().getTime();
  console.log(`Docs copied in ${endTime - startTime}ms`);
}

function generateNav(menuPath, files, version) {
  let file = fs.readFileSync(menuPath).toString('utf8');
  file = file.replace('export let apiMenu = ', '');

  const menu = JSON.parse(file);

  const components = {};
  for (let i = 0; i < files.length; i++) {
    const componentName = utils.filterParentDirectory(files[i]);
    components[componentName] = `/api/${version}/${componentName}`;
  }

  menu[version] = components;
  const ts = `export let apiMenu = ${JSON.stringify(menu, null, '  ')}`;
  fs.writeFileSync(menuPath, ts);
}

function copyFiles(files, dest, version = 'latest') {
  utils.vlog(`Copying ${files.length} files`);
  let hasDemo = false;

  for (let i = 0; i < files.length; i++) {
    const componentName = utils.filterParentDirectory(files[i]);
    const markdownName = `${componentName}.md`;
    const demoName = `${componentName}.html`;

    // copy demo if it exists and update the ionic path
    hasDemo = utils.copyFileSync(
      path.join(files[i].replace('/readme.md', ''), 'test/standalone/index.html'),
      path.join(dest, demoName),
      file => {
        return file.replace(
          '/dist/ionic.js',
          `https://unpkg.com/@ionic/core@${version}/dist/ionic.js`
        );
      }
    );

    // copying component markdown
    utils.vlog('Copying file: ', markdownName);
    utils.copyFileSync(
      files[i],
      path.join(dest, markdownName),
      file => {
        let header = '---';
        if (hasDemo) {
          header += '\r\n';
          header += `previewUrl: '/docs-content/api/${version}/${demoName}'`;
        }
        header += '\r\n' + '---' + '\r\n\r\n';
        return header + file;
      }
    );
  }
}

// Invoke run() only if executed directly i.e. `node ./scripts/e2e`
if (require.main === module) {
  run()
    .then(() => {
      // do nothing
    })
    .catch(err => {
      console.log(err);
      // fail with non-zero status code
      process.exit(1);
    });
}
