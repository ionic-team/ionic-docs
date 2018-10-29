---

---

# Overview

<p class="intro">
The Ionic command-line interface ([CLI](/docs/faq/glossary#cli)) is your go-to tool for developing Ionic apps.
</p>

## Installation

The Ionic CLI can be installed globally with npm:

```shell
$ npm install -g ionic
```

## Help

The Ionic CLI ships with command documentation that is accessible with the `--help` flag.

```shell
$ ionic <command> --help
```

<!-- TODO: image? -->

## Architecture

The Ionic CLI is built with [TypeScript](/docs/faq/glossary#typescript) and [Node.js](/docs/faq/glossary#node). It supports Node 6+, but the latest Node LTS is always recommended. Follow development on the open source <a href="https://github.com/ionic-team/ionic-cli" target="_blank">Github repository</a>.

## Troubleshooting

To troubleshoot issues with the Ionic CLI, the following may be useful:

- Make sure the latest version of the Ionic CLI is installed. Update with `npm install -g ionic`.
- Make sure the latest Node LTS is installed. See [Node & npm](/docs/installation/environment#node-npm) environment setup.
- The `--verbose` flag prints debugging messages, which may narrow down the issue.
- Connection issues may be due to improperly configured proxy settings. See [Using a Proxy](/docs/cli/configuring#using-a-proxy) to configure request proxying.
- The global Ionic CLI configuration directory is `~/.ionic` on all platforms. It can safely be deleted and the Ionic CLI will repopulate it, but all configuration (including user sessions) will be lost.
