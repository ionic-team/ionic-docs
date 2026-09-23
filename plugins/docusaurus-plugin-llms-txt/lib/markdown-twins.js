const path = require('path');

const { readPlaygroundCode, renderPlaygroundCode } = require('./playground-code');

/**
 * Builds the markdown twin of a rendered page, repairing the HTML on its way
 * into docusaurus-plugin-copy-page-button's converter. See ../README.md for
 * what needs repairing and why.
 *
 * Deep-importing `src/htmlToMarkdown.js` reaches past the package's documented
 * entry point. Its `files` list ships `src` and it declares no `exports` map,
 * so the path resolves, but it is worth re-checking on upgrade.
 */
const {
  convertToMarkdown,
  extractPageMarkdownFromHtml,
} = require('docusaurus-plugin-copy-page-button/src/htmlToMarkdown.js');

if (typeof convertToMarkdown !== 'function' || typeof extractPageMarkdownFromHtml !== 'function') {
  throw new Error(
    'docusaurus-plugin-llms-txt: docusaurus-plugin-copy-page-button/src/htmlToMarkdown.js no longer exports ' +
      'convertToMarkdown and extractPageMarkdownFromHtml. This deep import was written against 0.8.4.'
  );
}

const PLAYGROUND_CONTAINER = /<div class="playground__container[^"]*"/g;
const VERSION_BADGE = /<span class="theme-doc-version-badge[^"]*"[^>]*>[\s\S]*?<\/span>/g;
const TAB_LIST_OR_PANEL = /<ul[^>]*role="?tablist"?[^>]*>([\s\S]*?)<\/ul>|<div role="?tabpanel"?[^>]*>/g;
const ADMONITION_HEADING =
  /<div class="theme-admonition theme-admonition-(\w+)[^"]*"[^>]*><div class="?admonitionHeading[^>]*>([\s\S]*?)<\/div>/g;
const ANCHOR_HREF = /href="?#([^"\s>]+)"?/g;
const ANCHOR_SENTINEL = '@@IONIC_ANCHOR@@';
const ENCAPSULATION_PILL = /<a class="encapsulation-pill[^"]*"[^>]*>[\s\S]*?<\/a>/g;
const FULLWIDTH_BAR = /\uFF5C/g;
const INTERNAL_LINK = /\]\((\/[^)\s#]+)(#[^)\s]*)?\)/g;

const tableToken = (index) => `@@IONIC_TABLE_${index}@@`;
const playgroundToken = (index) => `@@IONIC_PLAYGROUND_${index}@@`;

const cellToMarkdown = (html) =>
  convertToMarkdown(`<div>${html}</div>`).replace(/\s+/g, ' ').replace(/\|/g, '\\|').trim();

/**
 * Splits a table's inner HTML into rows of raw cell HTML.
 *
 * Written against the tag soup Docusaurus emits, with no closing `</td>` or
 * `</tr>` and a `<tbody>` appearing mid-stream, rather than against
 * well-formed markup.
 */
function parseRows(inner) {
  return inner
    .split(/<tr[^>]*>/)
    .slice(1)
    .map((row) => ({
      isHeader: /<th[\s>]/.test(row),
      cells: row
        .split(/<t[hd][^>]*>/)
        .slice(1)
        .map((cell) => cell.replace(/<\/t[hd]>|<\/tr>|<\/?tbody>|<\/?thead>|<\/table>/g, '')),
    }))
    .filter((row) => row.cells.length > 0);
}

const toRow = (cells) => `| ${cells.join(' | ')} |`;

/**
 * Markdown has no way to express a table with no header row, and a fabricated
 * header would read as data, so those become labeled lines instead.
 */
function renderTable(rows) {
  const header = rows.find((row) => row.isHeader);
  const body = rows.filter((row) => row !== header);

  if (!header) {
    if (body.every((row) => row.cells.length === 2)) {
      return body
        .map(({ cells }) => `**${cells[0].replace(/^\*\*|\*\*$/g, '')}**: ${cells[1].replace(FULLWIDTH_BAR, '|')}`)
        .join('\n\n');
    }

    const width = Math.max(...body.map((row) => row.cells.length));
    return [toRow(Array(width).fill('')), toRow(Array(width).fill('---')), ...body.map((row) => toRow(row.cells))].join(
      '\n'
    );
  }

  return [toRow(header.cells), toRow(header.cells.map(() => '---')), ...body.map((row) => toRow(row.cells))].join('\n');
}

function replaceTables(html) {
  const tables = [];

  const withTokens = html.replace(/<table[^>]*>([\s\S]*?)<\/table>/g, (match, inner) => {
    const rows = parseRows(inner);
    if (rows.length === 0) {
      return match;
    }

    // A header with no body rows is a client-rendered table. Emitting it
    // reads as an authoritative "there is nothing here".
    if (rows.every((row) => row.isHeader)) {
      return '';
    }

    tables.push(renderTable(rows.map(({ isHeader, cells }) => ({ isHeader, cells: cells.map(cellToMarkdown) }))));
    return `<p>${tableToken(tables.length - 1)}</p>`;
  });

  return { html: withTokens, tables };
}

/** Whether a page renders any playground, so its source is only read if needed. */
function hasPlaygrounds(html) {
  return html.includes('playground__container');
}

/**
 * Marks each playground with a placeholder.
 *
 * The marker goes immediately before the container rather than replacing it,
 * which keeps this clear of having to match the container's closing tag
 * through its nested markup. The shell itself still converts to nothing.
 */
function markPlaygrounds(html) {
  let count = 0;

  const withTokens = html.replace(PLAYGROUND_CONTAINER, (match) => {
    count += 1;
    return `<p>${playgroundToken(count - 1)}</p>${match}`;
  });

  return { html: withTokens, count };
}

/**
 * Usage folders a page renders, in the order its playgrounds appear.
 *
 * Pairing is positional, so this has to follow render order rather than
 * import order. `api/datetime.mdx` groups its imports by feature at the top
 * and then renders the sections in reading order, so the two sequences differ
 * and pairing on imports hands a section another section's code. A count
 * check cannot catch that, since a permutation has the same length.
 */
function readUsageDirs(source) {
  const byName = new Map(
    [...source.matchAll(/import\s+(\w+)\s+from\s+'@site\/static\/usage\/([\w\-/.]+)\/index\.mdx'/g)].map((match) => [
      match[1],
      match[2],
    ])
  );

  if (byName.size === 0) {
    return [];
  }

  // Match a self-closing tag carrying props as well as a bare one.
  const body = source.replace(/^import\s[^\n]*$/gm, '');
  return [...body.matchAll(/<([A-Z]\w*)[\s/>]/g)].map((match) => byName.get(match[1])).filter(Boolean);
}

const textOf = (html) =>
  html
    .replace(/<[^>]*>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

/**
 * Moves each tab's label into its panel.
 *
 * The labels live in the tab strip, which is chrome, but the panels are
 * mutually exclusive alternatives. Dropping the strip on its own leaves them
 * concatenated and unattributed, which on the framework tabs means near
 * identical prose with contradicting imports.
 *
 * Pairing is positional, so a group is only labeled when its counts line up.
 * Docusaurus emits one tab per `values` entry but one panel per `TabItem`,
 * and a page can declare fewer values than it renders items, which would
 * otherwise shift every later label onto its neighbor's content. Scanning
 * before rewriting is what makes that check possible, since a single pass
 * cannot take back a label it has already written.
 */
function labelTabs(html, onWarn = () => {}) {
  const scan = new RegExp(TAB_LIST_OR_PANEL.source, 'g');
  const groups = [];
  let group = null;

  for (let match = scan.exec(html); match; match = scan.exec(html)) {
    if (match[1] !== undefined) {
      if (group) {
        groups.push(group);
      }
      group = {
        labels: [...match[1].matchAll(/<li[^>]*>([\s\S]*?)(?=<li|$)/g)].map((item) => textOf(item[1])),
        panels: [],
      };
    } else if (group) {
      group.panels.push(match.index);
    }
  }
  if (group) {
    groups.push(group);
  }

  const labelAt = new Map();
  for (const { labels, panels } of groups) {
    if (labels.length !== panels.length) {
      onWarn(`tab group has ${labels.length} labels for ${panels.length} panels, leaving it unlabeled.`);
      continue;
    }
    panels.forEach((offset, index) => labelAt.set(offset, labels[index]));
  }

  return html.replace(TAB_LIST_OR_PANEL, (whole, list, offset) => {
    if (list !== undefined) {
      return '';
    }
    const label = labelAt.get(offset);
    return label ? `${whole}<p><strong>${label}</strong></p>` : whole;
  });
}

/**
 * The converter looks for a bare `admonition` class, which Docusaurus no
 * longer emits, so the heading falls through as the bare word "info". This
 * turns it into a labeled line and keeps any custom title with its type.
 */
const labelAdmonitions = (html) =>
  html.replace(ADMONITION_HEADING, (whole, type, heading) => {
    const title = textOf(heading);
    const name = type.charAt(0).toUpperCase() + type.slice(1);
    const label = title && title.toLowerCase() !== type ? `${name}: ${title}` : name;
    return `${whole.slice(0, whole.indexOf('><div') + 1)}<p><strong>${label}</strong></p>`;
  });

/**
 * Applies `transform` to each line that is not inside a fenced code block.
 *
 * Fences are tracked by their own marker run, so a ```` block
 * wrapping a ``` sample does not flip the parity, and a fence indented inside
 * a list item still counts as code.
 */
function mapProseLines(markdown, transform) {
  let fence = null;

  return markdown
    .split('\n')
    .map((line) => {
      const match = /^(\s*)(`{3,}|~{3,})(.*)$/.exec(line);

      if (fence) {
        if (match && match[2][0] === fence.marker && match[2].length >= fence.length && !match[3].trim()) {
          fence = null;
        }
        return line;
      }
      if (match) {
        fence = { marker: match[2][0], length: match[2].length };
        return line;
      }
      return transform(line);
    })
    .join('\n');
}

/**
 * The converter puts a space after every inline `code`, link and bold run,
 * which leaves a gap before the punctuation that follows.
 */
const closePunctuationGaps = (markdown) =>
  mapProseLines(markdown, (line) =>
    line.replace(/([`)*\w]) +([,.;:!?)\]])(?=[\s*`)\]]|$)/g, '$1$2').replace(/([([]) +(?=[`*\w])/g, '$1')
  );

const tidy = (markdown) => closePunctuationGaps(markdown.replace(/\n{3,}/g, '\n\n')).trim();

/**
 * @param {object} args
 * @param {string} args.html rendered page HTML
 * @param {string} args.pageUrl canonical URL of the page
 * @param {string[]} args.usageDirs usage folders, page order, relative to static/usage
 * @param {string} args.staticDir absolute path of the site's static directory
 * @param {Map<string, string>} [args.twinUrls] permalink to twin path, for cross-links
 * @param {(message: string) => void} [args.onWarn]
 */
function buildTwin({ html, pageUrl, usageDirs = [], staticDir, twinUrls = new Map(), onWarn = () => {} }) {
  /**
   * The version badge and the tab strip are chrome. The encapsulation pill is
   * worth keeping but sits loose between the header and the first paragraph,
   * so without a block of its own it runs into the opening sentence.
   */
  const cleaned = labelAdmonitions(labelTabs(html.replace(VERSION_BADGE, ''), onWarn))
    .replace(ENCAPSULATION_PILL, (pill) => `<p><strong>Encapsulation</strong>: ${pill}</p>`)
    // The converter drops href="#x", treating it as a heading affordance. On
    // a self-contained page those are real cross-references, so they are
    // carried past it behind a sentinel.
    .replace(ANCHOR_HREF, `href="${ANCHOR_SENTINEL}#$1"`);

  const tabled = replaceTables(cleaned);
  const marked = markPlaygrounds(tabled.html);

  // A count that does not line up means the page order assumption no longer
  // holds, so leave the snippets out rather than attach them to the wrong one.
  const spliceCode = marked.count === usageDirs.length;
  if (!spliceCode && marked.count > 0) {
    onWarn(`${pageUrl}: found ${marked.count} playgrounds for ${usageDirs.length} usage imports, leaving code out.`);
  }

  let markdown = extractPageMarkdownFromHtml(marked.html, pageUrl, { requireDocContent: true });
  if (!markdown.trim()) {
    return '';
  }

  tabled.tables.forEach((table, index) => {
    markdown = markdown.replace(new RegExp(`[ \\t]*${tableToken(index)}`), () => `\n\n${table}\n\n`);
  });

  for (let index = 0; index < marked.count; index += 1) {
    const code = spliceCode
      ? renderPlaygroundCode(readPlaygroundCode(path.join(staticDir, 'usage', usageDirs[index])))
      : '';
    markdown = markdown.replace(playgroundToken(index), () => code);
  }

  /**
   * Leave a link alone unless its target has a twin, so anchors, assets and
   * pages that were skipped keep pointing at something that exists.
   */
  const linked = mapProseLines(tidy(markdown), (line) =>
    line.replace(INTERNAL_LINK, (whole, target, hash) => {
      // Some sources link a page by its source filename. Those resolve to the
      // same twin, so the extension is dropped before looking the target up.
      const withoutExtension = target.replace(/\.mdx?$/, '');
      const twin = twinUrls.get(target) ?? twinUrls.get(withoutExtension);
      return twin ? `](${twin}${hash ?? ''})` : whole;
    })
  )
    .replaceAll(`(${ANCHOR_SENTINEL}#`, '(#')
    // Raw anchor HTML that the converter passed through as text keeps its
    // sentinel, since it never became a markdown link.
    .replaceAll(ANCHOR_SENTINEL, '');

  return `${linked}\n`;
}

module.exports = {
  buildTwin,
  closePunctuationGaps,
  labelTabs,
  mapProseLines,
  hasPlaygrounds,
  markPlaygrounds,
  parseRows,
  readUsageDirs,
  renderTable,
  replaceTables,
};
