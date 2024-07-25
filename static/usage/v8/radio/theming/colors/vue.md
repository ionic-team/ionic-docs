```html
<template>
  <ion-radio-group value="primary">
    <ion-radio aria-label="Primary" color="primary" value="primary"></ion-radio>
  </ion-radio-group>
  <ion-radio-group value="secondary">
    <ion-radio aria-label="Secondary" color="secondary" value="secondary"></ion-radio>
  </ion-radio-group>
  <ion-radio-group value="tertiary">
    <ion-radio aria-label="Tertiary" color="tertiary" value="tertiary"></ion-radio>
  </ion-radio-group>
  <ion-radio-group value="success">
    <ion-radio aria-label="Success" color="success" value="success"></ion-radio>
  </ion-radio-group>
  <ion-radio-group value="warning">
    <ion-radio aria-label="Warning" color="warning" value="warning"></ion-radio>
  </ion-radio-group>
  <ion-radio-group value="danger">
    <ion-radio aria-label="Danger" color="danger" value="danger"></ion-radio>
  </ion-radio-group>
  <ion-radio-group value="light">
    <ion-radio aria-label="Light" color="light" value="light"></ion-radio>
  </ion-radio-group>
  <ion-radio-group value="medium">
    <ion-radio aria-label="Medium" color="medium" value="medium"></ion-radio>
  </ion-radio-group>
  <ion-radio-group value="dark">
    <ion-radio aria-label="Dark" color="dark" value="dark"></ion-radio>
  </ion-radio-group>
</template>

<script lang="ts">
  import { IonRadio, IonRadioGroup } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonRadio, IonRadioGroup },
  });
</script>
```
