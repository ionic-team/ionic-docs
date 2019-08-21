---
previousText: 'Introduction'
previousUrl: '/docs/appflow/package/intro'
nextText: 'Package Build Types'
nextUrl: '/docs/appflow/package/build-types'
---

# Package Builds

## Overview

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

## Performing a Build

Click on the **Code** tab of your App, you should be at your **Builds** list. Click on the **Package** button for the Build you'd like to get a Native binary for.

In the Package GUI you'll be able to choose the type of Build you want to perform, and the Cert you'd like to use. You'll then be taken to the History tab while the build completes. After the build completes, click Download and you'll get your native binary!

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
