```html
<template>
  <ion-range>
    <div slot="label">Label with <ion-text color="primary">custom HTML</ion-text></div>
  </ion-range>
</template>

<script lang="ts">
  import { IonRange, IonText } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonRange, IonText },
  });
</script>
```
