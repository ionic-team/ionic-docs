---
nextText: 'Scaffolding'
nextUrl: '/docs/building/scaffolding'
contributors:
  - dwieeb
---

# アプリ開発をはじめる

新しくIonicアプリを始めるのはとても簡単です。 コマンドラインで `ionic start` を入力すれば、CLIが残りの処理をうまくやってくれます。

<command-line>
    <command-prompt>ionic start</command-prompt>
    <command-output>
        <br />
        <span class="bold">Every great app needs a name! 😍</span><br />
        <br />
        Please enter the full name of your app. You can change this at any time.
        To bypass this prompt next time, supply <span class="green">name</span>,
        the first argument to <span class="green">ionic start</span>.<br />
        <br />
        <span class="bold green">?</span> <span class="bold">Project name:</span> <command-cursor blink></command-cursor><br />
    </command-output>
</command-line>

Ionic CLIがプロンプトを表示し、プロジェクト名やどのテンプレートを使用するかを対話形式で質問してきます。これらの質問は下記のようにコマンドへの引数として予め入力すればスキップすることも可能です。

```shell
$ ionic start myApp tabs
```

この場合、`myApp` はプロジェクト名、`tabs` はテンプレート名、そしてプロジェクトタイプは　`angular` を意味します。

使用できるテンプレートは `tabs` だけではありません。どのプロジェクトタイプを選んだとしても、下記の3つのテンプレートが使用可能です。

- `tabs`: タブを使ったレイアウト
- `sidemenu`: サイドメニューを使ったレイアウト
- `blank`: シングルページの空のプロジェクト

使用可能なテンプレートは下記のコマンドで確認できます:

```shell
$ ionic start --list
```

これらのテンプレートはIonicアプリ開発におけるベストプラクティスで書かれているので、とても良い出発点となるでしょう。
