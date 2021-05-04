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

Ionic CLI是由[TypeScript](/docs/reference/glossary#typescript)和[Node.js](/docs/reference/glossary#node)构建的。 它能够支持Node10.3以上的版本，不过我们建议使用最新的LTS版本。 具体细则，可以关注我们的开源代码库<a href="https://github.com/ionic-team/ionic-cli" target="_blank">GitHub仓库</a>。

## 答疑解惑

如果遇到了有关Ionic CLI的疑问，可以参照以下内容来排查：

- 请确保已安装 Ionic CLI 的最新版本。 可以通过运行`ionic --version`命令进行版本信息的查看。
- 请确保已安装最新的Node LTS版本。 参照[Node & npm](/docs/intro/environment#node-npm)环境配置。
- 命令接上`--verbose` 标记会打印调试消息，这对排查不容易找到的问题是很有帮助的。
- 代理设置错误的话会导致一些连接异常， 参照 [使用代理](/docs/cli/using-a-proxy) 来配置请求代理。
- 所有平台的 Ionic CLI 全局配置目录均为 `~/.ionic`。 你完全可以删除该目录，Ionic CLI 会重新生成新的配置信息。但是所有的配置信息都会丢失 (包括 user sessions)。 使用 [CLI 环境变量](/docs/cli/configuration#environment-variables) 来配置此目录。