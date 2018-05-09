---

---

# Running An App

After building out an app and adding native functionality, there will be a few different routes to test it out:

- Mock the native functionality and test in the browser
- Deploy to iOS and Android
- Deploy to device using Ionic DevApp

This article will focus on Ionic DevApp, as it includes the ability to test native functionality on a device.

## Ionic DevApp

Ionic DevApp extends the capabilities of Ionic Framework, making it easy to test apps directly on devices. DevApp offers a realtime view of changes as they're being made, with a rich library of pre-installed native plugins to test native features of the app. 

There’s no need to install complicated Native SDKs - all it takes is one simple command, `ionic serve`, and apps running anywhere DevApp is installed will be immediately available to preivew, with LiveReload to refresh changes as soon as they’re made.

### Getting started

First, download the Ionic DevApp. It is available in the iOS App Store as well as Google Play

<a href="https://itunes.apple.com/us/app/ionic-devapp/id1233447133?ls=1&amp;mt=8" target="_blank">
  <img style="width: 160px" src="../assets/img/appstore.png" id="appstore-image">
</a>
<a href="https://play.google.com/store/apps/details?id=io.ionic.devapp&amp;hl=en" target="_blank">
  <img style="width: 160px" alt="Get it on Google Play" src="../assets/img/playstore.png" id="playstore-image">
</a>

With DevApp installed, sign up or login in to an Ionic Account.

> Note: DevApp is a free service that comes with every Ionic Account.

## Serving the App

With DevApp installed, run `ionic serve` from the command line in the project's directory.

![ionic serve prompt](../assets/img/guides/running/ionic-serve.png)

With `ionic serve` running, open DevApp and select the app from the currently running app list.

![dev app with running app](../assets/img/guides/running/dev-app-preview.png)

Now if the app calls any native functionality, DevApp can handle this and actually return the correct native implementation.

Now DevApp has a select list of plugin it supports, so checkout the [DevApp docs](https://ionicframework.com/docs/pro/devapp/) for a complete list.