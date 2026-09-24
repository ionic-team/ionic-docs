const fs = require('fs');
const path = require('path');

/**
 * Recovers the source behind a `<Playground>` so it can be written into a
 * page's markdown twin.
 *
 * The playground mounts its editor on the client, so none of its code reaches
 * the server-rendered HTML. The files are on disk though, under
 * `static/usage/<version>/<component>/<variant>/`, each already holding a
 * single fenced block. The mapping from framework to file lives in that
 * folder's `index.mdx`, which is what this module reads.
 */

/** Tab order used by the playground itself, from Playground/playground.types.ts. */
const FRAMEWORKS = [
  { key: 'javascript', label: 'JavaScript' },
  { key: 'angular', label: 'Angular' },
  { key: 'react', label: 'React' },
  { key: 'vue', label: 'Vue' },
];

/** Maps each local import name to the markdown file behind it. */
function readImports(source) {
  const imports = new Map();
  const pattern = /import\s+(\w+)\s+from\s+'(\.\/[^']+\.md)'/g;

  let match = pattern.exec(source);
  while (match) {
    imports.set(match[1], match[2]);
    match = pattern.exec(source);
  }

  return imports;
}

function readBracedBlock(source, openIndex) {
  let depth = 0;

  for (let index = openIndex; index < source.length; index += 1) {
    if (source[index] === '{') {
      depth += 1;
    } else if (source[index] === '}') {
      depth -= 1;
      if (depth === 0) {
        return source.slice(openIndex + 1, index);
      }
    }
  }

  return '';
}

/** The object literal passed as the playground's `code` prop. */
function readCodeBlock(source) {
  const marker = source.indexOf('code={{');
  return marker === -1 ? '' : readBracedBlock(source, marker + 'code={'.length);
}

/**
 * The files one framework contributes, as `{ name, importName }`.
 *
 * A single-file example is written in shorthand (`react,`). A multi-file one
 * spells out its editor paths, which are kept because they say where each
 * snippet belongs in a project.
 */
function readFrameworkFiles(codeBlock, key) {
  const entry = new RegExp(`(?:^|[{,\\s])${key}\\s*(:|,|$)`, 'm').exec(codeBlock);

  if (!entry) {
    return [];
  }
  if (entry[1] !== ':') {
    return [{ name: null, importName: key }];
  }

  /**
   * The brace has to be the next thing, not merely somewhere ahead. A
   * single-file entry whose local name differs from its key (`vue: vueBasic`,
   * which the CodeSnippets type allows) has no brace of its own, and scanning
   * on would find the next framework's file map and hand over its files.
   */
  const rest = codeBlock.slice(entry.index + entry[0].length);
  const value = rest.trimStart();

  if (!value.startsWith('{')) {
    const identifier = /^(\w+)/.exec(value);
    return identifier ? [{ name: null, importName: identifier[1] }] : [];
  }

  const valueStart = entry.index + entry[0].length + (rest.length - value.length);

  const files = [];
  const pattern = /'([^']+)'\s*:\s*(\w+)/g;
  const filesBlock = readBracedBlock(codeBlock, valueStart);

  let match = pattern.exec(filesBlock);
  while (match) {
    files.push({ name: match[1], importName: match[2] });
    match = pattern.exec(filesBlock);
  }

  return files;
}

/**
 * Reads one usage folder into `{ label, files: [{ name, code }] }` entries.
 *
 * Anything that cannot be resolved is left out rather than reported. A missing
 * snippet should cost that one example, not the page's twin.
 */
function readPlaygroundCode(usageDir, { readFile = (file) => fs.readFileSync(file, 'utf8') } = {}) {
  let source;
  try {
    source = readFile(path.join(usageDir, 'index.mdx'));
  } catch {
    return [];
  }

  const imports = readImports(source);
  const codeBlock = readCodeBlock(source);
  const entries = [];

  for (const { key, label } of FRAMEWORKS) {
    const files = [];

    for (const file of readFrameworkFiles(codeBlock, key)) {
      const importPath = imports.get(file.importName);
      if (!importPath) {
        continue;
      }

      try {
        files.push({ name: file.name, code: readFile(path.join(usageDir, importPath)).trim() });
      } catch {
        // Leave the file out.
      }
    }

    if (files.length > 0) {
      entries.push({ label, files });
    }
  }

  return entries;
}

/**
 * Renders the entries as markdown. Each snippet file is already a fenced
 * block, so it goes in as-is under a label saying which framework, and which
 * file, it belongs to.
 */
function renderPlaygroundCode(entries) {
  if (entries.length === 0) {
    return '';
  }

  return entries
    .map(({ label, files }) =>
      [
        `**${label}**`,
        ...files.map((file) => (file.name ? `\n\`${file.name}\`\n\n${file.code}` : `\n${file.code}`)),
      ].join('\n')
    )
    .join('\n\n');
}

module.exports = {
  readCodeBlock,
  readFrameworkFiles,
  readImports,
  readPlaygroundCode,
  renderPlaygroundCode,
};
