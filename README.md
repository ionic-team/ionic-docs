![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)

# Ionic日本語ドキュメンテーション

Ionic v4+ の公式ドキュメントを日本語に翻訳するためのレポジトリです。
コンテンツは[ionicframework.jp](https://ionicframework.jp/docs/)で公開しています。

## 構成
開発には、`npm5.8 +`と`Node8 +`をインストールした環境が必要です。

### ローカルプレビュー
```shell
$ npm run build-pages # Build once
$ npm run watch-pages # Build continuously
```
立ち上げが完了すると、`localhost:3333/docs/` が自動的に立ち上がります。

なお、`docs/components` `docs/cli` `docs/native` 以下はファイルの自動生成を行わないとアクセスすることができません。
ローカルでのアクセスが必要な場合は、先に以下のコマンドを実行してください。

```shell
$ npm run prebuild
```

__なお、これによって生成したファイルは通常翻訳できません。__
拡張子が `json` となっているファイルは、動的にドキュメントが生成するため、必ず `置換翻訳` するようにしてください。

### 翻訳ファイル
#### 通常翻訳

翻訳を行うファイルは 拡張子が `md` となっております。`src/pages/intro.md` のコンテンツは、URLは `/docs/intro` となります。
変更すればGitで追跡できる（ `.gitignore` に含まれていない）ファイルは通常の手順で翻訳可能です。翻訳前と翻訳後の行数が一致するように気をつけて作業ください。


#### jsonファイル

`Components` はjsonファイルから動的に生成されるため、翻訳ファイルは `transalate/api/` に格納されています。
キー「`readme`」を中心に翻訳ください。

なお、翻訳をローカルプレビューに適用するには以下コマンドを実行ください。

```bash
$ npm run translate
```

### 表記揺れ対応
| 元表記 | 日本語表記 | 備考 |
|:---|:---|:---|
| Components |コンポーネント | 一般用語 |
| Function/Functions | 機能 | 一般用語 |
| Test | テスト | 一般用語 |
| Page/Pages | Page | Ionic v3の特定機能を指す場合 |
| Component/Components | Component | Angularの特定機能を指す場合。ただし、UIパーツを指す場合は「コンポーネント」と日本語表記。 |
| Service/Services | Service | Angularの特定機能を指す場合 |
| Pipe/Pipes | Pipe | Angularの特定機能を指す場合 |
| Provider/Providers | Provider | Angularの特定機能を指す場合 |
| Module/Modules | Module | Angularの特定機能を指す場合 |
| Lazy Loading | Lazy Loading | 一般用語 |


## 翻訳作業について
### コントリビューションのお願い
翻訳プロジェクトは規模が大きく、多くの方々の協力なくては成立しません。ぜひ皆さんのコントリビューションをお待ちしております。また、翻訳作業についての議論はIonic Japan slackの `#translation` チャンネルで行っておりますのでぜひご参加ください。

[Ionicの知見を共有するためのslackのオープンチャンネル](https://ionic-jp.herokuapp.com)

### ワークフロー
#### 0. 本レポジトリをForkする
#### 1. 翻訳作業のIssueを作成する
#### 2. 翻訳する
#### 3. プルリクエストを作成する

### 注意事項
- 本レポジトリは、元レポジトリを引き継ぎ `Apache License` を採用しています。皆さんの翻訳も同一ライセンスとなりますのでご了承ください。
- 元レポジトリがライセンスを変更いた場合、本レポジトリはそれに追随する可能性があります。
- 翻訳前と翻訳後で行数が同じになるようにご注意ください。これは、本家のdiffを追跡しやすくするためですのでご協力お願いいたします。
- [Contributing Guide](https://github.com/ionic-team/ionic-docs/blob/master/CONTRIBUTING.md) :flashlight:
- [Project Board](https://github.com/ionic-team/ionic-docs/projects/3) :pushpin:
