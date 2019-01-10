import Listr from 'listr';
import buildDocuments from '../build-documents';
import buildMenus from '../build-menus';

const tasks = new Listr({ collapse: false });

tasks.add({
  title: 'Documents',
  task: () => buildDocuments
});

tasks.add({
  title: 'Menus',
  task: () => buildMenus
});

tasks.run().catch(console.error);
