import * as fs from 'fs';
import * as path from 'path';
import * as config from './config';
import * as docgen from './cliDocgen';
import * as git from './git';
import * as npm from './npm';
import * as utils from './utils';

const menuPath = 'src/components/docs-menu/cli-menu.ts';
const menuHeader = '/* tslint:disable */\n\nexport const cliMenu = ';
const menuFooter = ';\n';

// the main task of the API documentation generation process
export async function generate() {
  const startTime = new Date().getTime();

  await git.ensureLatestMaster(
    config.CLI_DIR,
    config.CLI_REPO_URL
  );

  if (!fs.existsSync(config.CLI_DOCS_DIR)) {
    fs.mkdirSync(config.CLI_DOCS_DIR);
  }

  const docs = await npm.getCLIDocs();
  docs['angular'].commands.forEach(command => {
    fs.writeFileSync(
      path.join(
        config.CLI_DOCS_DIR,
        `${urlName(command.name)}.md`
      ),
      docgen.getVersionMarkup(command)
    );
  });

  generateNav(docs['angular'].commands);

  const endTime = new Date().getTime();
  console.log(`CLI Docs copied in ${endTime - startTime}ms`);
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

  fs.writeFileSync(
    menuPath,
    `${menuHeader}${JSON.stringify(commmandList, null, '  ')}${menuFooter}`
  );
}
