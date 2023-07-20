---
title: Progressive Web Apps in React
sidebar_label: Progressive Web Apps
---

<head>
  <title>Create Progressive Web Apps (PWA) in React - Ionic Framework</title>
  <meta
    name="description"
    content="Create progressive web apps in React with Ionic. Read our React PWA documentation for information on how to make React PWAs."
  />
</head>

## Making your React app a PWA with Vite

The two main requirements of a PWA are a <a href="https://developers.google.com/web/fundamentals/primers/service-workers/" target="_blank">Service Worker</a> and a <a href="https://developers.google.com/web/fundamentals/web-app-manifest/" target="_blank">Web Application Manifest</a>. While it's possible to add both of these to an app manually, we recommend using the [Vite PWA Plugin](https://vite-pwa-org.netlify.app/) instead.

To get started, install the `vite-plugin-pwa` package:

```shell
npm install -D vite-plugin-pwa
```

Next, update your `vite.config.js` or `vite.config.ts` file and add `vite-plugin-pwa`:

```javascript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [react(), VitePWA({ registerType: 'autoUpdate' })],
});
```

This minimal configuration allows your application to generate the Web Application Manifest and Service Worker on build.

For more information on configuring the Vite PWA Plugin, see the [Vite PWA "Getting Started" Guide](https://vite-pwa-org.netlify.app/guide/).

See the [Vite PWA "Deploy" Guide](https://vite-pwa-org.netlify.app/deployment/) for information on how to deploy your PWA.

## Making your React app a PWA with Create React App

:::note
As of Ionic CLI v7, Ionic React starter apps ship with Vite instead of Create React App. See [Making your React app a PWA with Vite](#making-your-react-app-a-pwa-with-vite) for Vite instructions.
:::

The two main requirements of a PWA are a <a href="https://developers.google.com/web/fundamentals/primers/service-workers/" target="_blank">Service Worker</a> and a <a href="https://developers.google.com/web/fundamentals/web-app-manifest/" target="_blank">Web Application Manifest</a>. While it's possible to add both of these to an app manually, a base project from Create React App (CRA) and the Ionic CLI provides this already.

PWA の主な要件は、 <a href="https://developers.google.com/web/fundamentals/primers/service-workers/" target="_blank">Service Worker</a> と <a href="https://developers.google.com/web/fundamentals/web-app-manifest/" target="_blank">Web Manifest</a> の 2 つです。これらの両方を手動でアプリに追加することは可能ですが、Create React App (CRA)と Ionic CLI のベースプロジェクトがこれらをすでに提供しています。

アプリケーションの `index.ts` には、`serviceWorker.unregister()` 関数の呼び出しがあります。基本 CRA が提供する service workers はオプトイン機能なので、有効にする必要があります。
有効にするには、`serviceWorker.register ()`を呼び出します。

```ts
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();
```

このパッケージを追加したら、 `ionic build` を実行し、 `build` ディレクトリを PWA としてデプロイする準備ができます。

:::note
デフォルトでは、React アプリのパッケージには、アプリアイコン用の Ionic ロゴが付属しています。正しいアプリケーション名を使用するように manifest を更新し、アイコンを置き換えてください。
:::

:::note
Service Workers や多くの JavaScript API (位置情報など)のような機能は、セキュアなコンテキストでアプリをホストする必要があります。ホスティングサービスを介してアプリケーションを配備する場合は、Service Workers を最大限に活用するために HTTPS が必要になることに注意してください。
:::

<<<<<<< HEAD

## Service Worker の設定

=======

### Service Worker configuration

> > > > > > > 407f6697f8d56598ab081d99c5dbfd4bd1c3250c

デフォルトでは、CRA/React Script には [Workbox の Webpack プラグイン](https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin) に基づいて事前設定された Service Worker セットアップが付属しています。これはキャッシュファースト戦略を利用しており、ネットワークが新しいバージョンのアプリを返しても、アプリはキャッシュからロードされます。

CRA/React Scripts の性質上、この設定は React Scripts の内部で行われるため、React Scripts から抽出しない限りはカスタマイズできません。現在、Ionic CLI は React App のイジェクトをサポートしていないため、このアクションを実行する場合は、Ionic CLI の代わりに npm/year スクリプトを使用する必要があります。

<<<<<<< HEAD

## デプロイ

=======

### Deploying

> > > > > > > 407f6697f8d56598ab081d99c5dbfd4bd1c3250c

#### Firebase

Firebase ホスティングは Progressive Web Apps に多くの利点を提供しており、CDN による高速応答、デフォルトで有効になっている HTTPS、 [HTTP2 push](https://firebase.googleblog.com/2016/09/http2-comes-to-firebase-hosting.html) のサポートなどがある。

まず、まだ使用していない場合は、Firebase で [プロジェクトを作成](https://console.firebase.google.com) します。

次にターミナルで Firebase CLI をインストールします:

```shell
npm install -g firebase-tools
```

Firebase CLI をインストールした状態で、Ionic プロジェクト内で `firebase init` を実行します。CLI 上で様々な確認を行っていきます:

**"Which Firebase CLI features do you want to set up for this folder?"** "Hosting: Configure and deploy Firebase Hosting sites." を選択します。

**"Select a default Firebase project for this directory:"** Firebase の Web サイト上で作成したプロジェクトを選択します。

**"What do you want to use as your public directory?"** "dist" を選択ください。

:::note
次の 2 つの質問に答えることで、ルーティング、ハードリロード、ディープリンクがアプリ内で動作することが保証されます:
:::

**Configure as a single-page app (rewrite all urls to /index.html)?"** "Yes" を選択します.

**"File dist/index.html already exists. Overwrite?"** "No" を選択します。

`firebase.json` という設定ファイルが生成されるので、アプリの設定にあわせて変更します。

最後に、キャッシング・ヘッダーが正しく設定されていることを確認する必要があります。これを行うには、 `headers` スニペットを `firebase.json` に追加します。完全な`firebase。json`は次のようになります:

```json
{
  "hosting": {
    "public": "build",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ],
    "headers": [
      {
        "source": "/**",
        "headers": [
          {
            "key": "Cache-Control",
            "value": "public, max-age=31536000"
          }
        ]
      }
    ]
  }
}
```

より詳しい `firebase.json` についての設定は [Firebase documentation](https://firebase.google.com/docs/hosting/full-config#section-firebase-json) を参照ください。

次に、次のコマンドを実行して、アプリケーションの最適化バージョンを構築します:

```shell
ionic build --prod
```

最後に、アプリをデプロイします:

```shell
firebase deploy
```

これが完了すると、アプリがライブになります。
