---
title: 'ion-avatar: Circular Application Avatar Icon Component'
description: 'Ion-avatars are circular application components that wrap an image or icon. They can represent a person or an object, by themselves or inside of any element.'
sidebar_label: 'ion-avatar'
demoUrl: '/docs/demos/api/avatar/index.html'
demoSourceUrl: 'https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/avatar/index.html'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# ion-avatar

Avatars are circular components that usually wrap an image or icon. They can be used to represent a person or an object.

Avatars can be used by themselves or inside of any element. If placed inside of an `ion-chip` or `ion-item`, the avatar will resize to fit the parent component. To position an avatar on the left or right side of an item, set the slot to `start` or `end`, respectively.

## Usage

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'stencil', label: 'Stencil' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```html
<ion-avatar>
  <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
</ion-avatar>

<ion-chip>
  <ion-avatar>
    <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
  </ion-avatar>
  <ion-label>Chip Avatar</ion-label>
</ion-chip>

<ion-item>
  <ion-avatar slot="start">
    <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
  </ion-avatar>
  <ion-label>Item Avatar</ion-label>
</ion-item>
```

</TabItem>

<TabItem value="javascript">

```html
<ion-avatar>
  <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
</ion-avatar>

<ion-chip>
  <ion-avatar>
    <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
  </ion-avatar>
  <ion-label>Chip Avatar</ion-label>
</ion-chip>

<ion-item>
  <ion-avatar slot="start">
    <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
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
  styleUrl: 'avatar-example.css',
})
export class AvatarExample {
  render() {
    return [
      <ion-avatar>
        <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
      </ion-avatar>,

      <ion-chip>
        <ion-avatar>
          <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
        </ion-avatar>
        <ion-label>Chip Avatar</ion-label>
      </ion-chip>,

      <ion-item>
        <ion-avatar slot="start">
          <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
        </ion-avatar>
        <ion-label>Item Avatar</ion-label>
      </ion-item>,
    ];
  }
}
```

</TabItem>

<TabItem value="vue">

```html
<template>
  <ion-avatar>
    <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
  </ion-avatar>

  <ion-chip>
    <ion-avatar>
      <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
    </ion-avatar>
    <ion-label>Chip Avatar</ion-label>
  </ion-chip>

  <ion-item>
    <ion-avatar slot="start">
      <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
    </ion-avatar>
    <ion-label>Item Avatar</ion-label>
  </ion-item>
</template>

<script>
  import { IonAvatar, IonChip, IonItem, IonLabel } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonAvatar, IonChip, IonItem, IonLabel },
  });
</script>
```

</TabItem>

</Tabs>

## CSS Custom Properties

| Name              | Description                                 |
| ----------------- | ------------------------------------------- |
| `--border-radius` | Border radius of the avatar and inner image |
