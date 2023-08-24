```html
<template>
  <ion-list>
    <ion-radio-group value="start">
      <ion-item>
        <ion-radio value="start" align="start">Aligned at the Start</ion-radio>
      </ion-item>
    </ion-radio-group>

    <ion-radio-group value="center">
      <ion-item>
        <ion-radio value="center" align="center">Aligned at the Center</ion-radio>
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
