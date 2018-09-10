#!/usr/bin/env node

import { config as dotenv } from 'dotenv';
dotenv({ silent: true });
import { existsSync } from 'fs';
import Listr from 'listr';
import { generate as apiDocs } from './api';
import { generate as cliDocs } from './cli';
import { generate as componentPreview } from './component-preview';
import { generate as nativeDocs } from './native';
import { generate as storageDocs } from './storage';
import { preCheck, tryToRun, vlog } from './utils';
import {
  API_DOCS_DIR,
  CLI_DOCS_DIR,
  COMPONENT_PREVIEW_DIR,
  NATIVE_DOCS_DIR,
  STORAGE_DOCS_DIR,
  setVerbose
} from './config';

const program = require('commander');

// the main task of the API documentation generation process
const tasks = new Listr([
  {
    title: 'Precheck',
    task: () => preCheck()
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
          title: 'Component Preview',
          task: (ctx, task) => tryToRun(componentPreview, task, 'Component Preview', COMPONENT_PREVIEW_DIR)
        },
        {
          title: 'Native Docs',
          task: (ctx, task) => tryToRun(nativeDocs, task, 'Native', NATIVE_DOCS_DIR)
        },
        {
          title: 'Storage Docs',
          task: (ctx, task) => tryToRun(storageDocs, task, 'Storage', STORAGE_DOCS_DIR)
        }
      ], { concurrent: true });
    }
  }
]);

// for debugging purposes
async function singleSectionRun(section) {
  setVerbose(true);

  vlog(`Starting individual docgen task: ${section}`);
  if (!(await preCheck())) {
    console.error('Docs Precheck Failure. Check configs and readme.');
    return;
  } else {
    vlog('Precheck complete');
  }

  const taskPolyfill = {
    set output(str) {
      console.log(str);
    }
  };

  switch (section) {
    case 'cli':
      await tryToRun(cliDocs, taskPolyfill, 'CLI', CLI_DOCS_DIR).catch();
      break;
    case 'components':
      await tryToRun(componentPreview, taskPolyfill, 'Component', COMPONENT_PREVIEW_DIR).catch();
      break;
    case 'native':
      await tryToRun(nativeDocs, taskPolyfill, 'Native', NATIVE_DOCS_DIR).catch();
      break;
    case 'storage':
      await tryToRun(storageDocs, taskPolyfill, 'Storage', STORAGE_DOCS_DIR).catch();
      break;
    default:
      // framework is default
      await tryToRun(apiDocs, taskPolyfill, 'API', API_DOCS_DIR).catch();
  }
}

// Invoke run() only if executed directly i.e. `node ./scripts/e2e`
if (require.main === module) {
  program
    .version('0.1.0')
    .option(
      '-s, --section [name]',
      'Individual section to generate: framework, cli, component, native, storage'
    ).parse(process.argv);

  if (program.section && program.section !== 'all') {
    singleSectionRun(program.section);
  } else {
    tasks.run();
  }
}

function exit(err) {
  console.log(err);
  process.exit(1);
}
