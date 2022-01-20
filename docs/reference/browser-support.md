---
title: Browser Support
---

<head>
  <title>Mobile Browser Support to Run Ionic Apps Anywhere</title>
  <meta
    name="description"
    content="Due to a foundation in web technologies, Ionic mobile apps can run anywhere the web runs — iOS, Android, browsers, PWAs, and more. Learn about browser support."
  />
</head>

Ionic's earliest goal was to make it easy to develop mobile apps using web technologies like HTML, CSS, and JavaScript. Because of this foundation in web technologies, Ionic can run anywhere the web runs — iOS, Android, browsers, PWAs, and more.

## Mobile Browsers

In pursuit of [adaptive styling](../core-concepts/fundamentals.md#adaptive-styling), Ionic fully supports and is well tested on the mobile platforms listed below:

| Framework |        Android         |  iOS  |
| :-------: | :--------------------: | :---: |
| Ionic v6  | 5.0+ with Chromium 60+ | 13.0+ |
| Ionic v5  |          5.0+          | 11.0+ |
| Ionic v4  |          4.4+          | 10.0+ |

:::note
Check the [latest Android stats](https://developer.android.com/about/dashboards/) and the [latest iOS stats](https://developer.apple.com/support/app-store/) for up-to-date platform information.
:::

### A Note on Android Support

Starting with Android 5.0, the webview was moved to a separate application that can be updated independently of Android. This means that most Android 5.0+ devices are going to be running a modern version of Chromium. However, there are a still a subset of Android devices whose manufacturer has locked the webview version and does not allow the webview to update. These webviews are typically stuck at the version that was available when the device initially shipped.

As a result, Ionic Framework v6 only supports Android devices and emulators running Android 5.0+ with a webview of Chromium 60 or newer. For context, this is the version that Stencil can support with no polyfills: https://stenciljs.com/docs/browser-support

To figure out what version of the webview a device is running, log `window.navigator.userAgent` to the console when inspecting the application using Chrome Dev Tools.

### A Note on Angular 13 Support

Angular's support policy for iOS is the two most recent major versions. At the time of release that is iOS 14 and 15. To support iOS 13, change the project target specified in the tsconfig.json from the default value of `es2015` to `es5`. Without this change an error of `Unexpected token '.' in promiseReactionJob` will occur on app startup in iOS 13.

## Desktop Browsers

Because Ionic is based on web technologies, it works just as well on desktop browsers as it does on mobile devices. For more information on desktop layouts, see [Cross Platform](../core-concepts/cross-platform.md#desktop).

|   Browser   | Ionic v6 | Ionic v5 | Ionic v4 |
| :---------: | :------: | :------: | :------: |
| **Chrome**  |   60+    |    ✔     |    ✔     |
| **Safari**  |   13+    |    ✔     |    ✔     |
|  **Edge**   |   79+    |   79+    |    ✔     |
| **Firefox** |   63+    |    ✔     |    ✔     |
|  **IE 11**  |  **X**   |  **X**   |  **X**   |

:::note
Check the docs for [Ionic Animations](../utilities/animations.md#browser-support) and [Ionic Gestures](../utilities/gestures.md#browser-support) for specific browser support related to those utilities.
:::
