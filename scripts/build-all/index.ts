import Listr from 'listr';
import buildPages from '../build-pages';
import buildMenus from '../build-menus';
import buildData from '../build-data';

const tasks = new Listr({ collapse: false });

tasks.add({
  title: 'Data',
  task: () => buildData
});

tasks.add({
  title: 'Pages',
  task: () => buildPages
});

tasks.add({
  title: 'Menus',
  task: () => buildMenus
});

tasks.run().catch(err => {
  console.error(err);
  process.exit(1);
});
