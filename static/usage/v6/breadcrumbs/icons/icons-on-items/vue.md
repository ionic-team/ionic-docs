```html
<template>
  <ion-label>Icons at Start</ion-label>
  <ion-breadcrumbs>
    <ion-breadcrumb href="#home">
      <ion-icon slot="start" :icon="home"></ion-icon>
      Home
    </ion-breadcrumb>
    <ion-breadcrumb href="#electronics">
      <ion-icon slot="start" :icon="flash"></ion-icon>
      Electronics
    </ion-breadcrumb>
    <ion-breadcrumb href="#cameras">
      <ion-icon slot="start" :icon="camera"></ion-icon>
      Cameras
    </ion-breadcrumb>
    <ion-breadcrumb href="#film">
      <ion-icon slot="start" :icon="film"></ion-icon>
      Film
    </ion-breadcrumb>
  </ion-breadcrumbs>

  <ion-label class="ion-margin-top">Icons at End</ion-label>
  <ion-breadcrumbs>
    <ion-breadcrumb href="#home">
      Home
      <ion-icon slot="end" :icon="home"></ion-icon>
    </ion-breadcrumb>
    <ion-breadcrumb href="#electronics">
      Electronics
      <ion-icon slot="end" :icon="flash"></ion-icon>
    </ion-breadcrumb>
    <ion-breadcrumb href="#cameras">
      Cameras
      <ion-icon slot="end" :icon="camera"></ion-icon>
    </ion-breadcrumb>
    <ion-breadcrumb href="#film">
      Film
      <ion-icon slot="end" :icon="film"></ion-icon>
    </ion-breadcrumb>
  </ion-breadcrumbs>
</template>

<script lang="ts">
  import { IonBreadcrumb, IonBreadcrumbs, IonIcon, IonLabel } from '@ionic/vue';
  import { defineComponent } from 'vue';
  import { camera, film, flash, home } from 'ionicons/icons';

  export default defineComponent({
    components: { IonBreadcrumb, IonBreadcrumbs, IonIcon, IonLabel },
    setup() {
      return { camera, film, flash, home };
    },
  });
</script>
```
