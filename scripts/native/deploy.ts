import { NATIVE_DOCS_DIR, NATIVE_MENU_PATH } from '../config';
import { createArchive, uploadToS3, vlog } from '../utils';

export default async function deploy(task) {
  task.output = 'Creating Archive';
  const zipPath = await createArchive('native', [
    NATIVE_DOCS_DIR,
    NATIVE_MENU_PATH
  ]);
  task.output = 'Uploading Archive to S3';
  await uploadToS3(zipPath);
}
