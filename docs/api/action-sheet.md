---
title: "ion-action-sheet"
---
import Props from '@site/static/auto-generated/action-sheet/props.md';
import Events from '@site/static/auto-generated/action-sheet/events.md';
import Methods from '@site/static/auto-generated/action-sheet/methods.md';
import Parts from '@site/static/auto-generated/action-sheet/parts.md';
import CustomProps from '@site/static/auto-generated/action-sheet/custom-props.md';
import Slots from '@site/static/auto-generated/action-sheet/slots.md';

<head>
  <title>ion-action-sheet | Action Sheet Dialog for iOS and Android Apps</title>
  <meta name="description" content="Action Sheetsはアプリのコンテンツの上に一連のオプションを表示するダイアログで、手動で解除する必要があります。iOSとAndroidのデバイスでの使用方法については、こちらをご覧ください。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="scoped" />


Action Sheetは複数の選択肢を表示するダイアログです。アプリのコンテンツ上に表示され、ユーザが手動で破棄しないとアプリの利用を再開することはできません。`ios` modeでは、破壊的な選択肢は明示されます（コンテンツの削除などは赤字などでわかりやすく表示されます）。Action Sheetを破棄するには、背景をタップする、デスクトップのパソコンの場合はエスケープキーを押すなど、複数の選択肢があります。

import Basic from '@site/static/usage/action-sheet/basic/index.md';

<Basic />

## Buttons

Buttonの `role` プロパティは、 `destructive` か `cancel` のどちらかを利用できます。 roleプロパティがない場合は、プラットフォームに応じたデフォルトの外観となります。`cancel` role を持つButtonは、配列 `buttons` のどこに配置してもAction Sheetの最下部に表示されます。 Note: `destructive` roleをつけるButtonは、一番上のButtonとして配置することをおすすめします。また、背景をタップしてAction Sheetを破棄した場合、cancel role に設定されているhandlerが実行されます。

Buttonは `ActionSheetButton` の `data` プロパティを介してデータを渡すこともできます。これは `onDidDismiss` メソッドの戻り値にある `data` フィールドにデータを入力します。

## テーマ

Action Sheetはscopedによるカプセル化を採用しており、実行時に各スタイルにクラスを追加することで、自動的にCSSをスコープ化します。CSSでscopedセレクタをオーバーライドするには、[higher specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity) セレクタが必要です。

### Styling

私たちは、 `create` メソッドで `cssClass` にカスタムクラスを渡し、それを使ってホストと内部要素にカスタムスタイルを追加することをお勧めします。このプロパティは、スペースで区切られた複数のクラスを受け付けることもできます。

```css
/* DOES NOT WORK - not specific enough */
.action-sheet-group {
  background: #e5e5e5;
}

/* Works - pass "my-custom-class" in cssClass to increase specificity */
.my-custom-class .action-sheet-group {
  background: #e5e5e5;
}
```

import Styling from '@site/static/usage/action-sheet/theming/styling/index.md';

<Styling />

### CSS Custom Properties

Any of the defined [CSS Custom Properties](#css-custom-properties-1) can be used to style the Action Sheet without needing to target individual elements.

import CssCustomProperties from '@site/static/usage/action-sheet/theming/css-properties/index.md';

<CssCustomProperties />

## Accessibility

Action Sheets are given a `role` of [`dialog`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/dialog_role). In order to align with the ARIA spec, either the `aria-label` or `aria-labelledby` attribute must be set.

It is strongly recommended that every Action Sheet have the `header` property defined, as Ionic will automatically set `aria-labelledby` to point to the header element. However, if you choose not to include a `header`, an alternative is to use the `htmlAttributes` property to provide a descriptive `aria-label` or set a custom `aria-labelledby` value.

## Interfaces

### ActionSheetButton

```typescript
interface ActionSheetButton<T = any> {
  text?: string;
  role?: 'cancel' | 'destructive' | 'selected' | string;
  icon?: string;
  cssClass?: string | string[];
  handler?: () => boolean | void | Promise<boolean | void>;
  data?: T;
}
```

### ActionSheetOptions

```typescript
interface ActionSheetOptions {
  header?: string;
  subHeader?: string;
  cssClass?: string | string[];
  buttons: (ActionSheetButton | string)[];
  backdropDismiss?: boolean;
  translucent?: boolean;
  animated?: boolean;
  mode?: Mode;
  keyboardClose?: boolean;
  id?: string;
  htmlAttributes?: { [key: string]: any };

  enterAnimation?: AnimationBuilder;
  leaveAnimation?: AnimationBuilder;
}
```

## Properties
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