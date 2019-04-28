const documentDirectories = ['api', 'cli', 'native'];
import { components } from '@ionic/docs/core.json';

async function apply() {
  const fs = require('fs');
  let fileList: string[] | any = [];

  for (const d of documentDirectories) {
    const directory = process.cwd() + '/src/translate/' + d;
    if (!fs.existsSync(directory)) {
      continue;
    }
    let files: string[] | any = fs.readdirSync(directory, { encoding: 'UTF8' });
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
    const componentObject = JSON.parse(fs.readFileSync(path, { encoding: 'UTF8' }));
    const readmePath = path.replace(/\.json/g, '.readme.md');
    if (fs.existsSync(readmePath)) {
      componentObject.readme = fs.readFileSync(readmePath, { encoding: 'UTF8' });
    }
    componentsObject.push(componentObject);
  }
  const corePath = process.cwd() + '/scripts/data/core.json';
  const core = JSON.parse(fs.readFileSync(corePath, { encoding: 'UTF8' }));
  core.components = componentsObject;

  fs.writeFileSync(process.cwd() + '/scripts/data/core.json', JSON.stringify(core, null, 2), { encoding: 'UTF8' });
}

async function create() {
  const fs = require('fs');
  components.map(component => {
    const files = {
      real: process.cwd() + '/src/translate/api/' + component.tag.replace('ion-', '') + '.json',
      realReadme: process.cwd() + '/src/translate/api/' + component.tag.replace('ion-', '') + '.readme.md',
      shadow: process.cwd() + '/src/translate/.api/' + component.tag.replace('ion-', '') + '.json',
      shadowReadme: process.cwd() + '/src/translate/.api/' + component.tag.replace('ion-', '') + '.readme.md'
    };

    if (!fs.existsSync(files.real)) {
      fs.writeFileSync(files.real, JSON.stringify(component, null, 2), { encoding: 'UTF8' });
    }

    if (!fs.existsSync(files.realReadme)) {
      fs.writeFileSync(files.realReadme, component.readme, { encoding: 'UTF8' });
    }

    fs.writeFileSync(files.shadow, JSON.stringify(component, null, 2), { encoding: 'UTF8' });
    fs.writeFileSync(files.shadowReadme, component.readme, { encoding: 'UTF8' });
  });
}

async function diff() {
  const fs = require('fs');
  const execSync = require('child_process').execSync;
  execSync('git diff src/translate/.api/*  > structure_api.patch');

  const patchPath = process.cwd() + '/structure_api.patch';
  const patchTxt = fs.readFileSync(patchPath, { encoding: 'UTF8' });
  console.log(patchTxt.replace(/\.api/g, 'api'));
  fs.writeFileSync(patchPath, patchTxt.replace(/\.api/g, 'api'), { encoding: 'UTF8' });

  execSync('patch -p1 < \'structure_api.patch\'');
  execSync('rm structure_api.patch');
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
