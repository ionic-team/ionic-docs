```html
<template>
  <ion-button id="present-alert">Click Me</ion-button>
  <ion-alert
    trigger="present-alert"
    header="A Short Title Is Best"
    sub-header="A Sub Header Is Optional"
    message="A message should be a short, complete sentence."
    :buttons="alertButtons"
  ></ion-alert>
</template>

<script lang="ts" setup>
  import { IonAlert, IonButton } from '@ionic/vue';

  const alertButtons = ['Action'];
</script>
```
