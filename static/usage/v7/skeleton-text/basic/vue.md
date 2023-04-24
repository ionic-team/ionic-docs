```html
<template>
  <ion-list v-if="loaded">
    <ion-list-header>Albums</ion-list-header>
    <ion-item>
      <ion-thumbnail slot="start">
        <ion-icon style="width: 100%; height: 100%" :icon="musicalNotes"></ion-icon>
      </ion-thumbnail>
      <ion-label>
        <h3>Abbey Road</h3>
        <p>The Beatles</p>
        <p>1969</p>
      </ion-label>
    </ion-item>
  </ion-list>
  
  <ion-list v-if="!loaded">
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
  
  <ion-button @click="setLoaded(!loaded)">Toggle</ion-button>
</template>

<script lang="ts">
  import {
    IonButton,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonListHeader,
    IonSkeletonText,
    IonThumbnail,
  } from '@ionic/vue';
  import { musicalNotes } from 'ionicons/icons'
  import { defineComponent, ref } from 'vue';

  export default defineComponent({
    components: {
      IonButton,
      IonIcon,
      IonItem,
      IonLabel,
      IonList,
      IonListHeader,
      IonSkeletonText,
      IonThumbnail,
    },
    setup() {
      const loaded = ref(false);
      const setLoaded = (state: boolean) => loaded.value = state;
      return {
        loaded,
        musicalNotes,
        setLoaded
      }
    }
  });
</script>
```
