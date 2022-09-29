```html
<template>
  <ion-item>
    <ion-avatar slot="start">
      <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
    </ion-avatar>
    <ion-label>
      Avatar Item
    </ion-label>
  </ion-item>

  <ion-item>
    <ion-thumbnail slot="start">
      <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
    </ion-thumbnail>
    <ion-label>
      Thumbnail Item
    </ion-label>
  </ion-item>
</template>

<script lang="ts">
  import { IonAvatar, IonItem, IonLabel, IonThumbnail } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonAvatar, IonItem, IonLabel, IonThumbnail },
  });
</script>
```
