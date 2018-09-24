import {
  CLI_DOCS_DIR,
  CLI_MENU_PATH,
  COMPONENT_PREVIEW_DOCS_DIR,
  FRAMEWORK_DOCS_DIR,
  FRAMEWORK_MENU_PATH,
  NATIVE_DOCS_DIR,
  NATIVE_MENU_PATH,
  STORAGE_DOCS_PATH
} from './config';

import fetch from 'node-fetch';
import { writeFileSync } from 'fs';
import { join } from 'path';

const tmpPath = '.tmp';

const sections = {
  cli: [CLI_DOCS_DIR, CLI_MENU_PATH],
  component: [COMPONENT_PREVIEW_DOCS_DIR],
  framework: [FRAMEWORK_DOCS_DIR, FRAMEWORK_MENU_PATH],
  native: [NATIVE_DOCS_DIR, NATIVE_MENU_PATH],
  storage: [STORAGE_DOCS_PATH]
};

const bucketURL = 'https://s3.amazonaws.com/ionic-docs/';
const requests = [];

async function run() {
  Object.keys(sections).forEach(key => {
    requests.push(downloadSection(key));
  });

  Promise.all(requests);
}

async function downloadSection(section) {
  try {
    const response = await fetch(bucketURL + section);
    const data = await response.blob();
    writeFileSync(join(tmpPath, `${section}.zip`), data);
  } catch (error) {
    console.log(error);
  }
}

run();
