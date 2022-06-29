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
          header: 'Are you sure?',
          cssClass: 'custom-alert',
          buttons: [
            'No',
            {
              text: 'Yes, I\'m sure',
              cssClass: 'alert-button-danger'
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

  .custom-alert .alert-button-group {
    padding: 8px;
  }

  button.alert-button.alert-button-danger {
    background-color: var(--ion-color-danger);
    color: var(--ion-color-danger-contrast);
  }

  .md button.alert-button.alert-button-danger {
    border-radius: 5px;
  }

  .ios button.alert-button.alert-button-danger {
    border-bottom-right-radius: 5px;
    border-top-right-radius: 5px;
  }
</style>
```
