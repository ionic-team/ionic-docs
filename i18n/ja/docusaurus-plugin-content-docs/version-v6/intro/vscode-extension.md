---
title: Ionic VS Code Extension
---

<head>
  <title>Ionic Visual Studio Codeエクステンションを使う</title>
  <meta
    name="description"
    content="Ionic Visual Studio Code 拡張は、Ionicアプリの開発に共通するさまざまな機能の実行を支援します。"
  />
</head>

Ionic Visual Studio Code 拡張は、Ionicアプリの開発に共通するさまざまな機能を、VS Codeのウィンドウを開いたまま実行できるようにします。 [Visual Studio Marketplace上の拡張機能](https://marketplace.visualstudio.com/items?itemName=ionic.ionic) をインストールすることができます。エクステンションをインストールすると、アクティビティバーにIonicのロゴが表示されるようになります。

## 新規プロジェクトの作成

空のディレクトリから、テンプレートオプションの1つをクリックし、アプリ名を指定することで、新しいAngular、React、またはVueプロジェクトを作成することができます。

<img
  src="https://user-images.githubusercontent.com/84595830/159510276-6766a5b8-132d-4284-a3fa-cd6374d64891.gif"
  alt="Video of creating a project"
/>

新しいプロジェクトを作成すると、拡張機能は `package.json` にあるすべての共通タスクにアクセスできるようになります。

## Capacitor の追加

[Capacitor](https://capacitorjs.com/) をアプリケーションに追加するには、"Integrate Capacitor "を選択します。

<img
  src="https://user-images.githubusercontent.com/84595830/159510570-b5a151bb-2e17-42c8-8cab-bffbaa849576.gif"
  alt="Capacitor追加のビデオ"
/>

Capacitorが統合され、"Run On Web", "Run On Android", "Run On iOS "のオプションで、Web, Android, iOS上でアプリを実行することができるようになりました。

## Doing More

Ionic VS Code 拡張は、マイグレーション、デバッグ、モノレポのサポートなど、非常に多くのことを支援します。拡張機能の全リストは、[extension overview on the VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=ionic.ionic) をご確認ください。
