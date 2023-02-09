```html
<template>
  <ion-button id="present-alert">Click Me</ion-button>
  <ion-alert
    trigger="present-alert"
    header="Alert"
    sub-header="Important message"
    message="This is an alert!"
    :buttons="alertButtons"
  ></ion-alert>
</template>

<script lang="ts">
  import { IonAlert, IonButton } from '@ionic/vue';

  export default {
    components: { IonAlert, IonButton },
    setup() {
      const alertButtons = ['OK'];

      return { alertButtons };
    },
  };
</script>
```
