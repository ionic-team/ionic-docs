import { join } from 'path';
export const GIT_URL = process.env.GIT_URL || 'https://github.com/ionic-team/ionic-docs.git';

// directories
export const IONIC_ANGULAR_SRC = process.env.IONIC_ANGULAR_SRC || join('angular/src');
export const IONIC_CORE_SRC = process.env.IONIC_CORE_SRC || join('core/src');
export const IONIC_DIR = process.env.IONIC_DIR || join('sources/ionic');
export const IONIC_REPO_URL = process.env.IONIC_REPO_URL || 'https://github.com/ionic-team/ionic';
export const API_DOCS_DIR = process.env.API_DOCS_DIR || join('src/content/api');
export const CLI_DIR = process.env.CLI_DIR || join('sources/ionic-cli');
export const CLI_REPO_URL = process.env.CLI_REPO_URL || 'https://github.com/ionic-team/ionic-cli.git';
export const CLI_DOCS_DIR = process.env.CLI_DOCS_DIR || join('src/content/cli');
export const NATIVE_DIR = process.env.NATIVE_DIR || join('sources/ionic-native');
export const NATIVE_REPO_URL = process.env.NATIVE_REPO_URL || 'https://github.com/ionic-team/ionic-native.git';
export const NATIVE_DOCS_DIR = process.env.NATIVE_DOCS_DIR || join('src/content/native');
export const STORAGE_DIR = process.env.STORAGE_DOCS_DIR || join('sources/ionic-storage');
export const STORAGE_REPO_URL = process.env.STORAGE_DOCS_DIR || 'https://github.com/ionic-team/ionic-storage.git';
export const STORAGE_DOCS_DIR = process.env.STORAGE_DOCS_DIR || join('src/content/building');
export const COMPONENT_PREVIEW_DIR = process.env.COMPONENT_PREVIEW_DIR || join('sources/component-preview');
export const COMPONENT_PREVIEW_REPO_URL = process.env.COMPONENT_PREVIEW_REPO_URL || 'https://github.com/ionic-team/component-preview';
export const COMPONENT_PREVIEW_DOCS_DIR = process.env.COMPONENT_PREVIEW_DOCS_DIR || join('src/content/component-preview-app');

// setting
export let VERBOSE = bool(process.env.VERBOSE) || false;

export function setVerbose(val) {
  // console.log('gets here')
  VERBOSE = bool(val);
}

function bool(str) {
  if (typeof str === 'boolean') {
    return str;
  }
  if (str === void 0) {
    return false;
  }
  return str.toLowerCase() === 'true';
}

// function int(str) {
//   if (!str) {
//     return 0;
//   }
//   return parseInt(str, 10);
// }

// function float(str) {
//   if (!str) {
//     return 0;
//   }
//   return parseFloat(str);
// }
