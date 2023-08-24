```html
<template>
  <ion-checkbox label-placement="stacked" align="start">Aligned to the Start</ion-checkbox>

  <br />

  <ion-checkbox label-placement="stacked" align="center">Aligned to the Center</ion-checkbox>
</template>

<script lang="ts">
  import { IonCheckbox } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: {
      IonCheckbox,
    },
  });
</script>
```
