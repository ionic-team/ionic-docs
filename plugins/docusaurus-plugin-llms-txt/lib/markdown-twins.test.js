import { describe, expect, it } from 'vitest';

import twins from './markdown-twins.js';

const {
  buildTwin,
  closePunctuationGaps,
  labelTabs,
  mapProseLines,
  markPlaygrounds,
  parseRows,
  readUsageDirs,
  renderTable,
  replaceTables,
} = twins;

/** The shape Docusaurus emits: minified, with the optional end tags left out. */
const HEADERLESS_TABLE =
  '<div class=table-wrapper><table>' +
  '<tr><td><strong>Description</strong><td>The type of button.' +
  '<tr><td><strong>Attribute</strong><td><code>button-type</code>' +
  '<tr><td><strong>Type</strong><td><code>string</code>' +
  '</table></div>';

const HEADER_TABLE =
  '<table><thead><tr><th>Config<th>Type<tbody>' +
  '<tr><td><code>alertEnter</code><td><code>AnimationBuilder</code>' +
  '<tr><td><code>alertLeave</code><td><code>AnimationBuilder</code>' +
  '</table>';

const page = (body) => `<html><body><main><article><div class="markdown">${body}</div></article></main></body></html>`;

describe('parseRows', () => {
  it('separates rows even though the end tags are missing', () => {
    const rows = parseRows(HEADERLESS_TABLE.replace(/^.*?<table>|<\/table>.*$/g, ''));

    expect(rows).toHaveLength(3);
    expect(rows.every((row) => row.cells.length === 2)).toBe(true);
    expect(rows[0].isHeader).toBe(false);
  });

  it('marks the header row', () => {
    const rows = parseRows(HEADER_TABLE.replace(/^<table>|<\/table>$/g, ''));

    expect(rows.map((row) => row.isHeader)).toEqual([true, false, false]);
    expect(rows[0].cells).toEqual(['Config', 'Type']);
  });
});

describe('renderTable', () => {
  it('turns a headerless pair table into labeled lines', () => {
    const rendered = renderTable([
      { isHeader: false, cells: ['**Description**', 'The type of button.'] },
      { isHeader: false, cells: ['**Type**', '`string`'] },
    ]);

    expect(rendered).toBe('**Description**: The type of button.\n\n**Type**: `string`');
  });

  it('restores a real pipe in a type union, since there is no table to escape for', () => {
    const rendered = renderTable([{ isHeader: false, cells: ['**Type**', '`"ios" \uFF5C "md"`'] }]);

    expect(rendered).toBe('**Type**: `"ios" | "md"`');
  });

  it('gives a header table the separator row markdown needs', () => {
    const rendered = renderTable([
      { isHeader: true, cells: ['Config', 'Type'] },
      { isHeader: false, cells: ['`alertEnter`', '`AnimationBuilder`'] },
    ]);

    expect(rendered).toBe('| Config | Type |\n| --- | --- |\n| `alertEnter` | `AnimationBuilder` |');
  });

  it('falls back to a blank header when a headerless table is not a pair table', () => {
    const rendered = renderTable([{ isHeader: false, cells: ['a', 'b', 'c'] }]);

    expect(rendered).toBe('|  |  |  |\n| --- | --- | --- |\n| a | b | c |');
  });
});

describe('replaceTables', () => {
  it('swaps each table for a placeholder and converts its cells', () => {
    const { html, tables } = replaceTables(HEADERLESS_TABLE);

    expect(html).toContain('@@IONIC_TABLE_0@@');
    expect(html).not.toContain('<table>');
    expect(tables[0]).toBe(
      '**Description**: The type of button.\n\n**Attribute**: `button-type`\n\n**Type**: `string`'
    );
  });

  it('escapes a pipe inside a cell so it cannot break the row', () => {
    const { tables } = replaceTables('<table><thead><tr><th>A<tbody><tr><td>x | y</table>');

    expect(tables[0]).toContain('x \\| y');
  });
});

describe('markPlaygrounds', () => {
  it('marks each container without having to match its closing tag', () => {
    const { html, count } = markPlaygrounds(
      '<div class="playground__container ">a</div><div class="playground__container playground__container--has-console">b</div>'
    );

    expect(count).toBe(2);
    expect(html.indexOf('@@IONIC_PLAYGROUND_0@@')).toBeLessThan(html.indexOf('@@IONIC_PLAYGROUND_1@@'));
  });
});

describe('readUsageDirs', () => {
  it('reads usage folders in render order, including camelCase paths', () => {
    const source = [
      "import Trigger from '@site/static/usage/v9/alert/presenting/trigger/index.mdx';",
      "import IsOpen from '@site/static/usage/v9/alert/presenting/isOpen/index.mdx';",
      "import Other from '@theme/Tabs';",
      '',
      '<Trigger />',
      '<IsOpen />',
    ].join('\n');

    expect(readUsageDirs(source)).toEqual(['v9/alert/presenting/trigger', 'v9/alert/presenting/isOpen']);
  });

  it('follows the order the playgrounds render, not the order they are imported', () => {
    const source = [
      "import Later from '@site/static/usage/v9/datetime/format-options/index.mdx';",
      "import Earlier from '@site/static/usage/v9/datetime/localization/custom-locale/index.mdx';",
      '',
      '<Earlier />',
      '<Later />',
    ].join('\n');

    expect(readUsageDirs(source)).toEqual(['v9/datetime/localization/custom-locale', 'v9/datetime/format-options']);
  });

  it('matches a self-closing tag that carries props', () => {
    const source = [
      "import Nav from '@site/static/usage/v9/react/navigation/index.mdx';",
      '',
      '<Nav defaultFramework="react" />',
    ].join('\n');

    expect(readUsageDirs(source)).toEqual(['v9/react/navigation']);
  });

  it('returns nothing when the page imports no usage folders', () => {
    expect(readUsageDirs("import Tabs from '@theme/Tabs';\n\n<Tabs />")).toEqual([]);
  });
});

describe('mapProseLines', () => {
  const shout = (line) => line.toUpperCase();

  it('leaves a fenced block alone', () => {
    expect(mapProseLines('a\n```\nb\n```\nc', shout)).toBe('A\n```\nb\n```\nC');
  });

  it('does not let a nested fence flip which lines count as code', () => {
    const input = 'a\n````md\ninner:\n```ts\nb\n```\n````\nc';

    expect(mapProseLines(input, shout)).toBe('a\n````md\ninner:\n```ts\nb\n```\n````\nC'.replace(/^a/, 'A'));
  });

  it('recognises a fence indented inside a list item', () => {
    expect(mapProseLines('- step\n\n    ```ts\n    b\n    ```\n\nc', shout)).toBe(
      '- STEP\n\n    ```ts\n    b\n    ```\n\nC'
    );
  });

  it('round-trips the text when the transform does nothing', () => {
    const input = 'a\n```\nb\n```\n\nc\n';

    expect(mapProseLines(input, (line) => line)).toBe(input);
  });
});

describe('closePunctuationGaps', () => {
  it('closes a gap in prose but not inside code', () => {
    const input = 'See `x` , now.\n```ts\nconst a = { x : 1 };\n```\n';

    expect(closePunctuationGaps(input)).toBe('See `x`, now.\n```ts\nconst a = { x : 1 };\n```\n');
  });
});

describe('labelTabs', () => {
  const strip = '<ul role=tablist><li role=tab>Angular<li role=tab>React</ul>';
  const panels = '<div role=tabpanel>a</div><div role=tabpanel>b</div>';

  it('moves each label into its own panel and drops the strip', () => {
    const labeled = labelTabs(`${strip}${panels}`);

    expect(labeled).not.toContain('role=tablist');
    expect(labeled.indexOf('<strong>Angular</strong>')).toBeLessThan(labeled.indexOf('<strong>React</strong>'));
  });

  it('leaves a group unlabeled, with a warning, when the counts disagree', () => {
    const warnings = [];
    const labeled = labelTabs(`${strip}${panels}<div role=tabpanel>c</div>`, (message) => warnings.push(message));

    expect(labeled).not.toContain('<strong>');
    expect(warnings).toHaveLength(1);
  });

  it('keeps two groups independent rather than sharing one queue', () => {
    const second = '<ul role=tablist><li role=tab>Vue</ul><div role=tabpanel>c</div>';
    const labeled = labelTabs(`${strip}${panels}${second}`);

    expect(labeled).toContain('<strong>Vue</strong>');
    expect(labeled).toContain('<strong>Angular</strong>');
  });
});

describe('buildTwin', () => {
  it('substitutes repaired tables back into the converted page', () => {
    const markdown = buildTwin({
      html: page(`<h1>ion-button</h1><h2>Properties</h2>${HEADERLESS_TABLE}`),
      pageUrl: 'https://ionicframework.com/docs/api/button',
      staticDir: 'static',
    });

    expect(markdown).toContain('**Description**: The type of button.');
    expect(markdown).not.toContain('@@IONIC_TABLE_');
  });

  it('splices each usage folder into the shell that renders it', () => {
    const markdown = buildTwin({
      html: page(
        '<h1>T</h1><h2>Basic</h2><div class="playground__container ">shell</div>' +
          '<h2>Expand</h2><div class="playground__container ">shell</div>'
      ),
      pageUrl: 'https://ionicframework.com/docs/api/button',
      usageDirs: ['v9/button/basic', 'v9/button/expand'],
      staticDir: 'static',
    });

    const basic = markdown.indexOf('## Basic');
    const expand = markdown.indexOf('## Expand');

    expect(markdown.indexOf('<ion-button>Default</ion-button>')).toBeGreaterThan(basic);
    expect(markdown.indexOf('<ion-button>Default</ion-button>')).toBeLessThan(expand);
    expect(markdown.indexOf('expand="block"')).toBeGreaterThan(expand);
  });

  it('leaves the code out when the playground count does not match the imports', () => {
    const warnings = [];
    const markdown = buildTwin({
      html: page('<h1>T</h1><div class="playground__container ">shell</div>'),
      pageUrl: 'https://ionicframework.com/docs/api/button',
      usageDirs: [],
      staticDir: 'static',
      onWarn: (message) => warnings.push(message),
    });

    expect(warnings).toHaveLength(1);
    expect(markdown).not.toContain('@@IONIC_PLAYGROUND_');
  });

  it('inserts cell text literally, even when it looks like a replacement pattern', () => {
    const markdown = buildTwin({
      html: page('<h1>T</h1><table><thead><tr><th>A<tbody><tr><td>costs $$5 and $& and $`'),
      pageUrl: 'https://ionicframework.com/docs/api/button',
      staticDir: 'static',
    });

    expect(markdown).toContain('costs $$5 and $& and $`');
    expect(markdown).not.toContain('@@IONIC_TABLE_');
  });

  it('drops the version badge so it cannot run into the first sentence', () => {
    const markdown = buildTwin({
      html: page(
        '<h1>T</h1><span class="theme-doc-version-badge badge badge--secondary">Version: v9</span><p>Ionic is a toolkit.</p>'
      ),
      pageUrl: 'https://ionicframework.com/docs/',
      staticDir: 'static',
    });

    expect(markdown).not.toContain('Version: v9');
    expect(markdown).toContain('Ionic is a toolkit.');
  });

  it('points a link at the target twin when the target has one', () => {
    const markdown = buildTwin({
      html: page('<h1>T</h1><p>See <a href="/docs/theming/basics">theming</a> and <a href="/docs/nope">nope</a>.</p>'),
      pageUrl: 'https://ionicframework.com/docs/api/button',
      staticDir: 'static',
      twinUrls: new Map([['/docs/theming/basics', '/docs/theming/basics.md']]),
    });

    expect(markdown).toContain('[theming](/docs/theming/basics.md)');
    expect(markdown).toContain('[nope](/docs/nope)');
  });

  it('keeps each tab panel under its own label', () => {
    const markdown = buildTwin({
      html: page(
        '<h1>T</h1><div class="tabs-container">' +
          '<ul role=tablist class=tabs><li role=tab class=tabs__item>Angular<li role=tab class=tabs__item>Angular (Standalone)</ul>' +
          '<div class=margin-top--md><div role=tabpanel><p>Use the lazy import.</p></div>' +
          '<div role=tabpanel><p>Use the standalone import.</p></div></div></div>'
      ),
      pageUrl: 'https://ionicframework.com/docs/utilities/animations',
      staticDir: 'static',
    });

    expect(markdown).toContain('**Angular**');
    expect(markdown).toContain('**Angular (Standalone)**');
    expect(markdown.indexOf('**Angular**')).toBeLessThan(markdown.indexOf('Use the lazy import.'));
  });

  it('names an admonition by its type, keeping any custom title', () => {
    const plain = buildTwin({
      html: page(
        '<h1>T</h1><div class="theme-admonition theme-admonition-info admonition_x alert alert--info">' +
          '<div class=admonitionHeading_a><span class=admonitionIcon_b><svg></svg></span>info</div>' +
          '<div class=admonitionContent_c><p>Demo only.</p></div></div>'
      ),
      pageUrl: 'https://x/y',
      staticDir: 'static',
    });
    const titled = buildTwin({
      html: page(
        '<h1>T</h1><div class="theme-admonition theme-admonition-info admonition_x alert alert--info">' +
          '<div class=admonitionHeading_a><span class=admonitionIcon_b><svg></svg></span>Breaking Changes</div>' +
          '<div class=admonitionContent_c><p>Read this.</p></div></div>'
      ),
      pageUrl: 'https://x/y',
      staticDir: 'static',
    });

    expect(plain).toContain('**Info**');
    expect(titled).toContain('**Info: Breaking Changes**');
  });

  it('keeps a same-page anchor link the converter would otherwise drop', () => {
    const markdown = buildTwin({
      html: page('<h1>T</h1><p>See <a href="#ionicconfig">IonicConfig</a>.</p><h2 id=ionicconfig>IonicConfig</h2>'),
      pageUrl: 'https://x/y',
      staticDir: 'static',
    });

    expect(markdown).toContain('[IonicConfig](#ionicconfig)');
    expect(markdown).not.toContain('@@IONIC_ANCHOR@@');
  });

  it('closes a punctuation gap that sits inside a bold run', () => {
    const markdown = buildTwin({
      html: page('<h1>T</h1><p><strong>Set the <a href="/docs/x">Package ID</a> .</strong></p>'),
      pageUrl: 'https://x/y',
      staticDir: 'static',
    });

    expect(markdown).toContain('.**');
    expect(markdown).not.toContain(') .');
  });

  it('leaves no sentinel behind when anchor HTML comes through as literal text', () => {
    const markdown = buildTwin({
      html: page('<h1>T</h1><p>See <code>&lt;a href="#latlng"&gt;LatLng&lt;/a&gt;</code>.</p>'),
      pageUrl: 'https://x/y',
      staticDir: 'static',
    });

    expect(markdown).not.toContain('@@IONIC_ANCHOR@@');
  });

  it('resolves a link written with a source extension to the target twin', () => {
    const markdown = buildTwin({
      html: page('<h1>T</h1><p><a href="/docs/native/camera.mdx">Camera</a></p>'),
      pageUrl: 'https://x/y',
      staticDir: 'static',
      twinUrls: new Map([['/docs/native/camera', '/docs/native/camera.md']]),
    });

    expect(markdown).toContain('[Camera](/docs/native/camera.md)');
  });

  it('drops a table that has a header and no rows', () => {
    const markdown = buildTwin({
      html: page('<h1>T</h1><table><thead><tr><th>Name<th>Default<tbody></table><p>After.</p>'),
      pageUrl: 'https://x/y',
      staticDir: 'static',
    });

    expect(markdown).not.toContain('| Name |');
    expect(markdown).toContain('After.');
  });

  it('returns an empty string when there is no article to convert', () => {
    expect(
      buildTwin({ html: '<html><body><p>nope</p></body></html>', pageUrl: 'https://x/y', staticDir: 'static' })
    ).toBe('');
  });
});
