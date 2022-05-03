```html
<template>
  <ion-select placeholder="Select fruit">
    <ion-select-option>Apples</ion-select-option>
    <ion-select-option>Oranges</ion-select-option>
    <ion-select-option>Bananas</ion-select-option>
  </ion-select>
</template>

<script>
  import { IonSelect, IonSelectOption } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonSelect, IonSelectOption },
  });
</script>
```
