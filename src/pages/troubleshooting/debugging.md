---
previousText: ''
previousUrl: ''
nextText: 'Build Errors'
nextUrl: '/docs/troubleshooting/build'
---

# Remote Debugging

## iOS and Safari

Safari can be used to debug an Ionic app on a connected iOS device.

First, Web Inspector needs to be enabled on the connected device.

Web Inspector can be found under `Settings > Safari > Advanced`.

Next, head over to the Safari on a Mac and enable **Show Develop menu in menu bar** under `Safari > Preferences > Advanced`.

The connected device should now appear in the **Develop** menu.

From there, Safari's developer tools can be used to inspect and debug the app.

## Android and Chrome

Chrome DevTools can be used to debug an app when it is running in the browser through `ionic serve`, deployed to an emulator, or a physical device.

To inspect an emulator or physical device, go to `chrome://inspect/#devices` in Chrome, and select the remote target which has the running app.

> Note: Physical devices might need to have developer mode enabled in order to debug from Chrome.


## Visual Studio Code

<a href="https://code.visualstudio.com/" target="_blank">Visual Studio Code</a> has a dedicated plugin for debugging apps built with Cordova.

<a href="https://marketplace.visualstudio.com/items?itemName=vsmobile.cordova-tools" target="_blank">The plugin</a> creates a bridge between the device and the Visual Studio Code developer tools and allows debugging to be done right in the editor.

