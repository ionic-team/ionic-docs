```html
<template>
  <ion-button @click="openPopover">Click Me</ion-button>
</template>

<script lang="ts" setup>
  import { IonButton, popoverController } from '@ionic/vue';
  import Popover from './Popover.vue';

  async function openPopover(ev: Event) {
    const popover = await popoverController.create({
      component: Popover,
      event: ev,
    });
    await popover.present();

    const { role } = await popover.onDidDismiss();
    console.log(`Popover dismissed with role: ${role}`);
  }
</script>
```
