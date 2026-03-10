# ダイナミックフォントスケーリング

ダイナミックフォントスケーリングは、ユーザーが画面上に表示されるテキストのサイズを選択できる機能です。これは、読みやすさのために大きなテキストが必要なユーザーを支援し、小さなテキストを読むことができるユーザーにも対応します。

## 試してみる

:::tip
Android、iOS、または iPadOS デバイスで試してください。

Android の Chrome でテストしている場合は、["Accessibility Page Zoom"](#chrome-for-android)が有効になっていることを確認してください。
:::

[デバイスでのフォントサイズの変更](#changing-the-font-size-on-a-device)ガイドに従って、好みのフォントサイズを設定し、以下のデモのテキストが設定に応じて拡大または縮小するのを確認してください。

import DynamicFontScaling from '@site/static/usage/v8/layout/dynamic-font-scaling/index.md';

<DynamicFontScaling />

## Ionic でダイナミックフォントスケーリングを有効にする

:::info
この機能は現在、iOS ではオプトインです。ただし、Ionic 8 からデフォルトで有効になり、以下の CSS は不要になります。
:::

ダイナミックフォントスケーリングは、Android ではデフォルトで既に有効になっています。開発者は、iOS で以下の手順を使用して有効にできます：

1. [typography.css](/docs/layout/global-stylesheets#typographycss)ファイルがインポートされていることを確認します。
2. グローバルスタイルシートに以下の CSS を追加します：

```css
html {
  --ion-dynamic-font: var(--ion-default-dynamic-font);
}
```

:::note
内部では、Ionic は iOS デバイスでダイナミックフォントスケーリングを有効にするために以下の CSS を設定します：

```css
html {
  font: var(--ion-dynamic-font);
}
```

:::

## ダイナミックフォントスケーリングの使用

### アプリケーションで有効にする

[typography.css](/docs/layout/global-stylesheets#typographycss)ファイルがインポートされている限り、ダイナミックフォントスケーリングはデフォルトで有効になっています。このファイルをインポートすると、`--ion-dynamic-font`変数が定義され、ダイナミックフォントスケーリングがアクティブになります。推奨されませんが、開発者はアプリケーションコードでこの変数を`initial`に設定することで、ダイナミックフォントスケーリングをオプトアウトできます。

### カスタムコンポーネントの統合

開発者は、カスタムコンポーネントを設定して、`px`単位を使用する`font-size`宣言を[rem 単位](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units#lengths)を使用するように変換することで、ダイナミックフォントスケーリングを活用できます。`px`から`rem`に変換する簡単な方法は、ピクセルフォントサイズをデフォルトのブラウザフォントサイズ（通常は`16px`）で割ることです。たとえば、コンポーネントのフォントサイズが`14px`の場合、`14px / 16px = 0.875rem`として`rem`に変換できます。また、フォントサイズがオーバーライドされた Ionic コンポーネントも、`rem`単位を使用するように更新する必要があることに注意してください。

考慮すべき点の 1 つは、コンポーネントの寸法が大きなフォントサイズに対応するために変更する必要がある場合があることです。たとえば、`width`と`height`プロパティをそれぞれ`min-width`と`min-height`に変更する必要がある場合があります。開発者は、[length 値](https://developer.mozilla.org/en-US/docs/Web/CSS/length)を使用する CSS プロパティについてアプリケーションを監査し、`px`から`rem`への適切な変換を行う必要があります。また、大きなテキストを読みやすく保つために、長いテキストを切り詰めるのではなく、次の行に折り返すことをお勧めします。

### カスタムフォントファミリー

Ionic のデフォルトフォントは、あらゆるサイズで見栄えが良く、他のモバイルアプリとの一貫性を確保するように設計されているため、使用することをお勧めします。ただし、開発者は CSS を使用してダイナミックフォントスケーリングでカスタムフォントファミリーを使用できます：

```css
html {
  --ion-dynamic-font: var(--ion-default-dynamic-font);
  --ion-font-family: 'Comic Sans MS';
}
```

### `em`単位と`rem`単位

開発者は、相対フォントサイズに 2 つのオプションがあります：[`em`と`rem`](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units#ems_and_rems)。

`em`単位は、要素のフォントサイズを親のフォントサイズを基準に設定します。

次の例では、`.child`の計算されたフォントサイズは`40px`です。これは`.parent`の子であるためです（`2em * 20px = 40px`）。

```css
.parent {
  font-size: 20px;
}

.child {
  font-size: 2em;
}
```

ただし、`em`単位には複合効果があり、問題を引き起こす可能性があります。次の例では、2 番目の`.child`要素の計算されたフォントサイズは`80px`です。フォントサイズが複合されるためです。

```html
<div class="parent">
  Parent element with 20px
  <div class="child">
    Child element with 40px
    <div class="child">Child element with 80px</div>
  </div>
</div>
```

<div style={{ fontSize: '20px' }}>
  Parent element with 20px
  <div style={{ fontSize: '2em' }}>
    Child element with 40px
    <div style={{ fontSize: '2em' }}>Child element with 80px</div>
  </div>
</div>

この複合効果により、ダイナミックフォントスケーリングで作業する際は、`em`単位の代わりに`rem`単位を使用することを強くお勧めします。`rem`単位は、要素のフォントサイズをルート要素（通常は`<html>`）のフォントサイズを基準に設定します。ルート要素のデフォルトフォントサイズは通常`16px`です。

次の例では、`.child`の計算されたフォントサイズは`32px`です。フォントサイズが`.parent`ではなく`html`を基準に計算されるためです。

```css
.parent {
  font-size: 20px;
}

.child {
  font-size: 2rem;
}
```

## Ionic でのダイナミックフォントスケーリングの仕組み

フォントサイズを定義し、ダイナミックフォントスケーリングに参加する Ionic コンポーネントは、通常[rem 単位](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units#lengths)を使用します。これにより、各コンポーネント内のテキストがルート要素（通常は`html`要素）のフォントサイズを基準にサイズ設定されます。これは、ルート要素のフォントサイズが変更されると、すべての Ionic コンポーネント内のテキストが一貫した方法でスケールすることを意味します。これにより、各コンポーネントのフォントサイズを手動でオーバーライドする必要がなくなります。これらのコンポーネント内の一部の要素（アイコンなど）は、要素をテキストを基準にサイズ設定するために`em`単位を使用しますが、テキスト自体は`rem`単位を使用してサイズ設定されます。

### iOS

Ionic のダイナミックフォントスケーリングは、[Dynamic Type](https://developer.apple.com/documentation/uikit/uifont/scaling_fonts_automatically#overview)と呼ばれる iOS 機能の上に構築されています。これを行うために、Ionic はルート要素の[font](https://developer.mozilla.org/en-US/docs/Web/CSS/font)を Apple 定義のテキストスタイルに設定します。一貫性のために、Ionic は[body](https://developer.apple.com/documentation/uikit/uifont/textstyle/1616682-body)テキストスタイルを使用します。

Apple 定義のテキストスタイルを使用すると、Dynamic Type が有効になり、Ionic コンポーネント内のすべてのテキストがシステムレベルの設定に従ってスケールします。これらの Apple 定義フォントは Apple デバイスでのみ機能することに注意してください。その結果、アプリが`ios`モードを使用している場合でも、これらのフォントは Android デバイスでは機能しません。

Ionic は、アプリが`ios`モードの場合、[Apple の Human Interface Guidelines for Typography](https://developer.apple.com/design/human-interface-guidelines/typography)に従います。その結果、テキストサイズが変更されると、重要なコンテンツが優先されます。これは、いくつかのことを意味します：

1. `ion-header`または`ion-footer`内のコンテンツには最大フォントサイズが設定され、`ion-header`と`ion-footer`内のコンテンツよりも重要と見なされる`ion-content`内のコンテンツが優先されます。
2. `ion-badge`や`ion-back-button`などのコンポーネントには最小フォントサイズが設定され、読みやすさが保たれます。
3. `ion-tab-bar`や`ion-picker`などのコンポーネント内のテキストは、Apple の Human Interface Guidelines に従ってダイナミックフォントスケーリングに参加しません。

### Android Web View

Android Web View のフォントスケーリングメカニズムは、Web コンテンツで常に有効になっており、`px`単位で定義されたフォントサイズを自動的にスケールします。これは、`px`を使用して指定された最大または最小フォントサイズは、最終的なフォントサイズが指定された最大または最小フォントサイズと一致しない場合でも、スケールされることを意味します。

次の例では、[min()](https://developer.mozilla.org/en-US/docs/Web/CSS/min)関数を使用して、`.foo`のフォントサイズが`14px`を超えないように指定しています。

```css
.foo {
  font-size: min(1rem, 14px);
}
```

ルート要素のデフォルトフォントサイズが`16px`で、システムレベルのフォントスケールが`1.5`（つまり、テキストサイズを 50%増やす）の場合、`1rem`は`16 * 1.5 = 24`であるため、`24px`と評価されます。

これは定義された最大値`14px`より大きいため、`.foo`の評価されたフォントサイズは`14px`であると想定されるかもしれません。ただし、Android Web View は`px`単位で定義されたフォントサイズをスケールするため、`min()`関数で使用される`14px`も 1.5 倍にスケールされます。

その結果、最大計算フォントサイズは実際には`14 * 1.5 = 21`であるため`21px`となり、したがって`.foo`の全体的な計算フォントサイズは`21px`です。

### Chrome for Android

Android の Chrome Web Browser は、Android Web View とは異なる動作をします。デフォルトでは、Chrome for Android はシステムレベルのフォントスケール設定を尊重しません。ただし、Chromium チームはこれを可能にする新機能に取り組んでいます。有効にすると、この機能は`html`要素の`zoom`レベルを変更し、テキストに加えてレイアウトのサイズも増加させます。

開発者は、`chrome://flags`で実験的な「Accessibility Page Zoom」機能を有効にすることで、この動作をテストできます。

詳細については、https://bugs.chromium.org/p/chromium/issues/detail?id=645717を参照してください。

### 異なるプラットフォームでのモードの使用

各プラットフォームには、わずかに異なるフォントスケーリング動作があり、`ios`と`md`モードは、それぞれのプラットフォームでのスケーリング動作を活用するように実装されています。

たとえば、`ios`モードは、[Apple の Human Interface Guidelines for Typography](https://developer.apple.com/design/human-interface-guidelines/typography)に従うために最大および最小フォントサイズを利用します。`md`モードは、Material Design には同じガイダンスがないため、この同じ動作を実装していません。これは、iOS デバイスで`md`モードを使用すると、ヘッダーとフッターで非常に大きなフォントサイズが許可される可能性があることを意味します。

その結果、ダイナミックフォントスケーリングを使用する場合は、iOS デバイスで`ios`モードを使用し、Android デバイスで`md`モードを使用することを強くお勧めします。

## デバイスでのフォントサイズの変更

フォントスケーリングの設定は、ユーザーがデバイスごとに設定します。これにより、ユーザーはこの動作をサポートするすべてのアプリケーションでフォントをスケールできます。このガイドでは、各プラットフォームでフォントスケーリングを有効にする方法を示します。

### iOS

iOS でのフォントスケーリングは、設定アプリで設定できます。

詳細については、[Apple Support](https://support.apple.com/en-us/102453)を参照してください。

### Android

ユーザーがフォントスケーリング設定にアクセスする場所はデバイスによって異なりますが、通常は設定アプリの「アクセシビリティ」ページにあります。

:::info
Android の Chrome Web Browser には、システムレベルのフォントスケールを尊重する際にいくつかの制限があります。詳細については、[Chrome for Android](#chrome-for-android)を参照してください。
:::

## トラブルシューティング

### ダイナミックフォントスケーリングが機能しない

ダイナミックフォントスケーリングがアプリに影響を与えない理由はいくつかあります。以下のリストは網羅的ではありませんが、ダイナミックフォントスケーリングが機能しない理由をデバッグするために確認すべきいくつかのことを提供します。

1. Ionic のバージョンがダイナミックフォントスケーリングをサポートしていることを確認してください。ダイナミックフォントスケーリングは、Ionic v7.5 から追加されました。
2. [typography.css](/docs/layout/global-stylesheets#typographycss)ファイルがインポートされていることを確認してください。このファイルは、ダイナミックフォントスケーリングが機能するために必要です。
3. コードがルート要素のデフォルトフォントサイズをオーバーライドしていないことを確認してください。ルート要素にフォントサイズを手動で設定すると、ダイナミックフォントスケーリングが意図したとおりに機能しなくなります。
4. コードが Ionic コンポーネントのフォントサイズをオーバーライドしていないことを確認してください。`font-size`ルールを設定する Ionic コンポーネントは`rem`単位を使用します。ただし、アプリがそれを`px`を使用するようにオーバーライドしている場合、そのカスタムルールを`rem`を使用するように変換する必要があります。詳細については、[カスタムコンポーネントの統合](#integrating-custom-components)を参照してください。
5. Chrome for Android を使用している場合は、「Accessibility Page Zoom」が有効になっていることを確認してください。詳細については、[Chrome for Android](#chrome-for-android)を参照してください。

### Android で最大および最小フォントサイズが尊重されない

Android Web View は、システムレベルのフォントスケール設定によって`px`単位で定義されたフォントサイズをスケールします。これは、実際のフォントサイズが[min()](https://developer.mozilla.org/en-US/docs/Web/CSS/min)、[max()](https://developer.mozilla.org/en-US/docs/Web/CSS/max)、または[clamp()](https://developer.mozilla.org/en-US/docs/Web/CSS/clamp)で定義されたフォントサイズより大きいか小さい可能性があることを意味します。

詳細については、[Android でのフォントスケーリングの仕組み](#android)を参照してください。

### ダイナミックフォントスケーリングが無効でもフォントサイズが大きい/小さい

Ionic コンポーネントは、ダイナミックフォントスケーリングが無効になっている場合でも、[rem 単位](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units#lengths)を使用してフォントサイズを定義します。これにより、各コンポーネント内のテキストがルート要素（通常は`html`要素）のフォントサイズを基準にサイズ設定されます。その結果、`html`のフォントサイズが変更されると、すべての Ionic コンポーネントの計算されたフォントサイズも変更されます。

### スケールされた Ionic iOS コンポーネントのフォントサイズがネイティブ iOS の同等物と完全に一致しない

Action Sheet などの特定のネイティブ iOS コンポーネントは、Ionic がアクセスできないプライベートフォントスケールを使用します。ネイティブの動作にできるだけ近づけようとしていますが、一部のコンポーネントのテキストは、ネイティブの対応物よりわずかに大きくまたは小さくレンダリングされる場合があります。

### iOS で Ionic アプリのテキストサイズがダイナミックフォントスケーリングを有効にしたときに変更された

ルート要素のデフォルトフォントサイズは通常`16px`です。ただし、iOS デバイスでのダイナミックフォントスケーリングは、デフォルトフォントサイズが`17px`の["Body"テキストスタイル](https://developer.apple.com/design/human-interface-guidelines/typography#Specifications)を利用します。Ionic コンポーネント内のテキストはルート要素のフォントサイズを基準にスケールされるため、システムレベルのテキストスケールが変更されていなくても、ダイナミックフォントスケーリングを有効にすると一部のテキストが大きくなったり小さくなったりする場合があります。

:::info
iOS は、デフォルトフォントサイズが`16px`の"Callout"テキストスタイルを提供します。ただし、このフォントスタイルは現在、Web コンテンツに公開されていません。詳細については、[WebKit でサポートされているテキストスタイル](https://webkit.org/blog/3709/using-the-system-font-in-web-content/)を参照してください。
:::
