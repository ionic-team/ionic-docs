---
title: "ion-select"
---
import Props from '@ionic-internal/component-api/v7/select/props.md';
import Events from '@ionic-internal/component-api/v7/select/events.md';
import Methods from '@ionic-internal/component-api/v7/select/methods.md';
import Parts from '@ionic-internal/component-api/v7/select/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/select/custom-props.md';
import Slots from '@ionic-internal/component-api/v7/select/slots.md';

<head>
  <title>ion-select: Select One or Multiple Value Boxes or Placeholders</title>
  <meta name="description" content="ion-selectは、選択された値（複数可）、またはプレースホルダー、ドロップダウンのアイコンによって表現されます。 selectをタップすると、選択しやすいリストを表示するダイアログボックスが表示されます。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />


Selectは、ネイティブの `<select>` 要素と同様に、オプションのセットからオプションを選択するためのフォームコントロールです。ユーザがselectをタップすると、すべてのオプションを含むダイアログが、選択しやすい大きなリストで表示されます。

selectは、子要素 `<ion-select-option>` とともに使用する必要があります。子要素のオプションに`value`属性が指定されていない場合、そのtextが値として使用されます。

`value` が `<ion-select>` にセットされている場合、オプションはその値に基づいて選択済みになります。

## 単一選択

デフォルトでは、selectを使用すると、ユーザは1つのOptionだけを選択できます。Alertのインターフェースでは、Optionのリストがradio button形式で表示されます。action sheetインタフェースは、1つの値選択でのみ使用できます。selectコンポーネントの値は、選択したオプションの値の値を受け取ります。

import SingleSelectionExample from '@site/static/usage/v7/select/basic/single-selection/index.md';

<SingleSelectionExample />

## インターフェイス

デフォルトでは、select は [ion-alert](alert.md) を使ってAlertのオプションのオーバーレイを開きます。インターフェイスを変更して、[ion-action-sheet](action-sheet.md) または [ion-popover](popover.md) を使用するには、 `action-sheet` または `popover` を `interface` プロパティに渡します。各インタフェースの制限については、他のセクションを参照してください。

### Action Sheet

import ActionSheetExample from '@site/static/usage/v7/select/interfaces/action-sheet/index.md';

<ActionSheetExample />

### Popover

import PopoverExample from '@site/static/usage/v7/select/interfaces/popover/index.md';

<PopoverExample />

## 複数選択

`multiple` 属性を追加して選択すると、複数のOptionを選択できます。複数のOptionを選択できる場合は、checkbox形式のオプションのリストがAlertオーバーレイで表示されます。selectコンポーネントの値は、選択されたすべてのオプション値の配列を受け取ります。

Note: `action-sheet` と `popover` インターフェイスでは、複数選択は動作しません

import MultipleSelectionExample from '@site/static/usage/v7/select/basic/multiple-selection/index.md';

<MultipleSelectionExample />

## Responding to Interaction

select とユーザーのインタラクションを処理する主な方法は、 `ionChange` イベント、 `ionDismiss` イベント、 `ionCancel` イベントです。これらのイベントと select が発生するその他のイベントの詳細については、[イベント](#events) を参照してください。

import RespondingToInteractionExample from '@site/static/usage/v7/select/basic/responding-to-interaction/index.md';

<RespondingToInteractionExample />

## Object値について

選択した値にObjectを使用する場合、これらのObjectの識別情報がサーバーまたはデータベースからのものであれば変更できますが、選択した値の識別情報は変更されません。たとえば、目的のObject値を持つ既存の値がselectにロードされたが、新しく取得されたselectオプションが異なるIDを持つようになった場合などです。これにより、元の選択がそのままの状態であっても、選択に値がまったく表示されなくなります。

デフォルトでは、selectはObjectの等価性(`===`)を使用して、オプションが選択されているかどうかを判断します。これは`compareWiths`プロパティにプロパティ名または関数を指定することで上書きできます。

### Using compareWith

import UsingCompareWithExample from '@site/static/usage/v7/select/objects-as-values/using-comparewith/index.md';

<UsingCompareWithExample />

### Object Values and Multiple Selection

import ObjectValuesAndMultipleSelectionExample from '@site/static/usage/v7/select/objects-as-values/multiple-selection/index.md';

<ObjectValuesAndMultipleSelectionExample />
  

## Label Placement

Labelsは、デフォルトでそのコンテンツの幅を占めます。 開発者は `labelPlacement` プロパティを使用して、ラベルがどのように配置されるかを制御することができます。

import LabelPlacement from '@site/static/usage/v7/select/label-placement/index.md';

<LabelPlacement />

## Justification
  
開発者は `justify` プロパティを使用して、ラベルとコントロールの行の詰め方を制御することができます。

import JustifyExample from '@site/static/usage/v7/select/justify/index.md';

<JustifyExample />

## Filled Selects

Material Designでは、セレクトに塗りつぶしのスタイルが用意されています。セレクトの `fill` プロパティは `"solid"` または `"outline"` のいずれかに設定することができます。

`fill` スタイルはセレクトコンテナを視覚的に定義するため、`fill` を使用するセレクトは `ion-item` で使用すべきではありません。

import FillExample from '@site/static/usage/v7/select/fill/index.md';

<FillExample />

## SelectのButton

alertはふたつのボタンをサポートしています: `Cancel` と `OK` です。それぞれのボタンは、 `cancelText` と `okText`  プロパティを使ってカスタマイズできます。

`action-sheet` と `popover` インタフェースには `OK` ボタンがありません。いずれかのオプションをクリックすると、自動的にオーバーレイが閉じ、その値が選択されます。`popover` インターフェースには`Cancel`ボタンがないので、backdropをクリックするとオーバーレイが閉じます。

import ButtonTextExample from '@site/static/usage/v7/select/customization/button-text/index.md';

<ButtonTextExample />

## インターフェイスオプション

select は alert、action sheet、popover インターフェースを使用するので、`interfaceOptions` プロパティを通して、これらのコンポーネントにオプションを渡すことができます。これは、カスタムヘッダー、サブヘッダー、CSS クラスなどを渡すために使用できます。

各インターフェースが受け付けるプロパティは、[ion-alert docs](alert.md), [ion-action-sheet docs](action-sheet.md), [ion-popover docs](popover.md) を参照してください。

Note: `alert` インターフェースでは、 `interfaceOptions` は `inputs` や `buttons` をオーバーライドしません。

import InterfaceOptionsExample from '@site/static/usage/v7/select/customization/interface-options/index.md';

<InterfaceOptionsExample />

## カスタマイズ

Selectコンポーネントを構成する2つのユニットがあり、それぞれを別々にスタイルする必要があります。 `ion-select`要素は、ビュー上で選択された値（複数可）、または何もない場合はプレースホルダー、およびドロップダウンのアイコンによって表現されます。インターフェースは、上記の [インターフェース](#interfaces) セクションで定義されており、 `ion-select` をクリックすると開かれるダイアログです。インターフェースには、 `ion-select-option` 要素を追加することで定義されるすべてのオプションが含まれています。次のセクションでは、これらのスタイリングの違いについて説明します。

### Select 要素のスタイリング

前述の通り、`ion-select` 要素は、ビューに表示される値 (またはプレースホルダ) とアイコンのみで構成されています。これをカスタマイズするには、CSSと[CSSカスタムプロパティ](#css-custom-properties)を組み合わせてスタイルを設定します。

また、必要な [ブラウザサポート](https://caniuse.com/#feat=mdn-css_selectors_part) に応じて、CSSのシャドウパーツを使用してセレクトのスタイルを設定することができます。part` を使用することで、要素上の任意のCSSプロパティをターゲットにすることができることに注意してください。

import StylingSelectExample from '@site/static/usage/v7/select/customization/styling-select/index.md';

<StylingSelectExample />

### Select インターフェイスのスタイリング

インターフェイスのダイアログのカスタマイズは、そのインターフェイスのドキュメントのカスタマイズのセクションにしたがって行ってください。

- [アラートのカスタマイズ](alert.md#customization)
- [アクションシートのカスタマイズ](action-sheet.md#customization)
- [ポップオーバーのカスタマイズ](popover.md#customization)

ただし、Selectオプションでは、スタイリングを容易にするためにクラスを設定し、オーバーレイオプションにクラスを渡す機能があります。オプションのカスタマイズの使用例については、[Selectオプションのドキュメント](select-option.md)を参照してください。

## Typeahead Component

Typeaheadやオートコンプリートの機能は、既存のIonicコンポーネントを使用して構築することができます。利用可能なスクリーンスペースを最大限に活用するために、`ion-modal`を使用することをお勧めします。

import TypeaheadExample from '@site/static/usage/v7/select/typeahead/index.md';

<TypeaheadExample />

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

## Legacy Select Syntaxからの移行

Ionic 7.0では、よりシンプルなselect構文が導入されました。この新しい構文は、selectの設定に必要な定型文を減らし、アクセシビリティの問題を解決し、開発者のエクスペリエンスを向上させます。

開発者は、この移行を一度に1つのセレクトで実行できます。開発者はレガシー構文を使い続けることができますが、できるだけ早く移行することをお勧めします。


### 最新の構文の使い方

最新の構文を使うには、2つのステップがあります。

1. ion-label` を削除して、代わりに `ion-select` の `label` プロパティを使用します。ラベルの配置は `ion-select` の `labelPlacement` プロパティを使用して設定することができる。
2. fill` と `shape` の使い方を `ion-item` から `ion-select` に移動します。

import Migration from '@site/static/usage/v7/select/migration/index.md';

<Migration />

### レガシー構文の使用

Ionicは、アプリが最新のセレクト構文を使用しているかどうかをヒューリスティックで検出します。場合によっては、レガシー構文を使い続けることが望ましい場合もあります。開発者は `ion-select` の `legacy` プロパティを `true` に設定することで、そのInputインスタンスでレガシー構文を使用するように強制できます。

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