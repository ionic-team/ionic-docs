```html
<template>
  <ion-toggle label-placement="start">Label at the Start</ion-toggle><br /><br />
  <ion-toggle label-placement="end">Label at the End</ion-toggle><br /><br />
  <ion-toggle label-placement="fixed">Fixed Width Label</ion-toggle><br /><br />
  <ion-toggle label-placement="stacked">Stacked Label</ion-toggle>
</template>

<script lang="ts">
  import { IonToggle } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonToggle },
  });
</script>
```
