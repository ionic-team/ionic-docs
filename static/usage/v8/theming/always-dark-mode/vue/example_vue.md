```html
<template>
  <ion-header class="ion-no-border">
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-back-button default-href="#"></ion-back-button>
      </ion-buttons>
      <ion-title>Display</ion-title>
      <ion-buttons slot="end">
        <ion-button color="dark">
          <ion-icon slot="icon-only" :ios="personCircleOutline" :md="personCircle"></ion-icon>
        </ion-button>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>

  <ion-content>
    <ion-list-header>Appearance</ion-list-header>
    <ion-list :inset="true">
      <ion-item :button="true">Text Size</ion-item>
      <ion-item>
        <ion-toggle justify="space-between">Bold Text</ion-toggle>
      </ion-item>
    </ion-list>

    <ion-list-header>Brightness</ion-list-header>
    <ion-list :inset="true">
      <ion-item>
        <ion-range value="40">
          <ion-icon :icon="sunnyOutline" slot="start"></ion-icon>
          <ion-icon :icon="sunny" slot="end"></ion-icon>
        </ion-range>
      </ion-item>
      <ion-item>
        <ion-toggle justify="space-between" checked>True Tone</ion-toggle>
      </ion-item>
    </ion-list>

    <ion-list :inset="true">
      <ion-item :button="true">
        <ion-label>Night Shift</ion-label>
        <ion-text slot="end" color="medium">9:00 PM to 8:00 AM</ion-text>
      </ion-item>
    </ion-list>
  </ion-content>
</template>

<script lang="ts">
  import {
    IonBackButton,
    IonButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonListHeader,
    IonRange,
    IonText,
    IonToggle,
    IonToolbar,
  } from '@ionic/vue';
  import { personCircle, personCircleOutline, sunnyOutline, sunny } from 'ionicons/icons';
  import { defineComponent, ref } from 'vue';

  export default defineComponent({
    components: {
      IonBackButton,
      IonButton,
      IonButtons,
      IonContent,
      IonHeader,
      IonIcon,
      IonItem,
      IonLabel,
      IonList,
      IonListHeader,
      IonRange,
      IonText,
      IonToggle,
      IonToolbar,
    },
    setup() {
      return { personCircle, personCircleOutline, sunnyOutline, sunny };
    },
  });
</script>

<style>
  /*
   * Optional CSS
   * -----------------------------------
   */

  /* This is added for the flashing that happens when toggling between themes */
  ion-item {
    --transition: none;
  }

  /* This sets a different background and item background for the dark theme on ios */
  .ios {
    --ion-background-color: var(--ion-color-step-50);
    --ion-toolbar-background: var(--ion-background-color);
    --ion-item-background: #1c1c1d;
  }

  /* This sets a different background and item background for the dark theme on md */
  .md {
    --ion-background-color: var(--ion-color-step-100);
    --ion-toolbar-background: var(--ion-background-color);
    --ion-item-background: #1c1c1d;
  }
</style>
```
