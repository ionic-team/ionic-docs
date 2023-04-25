```html
<template>
  <ion-button @click="openPopover">Click Me</ion-button>
  <p>{{ roleMsg }}</p>
</template>

<script lang="ts">
  import { IonButton, popoverController } from '@ionic/vue';
  import Popover from './Popover.vue';

  export default {
    components: { IonButton },
    data() {
      return {
        roleMsg: '',
      };
    },
    methods: {
      async openPopover(ev: Event) {
        const popover = await popoverController.create({
          component: Popover,
          event: ev,
        });
        await popover.present();

        const { role } = await popover.onDidDismiss();
        this.roleMsg = `Popover dismissed with role: ${role}`;
      },
    },
  };
</script>
```
