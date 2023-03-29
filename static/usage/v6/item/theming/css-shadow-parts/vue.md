```html
<template>
  <ion-item button detail lines="full">
    <ion-label>Custom Item</ion-label>
  </ion-item>

  <ion-item button detail lines="full">
    <ion-label>Custom Item</ion-label>
  </ion-item>

  <ion-item button detail lines="full">
    <ion-label>Custom Item</ion-label>
  </ion-item>
</template>

<script lang="ts">
  import { IonItem, IonLabel } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonItem, IonLabel },
  });
</script>

<style>
  ion-item::part(native) {
    background: #19422d;
    color: #fff;

    border-color: #fff;
    border-style: dashed;
    border-width: 2px;

    border-radius: 20px;
  }

  ion-item::part(detail-icon) {
    color: white;
    opacity: 1;
    font-size: 20px;
  }
</style>
```
