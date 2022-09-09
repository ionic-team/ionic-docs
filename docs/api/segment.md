---
title: "ion-segment"
hide_table_of_contents: true
demoUrl: "/docs/demos/api/segment/index.html"
demoSourceUrl: "https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/segment/index.html"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@site/static/auto-generated/segment/props.md';
import Events from '@site/static/auto-generated/segment/events.md';
import Methods from '@site/static/auto-generated/segment/methods.md';
import Parts from '@site/static/auto-generated/segment/parts.md';
import CustomProps from '@site/static/auto-generated/segment/custom-props.md';
import Slots from '@site/static/auto-generated/segment/slots.md';

<head>
  <title>ion-segment: API Documentation for Segmented Controls</title>
  <meta name="description" content="ion-segmentは、関連するボタンのグループを表示します（セグメントコントロールとも呼ばれます）。使用方法の詳細については、Segment API ドキュメンテーションを参照してください。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';
import TOCInline from '@theme/TOCInline';

<EncapsulationPill type="shadow" />

<h2 className="table-of-contents__title">コンテンツ</h2>

<TOCInline
  toc={toc}
  maxHeadingLevel={2}
/>



Segmentsは、関連するボタンのグループを水平方向の行に表示することができ、segmented controlsとも呼ばれます。これらは、toolbarまたはメインコンテンツの内部に表示できます。

これらの機能は、1つを選択すると他のすべてが選択解除されるTabsと似ています。Segmentsは、コンテンツ内の異なるビューを切り替える場合に便利です。クリックしてページ間の遷移をコントロールする場合は、Segmentsの代わりにTabsを使用してください。

## スクロール可能なセグメント

デフォルトでは、セグメントはスクロールできません。各セグメントボタンの幅は固定で、セグメントボタンの数を画面幅で割って幅を決定します。これにより、各セグメントボタンがスクロールすることなく画面に表示されることが保証されます。そのため、ラベルが長いセグメントボタンは、一部が切れてしまうことがあります。これを避けるために、短いラベルを使用するか、`scrollable` プロパティを `true` に設定してスクロール可能なセグメントに変更することをお勧めします。これはセグメントを水平方向にスクロールさせますが、各セグメントボタンの幅を変更することができます。

## アクセシビリティ

### キーボードナビゲーション

このコンポーネントは、`ion-segment-button`要素間のナビゲーションと選択について、フルキーボードサポートを備えています。デフォルトでは、キーボードナビゲーションは `ion-segment-button` 要素にのみフォーカスしますが、`selectOnFocus` プロパティを使用すると、フォーカスされた要素も確実に選択されるようになります。次の表は、それぞれのキーが何をするのかの詳細です。

| Key                | Function                                                       |
| ------------------ | -------------------------------------------------------------- |
| `ArrowRight`       | Focuses the next focusable element.                            |
| `ArrowLeft`        | Focuses the previous focusable element.                        |
| `Home`             | Focuses the first focusable element.                           |
| `End`              | Focuses the last focusable element.                            |
| `Space` or `Enter` | Selects the element that is currently focused.                 |

## Interfaces

### SegmentChangeEventDetail

```typescript
interface SegmentChangeEventDetail {
  value?: string;
}
```

### SegmentCustomEvent

必須ではありませんが、このコンポーネントから発行される Ionic イベントでより強く型付けを行うために、`CustomEvent` インターフェースの代わりにこのインターフェースを使用することが可能です。

```typescript
interface SegmentCustomEvent extends CustomEvent {
  target: HTMLIonSegmentElement;
  detail: SegmentChangeEventDetail;
}
```



## 使い方

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'stencil', label: 'Stencil' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```html
<!-- Default Segment -->
<ion-segment (ionChange)="segmentChanged($event)">
  <ion-segment-button value="friends">
    <ion-label>Friends</ion-label>
  </ion-segment-button>
  <ion-segment-button value="enemies">
    <ion-label>Enemies</ion-label>
  </ion-segment-button>
</ion-segment>

<!-- Disabled Segment -->
<ion-segment (ionChange)="segmentChanged($event)" disabled value="sunny">
  <ion-segment-button value="sunny">
    <ion-label>Sunny</ion-label>
  </ion-segment-button>
  <ion-segment-button value="rainy">
    <ion-label>Rainy</ion-label>
  </ion-segment-button>
</ion-segment>

<!-- Segment with anchors -->
<ion-segment (ionChange)="segmentChanged($event)">
  <ion-segment-button value="dogs">
    <ion-label>Dogs</ion-label>
  </ion-segment-button>
  <ion-segment-button value="cats">
    <ion-label>Cats</ion-label>
  </ion-segment-button>
</ion-segment>

<!-- Scrollable Segment -->
<ion-segment scrollable value="heart">
  <ion-segment-button value="home">
    <ion-icon name="home"></ion-icon>
  </ion-segment-button>
  <ion-segment-button value="heart">
    <ion-icon name="heart"></ion-icon>
  </ion-segment-button>
  <ion-segment-button value="pin">
    <ion-icon name="pin"></ion-icon>
  </ion-segment-button>
  <ion-segment-button value="star">
    <ion-icon name="star"></ion-icon>
  </ion-segment-button>
  <ion-segment-button value="call">
    <ion-icon name="call"></ion-icon>
  </ion-segment-button>
  <ion-segment-button value="globe">
    <ion-icon name="globe"></ion-icon>
  </ion-segment-button>
  <ion-segment-button value="basket">
    <ion-icon name="basket"></ion-icon>
  </ion-segment-button>
</ion-segment>

<!-- Segment with secondary color -->
<ion-segment (ionChange)="segmentChanged($event)" color="secondary">
  <ion-segment-button value="standard">
    <ion-label>Standard</ion-label>
  </ion-segment-button>
  <ion-segment-button value="hybrid">
    <ion-label>Hybrid</ion-label>
  </ion-segment-button>
  <ion-segment-button value="sat">
    <ion-label>Satellite</ion-label>
  </ion-segment-button>
</ion-segment>

<!-- Segment in a toolbar -->
<ion-toolbar>
  <ion-segment (ionChange)="segmentChanged($event)">
    <ion-segment-button value="camera">
      <ion-icon name="camera"></ion-icon>
    </ion-segment-button>
    <ion-segment-button value="bookmark">
      <ion-icon name="bookmark"></ion-icon>
    </ion-segment-button>
  </ion-segment>
</ion-toolbar>

<!-- Segment with default selection -->
<ion-segment (ionChange)="segmentChanged($event)" value="javascript">
  <ion-segment-button value="python">
    <ion-label>Python</ion-label>
  </ion-segment-button>
  <ion-segment-button value="javascript">
    <ion-label>Javascript</ion-label>
  </ion-segment-button>
</ion-segment>
```

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'segment-example',
  templateUrl: 'segment-example.html',
  styleUrls: ['./segment-example.css'],
})
export class SegmentExample {
  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }
}
```


</TabItem>


<TabItem value="javascript">

```html
<!-- Default Segment -->
<ion-segment>
  <ion-segment-button value="friends">
    <ion-label>Friends</ion-label>
  </ion-segment-button>
  <ion-segment-button value="enemies">
    <ion-label>Enemies</ion-label>
  </ion-segment-button>
</ion-segment>

<!-- Disabled Segment -->
<ion-segment disabled value="sunny">
  <ion-segment-button value="sunny">
    <ion-label>Sunny</ion-label>
  </ion-segment-button>
  <ion-segment-button value="rainy">
    <ion-label>Rainy</ion-label>
  </ion-segment-button>
</ion-segment>

<!-- Segment with anchors -->
<ion-segment>
  <ion-segment-button value="dogs">
    <ion-label>Dogs</ion-label>
  </ion-segment-button>
  <ion-segment-button value="cats">
    <ion-label>Cats</ion-label>
  </ion-segment-button>
</ion-segment>

<!-- Scrollable Segment -->
<ion-segment scrollable value="heart">
  <ion-segment-button value="home">
    <ion-icon name="home"></ion-icon>
  </ion-segment-button>
  <ion-segment-button value="heart">
    <ion-icon name="heart"></ion-icon>
  </ion-segment-button>
  <ion-segment-button value="pin">
    <ion-icon name="pin"></ion-icon>
  </ion-segment-button>
  <ion-segment-button value="star">
    <ion-icon name="star"></ion-icon>
  </ion-segment-button>
  <ion-segment-button value="call">
    <ion-icon name="call"></ion-icon>
  </ion-segment-button>
  <ion-segment-button value="globe">
    <ion-icon name="globe"></ion-icon>
  </ion-segment-button>
  <ion-segment-button value="basket">
    <ion-icon name="basket"></ion-icon>
  </ion-segment-button>
</ion-segment>

<!-- Segment with secondary color -->
<ion-segment color="secondary">
  <ion-segment-button value="standard">
    <ion-label>Standard</ion-label>
  </ion-segment-button>
  <ion-segment-button value="hybrid">
    <ion-label>Hybrid</ion-label>
  </ion-segment-button>
  <ion-segment-button value="sat">
    <ion-label>Satellite</ion-label>
  </ion-segment-button>
</ion-segment>

<!-- Segment in a toolbar -->
<ion-toolbar>
  <ion-segment>
    <ion-segment-button value="camera">
      <ion-icon name="camera"></ion-icon>
    </ion-segment-button>
    <ion-segment-button value="bookmark">
      <ion-icon name="bookmark"></ion-icon>
    </ion-segment-button>
  </ion-segment>
</ion-toolbar>

<!-- Segment with default selection -->
<ion-segment value="javascript">
  <ion-segment-button value="python">
    <ion-label>Python</ion-label>
  </ion-segment-button>
  <ion-segment-button value="javascript">
    <ion-label>Javascript</ion-label>
  </ion-segment-button>
</ion-segment>
```

```javascript
// Listen for ionChange on all segments
const segments = document.querySelectorAll('ion-segment')
for (let i = 0; i < segments.length; i++) {
  segments[i].addEventListener('ionChange', (ev) => {
    console.log('Segment changed', ev);
  })
}
```

</TabItem>


<TabItem value="react">

```tsx
import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSegment, IonSegmentButton, IonLabel, IonIcon } from '@ionic/react';
import { call, home, heart, pin, star, globe, basket, camera, bookmark } from 'ionicons/icons';

export const SegmentExamples: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>SegmentExamples</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {/*-- Default Segment --*/}
        <IonSegment onIonChange={e => console.log('Segment selected', e.detail.value)}>
          <IonSegmentButton value="friends">
            <IonLabel>Friends</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="enemies">
            <IonLabel>Enemies</IonLabel>
          </IonSegmentButton>
        </IonSegment>

        {/*-- Disabled Segment --*/}
        <IonSegment onIonChange={e => console.log('Segment selected', e.detail.value)} disabled value="sunny">
          <IonSegmentButton value="sunny">
            <IonLabel>Sunny</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="rainy">
            <IonLabel>Rainy</IonLabel>
          </IonSegmentButton>
        </IonSegment>

        {/*-- Segment with anchors --*/}
        <IonSegment onIonChange={e => console.log('Segment selected', e.detail.value)}>
          <IonSegmentButton value="dogs">
            <IonLabel>Dogs</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="cats">
            <IonLabel>Cats</IonLabel>
          </IonSegmentButton>
        </IonSegment>

        {/*-- Scrollable Segment --*/}
        <IonSegment scrollable value="heart">
          <IonSegmentButton value="home">
            <IonIcon icon={home} />
          </IonSegmentButton>
          <IonSegmentButton value="heart">
            <IonIcon icon={heart} />
          </IonSegmentButton>
          <IonSegmentButton value="pin">
            <IonIcon icon={pin} />
          </IonSegmentButton>
          <IonSegmentButton value="star">
            <IonIcon icon={star} />
          </IonSegmentButton>
          <IonSegmentButton value="call">
            <IonIcon icon={call} />
          </IonSegmentButton>
          <IonSegmentButton value="globe">
            <IonIcon icon={globe} />
          </IonSegmentButton>
          <IonSegmentButton value="basket">
            <IonIcon icon={basket} />
          </IonSegmentButton>
        </IonSegment>

        {/*-- Segment with secondary color --*/}
        <IonSegment onIonChange={e => console.log('Segment selected', e.detail.value)} color="secondary">
          <IonSegmentButton value="standard">
            <IonLabel>Standard</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="hybrid">
            <IonLabel>Hybrid</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="sat">
            <IonLabel>Satellite</IonLabel>
          </IonSegmentButton>
        </IonSegment>

        {/*-- Segment in a toolbar --*/}
        <IonToolbar>
          <IonSegment onIonChange={e => console.log('Segment selected', e.detail.value)}>
            <IonSegmentButton value="camera">
              <IonIcon icon={camera} />
            </IonSegmentButton>
            <IonSegmentButton value="bookmark">
              <IonIcon icon={bookmark} />
            </IonSegmentButton>
          </IonSegment>
        </IonToolbar>

        {/*-- Segment with default selection --*/}
        <IonSegment onIonChange={e => console.log('Segment selected', e.detail.value)} value="javascript">
          <IonSegmentButton value="python">
            <IonLabel>Python</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="javascript">
            <IonLabel>Javascript</IonLabel>
          </IonSegmentButton>
        </IonSegment>
      </IonContent>
    </IonPage>
  );
};

```

</TabItem>


<TabItem value="stencil">

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'segment-example',
  styleUrl: 'segment-example.css'
})
export class SegmentExample {
  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }

  render() {
     return [
      // Default Segment
      <ion-segment onIonChange={(ev) => this.segmentChanged(ev)}>
        <ion-segment-button value="friends">
          <ion-label>Friends</ion-label>
        </ion-segment-button>
        <ion-segment-button value="enemies">
          <ion-label>Enemies</ion-label>
        </ion-segment-button>
      </ion-segment>,

      // Disabled Segment
      <ion-segment onIonChange={(ev) => this.segmentChanged(ev)} disabled={true} value="sunny">
        <ion-segment-button value="sunny">
          <ion-label>Sunny</ion-label>
        </ion-segment-button>
        <ion-segment-button value="rainy">
          <ion-label>Rainy</ion-label>
        </ion-segment-button>
      </ion-segment>,

      // Segment with anchors
      <ion-segment onIonChange={(ev) => this.segmentChanged(ev)}>
        <ion-segment-button value="dogs">
          <ion-label>Dogs</ion-label>
        </ion-segment-button>
        <ion-segment-button value="cats">
          <ion-label>Cats</ion-label>
        </ion-segment-button>
      </ion-segment>,

      // Scrollable Segment
      <ion-segment scrollable value="heart">
        <ion-segment-button value="home">
          <ion-icon name="home"></ion-icon>
        </ion-segment-button>
        <ion-segment-button value="heart">
          <ion-icon name="heart"></ion-icon>
        </ion-segment-button>
        <ion-segment-button value="pin">
          <ion-icon name="pin"></ion-icon>
        </ion-segment-button>
        <ion-segment-button value="star">
          <ion-icon name="star"></ion-icon>
        </ion-segment-button>
        <ion-segment-button value="call">
          <ion-icon name="call"></ion-icon>
        </ion-segment-button>
        <ion-segment-button value="globe">
          <ion-icon name="globe"></ion-icon>
        </ion-segment-button>
        <ion-segment-button value="basket">
          <ion-icon name="basket"></ion-icon>
        </ion-segment-button>
      </ion-segment>,

      // Segment with secondary color
      <ion-segment onIonChange={(ev) => this.segmentChanged(ev)} color="secondary">
        <ion-segment-button value="standard">
          <ion-label>Standard</ion-label>
        </ion-segment-button>
        <ion-segment-button value="hybrid">
          <ion-label>Hybrid</ion-label>
        </ion-segment-button>
        <ion-segment-button value="sat">
          <ion-label>Satellite</ion-label>
        </ion-segment-button>
      </ion-segment>,

      // Segment in a toolbar
      <ion-toolbar>
        <ion-segment onIonChange={(ev) => this.segmentChanged(ev)}>
          <ion-segment-button value="camera">
            <ion-icon name="camera"></ion-icon>
          </ion-segment-button>
          <ion-segment-button value="bookmark">
            <ion-icon name="bookmark"></ion-icon>
          </ion-segment-button>
        </ion-segment>
      </ion-toolbar>,

      // Segment with default selection
      <ion-segment onIonChange={(ev) => this.segmentChanged(ev)} value="javascript">
        <ion-segment-button value="python">
          <ion-label>Python</ion-label>
        </ion-segment-button>
        <ion-segment-button value="javascript">
          <ion-label>Javascript</ion-label>
        </ion-segment-button>
      </ion-segment>
    ];
  }
}
```

</TabItem>


<TabItem value="vue">

```html
<template>
  <!-- Default Segment -->
  <ion-segment @ionChange="segmentChanged($event)">
    <ion-segment-button value="friends">
      <ion-label>Friends</ion-label>
    </ion-segment-button>
    <ion-segment-button value="enemies">
      <ion-label>Enemies</ion-label>
    </ion-segment-button>
  </ion-segment>

  <!-- Disabled Segment -->
  <ion-segment @ionChange="segmentChanged($event)" disabled value="sunny">
    <ion-segment-button value="sunny">
      <ion-label>Sunny</ion-label>
    </ion-segment-button>
    <ion-segment-button value="rainy">
      <ion-label>Rainy</ion-label>
    </ion-segment-button>
  </ion-segment>

  <!-- Segment with anchors -->
  <ion-segment @ionChange="segmentChanged($event)">
    <ion-segment-button value="dogs">
      <ion-label>Dogs</ion-label>
    </ion-segment-button>
    <ion-segment-button value="cats">
      <ion-label>Cats</ion-label>
    </ion-segment-button>
  </ion-segment>

  <!-- Scrollable Segment -->
  <ion-segment scrollable value="heart">
    <ion-segment-button value="home">
      <ion-icon name="home"></ion-icon>
    </ion-segment-button>
    <ion-segment-button value="heart">
      <ion-icon name="heart"></ion-icon>
    </ion-segment-button>
    <ion-segment-button value="pin">
      <ion-icon name="pin"></ion-icon>
    </ion-segment-button>
    <ion-segment-button value="star">
      <ion-icon name="star"></ion-icon>
    </ion-segment-button>
    <ion-segment-button value="call">
      <ion-icon name="call"></ion-icon>
    </ion-segment-button>
    <ion-segment-button value="globe">
      <ion-icon name="globe"></ion-icon>
    </ion-segment-button>
    <ion-segment-button value="basket">
      <ion-icon name="basket"></ion-icon>
    </ion-segment-button>
  </ion-segment>

  <!-- Segment with secondary color -->
  <ion-segment @ionChange="segmentChanged($event)" color="secondary">
    <ion-segment-button value="standard">
      <ion-label>Standard</ion-label>
    </ion-segment-button>
    <ion-segment-button value="hybrid">
      <ion-label>Hybrid</ion-label>
    </ion-segment-button>
    <ion-segment-button value="sat">
      <ion-label>Satellite</ion-label>
    </ion-segment-button>
  </ion-segment>

  <!-- Segment in a toolbar -->
  <ion-toolbar>
    <ion-segment @ionChange="segmentChanged($event)">
      <ion-segment-button value="camera">
        <ion-icon name="camera"></ion-icon>
      </ion-segment-button>
      <ion-segment-button value="bookmark">
        <ion-icon name="bookmark"></ion-icon>
      </ion-segment-button>
    </ion-segment>
  </ion-toolbar>

  <!-- Segment with default selection -->
  <ion-segment @ionChange="segmentChanged($event)" value="javascript">
    <ion-segment-button value="python">
      <ion-label>Python</ion-label>
    </ion-segment-button>
    <ion-segment-button value="javascript">
      <ion-label>Javascript</ion-label>
    </ion-segment-button>
  </ion-segment>
</template>

<script lang="ts">
import { IonSegment, IonSegmentButton, IonToolbar } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonSegment, IonSegmentButton, IonToolbar },
  methods: {
    segmentChanged(ev: CustomEvent) {
      console.log('Segment changed', ev);
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