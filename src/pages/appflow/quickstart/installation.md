---
title: 'Install the Appflow SDK'
previousText: 'Connect your Repo'
previousUrl: '/docs/appflow/quickstart/connect'
nextText: 'Push a Commit'
nextUrl: '/docs/appflow/quickstart/push'
---

In order to take advantage of some of the best Appflow features, like deploying live updates to your
app and bypassing the app stores, you'll need to install the Appflow SDK (also known as the
Ionic Deploy plugin). The Appflow SDK comes with Ionic Appflow's Deploy feature for detecting and syncing
your app with updates that you've pushed to channels.

## Installing the Appflow SDK from the Dashboard (Recommended)
To install the Appflow SDK plugin from the Dashboard, follow the instructions provided by clicking "Install Instructions"
on the Channels list in the Appflow Dashboard.

![Install Instructions](/docs/assets/img/appflow/ss-appflow-sdk-install.png)

## Installing the Appflow SDK Manually
To install the plugin manually, run the following command in the root directory of your Ionic app,
making sure to substitute the correct values for your app:

```shell
cordova plugin add cordova-plugin-ionic --save<br /> 
    --variable APP_ID="YOUR_APP_ID" <br />
    --variable CHANNEL_NAME="YOUR_CHANNEL_NAME" <br />
    --variable UPDATE_METHOD="background|auto|none" <br />
    --variable MAX_STORE="3"
```

### Plugin Variables
* `YOUR_APP_ID` is the ID of the app in Ionic Appflow.
* `YOUR_CHANNEL_NAME` is the name of the [Channel](/docs/appflow/deploy/channels) you'd like the app to listen to for updates.
 * Make sure to use the *exact* name of your Channel, including the exact casing!
* [MAX_STORE](/docs/appflow/deploy/api/#max_store) tells us how many previous versions of code to keep
inside your app. This enables you to revert to those versions quickly, or swap between versions if necessary. The default is recommended for most users.
* [UPDATE_METHOD](/docs/appflow/deploy/api/#update_method) is one of `background | auto | none`. This determines how your application responds when a new live update is available for download.

You can read more about the available [plugin variables in our API documentation](/docs/appflow/deploy/api/#plugin-variables).

## Commit your changes
After you've installed the plugin, be sure to commit the changes made to your `config.xml` and `package.json` files.

<command-line>
<command-prompt>git add . # stage any changes</command-prompt>
<command-prompt>git commit -m "added appflow sdk" #  commit staged changes</command-prompt>
</command-line>
