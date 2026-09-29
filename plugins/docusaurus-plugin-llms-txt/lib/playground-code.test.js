import { describe, expect, it } from 'vitest';

import playground from './playground-code.js';

const { readCodeBlock, readFrameworkFiles, readImports, readPlaygroundCode, renderPlaygroundCode } = playground;

/** Trimmed from static/usage/v9/button/basic/index.mdx. */
const INDEX_MDX = `import Playground from '@site/src/components/global/Playground';

import javascript from './javascript.md';
import react from './react.md';
import vue from './vue.md';

import angular_example_component_html from './angular/example_component_html.md';
import angular_example_component_ts from './angular/example_component_ts.md';

<Playground
  version="9"
  code={{
    javascript,
    react,
    vue,
    angular: {
      files: {
        'src/app/example.component.html': angular_example_component_html,
        'src/app/example.component.ts': angular_example_component_ts,
      },
    },
  }}
  src="usage/v9/button/basic/demo.html"
/>`;

const FILES = {
  'usage/index.mdx': INDEX_MDX,
  'usage/javascript.md': '```html\n<ion-button>Default</ion-button>\n```',
  'usage/react.md': '```tsx\nexport default Example;\n```',
  'usage/vue.md': '```html\n<template />\n```',
  'usage/angular/example_component_html.md': '```html\n<ion-button />\n```',
  'usage/angular/example_component_ts.md': '```ts\nexport class ExampleComponent {}\n```',
};

const readFile = (file) => {
  const key = file.replace(/\\/g, '/').replace('./', '');
  if (!(key in FILES)) {
    throw new Error(`missing ${key}`);
  }
  return FILES[key];
};

describe('readImports', () => {
  it('maps local names to their markdown files', () => {
    const imports = readImports(INDEX_MDX);

    expect(imports.get('react')).toBe('./react.md');
    expect(imports.get('angular_example_component_ts')).toBe('./angular/example_component_ts.md');
    expect(imports.has('Playground')).toBe(false);
  });
});

describe('readFrameworkFiles', () => {
  const codeBlock = readCodeBlock(INDEX_MDX);

  it('treats a shorthand entry as one unnamed file', () => {
    expect(readFrameworkFiles(codeBlock, 'react')).toEqual([{ name: null, importName: 'react' }]);
  });

  it('keeps the editor paths of a multi-file entry, in order', () => {
    expect(readFrameworkFiles(codeBlock, 'angular')).toEqual([
      { name: 'src/app/example.component.html', importName: 'angular_example_component_html' },
      { name: 'src/app/example.component.ts', importName: 'angular_example_component_ts' },
    ]);
  });

  it('reads a single file whose local name differs from its key', () => {
    const block = readCodeBlock("<Playground code={{ vue: vueBasic, react: { 'main.tsx': reactMain } }} />");

    expect(readFrameworkFiles(block, 'vue')).toEqual([{ name: null, importName: 'vueBasic' }]);
    expect(readFrameworkFiles(block, 'react')).toEqual([{ name: 'main.tsx', importName: 'reactMain' }]);
  });

  it('returns nothing for a framework the example does not cover', () => {
    expect(readFrameworkFiles(readCodeBlock('<Playground code={{ vue }} />'), 'react')).toEqual([]);
  });
});

describe('readPlaygroundCode', () => {
  it('reads every framework in playground tab order', () => {
    const entries = readPlaygroundCode('usage', { readFile });

    expect(entries.map((entry) => entry.label)).toEqual(['JavaScript', 'Angular', 'React', 'Vue']);
    expect(entries[1].files).toHaveLength(2);
    expect(entries[1].files[0].name).toBe('src/app/example.component.html');
  });

  it('drops a framework whose snippet cannot be read rather than failing the page', () => {
    const entries = readPlaygroundCode('usage', {
      readFile: (file) => {
        if (file.includes('react.md')) {
          throw new Error('gone');
        }
        return readFile(file);
      },
    });

    expect(entries.map((entry) => entry.label)).toEqual(['JavaScript', 'Angular', 'Vue']);
  });

  it('returns nothing when the folder has no index.mdx', () => {
    expect(readPlaygroundCode('nowhere', { readFile })).toEqual([]);
  });
});

describe('renderPlaygroundCode', () => {
  it('labels each framework and names multi-file snippets', () => {
    const rendered = renderPlaygroundCode(readPlaygroundCode('usage', { readFile }));

    expect(rendered).toContain('**JavaScript**\n\n```html\n<ion-button>Default</ion-button>\n```');
    expect(rendered).toContain('**Angular**\n\n`src/app/example.component.html`');
  });

  it('renders nothing for an example with no resolvable code', () => {
    expect(renderPlaygroundCode([])).toBe('');
  });
});
