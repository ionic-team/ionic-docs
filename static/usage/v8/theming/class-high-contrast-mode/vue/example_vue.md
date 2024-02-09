```html
<template>
  <ion-header>
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

  <ion-content color="light">
    <ion-list-header>Appearance</ion-list-header>
    <ion-list :inset="true">
      <ion-item>
        <ion-toggle :checked="darkThemeToggle" @ionChange="darkChange($event)" justify="space-between"
          >Dark Mode</ion-toggle
        >
      </ion-item>
      <ion-item>
        <ion-toggle :checked="highContrastThemeToggle" @ionChange="highContrastChange($event)" justify="space-between"
          >High Contrast Mode</ion-toggle
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
      const darkThemeToggle = ref(false);
      const highContrastThemeToggle = ref(false);

      // Use matchMedia to check the user preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
      const prefersHighContrast = window.matchMedia('(prefers-contrast: more)');

      // Add or remove the "ion-theme-dark" class on the html element
      const toggleDarkTheme = (shouldAdd) => {
        document.documentElement.classList.toggle('ion-theme-dark', shouldAdd);
      };

      // Add or remove the "ion-theme-high-contrast" class on the html element
      const toggleHighContrastTheme = (shouldAdd) => {
        document.documentElement.classList.toggle('ion-theme-high-contrast', shouldAdd);
      };

      // Check/uncheck the toggle and update the themes
      const initializeDarkTheme = (isDark) => {
        darkThemeToggle.value = isDark;
        toggleDarkTheme(isDark);
      };

      const initializeHighContrastTheme = (isHighContrast) => {
        highContrastToggle.value = isHighContrast;
        toggleHighContrastTheme(isHighContrast);
      };

      // Initialize the dark theme based on the initial
      // value of the media queries
      initializeDarkTheme(prefersDark.matches);
      initializeHighContrastTheme(prefersHighContrast.matches);

      // Listen for changes to the media queries
      prefersDark.addEventListener('change', (mediaQuery) => initializeDarkTheme(mediaQuery.matches));
      prefersHighContrast.addEventListener('change', (mediaQuery) => initializeHighContrastTheme(mediaQuery.matches));

      // Listen for the toggle check/uncheck to toggle the dark theme
      const darkChange = (ev: ToggleCustomEvent) => {
        toggleDarkTheme(ev.detail.checked);
      };

      // Listen for the toggle check/uncheck to toggle the high contrast theme
      const highContrastChange = (ev: ToggleCustomEvent) => {
        toggleDarkTheme(ev.detail.checked);
      };

      return {
        personCircle,
        personCircleOutline,
        sunnyOutline,
        sunny,
        darkChange,
        highContrastChange,
      };
    },
  });
</script>

<style>
  /* (Optional) This is added to prevent the flashing that happens when toggling between themes */
  ion-item {
    --transition: none;
  }
</style>
```
