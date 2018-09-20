import { CLI_DOCS_DIR, CLI_MENU_PATH } from '../config';
import { createArchive, uploadToS3 } from '../utils';

export default async function deploy(task) {
  task.output = 'Creating Archive';
  const zipPath = await createArchive('cli', [
    CLI_DOCS_DIR,
    CLI_MENU_PATH
  ]);
  task.output = 'Uploading Archive to S3';
  await uploadToS3(zipPath);
}
