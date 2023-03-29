---
title: "ion-refresher"
hide_table_of_contents: true
demoUrl: "/docs/demos/api/refresher/index.html"
demoSourceUrl: "https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/refresher/index.html"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@ionic-internal/component-api/v6/refresher/props.md';
import Events from '@ionic-internal/component-api/v6/refresher/events.md';
import Methods from '@ionic-internal/component-api/v6/refresher/methods.md';
import Parts from '@ionic-internal/component-api/v6/refresher/parts.md';
import CustomProps from '@ionic-internal/component-api/v6/refresher/custom-props.md';
import Slots from '@ionic-internal/component-api/v6/refresher/slots.md';

<head>
  <title>ion-refresher: Pull-to-Refresh Page Content on Ionic Apps</title>
  <meta name="description" content="ion-refresherは、コンテンツコンポーネントにpull-to-refresh機能を提供します。これにより、ユーザーはタッチ操作でページをプルダウンし、より多くのデータを取得することができます。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';
import TOCInline from '@theme/TOCInline';



<h2 className="table-of-contents__title">コンテンツ</h2>

<TOCInline
  toc={toc}
  maxHeadingLevel={2}
/>



RefresherはContentコンポーネント引っ張って更新する機能を提供します。
ユーザーはより多くのデータを取得するために、
タッチ操作でリストを引っ張って更新できます。

データはRefresherの外部のイベントで更新すべきです。
一回の非同期処理が完了すれば、`complete()`を呼び出すことで、
Refresherも終了するべきです。

## Native Refreshers

iOS と Android の両プラットフォームは、それぞれのデバイスで公開されているプロパティを利用したリフレッシュ機能を提供しており、Pull によるリフレッシュがネイティブに近い流動的な感覚を与えます。

pullMin` や `snapbackDuration` などの特定のプロパティは、ネイティブのリフレッシャーの多くがスクロールベースであるため、互換性がありません。詳しくは [Refresher Properties](#properties) を参照してください。

### iOS での使用法

iOS ネイティブの `ion-refresher` を使用するには、 `ion-refresher-content` の `pullingIcon` プロパティを、使用可能なスピナーのいずれかに設定する必要があります。利用可能な値については、[Spinner Documentation](spinner.md#properties) を参照してください。 `pullingIcon` のデフォルトは、iOS の `lines` スピナーです。ユーザーがページをプルダウンすると、スピナーの目盛りが徐々に表示されます。

iOS ネイティブの `ion-refresher` は、正しく動作するためにラバーバンドスクロールに依存しており、その結果、iOS デバイスにのみ対応しています。ラバーバンドスクロールをサポートしないデバイスで iOS モードで動作するアプリのために、フォールバックリフレッシュを提供しています。

### Android での使用方法

MD ネイティブの `ion-refresher` を使用するには、 `ion-refresher-content` の `pullingIcon` プロパティに、使用可能なスピナーのいずれかの値を設定する必要があります。利用可能な値については、[ion-spinner Documentation](spinner.md#properties) を参照してください。 `pullingIcon` のデフォルトは、MDの `circular` スピナーです。

### 仮想スクロールの使用方法

Refresher が機能するためには、スクロールコンテナが必要です。仮想スクロールを使用する場合は、`ion-content` のスクロールを無効にし、`.ion-content-scroll-host` クラスターゲットで、どの要素コンテナがスクロールコンテナを担当するかを指定する必要があります。

```html
<ion-content scroll-y="false">
  <ion-refresher slot="fixed">
    <ion-refresher-content></ion-refresher-content>
  </ion-refresher>
  <virtual-scroll-element class="ion-content-scroll-host">
    <!-- Your virtual scroll content -->
  </virtual-scroll-element>
</ion-content>
```

## Interfaces

### RefresherEventDetail

```typescript
interface RefresherEventDetail {
  complete(): void;
}
```

### RefresherCustomEvent

必須ではありませんが、このコンポーネントから発行される Ionic イベントでより強く型付けを行うために、`CustomEvent` インターフェースの代わりにこのインターフェースを使用することが可能です。

```typescript
interface RefresherCustomEvent extends CustomEvent {
  detail: RefresherEventDetail;
  target: HTMLIonRefresherElement;
}
```



## 使い方

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'stencil', label: 'Stencil' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```html
<!-- Default Refresher -->
<ion-content>
  <ion-refresher slot="fixed" (ionRefresh)="doRefresh($event)">
    <ion-refresher-content></ion-refresher-content>
  </ion-refresher>
</ion-content>

<!-- Custom Refresher Properties -->
<ion-content>
  <ion-refresher slot="fixed" pullFactor="0.5" pullMin="100" pullMax="200">
    <ion-refresher-content></ion-refresher-content>
  </ion-refresher>
</ion-content>

<!-- Custom Refresher Content -->
<ion-content>
  <ion-refresher slot="fixed" (ionRefresh)="doRefresh($event)">
    <ion-refresher-content
      pullingIcon="chevron-down-circle-outline"
      pullingText="Pull to refresh"
      refreshingSpinner="circles"
      refreshingText="Refreshing...">
    </ion-refresher-content>
  </ion-refresher>
</ion-content>
```

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'refresher-example',
  templateUrl: 'refresher-example.html',
  styleUrls: ['./refresher-example.css'],
})
export class RefresherExample {
  constructor() {}

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }
}
```

</TabItem>


<TabItem value="javascript">

```html
<!-- Default Refresher -->
<ion-content>
  <ion-refresher slot="fixed">
    <ion-refresher-content></ion-refresher-content>
  </ion-refresher>
</ion-content>

<!-- Custom Refresher Properties -->
<ion-content>
  <ion-refresher slot="fixed" pull-factor="0.5" pull-min="100" pull-max="200">
    <ion-refresher-content></ion-refresher-content>
  </ion-refresher>
</ion-content>

<!-- Custom Refresher Content -->
<ion-content>
  <ion-refresher slot="fixed">
    <ion-refresher-content
      pulling-icon="chevron-down-circle-outline"
      pulling-text="Pull to refresh"
      refreshing-spinner="circles"
      refreshing-text="Refreshing...">
    </ion-refresher-content>
  </ion-refresher>
</ion-content>
```

</TabItem>


<TabItem value="react">

```tsx
import React from 'react';
import { IonContent, IonRefresher, IonRefresherContent } from '@ionic/react';
import { RefresherEventDetail } from '@ionic/core';
import { chevronDownCircleOutline } from 'ionicons/icons';

function doRefresh(event: CustomEvent<RefresherEventDetail>) {
  console.log('Begin async operation');

  setTimeout(() => {
    console.log('Async operation has ended');
    event.detail.complete();
  }, 2000);
}

export const RefresherExample: React.FC = () => (
  <IonContent>
    {/*-- Default Refresher --*/}
    <IonContent>
      <IonRefresher slot="fixed" onIonRefresh={doRefresh}>
        <IonRefresherContent></IonRefresherContent>
      </IonRefresher>
    </IonContent>

    {/*-- Custom Refresher Properties --*/}
    <IonContent>
      <IonRefresher slot="fixed" onIonRefresh={doRefresh} pullFactor={0.5} pullMin={100} pullMax={200}>
        <IonRefresherContent></IonRefresherContent>
      </IonRefresher>
    </IonContent>

    {/*-- Custom Refresher Content --*/}
    <IonContent>
      <IonRefresher slot="fixed" onIonRefresh={doRefresh}>
        <IonRefresherContent
          pullingIcon={chevronDownCircleOutline}
          pullingText="Pull to refresh"
          refreshingSpinner="circles"
          refreshingText="Refreshing...">
        </IonRefresherContent>
      </IonRefresher>
    </IonContent>
  </IonContent>
);
```

</TabItem>


<TabItem value="stencil">

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'refresher-example',
  styleUrl: 'refresher-example.css'
})
export class RefresherExample {
  doRefresh(ev: any) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      ev.target.complete();
    }, 2000);
  }

  render() {
    return [
      // Default Refresher
      <ion-content>
        <ion-refresher slot="fixed" onIonRefresh={(ev) => this.doRefresh(ev)}>
          <ion-refresher-content></ion-refresher-content>
        </ion-refresher>
      </ion-content>,

      // Custom Refresher Properties
      <ion-content>
        <ion-refresher slot="fixed" pullFactor={0.5} pullMin={100} pullMax={200}>
          <ion-refresher-content></ion-refresher-content>
        </ion-refresher>
      </ion-content>,

      // Custom Refresher Content
      <ion-content>
        <ion-refresher slot="fixed" onIonRefresh={(ev) => this.doRefresh(ev)}>
          <ion-refresher-content
            pullingIcon="chevron-down-circle-outline"
            pullingText="Pull to refresh"
            refreshingSpinner="circles"
            refreshingText="Refreshing...">
          </ion-refresher-content>
        </ion-refresher>
      </ion-content>
    ];
  }
}
```

</TabItem>


<TabItem value="vue">

```html
<template>
  <!-- Default Refresher -->
  <ion-content>
    <ion-refresher slot="fixed" @ionRefresh="doRefresh($event)">
      <ion-refresher-content></ion-refresher-content>
    </ion-refresher>
  </ion-content>

  <!-- Custom Refresher Properties -->
  <ion-content>
    <ion-refresher slot="fixed" pull-factor="0.5" pull-min="100" pull-max="200">
      <ion-refresher-content></ion-refresher-content>
    </ion-refresher>
  </ion-content>

  <!-- Custom Refresher Content -->
  <ion-content>
    <ion-refresher slot="fixed" @ionRefresh="doRefresh($event)">
      <ion-refresher-content
        :pulling-icon="chevronDownCircleOutline"
        pulling-text="Pull to refresh"
        refreshing-spinner="circles"
        refreshing-text="Refreshing...">
      </ion-refresher-content>
    </ion-refresher>
  </ion-content>
</template>

<script lang="ts">
import { IonContent, IonRefresher, IonRefresherContent } from '@ionic/vue';
import { chevronDownCircleOutline } from 'ionicons/icons'
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonContent, IonRefresher, IonRefresherContent },
  setup() {
    const doRefresh = (event: CustomEvent) => {
      console.log('Begin async operation');
      
      setTimeout(() => {
        console.log('Async operation has ended');
        event.target.complete();
      }, 2000);
    }
    return { chevronDownCircleOutline, doRefresh }
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