---
title: '安装 Appflow SDK'
previousText: '连接您的代码仓库'
previousUrl: '/docs/appflow/quickstart/connect'
nextText: '推送提交'
nextUrl: '/docs/appflow/quickstart/push'
---

为了利用一些最好的 Appflow 功能，如部署您的 应用程序的实时更新和绕过应用商店， 您需要安装 Appflow SDK (又称 Ionic Deploy 插件)。 Appflow SDK 带有Ionic Appflow 的部署功能，用于检测和同步 您的应用程序与您推送到频道的更新。

## 从仪表盘板安装 Appflow SDK (推荐)

点击应用流程控制面板中的频道列表中的 "安装说明"，以从仪表板安装 Appflow SDK 插件。

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