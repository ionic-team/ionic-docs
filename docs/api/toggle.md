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

開発者は`alignment`プロパティを使用して、ラベルとコントロールがクロス軸上でどのように配置されるかを制御できます。このプロパティは、flexboxの`align-items`プロパティを反映しています。

:::note
スタックされたトグルは、`alignment`プロパティを使用して配置できます。ラベルとコントロールを水平方向に中央揃えする必要がある場合に便利です。
:::

import Alignment from '@site/static/usage/v8/toggle/alignment/index.md';

<Alignment />

## Justification

開発者は `justify` プロパティを使用して、ラベルとコントロールの行の詰め方を制御することができます。

import Justify from '@site/static/usage/v8/toggle/justify/index.md';

<Justify />

## Helper & Error Text

ヘルパーテキストとエラーテキストは、`helperText`と`errorText`プロパティを使用してトグル内で使用できます。エラーテキストは、`ion-invalid`と`ion-touched`クラスが`ion-toggle`に追加されていない限り表示されません。これにより、ユーザーがデータを入力する前にエラーが表示されることはありません。

Angularでは、これはフォームバリデーションによって自動的に行われます。JavaScript、React、Vueでは、独自のバリデーションに基づいてクラスを手動で追加する必要があります。

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
