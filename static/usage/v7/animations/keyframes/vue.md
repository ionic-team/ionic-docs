```html
<template>
  <ion-card ref="cardEl">
    <ion-card-content>Card</ion-card-content>
  </ion-card>
  <ion-button @click="play()">Play</ion-button>
  <ion-button @click="pause()">Pause</ion-button>
  <ion-button @click="stop()">Stop</ion-button>
</template>

<script lang="ts">
  import { IonButton, IonCard, IonCardContent, createAnimation } from '@ionic/vue';
  import type { Animation } from '@ionic/vue';

  import { defineComponent, ref, onMounted } from 'vue';

  export default defineComponent({
    components: {
      IonButton,
      IonCard,
      IonCardContent,
    },
    setup() {
      const cardEl = ref(null);

      let animation: Animation;

      onMounted(() => {
        animation = createAnimation()
          .addElement(cardEl.value.$el)
          .duration(3000)
          .iterations(Infinity)
          .keyframes([
            { offset: 0, width: '80px' },
            { offset: 0.72, width: 'var(--width)' },
            { offset: 1, width: '240px' },
          ]);
      });

      const play = () => animation.play();
      const pause = () => animation.pause();
      const stop = () => animation.stop();

      return {
        play,
        pause,
        stop,
        cardEl,
      };
    },
  });
</script>

<style>
  ion-card {
    width: 80px;
    --width: 160px;
  }
</style>
```
