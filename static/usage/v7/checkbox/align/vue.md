```html
<template>
  <ion-checkbox label-placement="stacked" align="start">Enable Notifications</ion-checkbox>
</template>

<script lang="ts">
  import { IonCheckbox } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: {
      IonCheckbox,
    },
  });
</script>
```
