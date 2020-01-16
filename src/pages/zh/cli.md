---
---

# Ionic CLI

Ionic 命令行界面 ([CLI](/docs/faq/glossary#cli))，是开发者开发 Ionic 应用的首选工具。

## 安装方式

Ionic CLI 可以使用 npm 全局安装：

```shell
$ npm install -g ionic
```

## 帮助

Ionic CLI 带命令文档，可以使用 `--help` 标志访问。

```shell
$ ionic <command> --help
```

<!-- TODO: image? -->

## Architecture

Ionic CLI 由 [TypeScript](/docs/faq/glossary#typescript) 和 [Node.js](/docs/faq/glossary#node) 构建。 支持 Node 6+，但强烈推荐使用最新的 Node 长期支持版本。 Follow development on the open source <a href="https://github.com/ionic-team/ionic-cli" target="_blank">GitHub repository</a>.

## 答疑解惑

为了解决有关 Ioncon CLI 的疑问，以下方法可能是有用的：

- 请确保已安装 Ionic CLI 的最新版本。 使用 `npm install -g ionic@latest` 更新至最新版本。
- 请确保已安装最新的 Node LTS。 查看 [Node & npm](/docs/installation/environment#node-npm) 环境设置。
- The `--verbose` flag prints debugging messages, which may narrow down the issue.
- Connection issues may be due to improperly configured proxy settings. See [Using a Proxy](/docs/cli/using-a-proxy) to configure request proxying.
- The global Ionic CLI configuration directory is `~/.ionic` on all platforms. It can safely be deleted and the Ionic CLI will repopulate it, but all configuration (including user sessions) will be lost. Configure this directory with [CLI environment variables](/docs/cli/configuration#environment-variables).