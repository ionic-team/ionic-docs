---
title: Web View
---

<head>
  <title>iOSおよびAndroidアプリ用Capacitor Web View - Ionic Framework</title>
  <meta
    name="description"
    content="Web Viewとは何ですか？Web Viewはフルスクリーンでフル機能のWebブラウザです。Ionic FrameworkアプリでのCapacitor Web Viewについて詳しく学びましょう。"
  />
</head>

Web View は、ネイティブデバイス上の Web アプリを強化します。

[Capacitor](../reference/glossary.md#capacitor) と統合されたアプリでは、Web View は自動的に提供されます。

[Cordova](../reference/glossary.md#cordova)については、Ionic が<a href="https://github.com/ionic-team/cordova-plugin-ionic-webview" target="_blank">Web View のプラグイン</a>を管理しています。このプラグインは、Ionic CLI を使用する際にデフォルトで提供されます。

## Web View とは

Ionic アプリは[Web 技術](../reference/glossary.md#web-standards)をつかって構築され、フルスクリーンでの表示、Web ブラウザのすべての機能が使える Web View を使ってレンダリングされます。

最近の Web View は、カメラ、センサー、GPS、スピーカー、Bluetooth などのハードウェア機能のための組み込み<a href="https://whatwebcando.today" target="_blank">HTML5 APIs</a>を多数提供していますが、プラットフォーム固有のハードウェア API にアクセスする必要がある場合もあります。Ionic アプリでは、通常は JavaScript API を利用してネイティブプラグインにアクセスしてブリッジする形でハードウェア API を利用することができます。

![Diagram illustrating the architecture of a Web View in Ionic apps, showing the bridge between native app components and web components.](/img/building/webview-architecture.png 'Web View Architecture Diagram')

Ionic Web View プラグインは、最新の JavaScript アプリケーションに特化しています。iOS と Android の両方で、アプリファイルは常に `http://` プロトコルを使ってデバイス上で動作する最適化された HTTP サーバーにホストされます。

### CORS

Web View は[CORS](../reference/glossary.md#cors)を強制するため、外部サービスがクロスオリジンリクエストを適切に処理することが重要です。Ionic アプリで CORS を処理する方法については、[CORS FAQs](../troubleshooting/cors.md)を参照してください。

### File プロトコル

Cordova と Capacitor のアプリはローカルの HTTP サーバーでホストされており、`http://` プロトコルとして提供されます。ただし、一部のプラグインは `file://` プロトコルを利用してデバイスファイルにアクセスしようとします。`http://` と `file://` プロトコルの間にある問題を回避するためには、ファイルアクセスするパスをローカルの HTTP サーバに書き換える必要があります。例えば、 `file:///path/to/device/file` はアプリがレンダリングする前に `http://<host>:<port>/<prefix>/path/to/device/file` に書き換えなければなりません。

Capacitor アプリの場合、URI はこのように変換します。

```javascript
import { Capacitor } from '@capacitor/core';

Capacitor.convertFileSrc(filePath);
```

Cordova アプリの場合、[Ionic Web View plugin](https://github.com/ionic-team/cordova-plugin-ionic-webview)は、File URI を変換するためのユーティリティ関数を提供します：`window.Ionic.WebView.convertFileSrc()`。対応する Ionic Native プラグインもあります：[`@awesome-cordova-plugins/ionic-webview`](https://danielsogl.gitbook.io/awesome-cordova-plugins/ionic-webview)。

### 実装

- **iOS**: <a href="https://developer.apple.com/documentation/webkit/wkwebview" target="_blank">WKWebView</a>
- **Android**: <a href="https://developer.android.com/reference/android/webkit/WebView" target="_blank">WebView for Android</a>
