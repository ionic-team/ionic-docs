```html
<template>
  <ion-content>
    <ion-range :pin="true" :pin-formatter="pinFormatter"></ion-range>
  </ion-content>
</template>

<script lang="ts">
  import { IonContent, IonRange } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonContent, IonRange },
    setup() {
      return {
        pinFormatter: (value: number) => `${value}%`,
      };
    },
  });
</script>
```
