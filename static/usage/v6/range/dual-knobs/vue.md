```html
<template>
  <ion-range :dual-knobs="true" :value="{ lower: 20, upper: 80 }"></ion-range>
</template>

<script lang="ts">
  import { IonContent, IonRange } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonContent, IonRange },
  });
</script>
```
