```html
<template>
  <ion-checkbox label-placement="start">Label at the Start</ion-checkbox>

  <br />

  <ion-checkbox label-placement="end">Label at the End</ion-checkbox>

  <br />

  <ion-checkbox label-placement="fixed">Fixed Width Label</ion-checkbox>

  <br />

  <ion-checkbox label-placement="stacked">Stacked Label</ion-checkbox>
</template>

<script lang="ts">
  import { IonCheckbox } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonCheckbox },
  });
</script>
```
