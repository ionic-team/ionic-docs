---
previousText: 'Cross Platform'
previousUrl: '/docs/building/cross-platform'
nextText: 'Running on iOS'
nextUrl: '/docs/building/ios'
---

# Running An App

There are many different options to test native functionality depending on your target platforms and needs.

* Implement [Platform Detection](/docs/building/cross-platform) for the native functionality and test with `ionic serve`
* [Deploy to iOS](/docs/building/ios)
* [Deploy to Android](/docs/building/android)
* Deploy to iOS & Android instantly using [Ionic DevApp](/docs/building/running#ionic-devapp)

This article will focus on Ionic DevApp, as it includes the ability to test native functionality on a device.

## Ionic DevApp

Ionic DevApp extends the capabilities of Ionic Framework, making it easy to test apps directly on devices. DevApp offers a realtime view of changes as they're being made, with a rich library of pre-installed native plugins to test native features of the app.

There's no need to install complicated Native SDKs - all it takes is one simple command, `ionic serve`, and apps running anywhere DevApp is installed will be immediately available to preview, with LiveReload to refresh changes as soon as they're made.

### Getting started

First, download the Ionic DevApp. It is available in the iOS App Store as well as Google Play

<a href="https://itunes.apple.com/us/app/ionic-devapp/id1233447133?ls=1&amp;mt=8" target="_blank">
  <img style="width: 160px" src="/docs/assets/img/appstore.png" id="appstore-image">
</a>
<a href="https://play.google.com/store/apps/details?id=io.ionic.devapp&amp;hl=en" target="_blank">
  <img style="width: 160px" alt="Get it on Google Play" src="/docs/assets/img/playstore.png" id="playstore-image">
</a>

With DevApp installed, sign up or login to an Ionic Account.

> DevApp is a free service that comes with every Ionic Account.

## Serving the App

Make sure the device running DevApp and the computer are on the same network, then run `ionic serve` from the command line in the project's directory.

<command-line> <command-prompt>ionic serve</command-prompt> <command-output>

> <span class="green">ng run app:serve --host=0.0.0.0 --port=8100</span>   
>   
> [<span class="bold">INFO</span>] <span class="bold">Development server running!</span>   
>   
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Local: <span class="bold">http://localhost:8100</span>   
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;External: <span class="bold">http://192.168.1.169:8100</span>   
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DevApp: <span class="bold">StarTrack-ng@8100</span> on <span class="bold">ionic-home-router.network</span>   
>   
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="yellow">Use Ctrl+C to quit this process</span>   
>   
> [<span class="bold">INFO</span>] Browser window opened to <span class="bold">http://localhost:8100!</span> </command-output> </command-line>

With `ionic serve` running, open DevApp and select the app from the currently running app list.

![dev app with running app](/docs/assets/img/guides/running/dev-app-preview.png)

Now if the app calls any native functionality, DevApp can handle this and actually return the correct native implementation.

DevApp has a select list of plugin it supports, so check out the [DevApp docs](https://ionicframework.com/docs/pro/devapp/) for a complete list.