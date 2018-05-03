---

---

# Installing Ionic

Ionic apps are created and developed primarily through the Ionic command-line utility. Before proceeding, ensure [Node.js](/docs/faq/glossary#node) and [npm](/docs/faq/glossary#npm) are installed. See [Environment Setup](/docs/installation/environment) for details.

## Install the Ionic CLI

The CLI can be installed globally with npm:

```shell
npm install -g ionic
```

<blockquote>
  <p>The `-g` flag means packages are installed globally, possibly into directories owned by a superuser. Elevated privileges will be required if permission issues are encountered. For Windows, run Command Prompt as an Administrator. For other platforms, prefix the installation command with `sudo`.</p>
</blockquote>

To verify the installation, run:

```shell
ionic --version
```

## Start an App

Create an Ionic app using one of our pre-made app templates, or a blank one to start fresh. The most common starters are the `blank` starter, `tabs` starter, and `sidemenu` starter.

![start app thumbnails](../assets/img/installation/start-app-thumbnails.png)

Get started with the `ionic start` command:

```shell
ionic start myApp tabs
```

To learn more about starting Ionic apps, see our [Starting Guide](/docs/guides/starting).

## Run an App

The majority of Ionic app development is spent right in the browser using the `ionic serve` command:

```shell
cd myApp
ionic serve
```

We recommend starting with this workflow. To develop and test apps on devices and emulators, see Deploying.
