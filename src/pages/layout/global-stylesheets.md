---
initialTab: 'preview'
inlineHtmlPreviews: true
previousText: 'Responsive Grid'
previousUrl: '/docs/layout/grid'
nextText: 'CSS Utilities'
nextUrl: '/docs/layout/css-utilities'
contributors:
  - brandyscarney
---

# グローバルスタイルシート

Ionic Frameworkのコンポーネントスタイルは自己完結型ですが、Ionicのすべての機能を使用するために含めるべきいくつかのグローバルスタイルシートがあります。一部のスタイルシートは、Ionic Frameworkアプリケーションが正しく表示され動作するために必要です。また、他のスタイルシートには、アプリケーションを素早くスタイル設定するためのオプションのユーティリティが含まれています。

## 利用可能なグローバルスタイルシート

### 必須

Ionic Frameworkが正しく機能するためには、次のCSSファイルが含まれている必要があります。

#### core.css

このファイルは、Ionicのコンポーネントが正しく動作するために必要な唯一のスタイルシートです。アプリ固有のスタイルが含まれており、`color` プロパティがコンポーネント間で機能することを可能にします。このファイルが含まれていないと、テーマカラーが表示されず、一部の要素が正しく表示されない場合があります。


### おすすめ

次のCSSファイルをIonic Frameworkのアプリに含めることをお勧めします。含まれていない場合、一部の要素はデザインが崩れることがあります。Ionic Frameworkのコンポーネントが、アプリ以外で使用されている場合、これらのファイルは必要ないかもしれません。

#### structure.css

`<html>` にスタイルを適用し、 `box-sizing` を `border-box` に設定します。それはスクロールがモバイル機器のネイティブのように振る舞うことを確実にします。

#### typography.css

Typography は、文書全体の font-family を変更し、見出し要素のフォントスタイルを変更します。また、いくつかのネイティブテキスト要素に配置スタイルを適用します。

#### normalize.css

ブラウザがすべての要素をより一貫して最新の標準に沿って表示するようにします。これは [Normalize.css](https://necolas.github.io/normalize.css/) に基づいています。


### オプション

次のCSSファイルはオプションであり、アプリケーションがこれらの機能を使用していない場合は、コメントアウトしたり削除しても問題ありません。

#### padding.css

任意の要素の余白または余白を変更するためのユーティリティクラスを追加します。使用法については [CSS Utilities](./css-utilities#content-space) を参照してください。

#### float-elements.css

ブレークポイントと横幅に基づいて要素を float するためのユーティリティクラスを追加します。使用法については [CSS Utilities](./css-utilities#element-placement) を参照してください。

#### text-alignment.css

要素のテキストを揃えるため、またはブレークポイントに基づいて空白を調整するためのユーティリティクラスを追加します。使用法については [CSS Utilities](./css-utilities#text-alignment) を参照してください。

#### text-transformation.css

ブレークポイントに基づいて、要素のテキストを `uppercase`, `lowercase` もしくは `capitalize` に変換するためのユーティリティクラスを追加します。使用法については [CSS Utilities](./css-utilities#text-transformation) を参照してください。

#### flex-utils.css

フレックスコンテナと項目を揃えるためのユーティリティクラスを追加します。使用法については [CSS Utilities](./css-utilities#flex-properties) を参照してください。

#### display.css

ブレークポイントに基づいて要素を非表示にするユーティリティクラスを追加します。使用法については [CSS Utilities](./css-utilities#element-display) を参照してください。


## Usage

フレームワークに基づくグローバルスタイルシートを含める方法については [Ionic Packages](../installation/cdn) を、オプションのユーティリティを使用する方法については [CSS Utilities](./css-utilities) を参照してください。