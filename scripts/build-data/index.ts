import { resolve } from 'path';
import { components } from '@ionic/docs/core.json';
import Listr from 'listr';
import fs from 'fs-extra';

const tasks = new Listr([
  {
    title: 'Build API reference data',
    task: () => fs.outputJson(
      resolve(__dirname, '../../src/components/page/data/api-reference.json'),
      components.map(component => [
        component.tag,
        `/docs/api/${component.tag.slice(4)}`
      ]),
      { spaces: 2 }
    )
  }
]);

export default tasks;

if (!module.parent) {
  tasks.run().catch(console.error);
}
