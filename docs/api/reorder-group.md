---
title: "ion-reorder-group"
hide_table_of_contents: true
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import TOCInline from '@theme/TOCInline';

import Props from '@site/static/auto-generated/reorder-group/props.md';
import Events from '@site/static/auto-generated/reorder-group/events.md';
import Methods from '@site/static/auto-generated/reorder-group/methods.md';
import Parts from '@site/static/auto-generated/reorder-group/parts.md';
import CustomProps from '@site/static/auto-generated/reorder-group/custom-props.md';
import Slots from '@site/static/auto-generated/reorder-group/slots.md';

<head>
  <title>ion-reorder-group: Wrapper Component for Ionic Framework Apps</title>
  <meta name="description" content="ion-reorder-groupは、Ionicアプリでion-reorderコンポーネントを使用するアイテムのためのラッパーコンポーネントです。ion-reorder-groupの使い方はこちらをご覧ください。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';


<h2 className="table-of-contents__title">コンテンツ</h2>

<TOCInline
  toc={toc}
  maxHeadingLevel={2}
/>



reorder groupは、`ion-reorder` コンポーネントを使用するアイテムのラッパーコンポーネントです。`ion-reorder-group` の中でアイテムをドラッグするために使用されるアンカーコンポーネントの詳細については、[Reorder documentation](reorder.md) を参照してください。

ユーザがアイテムをドラッグして新しい位置にドロップすると、 `ionItemReorder` イベントが送出されます。`complete()` メソッドを呼び出すハンドラを実装する必要があります。

`ionItemReorder` イベントの `detail` プロパティには、 `from` および `to` インデックスを含む、reorderの操作に関するすべての関連情報が含まれている。並べ替えのコンテキストでは、アイテムは`from`インデックスから新しい `to`インデックスに移動します。

## Reorderの完了

`ionItemReorder` イベントがdispatchされたとき、開発者は `ion-reorder-group` の `complete()` メソッドを呼び出すすることができます。これにより、並び替えの操作が完了します。

デフォルトでは、`complete()` メソッドは `ion-reorder-group` の中の DOMノードを並び替えます。

`ion-reorder-group` 内のアイテムの順序に基づいて配列を並べ替える必要がある開発者には、 `complete()` のパラメータとして配列を渡すことをおすすめします。Ionicは配列をソートして返すので、再アサインが可能になります。

場合によっては、アプリが独自に配列とDOMノードの両方を並べ替える必要があるかもしれません。このような場合には、`complete()` メソッドに `false` を渡すことが推奨されます。これにより、Ionicは `ion-reorder-group` 内のDOMノードの並び替えを行わないようにすることができます。

## 仮想スクロールでの使い方

並べ替えグループが機能するためには、スクロールコンテナが必要です。仮想スクロールを使用する場合は、`ion-content` のスクロールを無効にし、`.ion-content-scroll-host` クラスターゲットで、どの要素コンテナがスクロールコンテナを担当するかを指定する必要があります。

```html
<ion-content scroll-y="false">
  <virtual-scroll-element class="ion-content-scroll-host">
    <ion-reorder-group disabled="false">
      <ion-item>
        <ion-label>
          Item 1
        </ion-label>
        <ion-reorder slot="end"></ion-reorder>
      </ion-item>
      <ion-item>
        <ion-label>
          Item 2
        </ion-label>
        <ion-reorder slot="end"></ion-reorder>
      </ion-item>
    </ion-reorder-group>
  </virtual-scroll-element>
</ion-content>
```

## Interfaces

### ItemReorderEventDetail

```typescript
interface ItemReorderEventDetail {
  from: number;
  to: number;
  complete: (data?: boolean | any[]) => any;
}
```

### ItemReorderCustomEvent

必須ではありませんが、このコンポーネントから発行される Ionic イベントでより強く型付けを行うために、`CustomEvent` インターフェースの代わりにこのインターフェースを使用することが可能です。

```typescript
interface ItemReorderCustomEvent extends CustomEvent {
  detail: ItemReorderEventDetail;
  target: HTMLIonReorderGroupElement;
}
```



## 使い方

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'stencil', label: 'Stencil' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```html
<!-- The reorder gesture is disabled by default, enable it to drag and drop items -->
<ion-reorder-group (ionItemReorder)="doReorder($event)" disabled="false">
  <!-- Default reorder icon, end aligned items -->
  <ion-item>
    <ion-label>
      Item 1
    </ion-label>
    <ion-reorder slot="end"></ion-reorder>
  </ion-item>

  <ion-item>
    <ion-label>
      Item 2
    </ion-label>
    <ion-reorder slot="end"></ion-reorder>
  </ion-item>

  <!-- Default reorder icon, start aligned items -->
  <ion-item>
    <ion-reorder slot="start"></ion-reorder>
    <ion-label>
      Item 3
    </ion-label>
  </ion-item>

  <ion-item>
    <ion-reorder slot="start"></ion-reorder>
    <ion-label>
      Item 4
    </ion-label>
  </ion-item>

  <!-- Custom reorder icon end items -->
  <ion-item>
    <ion-label>
      Item 5
    </ion-label>
    <ion-reorder slot="end">
      <ion-icon name="pizza"></ion-icon>
    </ion-reorder>
  </ion-item>

  <ion-item>
    <ion-label>
      Item 6
    </ion-label>
    <ion-reorder slot="end">
      <ion-icon name="pizza"></ion-icon>
    </ion-reorder>
  </ion-item>

  <!-- Items wrapped in a reorder, entire item can be dragged -->
  <ion-reorder>
    <ion-item>
      <ion-label>
        Item 7
      </ion-label>
    </ion-item>
  </ion-reorder>

  <ion-reorder>
    <ion-item>
      <ion-label>
        Item 8
      </ion-label>
    </ion-item>
  </ion-reorder>
</ion-reorder-group>
```

```javascript
import { Component, ViewChild } from '@angular/core';
import { IonReorderGroup } from '@ionic/angular';
import { ItemReorderEventDetail } from '@ionic/core';

@Component({
  selector: 'reorder-group-example',
  templateUrl: 'reorder-group-example.html',
  styleUrls: ['./reorder-group-example.css']
})
export class ReorderGroupExample {
  @ViewChild(IonReorderGroup) reorderGroup: IonReorderGroup;

  constructor() {}

  doReorder(ev: CustomEvent<ItemReorderEventDetail>) {
    // The `from` and `to` properties contain the index of the item
    // when the drag started and ended, respectively
    console.log('Dragged from index', ev.detail.from, 'to', ev.detail.to);

    // Finish the reorder and position the item in the DOM based on
    // where the gesture ended. This method can also be called directly
    // by the reorder group
    ev.detail.complete();
  }

  toggleReorderGroup() {
    this.reorderGroup.disabled = !this.reorderGroup.disabled;
  }
}
```

### Updating Data

```javascript
import { Component, ViewChild } from '@angular/core';
import { IonReorderGroup } from '@ionic/angular';
import { ItemReorderEventDetail } from '@ionic/core';

@Component({
  selector: 'reorder-group-example',
  templateUrl: 'reorder-group-example.html',
  styleUrls: ['./reorder-group-example.css']
})
export class ReorderGroupExample {
  items = [1, 2, 3, 4, 5];

  @ViewChild(IonReorderGroup) reorderGroup: IonReorderGroup;

  constructor() {}

  doReorder(ev: CustomEvent<ItemReorderEventDetail>) {
    // Before complete is called with the items they will remain in the
    // order before the drag
    console.log('Before complete', this.items);

    // Finish the reorder and position the item in the DOM based on
    // where the gesture ended. Update the items variable to the
    // new order of items
    this.items = ev.detail.complete(this.items);

    // After complete is called the items will be in the new order
    console.log('After complete', this.items);
  }
}
```


</TabItem>


<TabItem value="javascript">

```html
<!-- The reorder gesture is disabled by default, enable it to drag and drop items -->
<ion-reorder-group disabled="false">
  <!-- Default reorder icon, end aligned items -->
  <ion-item>
    <ion-label>
      Item 1
    </ion-label>
    <ion-reorder slot="end"></ion-reorder>
  </ion-item>

  <ion-item>
    <ion-label>
      Item 2
    </ion-label>
    <ion-reorder slot="end"></ion-reorder>
  </ion-item>

  <!-- Default reorder icon, start aligned items -->
  <ion-item>
    <ion-reorder slot="start"></ion-reorder>
    <ion-label>
      Item 3
    </ion-label>
  </ion-item>

  <ion-item>
    <ion-reorder slot="start"></ion-reorder>
    <ion-label>
      Item 4
    </ion-label>
  </ion-item>

  <!-- Custom reorder icon end items -->
  <ion-item>
    <ion-label>
      Item 5
    </ion-label>
    <ion-reorder slot="end">
      <ion-icon name="pizza"></ion-icon>
    </ion-reorder>
  </ion-item>

  <ion-item>
    <ion-label>
      Item 6
    </ion-label>
    <ion-reorder slot="end">
      <ion-icon name="pizza"></ion-icon>
    </ion-reorder>
  </ion-item>

  <!-- Items wrapped in a reorder, entire item can be dragged -->
  <ion-reorder>
    <ion-item>
      <ion-label>
        Item 7
      </ion-label>
    </ion-item>
  </ion-reorder>

  <ion-reorder>
    <ion-item>
      <ion-label>
        Item 8
      </ion-label>
    </ion-item>
  </ion-reorder>
</ion-reorder-group>
```

```javascript
const reorderGroup = document.querySelector('ion-reorder-group');

reorderGroup.addEventListener('ionItemReorder', ({detail}) => {
  // The `from` and `to` properties contain the index of the item
  // when the drag started and ended, respectively
  console.log('Dragged from index', detail.from, 'to', detail.to);

  // Finish the reorder and position the item in the DOM based on
  // where the gesture ended. This method can also be called directly
  // by the reorder group
  detail.complete();
});
```

### Updating Data

```javascript
const items = [1, 2, 3, 4, 5];
const reorderGroup = document.querySelector('ion-reorder-group');

reorderGroup.addEventListener('ionItemReorder', ({detail}) => {
  // Before complete is called with the items they will remain in the
  // order before the drag
  console.log('Before complete', items);

  // Finish the reorder and position the item in the DOM based on
  // where the gesture ended. Update the items variable to the
  // new order of items
  items = detail.complete(items);

  // After complete is called the items will be in the new order
  console.log('After complete', items);
});
```


</TabItem>


<TabItem value="react">

```tsx
import React from 'react';
import { IonItem, IonLabel, IonReorder, IonReorderGroup, IonIcon, IonContent } from '@ionic/react';
import { ItemReorderEventDetail } from '@ionic/core';
import { pizza } from 'ionicons/icons';

function doReorder(event: CustomEvent<ItemReorderEventDetail>) {
  // The `from` and `to` properties contain the index of the item
  // when the drag started and ended, respectively
  console.log('Dragged from index', event.detail.from, 'to', event.detail.to);

  // Finish the reorder and position the item in the DOM based on
  // where the gesture ended. This method can also be called directly
  // by the reorder group
  event.detail.complete();
}

export const ReorderGroupExample: React.FC = () => (
  <IonContent>
    {/*-- The reorder gesture is disabled by default, enable it to drag and drop items --*/}
    <IonReorderGroup disabled={false} onIonItemReorder={doReorder}>
      {/*-- Default reorder icon, end aligned items --*/}
      <IonItem>
        <IonLabel>Item 1</IonLabel>
        <IonReorder slot="end" />
      </IonItem>

      <IonItem>
        <IonLabel>Item 2</IonLabel>
        <IonReorder slot="end" />
      </IonItem>

      {/*-- Default reorder icon, start aligned items --*/}
      <IonItem>
        <IonReorder slot="start" />
        <IonLabel>Item 3</IonLabel>
      </IonItem>

      <IonItem>
        <IonReorder slot="start" />
        <IonLabel>Item 4</IonLabel>
      </IonItem>

      {/*-- Custom reorder icon end items --*/}
      <IonItem>
        <IonLabel>Item 5</IonLabel>
        <IonReorder slot="end">
          <IonIcon icon={pizza} />
        </IonReorder>
      </IonItem>

      <IonItem>
        <IonLabel>Item 6</IonLabel>
        <IonReorder slot="end">
          <IonIcon icon={pizza} />
        </IonReorder>
      </IonItem>

      {/*-- Items wrapped in a reorder, entire item can be dragged --*/}
      <IonReorder>
        <IonItem>
          <IonLabel>Item 7</IonLabel>
        </IonItem>
      </IonReorder>

      <IonReorder>
        <IonItem>
          <IonLabel>Item 8</IonLabel>
        </IonItem>
      </IonReorder>
    </IonReorderGroup>
  </IonContent>
);
```

### Updating Data

```tsx
const items = [1, 2, 3, 4, 5];

function doReorder(event: CustomEvent) {
  // Before complete is called with the items they will remain in the
  // order before the drag
  console.log('Before complete', this.items);

  // Finish the reorder and position the item in the DOM based on
  // where the gesture ended. Update the items variable to the
  // new order of items
  this.items = event.detail.complete(this.items);

  // After complete is called the items will be in the new order
  console.log('After complete', this.items);
}
```


</TabItem>


<TabItem value="stencil">

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'reorder-group-example',
  styleUrl: 'reorder-group-example.css'
})
export class ReorderGroupExample {
  doReorder(ev: any) {
    // The `from` and `to` properties contain the index of the item
    // when the drag started and ended, respectively
    console.log('Dragged from index', ev.detail.from, 'to', ev.detail.to);

    // Finish the reorder and position the item in the DOM based on
    // where the gesture ended. This method can also be called directly
    // by the reorder group
    ev.detail.complete();
  }

  render() {
    return [
      // The reorder gesture is disabled by default, enable it to drag and drop items
      <ion-reorder-group onIonItemReorder={(ev) => this.doReorder(ev)} disabled={false}>
        {/* Default reorder icon, end aligned items */}
        <ion-item>
          <ion-label>
            Item 1
          </ion-label>
          <ion-reorder slot="end"></ion-reorder>
        </ion-item>

        <ion-item>
          <ion-label>
            Item 2
          </ion-label>
          <ion-reorder slot="end"></ion-reorder>
        </ion-item>

        {/* Default reorder icon, start aligned items */}
        <ion-item>
          <ion-reorder slot="start"></ion-reorder>
          <ion-label>
            Item 3
          </ion-label>
        </ion-item>

        <ion-item>
          <ion-reorder slot="start"></ion-reorder>
          <ion-label>
            Item 4
          </ion-label>
        </ion-item>

        {/* Custom reorder icon end items */}
        <ion-item>
          <ion-label>
            Item 5
          </ion-label>
          <ion-reorder slot="end">
            <ion-icon name="pizza"></ion-icon>
          </ion-reorder>
        </ion-item>

        <ion-item>
          <ion-label>
            Item 6
          </ion-label>
          <ion-reorder slot="end">
            <ion-icon name="pizza"></ion-icon>
          </ion-reorder>
        </ion-item>

        {/* Items wrapped in a reorder, entire item can be dragged */}
        <ion-reorder>
          <ion-item>
            <ion-label>
              Item 7
            </ion-label>
          </ion-item>
        </ion-reorder>

        <ion-reorder>
          <ion-item>
            <ion-label>
              Item 8
            </ion-label>
          </ion-item>
        </ion-reorder>
      </ion-reorder-group>
    ]
  }
}
```

### Updating Data

```tsx
import { Component, State, h } from '@stencil/core';

@Component({
  tag: 'reorder-group-example',
  styleUrl: 'reorder-group-example.css'
})
export class ReorderGroupExample {
  @State() items = [1, 2, 3, 4, 5];

  doReorder(ev: any) {
    // Before complete is called with the items they will remain in the
    // order before the drag
    console.log('Before complete', this.items);

    // Finish the reorder and position the item in the DOM based on
    // where the gesture ended. Update the items variable to the
    // new order of items
    this.items = ev.detail.complete(this.items);

    // After complete is called the items will be in the new order
    console.log('After complete', this.items);
  }

  render() {
    return [
      // The reorder gesture is disabled by default, enable it to drag and drop items
      <ion-reorder-group onIonItemReorder={(ev) => this.doReorder(ev)} disabled={false}>

        {this.items.map(item =>
          <ion-item>
            <ion-label>
              Item { item }
            </ion-label>
            <ion-reorder slot="end"></ion-reorder>
          </ion-item>
        )}

      </ion-reorder-group>
    ]
  }
}
```

</TabItem>


<TabItem value="vue">

```html
<template>
  <!-- The reorder gesture is disabled by default, enable it to drag and drop items -->
  <ion-reorder-group @ionItemReorder="doReorder($event)" disabled="false">
    <!-- Default reorder icon, end aligned items -->
    <ion-item>
      <ion-label>
        Item 1
      </ion-label>
      <ion-reorder slot="end"></ion-reorder>
    </ion-item>

    <ion-item>
      <ion-label>
        Item 2
      </ion-label>
      <ion-reorder slot="end"></ion-reorder>
    </ion-item>

    <!-- Default reorder icon, start aligned items -->
    <ion-item>
      <ion-reorder slot="start"></ion-reorder>
      <ion-label>
        Item 3
      </ion-label>
    </ion-item>

    <ion-item>
      <ion-reorder slot="start"></ion-reorder>
      <ion-label>
        Item 4
      </ion-label>
    </ion-item>

    <!-- Custom reorder icon end items -->
    <ion-item>
      <ion-label>
        Item 5
      </ion-label>
      <ion-reorder slot="end">
        <ion-icon name="pizza"></ion-icon>
      </ion-reorder>
    </ion-item>

    <ion-item>
      <ion-label>
        Item 6
      </ion-label>
      <ion-reorder slot="end">
        <ion-icon name="pizza"></ion-icon>
      </ion-reorder>
    </ion-item>

    <!-- Items wrapped in a reorder, entire item can be dragged -->
    <ion-reorder>
      <ion-item>
        <ion-label>
          Item 7
        </ion-label>
      </ion-item>
    </ion-reorder>

    <ion-reorder>
      <ion-item>
        <ion-label>
          Item 8
        </ion-label>
      </ion-item>
    </ion-reorder>
  </ion-reorder-group>
</template>

<script>
import { 
  IonIcon, 
  IonItem, 
  IonLabel, 
  IonReorder, 
  IonReorderGroup
} from '@ionic/vue';
import { pizza } from 'ionicons/icons';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { 
    IonIcon, 
    IonItem, 
    IonLabel, 
    IonReorder, 
    IonReorderGroup
  },
  setup() {
    const doReorder = (event: CustomEvent) => {
      // The `from` and `to` properties contain the index of the item
      // when the drag started and ended, respectively
      console.log('Dragged from index', event.detail.from, 'to', event.detail.to);

      // Finish the reorder and position the item in the DOM based on
      // where the gesture ended. This method can also be called directly
      // by the reorder group
      event.detail.complete();
    }
    return { doReorder, pizza }
  }
});
</script>
```

### Updating Data

```html
<script>
...
import { defineComponent, ref } from 'vue';

export default defineComponent({
  ...
  setup() {
    const items = ref([1, 2, 3, 4, 5]);

    const doReorder = (event: CustomEvent) => {
      // Before complete is called with the items they will remain in the
      // order before the drag
      console.log('Before complete', items.value);

      // Finish the reorder and position the item in the DOM based on
      // where the gesture ended. Update the items variable to the
      // new order of items
      items.value = event.detail.complete(items.value);

      // After complete is called the items will be in the new order
      console.log('After complete', items.value);
    }
    return { doReorder, items, ... }
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