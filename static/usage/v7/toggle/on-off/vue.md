```html
<template>
  <ion-toggle :enable-on-off-labels="true">Enable Notifications</ion-toggle>
</template>

<script lang="ts">
  import { IonToggle } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonToggle },
  });
</script>
```
