---
title: 'Connect Using GitLab Self-Managed'
sidebar_label: GitLab Self-Managed
previousText: 'Connect your Repo'
previousUrl: '/docs/appflow/quickstart/connect'
nextText: 'Install the Appflow SDK'
nextUrl: '/docs/appflow/quickstart/installation'
---

<blockquote>
  <p>The GitLab Self-Managed integration is only available on our **Scale** plan.
  Please <a href="/sales">contact us</a> if you require this feature.
  </p>
</blockquote>

If you are already using GitLab Self-Managed you can link your repository with Appflow to push code automatically.

## Prerequisites
In order to enable the integration with Appflow, you will need an existing repository on your GitLab Self-Managed instance.

## Setting up the Integration
Navigate to the `Git` section of the Settings tab in your app on the Appflow Dashboard and select the GitLab Self-Managed tab.

If this is your first time connecting you'll need to:
* Enter the URL for your GitLab Self-Managed instance
* Enter the [personal access token](https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html) with `api` scope
* Click the `Connect to GitLab Self-Managed` button

![GitLab Self-Managed Personal Access Token](/docs/assets/img/appflow/gitlab-self-managed-token.png)

![GitLab Self-Managed Connect](/docs/assets/img/appflow/gitlab-self-managed-connect-app.png)

Then you can choose the repository to link from the list of available repos.

When you link to the repository, a webhook will be created and your commits will be sent to Appflow.
