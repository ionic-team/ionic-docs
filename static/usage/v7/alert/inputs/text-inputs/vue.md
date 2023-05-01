```html
<template>
  <ion-button id="present-alert">Click Me</ion-button>
  <ion-alert
    trigger="present-alert"
    header="Please enter your info"
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
          placeholder: 'Name',
        },
        {
          placeholder: 'Nickname (max 8 characters)',
          attributes: {
            maxlength: 8,
          },
        },
        {
          type: 'number',
          placeholder: 'Age',
          min: 1,
          max: 100,
        },
        {
          type: 'textarea',
          placeholder: 'A little about yourself',
        },
      ];

      return { alertButtons, alertInputs };
    },
  };
</script>
```
