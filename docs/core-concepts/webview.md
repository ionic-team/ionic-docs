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

Web View は、ネイティブデバイス上の Web アプリを強化します。

[Capacitor](../reference/glossary.md#capacitor) と統合されたアプリでは、Web View は自動的に提供されます。

[Cordova](../reference/glossary.md#cordova)については、Ionic が<a href="https://github.com/ionic-team/cordova-plugin-ionic-webview" target="_blank">Web View のプラグイン</a>を管理しています。このプラグインは、Ionic CLI を使用する際にデフォルトで提供されます。

## Web View とは

Ionic アプリは[Web 技術](../reference/glossary.md#web-standards)をつかって構築され、フルスクリーンでの表示、Web ブラウザのすべての機能が使える Web View を使ってレンダリングされます。

最近の Web View は、カメラ、センサー、GPS、スピーカー、Bluetooth などのハードウェア機能のための組み込み<a href="https://whatwebcando.today" target="_blank">HTML5 APIs</a>を多数提供していますが、プラットフォーム固有のハードウェア API にアクセスする必要がある場合もあります。Ionic アプリでは、通常は JavaScript API を利用してネイティブプラグインにアクセスしてブリッジする形でハードウェア API を利用することができます。

![webview architecture](/img/building/webview-architecture.png)

Ionic Web View プラグインは、最新の JavaScript アプリケーションに特化しています。iOS と Android の両方で、アプリファイルは常に `http://` プロトコルを使ってデバイス上で動作する最適化された HTTP サーバーにホストされます。

### CORS

Web Views enforce [CORS](../reference/glossary.md#cors), so it's important that external services properly handle cross-origin requests. See the [CORS FAQs](../troubleshooting/cors.md) for information on dealing with CORS in Ionic apps.

### File プロトコル

Cordova と Capacitor のアプリはローカルの HTTP サーバーでホストされており、`http://` プロトコルとして提供されます。ただし、一部のプラグインは `file://` プロトコルを利用してデバイスファイルにアクセスしようとします。`http://` と `file://` プロトコルの間にある問題を回避するためには、ファイルアクセスするパスをローカルの HTTP サーバに書き換える必要があります。例えば、 `file:///path/to/device/file` はアプリがレンダリングする前に `http://<host>:<port>/<prefix>/path/to/device/file` に書き換えなければなりません。

Capacitor アプリの場合、URI はこのように変換します。

```javascript
import { Capacitor } from '@capacitor/core';

Capacitor.convertFileSrc(filePath);
```

Cordova アプリでは、[Ionic Web View plugin](https://github.com/ionic-team/cordova-plugin-ionic-webview)　が File URI を変換するユーティリティ関数 `window.Ionic.WebView.convertFileSrc()` を提供しています。また、対応する Ionic Native プラグインもあります。また、対応する Ionic Native プラグインとして [`@awesome-cordova-plugins/ionic-webview`](../native/ionic-webview.md) があります。

### 実装

- **iOS**: <a href="https://developer.apple.com/documentation/webkit/wkwebview" target="_blank">WKWebView</a>
- **Android**: <a href="https://developer.chrome.com/multidevice/webview/overview" target="_blank">Web View for Android</a>
