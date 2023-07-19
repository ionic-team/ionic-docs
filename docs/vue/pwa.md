---
title: Progressive Web Apps in Vue
sidebar_label: Progressive Web Apps
---

<head>
  <title>Vue PWA | Add Progressive Web Apps to Vue.js Projects | Ionic</title>
  <meta
    name="description"
    content="Run the 'vue add' command to install the progressive web app plugin. Learn more about how to add PWA to your existing Vue project."
  />
</head>

## Making your Vue app a PWA with Vite

The two main requirements of a PWA are a <a href="https://developers.google.com/web/fundamentals/primers/service-workers/" target="_blank">Service Worker</a> and a <a href="https://developers.google.com/web/fundamentals/web-app-manifest/" target="_blank">Web Application Manifest</a>. While it's possible to add both of these to an app manually, we recommend using the [Vite PWA Plugin](https://vite-pwa-org.netlify.app/) instead.

To get started, install the `vite-plugin-pwa` package:

```shell
npm install -D vite-plugin-pwa
```

Next, update your `vite.config.js` or `vite.config.ts` file and add `vite-plugin-pwa`:

```javascript
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [vue(), VitePWA({ registerType: 'autoUpdate' })],
});
```

This minimal configuration allows your application to generate the Web Application Manifest and Service Worker on build.

For more information on configuring the Vite PWA Plugin, see the [Vite PWA "Getting Started" Guide](https://vite-pwa-org.netlify.app/guide/).

See the [Vite PWA "Deploy" Guide](https://vite-pwa-org.netlify.app/deployment/) for information on how to deploy your PWA.

## Making your Vue app a PWA with Vue CLI

:::note
As of Ionic CLI v7, Ionic Vue starter apps ship with Vite instead of Vue CLI. See [Making your Vue app a PWA with Vite](#making-your-vue-app-a-pwa-with-vite) for Vite instructions.
:::

The two main requirements of a PWA are a <a href="https://developers.google.com/web/fundamentals/primers/service-workers/" target="_blank">Service Worker</a> and a <a href="https://developers.google.com/web/fundamentals/web-app-manifest/" target="_blank">Web Application Manifest</a>. While it's possible to add both of these to an app manually, the Vue CLI has some utilities for adding this for you.

既存のプロジェクトの場合は、 `vue add` コマンドを実行して、Vue の PWA プラグインをインストールできます。

```shell
vue add pwa
```

:::note
変更する前に、現在の状況を必ず Git にコミットしてください。
:::

これが完了すると、Vue の CLI は新しく `registerServiceWorker.ts` を作成します。それを `main.ts` ファイルにインポートします。

```tsx
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
// Added by the CLI
import './registerServiceWorker';

createApp(App).use(router).mount('#app');
```

`registerServiceWorker.ts` は CLI がビルド時に作成する service worker です。ここでは、service worker がアップデート、ネットワーク接続の変更、またはエラーを検出したときのユーザの操作性をカスタマイズできます。

```tsx
import { register } from 'register-service-worker';

if (process.env.NODE_ENV === 'production') {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready() {
      console.log(
        'App is being served from cache by a service worker.\n' + 'For more details, visit https://goo.gl/AFskqB'
      );
    },
    registered() {
      console.log('Service worker has been registered.');
    },
    cached() {
      console.log('Content has been cached for offline use.');
    },
    updatefound() {
      console.log('New content is downloading.');
    },
    updated() {
      console.log('New content is available; please refresh.');
    },
    offline() {
      console.log('No internet connection found. App is running in offline mode.');
    },
    error(error) {
      console.error('Error during service worker registration:', error);
    },
  });
}
```

生成される Service Worker は、 [Workbox's webpack plugin](https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin) に基づいており、デフォルトで `GenerateSW()` を使用するように設定されています。つまり、Workbox はビルド時に、処理するすべてのファイルの Service Worker キャッシュを自動的に生成します。

これを設定してデフォルトの動作を変更したい場合は、GitHub にある [PWA plugin docs](https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa#configuration) をチェックアウトします。

### Manifest

Service Worker に加えて、Vue PWA プラグインはアプリケーションの manifest ファイルも作成します。デフォルトでは、CLI は次のエントリーを含む manifest を生成します。

```json
{
  "name": "pwa-test",
  "short_name": "pwa-test",
  "theme_color": "#4DBA87",
  "icons": [
    {
      "src": "./img/icons/android-chrome-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "./img/icons/android-chrome-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    },
    {
      "src": "./img/icons/android-chrome-maskable-192x192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "maskable"
    },
    {
      "src": "./img/icons/android-chrome-maskable-512x512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "maskable"
    }
  ],
  "start_url": ".",
  "display": "standalone",
  "background_color": "#000000"
}
```

`public/img/icons` 内のアイコンは、必ずご使用のブランドに合わせて更新してください。テーマの色や名前をカスタマイズしたい場合は、GitHub にある [PWA plugin docs](https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa#configuration) のドキュメントを必ず読んでください。

### Deploying

Firebase, Vercel, Netlify,さらには Azure Static Web Apps など、さまざまなホストを使用することができる。いずれの場合も、同様のセットアッププロセスを完了する必要があります。このガイドでは、ホストの例として Firebase を使用します。このガイドに加えて、 [Vue CLI docs](https://cli.vuejs.org/guide/deployment.html) のドキュメントには、さまざまなプロバイダーにデプロイするためのガイドも含まれています。

#### Firebase

Firebase ホスティングは Progressive Web Apps に多くの利点を提供しており、CDN による高速応答、デフォルトで有効になっている HTTPS、 [HTTP2 push](https://firebase.googleblog.com/2016/09/http2-comes-to-firebase-hosting.html) のサポートなどがある。

まず、まだ使用していない場合は、Firebase で [プロジェクトを作成](https://console.firebase.google.com) します。

次にターミナルで Firebase CLI をインストールします:

```shell
npm install -g firebase-tools
```

:::note
If it's the first time you use firebase-tools, login to your Google account with `firebase login` command.
:::

With the Firebase CLI installed, run `firebase init` within your Ionic project. The CLI prompts:

**"Which Firebase CLI features do you want to set up for this folder?"** Choose "Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys".

Create a new Firebase project or select an existing one.

**"Select a default Firebase project for this directory:"** Firebase の Web サイト上で作成したプロジェクトを選択します。

**"What do you want to use as your public directory?"** "dist" を選択ください。

:::note
Answering this next question will ensure that routing, hard reload, and deep linking work in the app:
:::

**Configure as a single-page app (rewrite all urls to /index.html)?"** "Yes" を選択します.

**"File build/index.html already exists. Overwrite?"** Enter "No".

**Set up automatic builds and deploys with Github?** Enter "Yes".

**For which GitHub repository would you like to set up a Github Workflow?** Enter your project name.

**Set up the workflow to run a build script before every deploy?** Enter "Yes".

**What script should be run before every deploy?** Enter `npm ci && npm run build`.

**Set up automatic deployment to your sites live channel when a PR is merged?** Enter "Yes".

**What is the name of the get hooked branch associated with your sites live channel?** Enter your project's main branch name.

`firebase.json` という設定ファイルが生成されるので、アプリの設定にあわせて変更します。

最後に、キャッシング・ヘッダーが正しく設定されていることを確認する必要があります。これを行うには、 `headers` スニペットを `firebase.json` に追加します。完全な`firebase。json`は次のようになります:

```json
{
  "hosting": {
    "public": "dist",
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
      },
      {
        "source": "precache-manifest.*.js",
        "headers": [
          {
            "key": "Cache-Control",
            "value": "no-cache"
          }
        ]
      },
      {
        "source": "service-worker.js",
        "headers": [
          {
            "key": "Cache-Control",
            "value": "no-cache"
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
ionic build
```

最後に、アプリをデプロイします:

```shell
firebase deploy
```

これが完了すると、アプリがライブになります。
