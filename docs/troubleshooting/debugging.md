---
title: Debugging
---

<head>
  <title>Debugging Guide for Apps in iOS Safari and Android Chrome</title>
  <meta
    name="description"
    content="Ionic Framework's ultimate guide to debugging apps in iOS Safari and Android Chrome. Read our debugging guide to get started with your Ionic apps today."
  />
</head>

<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/akh6V6Yw1lw"
  frameborder="0"
  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>

## Live Reload

Live Reload is useful for debugging native functionality (such as plugins) on device hardware. Rather than deploy a new native binary each time you make a code change, it reloads the browser (or WebView) when changes in the app are detected. [Learn more here](../cli/livereload.md).

## iOS and Safari

Safari can be used to debug an Ionic app on a connected iOS device or iOS simulator.

First, on the iOS device, enable **Web Inspector** from Settings > Safari > Advanced.

Next, open Safari on a Mac then enable **Show Develop menu in menu bar** under Safari > Preferences > Advanced.

Run the iOS simulator or connect your iOS device to your Mac, then run the Ionic app that you want to debug.

Within Safari, select **Develop** in the toolbar. In the dropdown menu options, you should see the name of your device and app. Hover over the app name and click on **localhost**. This will open a new window with the Safari Developer Tools - use them to inspect and debug the Ionic app running on your device.

## Android and Chrome

Use Google Chrome's DevTools to debug an app when it is running in the browser using the `ionic serve` command, deployed to an emulator, or on a physical device.

To inspect a physical device, first you need to have developer mode enabled. Connect your Android device to the computer then go to `Settings > About` scroll to `Build Number` and tap that 7 times. This will activate a new option in the **Settings** menu called **Developer Options**.

Next, go to `Settings > Developer Options` and ensure that the developer options switch is toggled on. Scroll down to **USB Debugging** and ensure that it is also enabled. Developer Options & USB Debugging are enabled by default in the Android emulator.

Open the Chrome browser and navigate to the URL `chrome://inspect/#devices`. Your connected Android device should show up in the list of Remote Targets.

On your device, open the Ionic app that you would like to debug using Chrome.

With your app running on the device, head back to Chrome and click on **inspect** under your device in the list of remote targets. This will open the Chrome Developer Tools in a new window. You will then be able to use all of the Chrome DevTools to debug the application as it runs on your device.

:::note
The app preview may not automatically appear when you open Chrome Developer Tools due to a minor bug. To make it appear, click on the **Elements** tab then click on any DOM element then toggle off and on any CSS rule and the app preview window will appear.
:::

## Debugging with Visual Studio locally in Chrome (both Android & iOS)

[Visual Studio Code](https://code.visualstudio.com/) can also be used to debug an Ionic app running in the Chrome web browser.

To do this, run your app in the browser using `ionic serve`. Take note of the port that your app is running on. Next, open your Ionic project using Visual Studio Code.

In the far-left vertical menu within VS Code, click on the `run` icon. If you are configuring this for the first time in your project, click on the option to create a `launch.json` file. Select **Chrome** from the environment options dropdown. This will automatically generate a `launch.json` file with configurations for launching Chrome against localhost.

Make sure that the port used in the url property of your `launch.json` file matches the port that you observed earlier when you ran `ionic serve`. Using an incorrect port number will not work.

In the debug target dropdown menu, select **Launch against Chrome**, then click run. This will open a new instance of the Chrome browser and VS code will attach to it. You can set breakpoints and use the other debugging tools within VS Code while your app is running in Chrome.

## Debugging with Visual Studio Code in Android

[Visual Studio Code](https://code.visualstudio.com/) has a dedicated plugin for debugging apps that run in an Android WebView.

[The plugin](https://marketplace.visualstudio.com/items?itemName=mpotthoff.vscode-android-webview-debug) creates a bridge between the device and the Visual Studio Code developer tools and permits debugging right from the editor.

In order to use this plugin to debug your Ionic apps, first install it then start your app in the Android emulator or connect your Android device and run the app. You may need to enable USB debugging on your Android device.

In the root of your Ionic project, create a folder called `.vscode` and inside that folder create a file called `launch.json`. Inside `launch.json`, enter the following code to configure the plugin to debug Ionic apps:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "android-webview",
      "request": "attach",
      "name": "Attach to Android WebView",
      "webRoot": "${workspaceFolder}/www",
      "sourceMaps": true,
      "sourceMapPathOverrides": {
        "webpack:/*": "${workspaceFolder}/*"
      }
    }
  ]
}
```

Next, launch the debugging process, selecting your device and Ionic app. VS Code will attach to both the Android device and Ionic app and you can now debug your app, which includes setting breakpoints.

:::note
If you are unable to set breakpoints and get an error saying, **"Breakpoint ignored because generated code not found (source map problem?)"** it means that the paths to the transpiled javascript files are incorrect. Use the `.scripts` command in the Debug console to see the loaded scripts. Make sure the paths of the scripts are correct by experimenting with different values in the `sourceMapPathOverrides` key in your `launch.json` configuration file.
:::
