```html
<template>
  <ion-list>
    <ion-radio-group value="start">
      <ion-item>
        <ion-radio value="start" justify="start">Packed at the Start of Line</ion-radio>
      </ion-item>
    </ion-radio-group>

    <ion-radio-group value="end">
      <ion-item>
        <ion-radio value="end" justify="end">Packed at the End of Line</ion-radio>
      </ion-item>
    </ion-radio-group>

    <ion-radio-group value="space-between">
      <ion-item>
        <ion-radio value="space-between" justify="space-between">Space Between Label and Control</ion-radio>
      </ion-item>
    </ion-radio-group>
  </ion-list>
</template>

<script lang="ts">
  import { IonItem, IonList, IonRadio, IonRadioGroup } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonItem, IonList, IonRadio, IonRadioGroup },
  });
</script>
```
