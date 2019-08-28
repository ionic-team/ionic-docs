---
previousText: 'Contributing'
previousUrl: '/docs/building/contributing'
nextText: 'Ionic Storage'
nextUrl: '/docs/building/storage'
---


# Web View

The Web View powers web apps in native devices. Ionic maintains a <a href="https://github.com/ionic-team/cordova-plugin-ionic-webview" target="_blank">Web View plugin</a> for apps integrated with [Cordova](/docs/faq/glossary#cordova). The plugin is provided by default when using the Ionic CLI. For apps integrated with [Capacitor](/docs/faq/glossary#capacitor), the Web View is automatically provided.

## What is a Web View?

Ionic apps are built using [web technologies](/docs/faq/glossary#web-standards) and are rendered using Web Views, which are a full screen and full-powered web browser.

Modern Web Views offer many built-in <a href="https://whatwebcando.today" target="_blank">HTML5 APIs</a> for hardware functionality such as cameras, sensors, GPS, speakers, and Bluetooth, but sometimes it may also be necessary to access platform-specific hardware APIs. In Ionic apps, hardware APIs can be accessed through a bridge layer, typically by using native plugins which expose JavaScript APIs.

![webview architecture](/docs/assets/img/building/webview-architecture.png)

The Ionic Web View plugin is specialized for modern JavaScript apps. For both iOS and Android, app files are always hosted using the `http://` protocol with an optimized HTTP server that runs on the local device.

### CORS

Web Views enforce [CORS](/docs/faq/glossary#cors), so it's important that external services properly handle cross-origin requests. See <a href="https://enable-cors.org/" target="_blank">enable-cors.org</a> and <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS" target="_blank">MDN</a> for more details.

If CORS is not implemented on the server, there is [a native plugin](/docs/native/http/) that performs HTTP requests in the native layer which bypasses CORS.

#### Server Checklist

Many web frameworks may have support for CORS built in or as official add-ons, such as the <a href="https://github.com/expressjs/cors" target="_blank"><code>cors</code></a> package for Express. If this is not an option, the following must be implemented for CORS:

1. Allow `http://localhost:8080` as an origin (see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Origin" target="_blank"><code>Access-Control-Allow-Origin</code></a>)
2. Allow any necessary HTTP methods (see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Methods" target="_blank"><code>Access-Control-Allow-Methods</code></a>)
3. Allow any necessary HTTP headers (see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Headers" target="_blank"><code>Access-Control-Allow-Headers</code></a>)
4. Ensure the server can handle <a href="https://developer.mozilla.org/en-US/docs/Glossary/Preflight_request" target="_blank">preflight requests</a>

### File Protocol

Cordova and Capacitor apps are hosted on a local HTTP server and are served with the `http://` protocol. Some plugins, however, attempt to access device files via the `file://` protocol. To avoid difficulties between `http://` and `file://`, paths to device files must be rewritten to use the local HTTP server. For example, `file:///path/to/device/file` must be rewritten as `http://<host>:<port>/<prefix>/path/to/device/file` before being rendered in the app.

For Cordova apps, the [Ionic Web View plugin](https://github.com/ionic-team/cordova-plugin-ionic-webview) provides a utility function for converting File URIs: `window.Ionic.WebView.convertFileSrc()`. There is also a corresponding Ionic Native plugin: [`@ionic-native/ionic-webview`](/docs/native/ionic-webview/).

For Capacitor apps, converting file URIs is very similar:

```javascript
import { Capacitor } from '@capacitor/core';

Capacitor.convertFileSrc(filePath);
```

### Implementations

* **iOS**: <a href="https://developer.apple.com/documentation/webkit/wkwebview" target="_blank">WKWebView</a>
* **Android**: <a href="https://developer.chrome.com/multidevice/webview/overview" target="_blank">Web View for Android</a>