import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from 'fs';
const documentDirectories = ['', 'building/', 'api/', 'cli/', 'cli/commands/', 'content/native/'];

async function apply(lang: string) {
  let fileList: string[] | any = [];

  for (const d of documentDirectories) {
    const directory = process.cwd() + '/translate/' + lang + '/' + d;
    if (!existsSync(directory)) {
      continue;
    }
    let files: string[] | any = readdirSync(directory, { encoding: 'UTF8' });
    files = files
      .filter(file => {
        return /.*\.json$/.test(file);
      })
      .map(file => {
        return directory + file;
      });
    fileList = fileList.concat(files);
  }

  for (const path of fileList) {
    const transFile = JSON.parse(readFileSync(path, { encoding: 'UTF8' }));
    const transLang = transFile.translate;
    let resourceText = readFileSync(process.cwd() + '/src/content/' + transFile.target, { encoding: 'UTF8' });

    for (const key of Object.keys(transLang)) {
      if (key.length > 0 && transLang[key].length > 0) {
        resourceText = resourceText.replace(new RegExp(key.replace(/[-\/\\^$*+?.()|\[\]{}]/g, '\\$&'), 'g'), transLang[key]);
      }
    }
    writeFileSync(process.cwd() + '/src/content/' + transFile.target, resourceText, { encoding: 'UTF8' });
  }
}

async function create(lang: string, path: string) {
  path = path.replace('src/', '').replace('content/', '');
  const includeFlg = documentDirectories.find(data => {
    if (!data) {
      return false;
    }
    return (path.indexOf(data) !== -1);
  });
  if (!includeFlg) {
    Error('[error] path is disable string.');
    return;
  }
  const resourceText = readFileSync(process.cwd() + '/src/content/' + path, { encoding: 'UTF8' });
  if (!resourceText) {
    Error('[error] path is not exist file.');
    return;
  }

  const json = JSON.stringify({
    target: path,
    translate: {}
  });

  const writeFileName = process.cwd() + '/translate/' + lang + '/' + path.replace('md', 'json');
  if (!existsSync(writeFileName.split('/').reverse().slice(1).reverse().join('/'))) {
    mkdirSync(writeFileName.split('/').reverse().slice(1).reverse().join('/'));
  }
  if (existsSync(writeFileName)) {
    Error('[error] translate file exist.');
    return;
  }
  writeFileSync(writeFileName, json, { encoding: 'UTF8' });
}

(async () => {
  if (process.argv[2] === 'apply') {
    apply(process.argv[3]);
  }

  if (process.argv[2] === 'create' && process.argv[3] && process.argv[4]) {
    create(process.argv[3], process.argv[4]);
  }
})();
