const express = require('express');
const parseurl = require('parseurl');
const path = require('path');

const Sentry = require('@sentry/node');
const compress = require('compression');
const helmet = require('helmet');
const throng = require('throng');

const start = () => {
  const app = express();
  app.set('trust proxy', true);

  if (process.env.SENTRY_DSN) {
    Sentry.init({
      dsn: process.env.SENTRY_DSN,
      environment: process.env.SENTRY_ENVIRONMENT
    });
  }

  app.use(Sentry.Handlers.requestHandler());
  app.use(compress());
  app.use(helmet());

  app.get('/', (_, res) => res.redirect(301, '/docs/'));

  app.use((req, res, next) => {
    const pathname = path.join(parseurl(req).pathname, 'index.html');
    const options = { root: path.join(__dirname, 'www') };

    res.sendFile(pathname, options, err => err && next());
  });

  app.use(express.static(path.join(__dirname, 'www'), {
    maxAge: '2h',
    setHeaders: setCustomCacheControl
  }));

  app.use(Sentry.Handlers.errorHandler());
  app.use((_, res) => {
    res.status(404).sendFile(`${__dirname}/www/docs/index.html`);
  });

  const listener = app.listen(process.env.PORT || 3030, () => {
    console.log(`Listening on port ${listener.address().port}`);
  });

  function setCustomCacheControl (res, path) {
    if (
      express.static.mime.lookup(path) === 'text/javascript' &&
      path.indexOf('p-') !== -1
    ) {
      // Custom Cache-Control for production JS files
      res.setHeader('Cache-Control', 'public, max-age=86400')
    } else {
      res.setHeader('Cache-Control', 'public, max-age=600')
    }
  }
}

throng({
  workers: process.env.WEB_CONCURRENCY ? 
    parseInt(process.env.WEB_CONCURRENCY, 10) : 1,
  lifetime: Infinity
}, start)
