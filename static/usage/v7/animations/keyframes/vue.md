```html
<template>
  <div ref="squareRef" class="square"></div>
  <ion-button @click="play()">Play</ion-button>
  <ion-button @click="pause()">Pause</ion-button>
  <ion-button @click="stop()">Stop</ion-button>
</template>

<script lang="ts">
  import { IonButton, createAnimation } from '@ionic/vue';
  import type { Animation } from '@ionic/vue';

  import { defineComponent, ref, onMounted } from 'vue';

  export default defineComponent({
    components: {
      IonButton,
    },
    setup() {
      const squareRef = ref(null);

      let animation: Animation | undefined;

      onMounted(() => {
        console.log(squareRef);
        animation = createAnimation()
          .addElement(squareRef.value)
          .duration(3000)
          .iterations(Infinity)
          .keyframes([
            { offset: 0, background: 'red' },
            { offset: 0.72, background: 'var(--background)' },
            { offset: 1, background: 'green' },
          ]);
      });

      const play = async () => {
        await animation.play();
      };
      const pause = () => {
        animation?.pause();
      };
      const stop = () => {
        animation?.stop();
      };

      return {
        play,
        pause,
        stop,
        squareRef,
      };
    },
  });
</script>

<style>
  .square {
    width: 100px;
    height: 100px;
    background: red;
    --background: yellow;
  }
</style>
```
