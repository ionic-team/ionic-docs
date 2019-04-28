const documentDirectories = ['api', 'cli', 'native'];
interface SourceJSON {
  body: string;
  docs: string;
}

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
        return /.*\.json$/.test(file);
      })
      .map(file => {
        return directory + '/' + file;
      });
    fileList = fileList.concat(files);
  }

  for (const path of fileList) {
    const transText = JSON.parse(fs.readFileSync(path, { encoding: 'UTF8' }));
    const resourceText: SourceJSON = JSON.parse(fs.readFileSync(process.cwd() + '/' + transText.target, { encoding: 'UTF8' }));

    ['body'].forEach(key => {
      if (resourceText[key] === transText.translate[key]['original'] && transText.translate[key]['translate'].length > 0) {
        resourceText[key] = transText.translate[key]['translate'];
      }
    });
    fs.writeFileSync(process.cwd() + '/' + transText.target, JSON.stringify(resourceText, null, 2), { encoding: 'UTF8' });
  }
}

import { components } from '@ionic/docs/core.json';
async function create() {
  const fs = require('fs');
  components.map(component => {
    const files = {
      real: process.cwd() + '/src/translate/api/' + component.tag + '.json',
      shadow: process.cwd() + '/src/translate/api/.' + component.tag + '.json'
    };

    if (!fs.existsSync(files.real)) {
      fs.writeFileSync(files.real, JSON.stringify(component, null, 2), { encoding: 'UTF8' });
    }

    fs.writeFileSync(files.shadow, JSON.stringify(component, null, 2), { encoding: 'UTF8' });
  });
}

(async () => {
  if (process.argv[2] === 'apply') {
    await apply();
  }

  if (process.argv[2] === 'create') {
    await create();
  }
})();
