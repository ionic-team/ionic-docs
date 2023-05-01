```html
<template>
  <ion-input label="Solid input" label-placement="floating" fill="solid" placeholder="Enter text"></ion-input>

  <br />

  <ion-input label="Outline input" label-placement="floating" fill="outline" placeholder="Enter text"></ion-input>
</template>

<script lang="ts">
  import { IonInput } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonInput },
  });
</script>
```
