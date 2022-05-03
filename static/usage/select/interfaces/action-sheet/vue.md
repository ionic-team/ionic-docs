```html
<template>
  <ion-select interface="action-sheet" placeholder="Select fruit">
    <ion-select-option value="apples">Apples</ion-select-option>
    <ion-select-option value="oranges">Oranges</ion-select-option>
    <ion-select-option value="bananas">Bananas</ion-select-option>
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
