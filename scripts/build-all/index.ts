import Listr from 'listr';
import buildPages from '../build-pages';
import buildMenus from '../build-menus';
import buildData from '../build-data';

const tasks = new Listr({ collapse: false });

tasks.add({
  title: 'Pages',
  task: () => buildPages
});

tasks.add({
  title: 'Menus',
  task: () => buildMenus
});

tasks.add({
  title: 'Data',
  task: () => buildData
});

tasks.run().catch(console.error);
