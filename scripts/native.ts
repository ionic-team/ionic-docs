import * as fs from 'fs';
import * as path from 'path';
import * as config from './config';
import * as docgen from './nativeDocgen';
import * as git from './git';
import * as npm from './npm';
import { execp, vlog } from './utils';

const distList = `${config.NATIVE_DIR}/dist/@ionic-native`;

// the main task of the API documentation generation process
export async function generate() {
  const startTime = new Date().getTime();

  const repoRef = await git.ensureLatestMaster(
    config.NATIVE_DIR,
    config.NATIVE_REPO_URL,
    // 'v5'
  );

  vlog('installing and building');
  await execp([
    `cd ${config.NATIVE_DIR}`,
    'npm i',
    'npm run build',
  ].join(' && '));

  vlog('Reading output typescript data file');
  const typeDoc = await getTypeDoc();

  typeDoc.children.forEach(tsData => processPlugin(tsData));

  const endTime = new Date().getTime();
  console.log(`Native Docs copied in ${endTime - startTime}ms`);
}

async function getTypeDoc() {
  vlog('generating native docs json');
  await execp([
    `cd ${config.NATIVE_DIR} && ../../node_modules/.bin/typedoc`,
    '--json dist/docs.json --mode modules',
    'src/@ionic-native/plugins/*/index.ts'
  ].join(' '));

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

  const plugin = preparePluginData(
    tsData,
    metaDoc[0].metadata[name],
    name
  );

  // if (plugin.name === 'ActionSheet') {
  //   plugin.interfaces.forEach(face => {
  //     console.log(face);
  //   });
  // }

  if (!fs.existsSync(config.NATIVE_DOCS_DIR)) {
    fs.mkdirSync(config.NATIVE_DOCS_DIR);
  }

  fs.writeFileSync(
    path.join(config.NATIVE_DOCS_DIR, `${plugin.npmName}.md`),
    docgen.getPluginMarkup(plugin)
  );
}



function preparePluginData(tsData, metaData, name) {
  // console.log(name);
  const tsChild = selectChild(tsData.children, 'name', name);
  const metaArgs = metaData.decorators[0].arguments[0];
  return {
    name: name,
    description: selectChild(tsChild.comment.tags, 'tag', 'description').text,
    installation: metaArgs.install,
    repo: metaArgs.repo,
    npmName: tsData.name.replace('\"', '').replace('/index', '').replace('"', ''),
    cordovaName: metaArgs.plugin,
    platforms: metaArgs.platforms,
    usage: selectChild(tsChild.comment.tags, 'tag', 'usage') ?
      selectChild(tsChild.comment.tags, 'tag', 'usage').text : null,
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
  )).map(member => {
    // normalize member format
    return {
      name: member.name,
      kind: member.kindString,
      description: member.signatures && member.signatures[0].comment ?
        member.signatures[0].comment.shortText :
        member.comment ? member.comment.shortText : '',
      returns: member.signatures ? {
        description: member.signatures && member.signatures[0].comment ?
          member.signatures[0].comment.returns : null,
        name: member.signatures[0].type.name,
        type: member.signatures && member.signatures[0].type.typeArguments ?
          member.signatures[0].type.typeArguments[0].name : null
      } : null,
      params: member.signatures && member.signatures[0].parameters ?
      member.signatures[0].parameters.map(param => ({
        name: param.name,
        description: param.type.type === 'reference' ?
          `See ${param.type.name} table below` :
          param.comment ? param.comment.text : null,
        type: param.type.name,
        optional: param.flags && !!param.flags.isOptional
      })) : null
    };
  }).sort((a, b) => {
    if (a.name === b.name) return 0;
    return a.name > b.name;
  });
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
