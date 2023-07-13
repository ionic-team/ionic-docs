```html
<template>
  <ion-button id="present-alert">Click Me</ion-button>
  <ion-alert
    trigger="present-alert"
    header="Alert!"
    :buttons="alertButtons"
    @didDismiss="setResult($event)"
  ></ion-alert>
  <p>{{ handlerMessage }}</p>
  <p>{{ roleMessage }}</p>
</template>

<script lang="ts">
  import { ref } from 'vue';
  import { IonAlert, IonButton } from '@ionic/vue';

  export default {
    components: { IonAlert, IonButton },
    setup() {
      const handlerMessage = ref('');
      const roleMessage = ref('');

      const alertButtons = [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            handlerMessage.value = 'Alert canceled';
          },
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            handlerMessage.value = 'Alert confirmed';
          },
        },
      ];

      const setResult = (ev: CustomEvent) => {
        roleMessage.value = `Dismissed with role: ${ev.detail.role}`;
      };

      return {
        handlerMessage,
        roleMessage,
        alertButtons,
        setResult,
      };
    },
  };
</script>
```
