```html
<template>
  <ion-button id="open-toast">Open Toast</ion-button>
  <ion-toast
    trigger="open-toast"
    message="Hello World!"
    :duration="3000"
    :buttons="toastButtons"
    @didDismiss="handleDismiss($event)"
  ></ion-toast>
</template>

<script setup lang="ts">
  import { IonButton, IonToast } from '@ionic/vue';

  const toastButtons = [
    {
      text: 'More Info',
      role: 'info',
      handler: () => {
        console.log('More Info clicked');
      },
    },
    {
      text: 'Dismiss',
      role: 'cancel',
      handler: () => {
        console.log('Dismiss clicked');
      },
    },
  ];

  const handleDismiss = (event: CustomEvent) => {
    const { role } = event.detail;
    console.log(`Dismissed with role: ${role}`);
  };
</script>
```
