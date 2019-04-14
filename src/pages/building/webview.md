---
previousText: 'Contributing'
previousUrl: '/docs/building/contributing'
nextText: 'Ionic Storage'
nextUrl: '/docs/building/storage'
---


# Web View

Web Viewは、ネイティブデバイスでWebアプリケーションを表示することができます。Ionicは、[Cordova](/docs/faq/glossary#cordova)と統合された<a href="https://github.com/ionic-team/cordova-plugin-ionic-webview" target="_blank">Web View plugin</a>をメンテナンスしています。Ionic CLIを使用すると、プラグインがデフォルトで提供されます。[Capacitor](/docs/faq/glossary#capacitor)を利用している場合、Web Viewは自動的に提供されます。

## Web Viewとは

Ionicアプリは[Web技術](/docs/faq/glossary#web-standards)をつかって構築され、フルスクリーンでの表示、Webブラウザのすべての機能が使えるWeb Viewを使ってレンダリングされます。

最近のWeb Viewは、カメラ、センサー、GPS、スピーカー、Bluetoothなどのハードウェア機能のための組み込み<a href="https://whatwebcando.today" target="_blank">HTML5 APIs</a>を多数提供していますが、プラットフォーム固有のハードウェアAPIにアクセスする必要がある場合もあります。Ionicアプリでは、通常はJavaScript APIを利用してネイティブプラグインにアクセスしてブリッジする形でハードウェアAPIを利用することができます。

![webview architecture](/docs/assets/img/building/webview-architecture.png)

Ionic Web Viewプラグインは、最新のJavaScriptアプリケーションに特化しています。iOSとAndroidの両方で、アプリファイルは常に `http://` プロトコルを使ってデバイス上で動作する最適化されたHTTPサーバーしてホストされます。

### CORS

Web Viewsは [CORS](/docs/faq/glossary#cors) を強制するため、外部サービスがcross-originリクエストを正しく処理することが重要です。詳しくは <a href="https://enable-cors.org/" target="_blank">enable-cors.org</a> と <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS" target="_blank">MDN</a> をご利用ください。

CORSがサーバーに実装されていない場合は、 CORSをバイパスするネイティブ層でHTTP要求を実行する[a native plugin](/docs/native/http/)があります。

#### サーバーチェックリスト

多くのWebフレームワークは、CORSをサポートするか、公式のアドオンがあります。例えば、Expressは <a href="https://github.com/expressjs/cors" target="_blank">`cors`</a> パッケージが提供されています。これがもし存在しない場合、CORSのために以下を設定する必要があります。

1. `http://localhost:8080` をオリジンとして許可 (<a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Origin" target="_blank">`Access-Control-Allow-Origin`</a>参照)
1. HTTP methodsを許可する必要があります (<a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Methods" target="_blank">`Access-Control-Allow-Methods`</a>参照)
1. HTTP headersを許可する必要があります (<a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Headers" target="_blank">`Access-Control-Allow-Headers`</a>参照)
1. サーバが <a href="https://developer.mozilla.org/en-US/docs/Glossary/Preflight_request" target="_blank">preflight requests</a> を処理できるようにする

### Fileプロトコル

CordovaとCapacitorのアプリはローカルのHTTPサーバーでホストされており、`http://` プロトコルとして提供されます。ただし、一部のプラグインは `file://` プロトコルを利用してデバイスファイルにアクセスしようとします。`http://` と `file://` プロトコルの間にある問題を会費するためには、ファイルアクセスするパスをローカルのHTTPサーバに書き換える必要がありあす。例えば、 `file:///path/to/device/file` はアプリがレンダリングする前に `http://<host>:<port>/<prefix>/path/to/device/file` に書き換えなければなりません。

Cordovaアプリの場合、[Ionic Web View plugin](https://github.com/ionic-team/cordova-plugin-ionic-webview) はファイルURLを変換するためのユーティリティ `window.Ionic.WebView.convertFileSrc()` があります。対応する [`@ionic-native/ionic-webview`](/docs/native/ionic-webview/) というIonic Nativeのプラグインもあります。

Capacitorアプリの場合、ファイルURIは自動的に変換されます。

### Implementations

* **iOS**: <a href="https://developer.apple.com/documentation/webkit/wkwebview" target="_blank">WKWebView</a>
* **Android**: <a href="https://developer.chrome.com/multidevice/webview/overview" target="_blank">Web View for Android</a>
