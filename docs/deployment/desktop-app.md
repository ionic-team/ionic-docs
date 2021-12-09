---
sidebar_label: Electronデスクトップアプリ
---

# デスクトップアプリの開発

Ionicを使ってデスクトップアプリを構築することで、開発者は自分のコードの100%を再利用し、プッシュ通知のようなネイティブデバイスの全機能にアクセスしながら、今までのようにデスクトップアプリをリリースすることができます。このガイドは、Electronに精通していることを前提としており、Electronアプリを構築するための「方法」には触れていません。それらについては <a href="https://electronjs.org/docs/tutorial/first-app" target="_blank">Electron guide</a> を参照ください。

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
$ npm install -g electron-windows-store
```

### リリース作業

macOSと同様、ElectronはWindows用のアプリを公開する方法についても詳細なガイドを提供している。 [the docs](https://electronjs.org/docs/tutorial/windows-store-guide) を確認してください
