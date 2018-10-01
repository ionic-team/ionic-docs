# Builds

The [Git Workflow](/docs/pro/basics/git/) at the core of Ionic Pro allows you to push commits of your app code,
which can then be used to trigger two distinct types of builds.

## Deploy Builds

A deploy build is a build of your application that includes only the web assets (JavaScript, HTML, fonts, and images) which
can be shipped out to customer via [Deploy](/docs/pro/deploy/). Deploy builds are currently automatically triggered when
you push code to the Ionic Pro Remote or any branch that is connected to your app via the GitHub or Bitbucket integration.
The basic steps of the deploy build are as follows:

* `npm install` will run to install any dependencies you have.
* `npm run build` will run if a `build` script is detected in the `scripts` section of your `package.json` in order to build the web assets for your application.
* The `www` directory with your built application will be stored and made available for live updates via [Deploy](/docs/pro/deploy/)
* You can find the history and status of your deploy builds in the side menu under `Builds` in the `Deploy` tab.

<div style="text-align: center">
  <img style="width: 950px" src="/docs/assets/img/pro/deploy-builds-img.png">
</div>

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

<div style="text-align: center">
  <img style="width: 950px" src="/docs/assets/img/pro/package-builds-img.png">
</div>