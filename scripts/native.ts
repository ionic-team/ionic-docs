import * as fs from 'fs';
import * as path from 'path';
import * as config from './config';
// import * as docgen from './cliDocgen';
import * as git from './git';
import * as npm from './npm';
import * as utils from './utils';

const distList = `${config.NATIVE_DIR}/dist/@ionic-native`;

// the main task of the API documentation generation process
export async function generate() {
  const startTime = new Date().getTime();

  // const repoRef = await git.initRepoRefference(
  //   config.NATIVE_DIR,
  //   config.NATIVE_REPO_URL,
  //   'origin/v5'
  // );

  // await utils.shell([
  //   `cd ${config.NATIVE_DIR}`,
  //   'npm i',
  //   'npm run build',
  // ].join(' && '));

  utils.vlog('Reading output typescript data file');
  const typeDoc = await getTypeDoc();

  typeDoc.children.forEach(tsData => processPlugin(tsData));

  const endTime = new Date().getTime();
  console.log(`Native Docs copied in ${endTime - startTime}ms`);
}

async function getTypeDoc() {
  utils.vlog('generating native docs json');
  // await utils.shell([
  //   `cd ${config.NATIVE_DIR} && ../../node_modules/.bin/typedoc`,
  //   '--json dist/docs.json --mode modules',
  //   'src/@ionic-native/plugins/*/index.ts'
  // ].join(' '));

  return JSON.parse(
    fs.readFileSync(`${config.NATIVE_DIR}/dist/docs.json`, `utf8`)
  );
}

function processPlugin(tsData) {
  const metaDoc = JSON.parse(
    fs.readFileSync(
      `${distList}/${tsData.name.replace(/\"/g, '')}.metadata.json`,
      'utf8'
    )
  );

  const name = getNameFromTSChildren(tsData.children);

  const pluginData = preparePluginData(
    tsData,
    metaDoc[0].metadata[name],
    name
  );

  if (pluginData.name === 'ActionSheet') {
    console.log(pluginData);
  }
}



function preparePluginData(tsData, metaData, name) {
  // console.log(name);
  const tsChild = selectChild(tsData.children, 'name', name);
  const metaArgs = metaData.decorators[0].arguments[0];
  return {
    name: name,
    description: selectChild(tsChild.comment.tags, 'tag', 'description'),
    installation: metaArgs.install,
    repo: metaArgs.repo,
    npmName: tsData.name.replace('\"', '').replace('/index', ''),
    platforms: metaArgs.platforms,
    usage: selectChild(tsChild.comment.tags, 'tag', 'usage'),
    members: getNonInheritedMembers(tsChild.children),
    interfaces: tsData.children.filter(child => child.kindString === 'Interface')
  };
}

function selectChild(children, key, val) {
  for (let i = 0; i < children.length; i++) {
    if (children[i][key] === val) {
      return children[i];
    }
  }
}

function getNonInheritedMembers(members) {
  return members.filter(member => !(
    member.inheritedFrom &&
    member.inheritedFrom.name.indexOf('IonicNativePlugin') === 0
  ));
}

function getNameFromTSChildren(children) {
  // We know the name, because it's the class that's exported

  for (let i = 0; i < children.length; i++) {
    if (children[i].kindString === 'Class' && children[i].flags.isExported) {
      return children[i].name;
    }
  }
}

function pascalify(str) {
  return str
    .replace(/\"/g, '')
    .replace('/index', '')
    .toLowerCase()
    .split('-')
    .map(str => (str.charAt(0).toUpperCase() + str.slice(1)))
    .join('');
}
