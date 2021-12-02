# Contributing Guide

Thanks for your interest in contributing to Ionic's documentation! :tada: Check the guidelines below for suggestions and requirements before submitting your contribution.

- [Contributing Guide](#contributing-guide)
  - [Development Workflow](#development-workflow)
  - [Using VS Code on Windows](#using-vs-code-on-windows)
  - [Project Structure](#project-structure)
    - [Directories](#directories)
  - [Authoring Content](#authoring-content)
    - [Authoring Locally](#authoring-locally)
  - [Translation](#translation)
  - [Reporting Issues](#reporting-issues)
  - [Pull Request Guidelines](#pull-request-guidelines)
  <!-- - [Project Management](#project-management) -->
  - [Deploying](#deploying)
  - [License](#license)

---

## Development Workflow

In order to run the documentation locally, install the dependencies and run the development server:

```sh
$ npm install
$ npm start
```

> **Note**: recent versions of npm (5+) and Node.js (10+) are required to run certain scripts.

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
- `versioned_docs/` - versions of the docs created by the docusaurus versioning command
- `versioned_sitebars/` - versions of the docs sidebars created by the docusaurus versioning command

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

_Please submit translation issues to the Crowdin page and not the Ionic Docs GitHub repo_

The Japanese translation of the docs were built by an independent team, lead by [rdlabo](https://github.com/rdlabo) and can be found and contributed to on the [ionic-jp group's `ionic-docs` project page](https://github.com/ionic-jp/ionic-docs).

## Reporting Issues

Before submitting an issue to the Ionic docs repo, please search [existing issues](https://github.com/ionic-team/ionic-docs/issues) to avoid duplicate reports.

If the issue you're reporting is a bug, please be sure it is an issue with the Ionic docs themselves and not the subject of the documentation. With your report, please provide:

- Steps to reproduce
- Expected behavior
- OS and browser versions
- If possible, a demo repo or CodePen/CodeSandbox

> **Note**: Some [reference content](#reference-content) is pulled from other Ionic repos. In that case, please submit your issue on the docs repo with a link to the repo where the content lives.

---

## Pull Request Guidelines

When submitting pull requests, please keep the scope of your change contained to a single feature or bug. When in doubt, err on the side of smaller pull requests. If your pull request is a new feature, we would recommend opening an issue first to come to an agreement about the feature before putting in significant time.

---

<!-- ## Project Management

Internally, the Ionic documentation team uses a [project board](https://github.com/ionic-team/ionic-docs/projects/3) to plan work on the docs. The lanes on the board are:

- **Backlog** :file_cabinet: - Issues we plan to address, generally sorted by urgency
- **On Deck** :baseball: - Issues to be addressed during the current sprint, pulled from backlog during sprint planning
- **In Progress** :hammer: - Assigned issues that are currently being addressed
- **Needs Review** :mag: - Pull requests and issues that have a pending review
- **Done** :tada: - Issues that have been resolved

If you're looking for issues to help out with, we'd recommend either asking about an issue in the backlog or checking for issues labeled [`help-wanted`](https://github.com/ionic-team/ionic-docs/labels/help%20wanted).

--- -->

## Deploying

The Ionic documentation's `main` branch is deployed automatically and separately from the [Ionic site](https://github.com/ionic-team/ionic-site) itself. The Ionic site then uses a proxy for paths under `/docs` to request the deployed documentation.

---

## License

This repo is licensed and managed separately from Ionic itself.

By contributing to this repo, you agree to have your contributions licensed under the Apache 2.0 license. See [LICENSE](../LICENSE) for the full license text.
