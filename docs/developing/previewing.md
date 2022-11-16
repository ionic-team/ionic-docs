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

When implementing native functionality, use [Platform Detection](../core-concepts/cross-platform.md).
When you're ready to test on a real device, see here for [iOS](ios.md) and [Android](android.md).

## Simulating a Mobile Viewport

Each major browser vendor includes developer tools for mobile emulation. These tools offer the ability to change the emulated device type.

### Chrome

Open your application at the local or remote address that it is being served from. For example, `http://localhost:4200`. Then, open the Chrome developer tools by pressing `Ctrl+Shift+I` on Windows/Linux or `Cmd+Opt+I` on Mac.

<img src="/docs/img/developing/previewing/chrome-dev-tools.png" alt="Chrome Dev Tools" />

From here you can select different device types from the dropdown, change the orientation of the device and throttle the network speed.

For additional features and information visit: https://developer.chrome.com/docs/devtools/device-mode/.

### Safari

:::note

Prerequisites: Show Develop menu in menu bar option must be enabled in Safari Advanced options.

:::

Open your application at the local or remote address that it is being served from. For example, `http://localhost:4200`. Select the **Develop** menu in Safari and select **Enter Responsive Design Mode** . Alternatively you can use the keyboard shortcut `Cmd+Opt+R`.

<img src="/docs/img/developing/previewing/safari-responsive-design-mode.png" alt="Safari Responsive Design Mode" />

From here you can select different device types to emulate as well as change the orientation of the device.

For additional features and information visit: https://developer.apple.com/safari/tools/.

### Firefox

Open your application at the local or remote address that it is being served from. For example, `http://localhost:4200`. Then, open the Firefox developer tools by pressing `Ctrl+Shift+M` on Windows/Linux or `Cmd+Opt+M` on Mac.

<img src="/docs/img/developing/previewing/firefox-responsive-design-mode.png" alt="Firefox Responsive Design Mode" />

From here you can select different device types from the dropdown, change the orientation of the device and throttle the network speed.

For additional features and information visit: https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/.
