```html
<template>
  <ion-list>
    <ion-item>
      <ion-toggle justify="start">Packed at the Start of Line</ion-toggle>
    </ion-item>
    <ion-item>
      <ion-toggle justify="end">Packed at the End of Line</ion-toggle>
    </ion-item>
    <ion-item>
      <ion-toggle justify="space-between">Space Between Label and Control</ion-toggle>
    </ion-item>
  </ion-list>
</template>

<script setup lang="ts">
  import { IonItem, IonList, IonToggle } from '@ionic/vue';
</script>
```
