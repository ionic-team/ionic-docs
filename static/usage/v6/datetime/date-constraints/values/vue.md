```html
<template>
  <ion-datetime
    minute-values="0,15,30,45"
    day-values="5,10,15,20,25,30"
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
