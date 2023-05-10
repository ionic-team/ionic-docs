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
| Ionic v7  | 5.1+ with Chromium 79+ | 14.0+ |
| Ionic v6  | 5.0+ with Chromium 60+ | 13.0+ |
| Ionic v5  |          5.0+          | 11.0+ |
| Ionic v4  |          4.4+          | 10.0+ |

:::note
Check the [latest Android stats](https://developer.android.com/about/dashboards/) and the [latest iOS stats](https://developer.apple.com/support/app-store/) for up-to-date platform information.
:::

### A Note on Android Support

Starting with Android 5.0, the webview was moved to a separate application that can be updated independently of Android. This means that most Android 5.0+ devices are going to be running a modern version of Chromium. However, there are a still a subset of Android devices that are unable to have their webview updated. These webviews are typically stuck at the version that was available when the device initially shipped.

To figure out what version of the webview a device is running, log `window.navigator.userAgent` to the console when inspecting the application using Chrome Dev Tools.

## Desktop Browsers

Because Ionic is based on web technologies, it works just as well on desktop browsers as it does on mobile devices. For more information on desktop layouts, see [Cross Platform](../core-concepts/cross-platform.md#desktop).

|   Browser   | Ionic v7 | Ionic v6 | Ionic v5 | Ionic v4 |
| :---------: | :------: | :------: | :------: | :------: |
| **Chrome**  |   79+    |   60+    |    ✔     |    ✔     |
| **Safari**  |   14+    |   13+    |    ✔     |    ✔     |
|  **Edge**   |   79+    |   79+    |   79+    |    ✔     |
| **Firefox** |   70+    |   63+    |    ✔     |    ✔     |
|  **IE 11**  |  **X**   |  **X**   |  **X**   |  **X**   |
