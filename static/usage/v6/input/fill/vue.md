```html
<template>
  <ion-item>
    <ion-label position="floating">Default input</ion-label>
    <ion-input placeholder="Enter text"></ion-input>
  </ion-item>

  <ion-item fill="solid">
    <ion-label position="floating">Solid input</ion-label>
    <ion-input placeholder="Enter text"></ion-input>
  </ion-item>

  <ion-item fill="outline">
    <ion-label position="floating">Outline input</ion-label>
    <ion-input placeholder="Enter text"></ion-input>
  </ion-item>
</template>

<script lang="ts">
  import { IonInput, IonItem, IonLabel } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonInput, IonItem, IonLabel },
  });
</script>
```
