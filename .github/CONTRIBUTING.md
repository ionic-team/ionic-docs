# Contributing

The [ionic-team/ionic-docs](https://github.com/ionic-team/ionic-docs) repo is licensed and managed separately from [Ionic](https://github.com/ionic-team/ionic) itself.

By contributing to this repo, you agree to have your contributions licensed under the Apache 2.0 license. See [`LICENSE`](https://github.com/ionic-team/ionic-docs/blob/master/LICENSE) for the full license text.

## Guidelines

When in doubt, keep pull requests small. Just a few related changes and nothing else. Separate different features or changes into different PRs to make it easy to merge.

Always use two spaces and no tabs for indentation.

## Architecture

This website is built primarily with [Stencil](https://stenciljs.com/). The [website](https://github.com/ionic-team/ionic-site) running [ionicframework.com](https://ionicframework.com) reverse proxies any requests under the `/docs` path.

### Structure

* `server/` - the lightweight express-based server that powers the website
* `scripts/` - custom scripts for pulling reference content from other projects
* `src/`
    * `content/` - the bulk of the documentation, written in markdown
    * `components/` - stencil components that make up structural and dynamic portions of the website
    * `styles/` - global styles

## Sources

### Ionic Framework

To add a new version of the framework to the docs:

1. Add desired git tag to `src/versions.ts`, setting `current` if necessary
1. Run `npm run docgen` to regenerate the docs and navigation
1. Commit the changes and push

## Deploying

Upon changes of `master`, the website is automatically deployed to the [`ionic-docs`](https://ionic-docs.herokuapp.com) Heroku app. The production build process may take several minutes.
