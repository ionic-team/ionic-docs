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

Ionicの本来の目標は、HTML、CSS、JavaScriptといったWeb技術を使用してモバイルアプリを開発することを簡単にすることでした。Ionicはこのウェブテクノロジーの基盤により、ウェブ、iOS、Android、ブラウザ、PWAなど、どこでも実行できます。

## モバイルブラウザ

[スタイルの適用](../core-concepts/fundamentals.md#adaptive-styling)を追求するために, Ionicは以下のモバイルプラットフォームを完全にサポート、テストしています。:

| Framework |        Android         |  iOS  |
| :-------: | :--------------------: | :---: |
| Ionic v7  | 5.1+ with Chromium 79+ | 14.0+ |
| Ionic v6  | 5.0+ with Chromium 60+ | 13.0+ |
| Ionic v5  |          5.0+          | 11.0+ |
| Ionic v4  |          4.4+          | 10.0+ |

:::note
最新のプラットフォームの情報については [latest Android stats](https://developer.android.com/about/dashboards/) と [latest iOS stats](https://developer.apple.com/support/app-store/) をご確認ください。
:::

### Android Supportの注意点

Android 5.0から、WebviewはAndroidから独立して更新できる別のアプリケーションに移されました。これは、ほとんどのAndroid 5.0以上のデバイスがChromiumの最新バージョンを実行していることを意味します。しかし、ウェブビューを更新することができないAndroidデバイスがまだ存在しています。これらのウェブビューは、通常、デバイスが最初に出荷されたときに利用可能だったバージョンに留まっています。

デバイスが実行しているWebViewのバージョンを調べるには、Chrome Dev Toolsを使用してアプリケーションを検査する際に、コンソールに`window.navigator.userAgent`を記録してください。

## デスクトップブラウザ

Ionicはウェブ技術をベースにしているため、モバイルデバイスと同じようにデスクトップブラウザーでも動作します。デスクトップのレイアウトについては、[クロスプラットフォーム](../core-concepts/cross-platform.md#desktop)を参照してください。

|   Browser   | Ionic v7 | Ionic v6 | Ionic v5 | Ionic v4 |
| :---------: | :------: | :------: | :------: | :------: |
| **Chrome**  | 79+      | 60+      | ✔        | ✔        |
| **Safari**  | 14+      | 13+      | ✔        | ✔        |
|  **Edge**   | 79+      | 79+      | 79+      | ✔        |
| **Firefox** | 70+      | 63+      | ✔        | ✔        |
|  **IE 11**  | **X**    | **X**    | **X**    | **X**    |

