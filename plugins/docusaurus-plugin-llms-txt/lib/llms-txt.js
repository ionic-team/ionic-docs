const { toMarkdownUrl } = require('./paths');

/**
 * Descriptions shorter than this are almost always a stray heading or a bare
 * JSX tag rather than a sentence, so the bullet reads better without them.
 */
const MIN_DESCRIPTION_LENGTH = 15;

/** Keeps a single bullet to roughly one terminal line. */
const MAX_DESCRIPTION_LENGTH = 200;

const REFERENCE_SIDEBARS = ['api', 'cli', 'native'];

const normalizeWhitespace = (text) =>
  String(text ?? '')
    .replace(/\s+/g, ' ')
    .trim();

const forComparison = (text) =>
  normalizeWhitespace(text)
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '');

/**
 * Docusaurus falls back to a body excerpt when a page sets no frontmatter
 * description, which is the usual case here. That excerpt is normally the
 * page's SEO title and reads well, but it can land on a stray JSX tag or on a
 * heading the title already says. Those are dropped so the bullet is
 * title-only rather than misleading.
 */
function cleanDescription(description, title) {
  const text = normalizeWhitespace(description);

  if (!text) {
    return '';
  }
  // Unclosed JSX or an import that the excerpt scraper did not strip.
  if (/^[<{]/.test(text) || /^(import|export)\s/.test(text)) {
    return '';
  }
  if (text.length < MIN_DESCRIPTION_LENGTH) {
    return '';
  }
  // A description that just repeats the title adds nothing to the bullet.
  // Both sides have to hold something first, or a description made purely of
  // punctuation would match a missing title.
  const comparableTitle = forComparison(title);
  if (comparableTitle && forComparison(text) === comparableTitle) {
    return '';
  }

  if (text.length <= MAX_DESCRIPTION_LENGTH) {
    return text;
  }

  const clipped = text.slice(0, MAX_DESCRIPTION_LENGTH);
  const lastSpace = clipped.lastIndexOf(' ');
  return `${(lastSpace > 0 ? clipped.slice(0, lastSpace) : clipped).replace(/[.,;:]$/, '')}...`;
}

/**
 * Visits the id of every doc a sidebar subtree points at, in sidebar order.
 *
 * Both `link` and `html` items are passed over. External links are not docs,
 * and the internal ones, such as the "Responsive Grid" shortcut under Layout,
 * point at a page that already appears under its own sidebar.
 */
function walkSidebarDocIds(items, visit) {
  for (const item of items ?? []) {
    if (item.type === 'doc' || item.type === 'ref') {
      visit(item.id);
    } else if (item.type === 'category') {
      if (item.link?.type === 'doc') {
        visit(item.link.id);
      }
      walkSidebarDocIds(item.items, visit);
    }
  }
}

/**
 * Every doc id reachable from any sidebar. Pages outside this set are
 * unreachable from the site navigation, which is the signal used to skip them
 * rather than a hand-kept path list.
 */
function getReferencedDocIds(sidebars) {
  const ids = new Set();
  Object.values(sidebars ?? {}).forEach((items) => walkSidebarDocIds(items, (id) => ids.add(id)));
  return ids;
}

/** Flattens a sidebar subtree into the docs it points at, in sidebar order. */
function collectDocs(items, docsById) {
  const collected = [];

  walkSidebarDocIds(items, (id) => {
    const doc = docsById.get(id);
    if (doc) {
      collected.push(doc);
    }
  });

  return collected;
}

/**
 * Splits the sidebars into the named guide sections and the single `Optional`
 * section of generated reference pages.
 *
 * A doc is listed once. The guide sidebar is walked first, so a page that also
 * appears in a reference sidebar stays with its guide.
 */
function buildSections({ sidebars, docsById, referenceSidebars = REFERENCE_SIDEBARS }) {
  const seen = new Set();

  const unseen = (docs) =>
    docs.filter((doc) => {
      if (seen.has(doc.id)) {
        return false;
      }
      seen.add(doc.id);
      return true;
    });

  const sections = (sidebars.docs ?? [])
    .filter((item) => item.type === 'category')
    .map((category) => ({
      title: category.label,
      docs: unseen(collectDocs(category.items, docsById)),
    }))
    .filter((section) => section.docs.length > 0);

  const optional = unseen(referenceSidebars.flatMap((name) => collectDocs(sidebars[name] ?? [], docsById)));

  return { sections, optional };
}

const renderBullet = (doc, urlOptions) => {
  const url = toMarkdownUrl(doc.permalink, urlOptions);
  const description = cleanDescription(doc.description, doc.title);
  return description ? `- [${doc.title}](${url}): ${description}` : `- [${doc.title}](${url})`;
};

const renderSection = (title, docs, urlOptions) =>
  [`## ${title}`, '', ...docs.map((doc) => renderBullet(doc, urlOptions)), ''].join('\n');

/**
 * Renders the llms.txt body per the format at https://llmstxt.org: an H1, a
 * blockquote summary, free prose, then H2-delimited link lists. `Optional` is
 * the spec's reserved heading for links an agent can skip when it needs a
 * shorter context.
 */
function renderLlmsTxt({ title, tagline, intro, sections, optional, siteUrl, baseUrl }) {
  const urlOptions = { siteUrl, baseUrl };

  const parts = [`# ${title}`, ''];

  if (tagline) {
    parts.push(`> ${normalizeWhitespace(tagline)}`, '');
  }
  if (intro) {
    parts.push(normalizeWhitespace(intro), '');
  }

  sections.forEach((section) => parts.push(renderSection(section.title, section.docs, urlOptions)));

  if (optional.length > 0) {
    parts.push(renderSection('Optional', optional, urlOptions));
  }

  return `${parts.join('\n').trimEnd()}\n`;
}

module.exports = {
  buildSections,
  cleanDescription,
  collectDocs,
  getReferencedDocIds,
  renderLlmsTxt,
};
