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

The main ways of handling user interaction with the select are the `ionChange`, `ionDismiss`, and `ionCancel` events. See [Events](#events) for more details on these and other events that select fires.

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

Since select uses the alert, action sheet and popover interfaces, options can be passed to these components through the `interfaceOptions` property. This can be used to pass a custom header, subheader, css class, and more.

See the [ion-alert docs](alert.md), [ion-action-sheet docs](action-sheet.md), and [ion-popover docs](popover.md) for the properties that each interface accepts.

Note: `interfaceOptions` will not override `inputs` or `buttons` with the `alert` interface.

import InterfaceOptionsExample from '@site/static/usage/select/customization/interface-options/index.md';

<InterfaceOptionsExample />

## カスタマイズ

There are two units that make up the Select component and each need to be styled separately. The `ion-select` element is represented on the view by the selected value(s), or placeholder if there is none, and dropdown icon. The interface, which is defined in the [Interfaces](#interfaces) section above, is the dialog that opens when clicking on the `ion-select`. The interface contains all of the options defined by adding `ion-select-option` elements. The following sections will go over the differences between styling these.

### Styling Select Element

As mentioned, the `ion-select` element consists only of the value(s), or placeholder, and icon that is displayed on the view. To customize this, style using a combination of CSS and any of the [CSS custom properties](#css-custom-properties).

Alternatively, depending on the [browser support](https://caniuse.com/#feat=mdn-css_selectors_part) needed, CSS shadow parts can be used to style the select. Notice that by using `::part`, any CSS property on the element can be targeted.

import StylingSelectExample from '@site/static/usage/select/customization/styling-select/index.md';

<StylingSelectExample />

### Styling Select Interface

Customizing the interface dialog should be done by following the Customization section in that interface's documentation:

- [Alert Customization](alert.md#customization)
- [Action Sheet Customization](action-sheet.md#customization)
- [Popover Customization](popover.md#customization)

However, the Select Option does set a class for easier styling and allows for the ability to pass a class to the overlay option, see the [Select Options documentation](select-option.md) for usage examples of customizing options.

## Interfaces

### SelectChangeEventDetail

```typescript
interface SelectChangeEventDetail<T = any> {
  value: T;
}
```

### SelectCustomEvent

While not required, this interface can be used in place of the `CustomEvent` interface for stronger typing with Ionic events emitted from this component.

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