```html
<template>
  <ion-range :pin="true" :pin-formatter="pinFormatter"></ion-range>
</template>

<script lang="ts">
  import { IonRange } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonRange },
    setup() {
      return {
        pinFormatter: (value: number) => `${value}%`,
      };
    },
  });
</script>
```
