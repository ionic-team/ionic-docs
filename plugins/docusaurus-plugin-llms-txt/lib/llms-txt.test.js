import { describe, expect, it } from 'vitest';

import llmsTxt from './llms-txt.js';

const { buildSections, cleanDescription, collectDocs, getReferencedDocIds, renderLlmsTxt } = llmsTxt;

const URL_OPTIONS = { siteUrl: 'https://ionicframework.com', baseUrl: '/docs/' };

const doc = (id, overrides = {}) => ({
  id,
  title: id,
  description: `A sentence about ${id}.`,
  permalink: `/docs/${id}`,
  ...overrides,
});

const toMap = (docs) => new Map(docs.map((entry) => [entry.id, entry]));

describe('cleanDescription', () => {
  it('keeps a normal sentence and collapses whitespace', () => {
    expect(cleanDescription('  Routing   and\nredirects in Angular apps.  ', 'Angular Navigation')).toBe(
      'Routing and redirects in Angular apps.'
    );
  });

  it('drops JSX that leaked out of the excerpt scraper', () => {
    expect(cleanDescription('<Tabs', 'Global Config')).toBe('');
    expect(cleanDescription('{someExpression}', 'Global Config')).toBe('');
    expect(cleanDescription("import Tabs from '@theme/Tabs'", 'Global Config')).toBe('');
  });

  it('drops fragments too short to be a summary', () => {
    expect(cleanDescription('isPlatform', 'Platform')).toBe('');
  });

  it('drops a description that only repeats the title', () => {
    expect(cleanDescription('Customizing Animations', 'Customizing Animations')).toBe('');
    expect(cleanDescription('customizing  animations!', 'Customizing Animations')).toBe('');
  });

  it('keeps a short but genuine summary', () => {
    expect(cleanDescription('Log in to Ionic', 'ionic login')).toBe('Log in to Ionic');
  });

  it('truncates long text on a word boundary', () => {
    const result = cleanDescription(`${'word '.repeat(80)}tail`, 'Some Page');

    expect(result.endsWith('...')).toBe(true);
    expect(result.length).toBeLessThanOrEqual(203);
    expect(result).not.toContain('word w...');
  });

  it('returns an empty string for missing input', () => {
    expect(cleanDescription(undefined, 'Some Page')).toBe('');
    expect(cleanDescription('', 'Some Page')).toBe('');
  });
});

describe('getReferencedDocIds', () => {
  const sidebars = {
    docs: [
      {
        type: 'category',
        label: 'Getting Started',
        link: { type: 'doc', id: 'intro/overview' },
        items: [
          { type: 'doc', id: 'intro/cli' },
          {
            type: 'category',
            label: 'Nested',
            items: [{ type: 'doc', id: 'intro/deep' }],
          },
          { type: 'link', label: 'External', href: 'https://example.com' },
          { type: 'html', value: '<hr />' },
        ],
      },
    ],
    api: [{ type: 'category', label: 'Button', items: [{ type: 'ref', id: 'api/button' }] }],
  };

  it('collects ids from every sidebar, including nested and category links', () => {
    expect([...getReferencedDocIds(sidebars)].sort()).toEqual([
      'api/button',
      'intro/cli',
      'intro/deep',
      'intro/overview',
    ]);
  });

  it('leaves out a page that is present but reachable from no sidebar', () => {
    const withOrphan = {
      ...sidebars,
      docs: [
        ...sidebars.docs,
        { type: 'html', value: '<p>guides/unlinked is mentioned here but no sidebar points at it</p>' },
      ],
    };

    expect(getReferencedDocIds(withOrphan).has('guides/unlinked')).toBe(false);
  });

  it('handles missing sidebars without throwing', () => {
    expect(getReferencedDocIds(undefined).size).toBe(0);
  });
});

describe('collectDocs', () => {
  const docsById = toMap([doc('a'), doc('b'), doc('c')]);

  it('preserves sidebar order across nesting', () => {
    const items = [
      { type: 'doc', id: 'a' },
      { type: 'category', label: 'Group', items: [{ type: 'doc', id: 'b' }] },
      { type: 'doc', id: 'c' },
    ];

    expect(collectDocs(items, docsById).map((entry) => entry.id)).toEqual(['a', 'b', 'c']);
  });

  it('skips link and html items', () => {
    const items = [
      { type: 'link', label: 'Responsive Grid', href: '/api/grid' },
      { type: 'html', value: '<hr />' },
      { type: 'doc', id: 'a' },
    ];

    expect(collectDocs(items, docsById).map((entry) => entry.id)).toEqual(['a']);
  });

  it('skips ids with no matching doc', () => {
    const items = [
      { type: 'doc', id: 'a' },
      { type: 'doc', id: 'missing' },
    ];

    expect(collectDocs(items, docsById).map((entry) => entry.id)).toEqual(['a']);
  });
});

describe('buildSections', () => {
  const docsById = toMap([doc('intro/cli'), doc('theming/basics'), doc('api/button'), doc('cli/commands/build')]);

  const sidebars = {
    docs: [
      { type: 'category', label: 'Getting Started', items: [{ type: 'doc', id: 'intro/cli' }] },
      { type: 'category', label: 'Theming', items: [{ type: 'doc', id: 'theming/basics' }] },
      { type: 'category', label: 'Empty', items: [{ type: 'doc', id: 'gone' }] },
    ],
    api: [{ type: 'category', label: 'Button', items: [{ type: 'doc', id: 'api/button' }] }],
    cli: [{ type: 'category', label: 'Commands', items: [{ type: 'doc', id: 'cli/commands/build' }] }],
    native: [],
  };

  it('turns each top-level guide category into a section', () => {
    const { sections } = buildSections({ sidebars, docsById });

    expect(sections.map((section) => section.title)).toEqual(['Getting Started', 'Theming']);
    expect(sections[0].docs.map((entry) => entry.id)).toEqual(['intro/cli']);
  });

  it('gathers the reference sidebars into the optional list', () => {
    const { optional } = buildSections({ sidebars, docsById });

    expect(optional.map((entry) => entry.id)).toEqual(['api/button', 'cli/commands/build']);
  });

  it('lists a doc once, keeping it with its guide section', () => {
    const shared = {
      docs: [{ type: 'category', label: 'Layout', items: [{ type: 'doc', id: 'api/button' }] }],
      api: [{ type: 'category', label: 'Button', items: [{ type: 'doc', id: 'api/button' }] }],
    };
    const { sections, optional } = buildSections({ sidebars: shared, docsById });

    expect(sections[0].docs.map((entry) => entry.id)).toEqual(['api/button']);
    expect(optional).toEqual([]);
  });
});

describe('renderLlmsTxt', () => {
  const rendered = renderLlmsTxt({
    title: 'Ionic Framework',
    tagline: 'The app platform for web developers',
    intro: 'Every page below is linked as markdown.',
    sections: [{ title: 'Getting Started', docs: [doc('intro/cli', { title: 'Ionic CLI' })] }],
    optional: [doc('api/button', { title: 'ion-button', description: '<Tabs' })],
    ...URL_OPTIONS,
  });

  it('follows the llmstxt.org shape', () => {
    expect(rendered).toBe(
      [
        '# Ionic Framework',
        '',
        '> The app platform for web developers',
        '',
        'Every page below is linked as markdown.',
        '',
        '## Getting Started',
        '',
        '- [Ionic CLI](https://ionicframework.com/docs/intro/cli.md): A sentence about intro/cli.',
        '',
        '## Optional',
        '',
        '- [ion-button](https://ionicframework.com/docs/api/button.md)',
        '',
      ].join('\n')
    );
  });

  it('leaves out the Optional heading when there is nothing to put under it', () => {
    const withoutOptional = renderLlmsTxt({
      title: 'Ionic Framework',
      sections: [{ title: 'Getting Started', docs: [doc('intro/cli')] }],
      optional: [],
      ...URL_OPTIONS,
    });

    expect(withoutOptional).not.toContain('## Optional');
  });
});
