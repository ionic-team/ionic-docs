```html
<template>
  <ion-breadcrumbs :max-items="4" @ionCollapsedClick="presentPopover($event)">
    <ion-breadcrumb href="#home">Home</ion-breadcrumb>
    <ion-breadcrumb href="#electronics">Electronics</ion-breadcrumb>
    <ion-breadcrumb href="#photography">Photography</ion-breadcrumb>
    <ion-breadcrumb href="#cameras">Cameras</ion-breadcrumb>
    <ion-breadcrumb href="#film">Film</ion-breadcrumb>
    <ion-breadcrumb href="#35mm">35 mm</ion-breadcrumb>
  </ion-breadcrumbs>
</template>

<script lang="ts">
import { IonBreadcrumb, IonBreadcrumbs, popoverController } from '@ionic/vue';
import Popover from './Popover.vue';

export default {
  components: { IonBreadcrumb, IonBreadcrumbs },
  methods: {
    async presentPopover(ev: Event) {
      const popover = await popoverController.create({
        component: Popover,
        event: ev,
        componentProps: {
          collapsedBreadcrumbs: ev.detail.collapsedBreadcrumbs
        }
      });

      await popover.present();
    },
  },
}
</script>
```