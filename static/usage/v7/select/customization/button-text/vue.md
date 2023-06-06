```html
<template>
  <ion-list>
    <ion-item>
      <ion-select label="Alert Interface" placeholder="Select fruit" ok-text="Choose Fruit" cancel-text="Cancel Choice">
        <ion-select-option value="apples">Apples</ion-select-option>
        <ion-select-option value="oranges">Oranges</ion-select-option>
        <ion-select-option value="bananas">Bananas</ion-select-option>
      </ion-select>
    </ion-item>
    <ion-item>
      <ion-select
        label="Action Sheet Interface"
        interface="action-sheet"
        placeholder="Select fruit"
        cancel-text="Cancel Choice"
      >
        <ion-select-option value="apples">Apples</ion-select-option>
        <ion-select-option value="oranges">Oranges</ion-select-option>
        <ion-select-option value="bananas">Bananas</ion-select-option>
      </ion-select>
    </ion-item>
  </ion-list>
</template>

<script>
  import { IonItem, IonLabel, IonList, IonSelect, IonSelectOption } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonItem, IonLabel, IonList, IonSelect, IonSelectOption },
  });
</script>
```
