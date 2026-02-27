```vue
<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>App</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <ion-button id="open-modal" expand="block">Open Sheet Modal</ion-button>

    <ion-modal
      ref="modal"
      trigger="open-modal"
      :initial-breakpoint="0.25"
      :breakpoints="[0, 0.25, 0.5, 0.75, 1]"
      @ionDragStart="onDragStart()"
      @ionDragMove="onDragMove($event)"
      @ionDragEnd="onDragEnd($event)"
    >
      <ion-content class="ion-padding">
        <div class="ion-margin-top">
          <ion-label> Drag the handle to adjust the modal's opacity based on a custom max opacity. </ion-label>
        </div>
      </ion-content>
    </ion-modal>
  </ion-content>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { IonButton, IonModal, IonHeader, IonContent, IonToolbar, IonTitle, IonLabel } from '@ionic/vue';
import type { ModalDragEventDetail } from '@ionic/vue';

const modal = ref<InstanceType<typeof IonModal>>();

let baseOpacity: number;
const MAX_OPACITY = 0.8;

const onDragStart = () => {
  const modalEl = modal.value!.$el;
  const style = window.getComputedStyle(modalEl);

  // Fetch the current variable value
  baseOpacity = parseFloat(style.getPropertyValue('--backdrop-opacity'));

  // Ensure transitions are off during the active drag
  modalEl.style.transition = 'none';
};

const onDragMove = (event: CustomEvent<ModalDragEventDetail>) => {
  // `progress` is a value from 1 (top) to 0 (bottom)
  const { progress } = event.detail;
  const modalEl = modal.value!.$el;
  const initialBreakpoint = modalEl.initialBreakpoint || 0.25;
  let dynamicOpacity: number;

  /**
   * Dragging Down: Progress is between 0 and the initial breakpoint
   */
  if (progress <= initialBreakpoint) {
    /**
     * Calculate how far down the user has dragged from the initial
     * breakpoint as a ratio
     */
    const downwardProgressRatio = progress / initialBreakpoint;
    /**
     * Multiplying this by `baseOpacity` ensures that as progress hits 0,
     * the opacity also hits 0 without a sudden jump
     */
    dynamicOpacity = downwardProgressRatio * baseOpacity;
  } else {
    /**
     * Dragging Up: Progress is between the initial breakpoint and 1.0
     */

    /**
     * Calculate how far up the user has dragged from the initial
     * breakpoint as a ratio
     */
    const distanceFromStart = progress - initialBreakpoint;
    /**
     * Calculate the total available space to drag up from the initial
     * breakpoint to the top (1.0)
     */
    const range = 1 - initialBreakpoint;
    /**
     * Normalizes that distance into a 0.0 to 1.0 value relative to
     * the available upward space
     */
    const currentGain = distanceFromStart / range;

    // Scale from `baseOpacity` up to `MAX_OPACITY`
    dynamicOpacity = baseOpacity + currentGain * (MAX_OPACITY - baseOpacity);
  }

  modalEl.style.setProperty('--backdrop-opacity', dynamicOpacity.toString());
};

const onDragEnd = (event: CustomEvent<ModalDragEventDetail>) => {
  // `currentBreakpoint` tells us which snap point the modal will animate to after the drag ends
  const { currentBreakpoint } = event.detail;
  const modalEl = modal.value!.$el;

  /**
   * If the modal is snapping to the closed state (0), reset the
   * styles.
   */
  if (currentBreakpoint === 0) {
    modalEl.style.removeProperty('--backdrop-opacity');
    return;
  }

  // Determine the target opacity for the snap-back animation
  let targetOpacity = baseOpacity;
  /**
   * If snapping to the top (1), set opacity to MAX_OPACITY for a nice
   * visual effect.
   */
  if (currentBreakpoint === 1) {
    targetOpacity = MAX_OPACITY;
  }

  // Re-enable transition for a smooth snap-back
  modalEl.style.transition = '--backdrop-opacity 0.3s ease';
  modalEl.style.setProperty('--backdrop-opacity', targetOpacity.toString());
};
</script>
```
