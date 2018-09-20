import { createArchive, uploadToS3, vlog } from '../utils';

export default async function deploy(task) {
  vlog('zipping files');
  const zipPath = await createArchive('storage', ['content/building/storage.md']);
  await uploadToS3(zipPath);
}
