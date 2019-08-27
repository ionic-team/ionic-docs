---
title: 'Install the Appflow SDK'
previousText: 'Connect your Repo'
previousUrl: '/docs/appflow/quickstart/connect'
nextText: 'Push a Commit'
nextUrl: '/docs/appflow/quickstart/push'
---

In order to take advantage of some of the best Appflow features, like deploying live updates to your app and bypassing the app stores, you'll need to install the Appflow SDK (also known as the Ionic Deploy plugin). The Appflow SDK comes with Ionic Appflow's Deploy feature for detecting and syncing your app with updates that you've pushed to channels.

## Installing the Appflow SDK from the Dashboard (Recommended)

To install the Appflow SDK plugin from the Dashboard, follow the instructions provided by clicking "Install Instructions" on the Channels list in the Appflow Dashboard.

![Install Instructions](/docs/assets/img/appflow/ss-appflow-sdk-install.png)

## Installing the Appflow SDK Manually

To install the plugin manually, run the following command in the root directory of your Ionic app, making sure to substitute the correct values for your app:

```shell
ionic deploy add  \
    --app-id="YOUR_APP_ID" \
    --channel-name="YOUR_CHANNEL_NAME" \
    --update-method="background|auto|none" \
```

You can also run `ionic deploy add` and the CLI will prompt you for the neccessary values.

<blockquote>
  NOTE: The plugin delays the cordova ready event until it finish checking for updates and sets the preference <b>AutoHideSplashScreen</b> cordova preference to false in the config.xml which makes the Splash Screen to not go away automatically. All Ionic templates run
<code>this.splashScreen.hide();</code> on cordova ready event by default, but if it was removed it should be added back. Alternatively the app can set the <b>AutoHideSplashScreen</b> cordova preference to true in you config.xml to override the value added by the plugin, but that can lead to the Splash Screen going away before the download is complete.
</blockquote>

### Plugin Variables

* `--app-id` is the ID of the app in Ionic Appflow.
* `--channel-name` is the name of the [Channel](/docs/appflow/deploy/channels) you'd like the app to listen to for updates. 
 * Make sure to use the *exact* name of your Channel, including the exact casing!
* `--update-method` is one of `background | auto | none`. This determines how your application responds when a new live update is available for download.

You can read more about the available [plugin variables in our API documentation](/docs/appflow/deploy/api#plugin-variables).

## Commit your changes

After you've installed the plugin, be sure to commit the changes made to your `config.xml` and `package.json` files.

<command-line> <command-prompt>git add . # stage any changes</command-prompt> <command-prompt>git commit -m "added appflow sdk" # commit staged changes</command-prompt> </command-line>