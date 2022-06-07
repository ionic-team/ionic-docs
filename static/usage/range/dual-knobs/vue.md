```html
<template>
  <ion-range :dualKnobs="true" :value="{ lower: 20, upper: 80 }"></ion-range>
</template>

<script lang="ts">
  import { IonRange } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonRange },
  });
</script>
```
