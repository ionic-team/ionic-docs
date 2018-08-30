import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import * as config from './config';
import * as docgen from './nativeDocgen';
import * as git from './git';
import { install, run } from './npm';
import { execp, vlog } from './utils';

const distList = join(config.NATIVE_DIR, '/dist/@ionic-native');
const menuPath = join('src/components/docs-menu/native-menu.ts');
const menuHeader = '/* tslint:disable:quotemark */\n\nexport const nativeMenu = ';

let navList: object = { 'Overview': '/docs/native' };

// the main task of the API documentation generation process
export async function generate(task) {
  const startTime = new Date().getTime();
  task.output = 'Updating...';
  const repoRef = await git.ensureLatestMaster(
    config.NATIVE_DIR,
    config.NATIVE_REPO_URL,
    'v5'
  );

  vlog('installing and building');
  task.output = 'NPM Installing...';
  await install(config.NATIVE_DIR);

  task.output = 'NPM run build:core...';
  await run('build:core', config.NATIVE_DIR);

  vlog('Reading output typescript data file');
  task.output = 'Generating Typedoc...';
  const typeDoc = await getTypeDoc();

  typeDoc.children.forEach(tsData => processPlugin(tsData, task));

  // write nav
  task.output = 'Generating Nav...';
  prepareNav();
  const ts = `${menuHeader}${JSON.stringify(navList, null, '  ')};\n`;
  writeFileSync(menuPath, ts);

  const endTime = new Date().getTime();
  task.output = `Native Docs copied in ${endTime - startTime}ms`;
}

async function getTypeDoc() {
  vlog('generating native docs json');
  await execp([
    `cd ${config.NATIVE_DIR} && ${join('../../node_modules/.bin/typedoc')}`,
    `--json ${join('dist/docs.json')} --mode modules`,
    `${join('src/@ionic-native/plugins/*/index.ts')}`
  ].join(' '));

  return JSON.parse(
    readFileSync(join(config.NATIVE_DIR, '/dist/docs.json'), `utf8`)
  );
}

// parse plugin data and write to markdown file
function processPlugin(tsData, task) {

  const plugin = preparePluginData(tsData);
  task.output = `Processing ${plugin.prettyName}...`;

  if (!existsSync(config.NATIVE_DOCS_DIR)) {
    mkdirSync(config.NATIVE_DOCS_DIR);
  }

  navList[plugin.prettyName] = `/docs/native/${plugin.npmName}`;

  writeFileSync(
    join(config.NATIVE_DOCS_DIR, `${plugin.npmName}.md`),
    docgen.getPluginMarkup(plugin)
  );
}


function preparePluginData(tsData) {

  const tsChild = getTSChild(tsData.children);
  const name = tsChild.name;

  if (name === 'ActionSheet') {
    const test = selectChild(tsChild.decorators, 'name', 'Plugin').arguments.config;
  }

  let metaArgs = {};
  if (tsChild.decorators[0].arguments && tsChild.decorators[0].arguments.config) {
    // here be dragons, this is very fragile
    // So we can avoid an `eval()`, we convert the object syntax string to valid
    // JSON. Unexected syntax in the refference decorator will break it.
    // console.log(tsChild.decorators[0].arguments.config)
    const str = tsChild.decorators[0].arguments.config
    .replace(/([',|\]]) \/\/+(.*)/g, '$1') // get rid of end of line comments (like this)
    .replace(/\n/g, ' ') // get rid of new lines
    .replace(/\"/g, '\\"') // escape quotes
    .replace(/\'/g, '"') // convert single quotes to double quotes
    .replace(/([\{|,])\s*(\w+):/g, '$1 "$2":') // format arrays
    .replace(/, }/g, '}') // trailing commas are valid JS, but not JSON
    ;
    // console.log(str);
    metaArgs = JSON.parse(str);
  }

  return {
    name,
    prettyName: selectChild(tsChild.comment.tags, 'tag', 'name').text || name,
    description: selectChild(tsChild.comment.tags, 'tag', 'description').text,
    installation: metaArgs['install'],
    repo: metaArgs['repo'],
    npmName: tsData.name.replace('\"', '').replace('/index', '').replace('"', ''),
    cordovaName: metaArgs['plugin'],
    platforms: metaArgs['platforms'],
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

function getTSChild(children) {
  // We know the name, because it's the class that's exported

  for (let i = 0; i < children.length; i++) {
    if (children[i].kindString === 'Class' && children[i].flags.isExported) {
      return children[i];
    }
  }
}

function prepareNav() {
  navList['Google Maps'] =
    'https://github.com/ionic-team/ionic-native-google-maps/blob/master/documents/README.md';

  const newNav = {};
  Object.keys(navList).sort((a, b) => a.localeCompare(b)).forEach(key => {
    newNav[key] = navList[key];
  });
  navList = newNav;
}
