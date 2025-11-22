---
title: Gestures
---

import Codepen from '@components/global/Codepen';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<head>
  <title>ジェスチャー | カスタムジェスチャーとインタラクション用のIonicアプリユーティリティ</title>
  <meta
    name="description"
    content="Ionic Gesturesは、開発者がプラットフォームに依存しない方法でアプリのカスタムジェスチャーとインタラクションを構築できるユーティリティです。詳しく学びましょう。"
  />
</head>

## 概要

Ionic Gestures は、開発者がプラットフォームに依存しない方法でアプリケーションのカスタムジェスチャーとインタラクションを構築できるユーティリティです。開発者は、React や Angular などの特定のフレームワークを使用する必要はなく、Ionic アプリを構築する必要もありません！開発者が Ionic Framework v5.0 以降にアクセスできる限り、Ionic Gestures のすべてにアクセスできます。

複雑なジェスチャーの構築には時間がかかる場合があります。カスタムジェスチャーを提供する他のライブラリは、しばしば過度に重く、マウスやタッチイベントをキャプチャして伝播させないため、他の要素がスクロール可能またはクリック可能でなくなる可能性があります。

## Installation

````mdx-code-block
<Tabs
  groupId="framework"
  defaultValue="javascript"
  values={[
    { value: 'javascript', label: 'JavaScript' },
    { value: 'angular', label: 'Angular' },
    { value: 'angular-standalone', label: 'Angular (Standalone)' },
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue' },
  ]
}>
<TabItem value="javascript">

Ionic CoreとJavaScriptを使用する開発者は、最新バージョンの`@ionic/core`をインストールする必要があります。

```javascript
import { createGesture } from 'https://cdn.jsdelivr.net/npm/@ionic/core@latest/dist/esm/index.mjs';

...

const gesture = createGesture({
  el: elementRef,
  threshold: 15,
  gestureName: 'my-gesture',
  onMove: event => onMoveHandler(event)
});

```
</TabItem>
<TabItem value="typescript">

Ionic CoreとTypeScriptを使用する開発者は、最新バージョンの`@ionic/core`をインストールする必要があります。

```tsx
import { createGesture, Gesture } from '@ionic/core';

...

const gesture: Gesture = createGesture({
  el: elementRef,
  threshold: 15,
  gestureName: 'my-gesture',
  onMove: event => onMoveHandler(event)
});
```
</TabItem>
<TabItem value="angular">

Angularを使用する開発者は、最新バージョンの`@ionic/angular`をインストールする必要があります。ジェスチャーは`GestureController`の依存性注入を介して作成できます。

デフォルトでは、ジェスチャーのコールバックはNgZone内で実行されません。
開発者は、ジェスチャーを作成する際に`runInsideAngularZone`パラメータを`true`に設定するか、コールバックを`NgZone.run()`呼び出しでラップできます。

```tsx
import { Gesture, GestureController } from '@ionic/angular';

...

constructor(private gestureCtrl: GestureController) {
  const gesture: Gesture = this.gestureCtrl.create({
    el: this.element.nativeElement,
    threshold: 15,
    gestureName: 'my-gesture',
    onMove: event => this.onMoveHandler(event)
  }, true);
  // The `true` above ensures that callbacks run inside NgZone.
}

```
</TabItem>
<TabItem value="angular-standalone">

Angularを使用する開発者は、最新バージョンの`@ionic/angular`をインストールする必要があります。ジェスチャーは`GestureController`の依存性注入を介して作成できます。

デフォルトでは、ジェスチャーのコールバックはNgZone内で実行されません。
開発者は、ジェスチャーを作成する際に`runInsideAngularZone`パラメータを`true`に設定するか、コールバックを`NgZone.run()`呼び出しでラップできます。

```tsx
import { Gesture, GestureController } from '@ionic/angular/standalone';

...

constructor(private gestureCtrl: GestureController) {
  const gesture: Gesture = this.gestureCtrl.create({
    el: this.element.nativeElement,
    threshold: 15,
    gestureName: 'my-gesture',
    onMove: event => this.onMoveHandler(event)
  }, true);
  // The `true` above ensures that callbacks run inside NgZone.
}

```
</TabItem>
<TabItem value="react">

Reactを使用する開発者は、最新バージョンの`@ionic/react`をインストールする必要があります。完全なReactラッパーは近日公開予定です！

```tsx
import { createGesture, Gesture } from '@ionic/react';

...

const gesture: Gesture = createGesture({
  el: elementRef,
  threshold: 15,
  gestureName: 'my-gesture',
  onMove: event => onMoveHandler(event)
});
```
</TabItem>
<TabItem value="vue">

Ionic Vueを使用する開発者は、最新バージョンの`@ionic/vue`をインストールする必要があります。

```javascript
import { createGesture } from '@ionic/vue';
import { ref } from 'vue';

...

const elementRef = ref();

...

const gesture = createGesture({
  el: elementRef.value,
  threshold: 15,
  gestureName: 'my-gesture',
  onMove: event => onMoveHandler(event)
});

```
</TabItem>
</Tabs>
````

## 基本的なジェスチャー

import Basic from '@site/static/usage/v8/gestures/basic/index.md';

この例では、アプリは`ion-content`要素でジェスチャーをリッスンします。ジェスチャーの移動が開始されると、`onStart`関数が呼び出され、`ion-card`にクラスが追加されて色付きのボックスシャドウが追加されます。ジェスチャーの移動が検出されると、`onMove`関数が呼び出され、アプリは`ion-card`内に現在のジェスチャー情報を出力します。最後に、ジェスチャーの移動が終了すると、`onEnd`関数が呼び出され、カスタムクラスが`ion-card`から削除されます。

<Basic />

## ダブルクリックジェスチャー

import DoubleClick from '@site/static/usage/v8/gestures/double-click/index.md';

以下の例では、要素のダブルクリックを検出できるようにします。`threshold`を`0`に設定することで、ジェスチャーオブジェクトがクリックを検出できるようにします。さらに、連続して発生する 2 つのクリックのみがダブルクリックとしてカウントされるように、クリックの閾値を定義します。

<DoubleClick />

## ジェスチャーアニメーション

ジェスチャーアニメーションの実装ガイドについては、[Ionic Animations を使用したジェスチャーアニメーション](animations.md#gesture-animations)を参照してください。

## 型

| Name              | 値                                           |
| ----------------- | -------------------------------------------- |
| `GestureCallback` | `(detail: GestureDetail) => boolean \| void` |

## インターフェース

### GestureConfig

| Property        | 型                                         | デフォルト  | 説明                                                                                                                                                                                                                                                                                                                                         |
| --------------- | ------------------------------------------ | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| el              | `Node`                                     | `undefined` | ジェスチャーをリッスンする要素。                                                                                                                                                                                                                                                                                                             |
| disableScroll   | `boolean \| undefined`                     | `false`     | true の場合、ジェスチャーが有効な間、`el`でのスクロールが無効になります。                                                                                                                                                                                                                                                                    |
| direction       | `'x' \| 'y' \| undefined`                  | `'x'`       | 特定の軸に沿った移動にジェスチャー検出を制限します。                                                                                                                                                                                                                                                                                         |
| gestureName     | `string`                                   | `undefined` | 作成するジェスチャーの名前。                                                                                                                                                                                                                                                                                                                 |
| gesturePriority | `number \| undefined`                      | `0`         | 優先度の高いジェスチャーは、優先度の低いジェスチャーをオーバーライドします。複数のジェスチャーが衝突しないようにするのに役立ちます。                                                                                                                                                                                                         |
| passive         | `boolean \| undefined`                     | `true`      | true の場合、ジェスチャーが`preventDefault()`を呼び出すことはないことを示します。これはスクロールパフォーマンスを向上させるために使用できます。詳細については、[Passive Listeners](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Improving_scrolling_performance_with_passive_listeners)を参照してください。 |
| maxAngle        | `number \| undefined`                      | `40`        | ジェスチャーを検出する際に許可する最大角度。                                                                                                                                                                                                                                                                                                 |
| threshold       | `number \| undefined`                      | `10`        | ジェスチャーが開始する前にポインターが移動する必要がある量を定義します。                                                                                                                                                                                                                                                                     |
| blurOnStart     | `boolean \| undefined`                     | `undefined` | true の場合、ジェスチャーは`onStart`コールバックを発火する前に、input や textarea などのアクティブな選択可能な要素をぼかします。                                                                                                                                                                                                             |
| canStart        | `GestureCallback \| undefined`             | `undefined` | ジェスチャーが開始を許可されている場合に true を返すコールバック。                                                                                                                                                                                                                                                                           |
| onWillStart     | `(detail: GestureDetail) => Promise<void>` | `undefined` | ジェスチャーが開始されようとしているときに発火するコールバック。これは`canStart`の後、`onStart`の前に発火します。                                                                                                                                                                                                                            |
| onStart         | `GestureCallback \| undefined`             | `undefined` | ジェスチャーが開始されたときに発火するコールバック。                                                                                                                                                                                                                                                                                         |
| onMove          | `GestureCallback \| undefined`             | `undefined` | ジェスチャーの移動が検出されたときに発火するコールバック。                                                                                                                                                                                                                                                                                   |
| onEnd           | `GestureCallback \| undefined`             | `undefined` | ジェスチャーが終了したときに発火するコールバック。通常、ポインターが解放されたときです。                                                                                                                                                                                                                                                     |
| notCaptured     | `GestureCallback \| undefined`             | `undefined` | ジェスチャーがキャプチャされなかったときに発火するコールバック。通常、優先度の高い競合するジェスチャーがある場合に発生します。                                                                                                                                                                                                               |

### GestureDetail

| Property       | 型                 | 説明                                                                                                                                                          |
| -------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| type           | `string`           | 検出されたジェスチャーのタイプ。                                                                                                                              |
| startX         | `number`           | ジェスチャーの開始 x 座標。                                                                                                                                   |
| startY         | `number`           | ジェスチャーの開始 y 座標。                                                                                                                                   |
| startTimeStamp | `number`           | ジェスチャーが開始されたタイムスタンプ。                                                                                                                      |
| currentX       | `number`           | ジェスチャーの現在の x 座標。                                                                                                                                 |
| currentY       | `number`           | ジェスチャーの現在の y 座標。                                                                                                                                 |
| velocityX      | `number`           | ジェスチャーが現在 x 軸上で移動している速度。                                                                                                                 |
| velocityY      | `number`           | ジェスチャーが現在 y 軸上で移動している速度。                                                                                                                 |
| deltaX         | `number`           | ジェスチャーが開始されてから x 軸上で移動した量。                                                                                                             |
| deltaY         | `number`           | ジェスチャーが開始されてから y 軸上で移動した量。                                                                                                             |
| timeStamp      | `number`           | ジェスチャーの現在のタイムスタンプ。                                                                                                                          |
| event          | `UIEvent`          | ブラウザによってディスパッチされたネイティブイベント。詳細については、[UIEvent](https://developer.mozilla.org/en-US/docs/Web/API/UIEvent)を参照してください。 |
| data           | `any \| undefined` | ユーザーによって指定された任意のデータ。これは任意のコールバックで設定および読み取ることができます。                                                          |

## メソッド

#### `enable(enable: boolean = true) => void`

ジェスチャーを有効または無効にします。

#### `destroy() => void`

ジェスチャーインスタンスを破棄し、ターゲット要素でのリッスンを停止します。
