```html
<template>
  <ion-picker>
    <ion-picker-column :value="1">
      <div slot="prefix">$</div>
      <ion-picker-column-option value="" disabled="true">--</ion-picker-column-option>
      <ion-picker-column-option :value="1">1</ion-picker-column-option>
      <ion-picker-column-option :value="2">2</ion-picker-column-option>
      <ion-picker-column-option :value="3">3</ion-picker-column-option>
      <ion-picker-column-option :value="4">4</ion-picker-column-option>
      <ion-picker-column-option :value="5">5</ion-picker-column-option>
      <div slot="suffix">USD</div>
    </ion-picker-column>
  </ion-picker>
</template>

<script setup lang="ts">
  import { IonPicker, IonPickerColumn, IonPickerColumnOption } from '@ionic/vue';
</script>
```
