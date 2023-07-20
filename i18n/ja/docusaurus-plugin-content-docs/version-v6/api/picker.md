---
title: "ion-picker"
---
import Props from '@ionic-internal/component-api/v7/picker/props.md';
import Events from '@ionic-internal/component-api/v7/picker/events.md';
import Methods from '@ionic-internal/component-api/v7/picker/methods.md';
import Parts from '@ionic-internal/component-api/v7/picker/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/picker/custom-props.md';
import Slots from '@ionic-internal/component-api/v7/picker/slots.md';

<head>
  <title>Picker | Display Buttons and Columns for ion-picker on Ionic Apps</title>
  <meta name="description" content="Pickerは、ボタンの列とその下にコラムを表示するダイアログです。イオンピッカーは、アプリのコンテンツの上、そしてビューポートの下に表示されます。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="scoped" />

Pickerは、画面下にボタンと列の行を表示するダイアログです。アプリケーションのコンテンツの上部とビューポートの下部に表示されます。

## インラインピッカー（推奨）

`ion-picker`は、テンプレートに直接コンポーネントを記述して使用することができます。これにより、ピッカーを表示するために必要なハンドラの数を減らすことができます。

import Trigger from '@site/static/usage/v7/picker/inline/trigger/index.md';

<Trigger />

### `isOpen` を使う

`ion-picker` の `isOpen` プロパティにより、開発者はアプリケーションの状態からピッカーの表示状態を制御することができます。つまり、`isOpen` を `true` に設定するとピッカーが表示され、`isOpen` を `false` に設定するとピッカーは退場します。

`isOpen` は一方通行のデータバインディングを使用しているため、ピッカーが終了したときに自動的に `false` に設定されることはありません。開発者は `ionPickerDidDismiss` または `didDismiss` イベントを待ち、 `isOpen` を `false` に設定する必要があります。この理由は、`ion-picker`の内部がアプリケーションの状態と密に結合するのを防ぐためです。一方通行のデータバインディングでは、ピッカーはリアクティブ変数が提供するブーリアン値のみに関心を持つ必要があります。一方通行のデータバインディングでは、ピッカーはリアクティブ変数のブール値だけでなく、リアクティブ変数の存在も気にする必要があります。このため、非決定的な動作が発生し、アプリケーションのデバッグが困難になる可能性があります。

import IsOpen from '@site/static/usage/v7/picker/inline/isOpen/index.md';

<IsOpen />

## Controller Pickers

`pickerController`は、ピッカーの表示・非表示をより細かく制御する必要がある場合に使用することができます。

import Controller from '@site/static/usage/v7/picker/controller/index.md';

<Controller />

## マルチカラム

`columns`プロパティは、異なる選択肢を複数の列で表示するピッカーを表示するために使用することができます。

import MultipleColumn from '@site/static/usage/v7/picker/multiple-column/index.md';

<MultipleColumn />

## Interfaces

### PickerButton

```typescript
interface PickerButton {
  text?: string;
  role?: string;
  cssClass?: string | string[];
  handler?: (value: any) => boolean | void;
}
```

### PickerColumn

```typescript
interface PickerColumn {
  name: string;
  align?: string;
  selectedIndex?: number;
  prevSelected?: number;
  prefix?: string;
  suffix?: string;
  options: PickerColumnOption[];
  cssClass?: string | string[];
  columnWidth?: string;
  prefixWidth?: string;
  suffixWidth?: string;
  optionsWidth?: string;
}
```

### PickerColumnOption

```typescript
interface PickerColumnOption {
  text?: string;
  value?: any;
  disabled?: boolean;
  duration?: number;
  transform?: string;
  selected?: boolean;
  /**
   * The optional text to assign as the aria-label on the picker column option.
   */
  ariaLabel?: string;
}
```

### PickerOptions

```typescript
interface PickerOptions {
  columns: PickerColumn[];
  buttons?: PickerButton[];
  cssClass?: string | string[];
  showBackdrop?: boolean;
  backdropDismiss?: boolean;
  animated?: boolean;

  mode?: Mode;
  keyboardClose?: boolean;
  id?: string;
  htmlAttributes?: { [key: string]: any };

  enterAnimation?: AnimationBuilder;
  leaveAnimation?: AnimationBuilder;
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
