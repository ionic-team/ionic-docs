```html
<template>
  <ion-content>
    <ion-button @click="presentAlert">Click Me</ion-button>
  </ion-content>
</template>

<script lang="ts">
import { IonButton, IonContent, alertController } from '@ionic/vue';

export default {
  components: { IonButton, IonContent },
  methods: {
    async presentAlert() {
      const alert = await alertController.create({
        header: 'Select your favorite color',
        buttons: ['OK'],
        inputs: [
          {
            label: 'Red',
            type: 'radio',
            value: 'red'
          },
          {
            label: 'Blue',
            type: 'radio',
            value: 'blue'
          },
          {
            label: 'Green',
            type: 'radio',
            value: 'green'
          }
        ]
      });

      await alert.present();
    },
  },
}
</script>
```