import {
  existsSync,
  mkdirSync,
  readFileSync,
  writeFileSync
} from 'fs';
import inquirer from 'inquirer';
import { FRAMEWORK_LOCALIZED } from './config';

const envFile = '.env';

let env = readFileSync(envFile).toString('utf8');

async function run() {
  env = removeEntry(env, 'FRAMEWORK_LOCALIZED');
  env = removeEntry(env, 'FRAMEWORK_DIR');

  // console.log(process.env.FRAMEWORK_LOCALIZED);
  if (FRAMEWORK_LOCALIZED) {
    await delocalize();
  } else {
    await localize();
  }
}

async function delocalize() {
  console.log('Framework alread localized, delocalizing...');
  await writeFileSync(envFile, env);
  console.log('Complete...');
}

async function localize() {
  const answers = await inquirer.prompt([
    // {
    //   type: 'list',
    //   name: 'section',
    //   message: 'What section do you want to localize',
    //   choices: ['framework', 'cli', 'components', 'native', 'storage']
    // },
    {
      type: 'input',
      name: 'path',
      message: 'Relative or absolute path to existing project: '
    },
  ]);

  if (!existsSync(envFile)) {
    mkdirSync(envFile);
  }

  env += '\rFRAMEWORK_LOCALIZED=true';
  env += `\rFRAMEWORK_DIR=${answers.path}`;
  writeFileSync(envFile, env);
  console.log(`\`npm run docgen framework\` will now use ${answers.path}`);
}

function removeEntry(file, str) {
  return file.split('\n').filter(line => {
    return line.indexOf(str) === -1;
  }).join('\n');
}


run();
