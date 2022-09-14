```html
<template>
  <ion-item>
    <ion-label>Default</ion-label>
    <ion-spinner></ion-spinner>
  </ion-item>

  <ion-item>
    <ion-label>Dots</ion-label>
    <ion-spinner name="dots"></ion-spinner>
  </ion-item>

  <ion-item>
    <ion-label>Lines</ion-label>
    <ion-spinner name="lines"></ion-spinner>
  </ion-item>

  <ion-item>
    <ion-label>Lines Small</ion-label>
    <ion-spinner name="lines-small"></ion-spinner>
  </ion-item>

  <ion-item>
    <ion-label>Bubbles</ion-label>
    <ion-spinner name="bubbles"></ion-spinner>
  </ion-item>

  <ion-item>
    <ion-label>Circles</ion-label>
    <ion-spinner name="circles"></ion-spinner>
  </ion-item>

  <ion-item>
    <ion-label>Crescent</ion-label>
    <ion-spinner name="crescent"></ion-spinner>
  </ion-item>
</template>

<script lang="ts">
  import { IonItem, IonLabel, IonSpinner } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonItem, IonLabel, IonSpinner },
  });
</script>
```
