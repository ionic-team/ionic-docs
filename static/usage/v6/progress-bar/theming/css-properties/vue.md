```html
<template>
  <ion-progress-bar :value=".25" :buffer=".5"></ion-progress-bar>
  <ion-progress-bar type="indeterminate"></ion-progress-bar>
</template>

<script lang="ts">
  import { IonProgressBar } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonProgressBar }
  });
</script>

<style scoped>
  ion-progress-bar {
    --background: #f3e895;
    --progress-background: #09c567;
  }
</style>
```
