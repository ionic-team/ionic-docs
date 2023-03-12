```html
<template>
  <ion-range aria-label="Range with ticks" :ticks="true" :snaps="true" :min="0" :max="10"></ion-range>
</template>

<script lang="ts">
  import { IonRange } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonRange },
  });
</script>
```
