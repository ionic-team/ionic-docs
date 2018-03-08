import * as url  from 'url';
import * as fs   from 'fs';
import * as path from 'path';

export default (req, res, next) => {

  // var parts = url.parse(req.url);
  // let urlParts = req.path.split('/');

  res.redirect(404, '/404.html');
};

function getDirectories(srcpath) {
  return fs.readdirSync(srcpath)
  .filter(file => fs.statSync(path.join(srcpath, file)).isDirectory());
}
