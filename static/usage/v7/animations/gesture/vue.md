```html
<template>
  <div class="container">
    <div class="track">
      <ion-card id="card" button="true" ref="cardEl">
        <ion-card-content>Card</ion-card-content>
      </ion-card>
    </div>

    <p>Drag the square along the track.</p>
  </div>
</template>

<script lang="ts">
  import { IonCard, IonCardContent, createAnimation, createGesture } from '@ionic/vue';
  import type { GestureDetail } from '@ionic/vue';
  import { defineComponent, ref, onMounted } from 'vue';

  export default defineComponent({
    components: {
      IonCard,
      IonCardContent,
    },
    setup() {
      const cardEl = ref(null);

      onMounted(() => {
        let initialStep = 0;
        let started = false;

        /**
         * The track is 344px wide.
         * The card is 100px wide.
         * We want 16px of margin on each end of the track.
         */
        const MAX_TRANSLATE = 344 - 100 - 32;

        const animation = createAnimation()
          .addElement(cardEl.value.$el)
          .duration(1000)
          .fromTo('transform', 'translateX(0)', `translateX(${MAX_TRANSLATE}px)`);

        const gesture = createGesture({
          el: card,
          threshold: 0,
          gestureName: 'card-drag',
          onMove: (ev) => onMove(ev),
          onEnd: (ev) => onEnd(ev),
        });

        gesture.enable(true);

        const onMove = (ev: GestureDetail) => {
          if (!started) {
            animation.progressStart();
            started = true;
          }

          animation.progressStep(getStep(ev));
        };

        const onEnd = (ev: GestureDetail) => {
          if (!started) {
            return;
          }

          gesture.enable(false);

          const step = getStep(ev);
          const shouldComplete = step > 0.5;

          animation.progressEnd(shouldComplete ? 1 : 0, step).onFinish(() => {
            gesture.enable(true);
          });

          initialStep = shouldComplete ? MAX_TRANSLATE : 0;
          started = false;
        };

        const clamp = (min: number, n: number, max: number) => {
          return Math.max(min, Math.min(n, max));
        };

        const getStep = (ev: GestureDetail) => {
          const delta = initialStep + ev.deltaX;
          return clamp(0, delta / MAX_TRANSLATE, 1);
        };
      });

      return { cardEl };
    },
  });
</script>

<style scoped>
  .container {
    flex-direction: column;
  }

  .track {
    width: 344px;
    background: var(--ion-color-medium);
    padding: 16px;
  }

  ion-card {
    width: 100px;
    box-shadow: none;
    margin: 0px;
  }
</style>
```
