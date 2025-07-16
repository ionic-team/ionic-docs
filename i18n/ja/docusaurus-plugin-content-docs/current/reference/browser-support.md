---
title: ブラウザサポート
---

<head>
  <title>Mobile Browser Support to Run Ionic Apps Anywhere</title>
  <meta
    name="description"
    content="Due to a foundation in web technologies, Ionic mobile apps can run anywhere the web runs — iOS, Android, browsers, PWAs, and more. Learn about browser support."
  />
</head>

Ionic の本来の目標は、HTML、CSS、JavaScript といった Web 技術を使用してモバイルアプリを開発することを簡単にすることでした。Ionic はこのウェブテクノロジーの基盤により、ウェブ、iOS、Android、ブラウザ、PWA など、どこでも実行できます。

## モバイルプラットフォーム

[スタイルの適用](../core-concepts/fundamentals.md#adaptive-styling)を追求するために, Ionic は以下のモバイルプラットフォームを完全にサポート、テストしています。:

| Framework |        Android         |  iOS  |
| :-------: | :--------------------: | :---: |
| Ionic v8  | 5.1+ with Chromium 89+ | 15.0+ |
| Ionic v7  | 5.1+ with Chromium 79+ | 14.0+ |
| Ionic v6  | 5.0+ with Chromium 60+ | 13.0+ |
| Ionic v5  |          5.0+          | 11.0+ |
| Ionic v4  |          4.4+          | 10.0+ |

:::note
最新のプラットフォームの情報については [latest Android stats](https://developer.android.com/about/dashboards/) と [latest iOS stats](https://developer.apple.com/support/app-store/) をご確認ください。
:::

### Android Support の注意点

Android 5.0 から、Webview は Android から独立して更新できる別のアプリケーションに移されました。これは、ほとんどの Android 5.0 以上のデバイスが Chromium の最新バージョンを実行していることを意味します。しかし、ウェブビューを更新することができない Android デバイスがまだ存在しています。これらのウェブビューは、通常、デバイスが最初に出荷されたときに利用可能だったバージョンに留まっています。

デバイスが実行している WebView のバージョンを調べるには、Chrome Dev Tools を使用してアプリケーションを検査する際に、コンソールに`window.navigator.userAgent`を記録してください。

## ブラウザ

Ionic はこれらのブラウザをサポートしています:

|   Browser   | Ionic v8 | Ionic v7 | Ionic v6 | Ionic v5 | Ionic v4 |
| :---------: | :------: | :------: | :------: | :------: | :------: |
| **Chrome**  |   89+    |   79+    |   60+    |    ✔     |    ✔     |
| **Safari**  |   15+    |   14+    |   13+    |    ✔     |    ✔     |
|  **Edge**   |   89+    |   79+    |   79+    |   79+    |    ✔     |
| **Firefox** |   75+    |   70+    |   63+    |    ✔     |    ✔     |
|  **IE 11**  |  **X**   |  **X**   |  **X**   |  **X**   |  **X**   |
