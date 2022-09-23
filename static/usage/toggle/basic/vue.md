```html
<template>
  <ion-toggle></ion-toggle>
  <ion-toggle :checked="true"></ion-toggle>
  <ion-toggle :disabled="true"></ion-toggle>
  <ion-toggle :disabled="true" :checked="true"></ion-toggle>
</template>

<script lang="ts">
  import { IonToggle } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonToggle },
  });
</script>
```
