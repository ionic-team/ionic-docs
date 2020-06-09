---
previousText: ''
previousUrl: ''
nextText: 'Build Errors'
nextUrl: '/docs/troubleshooting/build'
---

# Remote Debugging

## Live Reload

You can run your ionic app using live reload by <a href="https://ionicframework.com/docs/cli/livereload">following the steps here</a>

## iOS and Safari

Safari can be used to debug an Ionic app on a connected iOS device.

First, we need to download & install a special version of Safari browser called **Safari Technology Preview**. You can <a  href="https://developer.apple.com/safari/download">download it here</a>.

Once downloaded and installed, open Safari Technology Preview.

Open run the iOS simulator or connect your iOS device to your mac computer. Once this is done, run the ionic app that you want to debug.

If you are usuing a device, you need to perform an extra step. Go to `Settings > Safari > Advanced > Remote Inspection`, and then reopen your ionic app.

Open Safari Technology Preview and in the top toolbar select **Develop**, in the resulting dropdown menu, you should see the name of your device and app, hover over the app name and click on **localhost**. This will open a new window with the Safari Developer Tools which you can then use to debug the ionic app running on your device.

## Android and Chrome

Chrome DevTools can be used to debug an app when it is running in the browser through `ionic serve`, deployed to an emulator, or a physical device.

To inspect a physical device, first you need to have developer mode enabled in order to debug from Chrome. Connect your Android device to the computer then go to `Settings > About` scroll to `Build Number` and tap that 7 times. This will activate a new option in the **Settings** menu called **Developer Options**.

Next, go to `Settings > Developer Options` and ensure that the developer options switch is toggled on. Then scroll down to **USB Debugging** and ensure that it is also enabled. Developer Options & USB Debugging is enabled by default in the Android emulator.

Open Chrome browser and navigate to the URL `chrome://inspect/#devices`. Your connected Android device should show up in the list of Remote Targets.

On your device, open the Ionic app that you would like to debug using Chrome.

With your app running on the device, head back to Chrome and click on **inspect** under your device in the list of remote targets. This will open the Chrome Developer Tools in a new window. You will then be able to use all the Chrome Dev Tools to debug the application as it runs on your device.

> The app preview may not automatically appear when you open Chrome Developer Tools due to a minor bug. To make it appear, click on the **Elements** tab then click on any DOM element then toggle off and on any CSS rule and the app preview window will appear.

## Debugging with Visual Studio locally in Chrome (both Android & iOS)

Visual Studio Code can also be used to debug an Ionic app running in the Chrome web browser. 

To do this, run your app in the browser using `ionic server`. Take note of the port that your app is running on. This is important later. Next, open your Ionic project using Visual Studio Code. 

In the far-left vertical menu within VS Code, click on the `run` icon, just below `source control`. If you are configuring this for the first time in your project, click on the option to create a `launch.json` file. Select **Chrome** from the environment options dropdown. This will automatically generate a `launch.json` file with configurations for launching Chrome against localhost.

Make sure that the port used in the url property of your `launch.json` file matches the port that you observed earlier when you ran `ionic serve`. Using an incorrect port number will not work.

In the debug target dropdown menu, select **Launch against Chrome**, then click run. This will open a new instance of the Chrome browser and VS code will attach to it. You will then be able to set breakpoints and use the other debugging tools within VS Code while your app is running in Chrome.

## Debugging with Visual Studio Code in Android

<a href="https://code.visualstudio.com/" target="_blank">Visual Studio Code</a> has a dedicated plugin for debugging apps that run in an Android webview.

<a href="https://marketplace.visualstudio.com/items?itemName=mpotthoff.vscode-android-webview-debug" target="_blank">The plugin</a> creates a bridge between the device and the Visual Studio Code developer tools and allows debugging to be done right in the editor.

In order to use this plugin to debug your ionic apps, first install it and then start your app in the Android emulator or connect your Android device and run the app. You may need to enable USB debugging on your Android device.

In the root of your ionic project, create a folder called `.vscode` and inside that folder create a file called `launch.json`. Inside `launch.json` enter the following code to configure the plugin to debug ionic apps:

```
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

Next, press **F5** to begin debugging, then select your device and ionic app. VScode will then attach to your Android device and ionic app and you can then use it to debug your app including setting breakpoints.

> If you are unable to set breakpoints and get an error saying, **"Breakpoint ignored because generated code not found (source map problem?)"** it means that the paths to the transpiled javascript files are incorrect. Use the `.scripts` command in the Debug console to see the loaded scripts. Make sure the paths of the scripts are correct  by experimenting with different values in the `sourceMapPathOverrides` key in your `launch.json` configuration file.

