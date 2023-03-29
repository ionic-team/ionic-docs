---
title: "ion-avatar"
hide_table_of_contents: true
demoUrl: "/docs/demos/api/avatar/index.html"
demoSourceUrl: "https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/avatar/index.html"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import TOCInline from '@theme/TOCInline';

import Props from '@ionic-internal/component-api/v6/avatar/props.md';
import Events from '@ionic-internal/component-api/v6/avatar/events.md';
import Methods from '@ionic-internal/component-api/v6/avatar/methods.md';
import Parts from '@ionic-internal/component-api/v6/avatar/parts.md';
import CustomProps from '@ionic-internal/component-api/v6/avatar/custom-props.md';
import Slots from '@ionic-internal/component-api/v6/avatar/slots.md';

<head>
  <title>ion-avatar: Circular Application Avatar Icon Component</title>
  <meta name="description" content="Ion-avatarsは画像やアイコンを包む円形のアプリケーション部品です。人物や物体を表現することができ、単体でも、要素の中に入れてもかまいません。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

<h2 className="table-of-contents__title">コンテンツ</h2>

<TOCInline
  toc={toc}
  maxHeadingLevel={2}
/>



Avatarは通常、写真やアイコンをラップする円形のコンポーネントです。これらは、人またはオブジェクトを表示するために使用できます。

Avatarは、単独で使用することも、任意の要素の内部で使用することもできます。`ion-chip` または `ion-item` の内部に配置すると、Avatarは親コンポーネントに合わせてサイズ変更します。Avatarをitemの左側または右側に配置するには、`slot` を `start` か `end` に設定します。




## 使い方

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'stencil', label: 'Stencil' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```html
<ion-avatar>
  <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y">
</ion-avatar>

<ion-chip>
  <ion-avatar>
    <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y">
  </ion-avatar>
  <ion-label>Chip Avatar</ion-label>
</ion-chip>

<ion-item>
  <ion-avatar slot="start">
    <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y">
  </ion-avatar>
  <ion-label>Item Avatar</ion-label>
</ion-item>
```

</TabItem>


<TabItem value="javascript">

```html
<ion-avatar>
  <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y">
</ion-avatar>

<ion-chip>
  <ion-avatar>
    <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y">
  </ion-avatar>
  <ion-label>Chip Avatar</ion-label>
</ion-chip>

<ion-item>
  <ion-avatar slot="start">
    <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y">
  </ion-avatar>
  <ion-label>Item Avatar</ion-label>
</ion-item>
```

</TabItem>


<TabItem value="react">

```tsx
import React from 'react';
import { IonAvatar, IonChip, IonItem, IonLabel, IonContent } from '@ionic/react';

export const AvatarExample: React.FC = () => (
  <IonContent>
    <IonAvatar>
      <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
    </IonAvatar>

    <IonChip>
      <IonAvatar>
        <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
      </IonAvatar>
      <IonLabel>Chip Avatar</IonLabel>
    </IonChip>

    <IonItem>
      <IonAvatar slot="start">
        <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
      </IonAvatar>
      <IonLabel>Item Avatar</IonLabel>
    </IonItem>
  </IonContent>
);
```

</TabItem>


<TabItem value="stencil">

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'avatar-example',
  styleUrl: 'avatar-example.css'
})
export class AvatarExample {
  render() {
    return [
      <ion-avatar>
        <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"/>
      </ion-avatar>,

      <ion-chip>
        <ion-avatar>
          <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"/>
        </ion-avatar>
        <ion-label>Chip Avatar</ion-label>
      </ion-chip>,

      <ion-item>
        <ion-avatar slot="start">
          <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"/>
        </ion-avatar>
        <ion-label>Item Avatar</ion-label>
      </ion-item>
    ];
  }
}
```

</TabItem>


<TabItem value="vue">

```html
<template>
  <ion-avatar>
    <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y">
  </ion-avatar>

  <ion-chip>
    <ion-avatar>
      <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y">
    </ion-avatar>
    <ion-label>Chip Avatar</ion-label>
  </ion-chip>

  <ion-item>
    <ion-avatar slot="start">
      <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y">
    </ion-avatar>
    <ion-label>Item Avatar</ion-label>
  </ion-item>
</template>

<script>
import { IonAvatar, IonChip, IonItem, IonLabel } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonAvatar, IonChip, IonItem, IonLabel }
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