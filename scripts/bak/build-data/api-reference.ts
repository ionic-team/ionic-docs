import { components } from '@ionic/docs/core.json';
import { outputJson } from 'fs-extra';
import { resolve } from 'path';

const OUTPUT_PATH = resolve(
  __dirname,
  '../../src/components/page/data/api-reference.json'
);

const reference = components.map((component: any) => [
  component.tag,
  `/docs/api/${component.tag.slice(4)}`
]);

export default {
  title: 'Build API reference data',
  task: () => outputJson(OUTPUT_PATH, reference, { spaces: 2 })
};
