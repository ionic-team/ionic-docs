```html
<template>
  <ion-list>
    <ion-item>
      <ion-checkbox justify="start">Packed at the Start of Line</ion-checkbox>
    </ion-item>

    <ion-item>
      <ion-checkbox justify="end">Packed at the End of Line</ion-checkbox>
    </ion-item>

    <ion-item>
      <ion-checkbox justify="space-between">Space Between Label and Control</ion-checkbox>
    </ion-item>
  </ion-list>
</template>

<script lang="ts">
  import { IonCheckbox, IonItem, IonList } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonCheckbox, IonItem, IonList },
  });
</script>
```
