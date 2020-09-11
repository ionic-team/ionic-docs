---
title: 'Connect Using GitHub'
previousText: 'Connect Your Repo'
previousUrl: '/docs/appflow/quickstart/connect'
nextText: 'Install the Appflow SDK'
nextUrl: '/docs/appflow/quickstart/installation'
---

If you are already using [GitHub](https://github.com/)
you can link your repository with your Appflow app to push code automatically.

<iframe src="//fast.wistia.net/embed/iframe/mjequ3rpwu" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen width="620" height="349"></iframe>
<script src="//fast.wistia.net/assets/external/E-v1.js" async></script>

## Prerequisites
In order to enable the integration with your Appflow app you will need an existing repository on
GitHub. 

## Setting up the Integration
Navigate to the `Git` section of the app settings tab in your app on the
Appflow Dashboard choose the GitHub tab. If this is your first time connecting
you'll need to click the `Connect` button.
Then you can choose the repository to link from the list of available repos.

![Git Settings](/docs/assets/img/appflow/github-connect-app.png)

When you link the repository a webhook will be created for the repository
and events will be sent to Appflow so that we have access to any commits you
push to your repository.
