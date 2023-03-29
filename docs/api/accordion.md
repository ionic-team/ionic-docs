---
title: "ion-accordion"
---
import Props from '@ionic-internal/component-api/v7/accordion/props.md';
import Events from '@ionic-internal/component-api/v7/accordion/events.md';
import Methods from '@ionic-internal/component-api/v7/accordion/methods.md';
import Parts from '@ionic-internal/component-api/v7/accordion/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/accordion/custom-props.md';
import Slots from '@ionic-internal/component-api/v7/accordion/slots.md';

<head>
  <title>Ion-Accordion Components: How to Build & Examples | Ionic</title>
  <meta name="description" content="Ion-accordionコンポーネントは、コンテンツに折りたたみ可能なセクションを設け、縦方向のスペースを減らし、情報を整理することができます。組み立て方とサンプルをご覧ください。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />


アコーディオンは、情報を整理してグループ化する方法を提供しながら、垂直方向のスペースを減らすために、コンテンツに折り畳み可能なセクションを提供します。すべての `ion-accordion` コンポーネントは `ion-accordion-group` コンポーネントの中にグループ化されている必要があります。

## 基本的な使い方

import Basic from '@site/static/usage/v7/accordion/basic/index.md';

<Basic />

## アコーディオンをトグルする方法

どのアコーディオンを開くかは、`ion-accordion-group` の `value` プロパティを設定することで制御できます。このプロパティを設定することで、開発者はプログラムによって特定のアコーディオンを展開したり折りたたんだりすることができます。

import Toggle from '@site/static/usage/v7/accordion/toggle/index.md';

<Toggle />

## アコーディオンの状態変化を監視

開発者は `ionChange` イベントを監視することで、アコーディオンが展開または折りたたまれたときに通知されるようにすることができます。

import ListenChanges from '@site/static/usage/v7/accordion/listen-changes/index.md';

<ListenChanges />

## 複数のアコーディオン

開発者は `multiple` プロパティを使用して、複数のアコーディオンを一度に開くことができるようにすることができます。

import Multiple from '@site/static/usage/v7/accordion/multiple/index.md';

<Multiple />

## アコーディオンの無効化

### アコーディオンを無効にする

個々のアコーディオンは、`ion-accordion` の `disabled` プロパティで無効にできます。

import DisableIndividual from '@site/static/usage/v7/accordion/disable/individual/index.md';

<DisableIndividual />

### アコーディオングループ

アコーディオングループは、`ion-accordion-group` の `disabled` プロパティで無効にすることができます。

import DisableGroup from '@site/static/usage/v7/accordion/disable/group/index.md';

<DisableGroup />

## 読み込み可能なアコーディオン

### 個別アコーディオン

個々のアコーディオンは、`ion-accordion` の `readonly` プロパティで無効にできます。

import ReadonlyIndividual from '@site/static/usage/v7/accordion/readonly/individual/index.md';

<ReadonlyIndividual />

### アコーディオングループ

アコーディオングループは、`ion-accordion-group` の `readonly` プロパティで無効にできます。

import ReadonlyGroup from '@site/static/usage/v7/accordion/readonly/group/index.md';

<ReadonlyGroup />

## 構造

## ヘッダー

`header` slotは、アコーディオンを展開または折りたたむためのトグルとして使用されます。アクセシビリティとテーマ機能を利用するために、ここでは `ion-item` を使用することをお勧めします。

`header` slotに `ion-item` を使用する場合、 `ion-item` の `button` プロパティは `true` に、 `detail` プロパティは `false` に設定されます。さらに、`ion-item` にはトグルアイコンも自動的に追加されます。このアイコンは、アコーディオンを展開したり折りたたんだりすると、自動的に回転するようになります。詳しくは、 [アイコンのカスタマイズ](#icons) を参照してください。

### コンテンツ

`content` slotは、アコーディオンの状態に応じて表示/非表示される部分として使用されます。1ページに1つだけ `ion-content` インスタンスを追加する必要があるため、ここには他の `ion-content` インスタンスを除いて何でも置くことができます。

## カスタマイズ

### 拡張スタイル

組み込みの拡張スタイルには、`compact` と `inset` の 2 種類があります。この拡張スタイルは `ion-accordion-group` の `expand` プロパティによって設定されます。

`expand="inset"` の場合、アコーディオングループにはborder radiusが与えられます。 `md` モードでは、アコーディオン全体を開くと下に移動します。

import ExpansionStyles from '@site/static/usage/v7/accordion/customization/expansion-styles/index.md';

<ExpansionStyles />

### 高度な拡張スタイル

アコーディオンの状態に応じてスタイルを設定することで、展開の動作をカスタマイズすることができます。 `ion-accordion` には4つのステートクラスが適用されています。これらのクラスを使ってスタイリングすることで、高度な状態遷移を作成することができます。

| Class Name | Description |
| ---------- | ----------- |
| `.accordion-expanding` | Applied when the accordion is actively expanding |
| `.accordion-expanded` | Applied when the accordion is fully expanded |
| `.accordion-collapsing` | Applied when the accordion is actively collapsing |
| `.accordion-collapsed` | Applied when the accordion is fully collapsed |

アコーディオンの特定の部分をターゲットにする必要がある場合、要素を直接ターゲットにすることをお勧めします。例えば、アコーディオンが展開されたときに `header` slot の ion-item をカスタマイズしたい場合、以下のセレクタを使用することができます。

```css
ion-accordion.accordion-expanding ion-item[slot="header"],
ion-accordion.accordion-expanded ion-item[slot="header"] {
  --color: red;
}
```

import AdvancedExpansionStyles from '@site/static/usage/v7/accordion/customization/advanced-expansion-styles/index.md';

<AdvancedExpansionStyles />

### アイコン

`header` slot に `ion-item` を使用する場合、自動的に `ion-icon` が追加されます。使用するアイコンの種類は `toggleIcon` プロパティで制御でき、追加するスロットも `toggleIconSlot` プロパティで制御することができます。

アイコンを自分で管理したい場合や、`ion-icon` 以外のアイコンを使用したい場合は、icon 要素に `ion-accordion-toggle-icon` クラスを追加することができます。

どのオプションを選択しても、アコーディオンを展開または折りたたむと、アイコンは自動的に回転します。

import Icons from '@site/static/usage/v7/accordion/customization/icons/index.md';

<Icons />

### テーマ

`ion-accordion` はヘッダーとコンテンツ要素を囲むシェルとして機能するので、アコーディオンを簡単に好きなようにテーマ化することができます。ヘッダーのテーマは、スロットの `ion-item` をターゲットにすることで行うことができます。 `ion-item` を使用しているので、 [ion-item CSS Variables](./item#css-custom-properties) と  [ion-item Shadow Parts](./item#css-shadow-parts) にもすべてアクセスすることができます。コンテンツのテイムも、`content` slotにある要素をターゲットにすることで簡単に実現できます。

import Theming from '@site/static/usage/v7/accordion/customization/theming/index.md';

<Theming />

## アクセシビリティ

### アニメーション

デフォルトでは、アコーディオン・アイテムを展開したり折りたたんだりする際にアニメーションが有効になります。アニメーションは `prefers-reduced-motion` メディアクエリがサポートされ、`reduce` に設定されると自動的に無効化されます。対応していないブラウザでは、Ionic Frameworkアプリで `animated` を設定することで、アニメーションを無効にすることができます。

import AccessibilityAnimations from '@site/static/usage/v7/accordion/accessibility/animations/index.md';

<AccessibilityAnimations />

### キーボードナビゲーション

`ion-accordion-group` の中で使用する場合、`ion-accordion` はキーボードによる操作を完全にサポートしています。次の表は、それぞれのキーが何をするのかの詳細です。

| Key                | Function                                                     |
| ------------------ | ------------------------------------------------------------ |
| `Space` or `Enter` | When focus is on the accordion header, the accordion will collapse or expand depending on the state of the component. |
| `Tab`              | Moves focus to the next focusable element.                   |
| `Shift` + `Tab`    | Moves focus to the previous focusable element.               |
| `Down Arrow`       | - When focus is on an accordion header, moves focus to the next accordion header.  <br />- When focus is on the last accordion header, moves focus to the first accordion header. |
| `Up Arrow`         | - When focus is on an accordion header, moves focus to the previous accordion header.  <br />- When focus is on the first accordion header, moves focus to the last accordion header. |
| `Home`             | When focus is on an accordion header, moves focus to the first accordion header. |
| `End`              | When focus is on an accordion header, moves focus to the last accordion header. |

## パフォーマンス

### アニメーション

アコーディオンアニメーションは、アニメーションを開始するときに `content` slotの高さを知ることによって動作します。アコーディオンは、この高さがアニメーションの間、一貫して保たれることを期待します。そのため、開発者はアニメーション中にコンテンツの高さを変更するような操作を行わないようにしなければなりません。

例えば、[ion-img](./img) を使用すると、画像を遅延ロードするため、レイアウトのずれが生じることがあります。つまり、アニメーションを再生すると、 `ion-img` が画像データをロードし、ロードされた画像データを考慮して `ion-img` の寸法が変更されることになります。その結果、 `content` slotの高さが変化してしまうことがあります。これを避けるために、開発者にはいくつかのオプションがあります。

1. 遅延読み込みを行わない `img` 要素を使用します。`ion-img` は常に遅延読み込みを使用しますが、`img` はデフォルトでは遅延読み込みを使用しません。これは最も単純なオプションで、遅延読み込みの恩恵をあまり受けない小さな画像を使用する場合に有効です。

2. `ion-img` に最小の幅と高さを設定します。遅延読み込みを使用する必要があり、前もって画像の寸法がわかっている場合（同じサイズのアイコンを読み込む場合など）、CSS を使用して `ion-img` に最小限の幅または高さを設定することができます。これにより、開発者はレイアウトの崩れを防ぎつつ、遅延ロードの恩恵を受けることができます。これは、 `img` 要素を `loading="lazy"` と共に使用する場合にも有効です!

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
