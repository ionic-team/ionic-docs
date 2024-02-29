```html
<template>
  <ion-list>
    <ion-item>
      <ion-select
        aria-label="Fruit"
        placeholder="Select fruit"
        @ionChange="handleChange($event)"
        @ionCancel="handleCancel()"
        @ionDismiss="handleDismiss()"
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
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonItem, IonList, IonSelect, IonSelectOption },
    methods: {
      handleChange(ev) {
        console.log('ionChange fired with value: ' + ev.detail.value);
      },
      handleCancel() {
        console.log('ionCancel fired');
      },
      handleDismiss() {
        console.log('ionDismiss fired');
      },
    },
  });
</script>
```
