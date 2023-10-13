---
title: "ion-toast"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@ionic-internal/component-api/v7/toast/props.md';
import Events from '@ionic-internal/component-api/v7/toast/events.md';
import Methods from '@ionic-internal/component-api/v7/toast/methods.md';
import Parts from '@ionic-internal/component-api/v7/toast/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/toast/custom-props.md';
import Slots from '@ionic-internal/component-api/v7/toast/slots.md';

<head>
  <title>ion-toast: A Dismissible App Notification Alert Component</title>
  <meta name="description" content="ion-toast コンポーネントは、システムメッセージやフィードバックを表示するアプリの通知です。トーストのアラートはコンテンツの上に表示され、インタラクションを再開するには解除されます。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

トーストは、最近のアプリケーションでよく使われる小さな通知です。操作に関するフィードバックを提供したり、システムメッセージを表示したりするために使用されます。トーストは、アプリケーションのコンテンツの上に表示され、アプリケーションによって解除されると、アプリケーションとの対話を再開することができます。

## インラインToasts (推奨)

`ion-toast`は、テンプレートに直接コンポーネントを記述して使用することができます。これにより、トーストを表示するために配線する必要があるハンドラの数を減らすことができます。

import InlineToastTriggerExample from '@site/static/usage/v7/toast/inline/basic/index.md';

<InlineToastTriggerExample />

### Using `isOpen​`

`ion-toast` の `isOpen` プロパティは、開発者がアプリケーションの状態からトーストの表示状態を制御できるようにするものです。つまり、`isOpen` を `true` に設定するとトーストが表示され、`isOpen` を `false` に設定するとトーストは破棄されます。

`isOpen` は一方通行のデータバインディングを使用しているため、トーストが破棄されたときに自動的に `false` に設定されることはありません。開発者は `ionToastDidDismiss` または `didDismiss` イベントをリスニングして `isOpen` を `false` に設定する必要があります。この理由は、`ion-toast` の内部がアプリケーションの状態と密接に結合するのを防ぐためである。一方通行のデータバインディングでは、トーストはリアクティブ変数が提供するブーリアン値だけを気にすればよい。一方通行のデータバインディングでは、トーストはブーリアン値とリアクティブ変数の存在の両方に関心を持つ必要があります。これは、非決定的な動作につながり、アプリケーションのデバッグを困難にします。

import InlineToastIsOpenExample from '@site/static/usage/v7/toast/inline/is-open/index.md';

<InlineToastIsOpenExample />

## Controller Toasts

import ControllerExample from '@site/static/usage/v7/toast/presenting/controller/index.md';

<ControllerExample />

## Dismissing

トーストは静かな通知であり、ユーザーの邪魔をしないように意図されています。そのため、トーストを解除するためにユーザーの操作を必要とするべきではありません。

トーストは、トーストオプションの `duration` に表示するミリ秒数を渡すことで、特定の時間経過後に自動的に解除されるようにすることができます。もし `"cancel"` という役割を持つボタンが追加された場合、そのボタンがトーストを終了させます。作成後にトーストを破棄するには、インスタンスの `dismiss()` メソッドを呼び出してください。

ハードウェアの戻るボタンを押しても、トーストはユーザーの邪魔をしないようになっているので、トーストは破棄されません。

次の例では、`buttons` プロパティを使用して、クリックすると自動的にトーストを解散させるボタンを追加する方法と、解散イベントの `role` を収集する方法を示しています。

import ButtonsPlayground from '@site/static/usage/v7/toast/buttons/index.md';

<ButtonsPlayground />

## ポジショニング

トーストは、ビューポートの上部、下部、中部に配置することができます。位置は作成時に渡すことができます。指定できる値は `top`, `bottom`, `middle` です。位置が指定されない場合、トーストはビューポートの一番下に表示されます。

### 相対的な位置

トーストがヘッダー、フッター、[FAB](./fab.md)のようなナビゲーション要素と一緒に表示される場合、デフォルトではトーストはこれらの要素と重なるかもしれません。これは `positionAnchor` プロパティを使って修正することができます。`position="top"`を使用するとトーストは選択した要素に対して相対的な位置になり、`position="bottom"`を使用するとその下に、`position="bottom"`を使用するとその上に表示されます。`position="middle"`を使用する場合、`positionAnchor`プロパティは無視されます。

import PositionAnchor from '@site/static/usage/v7/toast/position-anchor/index.md';

<PositionAnchor />

## レイアウト

トースト内のボタンコンテナは、`layout`プロパティを使用して、メッセージと同じ行に表示するか、別々の行に積み重ねて表示することができます。スタックレイアウトは、長いテキスト値を持つボタンで使用する必要があります。さらに、スタックトーストレイアウトのボタンは `side` の値として `start` または `end` のどちらかを使用できますが、両方を使用することはできません。

import StackedPlayground from '@site/static/usage/v7/toast/layout/index.md';

<StackedPlayground />

## Icons

トースト内のコンテンツの横にアイコンを追加することができます。一般的に、トーストのアイコンはスタイルやコンテキストを追加するために使用されるべきで、ユーザーの注意を引いたり、トーストの優先順位を上げたりするために使用すべきではありません。より優先順位の高いメッセージをユーザーに伝えたい場合や、応答を保証したい場合は、代わりに [Alert](alert.md) を使用することをお勧めします。

import IconPlayground from '@site/static/usage/v7/toast/icon/index.md';

<IconPlayground />

## テーマ

import ThemingPlayground from '@site/static/usage/v7/toast/theming/index.md';

<ThemingPlayground />

## アクセシビリティ

### フォーカスの管理

トーストはさりげない通知であり、ユーザーを中断させるものではありません。トーストを解除するためにユーザが操作する必要はありません。そのため、トーストが表示されたときにフォーカスが自動的にトーストに移動することはありません。

### スクリーンリーダー

トーストは、スクリーンリーダーから[accessible](../reference/glossary#a11y)であるためにariaプロパティを設定しますが、これらのプロパティは、十分な説明がない場合や、トーストがアプリでどのように使用されているかに合っていない場合は、上書きすることができます。

#### 役割

`ion-toast`は、内側の `.toast-content` 要素に `role="status"` と `aria-live="polite"` を設定している。これにより、スクリーンリーダーはトーストメッセージとヘッダーのみをアナウンスします。ボタンとアイコンは、トーストが表示されてもアナウンスされません。

`aria-live`は、トーストの内容が更新されたときに、スクリーンリーダーにトーストの内容をアナウンスさせます。しかし、この属性は `'polite'` に設定されているので、スクリーンリーダーは現在のタスクを中断すべきではありません。

トーストはさりげなく通知することを意図しているので、`aria-live`を`"assertive"`に設定すべきではありません。開発者が重要なメッセージでユーザーを中断させる必要がある場合は、[alert](./alert)を使用することをお勧めします。

#### トーストボタンの説明

テキストを含むボタンは、スクリーンリーダーによって読み取られます。ボタンがアイコンのみを含んでいる場合、または既存のテキスト以外の説明が必要な場合は、ボタンの `htmlAttributes` プロパティに `aria-label` を渡すことで、ボタンにラベルを割り当てる必要があります。

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```javascript
const toast = await this.toastController.create({
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
const toast = await this.toastController.create({
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
useIonToast({
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
const toast = await toastController.create({
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

### Tips

While this is not a complete list, here are some guidelines to follow when using toasts.

* Do not require user interaction to dismiss toasts. For example, having a "Dismiss" button in the toast is fine, but the toast should also automatically dismiss on its own after a timeout period. If you need user interaction for a notification, consider using an [alert](./alert) instead.

* For toasts with long messages, consider adjusting the `duration` property to allow users enough time to read the content of the toast.

## Interfaces

### ToastButton

```typescript
interface ToastButton {
  text?: string;
  icon?: string;
  side?: 'start' | 'end';
  role?: 'cancel' | string;
  cssClass?: string | string[];
  htmlAttributes?: { [key: string]: any };
  handler?: () => boolean | void | Promise<boolean | void>;
}
```

### ToastOptions

```typescript
interface ToastOptions {
  header?: string;
  message?: string | IonicSafeString;
  cssClass?: string | string[];
  duration?: number;
  buttons?: (ToastButton | string)[];
  position?: 'top' | 'bottom' | 'middle';
  translucent?: boolean;
  animated?: boolean;
  icon?: string;
  htmlAttributes?: { [key: string]: any };

  color?: Color;
  mode?: Mode;
  keyboardClose?: boolean;
  id?: string;

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
