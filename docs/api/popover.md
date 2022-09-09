---
title: "ion-popover"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@site/static/auto-generated/popover/props.md';
import Events from '@site/static/auto-generated/popover/events.md';
import Methods from '@site/static/auto-generated/popover/methods.md';
import Parts from '@site/static/auto-generated/popover/parts.md';
import CustomProps from '@site/static/auto-generated/popover/custom-props.md';
import Slots from '@site/static/auto-generated/popover/slots.md';

<head>
  <title>ion-popover: iOS / Android Popover UI Component & CSS Properties</title>
  <meta name="description" content="ion-popoverは、現在のページの上に表示されるダイアログです。iOSとAndroidデバイス用のpopover UIコンポーネントとCSSカスタムプロパティについて説明します。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';
import TOCInline from '@theme/TOCInline';

<EncapsulationPill type="shadow" />


Popoverは、現在のページの上部に表示されるダイアログです。これは何にでも使用できますが、通常はナビゲーションバーに収まらないオーバーフローアクションに使用されます。

`ion-popover` を使用するには、インラインで使用する方法と `popoverController` を使用する方法がります。それぞれの方法には異なる考慮点があるので、あなたのユースケースに最も適した方法を使用するようにしましょう。

## インラインポップオーバー

`ion-popover` は、テンプレートに直接コンポーネントを記述して使用することができます。これにより、ポップオーバーを表示するために必要なハンドラの数を減らすことができます。

Angular、React、Vue で `ion-popover` を使用する場合、渡されたコンポーネントはポップオーバーが解除されると破棄されます。この機能は JavaScript フレームワークによって提供されるので、JavaScript フレームワークを使わずに `ion-popover` を使用しても、渡したコンポーネントは破棄されない。この機能が必要な場合は、代わりに `popoverController` を使用することを推奨します

### いつ使うか

ポップオーバーをインラインで使用することは、ポップオーバーを開くためにクリックイベントを明示的に配線したくない場合に便利です。例えば、 `trigger` プロパティを使用して、クリックされたときにポップオーバーを表示するボタンを指定することができます。また、`trigger-action` プロパティを使って、トリガーが左クリックされたとき、右クリックされたとき、ホーバーされたときにポップオーバーを表示するかどうかをカスタマイズすることができます。

もし、ポップオーバーの表示と非表示を細かく制御したい場合は、 `popoverController` を使用することをお勧めします。

### Angular 

渡されたコンポーネントは、ポップオーバーが表示されたときに作成され、ポップオーバーが解除されたときに破棄される必要があるため、内部で `<ng-content>` を使用してコンテンツを投影することはできません。代わりに、`<ng-container>` を使用します。これは、`<ng-template>` が渡されることを想定しています。そのため、コンポーネントを渡す際には、`<ng-template>`でラップする必要があります。

```html
<ion-popover [isOpen]="isPopoverOpen">
  <ng-template>
    <app-popover-content></app-popover-content>
  </ng-template>
</ion-popover>
```

### トリガー

インラインの `ion-popover` のトリガーは、インタラクションされたときにポップオーバーを開く要素です。インタラクションの動作は `trigger-action` プロパティを設定することでカスタマイズすることができます。なお、`trigger-action="context-menu"` はシステムのデフォルトのコンテキストメニューを開かせないようにします。

:::note
 `popoverController` を使用する場合、`ion-popover` は前もって作成されないので、トリガーは適用されません。
:::

import InlineTrigger from '@site/static/usage/popover/presenting/inline-trigger/index.md';

<InlineTrigger />

### isOpen プロパティ

インラインポップオーバーは `isOpen` プロパティを `true` に設定することによっても開くことができます。この方法はトリガーよりも細かくポップオーバーをコントロールする必要がある場合に使用されます。

`isOpen` は一方向のデータバインディングを使用しています。つまり、ポップオーバーが閉じられたときに自動的に `false` に設定されることはありません。開発者は `ionPopoverDidDismiss` または `didDismiss` イベントをリッスンして `isOpen` を `false` にセットする必要があります。この理由は、`ion-popover` の内部がアプリケーションの状態と密に結合されるのを防ぐためである。一方通行のデータバインディングでは、ポップオーバーはリアクティブ変数が提供するブーリアン値だけを気にすればよいのです。双方向のデータバインディングでは、ポップオーバーはブール値とリアクティブ変数の存在の両方に関心を持つ必要があります。これは非決定的な動作につながり、アプリケーションのデバッグを難しくします。


import IsOpenTrigger from '@site/static/usage/popover/presenting/inline-isopen/index.md';

<IsOpenTrigger />

## ポップオーバーコントローラ

Ionic Framework からインポートされた `popoverController` を使用することで、`ion-popover` をプログラム的に表示することも可能です。これにより、インラインポップオーバーのカスタマイズ以上に、ポップオーバーを表示するタイミングを完全に制御することができます。

### どのような場合に使用するのか

ポップオーバーはインラインで記述することをお勧めします。ポップオーバーをインラインで書くことが現実的でない複雑なユースケースの場合にのみ `popoverController` を使用すべきです。コントローラを使用する場合、ポップオーバーは前もって作成されないので、 `trigger` や `trigger-action` などのプロパティはここでは適用されません。さらに、ネストされたポップオーバーはコントローラのアプローチと互換性がありません。なぜなら、ポップオーバーは `create` メソッドが呼ばれたときに自動的にアプリケーションのルートに追加されるからです。

### React

コントローラの代わりに、React には `useIonPopover` というHookがあり、同じような振る舞いをします。なお、 `useIonPopover` は `<IonApp>` の子孫であることが必要です。もし、 `<IonApp>` の外側でポップオーバーを使用する必要がある場合は、代わりにインラインポップオーバーを使用することを検討してください。

### 使い方

import ControllerExample from '@site/static/usage/popover/presenting/controller/index.md';

<ControllerExample />


## スタイリング

ポップオーバーはアプリケーションのルートで表示されるので、アプリケーション全体を覆うように表示されます。この動作はインラインポップオーバーとコントローラから表示されるポップオーバーの両方に適用されます。そのため、カスタムポップオーバースタイリングは特定のコンポーネントにスコープすることができません。代わりに、スタイルはグローバルに適用されなければなりません。ほとんどの開発者は、カスタムスタイルを `global.css` に配置すれば十分です。

:::note
 If you are building an Ionic Angular app, the styles need to be added to a global stylesheet file.
:::

import Styling from '@site/static/usage/popover/customization/styling/index.md';

<Styling />


## 配置

### リファレンス

ポップオーバーを表示するとき、Ionic Framework はポップオーバーを相対的に表示するための参照点を必要とします。`reference="event"` を指定すると、ポップオーバーはトリガー要素で dispatch されたポインターイベントのx-y座標に相対的に表示されます。 `reference="trigger"` を指定すると、ポップオーバーはトリガー要素のバウンディングボックスに対して相対的に表示されます。

### Side

`side` プロパティを使用することで、基準点の上、右、左、下のいずれかにポップオーバーを配置することができます。また、LTRやRTLのモードに応じてサイドを切り替えたい場合は、 `start` や `end` を使用することができます。

### Alignment

`alignment` プロパティは、ポップオーバーのエッジをトリガーエレメントの対応するエッジに揃えることができます。使用される正確なエッジは `side` プロパティの値に依存します。

### Side and Alignment Demo

import Positioning from '@site/static/usage/popover/customization/positioning/index.md';

<Positioning />

### オフセット

ポップオーバーの位置をより細かく制御したい場合は、CSS 変数 `--offset-x` と `--offset-y` を使用することができます。例えば、`--offset-x: 10px` はポップオーバーのコンテンツを `10px` だけ右側に移動させます。

## サイズ調整

ドロップダウンメニューを作成するとき、ポップオーバーの幅をトリガー要素の幅と一致させたい場合があります。トリガーの幅を事前に知らずにこれを行うのは厄介です。 `size` プロパティを `'cover'` に設定すると、Ionic Framework はポップオーバーの幅をトリガー要素の幅に一致させるようにします。

`popoverController` を使用する場合は、`event` オプションでイベントを指定する必要があり、Ionic Framework は `event.target` を参照要素に使用します。このパターンの例は [controller demo](#controller-popovers) を参照してください。

import Sizing from '@site/static/usage/popover/customization/sizing/index.md';

<Sizing />

## ポップオーバーをネスト

インラインで `ion-popover` を使用する場合、ポップオーバーを入れ子にして入れ子のドロップダウンメニューを作成することができます。このとき、最初のポップオーバーの背景だけが表示されるので、ポップオーバーを開くたびに画面がだんだん暗くなっていくことはありません。

`dismissOnSelect` プロパティを使用すると、ポップオーバーのコンテンツがクリックされたときに自動的にポップオーバーを閉じることができます。この動作は、他のポップオーバーのトリガー要素をクリックしたときには適用されません。

:::note
 `popoverController` を使用する場合、ネストしたポップオーバーは作成できません。なぜなら、ポップオーバーは `create` メソッドが呼ばれたときに、自動的にアプリケーションのルートに追加されるからです。
:::

import NestedPopover from '@site/static/usage/popover/nested/index.md';

<NestedPopover />


## Interfaces

以下に、`popoverController` を使用する際に利用可能なすべてのオプションを示します。これらのオプションは `popoverController.create()` を呼び出す際に指定します。

```typescript
interface PopoverOptions {
  component: any;
  componentProps?: { [key: string]: any };
  showBackdrop?: boolean;
  backdropDismiss?: boolean;
  translucent?: boolean;
  cssClass?: string | string[];
  event?: Event;
  animated?: boolean;

  mode?: 'ios' | 'md';
  keyboardClose?: boolean;
  id?: string;
  htmlAttributes?: { [key: string]: any };

  enterAnimation?: AnimationBuilder;
  leaveAnimation?: AnimationBuilder;
  
  size?: PopoverSize;
  dismissOnSelect?: boolean;
  reference?: PositionReference;
  side?: PositionSide;
  alignment?: PositionAlign;
  arrow?: boolean;
}
```


## Types

以下に、`ion-popover` のすべてのカスタムTypeを紹介します。

```typescript
type PopoverSize = 'cover' | 'auto';
type TriggerAction = 'click' | 'hover' | 'context-menu';
type PositionReference = 'trigger' | 'event';
type PositionSide = 'top' | 'right' | 'bottom' | 'left' | 'start' | 'end';
type PositionAlign = 'start' | 'center' | 'end';
```

## アクセシビリティ

### キーボードナビゲーション

`ion-popover` は、ポップオーバー内のフォーカス可能な要素間を移動するための基本的なキーボードをサポートしています。次の表は、それぞれのキーが何をするのかの詳細です:

| Key                | Function                                                     |
| ------------------ | ------------------------------------------------------------ |
| `Tab`              | Moves focus to the next focusable element.                   |
| `Shift` + `Tab`    | Moves focus to the previous focusable element.               |
| `Esc`              | Closes the popover. |
| `Space` or `Enter` | Clicks the focusable element. |


`ion-popover` は、 `button` プロパティを持つ `ion-item` 要素間を移動するための矢印キーを完全にサポートしています。最も一般的な使用例としては、デスクトップにフォーカスしたアプリケーションにおけるドロップダウンメニューとして使用することができます。基本的なキーボードのサポートに加え、次の表ではドロップダウンメニューの矢印キーのサポートについて詳しく説明します。

| Key                | Function                                                       |
| ------------------ | -------------------------------------------------------------- |
| `ArrowUp`          | Moves focus to the previous focusable element.                 |
| `ArrowDown`        | Moves focus to the next focusable element.                     |
| `Home`             | Moves focus to the first focusable element.                    |
| `End`              | Moves focus to the last focusable element.                     |
| `ArrowLeft`        | When used in a child popover, closes the popover and returns focus to the parent popover. |
| `Space`, `Enter`, and `ArrowRight`       | When focusing a trigger element, opens the associated popover. |

## Performance

### Mounting Inner Contents

The content of an inline `ion-popover` is unmounted when closed. If this content is expensive to render, developers can use the `keepContentsMounted` property to mount the content as soon as the popover is mounted. This can help optimize the responsiveness of your application as the inner contents will have already been mounted when the popover opens.

import Mount from '@site/static/usage/popover/performance/mount/index.md';

<Mount />

Developers should keep the following in mind when using `keepContentsMounted`:

- This feature should be used as a last resort in order to deal with existing performance problems. Try to identify and resolve performance bottlenecks before using this feature. Additionally, do not use this to anticipate performance problems.

- This feature is only needed when using a JavaScript Framework. Developers not using a framework can  pass the contents to be rendered into the popover, and the contents will be rendered automatically.

- This feature only works with inline popovers. Popovers created with the `popoverController` are not created ahead of time, so the inner contents are not created either.

- Any JavaScript Framework lifecycle hooks on the inner component will run as soon as the popover is mounted, not when the popover is presented.

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
