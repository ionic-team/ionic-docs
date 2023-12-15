```html
<template>
  <ion-item>
    <ion-label>Label</ion-label>
    <ion-note slot="end">Note (End)</ion-note>
  </ion-item>

  <ion-item>
    <ion-note slot="start">Note (Start)</ion-note>
    <ion-label>Label</ion-label>
  </ion-item>
</template>

<script lang="ts" setup>
  import { IonItem, IonLabel, IonNote } from '@ionic/vue';
</script>
```
