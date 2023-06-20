```html
<template>
  <ion-spinner></ion-spinner>
</template>

<script lang="ts">
  import { IonSpinner } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonSpinner },
  });
</script>

<style scoped>
  ion-spinner {
    width: 100px;
    height: 100px;
  }
</style>
```
