```html
<template>
  <ion-content>
    <ion-button @click="openPopover">Click Me</ion-button>
    <p>{{ roleMsg }}</p>
  </ion-content>
</template>

<script lang="ts">
import { IonButton, IonContent, popoverController } from '@ionic/vue';
import Popover from './Popover.vue';

export default {
  components: { IonButton, IonContent },
  data() {
    return {
      roleMsg: ''
    };
  },
  methods: {
    async openPopover(ev: Event) {
      const popover = await popoverController.create({
        component: Popover,
        event: ev
      });
      await popover.present();

      const { role } = await popover.onDidDismiss();
      this.roleMsg = `Popover dismissed with role: ${role}`;
    },
  },
}
</script>
```