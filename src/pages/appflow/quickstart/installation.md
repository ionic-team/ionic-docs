---
title: 'Install the Appflow SDK'
previousText: 'Connect your Repo'
previousUrl: '/docs/appflow/quickstart/connect'
nextText: 'Push a Commit'
nextUrl: '/docs/appflow/quickstart/push'
---

In order to take advantage of some of the best Appflow features like deploying live updates to your
app and bypassing the app stores you'll need to install the Appflow SDK sometimes referred to as the
Ionic Deploy plugin. The Appflow SDK comes with Ionic Appflow's Deploy feature for detecting and syncing
your app with updates that you've pushed to channels.

To install the plugin, we recommend following the automatic instructions after clicking "Install Instructions"
on the channels list in the dashboard.

![Install Instructions](/docs/assets/img/appflow/ss-appflow-sdk-install.png)

To install the plugin manually, run the following command in the root of your Ionic app,
making sure to substitute the correct values for your app:

<command-line>
<command-prompt>cordova plugin add cordova-plugin-ionic --save --variable APP_ID="YOUR_APP_ID" --variable CHANNEL_NAME="YOUR_CHANNEL_NAME" --variable UPDATE_METHOD="background|auto|none" --variable MAX_STORE="3"</command-prompt>
</command-line>

Where `YOUR_APP_ID` is the ID of the app in Ionic Appflow, and `YOUR_CHANNEL_NAME`
is the name of a [channel](/docs/appflow/deploy/channels) you'd like the app to listen to for updates.
Make sure to use the exact name of your channel, including the exact casing.
[MAX_STORE](/docs/appflow/deploy/api/#max_store) tells us how many previous versions of code to keep
inside your app, this enables you to revert to those versions quickly, or swap between versions.
[UPDATE_METHOD](/docs/appflow/deploy/api/#update_method) is one of `background | auto | none`.
You can read about all the available [plugin variables in our api docs](/docs/appflow/deploy/api/#plugin-variables).

After you've installed the plugin be sure to commit the changes it may have made to your `config.xml` and `package.json` files.

<command-line>
<command-prompt>git add . # stage any changes</command-prompt>
<command-prompt>git commit -m "added appflow sdk" #  commit staged changes</command-prompt>
</command-line>
