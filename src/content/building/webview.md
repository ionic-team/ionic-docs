---

---

# Web View

<p class="intro" markdown="1">
The Web View powers web apps in native devices. Ionic maintains a <a href="https://github.com/ionic-team/cordova-plugin-ionic-webview" target="_blank">Web View plugin</a> for apps integrated with [Cordova](/docs/faq/glossary#cordova). The plugin is provided by default when using the Ionic CLI. For apps integrated with [Capacitor](/docs/faq/glossary#capacitor), the Web View is automatically provided.
</p>

## iOS

For iOS devices, <a href="https://developer.apple.com/documentation/webkit/wkwebview" target="_blank">WKWebView</a> is the internal utility to provide a Web View shell for apps. Unfortunately, WKWebView has a few quirks.

### File Protocol

Cordova and Capacitor apps are hosted on a local HTTP server, so requests inside the Web View are made from the `http://` protocol. To avoid difficulties with the `file://` protocol, paths to local files should be rewritten to use the local HTTP server.

For example, `file:///path/to/web/asset` should be rewritten to `/path/to/web/asset`.

```typescript
TODO
```

### CORS

WKWebView enforces [CORS](/docs/faq/glossary#cors), so it's important that external services properly handle cross-origin requests. See <a href="https://enable-cors.org/" target="_blank">enable-cors.org</a> for more details.

If CORS cannot be implemented in the server, there is [a native plugin](/docs/native/http/) that performs HTTP requests in the native layer which bypasses CORS.

## Android

The [Web View for Android](https://developer.chrome.com/multidevice/webview/overview) is essentially a lightweight, evergreen Chrome.
