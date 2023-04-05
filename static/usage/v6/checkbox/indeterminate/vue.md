```html
<template>
  <ion-item>
    <ion-checkbox slot="start" :indeterminate="true"></ion-checkbox>
    <ion-label>Indeterminate checkbox</ion-label>
  </ion-item>
</template>

<script lang="ts">
  import {
    IonCheckbox,
    IonItem,
    IonLabel
  } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: {
      IonCheckbox,
      IonItem,
      IonLabel
    }
  });
</script>
```
