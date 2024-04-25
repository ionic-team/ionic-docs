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

<script lang="ts" setup>
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

  const logResult = (ev: CustomEvent) => {
    console.log(`Dismissed with role: ${ev.detail.role}`);
  };
</script>
```
