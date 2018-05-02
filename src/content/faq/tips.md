---

---

# Developer Tips

**Updating Dependencies**
**Editors**


### Using a Debugger

The `debugger` keyword can be used to debug your application. When most browsers encounters a `debugger` statement, execution of JavaScript is stopped, and your browser will load its debugger. This can be used to set "breakpoints" in your application. For example, if you write a function that is not returning what you expect it to, you can add a debugger statement to the first line of the function.

```js
function myBrokenFunction() {
  debugger;
  // do other stuff
}
```

When your application runs, it will pause at this function. From there, you can use your browser's developer tools to only execute Javascript step-by-step. This allows you to see exactly which line or function call is causing your function to break.

### Changing the Mode

By default, when you view your app in the browser, Ionic will apply the iOS theme. However, since Ionic components adapt according to their platform, it is helpful to be able to view what your app looks like on Android. To do this, simply add `?ionic:mode=md` to the URL where your app is being served: `http://localhost:8100/?ionic:mode=md<`. This will change how Ionic sees which platform you are on.

>However, this will not change how the browser sees which platform you are on. To change how the browser sees which platform and device you are on, you must change the user-agent. To do this, open up Chrome DevTools, and toggle device mode on with <kbd>Ctrl+Shift+i</kbd>(<kbd>Cmd+Option+I</kbd> on Mac).

![app with a different mode](../assets/faq/tips/change-device-platform.png)

Selecting devices from the device dropdown will change the user-agent, as well as the dimensions of the viewport.
Between this and adding the <code>?ionic:mode=ios</code> URL param, you can check out how your app will look on a wide number of devices.


### Using the iOS Simulator
The iOS simulator allows you to test and debug your app before running it on an actual device. Before it can be used, we need to install
[Xcode](https://developer.apple.com/xcode/download/), Apple's IDE. The [Ionic CLI](ionic/cli) can then be used to run the app in the current directory on the simulator:

```bash
$ ionic cordova emulate ios -lc
```

Passing in the `-lc` flag will enable livereload and log console output to your terminal.
You can also use Xcode to launch the emulator and debug your app. Open up Xcode and open `../path-to-app/platforms/ios/myApp.xcodeproj`. After your app loads, you will be able to run it and see all console output inside of Xcode's output window.


### Using the Genymotion Android Emulator
While the Android SDK comes with a stock emulator, it can be very slow and unresponsive at times. [Genymotion](https://www.genymotion.com) is an alternate emulator that is faster, and allows you to emulate native functionality like GPS and camera.



### Remote Debugging - iOS and Safari
Safari can be used to debug an Ionic app on a connected iOS device. First, we need to enable Web Inspector on the connected device. Web Inspector can be found under `Settings > Safari > Advanced`. Next, head over to the Safari on your Mac and enable **Show Develop menu in menu bar** under `Safari > Preferences > Advanced`. The connected device should now appear in the **Develop** menu. From there, you can inspect it and use Safari's developer tools to debug your application!


### Remote Debugging - Android and Chrome
[Chrome DevTools](https://developers.google.com/web/tools/setup/workspace/setup-devtools) are a very powerful set of tools for debugging your application. When you use `ionic serve` to run your application in the browser, DevTools can be used to inspect elements, view console logs, profile your application, and much more.

In addition to using DevTools to debug your app in the browser, DevTools can be used to debug a remote physical Android device, or even a Genymotion emulator running your app. First off, we will need to have [adb](http://developer.android.com/tools/help/adb.html) installed. Once installed, if your device is connected, or an Android emulator is running, you should be able to see your device listed when you run the following command:

```bash
$ adb devices
```

Next, go to `chrome://inspect/#devices` in Chrome and inspect your Android device. Note: you may need to change the settings on your device to allow USB debugging. From there, you can use Chrome to debug your application just like it is in the browser!</p>



### Remote Debugging - VS Code Plugin
VSCode has a dedicated plugin for debugging apps built with Cordova. [The plugin](https://marketplace.visualstudio.com/items?itemName=vsmobile.cordova-tools) creates a bridge between the device and the debugger and allows you to set break points in your editor directly.
