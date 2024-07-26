```html
<template>
  <ion-datetime>
    <span slot="title">Select a Reservation Date</span>
  </ion-datetime>
</template>

<script lang="ts">
  import { IonDatetime } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonDatetime },
  });
</script>
```
