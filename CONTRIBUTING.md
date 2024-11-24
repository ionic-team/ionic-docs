# Contributing Guide

Thanks for your interest in contributing to Ionic's documentation! :tada: Check the guidelines below for suggestions and requirements before submitting your contribution.

- [Contributing Guide](#contributing-guide)
  - [Development Workflow](#development-workflow)
    - [Previewing Changes](#previewing-changes)
    - [Linting Documentation](#linting-documentation)
    - [Spell Check](#spell-check)
  - [Using VS Code on Windows](#using-vs-code-on-windows)
  - [Project Structure](#project-structure)
    - [Directories](#directories)
  - [Authoring Content](#authoring-content)
    - [Authoring Locally](#authoring-locally)
  - [Translation](#translation)
  - [Reporting Issues](#reporting-issues)
  - [Pull Request Guidelines](#pull-request-guidelines)
  - [Deploying](#deploying)
  - [License](#license)

---

## Development Workflow

### Previewing Changes

In order to run the documentation locally, install the dependencies and run the development server:

```sh
npm install
npm start
```

### Linting Documentation

This repository uses [Prettier](https://prettier.io/), an opinionated code formatter, in order to keep consistent formatting throughout the documentation. Run the following command to automatically fix all formatting, and then push any changes:

```
npm run lint
```

### Spell Check

This repository uses [cspell](https://cspell.org/), a spell checker for code, to automatically flag any spelling errors. Run the following command to see any spelling errors:

```
npm run spellcheck
```

> [!NOTE]
> Any spelling errors will need to be fixed manually. There are various ways to ignore words or sections that were flagged erroneously. These are listed below.

#### Ignoring words

**To ignore:**

- A **specific word**, add it to the following file: `cspell-wordlist.txt`
  - For example, `Ionicons` is flagged as an unknown word. Since this is the name of our software, it has been added to this file to be ignored.
- A **directory** or anything matching a **regular expression**, update the following file: `cspell.json`
  - For example, we don't want to flag anything inside of code ticks (<code>`</code>) or code blocks (<code>```</code>), so there are regular expressions added to ignore anything inside of these.
- An **entire line**, add the following comment above it:
  ```markdown
  <!-- cspell:disable-next-line -->
  ```
- **Multiple lines**, add comments above and below the lines to be ignored:

  ```markdown
  <!-- cspell:disable -->

  <p>Everything inside of these comments will be ignored by the spell checkr. Proofread your own words carefully.</p>

  <!-- cspell:enable -->
  ```

> [!IMPORTANT]
> You need to have line breaks between the `cspell` comments and any HTML elements,
> otherwise the build will error with `Module build failed`.

#### Tips

Before adding a word or section to be ignored, see if there is a way to make it pass the spell check. Technical terms that are part of an API may need to be wrapped in code formatting. For example, the word `keydown` is flagged as an unknown word by the spell checker, but this is a [Web API event](https://developer.mozilla.org/en-US/docs/Web/API/Element/keydown_event). We can wrap any mentions of `keydown` in two backticks (<code>\`keydown\`</code>) in order to avoid it being flagged by the spell checker.

Comments disabling the next line or entire sections of documentation are useful for making the spell checker ignore people's names.

In general, we should try to avoid ignoring words unless they are technical terms that are used throughout the documentation and wouldn't necessarily make sense formatted as code.

---

## Using VS Code on Windows

The Ionic docs were originally built in a Mac-based environment, so Mac-focused linting rules apply when committing changes. To contribute on Windows, do the following:

- Configure VS Code to read/save files using line breaks (LF) instead of carriage returns (CRLF). Set it globally by navigating to: Settings -> Text Editor -> Files -> Eol. Set to `\n`.
- Check that the Git setting `core.autocrlf` is set to `false`: run `git config -l | grep autocrlf`. Switch it to false using: `git config --global core.autocrlf false`.
- If you've already cloned the `ionic-docs` repo, the files may already be cached as LF. To undo this, you need to clean the cache files of the repository. Run the following (make sure you stage or commit your changes first): `git rm --cached -r .` then `git reset --hard`.

## Project Structure

Ionic's documentation is built using [Docusaurus](https://docusaurus.io/). The content is either written or generated as Markdown.

### Directories

- `scripts/` - build scripts used to generate markdown or json files
- `src/` - source code and content of the docs
  - `components/` - components used across the site
    - `global/` - components used globally
    - `page/` - components used on a single page or in a limited scope
  - `styles/` - global styles and variables
    - `components/` - styles split out into the components they target
- `static/`
  - `demos/` - self-contained demos, optionally presented by pages via `demoUrl` YAML frontmatter
  - `usage/` - playgrounds that can be created by running `npm run playground:new` [(docs)](_templates/README.md#new-playground-template)
- `versioned_docs/` - versions of the docs created by the docusaurus versioning command
- `versioned_sidebars/` - versions of the docs sidebars created by the docusaurus versioning command

## Authoring Content

The content of the Ionic docs is written as [Markdown](https://commonmark.org/) in `docs/`. Each Markdown file corresponds to a route unless explicitly changed in the frontmatter.

```
/docs/                  =>  src/pages/index.md
/docs/intro/cli         =>  src/pages/intro/cli.md
/docs/theming/advanced  =>  src/pages/theming/advanced.md
/docs/theming           =>  src/pages/theming.md
```

You can make copy edits to the site by [editing the Markdown files directly on GitHub](https://help.github.com/articles/editing-files-in-another-user-s-repository/). In your pull request, please explain what was missing from or inaccurate about the content.

### Reference Content

The Markdown in `docs/` does not only contain manually written markdown files:

- Paths matching `/docs/api/*` are built from the [Ionic Framework](https://github.com/ionic-team/ionic) source code
- Paths matching `/docs/native/*` are built from the [Ionic Native](https://github.com/ionic-team/ionic-native) source code
- Paths matching `/docs/cli/commands/*` are built from the [Ionic CLI](https://github.com/ionic-team/ionic-cli) source code

## Translation

The Ionic docs have been translated into Japanese and are in the process of being translated into Chinese, French, Portuguese, and Spanish. We've chosen these languages because we believe they have the greatest number of developers where English-only documentation would be a barrier.

We use Crowdin for our translation service. You can participate in the translation effort on the [Ionic Crowdin page](https://crowdin.com/project/ionic-docs).

_Please submit translation issues to the Crowdin page and not the Ionic Docs GitHub repo._

<!-- cspell:disable-next-line -->

The Japanese translation of the docs were built by an independent team, lead by [rdlabo](https://github.com/rdlabo) and can be found and contributed to on the [ionic-jp group's `ionic-docs` project page](https://github.com/ionic-jp/ionic-docs).

## Reporting Issues

Before submitting an issue to the Ionic docs repo, please search [existing issues](https://github.com/ionic-team/ionic-docs/issues) to avoid duplicate reports.

If the issue you're reporting is a bug, please be sure it is an issue with the Ionic docs themselves and not the subject of the documentation. With your report, please provide:

- Steps to reproduce
- Expected behavior
- OS and browser versions
- If possible, a demo repo or CodePen/CodeSandbox

> [!NOTE]
> Some [reference content](#reference-content) is pulled from other Ionic repos. In that case, please submit your issue on the docs repo with a link to the repo where the content lives.

---

## Pull Request Guidelines

When submitting pull requests, please keep the scope of your change contained to a single feature or bug. When in doubt, err on the side of smaller pull requests. If your pull request is a new feature, we would recommend opening an issue first to come to an agreement about the feature before putting in significant time.

---

## Deploying

The Ionic documentation's `main` branch is deployed automatically and separately from the [Ionic site](https://github.com/ionic-team/ionic-site) itself. The Ionic site then uses a proxy for paths under `/docs` to request the deployed documentation.

---

## License

This repo is licensed and managed separately from Ionic itself.

By contributing to this repo, you agree to have your contributions licensed under the Apache 2.0 license. See [LICENSE](LICENSE) for the full license text.
