---
title: 基本
---

<head>
  <title>アプリ開発の基本 | Create Scaffolding for Ionic Web Apps</title>
  <meta
    name="description"
    content="Once an app is created by the Ionic CLI, the next step is to start building out features and components. Learn how to create scaffolding for Ionic web apps."
  />
</head>

Ionic CLIでアプリを作成したら、次は機能やコンポーネントのビルドを開始します。アプリの大部分は `src/app/` ディレクトリで開発することになります。

## プロジェクト構成

```bash
src/
├── app/
├── assets/
├── environments/
├── theme/
├── global.scss
├── index.html
├── main.ts
├── polyfills.ts
├── test.ts
└── zone-flags.ts
```

`src/` ディレクトリには、 `index.html` ファイル、テスト用の設定ファイル、画像を格納する assets フォルダ、アプリのコードを格納する main `app/` ディレクトリなどの項目があります。

```bash
src/
└── app/
    ├── app-routing.module.ts
    ├── app.component.html
    ├── app.component.spec.ts
    ├── app.component.ts
    └── app.module.ts
```

`src/app/` ディレクトリには、ルートアプリのコンポーネントとモジュール、およびページ、コンポーネント、サービスなどのアプリの機能を含む追加のディレクトリが含まれます。

## 新しい機能を生成する

:::note
This command is only supported in Ionic Angular.
:::

The Ionic CLI can generate new app features with the [`ionic generate`](../cli/commands/generate.md) command. By running `ionic generate` in the command line, a selection prompt is displayed which lists the available features that can be generated.

```shell-session
$ ionic generate
? What would you like to generate?
❯ page
  component
  service
  module
  class
  directive
  guard
```

選択後、Ionic CLIは名前の入力を求めるプロンプトを表示します。この名前にはパスを指定することができ、整理されたプロジェクト構造内で簡単に機能を生成することができます。

:::note
`portfolio/intro` のような任意のレベルのネストが可能です。例えば、`ionic g component "portfolio/intro/About Me"`とすることで、コンポーネントを簡単にページにスコープすることができます。
:::

```shell-session
$ ionic generate
? What would you like to generate? page
? Name/path of page: portfolio █
```

また、生成される機能の `type` と `name` はコマンドラインで入力することもできます。

```shell-session
$ ionic g page "User Detail"
> ng generate page "User Detail"
CREATE src/app/user-detail/user-detail.module.ts (564 bytes)
CREATE src/app/user-detail/user-detail.page.scss (0 bytes)
CREATE src/app/user-detail/user-detail.page.html (138 bytes)
CREATE src/app/user-detail/user-detail.page.spec.ts (720 bytes)
CREATE src/app/user-detail/user-detail.page.ts (280 bytes)
UPDATE src/app/app-routing.module.ts (475 bytes)
[OK] Generated page!
```

Ionic CLIは、ベストプラクティスに近づけるために、基礎となるフレームワークツールを使用します。 `ionic/angular` の場合、Angular CLIがフードの下で使用されます。

新しいページ用のファイルとディレクトリを作成した後、CLIは新しいページを含めるためにルーター設定も更新します。これにより、開発ライフサイクルを進めるために必要な手作業が軽減されます。

詳細については、コマンドラインから `ionic g --help` を実行するか、`ionic generate` の [the documentation](../cli/commands/generate.md) を参照してください。
