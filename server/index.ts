import {config as dotenv } from 'dotenv';
import * as express        from 'express';
import * as compress       from 'compression';
import * as helmet         from 'helmet';
import { join }            from 'path';

import * as config         from './config';
import * as pageNotFound   from './pageNotFound';
import { default as processRequest } from './processRequest';


dotenv({silent: true});
const app = express();

process.env.PWD = process.cwd();

console.log('PWD', process.env.PWD);

app.set('trust proxy', true);
app.use(compress());
app.use(helmet());
app.use(processRequest);

app.enable('etag');

app.use(express.static(process.env.PWD + '/www/', {
  etag: true
}));

app.get('/', function (req, res) {
  res.redirect('/docs');
});

app.get(/^(.(?!.*\.md$|.*\.js))*$/, function (req, res) {
  res.sendFile('docs/index.html', { root: join(__dirname, '../../www')});
});

// app.use(pageNotFound);

// bind the app to listen for connections on a specified port
app.listen(config.PORT, function() {
  // Render some console log output
  console.log('Listening on port ' + config.PORT);
});
