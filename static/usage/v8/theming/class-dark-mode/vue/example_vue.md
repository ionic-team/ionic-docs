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
      <ion-item>
        <ion-toggle :checked="paletteToggle" @ionChange="toggleChange($event)" justify="space-between"
          >Dark Mode</ion-toggle
        >
      </ion-item>
    </ion-list>

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
  import type { ToggleCustomEvent } from '@ionic/vue';
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
      const paletteToggle = ref(false);

      // Use matchMedia to check the user preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

      // Add or remove the "ion-palette-dark" class on the html element
      const toggleDarkPalette = (shouldAdd) => {
        document.documentElement.classList.toggle('ion-palette-dark', shouldAdd);
      };

      // Check/uncheck the toggle and update the palette based on isDark
      const initializeDarkPalette = (isDark) => {
        paletteToggle.value = isDark;
        toggleDarkPalette(isDark);
      };

      // Initialize the dark palette based on the initial
      // value of the prefers-color-scheme media query
      initializeDarkPalette(prefersDark.matches);

      // Listen for changes to the prefers-color-scheme media query
      prefersDark.addEventListener('change', (mediaQuery) => initializeDarkPalette(mediaQuery.matches));

      // Listen for the toggle check/uncheck to toggle the dark palette
      const toggleChange = (ev: ToggleCustomEvent) => {
        toggleDarkPalette(ev.detail.checked);
      };

      return {
        personCircle,
        personCircleOutline,
        sunnyOutline,
        sunny,
        initializeDarkPalette,
        toggleChange,
        toggleDarkPalette,
        paletteToggle,
      };
    },
  });
</script>

<style>
  /* (Optional) This is added to prevent the flashing that happens when toggling between palettes */
  ion-item {
    --transition: none;
  }
</style>
```
