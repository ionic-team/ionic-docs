```html
<template>
  <ion-datetime locale="en-GB" hour-cycle="h12"></ion-datetime>
</template>

<script lang="ts">
  import { IonDatetime } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonDatetime },
  });
</script>
```
