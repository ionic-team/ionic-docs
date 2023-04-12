```html
<template>
  <ion-item>
    <ion-label>Default Item</ion-label>
  </ion-item>
  <ion-item color="primary">
    <ion-label>Primary Item</ion-label>
  </ion-item>
  <ion-item color="secondary">
    <ion-label>Secondary Item</ion-label>
  </ion-item>
  <ion-item color="tertiary">
    <ion-label>Tertiary Item</ion-label>
  </ion-item>
  <ion-item color="success">
    <ion-label>Success Item</ion-label>
  </ion-item>
  <ion-item color="warning">
    <ion-label>Warning Item</ion-label>
  </ion-item>
  <ion-item color="danger">
    <ion-label>Danger Item</ion-label>
  </ion-item>
  <ion-item color="light">
    <ion-label>Light Item</ion-label>
  </ion-item>
  <ion-item color="medium">
    <ion-label>Medium Item</ion-label>
  </ion-item>
  <ion-item color="dark">
    <ion-label>Dark Item</ion-label>
  </ion-item>
</template>

<script lang="ts">
  import { IonItem, IonLabel } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonItem, IonLabel },
  });
</script>
```
