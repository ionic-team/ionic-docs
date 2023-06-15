```html
<template>
  <ion-select label="Solid select" label-placement="floating" fill="solid">
    <ion-select-option value="apple">Apple</ion-select-option>
    <ion-select-option value="banana">Banana</ion-select-option>
    <ion-select-option value="orange">Orange</ion-select-option>
  </ion-select>

  <br />

  <ion-select label="Outline select" label-placement="floating" fill="outline">
    <ion-select-option value="apple">Apple</ion-select-option>
    <ion-select-option value="banana">Banana</ion-select-option>
    <ion-select-option value="orange">Orange</ion-select-option>
  </ion-select>
</template>

<script lang="ts">
  import { IonSelect, IonSelectOption } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonSelect, IonSelectOption },
  });
</script>
```
