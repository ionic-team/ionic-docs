---
title: Web View
---

<head>
  <title>Capacitor Web View for iOS and Android Apps - Ionic Framework</title>
  <meta
    name="description"
    content="What is a Web View? Web Views are a full screen and full-powered web browser. Read to learn more about Capacitor Web View on Ionic Framework apps."
  />
</head>

Web Viewは、ネイティブデバイス上のWebアプリを強化します。

[Capacitor](../reference/glossary.md#capacitor) と統合されたアプリでは、Web Viewは自動的に提供されます。

[Cordova](../reference/glossary.md#cordova)については、Ionicが<a href="https://github.com/ionic-team/cordova-plugin-ionic-webview" target="_blank">Web View のプラグイン</a>を管理しています。このプラグインは、Ionic CLIを使用する際にデフォルトで提供されます。

## Web Viewとは

Ionicアプリは[Web技術](../reference/glossary.md#web-standards)をつかって構築され、フルスクリーンでの表示、Webブラウザのすべての機能が使えるWeb Viewを使ってレンダリングされます。

最近のWeb Viewは、カメラ、センサー、GPS、スピーカー、Bluetoothなどのハードウェア機能のための組み込み<a href="https://whatwebcando.today" target="_blank">HTML5 APIs</a>を多数提供していますが、プラットフォーム固有のハードウェアAPIにアクセスする必要がある場合もあります。Ionicアプリでは、通常はJavaScript APIを利用してネイティブプラグインにアクセスしてブリッジする形でハードウェアAPIを利用することができます。

![webview architecture](/img/building/webview-architecture.png)

Ionic Web Viewプラグインは、最新のJavaScriptアプリケーションに特化しています。iOSとAndroidの両方で、アプリファイルは常に `http://` プロトコルを使ってデバイス上で動作する最適化されたHTTPサーバーにホストされます。

### CORS

Web Views enforce [CORS](../reference/glossary.md#cors), so it's important that external services properly handle cross-origin requests. See the [CORS FAQs](../troubleshooting/cors.md) for information on dealing with CORS in Ionic apps.

### Fileプロトコル

CordovaとCapacitorのアプリはローカルのHTTPサーバーでホストされており、`http://` プロトコルとして提供されます。ただし、一部のプラグインは `file://` プロトコルを利用してデバイスファイルにアクセスしようとします。`http://` と `file://` プロトコルの間にある問題を回避するためには、ファイルアクセスするパスをローカルのHTTPサーバに書き換える必要があります。例えば、 `file:///path/to/device/file` はアプリがレンダリングする前に `http://<host>:<port>/<prefix>/path/to/device/file` に書き換えなければなりません。

Capacitorアプリの場合、URIはこのように変換します。

```javascript
import { Capacitor } from '@capacitor/core';

Capacitor.convertFileSrc(filePath);
```

Cordovaアプリでは、[Ionic Web View plugin](https://github.com/ionic-team/cordova-plugin-ionic-webview)　がFile URIを変換するユーティリティ関数 `window.Ionic.WebView.convertFileSrc()` を提供しています。また、対応するIonic Nativeプラグインもあります。また、対応するIonic Nativeプラグインとして [`@awesome-cordova-plugins/ionic-webview`](../native/ionic-webview.md) があります。

### 実装

- **iOS**: <a href="https://developer.apple.com/documentation/webkit/wkwebview" target="_blank">WKWebView</a>
- **Android**: <a href="https://developer.chrome.com/multidevice/webview/overview" target="_blank">Web View for Android</a>
