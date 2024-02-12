---
sidebar_label: よくある質問
slug: /native/faq
---

#よくある質問

## Capacitor とは何ですか？

Capacitor は Ionic チームによって構築されたネイティブランタイムで、ウェブ開発者にウェブアプリをネイティブデバイスにデプロイする機能を提供します。 Capacitor はまた、 JavaScript を通じてネイティブデバイスの機能を公開しているため、開発者は他の JavaScript ライブラリとやりとりしているかのように、ネイティブの位置情報サービス、ファイルシステムへのアクセス、通知などの機能にアクセスできます。

## パーミッションの問題

プラグインを使用している場合、プラグインをインストールした後にネイティブプロジェクトに追加のパーミッションを追加する必要がある場合があります。例えば、Capacitor Camera プラグインは iOS 用に以下のパーミッションが必要です：

- `NSCameraUsageDescription` (`Privacy - Camera Usage Description`)
- `NSPhotoLibraryAddUsageDescription` (`Privacy - Photo Library Additions Usage Description`)
- `NSPhotoLibraryUsageDescription` (`Privacy - Photo Library Usage Description`)

これらのパーミッションをネイティブプロジェクトの `info.plist` に手動で追加する必要があります。そうしないと、ネイティブのカメラ API の呼び出しに失敗します。

## 予期せぬ動作

何らかの理由でプラグインが予期しない動作をする場合は、 [github リポジトリに課題を登録してください](https://github.com/ionic-team/capacitor-plugins) ！明確な issue レポートと再現例を提供することで、あなたの問題を解決することができます。
