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
          .duration(1500)
          .iterations(Infinity)
          .direction('alternate')
          .fromTo('background', 'blue', 'var(--background)');
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

<style scoped>
  ion-card {
    color: white;
    opacity: 0.5;
    background: blue;
    margin: 10px;

    --background: red;
  }

  @media (prefers-color-scheme: dark) {
    ion-card {
      --background: green;
    }
  }
</style>
```
