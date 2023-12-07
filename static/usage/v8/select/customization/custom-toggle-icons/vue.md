```html
<template>
  <ion-list>
    <ion-item>
      <ion-select
        interface="popover"
        :toggle-icon="add"
        :expanded-icon="remove"
        aria-label="fruit"
        placeholder="Select fruit"
      >
        <ion-select-option value="apples">Apples</ion-select-option>
        <ion-select-option value="oranges">Oranges</ion-select-option>
        <ion-select-option value="bananas">Bananas</ion-select-option>
      </ion-select>
    </ion-item>
  </ion-list>
</template>

<script>
  import { IonItem, IonList, IonSelect, IonSelectOption } from '@ionic/vue';
  import { add, remove } from 'ionicons/icons';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonItem, IonList, IonSelect, IonSelectOption },
    setup() {
      return { add, remove };
    },
  });
</script>
```
