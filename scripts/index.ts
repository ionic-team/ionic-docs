import * as fs from 'fs';
import Listr from 'listr';
import { generate  as apiDocs } from './api';
import { generate  as cliDocs } from './cli';
import { generate  as nativeDocs } from './native';
import { generate as storageDocs } from './storage';
import * as utils from './utils';
import {
  API_DOCS_DIR,
  CLI_DOCS_DIR,
  NATIVE_DOCS_DIR,
  STORAGE_DOCS_DIR
} from './config';

// the main task of the API documentation generation process
const tasks = new Listr([
  {
    title: 'Precheck',
    task: () => utils.preCheck()
  },
  {
    title: 'Generating',
    task: () => {
      return new Listr([
        {
          title: 'API Docs',
          task: (ctx, task) => tryToRun(apiDocs, task, 'API', API_DOCS_DIR)
        },
        {
          title: 'CLI Docs',
          task: (ctx, task) => tryToRun(cliDocs, task, 'CLI', CLI_DOCS_DIR)
        },
        {
          title: 'Native Docs',
          task: (ctx, task) => tryToRun(nativeDocs, task, 'Native', NATIVE_DOCS_DIR)
        },
        {
          title: 'Storage Docs',
          task: (ctx, task) => tryToRun(nativeDocs, task, 'Storage', STORAGE_DOCS_DIR)
        }
      ], {concurrent: true});
    }
  }
]);

// for debugging purposes
async function run() {
  utils.vlog('Starting CLI CI task');
  if (!(await utils.preCheck())) {
    console.error('Docs Precheck Failure. Check configs and readme.');
    return;
  } else {
    utils.vlog('Precheck complete');
  }

  const taskPolyfill = {
    set output(str) {
      console.log(str);
    }
  };

  await tryToRun(apiDocs, taskPolyfill, 'API', API_DOCS_DIR);
  await tryToRun(cliDocs, taskPolyfill, 'CLI', CLI_DOCS_DIR);
  await tryToRun(nativeDocs, taskPolyfill, 'Native', NATIVE_DOCS_DIR);
  await tryToRun(storageDocs, taskPolyfill, 'Storage', STORAGE_DOCS_DIR);
}

async function tryToRun(func: (task) => void, task, name: string, outDir?: string) {
  try {
    // console.log(`Generating ${name} Docs`);
    await func(task);
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
  tasks.run()
  // run()
  .catch(err => {
    console.log(err);
    // fail with non-zero status code
    process.exit(1);
  });
}
