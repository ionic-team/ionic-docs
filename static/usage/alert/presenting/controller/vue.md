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
        header: 'Alert',
        subHeader: 'Important message',
        message: 'This is an alert!',
        buttons: ['OK']
      });

      await alert.present();
    },
  },
}
</script>
```