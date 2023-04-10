---
sidebar_label: 'ion-thumbnail'
demoUrl: '/docs/demos/api/thumbnail/index.html'
demoSourceUrl: 'https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/thumbnail/index.html'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# ion-thumbnail

Thumbnails are square components that usually wrap an image or icon. They can be used to make it easier to display a group of larger images or provide a preview of the full-size image.

Thumbnails can be used by themselves or inside of any element. If placed inside of an `ion-item`, the thumbnail will resize to fit the parent component. To position a thumbnail on the left or right side of an item, set the slot to `start` or `end`, respectively.

## Usage

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'stencil', label: 'Stencil' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```html
<ion-thumbnail>
  <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
</ion-thumbnail>

<ion-item>
  <ion-thumbnail slot="start">
    <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
  </ion-thumbnail>
  <ion-label>Item Thumbnail</ion-label>
</ion-item>
```

</TabItem>

<TabItem value="javascript">

```html
<ion-thumbnail>
  <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
</ion-thumbnail>

<ion-item>
  <ion-thumbnail slot="start">
    <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
  </ion-thumbnail>
  <ion-label>Item Thumbnail</ion-label>
</ion-item>
```

</TabItem>

<TabItem value="react">

```tsx
import React from 'react';
import { IonThumbnail, IonItem, IonLabel, IonContent } from '@ionic/react';

export const ThumbnailExample: React.FC = () => (
  <IonContent>
    <IonThumbnail>
      <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
    </IonThumbnail>

    <IonItem>
      <IonThumbnail slot="start">
        <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
      </IonThumbnail>
      <IonLabel>Item Thumbnail</IonLabel>
    </IonItem>
  </IonContent>
);
```

</TabItem>

<TabItem value="stencil">

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'thumbnail-example',
  styleUrl: 'thumbnail-example.css',
})
export class ThumbnailExample {
  render() {
    return [
      <ion-thumbnail>
        <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
      </ion-thumbnail>,

      <ion-item>
        <ion-thumbnail slot="start">
          <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
        </ion-thumbnail>
        <ion-label>Item Thumbnail</ion-label>
      </ion-item>,
    ];
  }
}
```

</TabItem>

<TabItem value="vue">

```html
<template>
  <ion-thumbnail>
    <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
  </ion-thumbnail>

  <ion-item>
    <ion-thumbnail slot="start">
      <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
    </ion-thumbnail>
    <ion-label>Item Thumbnail</ion-label>
  </ion-item>
</template>

<script>
  import { IonItem, IonLabel, IonThumbnail } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonItem, IonLabel, IonThumbnail },
  });
</script>
```

</TabItem>

</Tabs>

## CSS Custom Properties

| Name              | Description                    |
| ----------------- | ------------------------------ |
| `--border-radius` | Border radius of the thumbnail |
| `--size`          | Size of the thumbnail          |
