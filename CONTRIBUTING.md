# Contributing Guide

Thanks for your interest in contributing to Ionic's documentation! :tada: Check the guidelines below for suggestions and requirements before submitting your contribution.

<sub>
  <b>TABLE OF CONTENTS</b>
</sub>

- [開発ワークフロー](#development-workflow)
  - [変更のプレビュー](#previewing-changes)
  - [ドキュメントのリンティング](#linting-documentation)
  - [スペルチェック](#spell-check)
- [Windows での VS Code の使用](#using-vs-code-on-windows)
- [プロジェクト構造](#project-structure)
  - [ディレクトリ](#directories)
- [コンテンツ作成](#authoring-content)
  - [参照コンテンツ](#reference-content)
- [翻訳](#translation)
- [問題報告](#reporting-issues)
- [プルリクエストガイドライン](#pull-request-guidelines)
- [デプロイ](#deploying)
  - [バージョンのアーカイブ](#archiving-a-version)
- [ライセンス](#license)

---

## Development Workflow

### Previewing Changes

In order to run the documentation locally, install the dependencies and run the development server:

```sh
npm install
npm start
```

#### GitHub トークン

ドキュメンテーションのビルドには、Ionic Framework のリリースノートを取得するために GitHub パーソナルアクセストークンが必要です。ローカルではそれがなくてもビルドは動作します（リリースノートは空になります）が、Vercel のプレビューおよび本番ビルドには必要です。

**ローカル開発:**

1. 次の条件で[詳細なパーソナルアクセストークン](https://github.com/settings/personal-access-tokens/new)を作成する:

- **リポジトリアクセス**: 公開リポジトリ（読み取り専用）
- **有効期限**: 366 日（毎年更新）

2. トークンをシェルのプロファイルに追加します（`~/.zshrc`、`~/.bashrc`、など）：

   ```sh
   export GITHUB_TOKEN=github_pat_...
   ```

3. シェルをリロードするか、`source ~/.zshrc`（または同等のもの）を実行してください

**Vercel:**

1. 上記と同じ設定で、ただし以下の条件で[細かい粒度のパーソナルアクセストークン](https://github.com/settings/personal-access-tokens/new)を作成します:

- **所有者**: ionic-team 組織（あなたの個人アカウントではありません）

2. トークンを Vercel プロジェクトの設定に追加してください:

- Vercel でプロジェクトに移動する
- **設定 → 環境変数**に移動する
- `GITHUB_TOKEN`をトークン値で追加する
- 本番およびプレビュ環境を選択する

3. トークンを有効にするためにプロジェクトを再デプロイする

トークンがないと、ビルドはトークンが欠落していることを示すエラーメッセージとともに失敗します。

### Linting Documentation

This repository uses [Prettier](https://prettier.io/), an opinionated code formatter, in order to keep consistent formatting throughout the documentation. Run the following command to automatically fix all formatting, and then push any changes:

```
npm run lint
```

### Spell Check

This repository uses [cspell](https://cspell.org/), a spell checker for code, to automatically flag any spelling errors. Run the following command to see any spelling errors:

```
npm run spellcheck
```

> [!NOTE]
> Any spelling errors will need to be fixed manually. There are various ways to ignore words or sections that were flagged erroneously. These are listed below.

#### Ignoring words

**To ignore:**

- A **specific word**, add it to the following file: `cspell-wordlist.txt`
  - For example, `Ionicons` is flagged as an unknown word. Since this is the name of our software, it has been added to this file to be ignored.
- A **directory** or anything matching a **regular expression**, update the following file: `cspell.json`
  - For example, we don't want to flag anything inside of code ticks (<code>`</code>) or code blocks (<code>```</code>), so there are regular expressions added to ignore anything inside of these.
- An **entire line**, add the following comment above it:
  ```markdown
  <!-- cspell:disable-next-line -->
  ```
- **Multiple lines**, add comments above and below the lines to be ignored:

  ```markdown
  <!-- cspell:disable -->

  <p>Everything inside of these comments will be ignored by the spell checkr. Proofread your own words carefully.</p>

  <!-- cspell:enable -->
  ```

> [!IMPORTANT]
> You need to have line breaks between the `cspell` comments and any HTML elements,
> otherwise the build will error with `Module build failed`.

#### Tips

Before adding a word or section to be ignored, see if there is a way to make it pass the spell check. Technical terms that are part of an API may need to be wrapped in code formatting. For example, the word `keydown` is flagged as an unknown word by the spell checker, but this is a [Web API event](https://developer.mozilla.org/en-US/docs/Web/API/Element/keydown_event). We can wrap any mentions of `keydown` in two backticks (<code>\`keydown\`</code>) in order to avoid it being flagged by the spell checker.

Comments disabling the next line or entire sections of documentation are useful for making the spell checker ignore people's names.

In general, we should try to avoid ignoring words unless they are technical terms that are used throughout the documentation and wouldn't necessarily make sense formatted as code.

---

## Using VS Code on Windows

The Ionic docs were originally built in a Mac-based environment, so Mac-focused linting rules apply when committing changes. To contribute on Windows, do the following:

- Configure VS Code to read/save files using line breaks (LF) instead of carriage returns (CRLF). Set it globally by navigating to: Settings -> Text Editor -> Files -> Eol. Set to `\n`.
- Check that the Git setting `core.autocrlf` is set to `false`: run `git config -l | grep autocrlf`. Switch it to false using: `git config --global core.autocrlf false`.
- If you've already cloned the `ionic-docs` repo, the files may already be cached as LF. To undo this, you need to clean the cache files of the repository. Run the following (make sure you stage or commit your changes first): `git rm --cached -r .` then `git reset --hard`.

## Project Structure

Ionic's documentation is built using [Docusaurus](https://docusaurus.io/). The content is either written or generated as Markdown.

### Directories

- `scripts/` - build scripts used to generate markdown or json files
- `src/` - source code and content of the docs
  - `components/` - components used across the site
    - `global/` - components used globally
    - `page/` - components used on a single page or in a limited scope
  - `styles/` - global styles and variables
    - `components/` - styles split out into the components they target
- `static/`
  - `demos/` - self-contained demos, optionally presented by pages via `demoUrl` YAML frontmatter
  - `usage/` - playgrounds that can be created by running `npm run playground:new` [(docs)](_templates/README.md#new-playground-template)
- `versioned_docs/` - versions of the docs created by the docusaurus versioning command
- `versioned_sidebars/` - versions of the docs sidebars created by the docusaurus versioning command

## Authoring Content

The content of the Ionic docs is written as [Markdown](https://commonmark.org/) in `docs/`. Each Markdown file corresponds to a route unless explicitly changed in the frontmatter.

```
/docs/                  =>  src/pages/index.md
/docs/intro/cli         =>  src/pages/intro/cli.md
/docs/theming/advanced  =>  src/pages/theming/advanced.md
/docs/theming           =>  src/pages/theming.md
```

You can make copy edits to the site by [editing the Markdown files directly on GitHub](https://help.github.com/articles/editing-files-in-another-user-s-repository/). In your pull request, please explain what was missing from or inaccurate about the content.

### Reference Content

The Markdown in `docs/` does not only contain manually written markdown files:

- Paths matching `/docs/api/*` are built from the [Ionic Framework](https://github.com/ionic-team/ionic) source code
- Paths matching `/docs/native/*` are built from the [Ionic Native](https://github.com/ionic-team/ionic-native) source code
- Paths matching `/docs/cli/commands/*` are built from the [Ionic CLI](https://github.com/ionic-team/ionic-cli) source code

## Translation

The Ionic docs have been translated into Japanese and are in the process of being translated into Chinese, French, Portuguese, and Spanish. We've chosen these languages because we believe they have the greatest number of developers where English-only documentation would be a barrier.

We use Crowdin for our translation service. You can participate in the translation effort on the [Ionic Crowdin page](https://crowdin.com/project/ionic-docs).

_Please submit translation issues to the Crowdin page and not the Ionic Docs GitHub repo._

<!-- cspell:disable-next-line -->

The Japanese translation of the docs were built by an independent team, lead by [rdlabo](https://github.com/rdlabo) and can be found and contributed to on the [ionic-jp group's `ionic-docs` project page](https://github.com/ionic-jp/ionic-docs).

## Reporting Issues

Before submitting an issue to the Ionic docs repo, please search [existing issues](https://github.com/ionic-team/ionic-docs/issues) to avoid duplicate reports.

If the issue you're reporting is a bug, please be sure it is an issue with the Ionic docs themselves and not the subject of the documentation. With your report, please provide:

- Steps to reproduce
- Expected behavior
- OS and browser versions
- If possible, a demo repo or CodePen/CodeSandbox

> [!NOTE]
> Some [reference content](#reference-content) is pulled from other Ionic repos. In that case, please submit your issue on the docs repo with a link to the repo where the content lives.

---

## Pull Request Guidelines

When submitting pull requests, please keep the scope of your change contained to a single feature or bug. When in doubt, err on the side of smaller pull requests. If your pull request is a new feature, we would recommend opening an issue first to come to an agreement about the feature before putting in significant time.

---

## Deploying

The Ionic documentation's `main` branch is deployed automatically and separately from the [Ionic site](https://github.com/ionic-team/ionic-site) itself. The Ionic site then uses a proxy for paths under `/docs` to request the deployed documentation.

### バージョンのアーカイブ {/* #archiving-a-version */}

アーカイブされたバージョンは、毎回`main`デプロイごとに再構築されるのではなく、凍結された Vercel デプロイメントから提供されるため、ビルド時間とメモリ使用量を低く抑えられます。これを制御するファイルは 2 つあります：

- [`versions.json`](./versions.json)：Docusaurus が毎回のデプロイで再構築するバージョンをリストします。
- [`versionsArchived.json`](./versionsArchived.json)：各アーカイブされたバージョンを、バージョンピッカーがリンクする固定されたデプロイ URL にマッピングします。

アーカイブされた URL は、そのバージョンを*含む*ビルドを指す必要があるので、まずビルドを作成し、それから`versionsArchived.json`に移動します:

1. **バージョンをビルドします。** `versions.json` にあることを確認してください。すでにアーカイブされているバージョンを更新する場合は、`versionsArchived.json` から取り出して `versions.json` に戻します。コミットしてプッシュし、Vercel にデプロイさせます。
2. **デプロイをプロモートします。** Vercel ダッシュボードでそのデプロイを開き、**本番にプロモート**してクリーンアップされないようにします。ビルドが完了するまで再度プッシュしないでください。さもないとキャンセルされる場合があります。
3. **URL をコピーします。** デプロイのユニークな `ionic-docs-<hash>-ionic1.vercel.app` URL を使用し、ブランチや本番エイリアスは使用しないでください。
4. **アーカイブします。** `versions.json` からバージョンを削除し、`/docs/<version>` を追加して末尾のスラッシュなしで `versionsArchived.json` に追加します（末尾のスラッシュは一瞬の 404 フラッシュを引き起こします）。

   ```json
   {
     "v6": "https://ionic-docs-<hash>-ionic1.vercel.app/docs/v6"
   }
   ```

5. **PR を開きます。** マージされると、バージョンピッカーはアーカイブへのリンクになり、`main`そのバージョンのビルドを停止します。

削除されたバージョンは`versioned_docs/`と`versioned_sidebars/`の内容を保持しているため、`versions.json`に戻すことでいつでも再構築できます。

> [!注意]
> Ionic v3 と v4 は別のビルドツールを使用しており、ここでは管理されていません。

---

## License

This repo is licensed and managed separately from Ionic itself.

By contributing to this repo, you agree to have your contributions licensed under the Apache 2.0 license. See [LICENSE](LICENSE) for the full license text.
