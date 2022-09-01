```html
<template>
  <ion-breadcrumbs>
    <ion-breadcrumb href="#home">Home</ion-breadcrumb>
    <ion-breadcrumb href="#electronics">Electronics</ion-breadcrumb>
    <ion-breadcrumb href="#cameras">Cameras</ion-breadcrumb>
    <ion-breadcrumb href="#film">Film</ion-breadcrumb>
  </ion-breadcrumbs>
</template>

<script lang="ts">
  import { IonBreadcrumb, IonBreadcrumbs } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonBreadcrumb, IonBreadcrumbs },
  });
</script>

<style>
  ion-breadcrumb {
    --color: rgb(81, 155, 198);
    --color-active: rgb(150, 112, 220);
    --color-hover: rgb(103, 61, 180);
  }
</style>
```
