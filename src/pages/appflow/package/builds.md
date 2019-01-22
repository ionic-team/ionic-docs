---
previousText: 'Introduction'
previousUrl: '/docs/appflow/package/intro'
nextText: 'Generating Credentials'
nextUrl: '/docs/appflow/package/generating-credentials'
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
