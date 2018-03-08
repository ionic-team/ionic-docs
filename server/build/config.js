"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// settings
exports.PORT = int(process.env.PORT) || '3000';
exports.PROD = bool(process.env.PROD) || false;
exports.VERBOSE = bool(process.env.VERBOSE) || false;
function bool(str) {
    if (str === void 0) {
        return false;
    }
    return str.toLowerCase() === 'true';
}
function int(str) {
    if (!str) {
        return 0;
    }
    return parseInt(str, 10);
}
// function float(str) {
//   if (!str) {
//     return 0;
//   }
//   return parseFloat(str);
// }
