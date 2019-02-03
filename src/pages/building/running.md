---
previousText: 'Cross Platform'
previousUrl: '/docs/building/cross-platform'
nextText: 'Running on iOS'
nextUrl: '/docs/building/ios'
---

# アプリの開発

ターゲットとするプラットフォームとニーズに応じて、ネイティブ機能をテストするためのさまざまなやり方があります。

* ネイティブ機能を開発するために、[Platformを検出する](/docs/building/cross-platform) `ionic serve` でテストします。
* [iOSへのデプロイ](/docs/building/ios)
* [Androidへのデプロイ](/docs/building/android)
* [Ionic DevApp](/docs/building/running#ionic-devapp)を使って瞬時にiOS、Androidにデプロイ

本稿では、デバイス上でネイティブ機能をテストする、Ionic DevAppをご紹介します。

## Ionic DevApp

Ionic DevAppは、Ionic Frameworkを使って簡単にデバイス上で直接アプリをテストすることあできます。DevAppは、アプリケーションのネイティブ機能をテストするための、プリインストールされた豊富なネイティブプラグインのライブラリを使用することができ、またリアルタイムの変更検知を利用することができます。

複雑なNative SDKをインストールする必要はありません。 `ionic serve`をいう1つの簡単なコマンドで実行できます。実行されているアプリは、DevAppがインストールされているデバイスですぐにプレビューできます。LiveReloadで、変更が反映されます。

### はじめかた

まず、Ionic DevAppをダウンロードしてください。iOS App StoreとGoogle Playで利用できます。

<a href="https://itunes.apple.com/us/app/ionic-devapp/id1233447133?ls=1&amp;mt=8" target="_blank">
  <img style="width: 160px" src="/docs/assets/img/appstore.png" id="appstore-image">
</a>
<a href="https://play.google.com/store/apps/details?id=io.ionic.devapp&amp;hl=en" target="_blank">
  <img style="width: 160px" alt="Get it on Google Play" src="/docs/assets/img/playstore.png" id="playstore-image">
</a>

DevAppをインストールしたら、Ionicアカウントを登録するか、ログインします。

> DevAppは、すべてのIonicアカウントに付いてる無料サービスです。

## アプリの実行

DevAppを実行しているデバイスとコンピュータが同じネットワーク上にあることを確認して、`ionic serve`をプロジェクトのディレクトリのコマンドラインから実行します。

<command-line>
    <command-prompt>ionic serve</command-prompt>
    <command-output>
        > <span class="green">ng run app:serve --host=0.0.0.0 --port=8100</span>
        <br />
        <br />
        [<span class="bold">INFO</span>] <span class="bold">Development server running!</span>
        <br />
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Local: <span class="bold">http://localhost:8100</span>
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;External: <span class="bold">http://192.168.1.169:8100</span>
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DevApp: <span class="bold">StarTrack-ng@8100</span> on <span class="bold">ionic-home-router.network</span>
        <br />
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="yellow">Use Ctrl+C to quit this process</span>
        <br />
        <br />
        [<span class="bold">INFO</span>] Browser window opened to <span class="bold">http://localhost:8100!</span>
    </command-output>
</command-line>

`ionic serve` 実行後にDevAppを開いて、現在実行中のアプリ一覧からアプリを選択します。

![dev app with running app](/docs/assets/img/guides/running/dev-app-preview.png)

アプリがネイティブ機能を呼び出す場合場合、DevAppは呼び出しを処理して、実際に正しいネイティブ実装を返すことができます。

DevAppはがサポートするプラグインのリストがあるので、詳細については [DevApp docs](https://ionicframework.com/docs/pro/devapp/) をご覧ください。
