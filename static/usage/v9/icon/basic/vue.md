```html
<template>
  <ion-icon :icon="logoIonic"></ion-icon>
  <ion-icon :icon="logoIonic" size="large"></ion-icon>
  <ion-icon :icon="logoIonic" color="primary"></ion-icon>
  <ion-icon :icon="logoIonic" size="large" color="primary"></ion-icon>
</template>

<script setup lang="ts">
  import { IonIcon } from '@ionic/vue';
  import { logoIonic } from 'ionicons/icons';
</script>
```
