```vue
<template>
  <ion-header ref="header">
    <ion-toolbar>
      <ion-title>App</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <ion-button id="open-modal" expand="block">Open Sheet Modal</ion-button>

    <ion-modal
      trigger="open-modal"
      :initial-breakpoint="0.25"
      :breakpoints="[0, 0.25, 0.5, 0.75, 1]"
      @ionDragMove="onDragMove($event)"
      @ionDragEnd="onDragEnd($event)"
      @willDismiss="onWillDismiss()"
    >
      <ion-content class="ion-padding">
        <div class="ion-margin-top">
          <ion-label>Drag the handle to adjust the header's visibility.</ion-label>
        </div>
      </ion-content>
    </ion-modal>
  </ion-content>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { IonButton, IonModal, IonHeader, IonContent, IonToolbar, IonTitle, IonLabel } from '@ionic/vue';
import type { ModalDragEventDetail } from '@ionic/vue';

const header = ref<InstanceType<typeof IonHeader>>();

const onDragMove = (event: CustomEvent<ModalDragEventDetail>) => {
  // `progress` is a value from 1 (top) to 0 (bottom)
  const { progress } = event.detail;
  const headerEl = header.value!.$el;

  /**
   * Inverse relationship:
   * 1.0 progress = 0 opacity
   * 0 progress = 1.0 opacity
   */
  const currentOpacity = 1 - progress;

  headerEl.style.opacity = currentOpacity.toString();
};

const onDragEnd = (event: CustomEvent<ModalDragEventDetail>) => {
  console.log('Drag ended', event.detail);

  // `currentBreakpoint` tells us which snap point the modal will animate to after the drag ends
  const { progress, currentBreakpoint } = event.detail;
  const headerEl = header.value!.$el;

  /**
   * If the modal is snapping to the closed state (0), reset the
   * styles.
   */
  if (currentBreakpoint === 0) {
    headerEl.style.removeProperty('opacity');
    headerEl.style.removeProperty('transition');
    return;
  }

  // Smooth transition to the final resting opacity
  headerEl.style.transition = 'opacity 0.4s ease';
  // The final opacity matches the inverse of the resting progress
  headerEl.style.opacity = (1 - progress).toString();
};

const onWillDismiss = () => {
  const headerEl = header.value!.$el;

  // Reset styles when the modal is dismissed
  headerEl.style.removeProperty('opacity');
  headerEl.style.removeProperty('transition');
};
</script>
```
