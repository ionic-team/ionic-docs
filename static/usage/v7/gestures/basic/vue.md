```html
<style scoped>
  ion-card {
    position: absolute;

    left: 0;
    right: 0;

    user-select: none;
  }

  ion-card.active {
    box-shadow: var(--ion-color-warning) 0px 4px 16px;
  }
</style>
<template>
  <ion-card ref="card">
    <ion-card-header>
      <ion-card-subtitle>Pan the Screen</ion-card-subtitle>
    </ion-card-header>
    <ion-card-content>
      <p ref="debug">Gesture information will display after interaction.</p>
    </ion-card-content>
  </ion-card>
</template>

<script lang="ts">
  import { IonButton, IonCard, IonCardContent, createGesture } from '@ionic/vue';
  import type { GestureDetail } from '@ionic/vue';

  import { defineComponent, ref, onMounted } from 'vue';

  export default defineComponent({
    components: {
      IonButton,
      IonCard,
      IonCardContent,
    },
    setup() {
      const card = ref(null);
      const debug = ref(null);

      onMounted(() => {
        const gesture = createGesture({
          el: card.value.$el.closest('ion-content'),
          onStart: () => onStart(),
          onMove: (detail) => onMove(detail),
          onEnd: () => onEnd(),
          gestureName: 'example',
        });

        gesture.enable();
      });

      const onStart = () => {
        card.value?.$el.classList.add('active');
      };

      const onMove = (detail: GestureDetail) => {
        const { type, currentX, deltaX, velocityX } = detail;

        if (debug.value) {
          debug.value.innerHTML = `
            <div>Type: ${type}</div>
            <div>Current X: ${currentX}</div>
            <div>Delta X: ${deltaX}</div>
            <div>Velocity X: ${velocityX}</div>`;
        }
      };

      const onEnd = () => {
        card.value?.$el.classList.remove('active');
      };

      return {
        card,
        debug,
      };
    },
  });
</script>
```
