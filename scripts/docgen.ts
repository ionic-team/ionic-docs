#!/usr/bin/env node

import { config as dotenv } from 'dotenv';
dotenv({ silent: true });
import { existsSync } from 'fs';
import isCI from 'is-ci';
import Listr from 'listr';
import listrVerboseRenderer from 'listr-verbose-renderer';

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
const allTasks = {
  'framework': {
    title: 'API Docs',
    task: (ctx, task) => tryToRun(apiDocs, task, 'API', API_DOCS_DIR)
  },
  'cli': {
    title: 'CLI Docs',
    task: (ctx, task) => tryToRun(cliDocs, task, 'CLI', CLI_DOCS_DIR)
  },
  'component-preview': {
    title: 'Component Preview',
    task: (ctx, task) => tryToRun(componentPreview, task, 'Component Preview', COMPONENT_PREVIEW_DIR)
  },
  'native': {
    title: 'Native Docs',
    task: (ctx, task) => tryToRun(nativeDocs, task, 'Native', NATIVE_DOCS_DIR)
  },
  'storage': {
    title: 'Storage Docs',
    task: (ctx, task) => tryToRun(storageDocs, task, 'Storage', STORAGE_DOCS_DIR)
  }
};

// Invoke run() only if executed directly i.e. `node ./scripts/e2e`
if (require.main === module) {
  program
    .version('0.1.0')
    .option(
      '-s, --section [name]',
      'Individual section to generate: framework, cli, component, native, storage'
    )
    .option(
      '-v, --verbose',
      'Verbose output'
    ).parse(process.argv);

  const singleSectionRun = program.section && program.section !== 'all';

  const listrOpts: any = {};
  if (isCI || program.verbose || singleSectionRun) {
    listrOpts.renderer = listrVerboseRenderer;
    setVerbose(true);
  }

  const chosenTasks = singleSectionRun ?
    [allTasks[program.section]] : Object.values(allTasks);

  const queue = new Listr([
    {
      title: 'Precheck',
      task: () => preCheck()
    },
    {
      title: 'Generating',
      task: () => {
        return new Listr(chosenTasks, { concurrent: true });
      }
    }
  ], listrOpts);

  queue.run();
}
