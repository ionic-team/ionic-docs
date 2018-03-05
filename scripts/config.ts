// directories
export const ANGULAR_SRC = process.env.ANGULAR_SRC || 'packages/angular/src';
export const CORE_SRC = process.env.CORE_SRC || 'packages/core/src';
export const IONIC_DIR = process.env.IONIC_DIR || 'ionic';
export const PATH_DOCS = process.env.PATH_DOCS || '';
export const MONOREPO_URL = process.env.MONOREPO_URL || 'https://github.com/ionic-team/ionic';
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
