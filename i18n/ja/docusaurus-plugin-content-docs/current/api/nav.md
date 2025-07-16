---
title: "ion-nav"
demoUrl: "/docs/demos/api/nav/index.html"
demoSourceUrl: "https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/nav/index.html"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<head>
  <title>ion-nav | Nav View Component for Ionic Framework Apps</title>
  <meta name="description" content="ion-nav is a standalone for loading arbitrary, and pushing new, components on to the stack. Loading Nav view, and pushing others, won't affect overall routers." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />


  
## Properties


### animated

| | |
| --- | --- |
| **Description** | `true`の場合、コンポーネントの遷移をアニメーションで表現します。 |
| **Attribute** | `animated` |
| **Type** | `boolean` |
| **Default** | `true` |



### animation

| | |
| --- | --- |
| **Description** | デフォルトでは、`ion-nav` はmode（ios または Material Design）に応じてページ間の遷移をアニメーション化します。しかし、このプロパティは `AnimationBuilder` 関数を使用して、独自の遷移を作成することができます。 |
| **Attribute** | `animation` |
| **Type** | `((baseEl: any, opts?: any) => Animation) \| undefined` |
| **Default** | `undefined` |



### root

| | |
| --- | --- |
| **Description** | ロードするルートNavComponent |
| **Attribute** | `root` |
| **Type** | `Function \| HTMLElement \| ViewController \| null \| string \| undefined` |
| **Default** | `undefined` |



### rootParams

| | |
| --- | --- |
| **Description** | ルートコンポーネントの任意のパラメータ |
| **Attribute** | `root-params` |
| **Type** | `undefined \| { [key: string]: any; }` |
| **Default** | `undefined` |



### swipeGesture

| | |
| --- | --- |
| **Description** | ナビコンポーネントがスワイプで戻ることができるようにする場合。 |
| **Attribute** | `swipe-gesture` |
| **Type** | `boolean \| undefined` |
| **Default** | `undefined` |



## Events

| Name | Description |
| --- | --- |
| `ionNavDidChange` | ナビのコンポーネントが変更されたときに発生するイベント |
| `ionNavWillChange` | ナビコンポーネントが変更されたときに発生するイベント |


## Methods


### canGoBack

| | |
| --- | --- |
| **Description** | 現在のビューが戻ることができる場合は `true` を返します。 |
| **Signature** | `canGoBack(view?: ViewController) => Promise<boolean>` |


### getActive

| | |
| --- | --- |
| **Description** | アクティブビューを取得します。 |
| **Signature** | `getActive() => Promise<ViewController \| undefined>` |


### getByIndex

| | |
| --- | --- |
| **Description** | 指定されたインデックスにあるビューを取得します。 |
| **Signature** | `getByIndex(index: number) => Promise<ViewController \| undefined>` |


### getLength

| | |
| --- | --- |
| **Description** | スタック内のビューの数を返します。 |
| **Signature** | `getLength() => Promise<number>` |


### getPrevious

| | |
| --- | --- |
| **Description** | 前のビューを取得します。 |
| **Signature** | `getPrevious(view?: ViewController) => Promise<ViewController \| undefined>` |


### insert

| | |
| --- | --- |
| **Description** | 指定されたインデックスのナビゲーションスタックにコンポーネントを挿入します。これは、ナビゲーションスタックの任意の位置にコンポーネントを追加するのに便利です。 |
| **Signature** | `insert<T extends NavComponent>(insertIndex: number, component: T, componentProps?: ComponentProps<T> \| null, opts?: NavOptions \| null, done?: TransitionDoneFn) => Promise<boolean>` |


### insertPages

| | |
| --- | --- |
| **Description** | 指定されたインデックスのナビゲーションスタックにコンポーネントの配列を挿入します。配列の最後のコンポーネントはビューとしてインスタンス化され、アニメーションしてアクティブビューになります。 |
| **Signature** | `insertPages(insertIndex: number, insertComponents: NavComponent[] \| NavComponentWithProps[], opts?: NavOptions \| null, done?: TransitionDoneFn) => Promise<boolean>` |


### pop

| | |
| --- | --- |
| **Description** | ナビゲーションスタックからコンポーネントをポップオフします。現在のコンポーネントからナビゲートして戻る。 |
| **Signature** | `pop(opts?: NavOptions \| null, done?: TransitionDoneFn) => Promise<boolean>` |


### popTo

| | |
| --- | --- |
| **Description** | ナビゲーションスタック内の特定のインデックスにポップします。 |
| **Signature** | `popTo(indexOrViewCtrl: number \| ViewController, opts?: NavOptions \| null, done?: TransitionDoneFn) => Promise<boolean>` |


### popToRoot

| | |
| --- | --- |
| **Description** | スタックのルートまで戻ってナビゲートする、それがどんなに遠くても。 |
| **Signature** | `popToRoot(opts?: NavOptions \| null, done?: TransitionDoneFn) => Promise<boolean>` |


### push

| | |
| --- | --- |
| **Description** | 新しいコンポーネントを現在のナビゲーションスタックにプッシュします。追加情報があれば、オブジェクトとして一緒に渡す。この追加情報には、NavParamsからアクセスできます。 |
| **Signature** | `push<T extends NavComponent>(component: T, componentProps?: ComponentProps<T> \| null, opts?: NavOptions \| null, done?: TransitionDoneFn) => Promise<boolean>` |


### removeIndex

| | |
| --- | --- |
| **Description** | 指定されたインデックスにあるコンポーネントをナビゲーションスタックから削除します。 |
| **Signature** | `removeIndex(startIndex: number, removeCount?: number, opts?: NavOptions \| null, done?: TransitionDoneFn) => Promise<boolean>` |


### setPages

| | |
| --- | --- |
| **Description** | 現在のナビゲーションスタックのビューを設定し、最後のビューにナビゲートします。デフォルトではアニメーションは無効になっていますが、ナビゲーションコントローラーにオプションを渡すことで有効にすることができます。ナビゲーションパラメーターは、配列内の各ページに渡すこともできます。 |
| **Signature** | `setPages(views: NavComponent[] \| NavComponentWithProps[], opts?: NavOptions \| null, done?: TransitionDoneFn) => Promise<boolean>` |


### setRoot

| | |
| --- | --- |
| **Description** | 現在のナビゲーションスタックのルートをコンポーネントに設定します。 |
| **Signature** | `setRoot<T extends NavComponent>(component: T, componentProps?: ComponentProps<T> \| null, opts?: NavOptions \| null, done?: TransitionDoneFn) => Promise<boolean>` |


