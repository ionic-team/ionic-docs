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
  <title>ion-toast Component: A Dismissible App Notification Alert</title>
  <meta name="description" content="ion-toast コンポーネントは、システムメッセージやフィードバックを表示するアプリの通知です。トーストのアラートはコンテンツの上に表示され、インタラクションを再開するには解除されます。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

トーストは、最近のアプリケーションでよく使われる小さな通知です。操作に関するフィードバックを提供したり、システムメッセージを表示したりするために使用されます。トーストは、アプリケーションのコンテンツの上に表示され、アプリケーションによって解除されると、アプリケーションとの対話を再開することができます。

## Inline Toasts (Recommended)

`ion-toast` can be used by writing the component directly in your template. This reduces the number of handlers you need to wire up in order to present the toast.

import InlineToastTriggerExample from '@site/static/usage/v7/toast/inline/basic/index.md';

<InlineToastTriggerExample />

### Using `isOpen​`

The `isOpen` property on `ion-toast` allows developers to control the presentation state of the toast from their application state. This means when `isOpen` is set to `true` the toast will be presented and when `isOpen` is set to `false` the toast will be dismissed.

`isOpen` uses a one-way data binding, meaning it will not automatically be set to `false` when the toast is dismissed. Developers should listen for the `ionToastDidDismiss` or `didDismiss` event and set `isOpen` to `false`. The reason for this is it prevents the internals of `ion-toast` from being tightly coupled with the state of the application. With a one way data binding, the toast only needs to concern itself with the boolean value that the reactive variable provides. With a two way data binding, the toast needs to concern itself with both the boolean value as well as the existence of the reactive variable itself. This can lead to non-deterministic behaviors and make applications harder to debug.

import InlineToastIsOpenExample from '@site/static/usage/v7/toast/inline/is-open/index.md';

<InlineToastIsOpenExample />

## Controller Toasts

import ControllerExample from '@site/static/usage/v7/toast/presenting/controller/index.md';

<ControllerExample />

## Dismissing

トーストオプションの `duration` に表示するミリ秒数を渡すことで、特定の時間経過後に自動的にトーストを終了させることができます。もし、 `"cancel"` というロールを持つボタンが追加されていれば、そのボタンがトーストを終了させることになります。作成後にトーストを終了させるには、インスタンスの `dismiss()` メソッドを呼び出してください。

次の例では、`buttons` プロパティを使用して、クリックすると自動的にトーストを消すボタンを追加する方法と、dissue イベントの `role` を収集する方法を示しています。

import ButtonsPlayground from '@site/static/usage/v7/toast/buttons/index.md';

<ButtonsPlayground />

## Positioning

Toasts can be positioned at the top, bottom or middle of the viewport. The position can be passed upon creation. The possible values are `top`, `bottom` and `middle`. If the position is not specified, the toast will be displayed at the bottom of the viewport.

## Layout

Button containers within the toast can be displayed either on the same line as the message or stacked on separate lines using the `layout` property. The stacked layout should be used with buttons that have long text values. Additionally, buttons in a stacked toast layout can use a `side` value of either `start` or `end`, but not both.

import StackedPlayground from '@site/static/usage/v7/toast/layout/index.md';

<StackedPlayground />

## Icons

トースト内のコンテンツの横にアイコンを追加することができます。一般的に、トーストのアイコンはスタイルやコンテキストを追加するために使用されるべきで、ユーザーの注意を引いたり、トーストの優先順位を上げたりするために使用すべきではありません。より優先順位の高いメッセージをユーザーに伝えたい場合や、応答を保証したい場合は、代わりに [Alert](alert.md) を使用することをお勧めします。

import IconPlayground from '@site/static/usage/v7/toast/icon/index.md';

<IconPlayground />

## Theming

import ThemingPlayground from '@site/static/usage/v7/toast/theming/index.md';

<ThemingPlayground />

## Interfaces

### ToastButton

```typescript
interface ToastButton {
  text?: string;
  icon?: string;
  side?: 'start' | 'end';
  role?: 'cancel' | string;
  cssClass?: string | string[];
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

## アクセシビリティ

### フォーカスの管理

トーストはさりげなく通知するものであり、ユーザーの邪魔をするものではありません。トーストを消すためにユーザーの操作が必要であってはなりません。そのため、トーストが表示されても、フォーカスが自動的に移動することはありません。

### スクリーンリーダー

`ion-toast` は、デフォルトで `aria-live="polite"` と `aria-atomic="true"` が設定されています。

`aria-live` を指定すると、トーストの内容が更新されたときにスクリーンリーダがアナウンスするようになります。しかし、この属性は `'polite'` に設定されているため、スクリーン・リーダーは通常、現在のタスクを中断することはありません。開発者は `htmlAttributes` プロパティを使用して `aria-live` を `'assertive'` に設定することで、この動作をカスタマイズすることができます。これにより、トーストが更新されると、スクリーン・リーダーはすぐにユーザーに通知し、それまでの更新を中断させる可能性があります。

また、`aria-atomic="true"`を設定すると、トースト全体を1つのユニットとしてアナウンスすることができます。これはトーストのコンテンツを動的に更新するときに便利で、スクリーン・リーダーが変更されたコンテンツのみをアナウンスすることを防ぎます。

### ヒント

これは完全なリストではありませんが、トーストを使用する際に従うべきガイドラインをいくつか紹介します。

* トーストの解除にユーザーの操作を必要としないようにします。例えば、トーストに "Dismiss" ボタンがあるのは良いですが、タイムアウト後にトーストが自動的に終了するようにします。通知のためにユーザーの操作が必要な場合は、代わりに [ion-alert](./alert) を使用することを検討してください。

* 複数のトーストを連続して開くことは避けてください。もし `aria-live` が `'assertive'` に設定されている場合、スクリーンリーダーは新しいトーストをアナウンスするために現在のタスクの読み込みを中断し、前のトーストのコンテキストが失われる可能性があります。

* 長いメッセージのトーストの場合は、`duration`プロパティを調整して、ユーザーがトーストの内容を読むのに十分な時間を確保することを検討してください。

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
