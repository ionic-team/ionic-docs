```html
<template>
  <ion-button @click="presentToast">Click Me</ion-button>
</template>

<script lang="ts">
  import { IonButton, toastController } from '@ionic/vue';

  export default {
    components: { IonButton },
    methods: {
      async presentToast() {
        const toast = await toastController.create({
          message: 'Hello Styled World!',
          duration: 3000,
          cssClass: 'custom-toast',
          buttons: [
            {
              text: 'Dismiss',
              role: 'cancel'
            }
          ],
        });

        await toast.present();
      },
    },
  };
</script>

<style>
  ion-toast.custom-toast {
    --background: darkblue;
    --button-color: lightblue;
    --color: white;
  }
    
  ion-toast.custom-toast::part(message) {
    font-style: italic;
  }

  ion-toast.custom-toast::part(button) {
    border-left: 1px solid white;
  }
</style>
```
