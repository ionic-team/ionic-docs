---
---

# Ionic CLI

Ionic命令行工具（[CLI](/docs/reference/glossary#cli)）是用于开发Ionic应用的首选工具。

## 安装方式

Ionic CLI 可以使用 npm 全局安装：

```shell
$ npm install -g @ionic/cli
```

## 帮助

Ionic CLI 带命令文档，可以使用 `--help` 标志访问。

```shell
$ ionic --help
$ ionic <command> --help
$ ionic <command> <subcommand> --help
```

> 确保在你的项目文件夹下运行`ionic <command> --help`命令。
> 
> 对于一些命令，例如 `ionic server`，帮助文档根据项目类型的不同（例如：React和Angular）会有差异。

<!-- TODO: image? -->

## 架构

Ionic CLI是由[TypeScript](/docs/reference/glossary#typescript)和[Node.js](/docs/reference/glossary#node)构建的。 It supports Node 10.3+, but the latest Node LTS is always recommended. Follow development on the open source <a href="https://github.com/ionic-team/ionic-cli" target="_blank">GitHub repository</a>.

## 答疑解惑

为了解决有关 Ioncon CLI 的疑问，以下方法可能是有用的：

- 请确保已安装 Ionic CLI 的最新版本。 Get the installed version by running `ionic --version`.
- 请确保已安装最新的 Node LTS。 See [Node & npm](/docs/intro/environment#node-npm) environment setup.
- `--verbose` 标志会打印调试消息，这可能会缩小问题的范围。
- Connection issues may be due to improperly configured proxy settings. 查看 [使用代理](/docs/cli/using-a-proxy) 来设置代理。
- 所有平台的 Ionic CLI 全局配置目录均为 `~/.ionic`。 你完全可以删除该目录，Ionic CLI 会重新生成新的配置信息。但是所有的配置信息都会丢失 (包括 user sessions)。 使用 [CLI 环境变量](/docs/cli/configuration#environment-variables) 来配置此目录。