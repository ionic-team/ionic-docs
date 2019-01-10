import Listr from 'listr';
import buildPages from '../build-pages';
import buildMenus from '../build-menus';

const tasks = new Listr({ collapse: false });

tasks.add({
  title: 'Pages',
  task: () => buildPages
});

tasks.add({
  title: 'Menus',
  task: () => buildMenus
});

tasks.run().catch(console.error);
