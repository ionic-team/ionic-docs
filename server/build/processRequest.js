"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// var redirects       = require('./data/redirects');
const url = require("url");
exports.default = (req, res, next) => {
    // redirect www
    if (req.headers.host.slice(0, 4) === 'www.') {
        const newHost = req.headers.host.slice(4);
        return res.redirect(301, 'https://' + newHost + req.originalUrl);
    }
    // redirect entire old sections
    const parts = url.parse(req.url);
    if (parts.path.indexOf('/docs/v1/cli') === 0) {
        return res.redirect(301, '/docs/cli/');
    }
    // handle redirects
    // const uri = req.url.split(/[\?|#]/g);
    // let requrl = uri[0];
    // if (requrl.endsWith('/')) {
    //   requrl = requrl.slice(0, -1);
    // }
    // if (redirects[requrl]) {
    //   if (uri[1]) {
    //     return res.redirect(301, redirects[requrl] + '?' + uri[1]);
    //   }
    //   return res.redirect(301, redirects[requrl]);
    // }
    // TODO remove before going live
    res.setHeader('X-Robots-Tag', 'noindex, nofollow');
    // don't index non production URLs, but favor HTTPS
    let protocol = 'https';
    if (req.hostname.indexOf('ionicframework.com') === -1) {
        // res.setHeader('X-Robots-Tag', 'noindex, nofollow');
        protocol = 'http';
    }
    else {
        // require https in prod
        let csp = 'default-src https: data: blob: \'unsafe-eval\' \'unsafe-inline\'; ';
        csp += 'frame-src \'self\' https://unpkg.com;';
        res.setHeader('Content-Security-Policy', csp);
        res.setHeader('X-Content-Security-Policy', csp);
        res.setHeader('X-WebKit-CSP', csp);
    }
    // cache static files
    const staticURLS = ['/assets/', '/favicon.ico'];
    for (let i = 0; i <= staticURLS.length; i++) {
        if (req.url.indexOf(staticURLS[i]) === 0) {
            res.setHeader('Cache-Control', 'public, max-age=315360000000');
            res.setHeader('Expires', new Date(Date.now() + 315360000000).toUTCString());
            break;
        }
    }
    // Setting default Page Vars
    res.locals = {
        protocol: protocol,
        domain: req.get('host'),
        url: req.originalUrl,
        dev: req.get('host').indexOf('localhost') === 0,
    };
    return next();
};
function shuffle(array) {
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}
