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

Vite PWA プラグインの設定方法についての詳細は、[Vite PWA「はじめに」ガイド](https://vite-pwa-org.netlify.app/guide/)を参照してください。

PWA をデプロイする方法については、[Vite PWA「デプロイ」ガイド](https://vite-pwa-org.netlify.app/deployment/)を参照してください。

## Making your React app a PWA with Create React App

:::note
Ionic CLI v7 以降、Ionic React のスターターアプリは Create React App の代わりに Vite と共に提供されます。Vite の手順については、[Vite で React アプリを PWA 化する方法](#making-your-react-app-a-pwa-with-vite)を参照してください。
:::

The two main requirements of a PWA are a <a href="https://developers.google.com/web/fundamentals/primers/service-workers/" target="_blank">Service Worker</a> and a <a href="https://developers.google.com/web/fundamentals/web-app-manifest/" target="_blank">Web Application Manifest</a>. While it's possible to add both of these to an app manually, a base project from Create React App (CRA) and the Ionic CLI provides this already.

あなたのアプリの`index.ts`では、`serviceWorker.unregister()`関数への呼び出しがあります。CRA が提供するベースにはサービスワーカーがオプトイン機能として含まれているため、有効にする必要があります。有効にするには、`serviceWorker.register()`を呼び出してください。

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

このパッケージが追加されたら、`ionic build`を実行すると、`build`ディレクトリが PWA としてデプロイできる準備が整います。

:::note
デフォルトでは、React アプリのパッケージにはアプリアイコンとして Ionic ロゴが含まれています。マニフェストを更新して正しいアプリ名を使用し、アイコンも置き換えるようにしてください。
:::

:::note
Service Workers や多くの JavaScript API（ジオロケーションなど）のような機能は、アプリがセキュアなコンテキストでホストされていることを必要とします。ホスティングサービスを通じてアプリをデプロイする場合、Service Workers を最大限に活用するためには HTTPS が必要であることに注意してください。
:::

### Service Worker の設定

デフォルトでは、CRA/React Scripts は [Workbox の Webpack プラグイン](https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin) に基づいた事前設定済みの Service Worker セットアップを備えています。これはキャッシュ優先の戦略を利用しており、ネットワークがより新しいバージョンのアプリを返したとしても、アプリはキャッシュから読み込まれます。

CRA/React Scripts の性質上、この設定は React Scripts 内部にあり、React Scripts からイジェクトしない限りカスタマイズできません。現在、Ionic CLI はイジェクトされた React アプリをサポートしていないため、この操作を行う場合は、Ionic CLI の代わりに npm/yarn スクリプトを使用する必要があります。

### Deploying

#### Firebase

Firebase ホスティングは、CDN による高速な応答時間、デフォルトで有効な HTTPS、[HTTP2 プッシュ](https://firebase.googleblog.com/2016/09/http2-comes-to-firebase-hosting.html) のサポートなど、プログレッシブ Web アプリに多くの利点を提供します。

まず、まだ作成していない場合は、Firebase にプロジェクトを [作成してください](https://console.firebase.google.com)。

次に、ターミナルで Firebase CLI をインストールします。

```shell
npm install -g firebase-tools
```

:::note
If it's the first time you use firebase-tools, login to your Google account with `firebase login` command.
:::

With the Firebase CLI installed, run `firebase init` within your Ionic project. The CLI prompts:

**"Which Firebase CLI features do you want to set up for this folder?"** Choose "Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys".

Create a new Firebase project or select an existing one.

**"このディレクトリのデフォルト Firebase プロジェクトを選択してください:"** Firebase ウェブサイトで作成したプロジェクトを選択します。

**"パブリックディレクトリとして何を使用しますか?"** "dist" と入力します。

:::note
Answering this next question will ensure that routing, hard reload, and deep linking work in the app:
:::

**シングルページアプリとして設定しますか（すべての URL を /index.html に書き換え）？** 「Yes」と入力します。

**「File build/index.html は既に存在します。上書きしますか？」** 「No」と入力します。

**Set up automatic builds and deploys with Github?** Enter "Yes".

**For which GitHub repository would you like to set up a Github Workflow?** Enter your project name.

**Set up the workflow to run a build script before every deploy?** Enter "Yes".

**What script should be run before every deploy?** Enter `npm ci && npm run build`.

**Set up automatic deployment to your sites live channel when a PR is merged?** Enter "Yes".

**What is the name of the get hooked branch associated with your sites live channel?** Enter your project's main branch name.

A `firebase.json` config file is generated, configuring the app for deployment.

最後に必要なのは、キャッシュヘッダーが正しく設定されていることを確認することです。これを行うには、`firebase.json` ファイルに `headers` スニペットを追加します。完全な `firebase.json` は次の通りです：

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

`firebase.json` プロパティの詳細については、[Firebase のドキュメント](https://firebase.google.com/docs/hosting/full-config#section-firebase-json) を参照してください。

次に、以下を実行してアプリの最適化バージョンをビルドします：

```shell
ionic build --prod
```

最後に、以下を実行してアプリをデプロイします：

```shell
firebase deploy
```

これが完了すると、アプリはライブになります。
