#!/usr/bin/env node

import { config as dotenv } from 'dotenv';
dotenv({ silent: true });
import { existsSync } from 'fs';
import isCI from 'is-ci';
import Listr from 'listr';
import listrVerboseRenderer from 'listr-verbose-renderer';

import apiDocs from './api/generate';
import cliDocs from './cli/generate';
import componentPreview from './component-preview/generate';
import nativeDocs from './native/generate';
import storageDocs from './storage/generate';
import storageDeploy from './storage/deploy';
import { preCheck, vlog } from './utils';
import { AWS_ACCESS_KEY_ID, setVerbose } from './config';

const program = require('commander');

// the main task of the API documentation generation process

const allTasks = [
  {
    id: 'framework',
    title: 'API Docs',
    genFunc: apiDocs
  },
  {
    id: 'cli',
    title: 'CLI Docs',
    genFunc: cliDocs
  },
  {
    id: 'component-preview',
    title: 'Component Preview',
    genFunc: componentPreview
  },
  {
    id: 'native',
    title: 'Native Docs',
    genFunc: nativeDocs,
    deployFunc: null
  },
  {
    id: 'storage',
    title: 'Storage Docs',
    genFunc: storageDocs,
    deployFunc: storageDeploy
  }
].reduce((map, obj) => {
  // Listr needs this to be an array but we're making it an object for now to
  // make single task runs simpler
  map[obj.id] = {
    title: obj.title,
    task: () => {
      return new Listr([
        {
          title: `Generating ${obj.title}`,
          task: (ctx, task) => obj.genFunc(task)
          .catch((e) => {
            ctx[obj.id] = false;
            throw(e);
          })
        },
        {
          title: `Deploying ${obj.title}`,
          enabled: ctx => obj.deployFunc && AWS_ACCESS_KEY_ID &&ctx[obj.id] !== false,
          task: (ctx, task) => {obj.deployFunc(task); }
        }
      ]);
    }
  };
  return map;
}, {});

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

  const listrOpts: any = { exitOnError: false };
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
      title: 'Main Tasks',
      task: () => {
        return new Listr(chosenTasks, { concurrent: true });
      }
    }
  ], listrOpts);

  queue.run().catch(err => {
    vlog(err);
  });
}
