---
title: "ion-action-sheet"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@ionic-internal/component-api/v8/action-sheet/props.md';
import Events from '@ionic-internal/component-api/v8/action-sheet/events.md';
import Methods from '@ionic-internal/component-api/v8/action-sheet/methods.md';
import Parts from '@ionic-internal/component-api/v8/action-sheet/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/action-sheet/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/action-sheet/slots.md';

<head>
  <title>ion-action-sheet: Action Sheet Dialog for iOS and Android</title>
  <meta name="description" content="アクションシートはアプリのコンテンツの上に一連のオプションを表示するダイアログで、手動で解除する必要があります。iOSとAndroidのデバイスでの使用方法については、こちらをご覧ください。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="scoped" />


Action Sheetは複数の選択肢を表示するダイアログです。アプリのコンテンツ上に表示され、ユーザが手動で破棄しないとアプリの利用を再開することはできません。`ios` modeでは、破壊的な選択肢は明示されます（コンテンツの削除などは赤字などでわかりやすく表示されます）。Action Sheetを破棄するには、背景をタップする、デスクトップのパソコンの場合はエスケープキーを押すなど、複数の選択肢があります。

## インラインアクションシート (推奨)

`ion-action-sheet` は、テンプレートに直接コンポーネントを記述することで使用することができます。これにより、アクションシートを表示するために配線する必要があるハンドラの数を減らすことができます。

import Trigger from '@site/static/usage/v8/action-sheet/inline/trigger/index.md';

<Trigger />

### `isOpen` を使う

`ion-action-sheet` の `isOpen` プロパティは、開発者がアプリケーションの状態からアクションシートの表示状態を制御することを可能にします。つまり、`isOpen`が`true`に設定されるとアクションシートが表示され、`isOpen`が`false`に設定されるとアクションシートは解除されます。

`isOpen` は一方通行のデータバインディングを使用しているため、アクションシートが終了したときに自動的に `false` に設定されることはありません。開発者は `ionActionSheetDidDismiss` または `didDismiss` イベントをリッスンして `isOpen` を `false` に設定する必要があります。この理由は、`ion-action-sheet` の内部がアプリケーションの状態と密接に結合するのを防ぐためです。一方通行のデータバインディングでは、アクションシートはリアクティブ変数が提供するブーリアン値だけを気にすればよい。一方通行のデータバインディングでは、アクションシートは、ブーリアン値とリアクティブ変数の存在の両方に関心を持つ必要があります。これは、非決定的な動作につながり、アプリケーションのデバッグを困難にします。

import IsOpen from '@site/static/usage/v8/action-sheet/inline/isOpen/index.md';

<IsOpen />

## Controller アクションシート

アクションシートの表示・非表示をより細かく制御したい場合は、`actionSheetController`を使用することができます。

import Controller from '@site/static/usage/v8/action-sheet/controller/index.md';

<Controller />

## Buttons

Buttonの `role` プロパティは、 `destructive` か `cancel` のどちらかを利用できます。 roleプロパティがない場合は、プラットフォームに応じたデフォルトの外観となります。`cancel` role を持つButtonは、配列 `buttons` のどこに配置してもアクションシートの最下部に表示されます。 Note: `destructive` roleをつけるButtonは、一番上のButtonとして配置することをおすすめします。また、背景をタップしてアクションシートを破棄した場合、cancel role に設定されているhandlerが実行されます。

Buttonは `ActionSheetButton` の `data` プロパティを介してデータを渡すこともできます。これは `onDidDismiss` メソッドの戻り値にある `data` フィールドにデータを入力します。

## Collecting Role Information on Dismiss

`didDismiss` イベントが発生すると、イベント詳細の `data` と `role` フィールドを使用して、アクションシートがどのように却下されたかについての情報を収集することができます。

import RoleInfo from '@site/static/usage/v8/action-sheet/role-info-on-dismiss/index.md';

<RoleInfo />

## テーマ

アクションシートはscopedによるカプセル化を採用しており、実行時に各スタイルにクラスを追加することで、自動的にCSSをスコープ化します。CSSでscopedセレクタをオーバーライドするには、[higher specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity) セレクタが必要です。

### スタイリング

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

import Styling from '@site/static/usage/v8/action-sheet/theming/styling/index.md';

<Styling />

## CSSカスタムプロパティ

[CSSカスタムプロパティ](#css-custom-properties-1) は、個々の要素を対象とすることなく、アクションシートのスタイルに使用することができます。

import CssCustomProperties from '@site/static/usage/v8/action-sheet/theming/css-properties/index.md';

<CssCustomProperties />

## アクセシビリティ

### Screen Readers

アクションシートは、スクリーンリーダーにとって [アクセシブル](../reference/glossary#a11y) であるためにariaプロパティを設定しますが、これらのプロパティは、十分な説明になっていなかったり、アクションシートがアプリでどのように使用されているかに合っていなかったりする場合、オーバーライドすることができます。

#### Role

アクションシートには `role` として [`dialog`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/dialog_role) が設定されます。ARIA仕様に合わせるためには、`aria-label`属性か`aria-labelledby`属性のどちらかを設定しなければなりません。

#### Action Sheet の概要

Ionicは自動的にヘッダー要素を指すように `aria-labelledby` を設定するので、すべてのアクションシートには `header` プロパティを定義することを強く推奨します。しかし、`header`を含めない場合は、`htmlAttributes`プロパティを使って、説明的な`aria-label`を指定するか、カスタムの`aria-labelledby`値を設定することもできます。

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```javascript
const actionSheet = await this.actionSheetController.create({
  htmlAttributes: {
    'aria-label': 'action sheet dialog',
  },
});
```

</TabItem>

<TabItem value="javascript">

```javascript
const actionSheet = await this.actionSheetController.create({
  htmlAttributes: {
    'aria-label': 'action sheet dialog',
  },
});
```

</TabItem>

<TabItem value="react">

```javascript
useIonActionSheet({
  htmlAttributes: {
    'aria-label': 'action sheet dialog',
  },
});
```

</TabItem>

<TabItem value="vue">

```javascript
const actionSheet = await actionSheetController.create({
  htmlAttributes: {
    'aria-label': 'action sheet dialog',
  },
});
```

</TabItem>

</Tabs>

#### Action Sheet Buttons の概要

テキストを含むボタンはスクリーンリーダーによって読み取られる。ボタンがアイコンのみを含んでいる場合や、既存のテキスト以外の説明が必要な場合は、ボタンの `htmlAttributes` プロパティに `aria-label` を渡して、ラベルをボタンに割り当てる必要があります。

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```javascript
const actionSheet = await this.actionSheetController.create({
  header: 'Header',
  buttons: [
    {
      icon: 'close',
      htmlAttributes: {
        'aria-label': 'close',
      },
    },
  ],
});
```

</TabItem>

<TabItem value="javascript">

```javascript
const actionSheet = await this.actionSheetController.create({
  header: 'Header',
  buttons: [
    {
      icon: 'close',
      htmlAttributes: {
        'aria-label': 'close',
      },
    },
  ],
});
```

</TabItem>

<TabItem value="react">

```javascript
useIonActionSheet({
  header: 'Header',
  buttons: [
    {
      icon: 'close',
      htmlAttributes: {
        'aria-label': 'close',
      },
    },
  ],
});
```

</TabItem>

<TabItem value="vue">

```javascript
const actionSheet = await actionSheetController.create({
  header: 'Header',
  buttons: [
    {
      icon: 'close',
      htmlAttributes: {
        'aria-label': 'close',
      },
    },
  ],
});
```

</TabItem>

</Tabs>

## Interfaces

### ActionSheetButton

```typescript
interface ActionSheetButton<T = any> {
  text?: string;
  role?: 'cancel' | 'destructive' | 'selected' | string;
  icon?: string;
  cssClass?: string | string[];
  id?: string;
  htmlAttributes?: { [key: string]: any };
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
