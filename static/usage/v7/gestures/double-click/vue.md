```html
<template>
  <ion-card ref="card">
    <ion-card-content>Double click me to move the card.</ion-card-content>
  </ion-card>
</template>

<script lang="ts">
  import { IonCard, IonCardContent, createGesture } from '@ionic/vue';
  import { defineComponent, onMounted, ref } from 'vue';

  export default defineComponent({
    components: {
      IonCard,
      IonCardContent,
    },
    setup() {
      const DOUBLE_CLICK_THRESHOLD = 500;
      const card = ref();

      let lastOnStart = 0;
      let currentOffset = 0;

      onMounted(() => {
        const gesture = createGesture({
          el: card.value.$el,
          threshold: 0,
          onStart,
          gestureName: 'double-click',
        });

        gesture.enable();
      });

      const onStart = () => {
        const now = Date.now();

        if (Math.abs(now - lastOnStart) <= DOUBLE_CLICK_THRESHOLD) {
          card.value.$el.style.setProperty('transform', getNewTransform());
          lastOnStart = 0;
        } else {
          lastOnStart = now;
        }
      };

      const getNewTransform = () => {
        if (currentOffset >= 100) {
          currentOffset = 0;
        } else {
          currentOffset += 20;
        }

        return `translateX(${currentOffset}px)`;
      };

      return {
        card,
      };
    },
  });
</script>

<style scoped>
  ion-card {
    transform: translateX(0);
    user-select: none;
  }
</style>
```
