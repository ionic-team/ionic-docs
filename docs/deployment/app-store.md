---
title: iOS App Storeへの開発
sidebar_label: iOS App Store
---

<head>
  <title>iOS App Storeでのリリース: Apple App Store Deployment for Ionic</title>
  <meta
    name="description"
    content="Review the requirements to publish an Ionic app to the Apple iOS App Store. Learn to generate a release build and other necessary steps for deployment."
  />
</head>

## 要件

iOS App Store にアプリを提出するには、いくつかのことが必要です。

- Xcode
- 有料の Apple Developers アカウント
- 有効なプロビジョニングプロファイル
- アプリの開発および配布に関する証明書

Apple Developer Program への登録は、[このガイド](https://developer.apple.com/programs/) に従ってください。

## リリースビルドの作成

iOS プラットフォームがまだ追加されていない場合は、必ず追加してください。

```shell
ionic cordova platform add ios
```

プラットフォームが追加されたら、ビルドコマンドを `--prod` フラグを付けて実行します。

```shell
ionic cordova build ios --prod
```

これで、アプリの Web 部分の minified コードが生成され、iOS のコードベースにコピーされます。

ここから、`.xcworkspace` ファイルを `./platforms/ios/` に開き、Xcode を起動します。

:::tip
`release`フラグを使えば、リリースビルドを自動的に生成させることもできます。
:::

## 署名証明書の生成

iOS 用の証明書の生成は少し複雑なので、証明書とは何か、どのように生成するかについては、[Apple の公式ドキュメント](https://help.apple.com/xcode/mac/current/#/dev3a05256b8) を必ず確認してください。

必要な証明書とプロファイルを作成するには、[Apple のメンバーセンター](https://developer.apple.com/membercenter) にアクセスし、Apple のドキュメントに記載されているリンクをたどってください。

ここで重要なのは、開発用と配布用の 2 種類の証明書があることです。開発用証明書は、まさに開発時のためのものです。アプリに署名して、その証明書がアクセスできるデバイスにデプロイするためのものです。

ディストリビューション証明書は、アプリをストアに配布するためのものです。アプリがディストリビューション証明書で署名されると、どのデバイスにもインストールできるようになります。

## XCode でのアプリへの署名

正しい証明書を生成した後、Xcode に自動的に証明書を管理させるか、手動で管理するかのオプションがあります。Xcode が自動的に証明書を管理するようにすることをお勧めします。これは、選択されたビルドタイプに基づいて、正しい Development と Distribution の証明書が使用されることを確認するためです。

このオプションを選択した状態で、`Product > Archive`メニューから`Archive`を選択します。これにより、アプリストアで配布するためのアプリのバージョンが構築されます。アーカイブが作成された後、Xcode Organizer が開かれます。

Xcode Organizer は、現在のアプリのビルドを含むリストを表示します。最後のビルドを選び、'Upload to App Store'をクリックします。
チームを選択する場所があり、アプリの詳細情報と'Upload'ボタンをクリックします。

アップロードに成功すると、アプリは[iTunes Connect](https://itunesconnect.apple.com)の「アクティビティ」に表示されるか、[App Store Connect](https://appstoreconnect.apple.com/)の「Apps」に表示されます。ここから、アプリを TestFlight に公開したり、Apple に送信して App Store の承認を得ることができます。

## アプリのアップデート

アプリが成長するにつれ、新機能や修正を加えて更新する必要があります。
アプリのアップデートは、Apple に新バージョンを提出するか、Appflow のような<a href="https://ionic.io/docs/appflow/deploy/intro" target="_blank">live update 機能</a>を使用することで可能です。

<strong>Live Updates</strong>を使うと, アプリの変更は、App
Storeの承認を待つことなく、Appflowのダッシュボードから直接ユーザーにリアルタイムでプッシュすることができます。

:::note
iOS App Store が更新されたビルドを受け入れるには、config.xml ファイルを編集してバージョン値を増やし、上記の手順でアプリをリリース用に再構築する必要があります。
:::
