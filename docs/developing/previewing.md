---
title: プレビュー
---

<head>
  <title>プレビュー: WebブラウザでのIonicアプリローカル実行</title>
  <meta
    name="description"
    content="Previewing provides many different options to test native functionality based on needs. Use this feature to easily run your Ionic app locally in a web browser."
  />
</head>

ネイティブ機能のテストには、ターゲットとするプラットフォームやニーズに応じて、さまざまなオプションがあります。

- Web ブラウザでローカルに実行する (ネイティブ機能については [Platform Detection](../core-concepts/cross-platform.md) を使用します)
- [iOSへのデプロイ](ios.md)
- [Androidへのデプロイ](android.md)

## ウェブブラウザでローカルに実行する

Ionic の最も強力な機能の1つは、アプリ開発の大部分をデスクトップ上のブラウザで行えることです。従来のウェブ開発ツール（Chrome/Safari/Firefoxの開発ツール）に完全にアクセスできるため、コードを書いてから、再コンパイルやシミュレーターやデバイスへのデプロイの必要なく、迅速にテスト/デバッグを行うことが可能です。

これを行うには、プロジェクトのディレクトリで、コマンドラインから `ionic serve` を実行します。

```shell-session
$ ionic serve
> ng run app:serve --host=0.0.0.0 --port=8100

[INFO] Development server running!

       Local: http://localhost:8100
       External: http://192.168.1.169:8100

       Use Ctrl+C to quit this process

[INFO] Browser window opened to http://localhost:8100!
```

`ionic serve` を起動したまま、アプリの開発を続けます。変更を保存すると、その変更が適用された状態でアプリがリロードされます。

ネイティブ機能を実装する場合は、[Platform Detection](../core-concepts/cross-platform.md) を使用します。
実機でテストする場合は、[iOS](ios.md) と [Android](android.md) はこちらを参照してください。

## モバイルビューポートのシミュレーション

各主要ブラウザベンダーは、モバイルエミュレーションのための開発者向けツールを提供しています。これらのツールは、エミュレートするデバイスの種類を変更する機能を備えています。

### Chrome

アプリケーションを、サービスを受けるローカルまたはリモートのアドレスで開いてください。例えば、`http://localhost:4200`です。次に、Windows/Linuxでは`Ctrl+Shift+I`、Macでは`Cmd+Opt+I`を押して、Chrome開発者ツールを開きます。

<img src="/docs/img/developing/previewing/chrome-dev-tools.png" alt="Chrome Dev Tools" />

ここから、ドロップダウンから異なるデバイスタイプを選択し、デバイスの方向を変更し、ネットワーク速度をスロットルすることができます。

その他の機能および情報については、https://developer.chrome.com/docs/devtools/device-mode/ を参照してください。

### Safari

:::note

前提条件：Safariの詳細オプションで「メニューバーに開発メニューを表示する」オプションが有効になっている必要があります。

:::

アプリケーションを、サービスを受けるローカルまたはリモートのアドレスで開いてください。例えば、`http://localhost:4200`です。Safariの**Develop**メニューを選択し、**Enter Responsive Design Mode** を選択します。または、キーボードショートカット `Cmd+Opt+R` を使用することもできます。

<img src="/docs/img/developing/previewing/safari-responsive-design-mode.png" alt="Safari Responsive Design Mode" />

ここから、エミュレートするデバイスの種類を選択したり、デバイスの向きを変更したりすることができます。

その他の機能および情報については、https://developer.apple.com/safari/tools/ を参照してください。

### Firefox

アプリケーションを、サービスを受けるローカルまたはリモートのアドレスで開いてください。例えば、`http://localhost:4200`です。次に、Windows/LinuxではCtrl+Shift+M`、MacではCmd+Opt+M`を押して、Firefoxの開発者ツールを開きます。

<img src="/docs/img/developing/previewing/firefox-responsive-design-mode.png" alt="Firefox Responsive Design Mode" />

ここから、ドロップダウンから異なるデバイスタイプを選択し、デバイスの方向を変更し、ネットワーク速度をスロットルすることができます。

その他の機能および情報については、https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/ を参照してください。
