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
// Assign the current snap breakpoint to the initial breakpoint so
// that we can track changes during the drag
let currentSnap = 0.25;

const onDragMove = (event: CustomEvent<ModalDragEventDetail>) => {
  // `progress` is a value from 1 (top) to 0 (bottom)
  // `snapBreakpoint` tells us which snap point the modal will animate to after the drag ends
  const { progress, snapBreakpoint } = event.detail;
  const headerEl = header.value!.$el;

  if (currentSnap !== snapBreakpoint) {
    currentSnap = snapBreakpoint;

    console.log('Current snap breakpoint:', snapBreakpoint);
  }

  /**
   * Inverse relationship:
   * 1.0 progress = 0 opacity
   * 0 progress = 1.0 opacity
   */
  const currentOpacity = 1 - progress;

  headerEl.style.opacity = currentOpacity.toString();
};

const onDragEnd = (event: CustomEvent<ModalDragEventDetail>) => {
  // `progress` is a value from 1 (top) to 0 (bottom)
  // `snapBreakpoint` tells us which snap point the modal will animate to after the drag ends
  const { progress, snapBreakpoint } = event.detail;
  const headerEl = header.value!.$el;

  /**
   * If the modal is snapping to the closed state (0), reset the
   * styles.
   */
  if (snapBreakpoint === 0) {
    headerEl.style.removeProperty('opacity');
    headerEl.style.removeProperty('transition');
    return;
  }

  // Smooth transition to the final resting opacity
  headerEl.style.transition = 'opacity 0.4s ease';
  // The final opacity matches the inverse of the resting progress
  headerEl.style.opacity = (1 - progress).toString();
};

/**
 * If the user dismisses the modal (e.g. tapping the backdrop),
 * reset the styles.
 */
const onWillDismiss = () => {
  const headerEl = header.value!.$el;

  // Reset styles when the modal is dismissed
  headerEl.style.removeProperty('opacity');
  headerEl.style.removeProperty('transition');
};
</script>
```
