---
title: 'Connect Using Bitbucket Server'
previousText: 'Connect your Repo'
previousUrl: '/docs/appflow/quickstart/connect'
nextText: 'Install the Appflow SDK'
nextUrl: '/docs/appflow/quickstart/installation'
---

<blockquote>
  <p>The Bitbucket Server integration is only available on our **Scale** plan.
  Please <a href="/sales">contact us</a> if you require this feature.
  </p>
</blockquote>

If you are already using Bitbucket Server you can link your repository with Appflow to push code automatically.

## Prerequisites

In order to enable the integration with Appflow, you will need an existing repository on your Bitbucket Server instance.

## Setting up the Integration

Navigate to the `Git` section of the Settings tab in your app on the Appflow Dashboard and select the Bitbucket Server tab.

If this is your first time connecting you'll need to:

* Enter the URL for your Bitbucket Server instance
* Enter the [personal access token](https://confluence.atlassian.com/bitbucketserver/personal-access-tokens-939515499.html) for you repo

<blockquote>
  <p>
    <b>Note:</b> If the personal access token you use has read-only access,
    you will need to <a href="https://confluence.atlassian.com/bitbucketserver/managing-webhooks-in-bitbucket-server-938025878.html" target="_blank">
    create the webhook yourself</a> so that Appflow receives push events.
    A modal will pop up after you connect to your repo giving you the details you need to create the webhook.
    If you use a personal access token with admin privileges, this will be done
    automatically for you.
  </p>
</blockquote>

* Click the `Connect to Bitbucket Server` button

![Bitbucket Server Connect](/docs/assets/img/appflow/bitbucket-server-connect-app.png)

Then you can choose the repository to link from the list of available repos.

When you link to the repository, a webhook will be created and your commits will be sent to Appflow.