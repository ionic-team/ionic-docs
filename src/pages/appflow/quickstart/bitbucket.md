---
title: 'Connect Using Bitbucket'
previousText: 'Connect your Repo'
previousUrl: '/docs/appflow/quickstart/connect'
nextText: 'Install the Appflow SDK'
nextUrl: '/docs/appflow/quickstart/installation'
---

If you are already using [Bitbucket Cloud](https://bitbucket.org/)
you can link your repository with your Appflow app to push code automatically.

## Prequisites
In order to enable the integration with your Appflow app you will need an existing repository on
Bitbucket. 

## Setting up the Integration
Navigate to the `Git` section of the app settings tab in your app on the Appflow Dashboard choose the Bitbucket Cloud tab. If this is your first time connecting
you'll need to click the `Connect` button.
Then you can choose the repository to link from the list of available repos.

![Bitbucket Connect](/docs/assets/img/appflow/bitbucket-connect-app.png)

When you link the repository a webhook will be created for the repository
and events will be sent to Appflow so that we have access to any commits you
push to your repository.

Only new commits will be shown. Historical commits prior to establishing a connection with BitBucket will not be displayed.
