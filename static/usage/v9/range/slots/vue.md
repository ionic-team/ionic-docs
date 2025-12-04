```html
<template>
  <ion-range aria-label="Temperature">
    <ion-icon slot="start" :icon="snowOutline"></ion-icon>
    <ion-icon slot="end" :icon="sunnyOutline"></ion-icon>
  </ion-range>
</template>

<script setup lang="ts">
  import { IonRange, IonIcon } from '@ionic/vue';
  import { snowOutline, sunnyOutline } from 'ionicons/icons';
</script>
```
