import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from 'fs';
import { components } from '@ionic/docs/core.json';
import { commands } from '../data/cli.json';

const translateTypes = [
  {
    type: 'api',
    contents: components,
    key: 'tag',
    contentsKey: 'components',
    markdown: 'readme',
    resource: require('@ionic/docs/core.json'),
  },
  {
    type: 'cli',
    contents: commands,
    key: 'name',
    contentsKey: 'commands',
    markdown: 'description',
    resource: require('../data/cli.json'),
  },
  {
    type: 'native',
    contents: require('../data/native.json'),
    key: 'packageName',
    contentsKey: '',
    markdown: 'description',
    resource: require('../data/native.json'),
  }
];

async function apply() {
  for (const translateType of translateTypes) {
    const directory = process.cwd() + '/src/translate/' + translateType.type;
    if (!existsSync(directory)) {
      continue;
    }
    let directoryFiles: string[] | any = readdirSync(directory, { encoding: 'UTF8' });
    directoryFiles = directoryFiles
      .filter(file => {
        return (/.*\.json$/.test(file) && !file.match(/readme/));
      })
      .map(file => {
        return directory + '/' + file;
      });

    const componentsObject: object[] = [];
    for (const path of directoryFiles) {
      const componentObject = JSON.parse(readFileSync(path, { encoding: 'UTF8' }));
      const readmePath = path.replace(/\.json/g, '.readme.md');
      if (existsSync(readmePath)) {
        componentObject[translateType.markdown] = readFileSync(readmePath, { encoding: 'UTF8' });
      }
      componentsObject.push(componentObject);
    }
    let resource = translateType.resource;
    if (translateType.contentsKey) {
      resource[translateType.contentsKey] = componentsObject;
    } else {
      resource = componentsObject;
    }

    writeFileSync(process.cwd() + '/scripts/data/translated-' + translateType.type + '.json', JSON.stringify(resource, null, 2), { encoding: 'UTF8' });
  }
}

async function create() {
  for (const translateType of translateTypes) {
    translateType.contents.map(ob => {
      const key = _changeNameToVariable(ob[translateType.key]);
      const folder = {
        real: process.cwd() + '/src/translate/' + translateType.type + '/',
        shadow: process.cwd() + '/src/translate/.detection/' + translateType.type + '/',
      };
      const files = {
        real: folder.real + key + '.json',
        realReadme: folder.real + key + '.readme.md',
        shadow: folder.shadow + key + '.json',
        shadowReadme: folder.shadow + key + '.readme.md'
      };

      if (!existsSync(folder.real)) {
        mkdirSync(folder.real);
      }

      if (!existsSync(folder.shadow)) {
        mkdirSync(folder.shadow);
      }

      if (!existsSync(files.real)) {
        writeFileSync(files.real, JSON.stringify(ob, null, 2), { encoding: 'UTF8' });
      }

      if (!existsSync(files.realReadme)) {
        writeFileSync(files.realReadme, ob[translateType.markdown], { encoding: 'UTF8' });
      }

      writeFileSync(files.shadow, JSON.stringify(ob, null, 2), { encoding: 'UTF8' });
      writeFileSync(files.shadowReadme, ob[translateType.markdown], { encoding: 'UTF8' });
    });
  }
}

async function diff() {
  const execSync = require('child_process').execSync;
  for (const translateType of translateTypes) {
    execSync('git diff src/translate/.detection/' + translateType.type + '/*  > structure_' + translateType.type + '.patch');

    const patchPath = process.cwd() + '/structure_' + translateType.type + '.patch';
    const patchTxt = readFileSync(patchPath, { encoding: 'UTF8' });
    writeFileSync(patchPath, patchTxt.replace(/\/\.detection/g, ''), { encoding: 'UTF8' });

    try {
      execSync('patch -p1 < \'structure_' + translateType.type + '.patch\'');
    } catch (e) {
      console.log('▲ this patch request contains merge conflicts!');
    }
    execSync('rm structure_' + translateType.type + '.patch');
  }
}

function _changeNameToVariable(name: string) {
  return name
    .replace('ion-', '')
    .replace('@ionic-native/', '')
    .replace('ionic ', '')
    .replace(/ /g, '-')
    .replace(/\//g, '-');
}

(async () => {
  if (process.argv[2] === 'apply') {
    await apply();
  }
  if (process.argv[2] === 'create') {
    await create();
  }
  if (process.argv[2] === 'diff') {
    await diff();
  }
})();
