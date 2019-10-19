---
previousText: 'Packages & CDN'
previousUrl: '/docs/installation/cdn'
nextText: 'iOS Setup'
nextUrl: '/docs/installation/ios'
contributors:
  - rtpHarry
---

# Environment Setup

To get started with Ionic Framework, the only requirement is a [Node & npm](#node-npm) environment.

Of course, a code editor is also required:

<ul class="intro">
  <li><a href="https://ionicframework.com/studio?utm_source=docs&utm_medium=website&utm_campaign=studio%20launch">Ionic Studio</a>: the fastest and easiest way to build Ionic apps</li>
  <li><a href="https://code.visualstudio.com/">VS Code</a>: a popular and free text editor made by Microsoft</li>
</ul>

## Node & npm

Almost all tooling for modern JavaScript projects is based in [Node.js](/docs/faq/glossary#node). The [download page](https://nodejs.org/en/download/) has prebuilt installation packages for all platforms. We recommend selecting the LTS version to ensure best compatibility.

Node is bundled with [npm](/docs/faq/glossary#npm), the package manager for JavaScript.

To verify the installation, open a new terminal window and run:

```shell
$ node --version
$ npm --version
```

> Permission errors are common on macOS when installing global packages with `npm`. If you get an `EACCES` error, see [Resolving Permission Errors](/docs/faq/tips#resolving-permission-errors).

## Git

Although not required, the version control system [Git](/docs/faq/glossary#git) is highly recommended.

Git is often accompanied by a Git Host, such as [GitHub](https://github.com/), in which case additional setup is required. Follow the tutorial from the Git Host's documentation to set up Git:

* GitHub: [Set up Git](https://help.github.com/en/articles/set-up-git)
* GitLab: [Installing Git](https://docs.gitlab.com/ee/topics/git/how_to_install_git)
* Bitbucket: [Install Git](https://www.atlassian.com/git/tutorials/install-git)

Otherwise, follow the [official installation instructions](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git). The command-line utility can be downloaded from the [download page](https://git-scm.com/downloads).

To verify the installation, open a new terminal window and run:

```shell
$ git --version
```

### Git GUI

Git is a command-line utility, but there are many [GUI clients](https://git-scm.com/downloads/guis/) available. [GitHub Desktop](https://desktop.github.com/) is recommended, and works well with GitHub.