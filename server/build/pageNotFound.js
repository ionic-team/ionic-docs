"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
exports.default = (req, res, next) => {
    // var parts = url.parse(req.url);
    // let urlParts = req.path.split('/');
    res.redirect(404, '/404.html');
};
function getDirectories(srcpath) {
    return fs.readdirSync(srcpath)
        .filter(file => fs.statSync(path.join(srcpath, file)).isDirectory());
}
