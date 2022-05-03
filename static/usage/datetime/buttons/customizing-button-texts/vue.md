```html
<template>
  <ion-datetime
    :show-default-buttons="true"
    ok-text="All set"
    cancel-text="Never mind"
  ></ion-datetime>
</template>

<script>
  import { IonDatetime } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonDatetime }
  });
</script>
```
