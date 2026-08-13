---
sidebar_label: How to Contribute
---

# Contributing to Ionic

Thanks for the interest in contributing to Ionic Framework!

## Contributing Etiquette

行動規範のルールに関する情報については、[貢献者行動規範](coc.md)を参照してください。

## Creating an Issue

- If you have a question about using the framework, please ask on the [Ionic Forum](http://forum.ionicframework.com/).

- It is required that you clearly describe the steps necessary to reproduce the issue you are running into. Although we would love to help our users as much as possible, diagnosing issues without clear reproduction steps is extremely time-consuming and simply not sustainable.

- The issue list of the [Ionic](https://github.com/ionic-team/ionic) repository is exclusively for bug reports and feature requests. Non-conforming issues will be closed immediately.

- Issues with no clear steps to reproduce will not be triaged. If an issue is labeled with "needs: reply" and receives no further replies from the author of the issue for more than 14 days, it will be closed.

- バグを見つけた、または新機能のアイデアがある場合は、まず同じ内容がすでに[報告されていないか](https://github.com/ionic-team/ionic/issues?utf8=%E2%9C%93&q=is%3Aissue)確認してください。既存の Issue を検索して、類似する報告がないか確認できます。解決策とともにクローズされている場合もあるため、クローズ済みの Issue も対象にしてください。

- Next, [create a new issue](https://github.com/ionic-team/ionic/issues/new/choose) that thoroughly explains the problem. Please fill out the populated issue form before submitting the issue.

## Creating a Good Code Reproduction

### What is a Code Reproduction?

A code reproduction is a small application that is built to demonstrate a particular issue. The code reproduction should contain the minimum amount of code needed to recreate the issue and should focus on a single issue.

### Why Should You Create a Reproduction?

A code reproduction of the issue you are experiencing helps us better isolate the cause of the problem. This is an important first step to getting any bug fixed!

Without a reliable code reproduction, it is unlikely we will be able to resolve the issue, leading to it being closed. In other words, creating a code reproduction of the issue helps us help you.

### How to Create a Reproduction

- Create a new Ionic application using one of our starter templates. The `blank` starter application is a great choice for this. You can create one using the following Ionic CLI command: `ionic start myApp blank`
- Add the minimum amount of code needed to recreate the issue you are experiencing. Do not include anything that is not required to reproduce the issue. This includes any 3rd party plugins you have installed.
- Publish the application on GitHub and include a link to it when [creating an issue](#creating-an-issue).
- Be sure to include steps to reproduce the issue. These steps should be clear and easy to follow.

### Benefits of Creating a Reproduction

- **Uses the latest version of Ionic:** By creating a new Ionic application, you are ensuring that you are testing against the latest version of the framework. Sometimes the issues you are experiencing have already been resolved in a newer version of the framework!
- **Minimal surface area:** By removing code that is not needed in order to reproduce the issue, it makes it easier to identify the cause of the issue.
- **No secret code needed:** Creating a minimal reproduction of the issue prevents you from having to publish any proprietary code used in your project.
- **Get help fixing the issue:** If we can reliably reproduce an issue, there is a good chance we will be able to address it.

## Creating a Pull Request

- We appreciate you taking the time to contribute! Before submitting a pull request, we ask that you please [create an issue](#creating-an-issue) that explains the bug or feature request and let us know that you plan on creating a pull request for it. If an issue already exists, please comment on that issue letting us know you would like to submit a pull request for it. This helps us to keep track of the pull request and make sure there isn't duplicated effort.

- Looking for an issue to fix? Make sure to look through our issues with the [help wanted](https://github.com/ionic-team/ionic/issues?q=is%3Aopen+is%3Aissue+label%3A%22help+wanted%22) label!

### Setup

1. [Download the installer](https://nodejs.org/) for the LTS version of Node.js. This is the best way to also [install npm](https://blog.npmjs.org/post/85484771375/how-to-install-npm#_=_).
2. Fork the [Ionic](https://github.com/ionic-team/ionic) repository.
3. Clone your fork.
4. Create a new branch from master for your change.
5. Navigate into the directory of the package you wish to modify (core, angular, etc.).
6. Run `npm install` to install dependencies for this package.
7. Follow the steps for the specific package below.

### Core

#### Modifying Components

1. `/core/src/components/` 内の変更するコンポーネントを特定します。
2. [Stencil Documentation](https://stenciljs.com/docs/introduction/) およびその他のコンポーネントを参照して、これらのコンポーネントの実装を理解します。
3. コンポーネントに変更を加えます。変更が複雑すぎる場合や一般的でない場合は、変更内容を理解できるようにコメントを追加してください。
4. [変更をローカルでプレビュー](#preview-changes) します。
5. 必要に応じて [ドキュメントを修正](#modifying-documentation) します。
6. ディレクトリで [lint を実行](#lint-changes) し、エラーがないことを確認します。
7. [プロジェクトをビルド](#building-changes) します。
8. ビルドが完了したら、変更をコミットします。すべてのコミットには、[コミットメッセージの形式](#commit-message-format) に従ってください。
9. [変更のプルリクエストを提出](#submit-pull-request) します。

#### Preview Changes

1. Run `npm start` from within the `core` directory.
2. A browser should open at `http://localhost:3333/`.
3. From here, navigate to one of the component's tests to preview your changes.
4. If a test showing your change doesn't exist, [add a new test or update an existing one](#modifying-tests).
5. To test in RTL mode, once you are in the desired component's test, add `?rtl=true` at the end of the url; for example: `http://localhost:3333/src/components/alert/test/basic?rtl=true`.

#### Lint Changes

1. Run `npm run lint` to lint the TypeScript and Sass.
2. If there are lint errors, run `npm run lint.fix` to automatically fix any errors. Repeat step 1 to ensure the errors have been fixed, and manually fix them if not.
3. To lint and fix only TypeScript errors, run `npm run lint.ts` and `npm run lint.ts.fix`, respectively.
4. To lint and fix only Sass errors, run `npm run lint.sass` and `npm run lint.sass.fix`, respectively.

#### Modifying Documentation

1. Locate the `readme.md` file in the component's directory.
2. Modify the documentation **above** the line that says `<!-- Auto Generated Below -->` in this file.
3. To update any of the auto generated documentation below that line, make the relevant changes in the following places:

- `Usage`: update the component's usage examples in the component's `usage/` directory
- `Properties`, `Events`, or `Methods`: update the component's TypeScript file (`*.tsx`)
- `CSS Custom Properties`: update the component's main Sass file (`*.scss`)

#### Modifying Tests

1. コンポーネントのディレクトリ内の `test/` フォルダで変更するテストを特定します。
2. テストが存在する場合、修正された問題や追加された機能を再現する例を追加してテストを修正します。
3. 新しいテストが必要な場合、最も簡単な方法は、コンポーネントの `test/` ディレクトリから `basic/` ディレクトリをコピーし、それに名前を付け直し、`index.html` および `e2e.ts` ファイルの内容を編集することです（このファイルについては [Screenshot Tests](#screenshot-tests) を参照してください）。
4. `preview/` ディレクトリはドキュメントでデモとして使用されます。テストにバグがある場合または API に変更があり、テストに反映されていない場合のみ、このテストを更新してください。

##### Screenshot Tests

1. テストがスクリーンショットに存在する場合、そのテストのディレクトリには`e2e.ts`という名前のファイルが存在します。
2. スクリーンショットテストは、このファイルを含め、`page.compareScreenshot()`への呼び出しを含む 1 つ以上の`test()`呼び出しを追加することで追加できます。例については、[Stencil のエンドツーエンドテスト](https://stenciljs.com/docs/end-to-end-testing)および`core/`の既存テストを参照してください。
3. **重要:** 各`test()`は 1 回のスクリーンショット（`page.compareScreenshot()`）呼び出しのみを持つべきです**または**、各テストの最後で expect をチェックする必要があります。不一致がある場合、テストは失敗し、残りのテストが実行されないことがあります。つまり、最初のスクリーンショットが失敗した場合、残りのスクリーンショット呼び出しは別のテストに含まれているか、すべての expect が最後に呼び出されない限り実行されません。
4. スクリーンショットをローカルで実行するには、次のコマンドを使用してください: `npm run test.screenshot`。
   - 特定のテストのスクリーンショットを実行するには、テストのパスまたは検索文字列を渡してください。
   - 例えば、すべての`alert`テストを実行する場合: `npm run test.screenshot alert`。
   - または、基本的な`alert`テストを実行する場合: `npm run test.screenshot src/components/alert/test/basic/e2e.ts`。

#### Building Changes

1. Once all changes have been made and the documentation has been updated, run `npm run build` inside of the `core` directory. This will add your changes to any auto-generated files, if necessary.
2. Review the changes and, if everything looks correct, [commit](#commit-message-format) the changes.
3. Make sure the build has finished before committing. If you made changes to the documentation, properties, methods, or anything else that requires an update to a generate file, this needs to be committed.
4. After the changes have been pushed, publish the branch and [create a pull request](#creating-a-pull-request).

### Submit Pull Request

1. [新しいプルリクエストを作成](https://github.com/ionic-team/ionic/compare)し、`master`ブランチを`base`として指定します。変更を見つけるために`compare across forks`をクリックする必要がある場合があります。
2. 詳細については、[フォークからプルリクエストを作成する](https://help.github.com/articles/creating-a-pull-request-from-a-fork/)GitHub のヘルプ記事を参照してください。
3. 提供されたプルリクエストテンプレートを可能な限り記入し、関連する問題を必ず含めてください。

## Commit Message Guidelines

We have very precise rules over how our git commit messages should be formatted. This leads to readable messages that are easy to follow when looking through the project history. We also use the git commit messages to generate our [changelog](https://github.com/ionic-team/ionic/blob/master/CHANGELOG.md). Our format closely resembles Angular's [commit message guidelines](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#commit).

### Commit Message Format

We follow the [Conventional Commits specification](https://www.conventionalcommits.org/). A commit message consists of a **header**, **body** and **footer**. The header has a **type**, **scope** and **subject**:

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

The **header** is mandatory and the **scope** of the header is optional.

### Revert

If the commit reverts a previous commit, it should begin with `revert: `, followed by the header of the reverted commit. In the body it should say: `This reverts commit <hash>.`, where the hash is the SHA of the commit being reverted.

### Type

If the prefix is `feat`, `fix` or `perf`, it will appear in the changelog. However if there is any [BREAKING CHANGE](#footer), the commit will always appear in the changelog.

Must be one of the following:

- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation only changes
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **perf**: A code change that improves performance
- **test**: Adding missing tests
- **chore**: Changes to the build process or auxiliary tools and libraries such as documentation generation

### Scope

The scope can be anything specifying place of the commit change. Usually it will refer to a component but it can also refer to a utility. For example `action-sheet`, `button`, `css`, `menu`, `nav`, etc. If you make multiple commits for the same component, please keep the naming of this component consistent. For example, if you make a change to navigation and the first commit is `fix(nav)`, you should continue to use `nav` for any more commits related to navigation. As a general rule, if you're modifying a component use the name of the folder.

### Subject

The subject contains succinct description of the change:

- use the imperative, present tense: "change" not "changed" nor "changes"
- do not capitalize first letter
- do not place a period `.` at the end
- entire length of the commit message must not go over 50 characters
- describe what the commit does, not what issue it relates to or fixes
- **be brief, yet descriptive** - we should have a good understanding of what the commit does by reading the subject

### Body

Just as in the **subject**, use the imperative, present tense: "change" not "changed" nor "changes".
The body should include the motivation for the change and contrast this with previous behavior.

### Footer

The footer should contain any information about **Breaking Changes** and is also the place to
reference GitHub issues that this commit **Closes**.

**Breaking Changes** should start with the word `BREAKING CHANGE:` with a space or two newlines. The rest of the commit message is then used for this.

### Examples

Does not appear in the generated changelog:

```
docs(changelog): update steps to update
```

Appears under "Features" header, toast subheader:

```
feat(toast): add 'buttons' property
```

Appears under "Bug Fixes" header, skeleton-text subheader, with a link to issue #28:

```
fix(skeleton-text): use proper color when animated

closes #28
```

Appears under "Performance Improvements" header, and under "Breaking Changes" with the breaking change explanation:

```
perf(css): remove all css utility attributes

BREAKING CHANGE: The CSS utility attributes have been removed. Use CSS classes instead.
```

Appears under "Breaking Changes" with the breaking change explanation:

```
refactor(animations): update to new animation system

BREAKING CHANGE:

Removes the old animation system to use the new Ionic animations.
```

The following commit and commit `667ecc1` do not appear in the changelog if they are under the same release. If not, the revert commit appears under the "Reverts" header.

```
revert: feat(skeleton-text): add animated property

This reverts commit 667ecc1654a317a13331b17617d973392f415f02.
```

## License

By contributing your code to the ionic-team/ionic GitHub Repository, you agree to license your contribution under the MIT license.
