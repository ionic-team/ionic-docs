```html
<template>
  <ion-item>
    <ion-thumbnail slot="start">
      <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
    </ion-thumbnail>
    <ion-label>Item Thumbnail</ion-label>
  </ion-item>
</template>

<script lang="ts">
  import { IonItem, IonLabel, IonThumbnail } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonItem, IonLabel, IonThumbnail },
  });
</script>
```
