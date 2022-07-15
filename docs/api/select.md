---
title: "ion-select"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@site/static/auto-generated/select/props.md';
import Events from '@site/static/auto-generated/select/events.md';
import Methods from '@site/static/auto-generated/select/methods.md';
import Parts from '@site/static/auto-generated/select/parts.md';
import CustomProps from '@site/static/auto-generated/select/custom-props.md';
import Slots from '@site/static/auto-generated/select/slots.md';

<head>
  <title>ion-select: Select One or Multiple Value Boxes or Placeholders</title>
  <meta name="description" content="ion-select is represented by selected value(s), or a placeholder, and dropdown icon. When you tap select, a dialog box appears with an easy to select list." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';
import APITOCInline from '@components/page/api/APITOCInline';

<EncapsulationPill type="shadow" />


Selectは、ネイティブの `<select>` 要素と同様に、オプションのセットからオプションを選択するためのフォームコントロールです。ユーザがselectをタップすると、すべてのオプションを含むダイアログが、選択しやすい大きなリストで表示されます。

selectは、子要素 `<ion-select-option>` とともに使用する必要があります。子要素のオプションに`value`属性が指定されていない場合、そのtextが値として使用されます。

`value` が `<ion-select>` にセットされている場合、オプションはその値に基づいて選択済みになります。

## 単一選択

デフォルトでは、selectを使用すると、ユーザは1つのOptionだけを選択できます。Alertのインターフェースでは、Optionのリストがradio button形式で表示されます。action sheetインタフェースは、1つの値選択でのみ使用できます。selectコンポーネントの値は、選択したオプションの値の値を受け取ります。

import SingleSelectionExample from '@site/static/usage/select/basic/single-selection/index.md';

<SingleSelectionExample />

## インターフェイス

デフォルトでは、select は [ion-alert](alert.md) を使ってAlertのオプションのオーバーレイを開きます。インターフェイスを変更して、[ion-action-sheet](action-sheet.md) または [ion-popover](popover.md) を使用するには、 `action-sheet` または `popover` を `interface` プロパティに渡します。各インタフェースの制限については、他のセクションを参照してください。

### Action Sheet

import ActionSheetExample from '@site/static/usage/select/interfaces/action-sheet/index.md';

<ActionSheetExample />

### Popover

import PopoverExample from '@site/static/usage/select/interfaces/popover/index.md';

<PopoverExample />

## 複数選択

`multiple` 属性を追加して選択すると、複数のOptionを選択できます。複数のOptionを選択できる場合は、checkbox形式のオプションのリストがAlertオーバーレイで表示されます。selectコンポーネントの値は、選択されたすべてのオプション値の配列を受け取ります。

Note: `action-sheet` と `popover` インターフェイスでは、複数選択は動作しません

import MulipleSelectionExample from '@site/static/usage/select/basic/multiple-selection/index.md';

<MulipleSelectionExample />

## Responding to Interaction

select とユーザーのインタラクションを処理する主な方法は、 `ionChange` イベント、 `ionDismiss` イベント、 `ionCancel` イベントです。これらのイベントと select が発生するその他のイベントの詳細については、[イベント](#events) を参照してください。

import RespondingToInteractionExample from '@site/static/usage/select/basic/responding-to-interaction/index.md';

<RespondingToInteractionExample />

## Object値について

選択した値にObjectを使用する場合、これらのObjectの識別情報がサーバーまたはデータベースからのものであれば変更できますが、選択した値の識別情報は変更されません。たとえば、目的のObject値を持つ既存の値がselectにロードされたが、新しく取得されたselectオプションが異なるIDを持つようになった場合などです。これにより、元の選択がそのままの状態であっても、選択に値がまったく表示されなくなります。

デフォルトでは、selectはObjectの等価性(`===`)を使用して、オプションが選択されているかどうかを判断します。これは`compareWiths`プロパティにプロパティ名または関数を指定することで上書きできます。

### Using compareWith

import UsingCompareWithExample from '@site/static/usage/select/objects-as-values/using-comparewith/index.md';

<UsingCompareWithExample />

### Object Values and Multiple Selection

import ObjectValuesAndMultipleSelectionExample from '@site/static/usage/select/objects-as-values/multiple-selection/index.md';

<ObjectValuesAndMultipleSelectionExample />

## SelectのButton

alertはふたつのボタンをサポートしています: `Cancel` と `OK` です。それぞれのボタンは、 `cancelText` と `okText`  プロパティを使ってカスタマイズできます。

`action-sheet` と `popover` インタフェースには `OK` ボタンがありません。いずれかのオプションをクリックすると、自動的にオーバーレイが閉じ、その値が選択されます。`popover` インターフェースには`Cancel`ボタンがないので、backdropをクリックするとオーバーレイが閉じます。

import ButtonTextExample from '@site/static/usage/select/customization/button-text/index.md';

<ButtonTextExample />

## インターフェイスオプション

select は alert、action sheet、popover インターフェースを使用するので、`interfaceOptions` プロパティを通して、これらのコンポーネントにオプションを渡すことができます。これは、カスタムヘッダー、サブヘッダー、CSS クラスなどを渡すために使用できます。

各インターフェースが受け付けるプロパティは、[ion-alert docs](alert.md), [ion-action-sheet docs](action-sheet.md), [ion-popover docs](popover.md) を参照してください。

Note: `alert` インターフェースでは、 `interfaceOptions` は `inputs` や `buttons` をオーバーライドしません。

import InterfaceOptionsExample from '@site/static/usage/select/customization/interface-options/index.md';

<InterfaceOptionsExample />

## カスタマイズ

Selectコンポーネントを構成する2つのユニットがあり、それぞれを別々にスタイルする必要があります。 `ion-select`要素は、ビュー上で選択された値（複数可）、または何もない場合はプレースホルダー、およびドロップダウンのアイコンによって表現されます。インターフェースは、上記の [インターフェース](#interfaces) セクションで定義されており、 `ion-select` をクリックすると開かれるダイアログです。インターフェースには、 `ion-select-option` 要素を追加することで定義されるすべてのオプションが含まれています。次のセクションでは、これらのスタイリングの違いについて説明します。

### Select 要素のスタイリング

前述の通り、`ion-select` 要素は、ビューに表示される値 (またはプレースホルダ) とアイコンのみで構成されています。これをカスタマイズするには、CSSと[CSSカスタムプロパティ](#css-custom-properties)を組み合わせてスタイルを設定します。

また、必要な [ブラウザサポート](https://caniuse.com/#feat=mdn-css_selectors_part) に応じて、CSSのシャドウパーツを使用してセレクトのスタイルを設定することができます。part` を使用することで、要素上の任意のCSSプロパティをターゲットにすることができることに注意してください。

import StylingSelectExample from '@site/static/usage/select/customization/styling-select/index.md';

<StylingSelectExample />

### Select インターフェイスのスタイリング

インターフェイスのダイアログのカスタマイズは、そのインターフェイスのドキュメントのカスタマイズのセクションにしたがって行ってください。

- [アラートのカスタマイズ](alert.md#customization)
- [アクションシートのカスタマイズ](action-sheet.md#customization)
- [ポップオーバーのカスタマイズ](popover.md#customization)

ただし、Selectオプションでは、スタイリングを容易にするためにクラスを設定し、オーバーレイオプションにクラスを渡す機能があります。オプションのカスタマイズの使用例については、[Selectオプションのドキュメント](select-option.md)を参照してください。

## Interfaces

### SelectChangeEventDetail

```typescript
interface SelectChangeEventDetail<T = any> {
  value: T;
}
```

### SelectCustomEvent

必須ではありませんが、このコンポーネントから発行される Ionic イベントでより強く型付けを行うために、`CustomEvent` インターフェースの代わりにこのインターフェースを使用することが可能です。

```typescript
interface SelectCustomEvent<T = any> extends CustomEvent {
  detail: SelectChangeEventDetail<T>;
  target: HTMLIonSelectElement;
}
```

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