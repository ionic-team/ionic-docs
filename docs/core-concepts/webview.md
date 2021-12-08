---
---

# Web View

Web Views power web apps on native devices.

The Web View is automatically provided for apps integrated with [Capacitor](/docs/reference/glossary#capacitor).

For [Cordova](/docs/reference/glossary#cordova), Ionic maintains a <a href="https://github.com/ionic-team/cordova-plugin-ionic-webview" target="_blank">Web View plugin</a>. The plugin is provided by default when using the Ionic CLI.

## Web Viewとは

Ionicアプリは[Web技術](/docs/reference/glossary#web-standards)をつかって構築され、フルスクリーンでの表示、Webブラウザのすべての機能が使えるWeb Viewを使ってレンダリングされます。

最近のWeb Viewは、カメラ、センサー、GPS、スピーカー、Bluetoothなどのハードウェア機能のための組み込み<a href="https://whatwebcando.today" target="_blank">HTML5 APIs</a>を多数提供していますが、プラットフォーム固有のハードウェアAPIにアクセスする必要がある場合もあります。Ionicアプリでは、通常はJavaScript APIを利用してネイティブプラグインにアクセスしてブリッジする形でハードウェアAPIを利用することができます。

![webview architecture](/img/building/webview-architecture.png)

Ionic Web Viewプラグインは、最新のJavaScriptアプリケーションに特化しています。iOSとAndroidの両方で、アプリファイルは常に `http://` プロトコルを使ってデバイス上で動作する最適化されたHTTPサーバーしてホストされます。

### CORS

Web Views enforce [CORS](/docs/reference/glossary#cors), so it's important that external services properly handle cross-origin requests. See the [CORS FAQs](/docs/troubleshooting/cors) for information on dealing with CORS in Ionic apps.

### Fileプロトコル

CordovaとCapacitorのアプリはローカルのHTTPサーバーでホストされており、`http://` プロトコルとして提供されます。ただし、一部のプラグインは `file://` プロトコルを利用してデバイスファイルにアクセスしようとします。`http://` と `file://` プロトコルの間にある問題を回避するためには、ファイルアクセスするパスをローカルのHTTPサーバに書き換える必要がありあす。例えば、 `file:///path/to/device/file` はアプリがレンダリングする前に `http://<host>:<port>/<prefix>/path/to/device/file` に書き換えなければなりません。

For Capacitor apps, convert file URIs like so:

```javascript
import { Capacitor } from '@capacitor/core';

Capacitor.convertFileSrc(filePath);
```

For Cordova apps, the [Ionic Web View plugin](https://github.com/ionic-team/cordova-plugin-ionic-webview) provides a utility function for converting File URIs: `window.Ionic.WebView.convertFileSrc()`. There is also a corresponding Ionic Native plugin: [`@ionic-native/ionic-webview`](/docs/native/ionic-webview/).

### Implementations

* **iOS**: <a href="https://developer.apple.com/documentation/webkit/wkwebview" target="_blank">WKWebView</a>
* **Android**: <a href="https://developer.chrome.com/multidevice/webview/overview" target="_blank">Web View for Android</a>
