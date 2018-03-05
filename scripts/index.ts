import * as fs from 'fs';
import * as path from 'path';
// import * as glob from 'glob';
// import * as config from './config';
import * as git from './git';
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

  const repo = await git.getUpdatedRefference();
  console.log(repo);

  const versions = git.getVersions();

  // let files = await utils.promisedGlob(`${config.PATH_SRC}/**/readme.md`);
  // const DOCS_DEST = path.join(
  //   config.PATH_DOCS,
  //   '/src/docs-content/api/',
  //   version
  // );

  // generateNav(
  //   path.join(config.PATH_DOCS, '/src/components/site-menu/api-menu.ts'),
  //   files,
  //   version
  // )

  // // parse and copy markdown and demo files
  // await copyFiles(files, DOCS_DEST);

  const endTime = new Date().getTime();
  console.log(`Docs copied in ${endTime - startTime}ms`);
}

// upsert the current version's components to the nav
function generateNav(menuPath, files, version) {
  let file = fs.readFileSync(menuPath).toString('utf8');
  file = file.replace('export let data = ', '');
  console.log(file);
  const menu = JSON.parse(file);

  const components = {};
  for (let i = 0; i < files.length; i++) {
    const componentName = utils.filterParentDirectory(files[i]);
    components[componentName] = `/docs/api/${version}/${componentName}`;
  }

  menu[version] = components;
  const ts = `export let data = ${JSON.stringify(menu, null, '  ')}`;
  fs.writeFileSync(menuPath, ts);
}

function copyFiles(files, dest) {
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
          './dist/ionic.js'
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
          header += '\r\n' + 'demo_url: \'/docs/docs-content/api/';
          // header += `${version}/${demoName}'`;
        }
        // header += "\r\n" + '---' + "\r\n\r\n";
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
