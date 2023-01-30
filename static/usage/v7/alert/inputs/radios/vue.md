```html
<template>
  <ion-button id="present-alert">Click Me</ion-button>
  <ion-alert
    trigger="present-alert"
    header="Select your favorite color"
    :buttons="alertButtons"
    :inputs="alertInputs"
  ></ion-alert>
</template>

<script lang="ts">
  import { IonAlert, IonButton } from '@ionic/vue';

  export default {
    components: { IonAlert, IonButton },
    setup() {
      const alertButtons = ['OK'];
      const alertInputs = [
        {
          label: 'Red',
          type: 'radio',
          value: 'red',
        },
        {
          label: 'Blue',
          type: 'radio',
          value: 'blue',
        },
        {
          label: 'Green',
          type: 'radio',
          value: 'green',
        },
      ];

      return { alertButtons, alertInputs };
    },
  };
</script>
```
