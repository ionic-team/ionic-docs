import { execp } from './utils';
import { COMPONENT_PREVIEW_DIR } from './config';

export async function generate(task) {

  task.output = 'NPM Installing...';
  await execp('npm install', { cwd: COMPONENT_PREVIEW_DIR });

  task.output = 'Building App..';
  await execp('npm run build', { cwd: COMPONENT_PREVIEW_DIR });
}
