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

<script lang="ts" setup>
  import { IonAlert, IonButton } from '@ionic/vue';

  const alertButtons = ['OK'];
</script>
```
