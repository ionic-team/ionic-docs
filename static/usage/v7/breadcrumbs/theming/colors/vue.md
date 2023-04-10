```html
<template>
  <ion-breadcrumbs>
    <ion-breadcrumb color="primary" href="#home">Home</ion-breadcrumb>
    <ion-breadcrumb color="primary" href="#electronics">Electronics</ion-breadcrumb>
    <ion-breadcrumb color="primary" href="#cameras">Cameras</ion-breadcrumb>
    <ion-breadcrumb color="primary" href="#film">Film</ion-breadcrumb>
  </ion-breadcrumbs>
</template>

<script lang="ts">
  import { IonBreadcrumb, IonBreadcrumbs } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonBreadcrumb, IonBreadcrumbs },
  });
</script>
```
