```html
<template>
  <ion-select interface="popover" placeholder="Select fruit">
    <IonSelectOption value="apples">Apples</IonSelectOption>
    <IonSelectOption value="oranges">Oranges</IonSelectOption>
    <IonSelectOption value="bananas">Bananas</IonSelectOption>
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
