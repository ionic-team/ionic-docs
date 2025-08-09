```html
<template>
  <ion-content fixed-slot-placement="before">
    <ion-fab horizontal="end" vertical="bottom" slot="fixed">
      <ion-fab-button>
        <ion-icon :icon="add"></ion-icon>
      </ion-fab-button>
    </ion-fab>
    <ion-list>
      <ion-item v-for="(item, index) in items" button>
        <ion-avatar slot="start">
          <img :src="'https://picsum.photos/80/80?random=' + index" alt="avatar" />
        </ion-avatar>
        <ion-label>{{ item }}</ion-label>
      </ion-item>
    </ion-list>
    <ion-infinite-scroll @ionInfinite="ionInfinite">
      <ion-infinite-scroll-content></ion-infinite-scroll-content>
    </ion-infinite-scroll>
  </ion-content>
</template>

<script setup lang="ts">
  import {
    InfiniteScrollCustomEvent,
    IonAvatar,
    IonContent,
    IonFab,
    IonFabButton,
    IonIcon,
    IonInfiniteScroll,
    IonInfiniteScrollContent,
    IonItem,
    IonLabel,
    IonList,
  } from '@ionic/vue';
  import { add } from 'ionicons/icons';
  import { reactive } from 'vue';

  const items = reactive([]);

  const generateItems = () => {
    const count = items.length + 1;
    for (let i = 0; i < 50; i++) {
      items.push(`Item ${count + i}`);
    }
  };

  const ionInfinite = (event: InfiniteScrollCustomEvent) => {
    generateItems();
    setTimeout(() => event.target.complete(), 500);
  };

  generateItems();
</script>
```
