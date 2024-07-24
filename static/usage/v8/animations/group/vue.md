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

      let animation: Animation;

      onMounted(() => {
        const cardA = createAnimation()
          .addElement(cardAEl.value.$el)
          .keyframes([
            { offset: 0, transform: 'scale(1) rotate(0)' },
            { offset: 0.5, transform: 'scale(1.5) rotate(45deg)' },
            { offset: 1, transform: 'scale(1) rotate(0) ' },
          ]);

        const cardB = createAnimation()
          .addElement(cardBEl.value.$el)
          .keyframes([
            { offset: 0, transform: 'scale(1)', opacity: '1' },
            { offset: 0.5, transform: 'scale(1.5)', opacity: '0.3' },
            { offset: 1, transform: 'scale(1)', opacity: '1' },
          ]);

        const cardC = createAnimation()
          .addElement(cardCEl.value.$el)
          .duration(5000)
          .keyframes([
            { offset: 0, transform: 'scale(1)', opacity: '0.5' },
            { offset: 0.5, transform: 'scale(0.5)', opacity: '1' },
            { offset: 1, transform: 'scale(1)', opacity: '0.5' },
          ]);

        animation = createAnimation().duration(2000).iterations(Infinity).addAnimation([cardA, cardB, cardC]);
      });

      const play = () => animation.play();
      const pause = () => animation.pause();
      const stop = () => animation.stop();

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
