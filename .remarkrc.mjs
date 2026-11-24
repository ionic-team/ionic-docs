/**
 * Remark plugins that `npm run lint` runs on docs pages through the
 * `mdx/remark` rule in `eslint.config.mjs`.
 */

import path from 'node:path';

import remarkFrontmatter from 'remark-frontmatter';

// Schemes such as https: and mailto:, in-page anchors, and protocol-relative URLs.
const NOT_A_PAGE_LINK = /^([a-z][a-z\d+.-]*:|#|\/\/)/i;

// A page on this site by its full URL. A versioned URL such as `/docs/v3/` or
// `/docs/v8/` opens that version rather than the current one, so it is allowed.
const DOCS_SITE_URL = /^https?:\/\/(www\.)?ionicframework\.com\/docs(?!\/v\d+(\/|$|[?#]))(\/|$|[?#])/i;

const pathOf = (url) => url.split(/[?#]/)[0];

/**
 * A Markdown link to a doc must be its relative file path with the extension,
 * such as `./accordion.mdx`. Docusaurus resolves it to the page in the same
 * version and fails the build if the file is missing, and editors can follow
 * it. Without the extension it is a URL that Docusaurus cannot map to a file,
 * and a leading `/` is read from the repo root by editors and GitHub. A full
 * `ionicframework.com/docs` URL always opens the current version, so a reader
 * on an older version lands on the wrong page.
 *
 * A JSX `href` or `to` never goes through that resolver, so it must be an
 * absolute URL path without the extension, such as `/api/accordion`. A relative
 * one resolves against the page's URL instead, and on an older version's page
 * one without the version prefix, such as `/v8/`, leads to the current docs.
 */
const checkMarkdownLink = (url) => {
  if (DOCS_SITE_URL.test(url) && !/\.[a-z\d]+$/i.test(pathOf(url).replace(/\/$/, ''))) {
    return `Link to \`${url}\` by the doc's relative file path, such as \`../api/modal.mdx\`. A full URL always opens the current version.`;
  }
  if (url === '' || NOT_A_PAGE_LINK.test(url)) return null;
  const path = pathOf(url);
  if (/\.mdx?$/.test(path)) {
    return path.startsWith('/')
      ? `Link to \`${url}\` by its relative file path, such as \`./accordion.mdx\`. Editors and GitHub read a leading \`/\` from the repo root.`
      : null;
  }
  // Another extension is a static file, such as an image or a download.
  if (/\.[a-z\d]+$/i.test(path)) return null;
  return `\`${url}\` is a URL, not a file. Link to the doc's relative file path with its extension, such as \`./accordion.mdx\`, so the build checks the page exists in this version.`;
};

// `version` is the older version a page belongs to, such as `v8`, or undefined
// for the current docs.
const checkJsxLink = (url, version) => {
  if (url === '' || NOT_A_PAGE_LINK.test(url)) return null;
  const path = pathOf(url);
  const example = version ? `/${version}/api/accordion` : '/api/accordion';
  if (/\.mdx?$/.test(path)) {
    return `A JSX link is a URL, not a file. Drop the extension from \`${url}\`, such as \`${example}\`.`;
  }
  if (!path.startsWith('/')) {
    return `Make \`${url}\` an absolute URL path, such as \`${example}\`. A relative link resolves against the page's URL.`;
  }
  if (version && !new RegExp(`^/${version}(/|$)`).test(path)) {
    return `Start \`${url}\` with \`/${version}/\`, such as \`${example}\`. Without it, the link leads to the current docs.`;
  }
  return null;
};

// Matches both separators, since the lint also runs on Windows.
const versionOf = (filePath) => filePath.match(/[\\/]versioned_docs[\\/]version-([^\\/]+)[\\/]/)?.[1];

function docLinks() {
  return (tree, file) => {
    const report = (reason, node) => {
      const message = file.message(reason, node);
      message.source = 'ionic-docs';
      message.ruleId = 'doc-links';
    };
    const version = versionOf(file.path);
    const visit = (node) => {
      if (node.type === 'link' || node.type === 'definition') {
        const reason = checkMarkdownLink(node.url);
        if (reason) report(reason, node);
      } else if (node.type === 'mdxJsxFlowElement' || node.type === 'mdxJsxTextElement') {
        for (const attribute of node.attributes) {
          if (!['href', 'to'].includes(attribute.name) || typeof attribute.value !== 'string') continue;
          const reason = checkJsxLink(attribute.value, version);
          if (reason) report(reason, node);
        }
      }
      node.children?.forEach(visit);
    };
    visit(tree);
  };
}

/**
 * Every page needs a `description` in its frontmatter. Docusaurus uses it for
 * the meta description, link previews, and llms.txt. Without it, Docusaurus
 * builds one from the opening text of the page, which can pick up an import, a
 * heading id comment, or the first line of a code sample.
 *
 * A `<meta name="description">` in `<head>` only sets the meta tag, so it does
 * not count. Docusaurus skips files and folders starting with `_`, so those
 * partials are not pages and need no description.
 */
function pageDescription() {
  return (tree, file) => {
    const report = (reason, place) => {
      const message = file.message(reason, place);
      message.source = 'ionic-docs';
      message.ruleId = 'page-description';
    };
    // Only the path inside the repo counts, so a checkout under a `_` folder,
    // such as a self-hosted runner's `_work/`, is still checked.
    const repoPath = file.path ? path.relative(file.cwd, file.path) : '';
    if (repoPath.split(/[\\/]/).some((segment) => segment.startsWith('_'))) return;

    const frontmatter = tree.children[0]?.type === 'yaml' ? tree.children[0].value : '';
    // An empty quoted string, such as `description: ''`, is no description.
    if (!/^description:[ \t]*(?!(['"])\1[ \t]*$)\S/m.test(frontmatter)) {
      report(
        'Add a `description` to the frontmatter. Without it, Docusaurus builds one from the opening text of the page.',
        { line: 1, column: 1 }
      );
    }

    for (const node of tree.children) {
      // Also matches `<Head>` from `@docusaurus/Head`.
      if (node.type !== 'mdxJsxFlowElement' || node.name?.toLowerCase() !== 'head') continue;
      for (const child of node.children) {
        const isDescription = child.name === 'meta' && child.attributes?.some((a) => a.name === 'name' && a.value === 'description');
        if (isDescription) {
          report(
            'Move this description to the frontmatter `description`. Docusaurus does not read it from `<head>`, so link previews and llms.txt use the opening text of the page instead.',
            child
          );
        }
      }
    }
  };
}

/**
 * Framework tabs must use `<FrameworkTabs>`, which takes each tab's label and
 * the tab order from `src/utils/frameworks.ts`. A `<Tabs groupId="framework">`
 * with its own `values` lets pages drift apart in spelling and order.
 *
 * A Tabs inside an `mdx-code-block` fence is a code node to remark, so the
 * fence's text is searched as well.
 */
const FRAMEWORK_TABS_IN_CODE = /<Tabs\b[^>]*\bgroupId=["']framework["']/;

function frameworkTabs() {
  return (tree, file) => {
    const report = (node) => {
      const message = file.message(
        'Use `<FrameworkTabs>` instead of `<Tabs groupId="framework">`. It takes the labels and order from `src/utils/frameworks.ts`, so every page shows the frameworks the same way.',
        node
      );
      message.source = 'ionic-docs';
      message.ruleId = 'framework-tabs';
    };
    const visit = (node) => {
      if (node.type === 'code' && node.lang === 'mdx-code-block' && FRAMEWORK_TABS_IN_CODE.test(node.value)) {
        report(node);
      } else if (
        node.type === 'mdxJsxFlowElement' &&
        node.name === 'Tabs' &&
        node.attributes.some((a) => a.name === 'groupId' && a.value === 'framework')
      ) {
        report(node);
      }
      node.children?.forEach(visit);
    };
    visit(tree);
  };
}

export default {
  // remark-frontmatter parses the frontmatter as YAML, as Docusaurus does.
  // Without it, the lint reads it as Markdown, and a `<` in a description
  // becomes an unclosed JSX tag.
  plugins: [remarkFrontmatter, docLinks, pageDescription, frameworkTabs],
};
