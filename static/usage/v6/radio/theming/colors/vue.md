```html
<template>
  <ion-radio-group value="primary">
    <ion-radio color="primary" value="primary"></ion-radio>
  </ion-radio-group>
  <ion-radio-group value="secondary">
    <ion-radio color="secondary" value="secondary"></ion-radio>
  </ion-radio-group>
  <ion-radio-group value="tertiary">
    <ion-radio color="tertiary" value="tertiary"></ion-radio>
  </ion-radio-group>
  <ion-radio-group value="success">
    <ion-radio color="success" value="success"></ion-radio>
  </ion-radio-group>
  <ion-radio-group value="warning">
    <ion-radio color="warning" value="warning"></ion-radio>
  </ion-radio-group>
  <ion-radio-group value="danger">
    <ion-radio color="danger" value="danger"></ion-radio>
  </ion-radio-group>
  <ion-radio-group value="light">
    <ion-radio color="light" value="light"></ion-radio>
  </ion-radio-group>
  <ion-radio-group value="medium">
    <ion-radio color="medium" value="medium"></ion-radio>
  </ion-radio-group>
  <ion-radio-group value="dark">
    <ion-radio color="dark" value="dark"></ion-radio>
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
