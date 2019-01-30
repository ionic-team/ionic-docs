const express = require('express');
const parseurl = require('parseurl');
const path = require('path');

const app = express();
app.set('trust proxy', true);

app.get('/', (_, res) => res.redirect(301, '/docs/'));

app.use((req, res, next) => {
  const pathname = path.join(parseurl(req).pathname, 'index.html');
  const options = { root: path.join(__dirname, 'www') };

  res.sendFile(pathname, options, err => err && next());
});

app.use(express.static(path.join(__dirname, 'www')));

app.use((_, res) => {
  res.status(404).sendFile(`${__dirname}/www/docs/index.html`);
});

const listener = app.listen(process.env.PORT || 3030, () => {
  console.log(`Listening on port ${listener.address().port}`);
});
