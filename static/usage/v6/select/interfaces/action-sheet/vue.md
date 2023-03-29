```html
<template>
  <ion-list>
    <ion-item>
      <ion-select interface="action-sheet" placeholder="Select fruit">
        <ion-select-option value="apples">Apples</ion-select-option>
        <ion-select-option value="oranges">Oranges</ion-select-option>
        <ion-select-option value="bananas">Bananas</ion-select-option>
      </ion-select>
    </ion-item>
  </ion-list>
</template>

<script>
  import { IonList, IonItem, IonSelect, IonSelectOption } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonList, IonItem, IonSelect, IonSelectOption },
  });
</script>
```
