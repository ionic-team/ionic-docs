import { resolve } from 'path';
import { buildStaticPage } from '../build-pages';
import chokidar from 'chokidar';
import ora from 'ora';

const PAGES_GLOB = `${resolve(__dirname, '../../src/pages')}/**/*.md`;
const watcher = chokidar.watch(PAGES_GLOB);
const spinner = ora('Watching pages').start();

watcher.on('change', handleChange);

async function handleChange(path) {
  try {
    spinner.text = `Rebuilding ${path}`;
    await buildStaticPage(path);
    spinner.succeed(`Rebuilt ${path}`);
    spinner.start('Watching pages');
  } catch (err) {
    spinner.fail(`Failed to rebuild ${path}`);
    console.error(err.message);
  }
}
