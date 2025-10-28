```html
<template>
  <ion-button id="present-alert">Click Me</ion-button>
  <ion-alert
    trigger="present-alert"
    header="Alert!"
    :buttons="alertButtons"
    @didDismiss="logResult($event)"
  ></ion-alert>
</template>

<script setup lang="ts">
  import { IonAlert, IonButton } from '@ionic/vue';

  const alertButtons = [
    {
      text: 'Cancel',
      role: 'cancel',
      handler: () => {
        console.log('Alert canceled');
      },
    },
    {
      text: 'OK',
      role: 'confirm',
      handler: () => {
        console.log('Alert confirmed');
      },
    },
  ];

  const logResult = (event: CustomEvent) => {
    console.log(`Dismissed with role: ${event.detail.role}`);
  };
</script>
```
