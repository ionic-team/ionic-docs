const documentDirectories = ['api', 'cli', 'native'];
interface SourceJSON {
  body: string;
  docs: string;
}

async function apply(lang: string) {
  const fs = require('fs');
  let fileList: string[] | any = [];

  for (const d of documentDirectories) {
    const directory = process.cwd() + '/src/translate/' + lang + '/' + d;
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

    ['docs', 'body'].forEach(key => {
      if (resourceText[key] === transText.translate[key]['original'] && transText.translate[key]['translate'].length > 0) {
        resourceText[key] = transText.translate[key]['translate'];
      }
    });
    fs.writeFileSync(process.cwd() + '/' + transText.target, JSON.stringify(resourceText, null, 2), { encoding: 'UTF8' });
  }
}

async function create(lang: string, path: string) {
  // const fs = require('fs');
  console.log([lang, path]);
  // path = path.replace('src/', '').replace('content/', '');
  // const includeFlg = documentDirectories.find(data => {
  //   if (!data) {
  //     return false;
  //   }
  //   return (path.indexOf(data) !== -1);
  // });
  // if (!includeFlg) {
  //   Error('[error] path is disable string.');
  //   return;
  // }
  // const resourceText = readFileSync(process.cwd() + '/src/content/' + path, { encoding: 'UTF8' });
  // if (!resourceText) {
  //   Error('[error] path is not exist file.');
  //   return;
  // }
  //
  // const json = JSON.stringify({
  //   target: path,
  //   translate: {}
  // });
  //
  // const writeFileName = process.cwd() + '/translate/' + lang + '/' + path.replace('md', 'json');
  // if (!existsSync(writeFileName.split('/').reverse().slice(1).reverse().join('/'))) {
  //   mkdirSync(writeFileName.split('/').reverse().slice(1).reverse().join('/'));
  // }
  // if (existsSync(writeFileName)) {
  //   Error('[error] translate file exist.');
  //   return;
  // }
  // writeFileSync(writeFileName, json, { encoding: 'UTF8' });
}

(async () => {
  if (process.argv[2] === 'apply') {
    await apply(process.argv[3]);
  }

  if (process.argv[2] === 'create' && process.argv[3] && process.argv[4]) {
    await create(process.argv[3], process.argv[4]);
  }
})();
