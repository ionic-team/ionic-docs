```html
<template>
  <ion-button @click="presentAlert">Click Me</ion-button>
</template>

<script lang="ts">
  import { IonButton, alertController } from '@ionic/vue';

  export default {
    components: { IonButton },
    setup() {
      const presentAlert = async () => {
        const alert = await alertController.create({
          header: 'Select your favorite color',
          buttons: ['OK'],
          inputs: [
            {
              label: 'Red',
              type: 'radio',
              value: 'red',
            },
            {
              label: 'Blue',
              type: 'radio',
              value: 'blue',
            },
            {
              label: 'Green',
              type: 'radio',
              value: 'green',
            },
          ],
        });

        await alert.present();
      };

      return { presentAlert };
    },
  };
</script>
```
