---
title: 'Live Updates'
previousText: 'Advanced Native Builds (iOS)'
previousUrl: '/docs/appflow/tutorial/ios'
nextText: 'Automations'
nextUrl: '/docs/appflow/tutorial/automations'
tableOfContents: false
---

This part of  exploring Appflow exercise consists Live Updates involving the following steps:
1. Live updates
   1. Installing Appflow SDK
   2. Building for native with SDK
   3. Build a web deploy build
   4. Assigning it to a channel


In order to take advantage of some of the best Appflow features, like deploying live updates to your app and bypassing the app stores, you'll need to install the Appflow SDK (also known as the Ionic Deploy plugin). The Appflow SDK comes with Ionic Appflow's Deploy feature for detecting and syncing your app with updates that you've pushed to channels.

## Installing the Appflow SDK from the Dashboard (Recommended)

When a web build is deployed/assigned to a Channel as Destination, that update will be deployed to user devices running binaries that are configured to listen to the specified Channel Destination.

To install the Appflow SDK plugin from the Dashboard,

1. Select destinations from the deployments in the side menu <br><br>
	![Appflow-destinations](/docs/assets/img/appflow/tutorial/destinations.png)<br><br>
2. Follow the instructions provided by clicking `Install Instructions` for the production channel on the Destinations list in the Appflow Dashboard.<br><br>
	![Appflow-add-sdk](/docs/assets/img/appflow/tutorial/add-sdk.png)<br><br>

The background method is selected by default.

***To know more about the update methods that are available refer the [docs here](https://ionicframework.com/docs/appflow/deploy/api#update-method)***

Or  You can also run `ionic deploy add` and the CLI will prompt you for the necessary values.

Once you copy and paste the command in the root of your project the plugin is installed and you should see the following success message.

```
[OK] cordova-plugin-ionic variables correctly added to the iOS project
[OK] cordova-plugin-ionic variables correctly added to the Android project
[OK] Appflow Deploy plugin added to the project!
```

***For more information about the sdk installation and the different variable involved refer the [docs](https://ionicframework.com/docs/appflow/quickstart/installation)***

Once, you installed the sdk make sure you commit your changes to the git.

## Building for native with SDK installed

* The Live Update feature works by using the installed Appflow SDK in your native application to listen to a particular Deploy Channel Destination.

* Therefore you need to build for native after you have installed the sdk. You can refer to our previous chapter on how to quickly build an android debug build.

* When, the build is successful and you have the android debug apk, Install it onto a simulator or a device of your choice.

## Trigger a web deploy build

Let's do a web build to deploy as a Live Update but, to differentiate a live update from the previous version of the app that is available on the device you can make a trivial change of your choice that differentiates.

For example: open `src/app/home/home.page.html` in your editor

```
  <div id="container">
    <strong>THIS IS A LIVE UPDATE DEPLOYED USING THE IONIC APPFLOW!!!</strong>
    <p>Start with Ionic <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
  </div>
</ion-content>
```

Again, make sure you commit your changes to the git.

Now you need to trigger a build that can be used as a live update. Triggering a web build for Live update is the same as the one you triggered in part -1 of this exercise.

## Assigning it to a channel

Once, you have the web build from the new commit successful. All you need to do is assign it to a channel in destinations that you chose earlier. (production)

You can do that by selecting the deploy live updates option from the build log once it is successful.

![Appflow-deploy-update](/docs/assets/img/appflow/tutorial/deploy-update.png)<br><br>

Select the production channel from the dropdown and click deploy.

![Appflow-deploy-prod](/docs/assets/img/appflow/tutorial/deploy-prod.png)<br><br>

You can also see a list of all the deployments done so far from the destinations tab and selecting your channel.

![Appflow-deploy-history](/docs/assets/img/appflow/tutorial/deploy-history.png)<br><br>

Now, in the device or simulator in which you installed the apk, if you can lose the focus or close and re -open the application you should be able to see the update in  form of Live updates.

**Note: It might take a few seconds to fetch the live update.**

Voila! 🎉 You have successfully deployed a Live update and you can start leveraging the potential of the powerful Ionic Appflow!

<hr>

You can use this [repository](https://github.com/ionic-team/tutorial-appflow/tree/part-4_live_updates) to compare your starter project and make changes if necessary.

If you are facing any issues or need help understanding any of these concepts [contact support](https://ionic.zendesk.com/hc/en-us)
