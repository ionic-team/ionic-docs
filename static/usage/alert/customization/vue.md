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
          header: 'Alert!',
          cssClass: 'custom-alert',
          buttons: [
            'OK',
            {
              text: 'Wow!',
              cssClass: 'custom-alert-button'
            }
          ]
        });

        await alert.present();
      },
    },
  }
</script>

<style>
  ion-alert.custom-alert {
    --backdrop-opacity: 0.7;
  }
    
  .custom-alert .alert-wrapper {
    box-shadow: 5px 5px 5px 0 #0000ff;
  }

  .custom-alert .alert-button-group {
    background-color: #d3d3ff;
  }

  button.alert-button.custom-alert-button {
    color: #8600c9;
  }
</style>
```
