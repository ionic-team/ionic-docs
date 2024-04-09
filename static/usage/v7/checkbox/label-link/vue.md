```html
<template>
  <ion-checkbox>I agree to the <a href="#" @click="$event.stopPropagation()">terms and conditions</a></ion-checkbox>
</template>

<script lang="ts">
  import { IonCheckbox } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonCheckbox },
  });
</script>
```
