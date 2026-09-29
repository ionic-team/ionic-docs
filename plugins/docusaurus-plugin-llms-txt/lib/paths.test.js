import path from 'node:path';

import { describe, expect, it } from 'vitest';

import paths from './paths.js';

const { stripBaseUrl, toMarkdownPath, toMarkdownUrl, toOutputPaths } = paths;

const URL_OPTIONS = { siteUrl: 'https://ionicframework.com', baseUrl: '/docs/' };

describe('stripBaseUrl', () => {
  it('reduces a permalink to its path below the baseUrl', () => {
    expect(stripBaseUrl('/docs/angular/navigation', '/docs/')).toBe('angular/navigation');
  });

  it('reduces the site root to an empty string', () => {
    expect(stripBaseUrl('/docs/', '/docs/')).toBe('');
  });

  it('tolerates a baseUrl with no trailing slash and a permalink with one', () => {
    expect(stripBaseUrl('/docs/theming/basics/', '/docs')).toBe('theming/basics');
  });
});

describe('toMarkdownPath', () => {
  it('maps the site root to index.md, matching what is written to disk', () => {
    expect(toMarkdownPath('/docs/', '/docs/')).toBe('index.md');
  });

  it('appends .md to a nested page', () => {
    expect(toMarkdownPath('/docs/angular/navigation', '/docs/')).toBe('angular/navigation.md');
  });

  it('replaces an existing extension rather than appending', () => {
    expect(toMarkdownPath('/docs/reference/glossary.html', '/docs/')).toBe('reference/glossary.md');
  });
});

describe('toMarkdownUrl', () => {
  it('builds an absolute URL', () => {
    expect(toMarkdownUrl('/docs/angular/navigation', URL_OPTIONS)).toBe(
      'https://ionicframework.com/docs/angular/navigation.md'
    );
  });

  it('links the site root at index.md', () => {
    expect(toMarkdownUrl('/docs/', URL_OPTIONS)).toBe('https://ionicframework.com/docs/index.md');
  });

  it('tolerates a trailing slash on the site URL', () => {
    expect(toMarkdownUrl('/docs/theming/basics', { siteUrl: 'https://ionicframework.com/', baseUrl: '/docs' })).toBe(
      'https://ionicframework.com/docs/theming/basics.md'
    );
  });
});

describe('toOutputPaths', () => {
  it('offers both HTML layouts for a nested page', () => {
    const { htmlCandidates, markdownPath } = toOutputPaths('/docs/api/button', { outDir: 'build', baseUrl: '/docs/' });

    expect(htmlCandidates).toEqual([
      path.join('build', 'api', 'button', 'index.html'),
      path.join('build', 'api', 'button.html'),
    ]);
    expect(markdownPath).toBe(path.join('build', 'api', 'button.md'));
  });

  it('resolves the site root to the output root', () => {
    const { htmlCandidates, markdownPath } = toOutputPaths('/docs/', { outDir: 'build', baseUrl: '/docs/' });

    expect(htmlCandidates).toEqual([path.join('build', 'index.html')]);
    expect(markdownPath).toBe(path.join('build', 'index.md'));
  });
});
