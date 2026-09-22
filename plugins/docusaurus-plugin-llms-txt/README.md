# docusaurus-plugin-llms-txt

Writes `llms.txt` into the build output so it is served at https://ionicframework.com/docs/llms.txt, in the format described at [llmstxt.org](https://llmstxt.org).

The plugin also writes a markdown twin of every docs page, which is what the index links to. Twins are written for every version, so a v8 page is readable as markdown too, but `llms.txt` itself covers only the current version in English.

## `md` and `mdx`

Authored docs stay `.mdx`, and nothing here changes that. Everything this plugin emits is plain `.md`, because it is written for agents rather than for the site: an agent fetching `/docs/api/button.md` gets markdown it can read straight off, with no JSX, no imports and no components to resolve. The `.md` files are build output only, so none of them are checked in and none of them should be edited by hand.

## Why the twins are written here

The conversion comes from `docusaurus-plugin-copy-page-button`, which is already a dependency. Its own `generateMarkdownRoutes` option writes the same files, and is deliberately left off in `docusaurus.config.js`, because plugin `postBuild` hooks run concurrently under `Promise.all` and having both write the same paths would be a race. The converter is reused here instead, with the HTML repaired on the way through.

Docusaurus emits minified HTML with the optional `</td>` and `</tr>` end tags left out, which that converter's parser does not account for, so every table used to collapse onto a single line. Separately, a `<Playground>` mounts its editor on the client, so the server-rendered HTML is an empty shell and the code examples went missing. Those snippets are on disk under `static/usage/`, so they get read from there and spliced back in. The smaller repairs are commented in `lib/markdown-twins.js`.

There's one trap if you touch the path handling. The converter also has a client-side `getMarkdownRouteUrl` that disagrees with what it writes to disk for the site root, giving `/docs.md` where the file is `/docs/index.md`. Use `lib/markdown-path.js`, which follows the file on disk, and which the theme shares so the copy page button cannot drift from the generated files.

## Which pages are covered

Sections mirror the top-level categories of the `docs` sidebar. The generated reference pages (the `api`, `cli` and `native` sidebars) go under `## Optional`, the spec's reserved heading for links an agent can skip when it needs a shorter context.

A page is included when some sidebar points at it, which keeps unreferenced pages out of both the index and the twins without a path list to maintain. Draft and unlisted pages are dropped too.

The Japanese build is skipped. It gets its own `build/ja` output root so there is no clash with the English file, but the section labels come from the English sidebar and nothing would link the result.

## Descriptions

Bullet descriptions come from the docs plugin's resolved `description`. Almost no page sets one in frontmatter, so in practice this is Docusaurus's body excerpt, which for most pages is the SEO title out of the in-body `<head>` block and reads well enough. A few fall through to something useless, and `cleanDescription` drops those so the bullet ends up title-only. Setting a frontmatter `description` on a page beats the excerpt.

## Layout and tests

```bash
npx vitest run plugins/docusaurus-plugin-llms-txt
```

The `index.js` hook owns the filesystem and everything under `lib/` is pure. `llms-txt.js` builds the index, `markdown-twins.js` the twins, `playground-code.js` reads a usage folder, `paths.js` maps a permalink to files on disk, and `markdown-path.js` holds the permalink-to-twin mapping that the theme shares.
