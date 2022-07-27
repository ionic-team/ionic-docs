```html
<template>
  <ion-datetime
    presentation="date"
    :multiple="true"
    :value="['2022-06-03', '2022-06-13', '2022-06-29']"
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
