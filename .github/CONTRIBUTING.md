# Contributing Guide

Thanks for your interest in contributing to Ionic's documentation! :tada: Check the guidelines below for suggestions and requirements before submitting your contribution.

* [Development Workflow](#development-workflow)
* [Project Structure](#project-structure)
* [Authoring Content](#authoring-content)
* [Reporting Issues](#reporting-issues)
* [Pull Request Guidelines](#pull-request-guidelines)

---

## Development Workflow

In order to run the documentation locally, install the dependencies and run the development server:

```sh
$ npm install
$ npm start
```

> **Note**: recent versions of npm (5+) and Node.js (8+) are required to run certain scripts.

---

## Project Structure

Ionic's documentation is built using [Stencil](https://stenciljs.com). The content is written as Markdown or pulled in as JSON data from other Ionic repositories.

At a high level, the production documentation works like this:

1. At build time, the `build-pages` script reads the Markdown in `src/pages/` and creates a JSON representation of each page at the same path 
    ```
    pages/
    ├── intro.json
    └── intro.md
    ```
2. The `docs-page` component receives the current path (e.g. `/docs/intro`)
3. The `docs-page` component fetches and parses the [JSON representation](https://ionicframework.com/docs/pages/intro.json) of that page
4. The `docs-page` component renders that data using a [template](../src/components/page/templates)

> **Note**: most reference content (e.g. APIs, native plugins, CLI commands) is not stored as Markdown. Those pages are created using data provided by other repositories and stored in `scripts/data`.

### Directories

- `scripts/` - build scripts used to generate JSON representations of each page and other data used in the docs
- `src/` - source code and content of the docs
  - `assets/` - static assets used on the site, like images and fonts
  - `components/` - Stencil components used in the documentation UI
  - `demos/` - Self-contained demos, optionally presented by pages via `demoUrl` YAML frontmatter
  - `pages/` - Markdown content organized by route and uncommitted JSON representation of each page
  - `styles/` - Global and page-specific styles (non-component styles)

---

## Authoring Content

The content of the Ionic docs is written as [Markdown](https://commonmark.org/) in `src/pages`. Each Markdown file corresponds to a route.

```
/docs/intro             =>  src/pages/intro.md
/docs/installation/cli  =>  src/pages/installation/cli.md
/docs/theming/advanced  =>  src/pages/theming/advanced.md
/docs/theming           =>  src/pages/theming.md
```

By default, the pages are only built once while starting the server. You can rebuild the pages continuously as you edit them by concurrently running the `watch-pages` script:

```sh
$ npm run watch-pages
```

> **Note**: the `watch-pages` script won't reload the page. You will need to reload the page manually after your page is rebuilt.

### Reference Content

The Markdown in `src/pages` does not contain all of the Ionic documentation's content:

- Paths matching `/docs/api/*` are built from the [Ionic](https://github.com/ionic-team/ionic) source code
- Paths matching `/docs/native/*` are built from the [Ionic Native](https://github.com/ionic-team/ionic-native) source code
- Paths matching `/docs/cli/commands/*` are built from the [Ionic CLI](https://github.com/ionic-team/ionic-cli) source code

---

## Reporting Issues

Before submitting an issue to the Ionic docs repo, please search [existing issues](https://github.com/ionic-team/ionic-docs/issues) to avoid duplicate reports.

If the issue you're reporting is a bug, please be sure it is an issue with the Ionic docs themselves and not the subject of the documentation. With your report, please provide:

- Steps to reproduce
- Expected behavior
- OS and browser versions
- If possible, a demo repo or CodePen/CodeSandbox

---

## Pull Request Guidelines

When submitting pull requests, please keep the scope of your change contained to a single feature or bug. When in doubt, err on the side of smaller pull requests. If your pull request is a new feature, we would recommend opening an issue first to come to an agreement about the feature before putting in significant time.

> **Note**: `tslint` will run automatically when you attempt to commit. Our lint rules extend [tslint-ionic-rules](https://github.com/ionic-team/tslint-ionic-rules).

---

## Deploying

The Ionic documentation's `master` branch is deployed automatically and separately from the [Ionic site](https://github.com/ionic-team/ionic-site) itself. The Ionic site then uses a proxy for paths under `/docs` to request the deployed documentation.

---

## License

This repo is licensed and managed separately from Ionic itself.

By contributing to this repo, you agree to have your contributions licensed under the Apache 2.0 license. See [LICENSE](../LICENSE) for the full license text.