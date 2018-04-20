import { generate  as apiDocs } from './api';
import { generate  as cliDocs } from './cli';
import { generate  as nativeDocs } from './native';
import * as utils from './utils';

// the main task of the API documentation generation process
async function run() {
  utils.vlog('Starting CLI CI task');
  if (!(await utils.preCheck())) {
    console.error('Docs Precheck Failure. Check configs and readme.');
    return;
  } else {
    utils.vlog('Precheck complete');
  }

  await apiDocs();
  await cliDocs();
  // await nativeDocs();
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
