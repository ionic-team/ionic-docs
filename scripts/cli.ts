import * as fs from 'fs';
import * as path from 'path';
import * as config from './config';
import * as docgen from './cliDocgen';
import * as git from './git';
import * as npm from './npm';
import * as utils from './utils';

// the main task of the API documentation generation process
export async function generate() {
  const startTime = new Date().getTime();

  const repo = await git.initCLIRepoRefference();

  const docs = await npm.getCLIDocs();
  Object.keys(docs).forEach(version => {
    writeDocs(docs[version]);
  });

  const endTime = new Date().getTime();
  console.log(`CLI Docs copied in ${endTime - startTime}ms`);
}

function writeDocs(doc) {
  const dest = path.join(config.CLI_DOCS_DIR, doc.type);

  if (!fs.existsSync(dest)) fs.mkdirSync(dest);

  fs.writeFileSync(
    path.join(dest, `commands.md`),
    docgen.getVersionMarkup(doc)
  );
}
