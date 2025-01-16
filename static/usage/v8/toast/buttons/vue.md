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

<script lang="ts">
  import { IonButton, IonToast } from '@ionic/vue';
  import { defineComponent, ref } from 'vue';

  export default defineComponent({
    components: { IonButton, IonToast },
    setup() {
      const handlerMessage = ref('');
      const roleMessage = ref('');
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

      return {
        toastButtons,
        handleDismiss,
      };
    },
  });
</script>
```
