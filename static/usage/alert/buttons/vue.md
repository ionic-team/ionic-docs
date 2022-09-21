```html
<template>
  <ion-button @click="presentAlert">Click Me</ion-button>
  <p>{{ handlerMessage }}</p>
  <p>{{ roleMessage }}</p>
</template>

<script lang="ts">
  import { IonButton, alertController } from '@ionic/vue';

  export default {
    components: { IonButton },
    setup() {
      const presentAlert = async () => {
        const alert = await alertController.create({
          header: 'Alert!',
          buttons: [
            {
              text: 'Cancel',
              role: 'cancel',
              handler: () => {
                this.handlerMessage = 'Alert canceled';
              },
            },
            {
              text: 'OK',
              role: 'confirm',
              handler: () => {
                this.handlerMessage = 'Alert confirmed';
              },
            },
          ],
        });

        await alert.present();

        const { role } = await alert.onDidDismiss();
        this.roleMessage = `Dismissed with role: ${role}`;
      };

      return {
        handlerMessage: '',
        roleMessage: '',
        presentAlert,
      };
    },
  };
</script>
```
