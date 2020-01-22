---
title: 'Connect Your Repo'
previousText: 'Quickstart Home'
previousUrl: '/docs/appflow/quickstart'
nextText: 'Connect Using GitHub'
nextUrl: '/docs/appflow/quickstart/github'
tableOfContents: false
---

Appflow works directly with Git version control and uses your code base
as the source of truth for Deploy and Package builds. In order for Appflow to access your code, you can choose to integrate directly using a hosting service like GitHub or Bitbucket, or you can push your code directly to Appflow.

## Prerequisites
Before you can connect your application to Appflow, make sure you have done the following:

* [Install the Ionic CLI locally](/docs/cli#installation)
* Have an existing Ionic app or [start a new one](/docs/cli/commands/start/)

## Create an App in the Appflow Dashboard
You'll need to create an app in the [Appflow dashboard](https://dashboard.ionicframework.com) before you can connect it to your git repo.
From the main page, you should see a `New App` button in the top right corner. If you don't have any apps yet,
you'll see a button to create your first one in the middle of the screen. Simply enter a name for your application
and click `Create`.

![Create A New App](/docs/assets/img/appflow/ss-create-app.png)

## Choose your Git Integration
Next, you'll need to decide how Appflow will access your source code. We suggest using [GitHub](https://github.com/),
[Bitbucket](https://bitbucket.org/), or [Bitbucket Server](https://bitbucket.org/product/enterprise)
if you're using them already. The integrations with these services are easy to configure and you'll
get some additional benefits like being able view the commits your builds came from and the changes on your
Git remote.

If you're not using one of these providers, you can also choose to push directly to Ionic.
Ionic git is *not* intended to be a Git host and we strongly suggest using GitHub, Bitbucket or another official git hosting service to backup your source code repository.

<docs-cards>
  <docs-card header="Connect using GitHub" href="/docs/appflow/quickstart/github" icon="/docs/assets/icons/guide-github-icon.png">
    <p>Connect your app to a repo on GitHub.</p>
  </docs-card>

  <docs-card header="Connect using Bitbucket" href="/docs/appflow/quickstart/bitbucket" icon="/docs/assets/icons/guide-bitbucket-icon.png">
    <p>Connect your app to a repo on Bitbucket.</p>
  </docs-card>

  <docs-card header="Connect using Bitbucket Server" href="/docs/appflow/quickstart/bitbucket-server" icon="/docs/assets/icons/guide-bitbucket-icon.png">
    <p>Connect your app to a repo using an on-premise Bitbucket Server instance.</p>
    <b>Note: This feature is only available on our Scale plan.</b>
  </docs-card>

  <docs-card header="Connect using Ionic" href="/docs/appflow/quickstart/ionic-remote" icon="/docs/assets/icons/guide-ionic-icon.png">
    <p>Connect your app directly to Ionic if you are not using one of the supported Git hosting services.</p>
  </docs-card>
</docs-cards>
