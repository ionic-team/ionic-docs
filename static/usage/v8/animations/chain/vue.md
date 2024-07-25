```html
<template>
  <ion-card ref="cardAEl">
    <ion-card-content>Card 1</ion-card-content>
  </ion-card>

  <ion-card ref="cardBEl">
    <ion-card-content>Card 2</ion-card-content>
  </ion-card>

  <ion-card ref="cardCEl">
    <ion-card-content>Card 3</ion-card-content>
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
      const cardAEl = ref(null);
      const cardBEl = ref(null);
      const cardCEl = ref(null);

      let cardA: Animation | undefined;
      let cardB: Animation | undefined;
      let cardC: Animation | undefined;

      onMounted(() => {
        cardA = createAnimation()
          .addElement(cardAEl.value.$el)
          .fill('none')
          .duration(1000)
          .keyframes([
            { offset: 0, transform: 'scale(1) rotate(0)' },
            { offset: 0.5, transform: 'scale(1.2) rotate(45deg)' },
            { offset: 1, transform: 'scale(1) rotate(0)' },
          ]);

        cardB = createAnimation()
          .addElement(cardBEl.value.$el)
          .fill('none')
          .duration(1000)
          .keyframes([
            { offset: 0, transform: 'scale(1)', opacity: '1' },
            { offset: 0.5, transform: 'scale(1.2)', opacity: '0.3' },
            { offset: 1, transform: 'scale(1)', opacity: '1' },
          ]);

        cardC = createAnimation()
          .addElement(cardCEl.value.$el)
          .fill('none')
          .duration(1000)
          .keyframes([
            { offset: 0, transform: 'scale(1)', opacity: '0.5' },
            { offset: 0.5, transform: 'scale(0.8)', opacity: '1' },
            { offset: 1, transform: 'scale(1)', opacity: '0.5' },
          ]);
      });

      const play = async () => {
        await cardA?.play();
        await cardB?.play();
        await cardC?.play();
      };
      const pause = () => {
        cardA?.pause();
        cardB?.pause();
        cardC?.pause();
      };
      const stop = () => {
        cardA?.stop();
        cardB?.stop();
        cardC?.stop();
      };

      return {
        play,
        pause,
        stop,
        cardAEl,
        cardBEl,
        cardCEl,
      };
    },
  });
</script>
```
