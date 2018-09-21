import { config as dotenv } from 'dotenv';
dotenv({ silent: true });

import { join } from 'path';
export const GIT_URL = process.env.GIT_URL || 'https://github.com/ionic-team/ionic-docs.git';

// directories
export const FRAMEWORK_ANGULAR_SRC = process.env.FRAMEWORK_ANGULAR_SRC || join('angular/src');
export const FRAMEWORK_COMPONENTS_SRC = process.env.FRAMEWORK_COMPONENTS_SRC || join('core/src/components');
export const FRAMEWORK_DIR = process.env.FRAMEWORK_DIR || join('sources/ionic');
export const FRAMEWORK_CORE_DIR = process.env.FRAMEWORK_CORE_DIR || join(FRAMEWORK_DIR, 'core');
export const FRAMEWORK_REPO_URL = process.env.FRAMEWORK_REPO_URL || 'https://github.com/ionic-team/ionic';
export const FRAMEWORK_DOCS_DIR = process.env.FRAMEWORK_DOCS_DIR || join('src/content/api');
export const FRAMEWORK_MENU_PATH = process.env.FRAMEWORK_MENU_PATH || join('src/components/docs-menu/docs-api-map.ts');
export const FRAMEWORK_LOCALIZED = bool(process.env.FRAMEWORK_LOCALIZED) || false;

export const CLI_DIR = process.env.CLI_DIR || join('sources/ionic-cli');
export const CLI_REPO_URL = process.env.CLI_REPO_URL || 'https://github.com/ionic-team/ionic-cli.git';
export const CLI_DOCS_DIR = process.env.CLI_DOCS_DIR || join('src/content/cli');
export const CLI_MENU_PATH = process.env.CLI_MENU_PATH || join('src/components/docs-menu/cli-menu.ts');

export const NATIVE_DIR = process.env.NATIVE_DIR || join('sources/ionic-native');
export const NATIVE_REPO_URL = process.env.NATIVE_REPO_URL || 'https://github.com/ionic-team/ionic-native.git';
export const NATIVE_DOCS_DIR = process.env.NATIVE_DOCS_DIR || join('src/content/native');
export const NATIVE_MENU_PATH = process.env.NATIVE_MENU_PATH || join('src/components/docs-menu/native-menu.ts');

export const STORAGE_DIR = process.env.STORAGE_DOCS_DIR || join('sources/ionic-storage');
export const STORAGE_REPO_URL = process.env.STORAGE_DOCS_DIR || 'https://github.com/ionic-team/ionic-storage.git';
export const STORAGE_DOCS_PATH = process.env.STORAGE_DOCS_PATH || join('src/content/building/storage.md');

export const COMPONENT_PREVIEW_DIR = process.env.COMPONENT_PREVIEW_DIR || join('sources/component-preview');
export const COMPONENT_PREVIEW_REPO_URL = process.env.COMPONENT_PREVIEW_REPO_URL || 'https://github.com/ionic-team/component-preview';
export const COMPONENT_PREVIEW_DOCS_DIR = process.env.COMPONENT_PREVIEW_DOCS_DIR || join('src/content/component-preview-app');

// AWS
export const AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY_ID || null;
export const AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY || null;

// settings
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
