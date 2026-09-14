/**
 * Types the sibling `release-notes.json`, which `scripts/release-notes.mjs` writes
 * during `generate-markdown`. That file is gitignored and does not exist until a
 * build runs, so this declaration keeps type checking independent of the GitHub API
 * fetch that produces it.
 *
 * The `.d.json.ts` name is how TypeScript types a non-JS import; it requires
 * `allowArbitraryExtensions`.
 */

declare const releases: {
  body: string;
  name: string;
  published_at: string;
  tag_name: string;
  type: string;
  version: string;
}[];

export default releases;
