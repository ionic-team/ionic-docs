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
  ion-item {
    --background: #19422d;
    --color: #fff;

    --border-color: #fff;
    --border-style: dashed;
    --border-width: 2px;

    --border-radius: 20px;

    --ripple-color: purple;

    --detail-icon-color: white;
    --detail-icon-opacity: 1;
    --detail-icon-font-size: 20px;
  }
</style>
```
