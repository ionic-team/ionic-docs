```html
<template>
  <ion-radio-group value="strawberries">
    <ion-radio value="grapes">Grapes</ion-radio><br />
    <ion-radio value="strawberries">Strawberries</ion-radio><br />
    <ion-radio value="pineapple">Pineapple</ion-radio><br />
    <ion-radio value="cherries">Cherries</ion-radio>
  </ion-radio-group>
</template>

<script lang="ts">
  import { IonRadio, IonRadioGroup } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonRadio, IonRadioGroup },
  });
</script>
```
