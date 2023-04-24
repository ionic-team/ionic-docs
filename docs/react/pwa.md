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

PWAの主な要件は、 <a href="https://developers.google.com/web/fundamentals/primers/service-workers/" target="_blank">Service Worker</a> と <a href="https://developers.google.com/web/fundamentals/web-app-manifest/" target="_blank">Web Manifest</a> の2つです。これらの両方を手動でアプリに追加することは可能ですが、Create React App (CRA)とIonic CLIのベースプロジェクトがこれらをすでに提供しています。

アプリケーションの  `index.ts` には、`serviceWorker.unregister()` 関数の呼び出しがあります。基本CRAが提供するservice workersはオプトイン機能なので、有効にする必要があります。
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

このパッケージを追加したら、 `ionic build` を実行し、 `build` ディレクトリをPWAとしてデプロイする準備ができます。

:::note
デフォルトでは、Reactアプリのパッケージには、アプリアイコン用のIonicロゴが付属しています。正しいアプリケーション名を使用するようにmanifestを更新し、アイコンを置き換えてください。
:::

:::note
Service Workersや多くのJavaScript API (位置情報など)のような機能は、セキュアなコンテキストでアプリをホストする必要があります。ホスティングサービスを介してアプリケーションを配備する場合は、Service Workersを最大限に活用するためにHTTPSが必要になることに注意してください。
:::

###  Service Workerの設定

デフォルトでは、CRA/React Scriptには [WorkboxのWebpackプラグイン](https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin) に基づいて事前設定されたService Workerセットアップが付属しています。これはキャッシュファースト戦略を利用しており、ネットワークが新しいバージョンのアプリを返しても、アプリはキャッシュからロードされます。

CRA/React Scriptsの性質上、この設定はReact Scriptsの内部で行われるため、React Scriptsから抽出しない限りはカスタマイズできません。現在、Ionic CLIはReact Appのイジェクトをサポートしていないため、このアクションを実行する場合は、Ionic CLIの代わりにnpm/yearスクリプトを使用する必要があります。

### デプロイ

#### Firebase

FirebaseホスティングはProgressive Web Appsに多くの利点を提供しており、CDNによる高速応答、デフォルトで有効になっているHTTPS、 [HTTP2 push](https://firebase.googleblog.com/2016/09/http2-comes-to-firebase-hosting.html) のサポートなどがある。

まず、まだ使用していない場合は、Firebaseで [プロジェクトを作成](https://console.firebase.google.com) します。

次にターミナルでFirebase CLIをインストールします:

```shell
npm install -g firebase-tools
```

:::note
If it's the first time you use firebase-tools, login to your Google account with `firebase login` command.
:::

With the Firebase CLI installed, run `firebase init` within your Ionic project. The CLI prompts:

**"Which Firebase CLI features do you want to set up for this folder?"** Choose "Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys".

Create a new Firebase project or select an existing one.

**"Select a default Firebase project for this directory:"** FirebaseのWebサイト上で作成したプロジェクトを選択します。

**"What do you want to use as your public directory?"** "dist" を選択ください。

:::note
Answering this next question will ensure that routing, hard reload, and deep linking work in the app:
:::

**Configure as a single-page app (rewrite all urls to /index.html)?"** "Yes" を選択します.

**"File dist/index.html already exists. Overwrite?"** "No" を選択します。

**Set up automatic builds and deploys with Github?** Enter "Yes".

**For which GitHub repository would you like to set up a Github Workflow?** Enter your project name.

**Set up the workflow to run a build script before every deploy?** Enter "Yes".

**What script should be run before every deploy?** Enter `npm ci && npm run build`.

**Set up automatic deployment to your sites live channel when a PR is merged?** Enter "Yes".

**What is the name of the get hooked branch associated with your sites live channel?** Enter your project's main branch name.

A `firebase.json` config file is generated, configuring the app for deployment.

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
