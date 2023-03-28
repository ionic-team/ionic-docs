import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from 'fs';
import { getTranslateType } from './translate-type';
const translate = require('deepl');
import DeeplConfig from './deepl.config.json';
import TranslatedCache from '../data/translated-cache.json';

const apply = async () => {
  const translateTypes = await getTranslateType();

  const cacheTranslated = TranslatedCache.cache as { [key: string]: string };
  const translatedNow = {} as { [key: string]: string };

  for (const translateType of translateTypes) {
    const directory = process.cwd() + '/src/translate/' + translateType.type;
    if (!existsSync(directory)) {
      continue;
    }
    let directoryFiles: string[] | any = readdirSync(directory, { encoding: 'utf8' });
    directoryFiles = directoryFiles
      .filter((file: string) => {
        return (/.*\.json$/.test(file) && !file.match(/readme/));
      })
      .map((file: string) => {
        return directory + '/' + file;
      });

    const componentsObject: object[] = [];
    for (const path of directoryFiles) {
      const componentObject = JSON.parse(readFileSync(path, { encoding: 'utf8' }));
      const readmePath = path.replace(/\.json/g, '.readme.md');
      if (existsSync(readmePath)) {
        componentObject[translateType.markdown] = readFileSync(readmePath, { encoding: 'utf8' });
      }
      await Promise.all(translateType.translateTarget.map(async (target: string) => {
        if (componentObject[target]) {
          await Promise.all(componentObject[target].map(async (ob: any) => {
            if (ob[translateType.translateTargetKey]) {
              const translateText = ob[translateType.translateTargetKey].replace(/\n/g, ' ');

              // キャッシュデータにあるか確認
              if (cacheTranslated.hasOwnProperty(translateText)) {
                ob[translateType.translateTargetKey] = cacheTranslated[translateText];
                return;
              }

              // 今回翻訳データにあるか確認
              if (translatedNow.hasOwnProperty(ob[translateType.translateTargetKey])) {
                ob[translateType.translateTargetKey] = ob[translateType.translateTargetKey] + `\n\n自動翻訳: ${translatedNow[translateText]}`;
                return;
              }

              const response = await translate({
                free_api: true,
                text: translateText,
                source_lang: DeeplConfig.fromLanguage,
                target_lang: DeeplConfig.toLanguage,
                auth_key: process.env.DEEPLAUTHKEY,
              });
              const translated = response.data.translations[0].text;
              translatedNow[translateText] = translated;

              ob[translateType.translateTargetKey] = ob[translateType.translateTargetKey] + `\n\n自動翻訳: ${translated}`;
            }
          }));
        }
      }));
      componentsObject.push(componentObject);
    }
    let resource = translateType.resource;
    // tslint:disable-next-line
    if (translateType.contentsKey) {
      resource[translateType.contentsKey] = componentsObject;
    } else {
      resource = componentsObject;
    }

    writeFileSync(process.cwd() + '/scripts/data/translated-' + translateType.type + '.json', JSON.stringify(resource, null, 2), { encoding: 'utf8' });
  }

  // 翻訳データの結合
  const writeTranslateCache = {
    cache: Object.assign(cacheTranslated, translatedNow)
  };
  writeFileSync(process.cwd() + '/scripts/data/translated-cache.json', JSON.stringify(writeTranslateCache, null, 2), { encoding: 'utf8' });
};

const create = async () => {
  const translateTypes = await getTranslateType();

  for (const translateType of translateTypes) {
    translateType.contents.map((ob: any) => {
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
        writeFileSync(files.real, JSON.stringify(ob, null, 2), { encoding: 'utf8' });
      }

      if (!existsSync(files.realReadme)) {
        writeFileSync(files.realReadme, ob[translateType.markdown], { encoding: 'utf8' });
      }

      writeFileSync(files.shadow, JSON.stringify(ob, null, 2), { encoding: 'utf8' });
      writeFileSync(files.shadowReadme, ob[translateType.markdown], { encoding: 'utf8' });
    });
  }
};

const diff = async () => {
  const execSync = require('child_process').execSync;
  const translateTypes = await getTranslateType();

  for (const translateType of translateTypes) {
    execSync('git diff src/translate/.detection/' + translateType.type + '/*  > structure_' + translateType.type + '.patch');

    const patchPath = process.cwd() + '/structure_' + translateType.type + '.patch';
    const patchTxt = readFileSync(patchPath, { encoding: 'utf8' });
    writeFileSync(patchPath, patchTxt.replace(/\/\.detection/g, ''), { encoding: 'utf8' });

    try {
      execSync('patch -p1 < \'structure_' + translateType.type + '.patch\'');
    } catch (e) {
      console.log('▲ this patch request contains merge conflicts!');
    }
    execSync('rm structure_' + translateType.type + '.patch');
  }
};

const _changeNameToVariable = (name: string) => {
  return name
    .replace('ion-', '')
    .replace('@ionic-native/', '')
    .replace('ionic ', '')
    .replace(/ /g, '-')
    .replace(/\//g, '-');
};

(async () => {
  if (process.argv[2] === 'apply') {
    apply();
  }
  if (process.argv[2] === 'create') {
    create();
  }
  if (process.argv[2] === 'diff') {
    diff();
  }
})();
