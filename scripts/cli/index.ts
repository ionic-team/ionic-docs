import { existsSync, mkdirSync, writeFileSync } from 'fs';
import { join } from 'path';
import * as config from '../config';
import * as docgen from './template';
import * as git from '../git';
import * as npm from '../npm';
import * as utils from '../utils';

const menuPath = join('src/components/docs-menu/cli-menu.ts');
const menuHeader = '/* tslint:disable */\n\nexport const cliMenu = ';
const menuFooter = ';\n';

// the main task of the API documentation generation process
export async function generate(task) {
  const startTime = new Date().getTime();

  task.output = 'Updating...';
  await git.ensureLatestMaster(
    config.CLI_DIR,
    config.CLI_REPO_URL
  );

  if (!existsSync(config.CLI_DOCS_DIR)) {
    mkdirSync(config.CLI_DOCS_DIR);
  }

  task.output = 'NPM Installing & Building...';
  const docs = await npm.getCLIDocs();
  docs['angular'].commands.forEach(command => {
    task.output = `Processing ${command.name}...`;

    // if (command.name === 'ionic cordova run') {
    //   console.log( command );
    // }

    writeFileSync(
      join(
        config.CLI_DOCS_DIR,
        `${urlName(command.name)}.md`
      ),
      docgen.getVersionMarkup(command)
    );
  });

  task.output = 'Generating Nav...';
  generateNav(docs['angular'].commands);

  const endTime = new Date().getTime();
  task.output = `CLI Docs copied in ${endTime - startTime}ms`;
}

function urlName(name) {
 return name.replace(/ /g, '-').replace('ionic-', '');
}

function prettyName(name) {
  return name.replace('ionic ', '').replace(/(^| )(\w)/g, s => s.toUpperCase());
 }

// Upsert the given version's navigation
function generateNav(commands) {
  const commmandList = {'Overview': '/docs/cli/overview'};
  for (let i = 0; i < commands.length; i++) {
    commmandList[prettyName(commands[i].name)] = `/docs/cli/${urlName(commands[i].name)}`;
  }

  writeFileSync(
    menuPath,
    `${menuHeader}${JSON.stringify(commmandList, null, '  ')}${menuFooter}`
  );
}
