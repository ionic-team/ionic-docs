```html
<template>
  <ion-content>
    <ion-list>
      <ion-item v-for="(item, index) in items">
        <ion-avatar slot="start">
          <img :src="'https://picsum.photos/80/80?random=' + index" alt="avatar" />
        </ion-avatar>
        <ion-label>{{ item }}</ion-label>
      </ion-item>
    </ion-list>
    <ion-infinite-scroll>
      <ion-infinite-scroll-content
        loading-text="Please wait..."
        loading-spinner="bubbles"
      ></ion-infinite-scroll-content>
    </ion-infinite-scroll>
  </ion-content>
</template>

<script lang="ts">
  import {
    IonContent,
    IonInfiniteScroll,
    IonInfiniteScrollContent,
    IonList,
    IonItem,
    IonAvatar,
    IonImg,
    IonLabel,
    InfiniteScrollCustomEvent,
  } from '@ionic/vue';
  import { defineComponent, reactive } from 'vue';

  export default defineComponent({
    components: {
      IonContent,
      IonContent,
      IonInfiniteScroll,
      IonInfiniteScrollContent,
      IonList,
      IonItem,
      IonAvatar,
      IonImg,
      IonLabel,
    },
    setup() {
      const items = reactive([]);

      for (let i = 1; i < 51; i++) {
        items.push(`Item ${i}`);
      }

      return { items };
    },
  });
</script>
```
