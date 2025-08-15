```html
<template>
  <ion-breadcrumbs>
    <ion-breadcrumb href="#home">
      Home
      <ion-icon slot="separator" :icon="arrowForwardCircle"></ion-icon>
    </ion-breadcrumb>
    <ion-breadcrumb href="#electronics">
      Electronics
      <ion-icon slot="separator" :icon="arrowForwardCircle"></ion-icon>
    </ion-breadcrumb>
    <ion-breadcrumb href="#cameras">
      Cameras
      <ion-icon slot="separator" :icon="arrowForwardCircle"></ion-icon>
    </ion-breadcrumb>
    <ion-breadcrumb href="#film">
      Film
      <ion-icon slot="separator" :icon="arrowForwardCircle"></ion-icon>
    </ion-breadcrumb>
  </ion-breadcrumbs>
</template>

<script setup lang="ts">
  import { IonBreadcrumb, IonBreadcrumbs, IonIcon } from '@ionic/vue';
  import { arrowForwardCircle } from 'ionicons/icons';
</script>
```
