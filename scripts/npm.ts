import { readFileSync } from 'fs';
import { join } from 'path';

import { CLI_DIR, FRAMEWORK_DIR } from './config';
import { execp, vlog } from './utils';

// Generic helpers
export async function install(dir?) {
  await execp('npm i', dir ? { cwd: dir } : null);
}

export async function build(dir?) {
  await execp('npm run build', dir ? { cwd: dir } : null);
}

export async function run(command: string, dir?) {
  await execp(`npm run ${command}`, dir ? { cwd: dir } : null);
}

// Section specific npm related commands
export async function installFramework() {
  vlog('npm installing monorepo');
  await install(FRAMEWORK_DIR);
  vlog('npm installing core');
  const coreDir = join(FRAMEWORK_DIR, 'core');
  await install(coreDir);
  return execp(`npm rebuild node-sass`, { cwd: coreDir });
}

export async function getCLIDocs() {
  vlog('npm installing');
  await install(CLI_DIR);
  vlog('running bootstrap');
  await run('bootstrap', CLI_DIR);
  vlog('building CLI docs');
  await execp(`npm run docs`, {
    cwd: CLI_DIR,
    env: {
      ...process.env,
      FORCE_COLOR: '1'
    }
  });

  return {
    // 'ionic1': JSON.parse(
    //   readFileSync(`${config.CLI_DIR}/docs/ionic1.json`, `utf8`)
    // ),
    // 'ionic-angular': JSON.parse(
    //   readFileSync(`${config.CLI_DIR}/docs/ionic-angular.json`, `utf8`)
    // ),
    'angular': JSON.parse(
      readFileSync(`${CLI_DIR}/docs/angular.json`, `utf8`)
    )
  };
}
