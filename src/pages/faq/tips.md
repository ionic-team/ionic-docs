---
previousText: 'Security'
previousUrl: '/docs/faq/security'
contributors:
  - rtpHarry
  - FdezRomero
  - brandyscarney
---

# Developer Tips

## Updating Dependencies

To update a [npm](https://www.npmjs.com/) dependency, run the following, where `<package-name>` is the package to update:

```shell
$ npm install &lt;package-name>@<version|latest&gt; --save
```

For instance, to update the `@ionic/angular` package to the release tagged `latest`, run:

```shell
$ npm install @ionic/angular@latest --save
```

It is recommended that packages get updated through the CLI since npm will now read package versions from the `package-lock.json` first.

## Editors

There are a lots of editors to choose from. Here are some of our favorites:

- [VSCode](https://code.visualstudio.com)
- [Atom](https://atom.io)
- [Webstorm](https://www.jetbrains.com/webstorm/)

VSCode is highly recommended as it includes many features and plugins out of the box.

## Using a Debugger

The `debugger` keyword can be used to debug an app. When most browsers encounters a `debugger` statement, running of JavaScript is stopped, and the browser will load its debugger. This can be used to set "breakpoints" in the app. For example, if a function that is not returning the correct value, the debugger can be used to step through the code and inspect variables.

```javascript
function myBrokenFunction() {
  debugger;
  // do other stuff
}
```

When an app runs, it will pause at this function. From there, the developer tools can be used to run pieces of JavaScript, line by line, and inspect where exactly the function breaks.

## Changing Mode

By default, when an app is viewed in the browser, Ionic will apply the `md` mode. However, since Ionic components adapt according to their platform, it is helpful to be able to view what this app looks like on iOS. To do this, add `?ionic:mode=ios` to the URL where the app is being served: `http://localhost:8100/?ionic:mode=ios`.

> However, this will not change how the browser sees which platform is currently being used. Platform is determined by device detection and inspecting the user-agent. So to change the platform, the user-agent must be changed. To do this, open up Chrome DevTools, and toggle device mode on with <kbd>Ctrl+Shift+i</kbd>(<kbd>Cmd+Option+I</kbd> on Mac).

![app with a different mode](/docs/assets/img/faq/tips/change-device-platform.png)

Selecting devices from the device dropdown will change the user-agent, as well as the dimensions of the viewport.

## Using the iOS Simulator

The iOS simulator enables testing and debugging of an app before it reaches an actual device. Before it can be used, [Xcode](https://developer.apple.com/xcode/download/), Apple's IDE, must be installed. The [Ionic CLI](/docs/cli) can then be used to run the app in the current directory on the simulator:

```shell
$ ionic cordova emulate ios -lc
```

Passing in the `-lc` flag will enable livereload and log console output to an terminal.

Xcode can also be used to launch the emulator and debug an app.
Open up Xcode and open `../path-to-app/platforms/ios/myApp.xcodeproj`.
After the app loads, console output and device logs will be printed inside of Xcode's output window.

## Using the Genymotion Android Emulator

While the Android SDK comes with a stock emulator, it can be slow and unresponsive at times. [Genymotion](https://www.genymotion.com) is an alternate emulator that is faster, and still allows accesses to native functionality like GPS and camera.

## Remote Debugging - iOS and Safari

Safari can be used to debug an Ionic app on a connected iOS device.
First, Web Inspector needs to be enabled on the connected device.
Web Inspector can be found under `Settings > Safari > Advanced`.
Next, head over to the Safari on an Mac and enable **Show Develop menu in menu bar** under `Safari > Preferences > Advanced`.
The connected device should now appear in the **Develop** menu.
From there, Safari's developer tools can be used to inspect and debug the app.

## Remote Debugging - Android and Chrome

Chrome DevTools can be used to debug an app when it is running in the browser through `ionic serve`, or deployed to an emulator or physical device.
To inspect a emulator or physical device, go to `chrome://inspect` in Chrome and select the target the has the running app.

> Note: Physical Devices might need to have developer mode enabled in order to debug from Chrome.


## Remote Debugging - VS Code Plugin

VSCode has a dedicated plugin for debugging apps built with Cordova.
[The plugin](https://marketplace.visualstudio.com/items?itemName=vsmobile.cordova-tools) creates a bridge between the device and the VSCode Devtools and allow debugging to be done right in the editor.

