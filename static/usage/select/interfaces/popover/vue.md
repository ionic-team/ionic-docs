```html
<template>
  <ion-list>
    <ion-item>
      <ion-select interface="popover" placeholder="Select fruit">
        <IonSelectOption value="apples">Apples</IonSelectOption>
        <IonSelectOption value="oranges">Oranges</IonSelectOption>
        <IonSelectOption value="bananas">Bananas</IonSelectOption>
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
