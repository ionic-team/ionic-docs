---
title: 'Deploy a Live Update'
previousText: 'Push a Commit'
previousUrl: '/docs/appflow/quickstart/push'
nextText: 'Build a Native Binary'
nextUrl: '/docs/appflow/quickstart/package'
---

Now that we've [installed the Appflow SDK ](/docs/appflow/quickstart/installation) and [pushed a commit](/docs/appflow/quickstart/push) to the Dashboard, we'll walk through the process of deploying a live update to a device.

## Overview

The Ionic Deploy feature works by using the installed Appflow SDK in your native application to listen to a particular Deploy [Channel](/docs/appflow/deploy/channels).

When a Deploy build is assigned to a Channel, that update will be deployed to user devices running binaries that are configured to listen to the specified Channel.

<blockquote>
<b>Nomenclature note:</b> The terms "Deploy build", "web build", "live deploy" and "live update" can be used interchangeably. They all refer to an update provided to your user's device by Appflow's Deploy feature.
</blockquote>

## Triggering a Deploy Build

In order to deploy a live update, you will first need to create a [Deploy build](/docs/appflow/deploy/builds).

There are two ways to do this:

* Click the `Start web build` icon from the `Commits` tab ![Start Web Build from Commits](/docs/assets/img/appflow/ss-start-web-build-commits.png)
* Click the `New web build` button in the top right from the `Deploy > Builds` tab ![New Web Build](/docs/assets/img/appflow/ss-new-web-build.png)

You will need to make sure you've selected the correct commit to deploy. If your plan includes [custom environments](/docs/appflow/automation/environments#custom-environments) and you have configured at least one, you can select one from the provided dropdown list. Finally, you can also pick a [Channel](/docs/appflow/deploy/channels) to automatically assign the build to once it completes successfully. For the purposes of this tutorial, we will leave both options blank.

Once the build begins you will be able to watch it's progress and look at the logs if you encounter errors.

![Running Web Build](/docs/assets/img/appflow/gif-start-web-build.gif)

## Web Build Versioning

Once the Web Build completed, it can be restricted to a specific native build number assigned in the Web Build details. A minimum and maximum equivalent build version number are specified, which designates whether or not the update is compatible. After doing this, new native builds that are distributed within an app store do not conflict with the current available update from AppFlow.

![Web build versioning](/docs/assets/img/appflow/web-build-versioning.png)

For more details and a simple use case see [this article](https://ionic.zendesk.com/hc/en-us/articles/360003567694-How-to-restrict-Deploy-updates-by-native-version).

## Assign the Build to a Channel

<blockquote>
  
<b>Note:</b> If you have trouble getting a successful build in the previous step, you can find answers to common Deploy build errors in
<a href="https://ionic.zendesk.com/hc/en-us/categories/360000410474-Deploy-Builds-Git-" target="_blank">this section of our knowledge base</a>.
</blockquote>

Once you have a successful Deploy build, you can assign it to the same Channel you configured the Appflow SDK to listen to when you installed it by clicking the `Assign to channel` button in the top right of the build detail page. You can also click the `Assign to channel` icon on the build in the `Deploy > Builds` tab and select the Channel from the dropdown. ![Assign to Channel](/docs/assets/img/appflow/gif-assign-to-channel.gif)

## Receiving a Live Update on a Device

For your application to receive a live update from Deploy, you'll need to run the app on a device or an emulator. The easiest way to do this is simply to use the [ionic cordova run](/docs/cli/commands/cordova-run) command to launch your local app in an emulator or a device connected to your computer.

<command-line> <command-prompt> ionic cordova run \[ios | android\] \[options\] </command-prompt> </command-line>

If the app is configured correctly to listen to the channel you deployed it to, the application should update immediately on startup if you're using the [auto update method](/docs/appflow/deploy/api#update_method).

If you're using the [background update method](/docs/appflow/deploy/api#update_method), just stay in the app for 30 seconds or so while the update is downloaded in the background. Then, close the application, reopen it again and you should see your update applied 🎉.

## Disabling Deploy for Development

Generally speaking, if you are developing using an emulator and live reload you probably do not want Deploy to be active, as it can intefere with your local development.

We recommend setting the [DisableDeploy](/docs/appflow/deploy/api#disabledeploy) preference to `true` in the `config.xml` file during local development. You can then set it back to `false` before building your binary for release by either manually setting it back or using the [native config feature](/docs/appflow/package/native-configs) if you're building your binaries with [Ionic Package](/docs/appflow/package/intro).