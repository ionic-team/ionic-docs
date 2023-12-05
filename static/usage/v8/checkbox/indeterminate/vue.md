```html
<template>
  <ion-checkbox :indeterminate="true">Indeterminate checkbox</ion-checkbox>
</template>

<script lang="ts">
  import { IonCheckbox } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonCheckbox },
  });
</script>
```
