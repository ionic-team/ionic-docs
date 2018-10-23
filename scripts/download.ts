import {
  AWS_ACCESS_KEY_ID,
  AWS_BUCKET,
  AWS_SECRET_ACCESS_KEY,
  CLI_DOCS_DIR,
  CLI_MENU_PATH,
  COMPONENT_PREVIEW_DOCS_DIR,
  FRAMEWORK_DOCS_DIR,
  FRAMEWORK_MENU_PATH,
  NATIVE_DOCS_DIR,
  NATIVE_MENU_PATH,
  STORAGE_DOCS_PATH
} from './config';
import { upsertFilePath } from './utils';

import AWS from 'aws-sdk';
import { createWriteStream } from 'fs';
import unzipper from 'unzipper';


if (!AWS_ACCESS_KEY_ID && AWS_SECRET_ACCESS_KEY) {
  AWS.config.update({
    accessKeyId: AWS_ACCESS_KEY_ID,
    secretAccessKey: AWS_SECRET_ACCESS_KEY
  });
}
const s3Client = new AWS.S3(AWS.config);

const sections = {
  cli: {
    paths: [CLI_DOCS_DIR, CLI_MENU_PATH],
    pathHook: path => CLI_MENU_PATH.indexOf(path) > -1 ? CLI_MENU_PATH : path
  },
  components: {
    paths: [COMPONENT_PREVIEW_DOCS_DIR],
    pathHook: path => path
  },
  // framework: {
  //   paths: [FRAMEWORK_DOCS_DIR, FRAMEWORK_MENU_PATH],
  //   pathHook: path => FRAMEWORK_MENU_PATH.indexOf(path) > -1 ?
  //     FRAMEWORK_MENU_PATH : path
  // },
  native: {
    paths: [NATIVE_DOCS_DIR, NATIVE_MENU_PATH],
    pathHook: path => NATIVE_MENU_PATH.indexOf(path) > -1 ? NATIVE_MENU_PATH : path
  },
  storage: {
    paths: [STORAGE_DOCS_PATH],
    pathHook: () => STORAGE_DOCS_PATH
  }
};

async function run() {
  const activeDownloads = [];

  Object.keys(sections).forEach(key => {
    activeDownloads.push(downloadSection(sections[key], key));
  });

  const test = await Promise.all(activeDownloads);
}

async function downloadSection(section, sectionName) {
  await unzipper.Open.s3(s3Client, { Bucket: AWS_BUCKET, Key: `${sectionName}.zip` })
  .then(async d => {
    d.files.forEach(
      async file => downloadFile(file, section.pathHook(file.path))
    );
  });
  console.log(`${sectionName}: done`);
}

async function downloadFile(file, dest) {
  if (dest.indexOf('.') === -1) return;
  upsertFilePath(dest);
  // if (dest.indexOf('src/content/') !== 0) {
  //   console.log(dest);
  // }

  return new Promise((resolve, reject) => {
    file.stream()
    .pipe(createWriteStream(dest))
    .on('error', reject)
    .on('finish', resolve);
  });
}

run();
