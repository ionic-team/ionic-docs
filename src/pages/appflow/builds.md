# Builds

## Introduction

The [Git Workflow](/docs/appflow/basics/git/) at the core of Ionic Appflow allows you to push commits of your app code,
which can then be used to trigger two distinct types of builds: Deploy and Package Builds.

## Deploy Builds

A deploy build is a build of your application that includes only the web assets (JavaScript, HTML, fonts, and images)
which can be shipped out to customer via [Deploy](/docs/appflow/deploy/).
Deploy builds can be created manually from the Ionic Dashboard, in the **Builds**
section under **Deploy** in the sidebar. You will be able to pick from the list of available commits that Appflow
knows about. If there are know available commits you will need to push a new commit to your Git remote in order for
it to show up in Appflow.

<div style="text-align: center">
  <img style="width: 950px" src="/img/pro/deploy-builds-create-location.png">
</div>

A deploy build will do the following:

* `npm install` will run to install any dependencies you have.
* `npm run build` will run if a `build` script is detected in the `scripts` section of your `package.json` in order to build the web assets for your application.
* The `www` directory with your built application will be stored and made available for live updates via [Deploy](/docs/pro/deploy/)
* You can find the history and status of your deploy builds in the side menu under `Builds` in the `Deploy` tab.

## Package Builds

A package build is a native build of your application that is platform specific and can run on a physical device.
Package builds produce `apk` files for Android and `ipa` files for iOS. Currently package builds are only available
to customers on one of the paid plans and must manually be triggered from the dashboard.
The basic steps of the package build are as follows:

* `npm install` will run to install any dependencies you have.
* `npm run build` will run if a `build` script is detected in the `scripts` section of your `package.json` in order to build the web assets for your application.
* `cordova platform add [ios|android]` will run with the platform you have configured `NOTE:` *DO NOT* commit your `platforms` directory as this will cause your build to fail.
* `cordova build [ios|android]` will run with the platform and options you have configured and generate the `ipa` or `apk` file
* The generated `ipa` or `apk` will be stored and available for you to download from the dashboard
* You can find the history and status of your package builds as well as download successful builds in the side menu under `Builds` in the `Package` tab.


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
If you have a Starter or Developer plan, you can get more builds by [upgrading plan](https://dashboard.ionicframework.com/settings/billing).
If you have a Teams or Business plan, please [contact us](https://ionic.zendesk.com/hc/en-us/requests/new).