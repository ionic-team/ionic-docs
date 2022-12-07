```html
<template>
  <ion-datetime
    value="2022-04-21T00:00:00"
    min="2022-03-01T00:00:00"
    max="2022-05-31T23:59:59"
  ></ion-datetime>
</template>

<script lang="ts">
  import { IonDatetime } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonDatetime },
  });
</script>
```
