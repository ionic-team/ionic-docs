import { existsSync, mkdirSync, writeFileSync } from 'fs';
import { join } from 'path';
import { CLI_DIR, CLI_DOCS_DIR, CLI_MENU_PATH, CLI_REPO_URL } from '../config';
import render from './template';
import { ensureLatestMaster } from '../git';
import { getCLIDocs } from '../npm';

const menuHeader = '/* tslint:disable */\n\nexport const cliMenu = ';
const menuFooter = ';\n';

// the main task of the API documentation generation process
export default async function generate(task) {
  const startTime = new Date().getTime();

  task.output = 'Updating...';
  await ensureLatestMaster(CLI_DIR, CLI_REPO_URL);

  if (!existsSync(CLI_DOCS_DIR)) {
    mkdirSync(CLI_DOCS_DIR);
  }

  task.output = 'NPM Installing & Building...';
  const docs = await getCLIDocs();
  docs['angular'].commands.forEach(command => {
    task.output = `Processing ${command.name}...`;

    // if (command.name === 'ionic cordova run') {
    //   console.log( command );
    // }

    writeFileSync(
      join(CLI_DOCS_DIR, `${urlName(command.name)}.md`),
      render(command)
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
  const commmandList = { 'Overview': '/docs/cli/overview' };
  for (let i = 0; i < commands.length; i++) {
    commmandList[prettyName(commands[i].name)] = `/docs/cli/${urlName(commands[i].name)}`;
  }

  writeFileSync(
    CLI_MENU_PATH,
    `${menuHeader}${JSON.stringify(commmandList, null, '  ')}${menuFooter}`
  );
}
