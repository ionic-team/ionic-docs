// directories
export const IONIC_ANGULAR_SRC = process.env.ANGULAR_SRC || 'angular/src';
export const IONIC_CORE_SRC = process.env.CORE_SRC || 'core/src';
export const IONIC_DIR = process.env.IONIC_DIR || 'sources/ionic';
export const IONIC_REPO_URL = process.env.MONOREPO_URL || 'https://github.com/ionic-team/ionic';
export const API_DOCS_DIR = process.env.API_DOCS_DIR || 'src/docs-content/api';

export const CLI_DIR = process.env.CLI_DIR || 'sources/ionic-cli';
export const CLI_REPO_URL = process.env.MONOREPO_URL || 'https://github.com/ionic-team/ionic-cli.git';

export const PATH_DOCS = process.env.PATH_DOCS || '';
export const VERBOSE = bool(process.env.VERBOSE) || false;


function bool(str) {
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
