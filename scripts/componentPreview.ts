import { existsSync, readFileSync, readdirSync, writeFileSync } from 'fs';
import { join } from 'path';
import { COMPONENT_PREVIEW_DIR, COMPONENT_PREVIEW_DOCS_DIR, COMPONENT_PREVIEW_REPO_URL} from './config';
import { ensureLatestMaster } from './git';
import { build, install } from './npm';
import { copyDirectoryTo, execp, listDirs, vlog } from './utils';

const frontmatter =
`---
title: Components
previewUrl: /docs/content/component-preview-app/docs-www
previewSource: https://github.com/ionic-team/component-preview/tree/master/src/components
hideTOC: true
---

<component-preview></component-preview>`;


// the main task of the API documentation generation process
export async function generate(task) {
  const startTime = new Date().getTime();

  task.output = 'Updating...';
  await ensureLatestMaster(COMPONENT_PREVIEW_DIR, COMPONENT_PREVIEW_REPO_URL);

  vlog('installing and building');
  task.output = 'NPM Installing';
  await install(COMPONENT_PREVIEW_DIR);

  task.output = 'NPM Building...';
  await build(COMPONENT_PREVIEW_DIR);

  task.output = 'Copying app...';
  copyDirectoryTo(
    join(COMPONENT_PREVIEW_DIR, 'docs-www'),
    COMPONENT_PREVIEW_DOCS_DIR
  );

  task.output = 'Generating Page...';
  const markdown = await listDirs(join(COMPONENT_PREVIEW_DIR, 'src/components'))
    .filter(component => existsSync(docPath(component)))
    .reduce((accumulator, component) =>
      `${accumulator}\n\n${readFileSync(docPath(component)).toString('utf8')}`,
    '');

  writeFileSync(join('src/content', 'components.md'), frontmatter + markdown);

  const endTime = new Date().getTime();
  task.output = `Component Preview copied in ${endTime - startTime}ms`;
}

function docPath(component) {
  return join(COMPONENT_PREVIEW_DIR,
    `src/components/${component}/${component}.md`);
}
