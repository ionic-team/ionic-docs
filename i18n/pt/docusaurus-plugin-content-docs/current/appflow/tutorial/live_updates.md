---
title: 'Live Updates'
previousText: 'Advanced Native Builds (iOS)'
previousUrl: '/docs/appflow/tutorial/ios'
nextText: 'Automations'
nextUrl: '/docs/appflow/tutorial/automations'
tableOfContents: true
---

Appflow's Live Update feature let you update the UI and business logic of your app remotely, in real-time. Push HTML, JS, and CSS updates directly to your users without going through the app store to instantly fix bugs and ship new features.

In this step, we'll install the Appflow SDK then build and deploy a web build to a mobile device.

> Check out [this branch](https://github.com/ionic-team/tutorial-appflow/tree/part-4_live_updates) from this tutorial's companion app to compare with your starter project.

## Installing the Appflow SDK from the Dashboard (Recommended)

First, you'll need to install the Appflow SDK into your app.

To install the Appflow SDK plugin from the Dashboard:

1. Select destinations from the deployments in the side menu <br /><br /> ![Appflow-destinations](/docs/assets/img/appflow/tutorial/destinations.png)<br /><br />
2. Follow the instructions provided by clicking `Install Instructions` for the **production** channel on the Destinations list in the Appflow Dashboard.<br /><br /> ![Appflow-add-sdk](/docs/assets/img/appflow/tutorial/add-sdk.png)<br /><br />

The background method is selected by default. How it works: the app will check for updates in the background. If an update is available, it will be downloaded and installed while the user is using the older version. The next time they launch the app, the new version will be loaded.

***To learn more about the available update methods, refer to the [docs here](https://ionicframework.com/docs/appflow/deploy/api#update-method).***

You can also run `ionic deploy add` and the CLI will prompt you for the necessary values.

Once you copy and paste the command in the root of your project the plugin is installed and you should see the following success message:

```
[OK] cordova-plugin-ionic variables correctly added to the iOS project
[OK] cordova-plugin-ionic variables correctly added to the Android project
[OK] Appflow Deploy plugin added to the project!
```

***For more information about the SDK installation and the different variable involved refer to the [docs](https://ionicframework.com/docs/appflow/quickstart/installation).***

Once the SDK is installed, make sure to push all changes to your Git host.

## Building for native with SDK installed

The Live Update feature works by using the installed Appflow SDK in your native application to listen to a particular Deploy Channel Destination ("master" and "production" by default).

Therefore, you need to build for native after you have installed the sdk. You can refer to our previous chapter on how to quickly build an Android debug build.

When the build is successful, install the native artifact onto a simulator or a device of your choice.

## Trigger a web deploy build

Let's deploy a web build as a Live Update. To differentiate the live update from the previous version of the app currently running on your device, make a trivial change.

For example, open `src/app/home/home.page.html` in your editor:

```html
  <div id="container">
    <strong>THIS IS A LIVE UPDATE DEPLOYED USING IONIC APPFLOW!!!</strong>
    <p>Start with Ionic <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
  </div>
</ion-content>
```

Next, push your changes to your Git host, then [trigger a web build](/docs/appflow/tutorial/web-preview) that will be used as a live update.

## Assigning it to a channel

Once the web build is successful, assign it to the channel in Destinations that you chose earlier: production.

You can do that by selecting the deploy live updates option from the build log once it is successful.

![Appflow-deploy-update](/docs/assets/img/appflow/tutorial/deploy-update.png)<br /><br />

Select the production channel from the dropdown and click deploy.

![Appflow-deploy-prod](/docs/assets/img/appflow/tutorial/deploy-prod.png)<br /><br />

You can also see a list of all the deployments done so far from the destinations tab and selecting your channel.

![Appflow-deploy-history](/docs/assets/img/appflow/tutorial/deploy-history.png)<br /><br />

Next, on the device or simulator upon which you installed the APK, you can see the Live Update applied to the app by either placing the app into the background or closing then re-opening it.

**Note: It might take a few seconds to fetch the live update.**

Voila! 🎉 You have successfully deployed your first Live Update.
