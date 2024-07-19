```html
<template>
  <ion-item>
    <ion-label> Default Icon </ion-label>
    <ion-icon :icon="informationCircle" slot="end"></ion-icon>
  </ion-item>

  <ion-item>
    <ion-label> Large Icon </ion-label>
    <ion-icon :icon="informationCircle" size="large" slot="end"></ion-icon>
  </ion-item>

  <ion-item>
    <ion-label> Small Icon </ion-label>
    <ion-icon :icon="informationCircle" size="small" slot="end"></ion-icon>
  </ion-item>

  <ion-item>
    <ion-icon :icon="star" slot="start"></ion-icon>
    <ion-label> Default Icon </ion-label>
  </ion-item>
</template>

<script lang="ts" setup>
  import { IonButton, IonIcon, IonItem, IonLabel } from '@ionic/vue';
  import { informationCircle, star } from 'ionicons/icons';
</script>
```
