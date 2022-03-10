
/**
 * Loads the contents of a file remotely. Loads all code snippet files
 * from `/docs/usage/**` directory.
 *
 * loadCodeSnippet('/button/basic/javascript.md');
 *
 * @param path The relative path to the code snippet file from /docs/usage/.
 * @returns The parsed code block from the markdown code snippet file.
 */
const loadCodeSnippet = async (path: string) => {
  const res = await fetch(`/docs/usage/${path}`);
  const text = await res.text();
  return convertMdxToCode(text);
}

/**
 * Parses MDX formatted text and returns the inner
 * contents of the block.
 */
const convertMdxToCode = (text: string) => {
  /**
   * The regex below matches the following:
   *
   * ```typescript
   * const foo = 'bar';
   * ```
   *
   * - The first group is the markdown lint language.
   * - The second group is the code contents.
   * - The third group the closing markdown tag.
   *
   */
  const regexp = new RegExp(/`{3}([\S\s]*?)`{3}([^`]*)([\S\s]*?)/g);
  const regexpResult = regexp.exec(text);
  let sourceCode = '';
  if (regexpResult) {
    const sourceCodeLines = regexpResult[1].split('\n');
    // Removes any language indicator for code formatting
    sourceCodeLines.shift();
    sourceCode = sourceCodeLines.join('\n');
  }
  return sourceCode;
}

export { loadCodeSnippet };
