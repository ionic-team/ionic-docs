```html
<template>
  <ion-toggle label-placement="stacked" align="start">Aligned to the Start</ion-toggle><br /><br />
  <ion-toggle label-placement="stacked" align="center">Aligned to the Center</ion-toggle>
</template>

<script lang="ts">
  import { IonToggle } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: {
      IonToggle,
    },
  });
</script>
```
