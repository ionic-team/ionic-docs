```html
<template>
  <ion-button @click="presentBaselineToast()">Open Baseline Layout Toast</ion-button>
  <ion-button @click="presentStackedToast()">Click Stacked Layout Toast</ion-button>
</template>

<script lang="ts">
  import { IonButton, toastController } from '@ionic/vue';
  import type { ToastOptions } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonButton },
    setup() {
      const presentToast = async (opts: ToastOptions) => {
        const toast = await toastController.create(opts);

        await toast.present();
      };

      const presentBaselineToast = async () => {
        await presentToast({
          duration: 3000,
          message: 'This is a toast with a long message and a button that appears on the same line.',
          buttons: [{ text: 'Action With Long Text' }],
        });
      };

      const presentStackedToast = async () => {
        await presentToast({
          duration: 3000,
          message: 'This is a toast with a long message and a button that appears on the next line.',
          buttons: [{ text: 'Action With Long Text' }],
          layout: 'stacked',
        });
      };

      return { presentBaselineToast, presentStackedToast };
    },
  });
</script>
```
