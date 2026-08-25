---
title: "ion-accordion"
---
import Props from '@ionic-internal/component-api/v9/accordion/props.md';
import Events from '@ionic-internal/component-api/v9/accordion/events.md';
import Methods from '@ionic-internal/component-api/v9/accordion/methods.md';
import Parts from '@ionic-internal/component-api/v9/accordion/parts.md';
import CustomProps from '@ionic-internal/component-api/v9/accordion/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v9/accordion/slots.md';

<head>
  <title>ion-accordion: アコーディオンコンポーネント: 作り方と例</title>
  <meta name="description" content="Ion-accordion components provide collapsible sections in content to reduce vertical space and organize information. Learn how to build one and explore examples." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />


アコーディオンは、情報を整理してグループ化する方法を提供しながら、垂直方向のスペースを減らすために、コンテンツに折り畳み可能なセクションを提供します。すべての `ion-accordion` コンポーネントは `ion-accordion-group` コンポーネントの中にグループ化されている必要があります。

## 基本的な使い方

import Basic from '@site/static/usage/v9/accordion/basic/index.mdx';

<Basic />

## アコーディオンをトグルする方法

どのアコーディオンを開くかは、`ion-accordion-group` の `value` プロパティを設定することで制御できます。このプロパティを設定することで、開発者はプログラムによって特定のアコーディオンを展開したり折りたたんだりすることができます。

import Toggle from '@site/static/usage/v9/accordion/toggle/index.mdx';

<Toggle />

## アコーディオンの状態変化を監視

:::caution
[Input](./input) や [Textarea](./textarea) などの他のコンポーネントが発する `ionChange` イベントのほとんどはバブル化されます。その結果、アコーディオンの中で関連コンポーネントが使用されている場合、これらのイベントはバブルアップし、アコーディオングループの `ionChange` リスナーを発火させます。

アコーディオンの内部で `ionChange` を発する他のコンポーネントを使用する場合は、アコーディオングループの `ionChange` コールバックに、コールバックに渡されたイベントの `target` キーをチェックさせ、`ionChange` がアコーディオングループからのものであり、子孫からのものでないことを確認することをお勧めします。
:::

開発者は `ionChange` イベントをリッスンして、アコーディオンが展開または折りたたまれたときに通知を受けることができます。

import ListenChanges from '@site/static/usage/v9/accordion/listen-changes/index.mdx';

<ListenChanges />

## 複数のアコーディオン

開発者は `multiple` プロパティを使用して、複数のアコーディオンを一度に開くことができるようにすることができます。

import Multiple from '@site/static/usage/v9/accordion/multiple/index.mdx';

<Multiple />

## アコーディオンの無効化

### アコーディオンを無効にする

個々のアコーディオンは、`ion-accordion` の `disabled` プロパティで無効にできます。

import DisableIndividual from '@site/static/usage/v9/accordion/disable/individual/index.mdx';

<DisableIndividual />

### アコーディオングループ

アコーディオングループは、`ion-accordion-group` の `disabled` プロパティで無効にすることができます。

import DisableGroup from '@site/static/usage/v9/accordion/disable/group/index.mdx';

<DisableGroup />

## 読み込み可能なアコーディオン

### アコーディオンを無効にする

個々のアコーディオンは、`ion-accordion` の `readonly` プロパティで無効にできます。

import ReadonlyIndividual from '@site/static/usage/v9/accordion/readonly/individual/index.mdx';

<ReadonlyIndividual />

### アコーディオングループ

アコーディオングループは、`ion-accordion-group` の `readonly` プロパティで無効にできます。

import ReadonlyGroup from '@site/static/usage/v9/accordion/readonly/group/index.mdx';

<ReadonlyGroup />

## 構造

## ヘッダー

`header` slotは、アコーディオンを展開または折りたたむためのトグルとして使用されます。アクセシビリティとテーマ機能を利用するために、ここでは `ion-item` を使用することをお勧めします。

`header`スロットで`ion-item`を使用する場合、`ion-item`の`button`プロパティは`true`に、`detail`プロパティは`false`に設定されます。さらに、`ion-item`にはトグルアイコンも自動的に追加されます。このアイコンはアコーディオンを展開または折りたたむ際に自動的に回転します。詳細については、[アイコンのカスタマイズ](#icons)を参照してください。

### コンテンツ

`content` slotは、アコーディオンの状態に応じて表示/非表示される部分として使用されます。1ページに1つだけ `ion-content` インスタンスを追加する必要があるため、ここには他の `ion-content` インスタンスを除いて何でも置くことができます。

## カスタマイズ

### 拡張スタイル

組み込みの拡張スタイルには、`compact` と `inset` の 2 種類があります。この拡張スタイルは `ion-accordion-group` の `expand` プロパティによって設定されます。

`expand="inset"` の場合、アコーディオングループにはborder radiusが与えられます。 `md` モードでは、アコーディオン全体を開くと下に移動します。

import ExpansionStyles from '@site/static/usage/v9/accordion/customization/expansion-styles/index.mdx';

<ExpansionStyles />

### 高度な拡張スタイル

アコーディオンの状態に応じてスタイルを設定することで、展開の動作をカスタマイズすることができます。 `ion-accordion` には4つのステートクラスが適用されています。これらのクラスを使ってスタイリングすることで、高度な状態遷移を作成することができます。

| クラス名   | 説明                              |
| ---------- |-----------------------------------|
| `.accordion-expanding` | アコーディオンがアクティブに展開しているときに適用されます。    |
| `.accordion-expanded` | アコーディオンが完全に展開されたときに適用されます。        |
| `.accordion-collapsing` | アコーディオンがアクティブに折りたたまれているときに適用されます。 |
| `.accordion-collapsed` | アコーディオンが完全に折りたたまれているときに適用されます。    |

アコーディオンの特定の部分をターゲットにする必要がある場合、要素を直接ターゲットにすることをお勧めします。例えば、アコーディオンが展開されたときに `header` slot の ion-item をカスタマイズしたい場合、以下のセレクタを使用することができます。

```css
ion-accordion.accordion-expanding ion-item[slot="header"],
ion-accordion.accordion-expanded ion-item[slot="header"] {
  --color: red;
}
```

import AdvancedExpansionStyles from '@site/static/usage/v9/accordion/customization/advanced-expansion-styles/index.mdx';

<AdvancedExpansionStyles />

### アイコン {/* #icons */}

`header` slot に `ion-item` を使用する場合、自動的に `ion-icon` が追加されます。使用するアイコンの種類は `toggleIcon` プロパティで制御でき、追加するスロットも `toggleIconSlot` プロパティで制御することができます。

アイコンを自分で管理したい場合や、`ion-icon` 以外のアイコンを使用したい場合は、icon 要素に `ion-accordion-toggle-icon` クラスを追加することができます。

どのオプションを選択しても、アコーディオンを展開または折りたたむと、アイコンは自動的に回転します。

import Icons from '@site/static/usage/v9/accordion/customization/icons/index.mdx';

<Icons />

### テーマ

`ion-accordion` はヘッダーとコンテンツ要素を囲むシェルとして機能するので、アコーディオンを簡単に好きなようにテーマ化することができます。ヘッダーのテーマは、スロットの `ion-item` をターゲットにすることで行うことができます。 `ion-item` を使用しているので、 [ion-item CSS Variables](./item#css-custom-properties) と  [ion-item Shadow Parts](./item#css-shadow-parts) にもすべてアクセスすることができます。コンテンツのテイムも、`content` slotにある要素をターゲットにすることで簡単に実現できます。

import Theming from '@site/static/usage/v9/accordion/customization/theming/index.mdx';

<Theming />

## アクセシビリティ

### アニメーション

デフォルトでは、アコーディオン・アイテムを展開したり折りたたんだりする際にアニメーションが有効になります。アニメーションは `prefers-reduced-motion` メディアクエリがサポートされ、`reduce` に設定されると自動的に無効化されます。対応していないブラウザでは、Ionic Frameworkアプリで `animated` を設定することで、アニメーションを無効にすることができます。

import AccessibilityAnimations from '@site/static/usage/v9/accordion/accessibility/animations/index.mdx';

<AccessibilityAnimations />

### キーボードインタラクション

`ion-accordion-group` の中で使用する場合、`ion-accordion` はキーボードによる操作を完全にサポートしています。次の表は、それぞれのキーが何をするのかの詳細です。

| Key                                  | Description                                                  |
| ------------------------------------ | ------------------------------------------------------------ |
| <kbd>Space</kbd> or <kbd>Enter</kbd> | When focus is on the accordion header, the accordion will collapse or expand depending on the state of the component. |
| <kbd>Tab</kbd>                       | Moves focus to the next focusable element.                   |
| <kbd>Shift</kbd> + <kbd>Tab</kbd>    | Moves focus to the previous focusable element.               |
| <kbd>Down Arrow</kbd>                | - When focus is on an accordion header, moves focus to the next accordion header.  <br />- When focus is on the last accordion header, moves focus to the first accordion header. |
| <kbd>Up Arrow</kbd>                  | - When focus is on an accordion header, moves focus to the previous accordion header.  <br />- When focus is on the first accordion header, moves focus to the last accordion header. |
| <kbd>Home</kbd>                      | When focus is on an accordion header, moves focus to the first accordion header. |
| <kbd>End</kbd>                       | When focus is on an accordion header, moves focus to the last accordion header. |

## パフォーマンス

### アニメーション

アコーディオンアニメーションは、アニメーションを開始するときに `content` slotの高さを知ることによって動作します。アコーディオンは、この高さがアニメーションの間、一貫して保たれることを期待します。そのため、開発者はアニメーション中にコンテンツの高さを変更するような操作を行わないようにしなければなりません。

例えば、画像の遅延読み込みは、読み込み時にレイアウトのずれを引き起こすことがあります。アニメーションの再生中に、遅延読み込みされる画像（`loading="lazy"` を指定したネイティブの `<img>` など）がデータを読み込み、それに合わせて寸法が変化すると、`content` slot の高さも変わる可能性があります。これを避けるために、開発者には次の選択肢があります。

1. `loading="lazy"` を省略し、画像を即時に読み込みます。`<img>` はデフォルトでは遅延読み込みを行わないため、アニメーション中ではなく事前に画像が読み込まれます。これは最も簡単な方法で、遅延読み込みの恩恵が小さい画像に適しています。

2. あらかじめ画像用の領域を確保します。遅延読み込みが必要で画像の寸法がわかっている場合（同じサイズのアイコンを読み込む場合など）、属性または CSS を使用して `<img>` の幅と高さを設定します。これにより、レイアウトのずれを防ぎながら遅延読み込みを利用できます。

3. これらの解決方法を選択できない場合、開発者は [ion-accordion-group](./accordion-group) の `animated` プロパティを使用してアニメーションを完全に無効にすることを検討することができます。

## プロパティ
<Props />

## イベント
<Events />

## メソッド
<Methods />

## CSS Shadow Parts
<Parts />

## CSSカスタムプロパティ
<CustomProps />

## Slots
<Slots />
