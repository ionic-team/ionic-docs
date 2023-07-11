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

      let card: Animation | undefined;

      onMounted(() => {
        card = createAnimation()
          .addElement(cardEl.value.$el)
          .duration(2000)
          .beforeStyles({
            opacity: 0.2
          })
          .beforeClearStyles(['background'])
          .afterStyles({
            background: 'rgba(0, 255, 0, 0.5)'
          })
          .afterClearStyles(['opacity'])
          .keyframes([
            { offset: 0, transform: 'scale(1)' },
            { offset: 0.5, transform: 'scale(1.5)' },
            { offset: 1, transform: 'scale(1)' }
          ]);
      });

      const play = async () => {
        await card.play();
      };
      const pause = () => {
        card?.pause();
      };
      const stop = () => {
        card?.stop();
      };

      return {
        play,
        pause,
        stop,
        cardEl,
      };
    },
  });
</script>
```
