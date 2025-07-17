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

## なぜ Shadow Parts?

Ionic Framework は、<a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components" target="_blank" rel="noopener noreferrer">Web Components</a>の分散型セットです。Web Components は、スタイルとマークアップをカプセル化するために<a href="https://w3c.github.io/webcomponents/spec/shadow/" target="_blank" rel="noopener noreferrer">Shadow DOM の仕様</a>に従っています。

:::note
Ionic Framework のコンポーネントは、すべての Shadow DOM コンポーネント**ではありません**。Shadow DOM コンポーネントの場合、その [component documentation](../components.md) の右上にバッジが表示されます。Shadow DOM コンポーネントの例としては、[button component](../api/button.md) があります。
:::

Shadow DOM は、スタイルがコンポーネントから漏れて、意図せずに他の要素に適用されるのを防ぐのに便利です。例えば、`ion-button` コンポーネントに `.button` クラスを割り当てています。Shadow DOM によるカプセル化がなければ、ユーザーが自分の要素に `.button` クラスを設定した場合、Ionic Framework のボタンスタイルを継承してしまうでしょう。ion-button` は Shadow コンポーネントであるため、これは問題ではありません。

しかし、このカプセル化のために、スタイルは Shadow コンポーネントの内部要素に侵入することができません。つまり、Shadow コンポーネントがそのシャドウツリーの内部にある要素をレンダリングする場合、その内部要素を CSS で直接ターゲットにすることはできません。例として `ion-select` コンポーネントを使用すると、次のようなマークアップがレンダリングされます。

```html
<ion-select>
  #shadow-root
  <div class="select-text select-placeholder"></div>
  <div class="select-icon"></div>
</ion-select>
```

プレースホルダーのテキストとアイコン要素は `#shadow-root` の内部にあるため、以下の CSS はプレースホルダーのスタイル付けに **無効** です。

```css
/* Does NOT work */
ion-select .select-placeholder {
  color: blue;
}
```

So how do we solve this? [CSS Shadow Parts](#shadow-parts-explained)!

## Shadow Parts の説明

Shadow Parts は、開発者がシャドウツリーの外側から、シャドウツリー内のスタイルを設定することを可能にします。これを行うには、[part](#exposing-a-part) を公開し 、[::part](#how-part-works) を使用してスタイルを設定する必要があります。

### Parts の公開

シャドウ DOM コンポーネントを作成する際、シャドウツリー内の要素に `part` 属性を割り当てることで、パートを追加することができます。これは Ionic Framework でコンポーネントに追加され、エンドユーザーからのアクションは必要ありません。

引き続き、例として `ion-select` コンポーネントを使用し、マークアップは以下のように更新されます。

```html
<ion-select>
  #shadow-root
  <div part="placeholder" class="select-text select-placeholder"></div>
  <div part="icon" class="select-icon"></div>
</ion-select>
```

上記では、`placeholder`と`icon`という 2 つの Parts を表示しています。すべての Parts については、[select documentation](../api/select.md#css-shadow-parts) を参照してください。

これらの Parts が公開されたことで、要素は [::part](#how-part-works) を使って直接スタイルを設定することができるようになりました。

### How ::part works

<!-- prettier-ignore -->
<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part" target="_blank" rel="noopener noreferrer">`::part()`</a> 擬似要素により、開発者はPart属性で公開されているシャドウツリー内の要素を選択することができます。

`ion-select` は、値が選択されていないときにテキストをスタイル付けするための `placeholder` Part を公開していることが分かっているので、次のようにカスタマイズすることができます。

```css
ion-select::part(placeholder) {
  color: blue;
  opacity: 1;
}
```

`part` を使ったスタイリングでは、その要素で受け付けられる任意の CSS プロパティを変更することができます。

part をターゲットにできることに加え、<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements" target="_blank" rel="noopener noreferrer">擬似要素</a>を明示的に露出させずにスタイル付けすることができます。

```css
ion-select::part(placeholder)::first-letter {
  font-size: 22px;
  font-weight: 500;
}
```

Parts は、ほとんどの<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes" target="_blank" rel="noopener noreferrer">擬似クラス</a>でも動作します。

```css
ion-item::part(native):hover {
  color: green;
}
```

:::note
[ベンダープレフィックス擬似要素](#vendor-prefixed-pseudo-elements) と [構造擬似クラス](#structural-pseudo-classes) には、いくつかの既知の制限があります。
:::

## Ionic Framework の Parts

Ionic Framework コンポーネントのすべての公開 Parts は、その API ページの「CSS Shadow Parts」の見出しで確認できます。すべてのコンポーネントとその API ページを表示するには、[Component documentation](../components.md) を参照してください。

コンポーネントが Parts を持つためには、以下の条件を満たしている必要があります。

- [Shadow DOM](../reference/glossary.md#shadow) コンポーネントであること。 [Scoped](../reference/glossary.md#scoped) または Light DOM コンポーネントの場合、子要素を直接対象とすることができる。コンポーネントが Scoped または Shadow の場合、[コンポーネントのドキュメントページ](../components.md) にその名前で表示されます。
- これは子要素を含んでいます。例えば、`ion-card-header` は Shadow コンポーネントですが、すべてのスタイルはホストエレメントに適用されます。子要素を持たないので、Parts は必要ありません。
- 子要素は構造的なものではありません。`ion-title` を含む特定のコンポーネントでは、子要素は内部要素を配置するために使用される構造的な要素です。構造的な要素をカスタマイズすることは、予期しない結果をもたらす可能性があるため、お勧めしません。

:::note
追加 parts の推奨を歓迎します。parts をリクエストする際は、<a href="https://github.com/ionic-team/ionic-framework/issues/new?assignees=&labels=&template=feature_request.md&title=feat%3A+" target="_blank" rel="noopener noreferrer">new GitHub issue</a> にできるだけ多くの情報を添えて作成してください。
:::

## 既知の制限

### ブラウザサポート

CSS Shadow Parts は最近のすべてのメジャーブラウザでサポートされています。ただし、一部の古いバージョンでは shadow parts がサポートされていません。アプリに parts を実装する前に、<a href="https://caniuse.com/#feat=mdn-css_selectors_part" target="_blank" rel="noopener noreferrer">ブラウザのサポート</a>が要件を満たしていることを確認してください。旧バージョンのブラウザのサポートが必要な場合は、引き続き [CSS Variables](../theming/css-variables.md) を使用してスタイリングすることをお勧めします。

### ベンダープレフィックス擬似要素

<p>
  <a href="https://developer.mozilla.org/en-US/docs/Glossary/Vendor_Prefix" target="_blank" rel="noopener noreferrer">
    Vendor prefixed
  </a>
  擬似要素は現時点ではサポートされていません。この例としては、 `::-webkit-scrollbar` 擬似要素があります： pseudo-elements:
</p>

```css
/* Does NOT work */
my-component::part(scroll)::-webkit-scrollbar {
  background: green;
}
```

詳しくは <a href="https://github.com/w3c/csswg-drafts/issues/4530" target="_blank" rel="noopener noreferrer">GitHub の Issue</a> をご覧ください。

### 構造的な擬似クラス

ほとんどの擬似クラスは Parts でサポートされていますが、<a href="https://www.w3.org/TR/selectors-4/#structural-pseudos" target="_blank" rel="noopener noreferrer">構造的な擬似クラス</a>はサポートされていません。動作しない構造的擬似クラスの例を以下に示します。

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

### Parts の連結

擬似要素 `::part()` は追加の `::part()` にマッチすることができません。

例えば、`my-component::part(button)::part(label)`は何もマッチしません。これは、そうすることで意図した以上の構造的な情報を露出してしまうからです。

もし `<my-component>` の内部ボタンが `part="label => button-label"` のようなものを使って、ボタンの内部 Parts をパネル自身の part 要素マップに転送していた場合、 `my-component::part(button-label)` といったセレクタはボタンのラベルだけを選び、他のラベルを無視することになるでしょう。
