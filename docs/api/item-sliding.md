---
title: "ion-item-sliding"
hide_table_of_contents: true
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@ionic-internal/component-api/v6/item-sliding/props.md';
import Events from '@ionic-internal/component-api/v6/item-sliding/events.md';
import Methods from '@ionic-internal/component-api/v6/item-sliding/methods.md';
import Parts from '@ionic-internal/component-api/v6/item-sliding/parts.md';
import CustomProps from '@ionic-internal/component-api/v6/item-sliding/custom-props.md';
import Slots from '@ionic-internal/component-api/v6/item-sliding/slots.md';

<head>
  <title>Slide Buttons | Slide Right to Left with ion-item-sliding</title>
  <meta name="description" content="ion-item-sliding コンポーネントには、ドラッグしてボタンを表示するアイテムが含まれています。スライドしたアイテムが左から右にスワイプされると、オプションが表示されます。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';
import TOCInline from '@theme/TOCInline';



<h2 className="table-of-contents__title">コンテンツ</h2>

<TOCInline
  toc={toc}
  maxHeadingLevel={2}
/>



item-slidingには、Buttonを表示するためにドラッグできるItemを含む必要があるため、[item](item.md)コンポーネントを子要素に配置します。表示するすべてのオプションは、[item options](item-options.md)要素に配置する必要があります。


## スワイプの方向

デフォルトでは、ボタンは `"end"` 側に配置されます。つまり、スライドするItemを最後から最初にスワイプすると、オプションが表示されます。LTRでは右から左、RTLでは左から右です。反対側に配置するには、反対方向にスワイプすると表示されるように、 [`ion-item-options`](item-options.md) 要素の `side` 属性を `"start"` に設定します。最大2つの `ion-item-options` を同時に使用して、スワイプ方向に応じて2つの異なるオプションセットを表示できます。


## レイアウトのオプション

デフォルトでは、iconを [item option](item-option.md) 内にtextとともに配置すると、iconはtextの上に表示されますが、icon slotを次のいずれかに変更してオプション内に配置することができます。

| Slot        | Description                                                              |
| ----------- | ------------------------------------------------------------------------ |
| `start`     | In LTR, start is the left side of the button, and in RTL it is the right |
| `top`       | The icon is above the text                                               |
| `icon-only` | The icon is the only content of the button                               |
| `bottom`    | The icon is below the text                                               |
| `end`       | In LTR, end is the right side of the button, and in RTL it is the left   |


## 拡張可能なオプション

特定のポイントをスワイプすると、オプションを展開してアイテムの幅全体を表示できます。これを `ionSwipe` イベントと組み合わせて、classのmethodを呼び出すことができます。

## Interfaces

### ItemSlidingCustomEvent

必須ではありませんが、このコンポーネントから発行される Ionic イベントでより強く型付けを行うために、`CustomEvent` インターフェースの代わりにこのインターフェースを使用することが可能です。

```typescript
interface ItemSlidingCustomEvent extends CustomEvent {
  target: HTMLIonItemSlidingElement;
}
```




## 使い方

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'stencil', label: 'Stencil' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```html
<ion-list>
  <!-- Sliding item with text options on both sides -->
  <ion-item-sliding>
    <ion-item-options side="start">
      <ion-item-option (click)="favorite(item)">Favorite</ion-item-option>
      <ion-item-option color="danger" (click)="share(item)">Share</ion-item-option>
    </ion-item-options>

    <ion-item>
      <ion-label>Item Options</ion-label>
    </ion-item>

    <ion-item-options side="end">
      <ion-item-option (click)="unread(item)">Unread</ion-item-option>
    </ion-item-options>
  </ion-item-sliding>

  <!-- Sliding item with expandable options on both sides -->
  <ion-item-sliding>
    <ion-item-options side="start">
      <ion-item-option color="danger" expandable>
        Delete
      </ion-item-option>
    </ion-item-options>

    <ion-item>
      <ion-label>Expandable Options</ion-label>
    </ion-item>

    <ion-item-options side="end">
      <ion-item-option color="tertiary" expandable>
        Archive
      </ion-item-option>
    </ion-item-options>
  </ion-item-sliding>

  <!-- Multi-line sliding item with icon options on both sides -->
  <ion-item-sliding id="item100">
    <ion-item href="#">
      <ion-label>
        <h2>HubStruck Notifications</h2>
        <p>A new message in your network</p>
        <p>Oceanic Next has joined your network</p>
      </ion-label>
      <ion-note slot="end">
        10:45 AM
      </ion-note>
    </ion-item>

    <ion-item-options side="start">
      <ion-item-option>
        <ion-icon slot="icon-only" name="heart"></ion-icon>
      </ion-item-option>
    </ion-item-options>

    <ion-item-options side="end">
      <ion-item-option color="danger">
        <ion-icon slot="icon-only" name="trash"></ion-icon>
      </ion-item-option>
      <ion-item-option>
        <ion-icon slot="icon-only" name="star"></ion-icon>
      </ion-item-option>
    </ion-item-options>
  </ion-item-sliding>

  <!-- Sliding item with icon start options on end side -->
  <ion-item-sliding>
    <ion-item>
      <ion-label>
        Sliding Item, Icons Start
      </ion-label>
    </ion-item>
    <ion-item-options>
      <ion-item-option color="primary">
        <ion-icon slot="start" ios="ellipsis-horizontal" md="ellipsis-vertical"></ion-icon>
        More
      </ion-item-option>
      <ion-item-option color="secondary">
        <ion-icon slot="start" name="archive"></ion-icon>
        Archive
      </ion-item-option>
    </ion-item-options>
  </ion-item-sliding>

  <!-- Sliding item with icon end options on end side -->
  <ion-item-sliding>
    <ion-item>
      <ion-label>
        Sliding Item, Icons End
      </ion-label>
    </ion-item>
    <ion-item-options>
      <ion-item-option color="primary">
        <ion-icon slot="end" ios="ellipsis-horizontal" md="ellipsis-vertical"></ion-icon>
        More
      </ion-item-option>
      <ion-item-option color="secondary">
        <ion-icon slot="end" name="archive"></ion-icon>
        Archive
      </ion-item-option>
    </ion-item-options>
  </ion-item-sliding>

  <!-- Sliding item with icon top options on end side -->
  <ion-item-sliding>
    <ion-item>
      <ion-label>
        Sliding Item, Icons Top
      </ion-label>
    </ion-item>
    <ion-item-options>
      <ion-item-option color="primary">
        <ion-icon slot="top" ios="ellipsis-horizontal" md="ellipsis-vertical"></ion-icon>
        More
      </ion-item-option>
      <ion-item-option color="secondary">
        <ion-icon slot="top" name="archive"></ion-icon>
        Archive
      </ion-item-option>
    </ion-item-options>
  </ion-item-sliding>

  <!-- Sliding item with icon bottom options on end side -->
  <ion-item-sliding>
    <ion-item>
      <ion-label>
        Sliding Item, Icons Bottom
      </ion-label>
    </ion-item>
    <ion-item-options>
      <ion-item-option color="primary">
        <ion-icon slot="bottom" ios="ellipsis-horizontal" md="ellipsis-vertical"></ion-icon>
        More
      </ion-item-option>
      <ion-item-option color="secondary">
        <ion-icon slot="bottom" name="archive"></ion-icon>
        Archive
      </ion-item-option>
    </ion-item-options>
  </ion-item-sliding>
</ion-list>
```


</TabItem>


<TabItem value="javascript">

```html
<ion-list>
  <!-- Sliding item with text options on both sides -->
  <ion-item-sliding>
    <ion-item-options side="start">
      <ion-item-option onClick="favorite(item)">Favorite</ion-item-option>
      <ion-item-option color="danger" onClick="share(item)">Share</ion-item-option>
    </ion-item-options>

    <ion-item>
      <ion-label>Item Options</ion-label>
    </ion-item>

    <ion-item-options side="end">
      <ion-item-option onClick="unread(item)">Unread</ion-item-option>
    </ion-item-options>
  </ion-item-sliding>

  <!-- Sliding item with expandable options on both sides -->
  <ion-item-sliding>
    <ion-item-options side="start">
      <ion-item-option color="danger" expandable>
        Delete
      </ion-item-option>
    </ion-item-options>

    <ion-item>
      <ion-label>Expandable Options</ion-label>
    </ion-item>

    <ion-item-options side="end">
      <ion-item-option color="tertiary" expandable>
        Archive
      </ion-item-option>
    </ion-item-options>
  </ion-item-sliding>

  <!-- Multi-line sliding item with icon options on both sides -->
  <ion-item-sliding id="item100">
    <ion-item href="#">
      <ion-label>
        <h2>HubStruck Notifications</h2>
        <p>A new message in your network</p>
        <p>Oceanic Next has joined your network</p>
      </ion-label>
      <ion-note slot="end">
        10:45 AM
      </ion-note>
    </ion-item>

    <ion-item-options side="start">
      <ion-item-option>
        <ion-icon slot="icon-only" name="heart"></ion-icon>
      </ion-item-option>
    </ion-item-options>

    <ion-item-options side="end">
      <ion-item-option color="danger">
        <ion-icon slot="icon-only" name="trash"></ion-icon>
      </ion-item-option>
      <ion-item-option>
        <ion-icon slot="icon-only" name="star"></ion-icon>
      </ion-item-option>
    </ion-item-options>
  </ion-item-sliding>

  <!-- Sliding item with icon start options on end side -->
  <ion-item-sliding>
    <ion-item>
      <ion-label>
        Sliding Item, Icons Start
      </ion-label>
    </ion-item>
    <ion-item-options>
      <ion-item-option color="primary">
        <ion-icon slot="start" ios="ellipsis-horizontal" md="ellipsis-vertical"></ion-icon>
        More
      </ion-item-option>
      <ion-item-option color="secondary">
        <ion-icon slot="start" name="archive"></ion-icon>
        Archive
      </ion-item-option>
    </ion-item-options>
  </ion-item-sliding>

  <!-- Sliding item with icon end options on end side -->
  <ion-item-sliding>
    <ion-item>
      <ion-label>
        Sliding Item, Icons End
      </ion-label>
    </ion-item>
    <ion-item-options>
      <ion-item-option color="primary">
        <ion-icon slot="end" ios="ellipsis-horizontal" md="ellipsis-vertical"></ion-icon>
        More
      </ion-item-option>
      <ion-item-option color="secondary">
        <ion-icon slot="end" name="archive"></ion-icon>
        Archive
      </ion-item-option>
    </ion-item-options>
  </ion-item-sliding>

  <!-- Sliding item with icon top options on end side -->
  <ion-item-sliding>
    <ion-item>
      <ion-label>
        Sliding Item, Icons Top
      </ion-label>
    </ion-item>
    <ion-item-options>
      <ion-item-option color="primary">
        <ion-icon slot="top" ios="ellipsis-horizontal" md="ellipsis-vertical"></ion-icon>
        More
      </ion-item-option>
      <ion-item-option color="secondary">
        <ion-icon slot="top" name="archive"></ion-icon>
        Archive
      </ion-item-option>
    </ion-item-options>
  </ion-item-sliding>

  <!-- Sliding item with icon bottom options on end side -->
  <ion-item-sliding>
    <ion-item>
      <ion-label>
        Sliding Item, Icons Bottom
      </ion-label>
    </ion-item>
    <ion-item-options>
      <ion-item-option color="primary">
        <ion-icon slot="bottom" ios="ellipsis-horizontal" md="ellipsis-vertical"></ion-icon>
        More
      </ion-item-option>
      <ion-item-option color="secondary">
        <ion-icon slot="bottom" name="archive"></ion-icon>
        Archive
      </ion-item-option>
    </ion-item-options>
  </ion-item-sliding>
</ion-list>
```


</TabItem>


<TabItem value="react">

```tsx
import React from 'react';
import { IonList, IonItemSliding, IonItem, IonLabel, IonItemOptions, IonItemOption, IonIcon, IonNote } from '@ionic/react';

import { heart, trash, star, archive, ellipsisHorizontal, ellipsisVertical } from 'ionicons/icons';

export const ItemSlidingExample: React.FC = () => (
<IonList>
  {/* Sliding item with text options on both sides */}
  <IonItemSliding>
    <IonItemOptions side="start">
      <IonItemOption onClick={() => console.log('favorite clicked')}>Favorite</IonItemOption>
      <IonItemOption color="danger" onClick={() => console.log('share clicked')}>Share</IonItemOption>
    </IonItemOptions>

    <IonItem>
      <IonLabel>Item Options</IonLabel>
    </IonItem>

    <IonItemOptions side="end">
      <IonItemOption onClick={() => console.log('unread clicked')}>Unread</IonItemOption>
    </IonItemOptions>
  </IonItemSliding>

  {/* Sliding item with expandable options on both sides */}
  <IonItemSliding>
    <IonItemOptions side="start">
      <IonItemOption color="danger" expandable>
        Delete
      </IonItemOption>
    </IonItemOptions>

    <IonItem>
      <IonLabel>Expandable Options</IonLabel>
    </IonItem>

    <IonItemOptions side="end">
      <IonItemOption color="tertiary" expandable>
        Archive
      </IonItemOption>
    </IonItemOptions>
  </IonItemSliding>

  {/* Multi-line sliding item with icon options on both sides */}
  <IonItemSliding id="item100">
    <IonItem href="#">
      <IonLabel>
        <h2>HubStruck Notifications</h2>
        <p>A new message in your network</p>
        <p>Oceanic Next has joined your network</p>
      </IonLabel>
      <IonNote slot="end">
        10:45 AM
      </IonNote>
    </IonItem>

    <IonItemOptions side="start">
      <IonItemOption>
        <IonIcon slot="icon-only" icon={heart} />
      </IonItemOption>
    </IonItemOptions>

    <IonItemOptions side="end">
      <IonItemOption color="danger">
        <IonIcon slot="icon-only" icon={trash} />
      </IonItemOption>
      <IonItemOption>
        <IonIcon slot="icon-only" icon={star} />
      </IonItemOption>
    </IonItemOptions>
  </IonItemSliding>

  {/* Sliding item with icon start options on end side */}
  <IonItemSliding>
    <IonItem>
      <IonLabel>
        Sliding Item, Icons Start
      </IonLabel>
    </IonItem>
    <IonItemOptions>
      <IonItemOption color="primary">
        <IonIcon slot="start" ios={ellipsisHorizontal} md={ellipsisVertical}></IonIcon>
        More
      </IonItemOption>
      <IonItemOption color="secondary">
        <IonIcon slot="start" icon={archive} />
        Archive
      </IonItemOption>
    </IonItemOptions>
  </IonItemSliding>

  {/* Sliding item with icon end options on end side */}
  <IonItemSliding>
    <IonItem>
      <IonLabel>
        Sliding Item, Icons End
      </IonLabel>
    </IonItem>
    <IonItemOptions>
      <IonItemOption color="primary">
        <IonIcon slot="end" ios={ellipsisHorizontal} md={ellipsisVertical}></IonIcon>
        More
      </IonItemOption>
      <IonItemOption color="secondary">
        <IonIcon slot="end" icon={archive} />
        Archive
      </IonItemOption>
    </IonItemOptions>
  </IonItemSliding>

  {/* Sliding item with icon top options on end side */}
  <IonItemSliding>
    <IonItem>
      <IonLabel>
        Sliding Item, Icons Top
      </IonLabel>
    </IonItem>
    <IonItemOptions>
      <IonItemOption color="primary">
        <IonIcon slot="top" ios={ellipsisHorizontal} md={ellipsisVertical}></IonIcon>
        More
      </IonItemOption>
      <IonItemOption color="secondary">
        <IonIcon slot="top" icon={archive} />
        Archive
      </IonItemOption>
    </IonItemOptions>
  </IonItemSliding>

  {/* Sliding item with icon bottom options on end side */}
  <IonItemSliding>
    <IonItem>
      <IonLabel>
        Sliding Item, Icons Bottom
      </IonLabel>
    </IonItem>
    <IonItemOptions>
      <IonItemOption color="primary">
        <IonIcon slot="bottom" ios={ellipsisHorizontal} md={ellipsisVertical}></IonIcon>
        More
      </IonItemOption>
      <IonItemOption color="secondary">
        <IonIcon slot="bottom" icon={archive} />
        Archive
      </IonItemOption>
    </IonItemOptions>
  </IonItemSliding>
</IonList>
);
```


</TabItem>


<TabItem value="stencil">

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'item-sliding-example',
  styleUrl: 'item-sliding-example.css'
})
export class ItemSlidingExample {
  favorite(ev: any) {
    console.log('Favorite clicked', ev);
  }

  share(ev: any) {
    console.log('Favorite clicked', ev);
  }

  unread(ev: any) {
    console.log('Favorite clicked', ev);
  }

  render() {
    return [
      <ion-list>
        {/* Sliding item with text options on both sides */}
        <ion-item-sliding>
          <ion-item-options side="start">
            <ion-item-option onClick={(ev) => this.favorite(ev)}>Favorite</ion-item-option>
            <ion-item-option color="danger" onClick={(ev) => this.share(ev)}>Share</ion-item-option>
          </ion-item-options>

          <ion-item>
            <ion-label>Item Options</ion-label>
          </ion-item>

          <ion-item-options side="end">
            <ion-item-option onClick={(ev) => this.unread(ev)}>Unread</ion-item-option>
          </ion-item-options>
        </ion-item-sliding>

        {/* Sliding item with expandable options on both sides */}
        <ion-item-sliding>
          <ion-item-options side="start">
            <ion-item-option color="danger" expandable>
              Delete
            </ion-item-option>
          </ion-item-options>

          <ion-item>
            <ion-label>Expandable Options</ion-label>
          </ion-item>

          <ion-item-options side="end">
            <ion-item-option color="tertiary" expandable>
              Archive
            </ion-item-option>
          </ion-item-options>
        </ion-item-sliding>

        {/* Multi-line sliding item with icon options on both sides */}
        <ion-item-sliding id="item100">
          <ion-item href="#">
            <ion-label>
              <h2>HubStruck Notifications</h2>
              <p>A new message in your network</p>
              <p>Oceanic Next has joined your network</p>
            </ion-label>
            <ion-note slot="end">
              10:45 AM
            </ion-note>
          </ion-item>

          <ion-item-options side="start">
            <ion-item-option>
              <ion-icon slot="icon-only" name="heart"></ion-icon>
            </ion-item-option>
          </ion-item-options>

          <ion-item-options side="end">
            <ion-item-option color="danger">
              <ion-icon slot="icon-only" name="trash"></ion-icon>
            </ion-item-option>
            <ion-item-option>
              <ion-icon slot="icon-only" name="star"></ion-icon>
            </ion-item-option>
          </ion-item-options>
        </ion-item-sliding>

        {/* Sliding item with icon start options on end side */}
        <ion-item-sliding>
          <ion-item>
            <ion-label>
              Sliding Item, Icons Start
            </ion-label>
          </ion-item>
          <ion-item-options>
            <ion-item-option color="primary">
              <ion-icon slot="start" ios="ellipsis-horizontal" md="ellipsis-vertical"></ion-icon>
              More
            </ion-item-option>
            <ion-item-option color="secondary">
              <ion-icon slot="start" name="archive"></ion-icon>
              Archive
            </ion-item-option>
          </ion-item-options>
        </ion-item-sliding>

        {/* Sliding item with icon end options on end side */}
        <ion-item-sliding>
          <ion-item>
            <ion-label>
              Sliding Item, Icons End
            </ion-label>
          </ion-item>
          <ion-item-options>
            <ion-item-option color="primary">
              <ion-icon slot="end" ios="ellipsis-horizontal" md="ellipsis-vertical"></ion-icon>
              More
            </ion-item-option>
            <ion-item-option color="secondary">
              <ion-icon slot="end" name="archive"></ion-icon>
              Archive
            </ion-item-option>
          </ion-item-options>
        </ion-item-sliding>

        {/* Sliding item with icon top options on end side */}
        <ion-item-sliding>
          <ion-item>
            <ion-label>
              Sliding Item, Icons Top
            </ion-label>
          </ion-item>
          <ion-item-options>
            <ion-item-option color="primary">
              <ion-icon slot="top" ios="ellipsis-horizontal" md="ellipsis-vertical"></ion-icon>
              More
            </ion-item-option>
            <ion-item-option color="secondary">
              <ion-icon slot="top" name="archive"></ion-icon>
              Archive
            </ion-item-option>
          </ion-item-options>
        </ion-item-sliding>

        {/* Sliding item with icon bottom options on end side */}
        <ion-item-sliding>
          <ion-item>
            <ion-label>
              Sliding Item, Icons Bottom
            </ion-label>
          </ion-item>
          <ion-item-options>
            <ion-item-option color="primary">
              <ion-icon slot="bottom" ios="ellipsis-horizontal" md="ellipsis-vertical"></ion-icon>
              More
            </ion-item-option>
            <ion-item-option color="secondary">
              <ion-icon slot="bottom" name="archive"></ion-icon>
              Archive
            </ion-item-option>
          </ion-item-options>
        </ion-item-sliding>
      </ion-list>
    ];
  }
}
```

</TabItem>


<TabItem value="vue">

```html
<template>
  <ion-list>
    <!-- Sliding item with text options on both sides -->
    <ion-item-sliding>
      <ion-item-options side="start">
        <ion-item-option @click="favorite(item)">Favorite</ion-item-option>
        <ion-item-option color="danger" @click="share(item)">Share</ion-item-option>
      </ion-item-options>

      <ion-item>
        <ion-label>Item Options</ion-label>
      </ion-item>

      <ion-item-options side="end">
        <ion-item-option @click="unread(item)">Unread</ion-item-option>
      </ion-item-options>
    </ion-item-sliding>

    <!-- Sliding item with expandable options on both sides -->
    <ion-item-sliding>
      <ion-item-options side="start">
        <ion-item-option color="danger" expandable>
          Delete
        </ion-item-option>
      </ion-item-options>

      <ion-item>
        <ion-label>Expandable Options</ion-label>
      </ion-item>

      <ion-item-options side="end">
        <ion-item-option color="tertiary" expandable>
          Archive
        </ion-item-option>
      </ion-item-options>
    </ion-item-sliding>

    <!-- Multi-line sliding item with icon options on both sides -->
    <ion-item-sliding id="item100">
      <ion-item href="#">
        <ion-label>
          <h2>HubStruck Notifications</h2>
          <p>A new message in your network</p>
          <p>Oceanic Next has joined your network</p>
        </ion-label>
        <ion-note slot="end">
          10:45 AM
        </ion-note>
      </ion-item>

      <ion-item-options side="start">
        <ion-item-option>
          <ion-icon slot="icon-only" :icon="heart"></ion-icon>
        </ion-item-option>
      </ion-item-options>

      <ion-item-options side="end">
        <ion-item-option color="danger">
          <ion-icon slot="icon-only" :icon="trash"></ion-icon>
        </ion-item-option>
        <ion-item-option>
          <ion-icon slot="icon-only" :icon="star"></ion-icon>
        </ion-item-option>
      </ion-item-options>
    </ion-item-sliding>

    <!-- Sliding item with icon start options on end side -->
    <ion-item-sliding>
      <ion-item>
        <ion-label>
          Sliding Item, Icons Start
        </ion-label>
      </ion-item>
      <ion-item-options>
        <ion-item-option color="primary">
          <ion-icon slot="start" :ios="ellipsisHorizontal" :md="ellipsisVertical"></ion-icon>
          More
        </ion-item-option>
        <ion-item-option color="secondary">
          <ion-icon slot="start" :icon="archive"></ion-icon>
          Archive
        </ion-item-option>
      </ion-item-options>
    </ion-item-sliding>

    <!-- Sliding item with icon end options on end side -->
    <ion-item-sliding>
      <ion-item>
        <ion-label>
          Sliding Item, Icons End
        </ion-label>
      </ion-item>
      <ion-item-options>
        <ion-item-option color="primary">
          <ion-icon slot="end" :ios="ellipsisHorizontal" :md="ellipsisVertical"></ion-icon>
          More
        </ion-item-option>
        <ion-item-option color="secondary">
          <ion-icon slot="end" :icon="archive"></ion-icon>
          Archive
        </ion-item-option>
      </ion-item-options>
    </ion-item-sliding>

    <!-- Sliding item with icon top options on end side -->
    <ion-item-sliding>
      <ion-item>
        <ion-label>
          Sliding Item, Icons Top
        </ion-label>
      </ion-item>
      <ion-item-options>
        <ion-item-option color="primary">
          <ion-icon slot="top" :ios="ellipsis-horizontal" :md="ellipsis-vertical"></ion-icon>
          More
        </ion-item-option>
        <ion-item-option color="secondary">
          <ion-icon slot="top" :icon="archive"></ion-icon>
          Archive
        </ion-item-option>
      </ion-item-options>
    </ion-item-sliding>

    <!-- Sliding item with icon bottom options on end side -->
    <ion-item-sliding>
      <ion-item>
        <ion-label>
          Sliding Item, Icons Bottom
        </ion-label>
      </ion-item>
      <ion-item-options>
        <ion-item-option color="primary">
          <ion-icon slot="bottom" :ios="ellipsisHorizontal" :md="ellipsisVertical"></ion-icon>
          More
        </ion-item-option>
        <ion-item-option color="secondary">
          <ion-icon slot="bottom" :icon="archive"></ion-icon>
          Archive
        </ion-item-option>
      </ion-item-options>
    </ion-item-sliding>
  </ion-list>
</template>

<script>
import { 
  IonIcon, 
  IonItem, 
  IonItemOption, 
  IonItemOptions, 
  IonItemSliding, 
  IonLabel, 
  IonList
} from '@ionic/vue';
import { 
  archive, 
  ellipsisHorizontal, 
  ellipsisVertical,
  heart, 
  star, 
  trash
} from 'ionicons/icons';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { 
    IonIcon, 
    IonItem, 
    IonItemOption, 
    IonItemOptions, 
    IonItemSliding, 
    IonLabel, 
    IonList
  },
  setup() {
    return {
      archive, 
      ellipsisHorizontal, 
      ellipsisVertical,
      heart, 
      star, 
      trash
    }
  }
});
</script>
```


</TabItem>

</Tabs>

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