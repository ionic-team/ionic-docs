import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from 'fs';
import { components } from '@ionic/docs/core.json';
import { commands } from './data/cli.json';

const translateTypes = [
  {
    type: 'api',
    contents: components,
    key: 'tag',
    md: 'readme',
  },
  {
    type: 'cli',
    contents: commands,
    key: 'name',
    md: 'description',
  },
  {
    type: 'native',
    contents: require('./data/native.json'),
    key: 'packageName',
    md: 'description',
  }
];

async function apply() {
  let fileList: string[] | any = [];
  for (const d of translateTypes) {
    const directory = process.cwd() + '/src/translate/' + d.type;
    if (!existsSync(directory)) {
      continue;
    }
    let files: string[] | any = readdirSync(directory, { encoding: 'UTF8' });
    files = files
      .filter(file => {
        return (/.*\.json$/.test(file) && !file.match(/readme/));
      })
      .map(file => {
        return directory + '/' + file;
      });
    fileList = fileList.concat(files);
  }

  const componentsObject: object[] = [];
  for (const path of fileList) {
    const componentObject = JSON.parse(readFileSync(path, { encoding: 'UTF8' }));
    const readmePath = path.replace(/\.json/g, '.readme.md');
    if (existsSync(readmePath)) {
      componentObject.readme = readFileSync(readmePath, { encoding: 'UTF8' });
    }
    componentsObject.push(componentObject);
  }
  const corePath = process.cwd() + '/scripts/data/core.json';
  const core = JSON.parse(readFileSync(corePath, { encoding: 'UTF8' }));
  core.components = componentsObject;

  writeFileSync(process.cwd() + '/scripts/data/core.json', JSON.stringify(core, null, 2), { encoding: 'UTF8' });
}

async function create() {
  for (const translateType of translateTypes) {
    translateType.contents.map(ob => {
      const key = _changeNameToVariable(ob[translateType.key]);
      const folder = {
        real: process.cwd() + '/src/translate/' + translateType.type + '/',
        shadow: process.cwd() + '/src/translate/.' + translateType.type + '/',
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
        writeFileSync(files.realReadme, ob[translateType.md], { encoding: 'UTF8' });
      }

      writeFileSync(files.shadow, JSON.stringify(ob, null, 2), { encoding: 'UTF8' });
      writeFileSync(files.shadowReadme, ob[translateType.md], { encoding: 'UTF8' });
    });
  }
}

async function diff() {
  const execSync = require('child_process').execSync;
  execSync('git diff src/translate/.api/*  > structure_api.patch');

  const patchPath = process.cwd() + '/structure_api.patch';
  const patchTxt = readFileSync(patchPath, { encoding: 'UTF8' });
  console.log(patchTxt.replace(/\.api/g, 'api'));
  writeFileSync(patchPath, patchTxt.replace(/\.api/g, 'api'), { encoding: 'UTF8' });

  execSync('patch -p1 < \'structure_api.patch\'');
  execSync('rm structure_api.patch');
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
