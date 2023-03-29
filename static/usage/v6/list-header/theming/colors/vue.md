```html
<template>
  <ion-list-header>
    <ion-label>Default</ion-label>
  </ion-list-header>
  <ion-list-header color="primary">
    <ion-label>Primary</ion-label>
  </ion-list-header>
  <ion-list-header color="secondary">
    <ion-label>Secondary</ion-label>
  </ion-list-header>
  <ion-list-header color="tertiary">
    <ion-label>Tertiary</ion-label>
  </ion-list-header>
  <ion-list-header color="success">
    <ion-label>Success</ion-label>
  </ion-list-header>
  <ion-list-header color="warning">
    <ion-label>Warning</ion-label>
  </ion-list-header>
  <ion-list-header color="danger">
    <ion-label>Danger</ion-label>
  </ion-list-header>
  <ion-list-header color="light">
    <ion-label>Light</ion-label>
  </ion-list-header>
  <ion-list-header color="medium">
    <ion-label>Medium</ion-label>
  </ion-list-header>
  <ion-list-header color="dark">
    <ion-label>Dark</ion-label>
  </ion-list-header>
</template>

<script lang="ts">
  import { IonLabel, IonListHeader } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonLabel, IonListHeader },
  });
</script>
```
