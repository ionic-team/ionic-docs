---
title: Animations
---

import Codepen from '@components/global/Codepen';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<head>
  <title>アニメーション: IonicアプリでWeb Animations APIを使用してアニメーションを構築・実行</title>
  <meta
    name="description"
    content="IonicアプリはWeb Animations APIを使用してアニメーションを構築・実行します。このユーティリティが開発者がプラットフォームに依存しない方法で複雑なアニメーションを構築できるようにする方法を学びます。"
  />
</head>

## 概要

Ionic Animationsは、特定のフレームワークやIonicアプリを必要とせず、プラットフォームに依存しない方法で複雑なアニメーションを作成できるツールです。

効率的なアニメーションの作成は困難な場合があります。開発者は利用可能なライブラリとデバイスのハードウェアリソースに制限されるためです。さらに、多くのアニメーションライブラリはJavaScript駆動のアプローチを使用しており、アニメーションのスケーラビリティを低下させ、CPU時間を消費する可能性があります。

一方、Ionic Animationsは[Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API)を使用しており、アニメーションの計算と実行をすべてブラウザにオフロードします。このアプローチにより、ブラウザはアニメーションを最適化し、スムーズな実行を保証できます。Web Animationsがサポートされていない場合、Ionic Animationsは[CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations)にフォールバックしますが、パフォーマンスの差は無視できる程度です。

## Installation

````mdx-code-block
<Tabs
  groupId="framework"
  defaultValue="javascript"
  values={[
    { value: 'javascript', label: 'JavaScript' },
    { value: 'typescript', label: 'TypeScript' },
    { value: 'angular', label: 'Angular' },
    { value: 'angular-standalone', label: 'Angular (Standalone)' },
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue' },
  ]
}>
<TabItem value="javascript">

Ionic CoreとJavaScriptを使用する開発者は、最新バージョンの`@ionic/core`をインストールする必要があります。

```javascript
import { createAnimation } from 'https://cdn.jsdelivr.net/npm/@ionic/core@latest/dist/esm/index.mjs';

...

const animation = createAnimation()
  .addElement(myElementRef)
  .duration(1000)
  .fromTo('opacity', '1', '0.5');
}

```
</TabItem>
<TabItem value="typescript">

Ionic CoreとTypeScriptを使用する開発者は、最新バージョンの`@ionic/core`をインストールする必要があります。

```tsx
import { createAnimation, Animation } from '@ionic/core';

...

const animation: Animation = createAnimation('')
  .addElement(myElementRef)
  .duration(1000)
  .fromTo('opacity', '1', '0.5');
}
```
</TabItem>
<TabItem value="angular">

Angularを使用する開発者は、最新バージョンの`@ionic/angular`をインストールする必要があります。アニメーションは`AnimationController`の依存性注入を介して作成できます。

```tsx

import { Animation, AnimationController } from '@ionic/angular';

...

constructor(private animationCtrl: AnimationController) {
  const animation: Animation = this.animationCtrl.create()
    .addElement(myElementRef)
    .duration(1000)
    .fromTo('opacity', '1', '0.5');
}

```
</TabItem>
<TabItem value="angular-standalone">

Angularを使用する開発者は、最新バージョンの`@ionic/angular`をインストールする必要があります。アニメーションは`AnimationController`の依存性注入を介して作成できます。

```tsx

import { Animation, AnimationController } from '@ionic/angular/standalone';

...

constructor(private animationCtrl: AnimationController) {
  const animation: Animation = this.animationCtrl.create()
    .addElement(myElementRef)
    .duration(1000)
    .fromTo('opacity', '1', '0.5');
}

```
</TabItem>
<TabItem value="react">

Reactを使用する開発者は、最新バージョンの`@ionic/react`をインストールする必要があります。Reactラッパーはベータ版です。問題があればGitHubで報告してください！

```tsx

import { CreateAnimation, Animation } from '@ionic/react';

...

<CreateAnimation
  duration={1000}
  fromTo={{
    property: 'opacity',
    fromValue: '1',
    toValue: '0.5'
  }}
>
...
</CreateAnimation>

```
</TabItem>
<TabItem value="vue">

Ionic Vueを使用する開発者は、最新バージョンの`@ionic/vue`をインストールする必要があります。

```javascript
import { createAnimation } from '@ionic/vue';
import { ref } from 'vue';

...

const myElementRef = ref();

...

const animation = createAnimation()
  .addElement(myElementRef.value)
  .duration(1000)
  .fromTo('opacity', '1', '0.5');
}

```
</TabItem>
</Tabs>
````

## 基本的なアニメーション

以下の例では、`ion-card`要素の不透明度を変更し、X軸に沿って左から右に移動するアニメーションが作成されています。このアニメーションは無限に実行され、各反復は1500ms続きます。

デフォルトでは、すべてのIonic Animationsは`play`メソッドが呼び出されるまで一時停止しています。

import Basic from '@site/static/usage/v8/animations/basic/index.md';

<Basic />

## キーフレームアニメーション

Ionic Animationsでは、キーフレームを使用してアニメーションの中間ステップを制御できます。ここでは任意の有効なCSSプロパティを使用でき、値としてCSS変数も使用できます。

キーフレームを記述する際、ハイフン付きのCSSプロパティはキャメルケースで記述する必要があります。たとえば、`border-radius`は`borderRadius`として記述する必要があります。これは`fromTo()`、`from()`、`to()`メソッドにも適用されます。

import Keyframes from '@site/static/usage/v8/animations/keyframes/index.md';

<Keyframes />

上記の例では、カード要素は初期幅から`--width`変数で定義された幅に遷移し、その後最終的な幅に遷移します。

各キーフレームオブジェクトには`offset`プロパティが含まれています。`offset`は、キーフレームステップを定義する0から1の間の値です。オフセット値は昇順でなければならず、繰り返すことはできません。

## グループ化されたアニメーション

複数の要素を同時にアニメーション化し、単一の親アニメーションオブジェクトで制御できます。子アニメーションは、特に指定がない限り、duration、easing、iterationsなどのプロパティを継承します。親アニメーションの`onFinish`コールバックは、すべての子アニメーションが完了するまで呼び出されません。

この例では、単一の親アニメーションによって制御される3つの子アニメーションを示しています。アニメーション`cardA`と`cardB`は親アニメーションの2000msのdurationを継承しますが、アニメーション`cardC`は明示的に設定されているため、durationは5000msです。

import Group from '@site/static/usage/v8/animations/group/index.md';

<Group />

## Before/Afterフック

Ionic Animationsは、アニメーションが実行される前とアニメーションが完了した後に要素を変更できるフックを提供します。これらのフックは、DOMの読み取りと書き込み、クラスやインラインスタイルの追加や削除に使用できます。

この例では、アニメーション開始前にカードの背景色を`75%`反転させるインラインフィルターを設定しています。アニメーションが終了すると、要素のボックスシャドウが`rgba(255, 0, 50, 0.4) 0px 4px 16px 6px`（赤いグロー）に設定され、インラインフィルターがクリアされます。ボックスシャドウを削除してフィルターを再度適用するには、アニメーションを停止する必要があります。

フックの完全なリストについては、[Methods](#methods)を参照してください。

import BeforeAndAfterHooks from '@site/static/usage/v8/animations/before-and-after-hooks/index.md';

<BeforeAndAfterHooks />

## チェーンされたアニメーション

アニメーションは連鎖させて、次々に実行できます。`play`メソッドは、アニメーションが完了したときに解決されるPromiseを返します。

import Chain from '@site/static/usage/v8/animations/chain/index.md';

<Chain />

## ジェスチャーアニメーション

Ionic Animationsは、[Ionic Gestures](gestures.md)とシームレスに統合することで、強力なジェスチャーベースのアニメーションを作成する機能を開発者に提供します。

以下の例では、カード要素をドラッグできるトラックを作成しています。`animation`オブジェクトはカード要素を左右に移動する処理を行い、`gesture`オブジェクトは`animation`オブジェクトに移動方向を指示します。

import Gesture from '@site/static/usage/v8/animations/gesture/index.md';

<Gesture />

## ユーザー設定ベースのアニメーション

開発者は、CSS変数を使用して、`prefers-reduced-motion`や`prefers-color-scheme`などのユーザー設定に合わせてアニメーションを調整することもできます。

この方法は、初めてアニメーションを作成する際に、サポートされているすべてのブラウザで機能します。ほとんどのブラウザは、CSS変数が変更されるとキーフレームアニメーションを動的に更新することもできます。

Safariは現在、キーフレームアニメーションの動的更新をサポートしていません。Safariでこのようなサポートが必要な開発者は、[MediaQueryList.addListener()](https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList/addListener)を使用できます。

import PreferenceBased from '@site/static/usage/v8/animations/preference-based/index.md';

<PreferenceBased />

## Ionicコンポーネントアニメーションのオーバーライド

特定のIonicコンポーネントでは、開発者がカスタムアニメーションを提供できます。すべてのアニメーションは、コンポーネントのプロパティとして提供されるか、グローバル設定を介して設定されます。

### モーダル

import ModalOverride from '@site/static/usage/v8/animations/modal-override/index.md';

<ModalOverride />

## パフォーマンスの考慮事項

CSSとWeb Animationsは、通常、コンポジタースレッドで処理されます。これは、レイアウト、ペイント、スタイリング、JavaScriptが実行されるメインスレッドとは異なります。最適なアニメーションパフォーマンスを得るには、コンポジタースレッドで処理できるプロパティを使用することをお勧めします。

`height`や`width`などのプロパティをアニメーション化すると、追加のレイアウトとペイントが発生し、ジャンクを引き起こし、アニメーションパフォーマンスを低下させる可能性があります。一方、`transform`や`opacity`などのプロパティをアニメーション化すると、ブラウザによって高度に最適化され、通常はジャンクをほとんど引き起こしません。

どのCSSプロパティがレイアウトやペイントを引き起こすかについては、[CSS Triggers](https://csstriggers.com/)を参照してください。

## デバッグ

Chromeでアニメーションをデバッグするには、Chrome DevToolsを使用してアニメーションを検査する優れたブログ投稿があります：https://developers.google.com/web/tools/chrome-devtools/inspect-styles/animations。

アニメーションに一意の識別子を割り当てることも推奨されます。これらの識別子はChromeのAnimationsインスペクターに表示され、デバッグが容易になります：

```javascript
/**
 * .square要素のアニメーションは、
 * Chrome DevToolsで"my-animation-identifier"を表示する必要があります。
 */
const animation = createAnimation('my-animation-identifier')
  .addElement(document.querySelector('.square'))
  .duration(1000)
  .fromTo('opacity', '1', '0');
```

## API

このセクションでは、`Animation`クラスで利用可能なすべてのメソッドとプロパティのリストを提供します。

### インターフェース

#### AnimationDirection

```tsx
type AnimationDirection = 'normal' | 'reverse' | 'alternate' | 'alternate-reverse';
```

#### AnimationFill

```tsx
type AnimationFill = 'auto' | 'none' | 'forwards' | 'backwards' | 'both';
```

#### AnimationBuilder

```tsx
type AnimationBuilder = (baseEl: any, opts?: any) => Animation;
```

:::note

`opts`は、カスタムアニメーションに固有の追加オプションです。たとえば、シートモーダルのエンターアニメーションには、現在のブレークポイントの情報が含まれます。

:::

#### AnimationCallbackOptions

```tsx
interface AnimationCallbackOptions {
  /**
   * If true, the associated callback will only be fired once.
   */
  oneTimeCallback: boolean;
}
```

#### AnimationPlayOptions

```tsx
interface AnimationPlayOptions {
  /**
   * If true, the animation will play synchronously.
   * This is the equivalent of running the animation
   * with a duration of 0ms.
   */
  sync: boolean;
}
```

### プロパティ

| Name                           | 説明                                       |
| ------------------------------ | ------------------------------------------------- |
| `childAnimations: Animation[]` | 指定された親アニメーションのすべての子アニメーション。 |
| `elements: HTMLElement[]`      | アニメーションにアタッチされたすべての要素。            |
| `parentAnimation?: Animation`  | 指定されたアニメーションオブジェクトの親アニメーション。 |

### メソッド

| Name                                                                                                                 | 説明                                                                                                                                                                             |
| -------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `addAnimation(animationToAdd: Animation \| Animation[]): Animation`                                                  | 1つ以上のアニメーションをグループ化して、親アニメーションによって制御します。                                                                                                           |
| `addElement(el: Element \| Element[] \| Node \| Node[] \| NodeList): Animation`                                      | アニメーションに1つ以上の要素を追加します。                                                                                                                                              |
| `afterAddClass(className: string \| string[]): Animation`                                                            | アニメーション終了後に、アニメーション内のすべての要素に追加するクラスまたはクラスの配列を追加します。                                                                                   |
| `afterAddRead(readFn: (): void): Animation`                                                                          | アニメーション終了後に実行されるDOM読み取りを実行する関数を追加します。                                                                                                             |
| `afterAddWrite(writeFn: (): void): Animation`                                                                        | アニメーション終了後に実行されるDOM書き込みを実行する関数を追加します。                                                                                                            |
| `afterClearStyles(propertyNames: string[]): Animation`                                                               | アニメーション終了後に、アニメーション内のすべての要素のインラインスタイルからクリアするプロパティ名の配列を追加します。                                                           |
| `afterRemoveClass(className: string \| string[]): Animation`                                                         | アニメーション終了後に、アニメーション内のすべての要素から削除するクラスまたはクラスの配列を追加します。                                                                            |
| `afterStyles(styles: { [property: string]: any }): Animation`                                                        | アニメーション終了後に、アニメーション内のすべての要素に適用するスタイルのオブジェクトを追加します。                                                                                         |
| `beforeAddClass(className: string \| string[]): Animation`                                                           | アニメーション開始前に、アニメーション内のすべての要素に追加するクラスまたはクラスの配列を追加します。                                                                                |
| `beforeAddRead(readFn: (): void): Animation`                                                                         | アニメーション開始前に実行されるDOM読み取りを実行する関数を追加します。                                                                                                          |
| `beforeAddWrite(writeFn: (): void): Animation`                                                                       | アニメーション開始前に実行されるDOM書き込みを実行する関数を追加します。                                                                                                         |
| `beforeClearStyles(propertyNames: string[]): Animation`                                                              | アニメーション開始前に、アニメーション内のすべての要素のインラインスタイルからクリアするプロパティ名の配列を追加します。                                                        |
| `beforeRemoveClass(className: string \| string[]): Animation`                                                        | アニメーション開始前に、アニメーション内のすべての要素から削除するクラスまたはクラスの配列を追加します。                                                                         |
| `beforeStyles(styles: { [property: string]: any }): Animation`                                                       | アニメーション開始前に、アニメーション内のすべての要素に適用するスタイルのオブジェクトを追加します。                                                                                      |
| `direction(direction?: AnimationDirection): Animation`                                                               | アニメーションの再生方向を設定します。                                                                                                                                         |
| `delay(delay?: number): Animation`                                                                                   | アニメーション開始の遅延をミリ秒で設定します。                                                                                                                           |
| `destroy(clearStyleSheets?: boolean): Animation`                                                                     | アニメーションを破棄し、すべての要素、子アニメーション、キーフレームをクリアします。                                                                                                          |
| `duration(duration?: number): Animation`                                                                             | アニメーションの継続時間をミリ秒で設定します。                                                                                                                                      |
| `easing(easing?: string): Animation`                                                                                 | アニメーションのイージングを設定します。受け入れられるイージング値のリストについては、[Easing Effects](https://developer.mozilla.org/en-US/docs/Web/API/EffectTiming/easing#Value)を参照してください。 |
| `from(property: string, value: any): Animation`                                                                      | アニメーションの開始スタイルを設定します。                                                                                                                                                  |
| `fromTo(property: string, fromValue: any, toValue: any): Animation`                                                  | アニメーションの開始スタイルと終了スタイルを設定します。                                                                                                                                          |
| `fill(fill?: AnimationFill): Animation`                                                                              | アニメーションの実行前後で、アニメーションが要素にスタイルを適用する方法を設定します。                                                                                        |
| `iterations(iterations: number): Animation`                                                                          | アニメーションサイクルが停止する前に再生される回数を設定します。                                                                                                           |
| `keyframes(keyframes: any[]): Animation`                                                                             | アニメーションのキーフレームを設定します。                                                                                                                                                     |
| `onFinish(callback: (didComplete: boolean, animation: Animation): void, opts?: AnimationCallbackOptions): Animation` | アニメーション終了時に実行されるコールバックを追加します。                                                                                                                                     |
| `pause(): Animation`                                                                                                 | アニメーションを一時停止します。                                                                                                                                                                    |
| `play(opts?: AnimationPlayOptions): Promise<void>`                                                                   | アニメーションを再生します。                                                                                                                                                                     |
| `progressEnd(playTo?: 0 \| 1, step: number, dur?: number): Animation`                                                | アニメーションのシークを停止します。                                                                                                                                                      |
| `progressStart(forceLinearEasing?: boolean, step?: number): Animation`                                               | アニメーションのシークを開始します。                                                                                                                                                     |
| `progressStep(step: number): Animation`                                                                              | アニメーションをシークします。                                                                                                                                                              |
| `stop(): Animation`                                                                                                  | アニメーションを停止し、すべての要素を初期状態にリセットします。                                                                                                                       |
| `to(property: string, value: any): Animation`                                                                        | アニメーションの終了スタイルを設定します。                                                                                                                                                    |
