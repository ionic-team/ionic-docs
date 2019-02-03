---
previousText: 'Starting'
previousUrl: '/docs/building/starting'
nextText: 'Migration'
nextUrl: '/docs/building/migration'
---

# アプリ開発の基本

Ionic CLIでアプリを作成したあとは、機能やコンポーネントを追加していきましょう。たいていの場合、`src/app/`ディレクトリ下で開発を進めていくことになります。

## プロジェクト構成

<file-tree>
    <file-tree-directory name="src">
        <file-tree-directory name="app" collapsed></file-tree-directory>
        <file-tree-directory name="assets" collapsed></file-tree-directory>
        <file-tree-directory name="environments" collapsed></file-tree-directory>
        <file-tree-directory name="theme" collapsed></file-tree-directory>
        <file-tree-file name="global.scss"></file-tree-file>
        <file-tree-file name="index.html"></file-tree-file>
        <file-tree-file name="karma.conf.js"></file-tree-file>
        <file-tree-file name="main.ts"></file-tree-file>
        <file-tree-file name="polyfills.ts"></file-tree-file>
        <file-tree-file name="test.ts"></file-tree-file>
        <file-tree-file name="tsconfig.app.json"></file-tree-file>
        <file-tree-file name="tsconfig.spec.json"></file-tree-file>
    </file-tree-directory>
</file-tree>

`src/`ディレクトリは、`index.html`のようなファイルや、テスト用の設定ファイル、画像用のassetフォルダ、そしてアプリのコードを格納する`app/`ディレクトリを持っています。

<file-tree>
    <file-tree-directory name="src">
        <file-tree-directory name="app">
            <file-tree-file name="app-routing.module.ts"></file-tree-file>
            <file-tree-file name="app.component.html"></file-tree-file>
            <file-tree-file name="app.component.spec.ts"></file-tree-file>
            <file-tree-file name="app.component.ts"></file-tree-file>
            <file-tree-file name="app.module.ts"></file-tree-file>
        </file-tree-directory>
    </file-tree-directory>
</file-tree>

`src/app/`ディレクトリはアプリのルートコンポーネントとモジュールを含んでおり、同様にPageやComponent、Serviceなどのアプリの機能群を含んだディレクトリも含んでいます。

## 機能を追加する

Ionic CLIは[`ionic generate`](/docs/cli/generate)コマンドでアプリに新しい機能を追加していくことができます。コマンドラインで`ionic generate`を実行すると選択式のプロンプトが表示され、使用可能な機能のリストを表示します。

<command-line>
    <command-prompt>ionic generate</command-prompt>
    <command-output>
        <span class="green">?</span> <span class="bold">What would you like to generate?</span>
        <br />
        <span class="cyan bold">❯ page</span>
        <br />
        &nbsp;&nbsp;component
        <br />
        &nbsp;&nbsp;service
        <br />
        &nbsp;&nbsp;module
        <br />
        &nbsp;&nbsp;class
        <br />
        &nbsp;&nbsp;directive
        <br />
        &nbsp;&nbsp;guard
    </command-output>
</command-line>

作りたい機能を選択した後、Ionic CLIが機能名を尋ねてきます。機能名にはパスも入力可能で、プロジェクト構成に適した機能を簡単に配置することができます。

> 機能名には`portfolio/intro`といったようなどんな階層のネスト構造も入力可能です。例として、`ionic g component "portfolio/intro/About Me"` と入力することで、そのコンポーネントのスコープをページ内に限定することができます。

<command-line>
    <command-prompt>ionic generate</command-prompt>
    <command-output>
        <span class="green">?</span> <span class="bold">What would you like to generate? <span class="cyan">page</span></span>
        <br />
        <span class="green">?</span> <span class="bold">Name/path of <span class="green">page</span>:</span> portfolio
    </command-output>
    <command-cursor blink></command-cursor>
</command-line>

もう一つの方法として、生成する機能の`type`と`name`は直接コマンドに引数として渡すこともできます:

<command-line>
    <command-prompt>ionic g page "User Detail"</command-prompt>
    <command-output>
        &gt; <span class="green">ng generate page "User Detail"</span>
        <br />
        <span class="green">CREATE</span> src/app/user-detail/user-detail.module.ts (564 bytes)
        <br />
        <span class="green">CREATE</span> src/app/user-detail/user-detail.page.scss (0 bytes)
        <br />
        <span class="green">CREATE</span> src/app/user-detail/user-detail.page.html (138 bytes)
        <br />
        <span class="green">CREATE</span> src/app/user-detail/user-detail.page.spec.ts (720 bytes)
        <br />
        <span class="green">CREATE</span> src/app/user-detail/user-detail.page.ts (280 bytes)
        <br />
        <span class="bold">UPDATE</span> src/app/app-routing.module.ts (475 bytes)
        <br />
        [<span class="green bold">OK</span>] Generated page!
    </command-output>
</command-line>

Ionic CLIを使って機能を生成すると、フレームワークに基づいてベストプラクティスとなる構成を自動的に設定してくれます。 `@ionic/angular`モジュールに関連する機能を生成するときは、内部的にAngular CLIが使用されます。

新しいページのためのファイルやディレクトリを生成したあと、CLIは新しいページを含んだルーティング設定も自動で更新してくれます。つまり、開発サイクルにおける手動での作業を減らしてくれるということです。

より詳細な情報がほしい場合は、コマンドラインに`ionic g --help`を入力するか、`ionic generate`の[ドキュメント](/docs/cli/generate)をご覧ください。
