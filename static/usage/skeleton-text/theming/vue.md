```html
<template>  
  <ion-list>
    <ion-list-header>
      <ion-skeleton-text :animated="true" style="width: 80px"></ion-skeleton-text>
    </ion-list-header>
    <ion-item>
      <ion-thumbnail slot="start">
        <ion-skeleton-text :animated="true"></ion-skeleton-text>
      </ion-thumbnail>
      <ion-label>
        <h3>
          <ion-skeleton-text :animated="true" style="width: 80%;"></ion-skeleton-text>
        </h3>
        <p>
          <ion-skeleton-text :animated="true" style="width: 60%;"></ion-skeleton-text>
        </p>
        <p>
          <ion-skeleton-text :animated="true" style="width: 30%;"></ion-skeleton-text>
        </p>
      </ion-label>
    </ion-item>
  </ion-list>
</template>

<script lang="ts">
  import {
    IonItem,
    IonLabel,
    IonList,
    IonListHeader,
    IonSkeletonText,
    IonThumbnail,
  } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: {
      IonItem,
      IonLabel,
      IonList,
      IonListHeader,
      IonSkeletonText,
      IonThumbnail,
    }
  });
</script>

<style scoped>
  ion-skeleton-text {
    --border-radius: 9999px;
    --background: rgba(188, 0, 255, 0.065);
    --background-rgb: 188, 0, 255;
  }
</style>
```
