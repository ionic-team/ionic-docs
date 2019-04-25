---
nextText: 'Publishing to the iOS App Store'
nextUrl: '/docs/publishing/app-store'
contributors:
  - MustaRohman
  - mhartington
---

# Progressive Web App のリリース

IonicアプリはWebテクノロジで構築されているため、Progressive Web Appを作成して、ネイティブアプリと同じように実行できます。PWAが何かわからない？詳細については、Ionicの<a href="https://ionicframework.com/pwa" target="_blank">PWA Overview</a>を参照してください。

## アプリをPWAにする

PWAの2つの主な要件は、<a href="https://developers.google.com/web/fundamentals/primers/service-workers/" target="_blank">Service Worker</a> と <a href="https://developers.google.com/web/fundamentals/web-app-manifest/" target="_blank">Web Manifest</a>です。これらの両方を手動でアプリに追加することは可能ですが、Angularチームはこれを自動化するための `@angular/pwa` というパッケージを用意しています。

`@angular/pwa` パッケージは、自動的にアプリケーションにService Workerやアプリのマニフェストを追加します。このパッケージをアプリに追加するには、次のコマンドを実行します:

```shell
$ ng add @angular/pwa
```

このパッケージが追加されて `ionic build --prod` を実行すると、 `www` ディレクトリにPWAとしてデプロイするファイルが用意されます。

> デフォルトでは `@angular/pwa` パッケージにはアプリアイコン用のAngularロゴが付いています。マニフェストを更新して正しいアプリ名を使用するようにし、アイコンを置き換えるようにしてください。

アプリが、CordovaやElectronなどの他のチャンネルにデプロイされている場合は、`angular.json` で `"serviceWorker": true` フラグを削除できます。"serviceWorker": true、angular.jsonファイルからフラグを削除できます。service workerは、次のコマンドを実行しても生成できます。

```shell
$ ionic build --prod --service-worker
```

> Note: Service Workersや多くのJavaScript API（地理位置情報など）などの機能では、アプリを安全なコンテキストでホストする必要があります。ホスティングサービスを介してアプリをデプロイする場合は、Service Workersを最大限に活用するためにHTTPSが必要になることに注意してください。

## Deploy

### Firebase

Firebase hostingは、CDNによる応答時間の短縮、デフォルトでHTTPSが有効になっており、[HTTP2 push](https://firebase.googleblog.com/2016/09/http2-comes-to-firebase-hosting.html)のサポートなど、Progressive Web Appsに多くの利点を提供します。

まず、Firebase CLIをインストールします:

```shell
$ npm install -g firebase-tools
```

Firebase CLIをインストールした状態でプロジェクトで `firebase init` を実行します。
これで `firebase.json` という設定ファイルが生成され、デプロイ用にアプリが設定されます。

> `firebase init` は、`/index.html` へのリダイレクトについての質問を含む、いくつかの質問を提示します。
> これらの質問には **yes** を選択してください。 **no** を選択した場合、あなたの index.html を上書きします。
> これにより、ルーティング、ハードリロード、およびディープリンクがアプリで機能するようになります。

最後に必要なことは、キャッシュヘッダが正しく設定されていることを確認することです。これを行うには、`firebase.json` のホスティングプロパティに次のスニペットを追加します:

```json
"headers": [
  {
    "source": "/build/app/**",
    "headers": [
      {
        "key": "Cache-Control",
        "value": "public, max-age=31536000"
      }
    ]
  },
  {
    "source": "ngsw-worker.js",
    "headers": [
      {
        "key": "Cache-Control",
        "value": "no-cache"
      }
    ]
  }
]
```
詳細については [Firebase documentation](https://firebase.google.com/docs/hosting/full-config#section-firebase-json) の `firebase.json` properties をご確認ください。

アプリを実行してデプロイできるようになりました。

```shell
$ firebase deploy
```

これが完了すると、アプリはliveになり利用可能となります。
