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

  Object.keys(await npm.getCLIDocs()).forEach(version => {
    const markdown = docgen.getVersionMarkup(version);
    console.log(markdown);
  });


  const endTime = new Date().getTime();
  console.log(`CLI Docs copied in ${endTime - startTime}ms`);
}

