import * as fs from 'fs';
import { join } from 'path';
import { generate  as apiDocs } from './api';
import { generate  as cliDocs } from './cli';
import { generate  as nativeDocs } from './native';
import * as utils from './utils';
import {
  API_DOCS_DIR,
  CLI_DOCS_DIR,
  NATIVE_DOCS_DIR
} from './config';

// the main task of the API documentation generation process
async function run() {
  utils.vlog('Starting CLI CI task');
  if (!(await utils.preCheck())) {
    console.error('Docs Precheck Failure. Check configs and readme.');
    return;
  } else {
    utils.vlog('Precheck complete');
  }

  await tryToRun(apiDocs, 'API', API_DOCS_DIR);
  await tryToRun(cliDocs, 'CLI', CLI_DOCS_DIR);
  await tryToRun(nativeDocs, 'Native', NATIVE_DOCS_DIR);
}

async function tryToRun(func: () => void, name: string, outDir?: string) {
  try {
    console.log(`Generating ${name} Docs`);
    await func();
  } catch (error) {
    // note if outDir is not provided throw any time the command fails
    if (!outDir || !fs.existsSync(outDir)) {
      throw error;
    } else {
      console.log(error);
      console.log(`${name} Docs generation failed, using cached version.`);
    }
  }
}

// Invoke run() only if executed directly i.e. `node ./scripts/e2e`
if (require.main === module) {
  run().then(() => {
    // do nothing
  })
  .catch(err => {
    console.log(err);
    // fail with non-zero status code
    process.exit(1);
  });
}
