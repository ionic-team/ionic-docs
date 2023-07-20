---
title: CSS Shadow Parts
---

<head>
  <title>CSS Shadow Parts - Style CSS Properties Inside of A Shadow Tree</title>
  <meta
    name="description"
    content="CSS Shadow Parts allow developers to style CSS properties on elements inside of a shadow tree. Read to learn more about customizing Ionic Shadow DOM components."
  />
</head>

CSS Shadow Parts は、開発者がシャドウツリー内の要素に CSS プロパティをスタイル設定することを可能にします。これは、Ionic Framework <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM" target="_blank" rel="noopener noreferrer">Shadow DOM</a>コンポーネントをカスタマイズする際に非常に便利です。

## なぜShadow Parts?

Ionic Frameworkは、<a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components" target="_blank" rel="noopener noreferrer">Web Components</a>の分散型セットです。Web Componentsは、スタイルとマークアップをカプセル化するために<a href="https://w3c.github.io/webcomponents/spec/shadow/" target="_blank" rel="noopener noreferrer">Shadow DOMの仕様</a>に従っています。

:::note
Ionic Frameworkのコンポーネントは、すべてのShadow DOMコンポーネント**ではありません**。Shadow DOM コンポーネントの場合、その [component documentation](../components.md) の右上にバッジが表示されます。Shadow DOM コンポーネントの例としては、[button component](../api/button.md) があります。
:::

Shadow DOM は、スタイルがコンポーネントから漏れて、意図せずに他の要素に適用されるのを防ぐのに便利です。例えば、`ion-button` コンポーネントに `.button` クラスを割り当てています。Shadow DOM によるカプセル化がなければ、ユーザーが自分の要素に `.button` クラスを設定した場合、Ionic Framework のボタンスタイルを継承してしまうでしょう。ion-button` は Shadow コンポーネントであるため、これは問題ではありません。

しかし、このカプセル化のために、スタイルはShadowコンポーネントの内部要素に侵入することができません。つまり、Shadow コンポーネントがそのシャドウツリーの内部にある要素をレンダリングする場合、その内部要素を CSS で直接ターゲットにすることはできません。例として `ion-select` コンポーネントを使用すると、次のようなマークアップがレンダリングされます。

```html
<ion-select>
  #shadow-root
  <div class="select-text select-placeholder"></div>
  <div class="select-icon"></div>
</ion-select>
```

プレースホルダーのテキストとアイコン要素は `#shadow-root` の内部にあるため、以下のCSSはプレースホルダーのスタイル付けに **無効** です。

```css
/* Does NOT work */
ion-select .select-placeholder {
  color: blue;
}
```

So how do we solve this? [CSS Shadow Parts](#shadow-parts-explained)!

## Shadow Partsの説明

Shadow Partsは、開発者がシャドウツリーの外側から、シャドウツリー内のスタイルを設定することを可能にします。これを行うには、[part](#exposing-a-part) を公開し 、[::part](#how-part-works) を使用してスタイルを設定する必要があります。

### Partsの公開

シャドウ DOM コンポーネントを作成する際、シャドウツリー内の要素に `part` 属性を割り当てることで、パートを追加することができます。これはIonic Frameworkでコンポーネントに追加され、エンドユーザーからのアクションは必要ありません。

引き続き、例として `ion-select` コンポーネントを使用し、マークアップは以下のように更新されます。

```html
<ion-select>
  #shadow-root
  <div part="placeholder" class="select-text select-placeholder"></div>
  <div part="icon" class="select-icon"></div>
</ion-select>
```

上記では、`placeholder`と`icon`という2つのPartsを表示しています。すべてのPartsについては、[select documentation](../api/select.md#css-shadow-parts) を参照してください。

これらのPartsが公開されたことで、要素は [::part](#how-part-works) を使って直接スタイルを設定することができるようになりました。

### How ::part works

<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part" target="_blank" rel="noopener noreferrer">`::part()`</a> 擬似要素により、開発者はPart属性で公開されているシャドウツリー内の要素を選択することができます。

`ion-select` は、値が選択されていないときにテキストをスタイル付けするための `placeholder` Partを公開していることが分かっているので、次のようにカスタマイズすることができます。

```css
ion-select::part(placeholder) {
  color: blue;
  opacity: 1;
}
```

`part` を使ったスタイリングでは、その要素で受け付けられる任意のCSSプロパティを変更することができます。

partをターゲットにできることに加え、<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements" target="_blank" rel="noopener noreferrer">擬似要素</a>を明示的に露出させずにスタイル付けすることができます。

```css
ion-select::part(placeholder)::first-letter {
  font-size: 22px;
  font-weight: 500;
}
```

Partsは、ほとんどの<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes" target="_blank" rel="noopener noreferrer">擬似クラス</a>でも動作します。

```css
ion-item::part(native):hover {
  color: green;
}
```

:::note
[ベンダープレフィックス擬似要素](#vendor-prefixed-pseudo-elements) と [構造擬似クラス](#structural-pseudo-classes) には、いくつかの既知の制限があります。
:::

## Ionic FrameworkのParts

Ionic Frameworkコンポーネントのすべての公開Partsは、そのAPIページの「CSS Shadow Parts」の見出しで確認できます。すべてのコンポーネントとそのAPIページを表示するには、[Component documentation](../components.md) を参照してください。

コンポーネントがPartsを持つためには、以下の条件を満たしている必要があります。

- [Shadow DOM](../reference/glossary.md#shadow) コンポーネントであること。 [Scoped](../reference/glossary.md#scoped) または Light DOM コンポーネントの場合、子要素を直接対象とすることができる。コンポーネントが Scoped または Shadow の場合、[コンポーネントのドキュメントページ](../components.md) にその名前で表示されます。
- これは子要素を含んでいます。例えば、`ion-card-header` はShadowコンポーネントですが、すべてのスタイルはホストエレメントに適用されます。子要素を持たないので、Partsは必要ありません。
- 子要素は構造的なものではありません。`ion-title` を含む特定のコンポーネントでは、子要素は内部要素を配置するために使用される構造的な要素です。構造的な要素をカスタマイズすることは、予期しない結果をもたらす可能性があるため、お勧めしません。

:::note
追加partsの推奨を歓迎します。partsをリクエストする際は、<a href="https://github.com/ionic-team/ionic-framework/issues/new?assignees=&labels=&template=feature_request.md&title=feat%3A+" target="_blank" rel="noopener noreferrer">new GitHub issue</a> にできるだけ多くの情報を添えて作成してください。
:::

## 既知の制限

### ブラウザサポート

CSS Shadow Partsは最近のすべてのメジャーブラウザでサポートされています。ただし、一部の古いバージョンではshadow partsがサポートされていません。アプリにpartsを実装する前に、<a href="https://caniuse.com/#feat=mdn-css_selectors_part" target="_blank" rel="noopener noreferrer">ブラウザのサポート</a>が要件を満たしていることを確認してください。旧バージョンのブラウザのサポートが必要な場合は、引き続き [CSS Variables](../theming/css-variables.md) を使用してスタイリングすることをお勧めします。

### ベンダープレフィックス擬似要素

<a href="https://developer.mozilla.org/en-US/docs/Glossary/Vendor_Prefix" target="_blank" rel="noopener noreferrer">
  Vendor prefixed
</a> 擬似要素は、現時点ではサポートされていません。例えば、`::-webkit-scrollbar`擬似要素のようなものです。

```css
/* Does NOT work */
my-component::part(scroll)::-webkit-scrollbar {
  background: green;
}
```

詳しくは <a href="https://github.com/w3c/csswg-drafts/issues/4530" target="_blank" rel="noopener noreferrer">GitHubのIssue</a> をご覧ください。

### 構造的な擬似クラス

ほとんどの擬似クラスはPartsでサポートされていますが、<a href="https://www.w3.org/TR/selectors-4/#structural-pseudos" target="_blank" rel="noopener noreferrer">構造的な擬似クラス</a>はサポートされていません。動作しない構造的擬似クラスの例を以下に示します。

```css
/* Does NOT work */
my-component::part(container):first-child {
  background: green;
}

/* Does NOT work */
my-component::part(container):last-child {
  background: green;
}
```

### Partsの連結

擬似要素 `::part()` は追加の `::part()` にマッチすることができません。

例えば、`my-component::part(button)::part(label)`は何もマッチしません。これは、そうすることで意図した以上の構造的な情報を露出してしまうからです。

もし `<my-component>` の内部ボタンが `part="label => button-label"` のようなものを使って、ボタンの内部Partsをパネル自身のpart要素マップに転送していた場合、 `my-component::part(button-label)` といったセレクタはボタンのラベルだけを選び、他のラベルを無視することになるでしょう。
