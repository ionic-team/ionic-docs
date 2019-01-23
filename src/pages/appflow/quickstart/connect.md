---
title: 'Connect your Repo'
previousText: 'Quickstart Home'
previousUrl: '/docs/appflow/quickstart'
nextText: 'Connect Using GitHub'
nextUrl: '/docs/appflow/quickstart/github'
---

Appflow works directly with Git version control and uses your code base as
as the source of truth for building Android & iOS binaries as well as web builds
which can be used to update your app in real time bypassing the app store release processes.
In order for Appflow to access you code we integrate directly with GitHub, Bitbucket, and Bitbucket Server
or allow you to push your code directly to Appflow via Git.

## Prerequisites
Before you can connect your application to Appflow you'll need to have made sure you've
done the following:

* Have [installed the Ionic CLI locally](/docs/cli#installation)
* Have an existing Ionic app or [start a new one](/docs/cli/commands/start/)

## Create an App in the Appflow Dashboard
You'll need to create an app in the Appflow dashboard before you can connect it to your git repo.
from the main page you should see a `New App` button in the top right or if you don't have any apps yet
you'll see a button to create your first one in the middle of the screen. Simply enter a name of your app
and click `Create`

![Create A New App](/docs/assets/img/appflow/ss-create-app.png)

## Choose your Git Integration
Next you'll need to how Appflow will access your source code. We suggest using [GitHub](https://github.com/),
[Bitbucket](https://bitbucket.org/), or [Bitbucket Server](https://bitbucket.org/product/enterprise)
if you're using them already as they are easy to configure and you'll 
get some additional benefits like being able view the commits your builds came from and the changes on you
Git remote. If you're not using one of these providers you can also choose to push directly to Ionic
but we are not intended to be a Git host and we suggest using one to backup and manage your repository.

<docs-cards>
  <docs-card header="Connect Using GitHub" href="/docs/appflow/quickstart/github">
    <p>Connect your app to a repo stored on GitHub.</p>
  </docs-card>

  <docs-card header="Connect Using Bitbucket" href="/docs/appflow/quickstart/bitbucket">
    <p>Connect your app to a repo stored on Bitbucket.</p>
  </docs-card>
  
  <docs-card header="Connect Using Bitbucket Server (On Prem)" href="/docs/appflow/quickstart/bitbucket-server">
    <b>This Feature is only available on our Scale plan.</b>
    <p>Connect your app to a repo stored in an on prem Bitbucket Server instance.</p>
  </docs-card>

  <docs-card header="Connect Using Ionic" href="/docs/appflow/quickstart/ionic-remote">
    <p>Push code changes directly to Ionic's git remote if you're not using one of the supported Git hosts.</p>
  </docs-card>
</docs-cards>
