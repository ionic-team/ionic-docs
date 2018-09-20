import { COMPONENT_PREVIEW_DOCS_DIR } from '../config';
import { createArchive, uploadToS3, vlog } from '../utils';

export default async function deploy(task) {
  task.output = 'Creating Archive';
  const zipPath = await createArchive('components', [
    COMPONENT_PREVIEW_DOCS_DIR
  ]);
  task.output = 'Uploading Archive to S3';
  await uploadToS3(zipPath);
}
