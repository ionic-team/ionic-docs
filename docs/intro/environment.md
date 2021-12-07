---
title: Environment Setup
---

<head>
  <title>Environment Setup | Node & NPM Environment for Ionic App Setup</title>
  <meta
    name="description"
    content="To get started with Ionic Framework, the only requirement is a Node & npm environment. Learn what environment setup is required for your Ionic apps."
  />
</head>

To get started with Ionic Framework, the only requirement is a [Node & npm](#node--npm) environment.

Of course, a code editor is also required. [Visual Studio Code](https://code.visualstudio.com/) is recommended. Visual Studio Code is a free, batteries-included text editor made by Microsoft.

## Terminal

:::note
Much of Ionic development requires familiarity with the command line. If you're new to the command line, see [this Blog Post](https://ionicframework.com/blog/new-to-the-command-line/) for a quick introduction.
:::

In general, we recommend using the built-in terminals. Many third-party terminals work well with Ionic, but may not be supported.

- For Windows, **Command Prompt** and **PowerShell** are supported. <a href="https://docs.microsoft.com/en-us/windows/wsl/faq" target="_blank">WSL</a> is known to work with Ionic, but may not be supported.
- For macOS, the built-in **Terminal** app is supported.

Git Bash (from <a href="https://git-scm.com" target="_blank">git-scm.com</a>) does not support TTY interactivity and is **not supported** by Ionic.

## Node & npm

Almost all tooling for modern JavaScript projects is based in [Node.js](../reference/glossary.md#node). The [download page](https://nodejs.org/en/download/) has prebuilt installation packages for all platforms. We recommend selecting the LTS version to ensure best compatibility.

Node is bundled with [npm](../reference/glossary.md#npm), the package manager for JavaScript.

To verify the installation, open a new terminal window and run:

```shell
$ node --version
$ npm --version
```

:::note
Permission errors are common on macOS when installing global packages with `npm`. If you get an `EACCES` error, see [Resolving Permission Errors](../developing/tips.md#resolving-permission-errors).
:::

## Git

Although not required, the version control system [Git](../reference/glossary.md#git) is highly recommended.

Git is often accompanied by a Git Host, such as [GitHub](https://github.com/), in which case additional setup is required. Follow the tutorial from the Git Host's documentation to set up Git:

- GitHub: [Set up Git](https://help.github.com/en/articles/set-up-git)
- GitLab: [Installing Git](https://docs.gitlab.com/ee/topics/git/how_to_install_git)
- Bitbucket: [Install Git](https://www.atlassian.com/git/tutorials/install-git)

Otherwise, follow the [official installation instructions](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git). The command-line utility can be downloaded from the [download page](https://git-scm.com/downloads).

To verify the installation, open a new terminal window and run:

```shell
$ git --version
```

### Git GUI

Git is a command-line utility, but there are many [GUI clients](https://git-scm.com/downloads/guis/) available. [GitHub Desktop](https://desktop.github.com/) is recommended, and works well with GitHub.
