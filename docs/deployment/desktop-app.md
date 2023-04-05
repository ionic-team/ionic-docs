---
title: デスクトップアプリへのデプロイ
sidebar_label: Electronデスクトップアプリ
---

<head>
  <title>WindowsとmacOS App Storesのためにデスクトップアプリとしてビルド</title>
  <meta
    name="description"
    content="Building an Ionic desktop application for Windows and macOS app stores lets you reuse 100% of your code. Learn more about deploying a desktop app with Ionic."
  />
</head>

Ionicでデスクトップアプリケーションを構築すると、開発者はコードを100%再利用し、従来のデスクトップアプリケーションをリリースしながら、プッシュ通知などのすべてのネイティブデバイスの機能を利用することができます。このガイドでは、Electronに精通していることを前提としており、Electronアプリの「作り方」については触れません。 詳しくは <a href="https://www.electronjs.org/docs/latest/tutorial/tutorial-first-app" target="_blank">Electron guide</a>. をご覧ください。

## macOSアプリ

### 要件

macOSアプリをストアでアプリを公開するには、難しい要件が2つあります。

* [Xcode](https://itunes.apple.com/us/app/xcode/id497799835?mt=12) が最新版であること
* 開発者アカウント ($100 through Apple's developer portal) が有効であること

### リリース

Electronチームは、macOS用のアプリを公開する方法についての詳細なガイドを持っています。[the docs](https://electronjs.org/docs/tutorial/mac-app-store-submission-guide) をご覧ください。

## Windowsアプリ

### 要件

Windowsアプリをストアでアプリを公開するには、2つの厳しい要件があります。

- Windows 10 with Anniversary Update (released August 2nd, 2016)
- The Windows 10 SDK, [download here](https://developer.microsoft.com/en-us/windows/downloads/windows-10-sdk)
- Node
- electron-windows-store CLI

`electron-windows-store` は npm を使ってインストールすることができます:

```shell
npm install -g electron-windows-store
```

### リリース作業

macOSと同様、ElectronはWindows用のアプリを公開する方法についても詳細なガイドを提供している。 [the docs](https://electronjs.org/docs/tutorial/windows-store-guide) を確認してください
