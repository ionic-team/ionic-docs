```html
<template>
  <ion-list>
    <ion-item>
      <ion-input aria-label="Email" value="hi@ionic.io"></ion-input>
    </ion-item>
  </ion-list>
</template>

<script lang="ts">
  import { IonInput, IonItem, IonList } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonInput, IonItem, IonList },
  });
</script>
```
