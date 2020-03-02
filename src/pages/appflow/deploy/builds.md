---
previousText: 'Setup'
previousUrl: '/docs/appflow/deploy/setup'
nextText: 'Channels'
nextUrl: '/docs/appflow/deploy/channels'
---

# Deploy Builds

## Overview

A deploy build is a build of your application that includes only the web assets (JavaScript, HTML, fonts, and images)
which can be shipped out to customer via [Deploy](/docs/appflow/deploy/intro).
Deploy builds can be created manually from the Ionic Dashboard, in the **Builds**
section under **Build** in the sidebar. You will be able to pick from the list of available commits that Appflow
knows about. If there are know available commits you will need to push a new commit to your Git remote in order for
it to show up in Appflow.
After picking the commit, select `Web Deploy` from the `Target platform` dropdown menu.

![Navigating to Deploy Builds](/docs/assets/img/appflow/deploy-builds-create-location.png)

A deploy build will do the following:

* `npm install` will run to install any dependencies you have.
* `npm run build` will run if a `build` script is detected in the `scripts` section of your `package.json` in order to build the web assets for your application.
* The `www` directory with your built application will be stored and made available for live updates via [Deploy](/docs/appflow/deploy/intro)
* You can find the history and status of your deploy builds in the side menu under `Builds` in the `Build` tab.

## Concurrency limits

Each account plan has a defined maximum amount of concurrent builds allowed (see [Plans Details](/pricing)).
This limit is enforced at the account level across different apps.

When you trigger a build, in the Appflow Dashboard you will notice that a build can have different statuses before it is processed:

* **Queued**: this means that your build is queued for the next available runner. Usually your build should not be in this state for more than few seconds.
* **Pending**: this means that you have reached your concurrent build limit and your build will continue when your current builds are completed.

After the build starts to be processed the statuses are:

* **Running**: the build is currently being processed. You can read the logs in the build details.
* **Successful**: the build terminated in a correct state.
* **Failed**: the build terminated in an incorrect state.

More concurrent builds can be added to your plan.
If you have a Starter or Starter + Add-on plan, you can get more builds by [upgrading your plan](https://dashboard.ionicframework.com/settings/billing).

If you have a Growth or Scale plan, please [contact us](https://ionic.zendesk.com/hc/en-us/requests/new).
