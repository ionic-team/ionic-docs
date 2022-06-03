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

<script lang="ts">
  import { IonBreadcrumb, IonBreadcrumbs, IonIcon } from '@ionic/vue';
  import { defineComponent } from 'vue';
  import { arrowForwardCircle } from 'ionicons/icons';

  export default defineComponent({
    components: { IonBreadcrumb, IonBreadcrumbs, IonIcon },
    setup() {
      return { arrowForwardCircle };
    }
  });
</script>
```
