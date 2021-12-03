---
sidebar_label: Overview
title: 'Ionic CLI Framework: Command-Line Interface to Develop Apps'
description: The Ionic command-line interface (CLI) is the go-to tool for developing Ionic apps. Install our framework globally with npm.
---

# Ionic CLI

The Ionic command-line interface ([CLI](/docs/reference/glossary#cli)) is the go-to tool for developing Ionic apps.

## Installation

The Ionic CLI can be installed globally with npm:

```shell
$ npm install -g @ionic/cli
```

## Help

The Ionic CLI ships with command documentation that is accessible with the `--help` flag.

```shell
$ ionic --help
$ ionic <command> --help
$ ionic <command> <subcommand> --help
```

:::note
Be sure to run `ionic <command> --help` in your project directory.

For some commands, such as `ionic serve`, the help documentation is contextual to the type of your project, e.g. React vs Angular.
:::

<!-- TODO: image? -->

## Architecture

The Ionic CLI is built with [TypeScript](/docs/reference/glossary#typescript) and [Node.js](/docs/reference/glossary#node). It supports Node 10.3+, but the latest Node LTS is always recommended. Follow development on the open source <a href="https://github.com/ionic-team/ionic-cli" target="_blank">GitHub repository</a>.

## Troubleshooting

To troubleshoot issues with the Ionic CLI, the following may be useful:

- Make sure the latest version of the Ionic CLI is installed. Get the installed version by running `ionic --version`.
- Make sure the latest Node LTS is installed. See [Node & npm](/docs/intro/environment#node-npm) environment setup.
- The `--verbose` flag prints debugging messages, which may narrow down the issue.
- Connection issues may be due to improperly configured proxy settings. See [Using a Proxy](/docs/cli/using-a-proxy) to configure request proxying.
- The global Ionic CLI configuration directory is `~/.ionic` on all platforms. It can safely be deleted and the Ionic CLI will repopulate it, but all configuration (including user sessions) will be lost. Configure this directory with [CLI environment variables](/docs/cli/configuration#environment-variables).
