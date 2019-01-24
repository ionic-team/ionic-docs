---
title: 'Deploy a Live Update'
previousText: 'Push a Commit'
previousUrl: '/docs/appflow/quickstart/push'
nextText: 'Build a Native Binary'
nextUrl: '/docs/appflow/quickstart/package'
---

Now that we've:
* [installed the Appflow SDK ](/docs/appflow/quickstart/installation) and
* [pushed a commit](/docs/appflow/quickstart/push) to the dashboard.

We'll walk through the process of deploying a live update to a device.
Deploy works by configuring the Appflow SDK to listen to a particular [channel](/docs/appflow/deploy/channels).
Whatever update is assigned to this channel will be deployed to devices running binaries that are
configured to listen to the channel.

## Trigger a Deploy Build

In order to deploy a live update you will first need to create a [deploy build](/docs/appflow/deploy/builds).
there are two ways to do this:
* Click the `Start web build` icon from the `Commits` tab
![Start Web Build from Commits](/docs/assets/img/appflow/ss-start-web-build-commits.png)
* Click the `New web build` button in the top right from the `Deploy > Builds` tab
![New Web Build](/docs/assets/img/appflow/ss-new-web-build.png)

You will need to make sure you've selected the correct commit to deploy, and you can optionally assign a
[custom environment](/docs/appflow/automation/environments#custom-environments) to customize you build process
if you have one and your plan includes them.
You can also pick a [channel](/docs/appflow/deploy/channels) to automatically assign the build to when it completes.
For the quickstart tutorial we will leave both options blank. Once the build begins you will be able to watch it's
progress and look at the logs if you encounter errors.

![Running Web Build](/docs/assets/img/appflow/gif-start-web-build.gif)

## Assign the Build to a Channel

<blockquote>
<b>Note:</b> If you have trouble getting a successful build in the previous step you can find answers to common deploy build errors in
<a href="https://ionic.zendesk.com/hc/en-us/categories/360000410474-Deploy-Builds-Git-" target="_blank">this section of our knowledge base</a>.
</blockquote>

Once you've got a successful build you can assign it to the same channel you configured the Appflow SDK to
listen to when you installed it by clicking the `Assign to channel` button in the top right of the build detail
page or clicking the `Assign to channel` icon on the build in the `Deploy > Builds` tab and selecting the channel
from the dropdown.

![Assign to Channel](/docs/assets/img/appflow/gif-assign-to-channel.gif)

## Run the Binary on a Device or Emulator

To see the app receive a live update you'll need to run the binary on a device or an emulator. The easiest
way to do this is simply to use the [ionic cordova run](/docs/cli/commands/cordova-run) command to launch
your local app in an emulator or a device connected to your computer. If the app is configured correctly to
listen to the channel you deployed it to you should see the update immediately if you're using the [auto update method](/docs/appflow/deploy/api#update_method)
or if you're using the [background update method](/docs/appflow/deploy/api#update_method) just stay in the app for 30 seconds or so while the update
is downloaded in the background then close the app and reopen it again and you should see your updates 🎉.


<command-line>
<command-prompt>
ionic cordova run [ios | android] [options]
</command-prompt>
</command-line>

## Disabling Deploy for Development

Generally speaking if you are developing using an emulator and live reload you probably do not want deploy
to be active as it can intefere with and deploy over you local changes. One common use case it to set the
[DisableDeploy](/docs/appflow/deploy/api#disabledeploy) preference to `true` in the `config.xml` file during
development and setting it back to `false` before building you binary for release by either manually setting it
back or using the [native config feature](/docs/appflow/package/native-configs)
if you're building your binaries with [Ionic Package](/docs/appflow/package/intro).
