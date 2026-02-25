```vue
<template>
  <ion-page ref="page">
    <ion-header>
      <ion-toolbar>
        <ion-title>App</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-button id="open-modal" expand="block">Open Card Modal</ion-button>

      <ion-modal
        trigger="open-modal"
        :presenting-element="presentingElement"
        @willPresent="onWillPresent()"
        @ionDragStart="onDragStart()"
        @ionDragMove="onDragMove($event)"
        @ionDragEnd="onDragEnd($event)"
        @willDismiss="onWillDismiss()"
      >
        <ion-header>
          <ion-toolbar>
            <ion-title>Modal</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
          <div class="ion-margin-top">
            <ion-label> Drag the handle to adjust the background brightness based on a custom brightness.</ion-label>
          </div>
        </ion-content>
      </ion-modal>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { IonPage, IonModal, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonLabel } from '@ionic/vue';
import type { ModalDragEventDetail } from '@ionic/vue';

const page = ref<InstanceType<typeof IonPage>>();
const presentingElement = ref<HTMLElement>();

const DARKEST_PERCENT = 50;
const BRIGHTNESS_RANGE = 100 - DARKEST_PERCENT;

onMounted(() => {
  presentingElement.value = page.value!.$el;
});

/**
 * Sync the background dimming with the modal's entry animation.
 */
const onWillPresent = () => {
  const appEl = page.value!.$el;

  appEl.style.transition = 'filter 0.4s ease';
  // Set to max darkness immediately
  appEl.style.setProperty('filter', `brightness(${DARKEST_PERCENT}%)`, 'important');
};

const onDragStart = () => {
  const appEl = page.value!.$el;

  // Ensure transitions are off during the active drag
  appEl.style.transition = 'none';
};

const onDragMove = (event: CustomEvent<ModalDragEventDetail>) => {
  // `progress` is a value from 1 (top) to 0 (bottom)
  const { progress } = event.detail;

  const appEl = page.value!.$el;
  /**
   * Calculate the current brightness based on how far the user has
   * dragged.
   *
   * When dragging up, the background should become darker,
   * and when dragging down, it should become lighter.
   */
  const brightnessValue = 100 - progress * BRIGHTNESS_RANGE;

  // Update the brightness in real-time as the user drags
  appEl.style.setProperty('filter', `brightness(${brightnessValue}%)`, 'important');
};

const onDragEnd = (event: CustomEvent<ModalDragEventDetail>) => {
  // `progress` is a value from 1 (top) to 0 (bottom)
  const { progress } = event.detail;

  const appEl = page.value!.$el;
  /**
   * Snap the background brightness based on the user's drag intent.
   * Progress > 0.4 implies an intent to open (snap dark),
   * while < 0.4 implies a dismissal (snap bright).
   */
  const brightnessValue = progress > 0.4 ? DARKEST_PERCENT : 100;

  // Reset to max darkness on snap-back for a nice visual effect
  appEl.style.setProperty('filter', `brightness(${brightnessValue}%)`, 'important');

  // Re-enable transition for a smooth snap-back
  appEl.style.transition = 'filter 0.4s ease';
};

const onWillDismiss = () => {
  const appEl = page.value!.$el;

  // Clean up styles when the modal is dismissed
  appEl.style.removeProperty('filter');
  appEl.style.removeProperty('transition');
};
</script>
```
