```html
<template>
  <ion-content>
    <ion-button @click="presentAlert">Click Me</ion-button>
    <p>{{ message }}</p>
  </ion-content>
</template>

<script lang="ts">
import { IonButton, IonContent, alertController } from '@ionic/vue';

export default {
  components: { IonButton, IonContent },
  data() {
    return {
      message: ''
    };
  },
  methods: {
    async presentAlert() {
      const alert = await alertController.create({
        header: 'Alert!',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => { this.message = 'Alert canceled'; }
          },
          {
            text: 'OK',
            handler: () => { this.message = 'Alert confirmed'; }
          }
        ]
      });

      await alert.present();
    },
  },
}
</script>
```