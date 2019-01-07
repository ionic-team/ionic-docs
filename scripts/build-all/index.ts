import Listr from 'listr';
import buildDocuments from '../build-documents';
import buildMenuData from '../build-menu-data';

const tasks = new Listr({ collapse: false });

tasks.add({
  title: 'Documents',
  task: () => buildDocuments
});

tasks.add({
  title: 'Menu data',
  task: () => buildMenuData
});

tasks.run().catch(console.error);
