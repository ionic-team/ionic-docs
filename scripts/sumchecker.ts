import { createHash } from 'crypto';
import {
  existsSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  writeFileSync
} from 'fs';
import { join } from 'path';
const tmp = '.tmp';
const sections = ['api', 'cli', 'component-preview', 'native', 'storage'];

if (!existsSync(tmp)) {
  mkdirSync(tmp);
}

const check = section => {
  if (!section) return;
  const dir = join('scripts', section);
  const files = readdirSync(dir);
  let hashes = '';
  for (const file of files) {
    hashes += createHash('sha256')
      .update(readFileSync(join(dir, file), 'utf8'))
      .digest('hex');
    hashes += ` scripts/${section}/${file}\n`;
  }
  writeFileSync(join(tmp, `${section}.txt`), hashes);
};
if (process.argv[2] && sections.indexOf(process.argv[2]) > -1) {
  check(process.argv[2]);
} else {
  sections.forEach(check);
}

