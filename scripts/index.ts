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

  try {
    await apiDocs();
  } catch (error) {
    if (!fs.existsSync(API_DOCS_DIR)) {
      throw error;
    } else {
      console.log(error);
      console.log('Using cached API Docs because the build currently fails.');
    }
  }

  try {
    await cliDocs();
  } catch (error) {
    if (!fs.existsSync(join(CLI_DOCS_DIR, 'commands.md'))) {
      throw error;
    } else {
      console.log(error);
      console.log('Using cached CLI Docs because the build currently fails.');
    }
  }

  try {
    await nativeDocs();
  } catch (error) {
    if (!fs.existsSync(NATIVE_DOCS_DIR)) {
      throw error;
    } else {
      console.log(error);
      console.log('Using cached Native Docs because the build currently fails.');
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
