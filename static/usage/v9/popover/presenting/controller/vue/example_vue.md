```html
<template>
  <ion-button @click="openPopover">Click Me</ion-button>
</template>

<script setup lang="ts">
  import { IonButton, popoverController } from '@ionic/vue';
  import Popover from './Popover.vue';

  const openPopover = async (event: Event) => {
    const popover = await popoverController.create({
      component: Popover,
      event: event,
    });
    await popover.present();

    const { role } = await popover.onDidDismiss();
    console.log(`Popover dismissed with role: ${role}`);
  };
</script>
```
