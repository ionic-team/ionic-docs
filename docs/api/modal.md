---
title: "ion-modal"
---
import Props from '@ionic-internal/component-api/v7/modal/props.md';
import Events from '@ionic-internal/component-api/v7/modal/events.md';
import Methods from '@ionic-internal/component-api/v7/modal/methods.md';
import Parts from '@ionic-internal/component-api/v7/modal/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/modal/custom-props.md';
import Slots from '@ionic-internal/component-api/v7/modal/slots.md';

<head>
  <title>ion-modal: Ionic Mobile App Custom Modal API Component</title>
  <meta name="description" content="ion-modal は、モバイルアプリケーションのコンテンツの上に表示されるダイアログで、インタラクションを再開する前に解除する必要があります。カスタムモーダルコンポーネントについて詳しくはこちら" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />


Modalは、アプリのコンテンツの上に表示されるダイアログであり、インタラクションを再開する前にはアプリによって消されなければならない。選択できるオプションが多い場合や、リスト内の項目をフィルタする場合、およびその他の多くのユースケースで、Selectコンポーネントとして役立ちます。


## インラインモーダル(推奨)

テンプレートに直接コンポーネントを記述することで、 `ion-modal` を使用することができます。これにより、モーダルを表示するために必要なハンドラの数を減らすことができます。

Angular、React、Vue で `ion-modal` を使用する場合、渡されたコンポーネントはモーダルが解除されると破棄されます。この機能は JavaScript フレームワークによって提供されるので、JavaScript フレームワークなしで `ion-modal` を使用しても、渡されたコンポーネントは破棄されません。この機能が必要な場合は、代わりに `modalController` を使用することをお勧めします。

import InlineModalTriggerExample from '@site/static/usage/v7/modal/inline/basic/index.md';

<InlineModalTriggerExample />

### `isOpen` の使用

`ion-modal` の `isOpen` プロパティを使用すると、開発者がアプリケーションの状態からモーダルの表示状態を制御することができます。つまり、 `isOpen` を `true` に設定するとモーダルが表示され、 `isOpen` を `false` に設定するとモーダルが解除されます。

`isOpen` は一方向のデータバインディングを使用します。つまり、モーダルが解除されたときに自動的に `false` にセットされることはありません。開発者は `ionModalDidDismiss` または `didDismiss` イベントを監視して、 `isOpen` を `false` に設定する必要があります。この理由は、`ion-modal` の内部がアプリケーションの状態と密に結合するのを防ぐためである。一方通行のデータバインディングでは、モーダルはリアクティブ変数が提供するboolean値だけを気にすればいいです。双方向のデータバインディングでは、モーダルはboolean値とリアクティブ変数の存在の両方を考慮する必要があります。これは、非決定的な動作につながり、アプリケーションのデバッグを困難にします。

import InlineModalIsOpenExample from '@site/static/usage/v7/modal/inline/is-open/index.md';

<InlineModalIsOpenExample />

## モーダルコントローラ

`ModalController` を使用すると、開発者はプログラムによって `ion-modal` を表示させることができます。開発者は、モーダルの表示と非表示を完全に制御することができます。

import ControllerExample from '@site/static/usage/v7/modal/controller/index.md';

<ControllerExample />

## モーダルの終了を防止する

モーダルにデータを入力しているとき、誤ってデータが失われないようにする方法があると便利です。 `ion-modal` の `canDismiss` プロパティは、モーダルをいつ終了させるかを開発者がコントロールできるようにします。

canDismiss`プロパティの使用方法には、boolean値の設定とコールバック関数の設定の2種類があります。

:::note
 Note: シートモーダルでは、`0` ブレークポイントが設定されていない場合、スワイプ時に `canDismiss` はチェックされません。しかし、`Esc` やハードウェアのバックボタンを押すと、チェックされます。
:::

### boolean値の設定

開発者は `canDismiss` にboolean値を設定することができます。 `canDismiss` が `true` の場合、ユーザーがモーダルを閉じようとすると、モーダルは閉じます。 `canDismiss` が `false` の場合、ユーザーがモーダルを閉じようとしても、モーダルは閉じません。

boolean値を設定するのは、モーダルが終了する前に特定のアクションを実行する必要がある場合に使用する必要があります。たとえば、開発者がモーダルを閉じる前に "利用規約" チェックボックスをチェックすることを要求したい場合、最初は `canDismiss` を `false` に設定し、チェックボックスがチェックされたら `true` に更新することが可能です。

import CanDismissBooleanExample from '@site/static/usage/v7/modal/can-dismiss/boolean/index.md';

<CanDismissBooleanExample />

### コールバック関数を設定する

開発者は `canDismiss` を関数として設定することができます。この関数は、 `true` か `false` のどちらかに解決する `Promise` を返さなければなりません。もし、約束が `true` に解決されたら、モーダルは解除されます。もし、プロミスが `false` に解決された場合、モーダルは解除されません。

コールバック関数を設定するのは、モーダルを終了する前に確認ダイアログを表示するなど、終了条件が複雑な場合に使用する必要があります。ユーザーがこのダイアログで選択したオプションは、モーダルの終了を続行するかどうかの判断に使用されます。

コールバック関数を設定すると、カードまたはシートモーダルの使用時にスワイプジェスチャが中断されることに注意してください。これは、Ionicが、あなたのコールバック関数が何を解決するか事前に知らないためです。

import CanDismissFunctionExample from '@site/static/usage/v7/modal/can-dismiss/function/index.md';

<CanDismissFunctionExample />

### スワイプで閉じないようにする

開発者は、ユーザーがスワイプしてモーダルを閉じるのを防ぎたい場合があります。これは `canDismiss` のコールバック関数を設定し、`role` が `gesture` でないことをチェックすることで実現できます。

import CanDismissPreventSwipeToCloseExample from '@site/static/usage/v7/modal/can-dismiss/prevent-swipe-to-close/index.md';

<CanDismissPreventSwipeToCloseExample />

## モーダルの種類
 
### Card Modal

Developers can create a card modal effect where the modal appears as a card stacked on top of your app's main content. To create a card modal, developers need to set the `presentingElement` property on `ion-modal`.

開発者は、アプリのメインコンテンツの上にカードが積み重なったように表示されるカードモーダル効果を作成することができます。カードモーダルを作成するには、開発者は `ion-modal` に `presentingElement` プロパティと `swipeToClose` プロパティを設定する必要があります。

The `canDismiss` property can be used to control whether or not the card modal can be swiped to close.

:::note
The card display style is only available on iOS.
:::

import CardExample from '@site/static/usage/v7/modal/card/basic/index.md';

<CardExample />

### シートモーダル

マップアプリのドロワーコンポーネントに似たシートモーダルエフェクトを作成します。シートモーダルを作成するには、`ion-modal` に `breakpoints` と `initialBreakpoint` プロパティを設定する必要があります。

`breakpoints`プロパティには、スワイプしたときにシートがスナップすることができる各ブレークポイントを示す配列が渡されます。 `breakpoints` プロパティが `[0, 0.5, 1]` の場合、シートをスワイプすると、モーダルの 0%、50%、100%を表示することができることを示します。モーダルが0%にスワイプされると、モーダルは自動的にディスクローズされます。 `0` ブレークポイントが含まれていない場合、スワイプ時にモーダルを解除することはできませんが、`Esc` またはハードウェアの戻るボタンを押すことで解除することができることに注意してください。

`initialBreakpoint` プロパティは、シート モーダルが表示されるときに、どのブレークポイントから開始するかを知るために必要なものです。 `initialBreakpoint` の値は、 `breakpoints` 配列にも存在する必要があります。例えば、 `breakpoints` の値が `[0, 0.5, 1]` である場合、 `initialBreakpoint` の値が `0.5` であれば、 `breakpoints` 配列に `0.5` が存在するため有効であると考えられます。 `0.25` は `breakpoints` 配列に存在しないので、 `initialBreakpoint` の値は無効になります。

`backdropBreakpoint` プロパティは、 `ion-backdrop` がフェードインし始めるポイントをカスタマイズするために使用することができます。これは、シートの下にインタラクティブなコンテンツがあるようなインタフェースを作成する際に便利です。よくある使用例としては、シートが完全に展開されるまでマップがインタラクティブになるような、マップをオーバーレイするシートモーダルです。

import SheetExample from '@site/static/usage/v7/modal/sheet/basic/index.md';

<SheetExample />

#### 背景コンテンツとのインタラクション

import SheetBackgroundContentExample from '@site/static/usage/v7/modal/sheet/background-content/index.md';

<SheetBackgroundContentExample />

#### ハンドルの動作

シートモーダルでは、ブレークポイント間でシートをドラッグするために使用されるハンドルインジケータをオプションでレンダリングすることができます。 `handleBehavior` プロパティは、ハンドルがユーザーによってアクティブにされたときの振る舞いを設定するために使用されます。

import SheetHandleBehaviorExample from '@site/static/usage/v7/modal/sheet/handle-behavior/index.md';

<SheetHandleBehaviorExample />

## スタイリング

モーダルはアプリケーションのルートで表示されるので、アプリ全体を覆うように表示されます。この動作は、インライン モーダルおよびコントローラから表示されるモーダルの両方に適用されます。その結果、カスタムのモーダルスタイルを特定のコンポーネントにスコープすることはできず、モーダルには適用されません。代わりに、スタイルはグローバルに適用する必要があります。ほとんどの開発者は、カスタムスタイルを `global.css` に配置すれば十分です。

:::note
IonicのAngularアプリを構築する場合、スタイルはグローバルなスタイルシートファイルに追加する必要があります。詳しくは、以下のAngularセクションの [Style Placement](#style-placement) をお読みください。
:::


:::note
`ion-modal` は、積み重ねられたモーダルは同じサイズであるという前提で動作します。その結果、後続の各モーダルはボックスシャドウを持たず、背景の不透明度は `0` になります。これは、モーダルが追加されるたびに影や背景が濃くなるのを避けるためです。これは、CSS 変数 `--box-shadow` と `--backdrop-opacity` を設定することで変更することができます。
:::

``` 
ion-modal.stack-modal {
  --box-shadow: 0 28px 48px rgba(0, 0, 0, 0.4);
  --backdrop-opacity: var(--ion-backdrop-opacity, 0.32);
}
```

import ThemeExample from '@site/static/usage/v7/modal/styling/theming/index.md';

<ThemeExample />

### アニメーション

アニメーションビルダーを使用し、`enterAnimation` と `leaveAnimation` にアニメーションを割り当てることで、表示時、非表示時のアニメーションをカスタマイズすることができます。

import AnimationsExample from '@site/static/usage/v7/modal/styling/animations/index.md';

<AnimationsExample />

## Custom Dialogs

`ion-modal`は、フルページビュー、カード、シートに使用されることが多いですが、カスタムダイアログに使用することも可能です。これは、[ion-alert](./alert)や[ion-loading](./loading)などのコンポーネントが提供するものより複雑なインターフェースを必要とする開発者に便利です。

import CustomDialogs from '@site/static/usage/v7/modal/custom-dialogs/index.md';

<CustomDialogs />

カスタムダイアログを作成する際に注意すべき点がいくつかあります。

* `ion-content` は、フルページモダル、カード、シートで使用することを意図しています。カスタムダイアログのサイズが動的であったり、不明であったりする場合は、 `ion-content` を使用するべきではありません。
* カスタムダイアログを作成することは、デフォルトのモーダルエクスペリエンスから逃れる方法を提供します。そのため、カスタムダイアログは、カードやシートのモーダルでは使用しないでください。

## Interfaces

### ModalOptions

下記は `modalController` を使用する際に利用できるすべてのオプションです。これらのオプションは、 `modalController.create()` を呼び出す際に指定します。

```typescript
interface ModalOptions {
  component: any;
  componentProps?: { [key: string]: any };
  presentingElement?: HTMLElement;
  showBackdrop?: boolean;
  backdropDismiss?: boolean;
  cssClass?: string | string[];
  animated?: boolean;
  canDismiss?: boolean | ((data?: any, role?: string) => Promise<boolean>);

  mode?: 'ios' | 'md';
  keyboardClose?: boolean;
  id?: string;
  htmlAttributes?: { [key: string]: any };

  enterAnimation?: AnimationBuilder;
  leaveAnimation?: AnimationBuilder;

  breakpoints?: number[];
  initialBreakpoint?: number;
  backdropBreakpoint?: number;
  handle?: boolean;
}
```
### ModalCustomEvent

必須ではありませんが、このコンポーネントから発行される Ionic イベントでより強く型付けを行うために、`CustomEvent` インターフェースの代わりにこのインターフェースを使用することが可能です。

```typescript
interface ModalCustomEvent extends CustomEvent {
  target: HTMLIonModalElement;
}
```

## アクセシビリティ

### Keyboard Navigation

| Key   | Function            |
| ----- | ------------------- |
| `Esc` | Dismisses the modal |


### ラベル

モーダルには [`dialog`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/dialog_role) という役割があります。そのため、開発者はモーダルに適切なラベル付けを行う必要があります。モーダルが `ion-title` を使用している場合、 `ion-modal` で [`aria-labelledby`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) を設定すると、内部のテキストをモーダル自体のラベルに使用することができます。モーダルに追加の説明テキストが含まれている場合、このテキストは [`aria-describedby`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) を使ってモーダルと関連付けることができます。

### スクリーンリーダー

モーダルには `aria-modal` 属性が適用されています。この属性は、支援技術によるナビゲーションをモーダル要素のコンテンツに制限させることがあります。その結果、次や前の項目に移動するジェスチャを使用しても、モーダルの外側の要素にフォーカスが当たらない場合があります。これは、`backdropBreakpoint` プロパティを使用して、シート モーダルでバックドロップを無効にした場合にも当てはまります。

開発者が手動でフォーカスを移動しても、アシストはモーダル要素のコンテンツへのナビゲーションを制限しません。ただし、Ionic では、フォーカスのトラッピングが有効になっているモーダルに対して、モーダルの外側に手動でフォーカスを移動することはサポートされていません。

See https://w3c.github.io/aria/#aria-modal for more information.

### フォーカスのトラッピング

モーダルが表示されると、フォーカスは表示されたモーダルの内側に閉じ込められます。ユーザーは、モーダル内の他のインタラクティブ要素にフォーカスを合わせることができますが、モーダルが表示されている間は、モーダルの外側のインタラクティブ要素にフォーカスを合わせることができません。複数のスタック モーダルを表示するアプリケーションでは、最後に表示されたモーダルにフォーカスが移動します。

`backdropBreakpoint` プロパティによって背景が無効にされたシート モーダルは、フォーカスのトラッピングの対象にはなりません。

### シートモーダル

シートモーダルでは、`backdropBreakpoint` プロパティが使用されているとき、ユーザがモーダルの後ろのコンテンツとインタラクトできるようにします。バックドロップは、指定された `backdropBreakpoint` までは無効になり、それ以降は有効になります。

バックドロップが無効になると、ユーザーはポインタやキーボードを使用して、シートモーダルの外側の要素を操作することができるようになります。入力支援は、`aria-modal` の使用により、デフォルトではシートモーダルの外側にフォーカスを当てないかもしれません。オートフォーカスなどの機能は、ユーザーに警告することなく、支援技術が 2つのインタラクティブなコンテキスト間をジャンプする原因となるため、ここでは避けることをお勧めします。

## パフォーマンス

### インナー コンテンツのマウント

インラインの `ion-modal` のコンテンツは、閉じられるとアンマウントされます。このコンテンツがレンダリングに時間がかかる場合、開発者は `keepContentsMounted` プロパティを使用して、モーダルがマウントされると同時にコンテンツをマウントすることができます。これにより、モーダルが開かれたときにインナー コンテンツがすでにマウントされているので、アプリケーションの応答性を最適化することができます。

import Mount from '@site/static/usage/v7/modal/performance/mount/index.md';

<Mount />

開発者は `keepContentsMounted` を使用する際に、以下の点に注意する必要があります。

- この機能は、既存のパフォーマンスの問題に対処するための最後の手段として使用すべきです。この機能を使用する前に、パフォーマンスのボトルネックを特定し、解決するように努めてください。さらに、パフォーマンスの問題を予測するためにこの機能を使用しないでください。

- この機能は、JavaScriptフレームワークを使用している場合にのみ必要です。フレームワークを使用していない開発者は、レンダリングするコンテンツをモーダルに渡すことができ、コンテンツは自動的にレンダリングされます。

- この機能はインラインモーダルでのみ動作します。 `modalController` で作成されたモーダルは先に作成されないので、インナーコンテンツも作成されません。

- インナー コンポーネントの JavaScript Framework ライフサイクル フックはすべて、モーダルが表示されたときではなく、モーダルがマウントされたときに実行されます。

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
