The ionic docs repo is licensed and managed separately from the ionic repo itself.

By contributing to the [ionic-team/ionic-docs](https://github.com/ionic-team/ionic-docs) repo, you agree to have your contributions licensed under the Apache 2.0 license. See the `LICENSE` file for details on this license.

## GUIDELINES

When in doubt, keep pull requests small. Just a few related changes and nothing else. Separate different features or changes into different PRs to make it easy to merge.

Always use two spaces and no tabs for indentation.

## Structure

This website is based on the [Stencil App Starter](https://github.com/ionic-team/stencil-app-starter).

It is a webapp that uses [Stencil](https://stenciljs.com/). The [Ionic-Site](https://github.com/ionic-team/ionic-site) will use a reverse proxy for any pages under the `/docs` URL to show pages from this repo under ionicframework.com.

The content of this site exists under `src/docs-content`. The structure of the site is a set of nested Stencil components. These components are found in `src/components`. The styles exist under `src/styles` and the individual components. The scripts that automatically pull in refference content from other projects exist in `scripts`.
