```html
<template>
  <ion-datetime :first-day-of-week="1"></ion-datetime>
</template>

<script>
  import { IonDatetime } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonDatetime },
  });
</script>
```
