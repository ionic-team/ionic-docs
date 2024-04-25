```html
<template>
  <ion-radio-group value="start">
    <ion-radio value="start" label-placement="start">Label at the Start</ion-radio>
  </ion-radio-group>

  <br />

  <ion-radio-group value="end">
    <ion-radio value="end" label-placement="end">Label at the End</ion-radio>
  </ion-radio-group>

  <br />

  <ion-radio-group value="fixed">
    <ion-radio value="fixed" label-placement="fixed">Fixed Width Label</ion-radio>
  </ion-radio-group>

  <br />

  <ion-radio-group value="stacked">
    <ion-radio value="stacked" label-placement="stacked">Stacked Label</ion-radio>
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
