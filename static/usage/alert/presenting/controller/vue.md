```html
<template>
  <ion-content>
    <ion-button @click="presentAlert">Click Me</ion-button>
    <p>{{ roleMsg }}</p>
  </ion-content>
</template>

<script lang="ts">
import { IonButton, IonContent, alertController } from '@ionic/vue';

export default {
  components: { IonButton, IonContent },
  data() {
    return {
      roleMsg: ''
    };
  },
  methods: {
    async presentAlert() {
      const alert = await alertController.create({
        header: 'Alert',
        subHeader: 'Important message',
        message: 'This is an alert!',
        buttons: ['OK']
      });

      await alert.present();

      const { role } = await alert.onDidDismiss();
      this.roleMsg = `Alert dismissed with role: ${role}`;
    },
  },
}
</script>
```