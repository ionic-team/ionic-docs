---
title: "ion-infinite-scroll"
---

import Props from '@site/static/auto-generated/infinite-scroll/props.md';
import Events from '@site/static/auto-generated/infinite-scroll/events.md';
import Methods from '@site/static/auto-generated/infinite-scroll/methods.md';
import Parts from '@site/static/auto-generated/infinite-scroll/parts.md';
import CustomProps from '@site/static/auto-generated/infinite-scroll/custom-props.md';
import Slots from '@site/static/auto-generated/infinite-scroll/slots.md';

<head>
  <title>Infinite Scroller | ion-infinite-scroll Action Component</title>
  <meta name="description" content="ion-infinite-scrollコンポーネントは、ユーザーがページの下部または上部から指定された距離だけスクロールしたときに実行されるアクションを呼び出します。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';


Infinite Scrollコンポーネントは、ユーザーがページの下部または上部から指定された距離をスクロールしたときに実行されるアクションを呼び出します。

ユーザが定義された距離に達したときに、`ionInfinite` イベントに割り当てられた関数が呼び出されます。この関数がすべてのタスクを完了したら、無限スクロールインスタンスに対して `complete()` メソッドを呼び出す必要があります。

import Basic from '@site/static/usage/v7/infinite-scroll/basic/index.md';

<Basic />

## 無限スクロールのコンテンツ

`ion-infinite-scroll`コンポーネントは、無限スクロールのロジックを持っています。コンテンツを表示するには、子コンポーネントが必要です。Ionicは、デフォルトでその `ion-infinite-scroll-content` コンポーネントを使用します。このコンポーネントは、無限スクロールを表示し、無限スクロールの状態に応じて外観を変更します。ユーザが使用しているプラットフォームに応じて最適なスピナーが表示されます。ただし、`ion-infinite-scroll-content` コンポーネントのプロパティを設定することにより、デフォルトのスピナーを変更したり、テキストを追加することができます。

import InfiniteScrollContent from '@site/static/usage/v7/infinite-scroll/infinite-scroll-content/index.md';

<InfiniteScrollContent />

## Custom Content

`ion-infinite-scroll` と `ion-infinite-scroll-content` コンポーネントを分離することで、開発者は必要に応じて独自のコンテンツコンポーネントを作成できます。このコンテンツには、SVG要素から固有のCSSアニメーションを持つ要素まで、あらゆるものを含めることができます。

import CustomContent from '@site/static/usage/v7/infinite-scroll/custom-infinite-scroll-content/index.md';

<CustomContent />

## Usage with Virtual Scroll

Infinite scroll requires a scroll container to function. When using a virtual scrolling solution, you will need to disable scrolling on the `ion-content` and indicate which element container is responsible for the scroll container with the `.ion-content-scroll-host` class target.

```html
<ion-content scroll-y="false">
  <virtual-scroll-element class="ion-content-scroll-host">
    <!-- Your virtual scroll content -->
  </virtual-scroll-element>
  <ion-infinite-scroll>
    <ion-infinite-scroll-content></ion-infinite-scroll-content>
  </ion-infinite-scroll>
</ion-content>
```

## アクセシビリティ

Developers should assign the `role="feed"` attribute to the scrollable list of items that are added to or removed from as the user scrolls.

Individual list items should either have `role="article"` or use the `<article>` element directly.

For example, when rendering a collection of items in an `ion-list`:

```html
<ion-content role="feed">
  <ion-list>
    <ion-item role="article">
      First item
    </ion-item>
    <ion-item role="article">
      Second item
    </ion-item>
    ...
  </ion-list>

  <ion-infinite-scroll>
    <ion-infinite-scroll-content></ion-infinite-scroll-content>
  </ion-infinite-scroll>
</ion-content>
```

Please refer to the [ARIA: feed role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/feed_role) documentation for additional information.

## Interfaces

### InfiniteScrollCustomEvent

必須ではありませんが、このコンポーネントから発行される Ionic イベントでより強く型付けを行うために、`CustomEvent` インターフェースの代わりにこのインターフェースを使用することが可能です。

```typescript
interface InfiniteScrollCustomEvent extends CustomEvent {
  target: HTMLIonInfiniteScrollElement;
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