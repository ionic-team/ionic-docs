```html
<template>
  <ion-item-divider>
    <ion-label>Default</ion-label>
  </ion-item-divider>
  <ion-item-divider color="primary">
    <ion-label>Primary</ion-label>
  </ion-item-divider>
  <ion-item-divider color="secondary">
    <ion-label>Secondary</ion-label>
  </ion-item-divider>
  <ion-item-divider color="tertiary">
    <ion-label>Tertiary</ion-label>
  </ion-item-divider>
  <ion-item-divider color="success">
    <ion-label>Success</ion-label>
  </ion-item-divider>
  <ion-item-divider color="warning">
    <ion-label>Warning</ion-label>
  </ion-item-divider>
  <ion-item-divider color="danger">
    <ion-label>Danger</ion-label>
  </ion-item-divider>
  <ion-item-divider color="light">
    <ion-label>Light</ion-label>
  </ion-item-divider>
  <ion-item-divider color="medium">
    <ion-label>Medium</ion-label>
  </ion-item-divider>
  <ion-item-divider color="dark">
    <ion-label>Dark</ion-label>
  </ion-item-divider>
</template>

<script lang="ts">
  import { IonItemDivider, IonLabel } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonItemDivider, IonLabel },
  });
</script>
```
