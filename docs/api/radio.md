---
title: "ion-radio"
hide_table_of_contents: true
demoUrl: "/docs/demos/api/radio/index.html"
demoSourceUrl: "https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/radio/index.html"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@ionic-internal/component-api/v6/radio/props.md';
import Events from '@ionic-internal/component-api/v6/radio/events.md';
import Methods from '@ionic-internal/component-api/v6/radio/methods.md';
import Parts from '@ionic-internal/component-api/v6/radio/parts.md';
import CustomProps from '@ionic-internal/component-api/v6/radio/custom-props.md';
import Slots from '@ionic-internal/component-api/v6/radio/slots.md';

<head>
  <title>ion-radio Component: Radio Property for iOS and Android</title>
  <meta name="description" content="Radioコンポーネントは、iOSおよびAndroidデバイスのion-radio-groupsの内部で使用する必要があります。Radioコンポーネントの使用方法とインストール方法については、こちらをご覧ください。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';
import TOCInline from '@theme/TOCInline';

<EncapsulationPill type="shadow" />

<h2 className="table-of-contents__title">コンテンツ</h2>

<TOCInline
  toc={toc}
  maxHeadingLevel={2}
/>



Radioは [`ion-radio-group`] (radio-group.md) 内で使用します。Radioを押すと、そのRadioがチェックされます。また、親である `ion-radio-group` の value プロパティをRadioの値に設定することで、プログラムによってチェックすることもできます。

RadioがRadioグループの中にある場合、グループ内の1つのRadioだけが常にチェックされる。Radioを押すと、そのRadioがチェックされ、前に選択されていたRadioがあれば、そのチェックが解除されます。Radioが他のRadioとグループ内にない場合、両方のRadioが同時にチェックされる機能を持ちます。






## 使い方

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'stencil', label: 'Stencil' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```html
<ion-list>
  <ion-radio-group value="biff">
    <ion-list-header>
      <ion-label>Name</ion-label>
    </ion-list-header>

    <ion-item>
      <ion-label>Biff</ion-label>
      <ion-radio slot="start" value="biff"></ion-radio>
    </ion-item>

    <ion-item>
      <ion-label>Griff</ion-label>
      <ion-radio slot="start" value="griff"></ion-radio>
    </ion-item>

    <ion-item>
      <ion-label>Buford</ion-label>
      <ion-radio slot="start" value="buford"></ion-radio>
    </ion-item>
  </ion-radio-group>
</ion-list>
```


</TabItem>


<TabItem value="javascript">

```html
<ion-list>
  <ion-radio-group value="biff">
    <ion-list-header>
      <ion-label>Name</ion-label>
    </ion-list-header>

    <ion-item>
      <ion-label>Biff</ion-label>
      <ion-radio slot="start" value="biff"></ion-radio>
    </ion-item>

    <ion-item>
      <ion-label>Griff</ion-label>
      <ion-radio slot="start" value="griff"></ion-radio>
    </ion-item>

    <ion-item>
      <ion-label>Buford</ion-label>
      <ion-radio slot="start" value="buford"></ion-radio>
    </ion-item>
  </ion-radio-group>
</ion-list>
```


</TabItem>


<TabItem value="react">

```tsx
import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonRadioGroup, IonListHeader, IonLabel, IonItem, IonRadio, IonItemDivider } from '@ionic/react';

export const RadioExamples: React.FC = () => {
  const [selected, setSelected] = useState<string>('biff');
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Radio Examples</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonRadioGroup value={selected} onIonChange={e => setSelected(e.detail.value)}>
            <IonListHeader>
              <IonLabel>Name</IonLabel>
            </IonListHeader>

            <IonItem>
              <IonLabel>Biff</IonLabel>
              <IonRadio slot="start" value="biff" />
            </IonItem>

            <IonItem>
              <IonLabel>Griff</IonLabel>
              <IonRadio slot="start" value="griff" />
            </IonItem>

            <IonItem>
              <IonLabel>Buford</IonLabel>
              <IonRadio slot="start" value="buford" />
            </IonItem>
          </IonRadioGroup>
          <IonItemDivider>Your Selection</IonItemDivider>
          <IonItem>{selected ?? '(none selected'}</IonItem>
        </IonList>
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
  tag: 'radio-example',
  styleUrl: 'radio-example.css'
})
export class RadioExample {
  render() {
    return [
      <ion-list>
        <ion-radio-group value="biff">
          <ion-list-header>
            <ion-label>Name</ion-label>
          </ion-list-header>

          <ion-item>
            <ion-label>Biff</ion-label>
            <ion-radio slot="start" value="biff"></ion-radio>
          </ion-item>

          <ion-item>
            <ion-label>Griff</ion-label>
            <ion-radio slot="start" value="griff"></ion-radio>
          </ion-item>

          <ion-item>
            <ion-label>Buford</ion-label>
            <ion-radio slot="start" value="buford"></ion-radio>
          </ion-item>
        </ion-radio-group>
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
    <ion-radio-group value="biff">
      <ion-list-header>
        <ion-label>Name</ion-label>
      </ion-list-header>

      <ion-item>
        <ion-label>Biff</ion-label>
        <ion-radio slot="start" value="biff"></ion-radio>
      </ion-item>

      <ion-item>
        <ion-label>Griff</ion-label>
        <ion-radio slot="start" value="griff"></ion-radio>
      </ion-item>

      <ion-item>
        <ion-label>Buford</ion-label>
        <ion-radio slot="start" value="buford"></ion-radio>
      </ion-item>
    </ion-radio-group>
  </ion-list>
</template>

<script>
import { 
  IonItem, 
  IonLabel, 
  IonList, 
  IonListHeader,
  IonRadio, 
  IonRadioGroup
} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { 
    IonItem, 
    IonLabel, 
    IonList, 
    IonListHeader,
    IonRadio, 
    IonRadioGroup
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