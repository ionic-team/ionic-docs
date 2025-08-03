---
title: "ion-toggle"
---
import Props from '@ionic-internal/component-api/v8/toggle/props.md';
import Events from '@ionic-internal/component-api/v8/toggle/events.md';
import Methods from '@ionic-internal/component-api/v8/toggle/methods.md';
import Parts from '@ionic-internal/component-api/v8/toggle/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/toggle/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/toggle/slots.md';

<head>
  <title>ion-toggle: Custom Toggle Button for Ionic Applications</title>
  <meta name="description" content="Toggleは、1つのオプションの状態を変更します。ion-toggleを使用して、アプリケーションのオン/オフを切り替えることができるカスタマイズ可能なトグルボタンを作成します。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />


トグルは、1つのオプションの状態を変更するスイッチです。押したり、スワイプしたりすることで、オン・オフを切り替えることができます。トグルは、`checked`プロパティを設定することで、プログラムによってチェックすることも可能です。

## 基本的な使い方

import Basic from '@site/static/usage/v8/toggle/basic/index.md';

<Basic />


## On / Off Labels

トグルは、`enableOnOffLabels`プロパティを設定することで、オン/オフラベルを有効にすることができます。これはアクセシビリティ上重要なことで、チェックされたトグルとチェックされていないトグルの区別がつきやすくなります。

import OnOff from '@site/static/usage/v8/toggle/on-off/index.md';

<OnOff />


## Toggles in a List

[アイテム](./item)と[リスト](./list)コンポーネントを使用すると、リストビューでトグルを使用することも可能です。

import List from '@site/static/usage/v8/toggle/list/index.md';

<List />


## Label Placement

開発者は `labelPlacement` プロパティを使用して、ラベルがどのように配置されるかを制御することができます。

import LabelPlacement from '@site/static/usage/v8/toggle/label-placement/index.md';

<LabelPlacement />

## Alignment

Developers can use the `alignment` property to control how the label and control are aligned on the cross axis. This property mirrors the flexbox `align-items` property.

:::note
Stacked toggles can be aligned using the `alignment` property. This can be useful when the label and control need to be centered horizontally.
:::

import Alignment from '@site/static/usage/v8/toggle/alignment/index.md';

<Alignment />

## Justification

開発者は `justify` プロパティを使用して、ラベルとコントロールの行の詰め方を制御することができます。

import Justify from '@site/static/usage/v8/toggle/justify/index.md';

<Justify />

## Helper & Error Text

Helper and error text can be used inside of a toggle with the `helperText` and `errorText` property. The error text will not be displayed unless the `ion-invalid` and `ion-touched` classes are added to the `ion-toggle`. This ensures errors are not shown before the user has a chance to enter data.

In Angular, this is done automatically through form validation. In JavaScript, React and Vue, the class needs to be manually added based on your own validation.

import HelperError from '@site/static/usage/v8/toggle/helper-error/index.md';

<HelperError />

## Theming

### Colors

import Colors from '@site/static/usage/v8/toggle/theming/colors/index.md';

<Colors />

## CSSカスタムプロパティ

CSSカスタムプロパティは、標準CSSと組み合わせてトグルの異なる部分をターゲットにすることができます。トグルの `width` と `height` を直接変更してトラックのサイズを変更し、`--handle-width` と `--handle-height` カスタムプロパティを使用して、ハンドルサイズをカスタマイズすることができます。

import CSSProps from '@site/static/usage/v8/toggle/theming/css-properties/index.md';

<CSSProps />

### CSS Shadow Parts

トグルをさらにカスタマイズするには、公開されている特定のシャドウ部分をターゲットにすることができます。これらの部分には、どのようなCSSプロパティでもスタイルを設定でき、CSSカスタムプロパティと組み合わせることも可能です。

import CSSParts from '@site/static/usage/v8/toggle/theming/css-shadow-parts/index.md';

<CSSParts />

## Interfaces

### ToggleChangeEventDetail

```typescript
interface ToggleChangeEventDetail<T = any> {
  value: T;
  checked: boolean;
}
```

### ToggleCustomEvent

必須ではありませんが、このコンポーネントから発行される Ionic イベントでより強く型付けを行うために、`CustomEvent` インターフェースの代わりにこのインターフェースを使用することが可能です。

```typescript
interface ToggleCustomEvent<T = any> extends CustomEvent {
  detail: ToggleChangeEventDetail<T>;
  target: HTMLIonToggleElement;
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
