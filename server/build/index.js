"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const express = require("express");
const compress = require("compression");
const helmet = require("helmet");
const path_1 = require("path");
const config = require("./config");
const processRequest_1 = require("./processRequest");
dotenv_1.config({ silent: true });
const app = express();
process.env.PWD = process.cwd();
console.log('PWD', process.env.PWD);
app.set('trust proxy', true);
app.use(compress());
app.use(helmet());
app.use(processRequest_1.default);
app.enable('etag');
app.use(express.static(process.env.PWD + '/www/', {
    etag: true
}));
app.get('/', function (req, res) {
    res.redirect('/docs');
});
app.get(/^(.(?!.*\.md$|.*\.js))*$/, function (req, res) {
    res.sendFile('docs/index.html', { root: path_1.join(__dirname, '../../www') });
});
// app.use(pageNotFound);
// bind the app to listen for connections on a specified port
app.listen(config.PORT, function () {
    // Render some console log output
    console.log('Listening on port ' + config.PORT);
});
