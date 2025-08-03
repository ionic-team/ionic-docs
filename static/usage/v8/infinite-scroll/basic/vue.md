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
    <ion-infinite-scroll @ionInfinite="ionInfinite">
      <ion-infinite-scroll-content></ion-infinite-scroll-content>
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
    IonLabel,
    InfiniteScrollCustomEvent,
  } from '@ionic/vue';
  import { defineComponent, reactive } from 'vue';

  export default defineComponent({
    components: {
      IonContent,
      IonInfiniteScroll,
      IonInfiniteScrollContent,
      IonList,
      IonItem,
      IonAvatar,
      IonLabel,
    },
    setup() {
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

      return { ionInfinite, items };
    },
  });
</script>
```
