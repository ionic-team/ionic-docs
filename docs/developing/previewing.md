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
実機でテストする場合は、 [iOS](ios.md) 、 [Android](android.md) はこちらを参照してください。
